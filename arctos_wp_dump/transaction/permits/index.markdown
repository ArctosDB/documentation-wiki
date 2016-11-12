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

Permits {#permits .entry-title}
=======

<div class="entry-content">

[]()\
Permits are documentation authorizing transactions such as\
[Accessions](accession) and [Loans](loan).\
In general, permits are issued by governmental agencies, but letters
authorizing\
collecting activities on private land can also be considered permits.\
Some “registrations” may also constitute permits.\
For example, museums can do international exchanges of specimens of
endangered\
species if the museums are registered with their respective governments\
under the Convention for International Trade in Endangered Species
(CITES).\
In this case, it is the institutional certificates of CITES
registration\
that constitute the authority.\
Permits can can authorize any number of transactions,\
and any number of permits may be required for a transaction.

<div class="fldDef">

Permit . Permit\_Num
VARCHAR(20) null

</div>

**[]()Permit Number**\
is an identifying text string assigned by the agency issuing the
permit.\
Not all permits have such a number.

<div class="fldDef">

Permit . Permit\_Type
VARCHAR(50) not null

ctpermit\_type

</div>

**[]()Permit Type:**\
The kind of activity authorized by the permit.\
Their are now four values are controlled by a look-up table.\
These are:

-   scientific collecting
-   import/export
-   import
-   collector’s hunt/fish/trap

There is room for improvement here.\
In some cases, permits may authorize collecting, importation, and
exportation.

<div class="fldDef">

Permit . Issued\_To\_Agent\_id
INTEGER not null

</div>

**[]()Issued To:**\
The agent to whom the permit was issued.\
This could be either a person or organization.

<div class="fldDef">

Permit . Issued\_By\_Agent\_id
INTEGER not null

</div>

**[]()Issued By:**\
The agent to who issued the permit.\
This could be either a person or organization.

<div class="fldDef">

Permit . Contact\_Agent\_id
INTEGER not null

</div>

**[]()Contact Person:**\
Assuming that the Permit was issued by an organization,\
this would be a person within the organization who administers the
permit.\
This should always be a person, not an organization.

<div class="fldDef">

Permit . Issued\_Date
DATETIME null

</div>

**[]()Issued Date:**\
The day the permit was issued.\
(We assume this to be the same as the day\
on which the permitted activities become legal.\
This might not always be the case.\
We might need a separate date to indicate\
the time period for which the permit is effective.)\
A valid date is required.

<div class="fldDef">

Permit . Renewed\_Date
DATETIME null

</div>

**[]()Renewed Date:**\
Rather than expiring, and requiring a new permit for continued\
activity, some permits may be renewed.

<div class="fldDef">

Permit . Exp\_Date
DATETIME null

</div>

**[]()Expiration Date:**\
The day on which the permit is no longer valid.\
This date might be used to automatically notify the permittees\
of the approaching expiration.

<div class="fldDef">

Permit . Permit\_Remarks
VACHAR(255) null

</div>

**[]()Remarks:**\
These can be anything that extends the definition of the\
permit or the conditions under which it applies.

</div>

</div>

</div>

</div>

<div id="secondary">

get yer docs here {#get-yer-docs-here .site-description}
-----------------

</div>

</div>

