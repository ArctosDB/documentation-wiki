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
* use DataServices/Linkerizer to build URLs. There are currently three classes of URL supported:
    * no class-->default browser behavior
    * external-->"pop out" image appended, open in new window
    * newWinLocal-->open in new window

### CSS
* when possible, use /includes/style.css for styling. (Directions for minimizing are inline.)
* for one-off use, in-page CSS (``<style></style>`` tags) is acceptable but less preferred
* avoid inline styling (``<div style="...."></div>``); this makes it very difficult to change things and keep a consistent look and feel

### Recommended Code Editor
The recommended code editor can be obtained by following the instructions at <a href="https://github.com/cfeclipse/cfeclipse/wiki/Installing-CFEclipse" target="_blank" class="external">Installing CFEclipse</a>. We suggest using the <a href="https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2020-09/R/eclipse-inst-jre-win64.exeEclipse" target="_blank" class="external">IDE for Web and JavaScript Developers</a> as recommended in the instructions.
