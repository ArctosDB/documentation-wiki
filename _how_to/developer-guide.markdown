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
 
#### Sublime Text

#### Atom

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

## Code Table Definer

```
<span class="infoLink" onclick="getCtDocVal('cttaxon_name_type','taxon_name_type');">Define</span>
```

where ``cttaxon_name_type`` is the relevant code table and ``taxon_name_type`` is the ID of the element being defined.

Or as a label

```
<label class="likeLink" onclick="getCtDocVal('ctcataloged_item_type','cataloged_item_type');" for="cataloged_item_type">
   Catalog Item Type
</label>
```
#### Color Codes

"Arctos blue": #113d64

TEXT
* Fonts (all, including Section Label title): #113d64 
* helpLinks and Hypertext #116AC4
* Hover text #0000FF
* Visited Hypertext #0094C8
* Infolink: #82B8EA

QUERY BLOCK STRIPEY GRID
* Color 1/odds (darker): #DAE3F3
* Color 2/evens (lighter): #EDF1F9

HIGHLIGHTS
* target: #CCD7E9

BUTTONS
* Search/Submit Query: input.schBtn #82B8EA 
* Customize: input.cstmBtn #C9D2DC
* Quit/Clear: input.qutBtn #FFFFFF
* Choose/Pick: input.picBtn #A7E8FF
* All/Link: input.lnkBtn #89B2C1
* Save: input.savBtn #F5C03D
* None/Delete: input.delBtn #f99f67

FOOTER
* SuperFooterDiv background #113d64 
* MainFooterDiv background #BBD3DB

#### Logos

BLUE

* Single bear logo
![logo-bear_only](https://user-images.githubusercontent.com/11336485/211899289-641c6d4f-b3fb-45b9-a551-2cca4ba2aa71.png)

* Arctos text bear logo![logo-bear_Arctos](https://user-images.githubusercontent.com/11336485/211899409-171d846b-408b-468b-bd8b-fec3289665fc.png)

* Arctos full text logo![Logo-full_text](https://user-images.githubusercontent.com/11336485/211899558-fe4d2e8d-884f-4c84-9a34-49b34f7c4365.png)

BLACK

* Arctos full text logo ![Arctos-logo_black_xbg-01](https://user-images.githubusercontent.com/11336485/211899858-f7e7ea42-f246-4fff-b2ad-039002795aa6.png)

WHITE

* Arctos full text logo![Arctos-logo_white_xbg-01 (1)](https://user-images.githubusercontent.com/11336485/211899783-1fade03c-f5e4-42e9-ada9-5167e48e7f4c.png)


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/developer-guide.markdown" target="_blank">here</a>.
