# Arctos Handbook

The Arctos Handbook is the documentation site for the [Arctos Collaborative Collection Management Solution](https://arctosdb.org). It is a community-maintained resource built with Jekyll and hosted on GitHub Pages.

**View the live site: [handbook.arctosdb.org](https://handbook.arctosdb.org)**

## Contributing content

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidance on adding or editing pages, including how to choose the right collection, fill in front matter, and name files.

To report an error or suggest a change without editing directly, [file an issue](https://github.com/ArctosDB/documentation-wiki/issues/new/choose).

## Local development

### Requirements

- Ruby 3.2.6 (managed via [rbenv](https://github.com/rbenv/rbenv) recommended)
- Bundler

### Setup

```bash
git clone https://github.com/ArctosDB/documentation-wiki.git
cd documentation-wiki
git checkout gh-pages
bundle install
```

### Run the site locally

```bash
bundle exec jekyll serve
```

The site will be available at `http://127.0.0.1:4000`. Jekyll watches for file changes and rebuilds automatically.

### Preview a fork

If you are working from a fork, build with the preview config to set the correct baseurl:

```bash
bundle exec jekyll serve --config _config.yml,_config_preview.yml
```

## Site structure

| Directory | Purpose |
|---|---|
| `_documentation/` | Reference documentation for Arctos data tables and fields |
| `_best_practices/` | Recommendations for curatorial decisions and workflows |
| `_how_to/` | Step-by-step task instructions |
| `_resources/` | Tutorials and external guidelines |
| `_layouts/` | Jekyll page layouts |
| `_includes/` | Reusable HTML partials |
| `_sass/` | Stylesheets |
| `_data/` | Site data files (navigation, authors) |
| `_templates/` | Templates for new content pages |

## Tech stack

- [Jekyll](https://jekyllrb.com) 3.10
- [Bootstrap](https://getbootstrap.com/docs/3.4/) 3.4.1
- [Font Awesome](https://fontawesome.com) 5 Free
- Deployed via GitHub Actions to GitHub Pages
