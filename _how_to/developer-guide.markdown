---
title: Arctos Developers Guide
layout: default_toc
author: DLM
date: 2019-10-15
---

# Arctos Developers Guide
Tips, tricks, and conventions for developing Arctos code

### CFML

Arctos is written primarily in [CFML](https://en.wikipedia.org/wiki/ColdFusion_Markup_Language) and HTML. 
* within ``<cfoutput></cfoutput>`` tags, ``#`` is a special character; ``#variable#`` means render variable ``variable`` as HTML. ``#`` used as text (eg, as an anchor in a URL) must be escaped. ``someURL.com#anchor`` must be written as  ``someURL.com##anchor``
* outside of ``<cfoutput></cfoutput>`` 	``#`` is just a character.

### URLS

* make internal URLs relative - ``/somePage`` never ``http://....somePage``
* style external URLs like this: ``<a href="http:://...somePage" target="_blank" class="external">linktext</a>``

### CSS
* when possible, use /includes/style.css for styling. (Directions for minimizing are inline.)
* for one-off use, in-page CSS (``<style></style>`` tags) is acceptable but less preferred
* avoid inline styling (``<div style="...."></div>``); this makes it very difficult to change things and keep a consistent look and feel