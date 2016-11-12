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

Geology {#geology .entry-title}
=======

<div class="entry-content">

**Geology Attributes**
----------------------

Geology Attributes attach geology information to Locality. Each locality
may contain any number of geology attributes, each with a determiner and
method.

### Structure

UAM@ARCTOS&gt; desc geology\_attributes\
Name                                   Null?    Type\
—————————————————————– ——– ——————————————–\
GEOLOGY\_ATTRIBUTE\_ID                           NOT NULL NUMBER\
LOCALITY\_ID                               NOT NULL NUMBER\
GEOLOGY\_ATTRIBUTE                           NOT NULL VARCHAR2(255)\
GEO\_ATT\_VALUE                               NOT NULL VARCHAR2(255)\
GEO\_ATT\_DETERMINER\_ID                                NUMBER\
GEO\_ATT\_DETERMINED\_DATE                            DATE\
GEO\_ATT\_DETERMINED\_METHOD                            VARCHAR2(255)\
GEO\_ATT\_REMARK                                 VARCHAR2(4000)

 

### Searching

While individual geology attributes are asserted, the [hierachical code
table](http://arctos-test.tacc.utexas.edu/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE)
structure allows locating specimens attributed to geology which is more
specific than the search term.

</div>

</div>

</div>

</div>

<div id="secondary">

get yer docs here {#get-yer-docs-here .site-description}
-----------------

</div>

</div>

