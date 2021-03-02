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
    * newWinLocal-->"info" image appended, open in new window (use for links to arctos.museum information pages such as code tables)

### CSS
* when possible, use /includes/style.css for styling. (Directions for minimizing are inline.)
* for one-off use, in-page CSS (``<style></style>`` tags) is acceptable but less preferred
* avoid inline styling (``<div style="...."></div>``); this makes it very difficult to change things and keep a consistent look and feel

### Recommended Code Editors
 
#### Brackets
A CFML Support - ColdFusion 11 extension is available for <a href="http://brackets.io/" target="_blank" class="external">Brackets</a>. 


#### Eclipse
The CFEclipse plugin is currently not supported and older versions may not be from reliable sources.
The Eclipse and CFEclipse can be downloaded by following the instructions at <a href="https://github.com/cfeclipse/cfeclipse/wiki/Installing-CFEclipse" target="_blank" class="external">Installing CFEclipse</a>. We suggest using the <a href="https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2020-09/R/eclipse-inst-jre-win64.exeEclipse" target="_blank" class="external">IDE for Web and JavaScript Developers</a> as recommended in the instructions. **NOTE** this was not functioning properly as of December 1, 2020.


## Datasource

Arctos uses various datasources for various reasons. Most queries should be one of two entries:

* Datasource ``user_login`` logs in to the database as the Arctos user. This connection must be supplied with valid credentials.
* Datasource ``cf_codetables`` is a special pre-authenticated user who has SELECT on ct* tables. This user should be used for all possible connections which SELECT from codetables, for performance reasons, and these queries should always be set to cache. The query name should always be the name of the code table to further support caching. For example:

``` 
<cfquery name="ctdatum" datasource="cf_codetables" cachedwithin="#createtimespan(0,0,60,0)#">
   select datum from ctdatum order by datum
</cfquery> 
```

## Expand Select

This toggles MULTIPLE for a SELECT of id "accn_status":

```
<span data-ctl="accn_status" class="ui-icon ui-icon-arrow-4-diag expandoSelect"></span>
```

## Button-Links

Button + HREF

```
<a href="somepage.cfm"><input type="button" class="lnkBtn" value="Some Text"></a>
```