<div id="page" class="hfeed site">

<div class="header-main">

[Arctos Handbook](/) {#arctos-handbook .site-title}
====================

<div class="search-toggle">

[Search](#search-container){.screen-reader-text}

</div>

Primary Menu
[Skip to content](#content){.screen-reader-text .skip-link}
<div id="primary-menu" class="nav-menu">

-   [Agents](/agent/)
    -   [Address](/agent/address/)
-   [Attributes](/attributes/)
-   [Authorities](/authorities/)
-   [Bulkloader](/bulkloader/)
-   [Catalog](/catalog/)
-   [Container](/container/)
-   [Dates](/dates/)
-   [Documentation](/documentation/)
    -   [Projects](/documentation/projects/)
    -   [Publications](/documentation/publications/)
        -   [Specimen
            Citations](/documentation/publications/specimen-citations/)
    -   [Relationships](/documentation/relationships/)
    -   [Sharing Data and Resources](/documentation/sharing-resources/)
    -   [Specimen Parts](/documentation/parts/)
-   [Encumbrance](/encumbrance/)
-   [Frequently Asked Questions](/faq/)
-   [GenBank](/how-to-genbank/)
-   [GeoLocate](/geolocate/)
-   [Home](/)
-   [Identifications](/identification/)
    -   [Taxonomy](/identification/taxonomy/)
-   [Media](/media/)
-   [Other Identifying Numbers (Other IDs)
    and Relationships.](/other-id/)
-   [Places](/places/)
    -   [Collecting Event](/places/collecting-event/)
    -   [Coordinates](/places/coordinates/)
    -   [Higher Geography](/places/higher-geography/)
    -   [Locality](/places/locality/)
        -   [Geology](/places/locality/geology/)
    -   [Specimen Event](/places/specimen-event/)
-   [Transactions](/transaction/)
    -   [Accessions](/transaction/accession/)
    -   [Loans](/transaction/loans/)
    -   [Permits](/transaction/permits/)

</div>

</div>

<div id="search-container" class="search-box-wrapper hide">

<div class="search-box">

<span class="screen-reader-text">Search for:</span>

</div>

</div>

<div id="main" class="site-main">

<div id="main-content" class="main-content">

<div id="primary" class="content-area">

<div id="content" class="site-content" role="main">

Places {#places .entry-title}
======

<div class="entry-content">

Places are described in Arctos using, independently, both coordinate and
descriptive data. This is often conflicting. For example, the map below
is of a “New Mexico” specimen that also maps to Colorado, Utah, and
Arizona.

[![](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-12-54-01-pm.png "Screen Shot 2011-09-19 at 12.54.01 PM"){.alignnone
.size-full .wp-image-670 width="535" height="414"
sizes="(max-width: 535px) 100vw, 535px"
srcset="/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-12-54-01-pm.png 535w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-300x232.png 300w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-250x193.png 250w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-233x180.png 233w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-388x300.png 388w"}](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-12-54-01-pm.png)

Additionally, descriptive data in Arctos are often incomplete and
seemingly contradictory. For example, this spatial query:

[![](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm.png "Screen Shot 2011-09-19 at 1.31.08 PM"){.alignnone
.size-full .wp-image-675 width="640" height="378"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm.png 776w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-300x177.png 300w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-768x454.png 768w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-250x148.png 250w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-550x325.png 550w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-304x180.png 304w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-507x300.png 507w"}](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-1-31-08-pm.png)

Returns these data:

  CONTINENT\_OCEAN      COUNTRY         STATE\_PROV   SEA
  --------------------- --------------- ------------- --------------
  Arctic Ocean          -NULL-          -NULL-        Chukchi Sea
  North America         United States   Alaska        Chukchi Sea
  North America         United States   Alaska        -NULL-
  North America         United States   Alaska        Beaufort Sea
  Arctic Ocean          -NULL-          -NULL-        -NULL-
  Arctic Ocean          -NULL-          -NULL-        Beaufort Sea
  North America         United States   Alaska        Bering Sea
  North Pacific Ocean   -NULL-          -NULL-        Bering Sea

This virtually guarantees that descriptive queries will miss specimens.

Reversing the process, and querying on the more embarrassing values
above, produces (as expected?) unexpected results.

[![](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-2-54-45-pm.png "Screen Shot 2011-09-19 at 2.54.45 PM"){.size-full
.wp-image-678 width="540" height="311"
sizes="(max-width: 540px) 100vw, 540px"
srcset="/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-2-54-45-pm.png 540w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-300x173.png 300w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-250x144.png 250w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-313x180.png 313w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-521x300.png 521w"}](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-2-54-45-pm.png)
Arctic Ocean, Chuchki Sea
[![](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-00-56-pm.png "Screen Shot 2011-09-19 at 3.00.56 PM"){.size-full
.wp-image-680 width="358" height="429"
sizes="(max-width: 358px) 100vw, 358px"
srcset="/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-00-56-pm.png 358w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-00-56-pm-250x300.png 250w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-00-56-pm-150x180.png 150w"}](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-00-56-pm.png)
Chukchi Sea, North America, United States, Alaska
[![](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-03-21-pm.png "Screen Shot 2011-09-19 at 3.03.21 PM"){.size-full
.wp-image-681 width="546" height="334"
sizes="(max-width: 546px) 100vw, 546px"
srcset="/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-03-21-pm.png 546w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-300x184.png 300w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-250x153.png 250w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-294x180.png 294w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-490x300.png 490w"}](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-03-21-pm.png)
Beaufort Sea, North America, United States, Alaska
[![](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm.png "Screen Shot 2011-09-19 at 3.08.40 PM"){.size-full
.wp-image-682 width="640" height="575"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm.png 662w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-300x270.png 300w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-250x225.png 250w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-550x494.png 550w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-200x180.png 200w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-334x300.png 334w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-556x500.png 556w"}](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-08-40-pm.png)
North America, Alaska, United States, Bering Sea
[![](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-11-25-pm.png "Screen Shot 2011-09-19 at 3.11.25 PM"){.size-full
.wp-image-683 width="497" height="435"
sizes="(max-width: 497px) 100vw, 497px"
srcset="/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-11-25-pm.png 497w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-300x263.png 300w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-250x219.png 250w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-206x180.png 206w, /wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-343x300.png 343w"}](/wp-content/uploads/sites/21/2011/09/screen-shot-2011-09-19-at-3-11-25-pm.png)
North Pacific Ocean, Bering Sea
Take-home message? Use coordinate query if at all possible, and expect
the unexpected if you must use textual query.

 

</div>

</div>

</div>

</div>

<div id="secondary">

get yer docs here {#get-yer-docs-here .site-description}
-----------------

</div>

</div>

