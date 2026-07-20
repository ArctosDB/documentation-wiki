import yaml, re, glob

CANONICAL_FIELDS = ['title', 'layout', 'authors', 'date_updated']
OPTIONAL_FIELDS  = ['redirect_from']

def get_field_order(fm_text):
    """Extract top-level field names in order from raw front matter text."""
    fields = []
    for line in fm_text.strip().split('\n'):
        match = re.match(r'^([a-zA-Z][\w ]*)\s*:', line)
        if match:
            fields.append(match.group(1).strip())
    return fields

def audit_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    if not content.startswith('---'):
        print(f"{filepath}: NO FRONT MATTER")
        return

    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"{filepath}: MALFORMED FRONT MATTER")
        return

    fm_text = parts[1]

    try:
        fm = yaml.safe_load(fm_text) or {}
    except yaml.YAMLError as e:
        print(f"{filepath}: YAML ERROR — {e}")
        return

    issues = []

    # Check all four canonical fields are present
    for field in CANONICAL_FIELDS:
        if field not in fm:
            issues.append(f'missing {field}')

    # Check canonical fields appear in correct order
    all_fields = get_field_order(fm_text)
    canonical_in_file = [f for f in all_fields if f in CANONICAL_FIELDS]
    if canonical_in_file != CANONICAL_FIELDS[:len(canonical_in_file)]:
        issues.append(f'wrong order: {canonical_in_file}')

    # Flag extra tags
    extra = [f for f in all_fields if f not in CANONICAL_FIELDS and f not in OPTIONAL_FIELDS]
    if extra:
        issues.append(f'extra tags: {", ".join(extra)}')

    if issues:
        print(f"{filepath}: {'; '.join(issues)}")

collections = ['_how_to', '_documentation', '_best_practices', '_resources']
for col in collections:
    for f in sorted(glob.glob(f'{col}/*.markdown') + glob.glob(f'{col}/*.md')):
        audit_file(f)