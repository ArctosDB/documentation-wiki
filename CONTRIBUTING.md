# Contributing to the Arctos Handbook

The Arctos Handbook is a community resource maintained by Arctos Working Group members. Anyone in the Arctos community can propose additions or edits via GitHub pull request or an [issue filed in this repository](https://github.com/ArctosDB/documentation-wiki/issues/new/choose).

## Choose the right collection

The Handbook has three content collections. Pick the one that fits:

| Collection | Use for | Example |
|---|---|---|
| `_documentation/` | Reference documentation for specific Arctos data tables and fields; pages here are linked directly from the database | "agents" field definitions |
| `_best_practices/` | Recommendations for curatorial decisions and workflows | Best practices for creating meaningful agents |
| `_how_to/` | Step-by-step instructions for completing a specific task in Arctos | How to create agents |

When in doubt: if your content is "do X, then Y, then Z," it belongs in `_how_to/`. If it's "here's when and why to do X," it belongs in `_best_practices/`. Content in `_documentation` is primarily the domain of Arctos technical staff.

## Create a new page

### 1. Copy a template

Templates are in `_templates/`. Copy the appropriate one into the correct collection directory:

| Template | Copy to |
|---|---|
| `documentation-template.markdown` | `_documentation/` |
| `best-practices-template.markdown` | `_best_practices/` |
| `how-to-template.markdown` | `_how_to/` |

### 2. Name your file

Use the following conventions:
- Lowercase only
- Hyphens between words (no underscores or spaces)
- Descriptive but concise
- No collection prefix; don't add `how-to-` or `best-practices-` because the collection directory makes it redundant
- Use `.markdown` extension

Good examples:
- `catalog-fossils`
- `create-agents.markdown`

Bad examples:
- `Catalog_Fossils.markdown` — uppercase and underscores
- `how-to-catalog-fossils.markdown` — redundant prefix
- `fossils.md` — too vague

### 3. Fill in front matter

Every page starts with a YAML block between `---` delimiters. The following fields are not automated in any way, so you need to fill them in:

```yaml
---
title: Your Page Title
authors: First Last, First Last
date_updated: YYYY-MM-DD
---
```

#### Front matter field reference

| Field | Required | Description |
|---|---|---|
| `title` | **Required** | The page title, displayed as the heading. Do not also add a `# Title` heading in the page body. |
| `layout` | **Required but added automatically** | The default is `default_toc` for pages in `_documentation/`, `_best_practices/`, and `_how_to/`, and this is controlled in `_config.yml`. You can override the default if necessary. |
| `authors` | Encouraged | Comma-separated list of contributors, e.g. `"Teresa Mayfield-Meyer, Dusty McDonald"`. Used to generate linked contributor credits in the page footer. |
| `date_updated` | Encouraged | Date the page was last meaningfully updated, in `YYYY-MM-DD` format. |
| `status` | Optional | Include this tag with the value "draft" to have a work in progress banner apear at the top of the page. |
| `redirect_from` | Optional | List of old URLs that should redirect to this page. Use when renaming a file to avoid breaking existing links. |

### 4. Write your content

Follow the section structure in the template. Do not add a `# Title` heading — the title renders automatically from the `title` front matter field.

#### Internal links

To reference another page within this site, following this example code snippet, replacing the collection name and file name with whatever page you are linking to:

```liquid
[link text]({% link _how_to/page-name.markdown %})
```

Linking pages this way is more resilient than hard-coding links by including the full URL.

#### Highlight boxes

Use highlight boxes to call out tips, cautions, and frequently asked questions inline in your content.

```liquid
{% include tip.html content="Your tip text here." %}
{% include caution.html content="Watch out for this." %}
{% include faq.html content="Commonly asked question and answer." %}
```

Content supports Markdown, including links:

```liquid
{% include tip.html content="See [batch-loading agents]({% link _how_to/batch-loading-agents.markdown %}) for details." %}
```

If your content must include quotation marks, escape in the code using a single quote:

```liquid
{% include caution.html content='Trying to use "double quotation marks" in your content block confuses the code unless you switch to single quotation marks.' %}
```

Use **tip** for helpful shortcuts or context, **caution** for actions that could cause data loss or unexpected results, and **faq** for questions that come up repeatedly.

## Submit your changes

Open a pull request against the `gh-pages` branch of [ArctosDB/documentation-wiki](https://github.com/ArctosDB/documentation-wiki).

If you're new to GitHub, these guides cover the basics:

- [Editing files directly on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) — the simplest path for small edits; no local setup needed
- [Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) — how to propose your changes for review
- [Contributing to projects](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project) — end-to-end walkthrough of forking, editing, and opening a PR

### PR checklist

- [ ] File is in the correct collection directory
- [ ] Filename is lowercase, hyphen-separated, and descriptive — no collection prefix
- [ ] Front matter includes `title`
- [ ] Front matter includes `authors`, e.g. at least you
- [ ] Front matter includes `date_updated` is set, e.g. to today's date
- [ ] Page body does not start with a `# Title` heading
- [ ] Content follows the template structure for the collection