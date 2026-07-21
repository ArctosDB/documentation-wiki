#!/usr/bin/env python3
"""
fix-links.py
This script converts bare internal path links to Jekyll {% link %} syntax. It also
validates existing links. Run from your local repo root.

Handles:
  [text](/documentation/page)         → [text]({% link _documentation/page.markdown %})
  [text](/how_to/page.html)           → [text]({% link _how_to/page.markdown %})
  [text](/documentation/page#anchor)  → [text]({% link _documentation/page.markdown %}#anchor)
  [text](https://handbook.arctosdb.org/documentation/page) → same

Also validates:
  - Unresolved links (target file not found)     → [unresolved-link]
  - Broken anchors (heading ID not in target)    → [broken-anchor]
  - Bare handbook URLs (not converted)           → [bare-url]

File existence is implicitly validated: the URL map is built from files on disk,
so any resolved link points to a real file.

Usage (run from repo root):
  python fix-links.py           # dry run — shows changes, writes nothing
  python fix-links.py --apply   # writes changes to files
"""

import os
import re
import sys

COLLECTIONS = {
    '_documentation': '/documentation',
    '_how_to': '/how_to',
    '_best_practices': '/best_practices',
}
APPLY = '--apply' in sys.argv


# ---------------------------------------------------------------------------
# URL map
# ---------------------------------------------------------------------------

def get_permalink(content):
    """Extract permalink value from YAML front matter, without pyyaml dependency."""
    if not content.startswith('---'):
        return None
    end = content.find('\n---', 3)
    if end == -1:
        return None
    for line in content[3:end].splitlines():
        if line.startswith('permalink:'):
            return line.split(':', 1)[1].strip().strip('"\'')
    return None


def build_url_map():
    """
    Build a dict mapping URL paths → repo-relative file paths.
    Both /collection/slug and /collection/slug.html are mapped to the same file.
    Returns (url_map, url_map_lower) where the second is a case-insensitive fallback.
    """
    url_map = {}
    for collection_dir, url_base in COLLECTIONS.items():
        if not os.path.isdir(collection_dir):
            print(f"  Warning: directory {collection_dir!r} not found, skipping.")
            continue
        for filename in os.listdir(collection_dir):
            if not filename.endswith('.markdown'):
                continue
            filepath = os.path.join(collection_dir, filename)
            with open(filepath, encoding='utf-8') as f:
                content = f.read()
            permalink = get_permalink(content)
            if permalink:
                slug = permalink.rstrip('/')
                url_map[slug] = filepath
                if not slug.endswith('.html'):
                    url_map[slug + '.html'] = filepath
            else:
                slug = os.path.splitext(filename)[0]
                url = f"{url_base}/{slug}"
                url_map[url] = filepath
                url_map[url + '.html'] = filepath
    # Case-insensitive fallback: last writer wins for duplicates, which is fine
    url_map_lower = {k.lower(): v for k, v in url_map.items()}
    return url_map, url_map_lower


def resolve_url(raw_path, url_map, url_map_lower):
    """
    Look up a URL path in the map. Tries, in order:
      1. Exact match
      2. Exact match without .html suffix
      3. Case-insensitive match
      4. Case-insensitive match without .html suffix
      5. Strip 'How-to-' prefix from /how_to/ slugs (files were renamed
         e.g. How-to-Create-Foo.markdown → Create-Foo.markdown)
    Returns the repo-relative filepath, or None if unresolved.
    """
    path = raw_path.rstrip('/')
    path_no_ext = path[:-5] if path.endswith('.html') else path

    result = (
        url_map.get(path)
        or url_map.get(path_no_ext)
        or url_map_lower.get(path.lower())
        or url_map_lower.get(path_no_ext.lower())
    )
    if result:
        return result

    # Fallback: strip 'How-to-' prefix from /how_to/ slugs (case-insensitive prefix match)
    m = re.match(r'(/how_to/)how-to-(.+)', path_no_ext, re.IGNORECASE)
    if m:
        stripped = m.group(1) + m.group(2)
        result = url_map.get(stripped) or url_map_lower.get(stripped.lower())
        if result:
            return result

    return None


# ---------------------------------------------------------------------------
# Anchor validation
# ---------------------------------------------------------------------------

