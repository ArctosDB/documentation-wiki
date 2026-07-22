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

Special case — links inside {% include %} content parameters:
  {% link %} inside {% include %} breaks Liquid (the %} closes the outer tag).
  {{ }} expressions also break Jekyll 3.x's include parameter parser.
  These are automatically converted to plain relative URLs instead:
  [text](/how_to/page)  →  [text](/how_to/page)   (kept as-is or resolved)

Also validates:
  - Unresolved links (target file not found)              → [unresolved-link]
  - Links inside {% include %} params (auto-converted to /path) → [include-param-link]
  - Pre-existing {% link %} inside {% include %} params        → [include-param-link]
  - Broken anchors (heading ID not in target)             → [broken-anchor]
  - Bare handbook URLs (not converted)                    → [bare-url]
  - {% link %} tags pointing to nonexistent files         → [link-tag-bad-file]

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
    Build dicts mapping URL paths ↔ repo-relative file paths.
    Returns (url_map, url_map_lower, filepath_to_url) where:
      url_map          — exact URL → filepath
      url_map_lower    — lowercased URL → filepath (case-insensitive fallback)
      filepath_to_url  — filepath → canonical URL path (no .html, for | relative_url)
    """
    url_map = {}
    filepath_to_url = {}
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
                # Canonical URL: strip .html if present
                filepath_to_url[filepath] = slug[:-5] if slug.endswith('.html') else slug
            else:
                slug = os.path.splitext(filename)[0]
                url = f"{url_base}/{slug}"
                url_map[url] = filepath
                url_map[url + '.html'] = filepath
                filepath_to_url[filepath] = url
    url_map_lower = {k.lower(): v for k, v in url_map.items()}
    return url_map, url_map_lower, filepath_to_url


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

    # Fallback: strip 'How-to-' prefix from /how_to/ slugs (case-insensitive)
    m = re.match(r'(/how_to/)how-to-(.+)', path_no_ext, re.IGNORECASE)
    if m:
        stripped = m.group(1) + m.group(2)
        result = url_map.get(stripped) or url_map_lower.get(stripped.lower())
        if result:
            return result

    return None


# ---------------------------------------------------------------------------
# Include-tag span detection
# ---------------------------------------------------------------------------

def find_include_spans(content):
    """
    Return list of (start, end) character positions for {% include ... %} tags.
    Used to detect when a link falls inside an include parameter — in which case
    {% link %} syntax would prematurely close the include tag.
    """
    spans = []
    for m in re.finditer(r'\{%-?\s*include\b', content):
        end = content.find('%}', m.end())
        if end != -1:
            spans.append((m.start(), end + 2))
    return spans


def in_include_span(pos, spans):
    return any(start <= pos < end for start, end in spans)


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
              and not line.startswith('---')):
            heading_text = line.strip()
            i += 1  # skip underline

        if heading_text is not None:
            # Explicit {#id} IAL overrides auto-generation
            explicit = re.search(r'\{#([\w-]+)\}', heading_text)
            if explicit:
                hid = explicit.group(1)
            else:
                text = heading_text
                text = re.sub(r'\{[^}]*\}', '', text)
                text = re.sub(r'!?\[([^\]]*)\]\([^)]*\)', r'\1', text)
                text = re.sub(r'!?\[([^\]]*)\]\[[^\]]*\]', r'\1', text)
                text = re.sub(r'<[^>]+>', '', text)
                text = re.sub(r'`+([^`]*)`+', r'\1', text)
                text = re.sub(r'[*_]{1,3}', '', text)
                text = re.sub(r'[^\w\s-]', '', text)
                text = re.sub(r'\s+', '-', text.strip())
                hid = text.lower().strip('-') or 'section'

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
    r'\]\((?://)?'
    r'(/(?:documentation|how_to|best_practices)/[^)#\s]*)'
    r'(#[^)]*)?'
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
    r'\{%-?\s*link\s+'
    r'([^\s%]+)'
    r'\s*-?%\}'
    r'(#[^\s)\]"\'<]*)?'
)

# Match old-style {{ '/path' | relative_url }} output from a previous script version.
# These break Jekyll 3.x's include parameter parser when inside content="..." parameters
# (single quotes inside {{ }} confuse the parser). Auto-fixed to plain /path.
OLD_REL_URL_RE = re.compile(
    r"\{\{\s*'(/[^'#]*)(#[^']*)?'\s*\|\s*relative_url\s*\}\}"
)

# Match {{ site.baseurl }}/path links — also break inside include parameters in Jekyll 3.x.
# Auto-fixed to plain /path when inside {% include %} spans.
BASEURL_LINK_RE = re.compile(
    r"\{\{\s*site\.baseurl\s*\}\}(/(?:documentation|how_to|best_practices)/[^\s)\]\"'<#]*)"
    r"(#[^\s)\]\"'<]*)?"
)


# ---------------------------------------------------------------------------
# File processing
# ---------------------------------------------------------------------------

def fix_file(filepath, url_map, url_map_lower, filepath_to_url):
    """
    Scan a file for internal links and replace them with Jekyll {% link %} syntax.
    Links inside {% include %} parameters are converted to plain relative URLs (/path)
    since {% link %} and {{ }} expressions both break Jekyll 3.x's include parameter parser.

    Returns (new_content, replacements_list, issues_list).
    issues_list entries are (tag, detail) tuples.
    """
    with open(filepath, encoding='utf-8') as f:
        original_content = f.read()
    content = original_content

    replacements = []
    issues = []

    def make_replacer(label, include_spans):
        def replace(match):
            raw_path = match.group(1)
            anchor   = match.group(2) or ''
            target = resolve_url(raw_path, url_map, url_map_lower)

            if not target:
                issues.append(('unresolved-link', f"[{label}] {raw_path}{anchor}"))
                return match.group(0)

            if in_include_span(match.start(), include_spans):
                # {% link %} inside {% include %} breaks Liquid — the %} closes the outer tag.
                # {{ }} expressions also break Jekyll 3.x's include parameter parser.
                # Use a plain relative URL (/collection/slug) instead.
                url = filepath_to_url.get(target, raw_path.rstrip('/'))
                new_link = f"]({url}{anchor})"
                replacements.append((match.group(0), new_link))
                issues.append(('include-param-link',
                               f"{raw_path}{anchor} → {url}{anchor}"))
                return new_link

            # Normal case: use {% link %}
            if anchor:
                anchor_id = anchor.lstrip('#')
                if anchor_id not in extract_heading_ids(target):
                    issues.append(('broken-anchor', f"{raw_path}{anchor} → {target}"))

            new_link = f"]({{% link {target} %}}{anchor})"
            replacements.append((match.group(0), new_link))
            return new_link

        return replace

    # Pass 1: relative paths — recompute include spans on current content each pass
    include_spans = find_include_spans(content)
    content = LINK_RE.sub(make_replacer('relative', include_spans), content)

    # Pass 2: absolute handbook URLs
    include_spans = find_include_spans(content)
    content = HANDBOOK_LINK_RE.sub(make_replacer('absolute-link', include_spans), content)

    # Pass 3: bare handbook URLs — report only, do not replace
    for m in HANDBOOK_BARE_RE.finditer(content):
        issues.append(('bare-url', m.group(0)))

    # Pass 5: fix old-style {{ '/path' | relative_url }} inside {% include %} params.
    # These were emitted by a previous version of this script and break Jekyll 3.x.
    # Convert to plain relative URL (/path) — safest format inside include parameters.
    include_spans = find_include_spans(content)
    def fix_old_rel_url(m):
        if in_include_span(m.start(), include_spans):
            path   = m.group(1)
            anchor = m.group(2) or ''
            new = f"{path}{anchor}"
            replacements.append((m.group(0), new))
            issues.append(('include-param-link',
                           f"{m.group(0)} → {path}{anchor}"))
            return new
        return m.group(0)
    content = OLD_REL_URL_RE.sub(fix_old_rel_url, content)

    # Pass 6: fix {{ site.baseurl }}/path links inside {% include %} params.
    # {{ }} expressions break Jekyll 3.x's include parameter parser.
    include_spans = find_include_spans(content)
    def fix_baseurl_link(m):
        if in_include_span(m.start(), include_spans):
            path   = m.group(1)
            anchor = m.group(2) or ''
            new = f"{path}{anchor}"
            replacements.append((m.group(0), new))
            issues.append(('include-param-link',
                           f"{m.group(0)} → {path}{anchor}"))
            return new
        return m.group(0)
    content = BASEURL_LINK_RE.sub(fix_baseurl_link, content)

    # Pass 4: validate pre-existing {% link %} tags in the ORIGINAL content
    # (newly converted links are validated inline during passes 1 & 2)
    include_spans_orig = find_include_spans(original_content)
    for m in EXISTING_LINK_RE.finditer(original_content):
        link_path = m.group(1)
        anchor    = m.group(2) or ''
        if not os.path.exists(link_path):
            issues.append(('link-tag-bad-file',
                           f"{{% link {link_path} %}} — file not found"))
        elif in_include_span(m.start(), include_spans_orig):
            url = filepath_to_url.get(link_path, '?')
            issues.append(('include-param-link',
                           f"existing {{% link {link_path} %}} inside {{% include %}} param"
                           f" — change to {url}{anchor}"))
        elif anchor:
            anchor_id = anchor.lstrip('#')
            if anchor_id not in extract_heading_ids(link_path):
                issues.append(('broken-anchor',
                               f"{link_path}{anchor} (existing {{% link %}} tag)"))

    return content, replacements, issues


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("Building URL map...")
    url_map, url_map_lower, filepath_to_url = build_url_map()
    print(f"  {len(url_map)} URL entries mapped ({len(url_map)//2} files)\n")

    total_replaced = 0
    all_issues = []

    for collection_dir in COLLECTIONS:
        if not os.path.isdir(collection_dir):
            continue
        for filename in sorted(os.listdir(collection_dir)):
            if not filename.endswith('.markdown'):
                continue
            filepath = os.path.join(collection_dir, filename)
            new_content, replacements, issues = fix_file(
                filepath, url_map, url_map_lower, filepath_to_url)

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

    for tag in ('unresolved-link', 'link-tag-bad-file',
                'include-param-link', 'broken-anchor', 'bare-url'):
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