_heading_id_cache = {}


def extract_heading_ids(filepath):
    """
    Extract all heading IDs from a Markdown file using Kramdown's auto_id rules.
    Also handles explicit {#id} IAL overrides.
    Results are cached so each file is read only once.
    Returns a frozenset of ID strings.
    """
    if filepath in _heading_id_cache:
        return _heading_id_cache[filepath]

    try:
        with open(filepath, encoding='utf-8') as f:
            lines = f.read().splitlines()
    except OSError:
        _heading_id_cache[filepath] = frozenset()
        return _heading_id_cache[filepath]

    ids = []
    id_counts = {}
    i = 0
    while i < len(lines):
        line = lines[i]
        heading_text = None

        # ATX heading: ## Heading text
        m = re.match(r'^#{1,6}\s+(.+?)(?:\s+#+)?\s*$', line)
        if m:
            heading_text = m.group(1).strip()
        # Setext heading: text followed by === or ---
        elif (i + 1 < len(lines)
              and re.match(r'^[=-]+\s*$', lines[i + 1])
              and line.strip()
              and not line.startswith('---')):   # don't confuse front-matter fence
            heading_text = line.strip()
            i += 1  # skip underline

        if heading_text is not None:
            # Explicit {#id} IAL overrides auto-generation
            explicit = re.search(r'\{#([\w-]+)\}', heading_text)
            if explicit:
                hid = explicit.group(1)
            else:
                text = heading_text
                # Remove IAL markers
                text = re.sub(r'\{[^}]*\}', '', text)
                # Remove image/link syntax, keep alt/label text
                text = re.sub(r'!?\[([^\]]*)\]\([^)]*\)', r'\1', text)
                text = re.sub(r'!?\[([^\]]*)\]\[[^\]]*\]', r'\1', text)
                # Remove inline HTML
                text = re.sub(r'<[^>]+>', '', text)
                # Remove backtick code spans (keep content)
                text = re.sub(r'`+([^`]*)`+', r'\1', text)
                # Remove bold/italic markers
                text = re.sub(r'[*_]{1,3}', '', text)
                # Kramdown: remove chars that aren't \w (alphanum + _), whitespace, or hyphen
                text = re.sub(r'[^\w\s-]', '', text)
                # Replace whitespace runs with a single hyphen
                text = re.sub(r'\s+', '-', text.strip())
                hid = text.lower().strip('-')
                if not hid:
                    hid = 'section'

            # Kramdown disambiguates duplicate IDs with -1, -2, …
            if hid in id_counts:
                id_counts[hid] += 1
                ids.append(f"{hid}-{id_counts[hid]}")
            else:
                id_counts[hid] = 0
                ids.append(hid)

        i += 1

    result = frozenset(ids)
    _heading_id_cache[filepath] = result
    return result


# ---------------------------------------------------------------------------
# Regexes
# ---------------------------------------------------------------------------

# Match ](/collection/path) or ](//collection/path) with optional .html and optional #anchor.
LINK_RE = re.compile(
    r'\]\((?://)?'                        # ]( with optional double-slash typo
    r'(/(?:documentation|how_to|best_practices)/[^)#\s]*)'  # path
    r'(#[^)]*)?'                          # optional #anchor
    r'\)'
)

# Match [text](https?://handbook.arctosdb.org/collection/path)
HANDBOOK_LINK_RE = re.compile(
    r'\]\(https?://handbook\.arctosdb\.org'
    r'(/(?:documentation|how_to|best_practices)/[^)#\s]*)'
    r'(#[^)]*)?'
    r'\)'
)

# Match bare http(s)://handbook.arctosdb.org/collection/path (NOT inside a link target)
HANDBOOK_BARE_RE = re.compile(
    r'(?<!\]\()https?://handbook\.arctosdb\.org'
    r'(/(?:documentation|how_to|best_practices)/[^\s)\]#]*)'
    r'(#[^\s)\]]*)?'
)

# Match already-converted {% link path %}#anchor patterns for validation
EXISTING_LINK_RE = re.compile(
    r'\{%-?\s*link\s+'      # {% link
    r'([^\s%]+)'            # file path (no spaces or %)
    r'\s*-?%\}'             # %}
    r'(#[^\s)\]"\'<]*)?'   # optional #anchor immediately after %}
)


# ---------------------------------------------------------------------------
# File processing
# ---------------------------------------------------------------------------

def fix_file(filepath, url_map, url_map_lower):
    """
    Scan a file for internal links and replace them with Jekyll {% link %} syntax.
    Returns (new_content, replacements_list, issues_list).
    issues_list entries are (tag, detail) tuples where tag is one of:
      'unresolved-link', 'broken-anchor', 'bare-url'
    """
    with open(filepath, encoding='utf-8') as f:
        original_content = f.read()
    content = original_content

    replacements = []
    issues = []

    def make_replacer(label):
        def replace(match):
            raw_path = match.group(1)
            anchor   = match.group(2) or ''
            target = resolve_url(raw_path, url_map, url_map_lower)
            if target:
                # Validate anchor if present
                if anchor:
                    anchor_id = anchor.lstrip('#')
                    heading_ids = extract_heading_ids(target)
                    if anchor_id not in heading_ids:
                        issues.append(('broken-anchor',
                                       f"{raw_path}{anchor} → {target}"))
                new_link = f"]({{% link {target} %}}{anchor})"
                replacements.append((match.group(0), new_link))
                return new_link
            else:
                issues.append(('unresolved-link', f"[{label}] {raw_path}{anchor}"))
                return match.group(0)
        return replace

    # Pass 1: relative paths  ](/collection/path)
    content = LINK_RE.sub(make_replacer('relative'), content)
    # Pass 2: absolute handbook URLs  ](https://handbook.arctosdb.org/collection/path)
    content = HANDBOOK_LINK_RE.sub(make_replacer('absolute-link'), content)
    # Pass 3: bare handbook URLs — report only, do not replace
    for m in HANDBOOK_BARE_RE.finditer(content):
        issues.append(('bare-url', m.group(0)))

    # Pass 4: validate pre-existing {% link %} tags in the ORIGINAL content.
    # Run on original so we don't double-report anchors already caught in passes 1 & 2.
    for m in EXISTING_LINK_RE.finditer(original_content):
        link_path = m.group(1)
        anchor    = m.group(2) or ''
        if not os.path.exists(link_path):
            issues.append(('link-tag-bad-file',
                           f"{{% link {link_path} %}} — file not found"))
        elif anchor:
            anchor_id = anchor.lstrip('#')
            heading_ids = extract_heading_ids(link_path)
            if anchor_id not in heading_ids:
                issues.append(('broken-anchor',
                               f"{link_path}{anchor} (existing {{% link %}} tag)"))

    return content, replacements, issues


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("Building URL map...")
    url_map, url_map_lower = build_url_map()
    print(f"  {len(url_map)} URL entries mapped ({len(url_map)//2} files)\n")

    total_replaced = 0
    all_issues = []   # (filepath, tag, detail)

    for collection_dir in COLLECTIONS:
        if not os.path.isdir(collection_dir):
            continue
        for filename in sorted(os.listdir(collection_dir)):
            if not filename.endswith('.markdown'):
                continue
            filepath = os.path.join(collection_dir, filename)
            new_content, replacements, issues = fix_file(filepath, url_map, url_map_lower)

            if replacements:
                print(f"{filepath}  ({len(replacements)} change{'s' if len(replacements)>1 else ''})")
                for old, new in replacements:
                    print(f"  - {old}")
                    print(f"  + {new}")
                total_replaced += len(replacements)
                if APPLY:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

            for tag, detail in issues:
                all_issues.append((filepath, tag, detail))

    print(f"\n{'='*60}")
    print(f"Links replaced: {total_replaced}")

    # Group issues by tag for readability
    for tag in ('unresolved-link', 'link-tag-bad-file', 'broken-anchor', 'bare-url'):
        matching = [(fp, d) for fp, t, d in all_issues if t == tag]
        if matching:
            print(f"\n[{tag}] — {len(matching)} item(s):")
            for fpath, detail in matching:
                print(f"  {fpath}: {detail}")

    if not APPLY:
        print("\nDry run complete. Run with --apply to write changes.")
    else:
        print("Changes written.")


if __name__ == '__main__':
    main()