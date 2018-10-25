---
title: Taxonomy
layout: default_toc
---

# Taxonomy



## Overview

"Taxonomy" for the purposes of this document and Arctos in general is
"some formal naming system." Arctos taxonomy is not necessarily
hierarchical, it is not limited to biological taxonomies, we follow no
organization or committee guidelines, and we make no distinction between
taxonomy and nomenclature. We offer no judgements or guidelines
regarding acceptability; if all or part of a system of names (and
optionally metadata regarding those names) is accepted or endorsed by
some user group, it’s acceptable for Arctos. If publication "A new
species of critter" declares, however informally, that "*Some critter*"
is a distinct "species" (in the loosest possible sense of the word),
then "Some critter" may be a useful taxon in Arctos. If another
publication declares "*Some critterrrrr* is obviously not a valid
[taxon, biological distinction, etc.]," then "Some critterrrrr" may be
a useful taxon name to include in Arctos for discovery purposes, even
though it’s an obvious misspelling rejecting a name. In short, if a name
might be useful in discovering specimens, it should be included in
Arctos. (Remarks, annotated taxon relationships, and links to
publications should be used to clarify.)

Arctos taxonomy consists of two tables: `taxon_name` is a list of "base
names" (genera, species, kingdoms) and `taxon_term` contains metadata
regarding a `taxon_name`, optionally organized in various ways. Informal
terms, such as "*Sorex sp.*" or "*Sorex cinereus* or *Sorex ugyunak*" are
Identifications, not taxonomy. (Identifications are generally drawn from
and linked to taxonomy in various ways.)


## Taxon Name

The names in `taxon_name` are intended to be a formal taxonomic
authority, and should all be drawn from relevant taxonomic publications.
A name is not linked to any particular classification (rather,
classifications are linked to names), and may be a homonym or
hemihomonym. The namestring "Diptera" CORRECTLY includes classifications
for flies and plants; this is not a mistake and should not be
"corrected" to any particular point of view. Taxon names may be
disambiguated at the specimen level via identification publications ("ID
sensu"), and at the collection level by choosing and curating a
classification. Database rules prevent change of used names. Names may
be higher taxon terms, such as "Animalia," ICZN-type
genus-species-subspecies concatenations, ICBN-type
genus-species-infraspecific rank-infraspecific epithet concatenations,
or nonbiological taxonomy terms ("Granite"). The sole distinguishing
feature of this field is that a Curator, usually a taxonomist, considers
the values here formal taxonomy.

## Taxon Term

Taxon Term contains metadata regarding taxon names and a system for
organizing such data. Every term may be arranged hierarchically within a
classification, and hierarchical terms may optionally be ranked.
Non-hierarchical terms must be ranked. Terms are further divided as:

-   "Local data" is Curated from within Arctos and may be edited. A
    [controlled vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_TERM)
    is required for "local" data.
-   "Webservice data" is drawn from various sources via GlobalNames.org
    and is used primarily for locating specimens.

### Hierarchical Terms

Terms which are organized hierarchically are "classification data"
intended to be part of a classification system. These terms may be
ranked or unranked.

### Non-Hierarchical Terms

Terms which are not organized hierarchically are intended for
clarification, and are linked to but not part of classifications. These
consist of things like HTML-formatted "display name" and author strings.
A rank is required.


## Taxonomy as a Hierarchy

While single classifications may be hierarchical, taxonomy as a body of 
literature is anything but: Most names have a long history of "current
family, according to….", for example, and many refer to multiple
concepts, such as plants and animals.



## Common Names

`Common_Name . Common_Name VARCHAR2 (20) null`


 are intended to help users find what they are looking
for, and not to propagate any standard or system. A taxon may have
several common names, in several languages and using several types of
characters, or nothing. The same common name may apply to more than one
taxon. For example, the term "common shrew" has been published for
*Sorex cinereus* in North America and for *Sorex araneus* in Europe.
Common names have not been capitalized except when they draw on a
particular standard such as that of the American Ornithological Union
(AOU Checklist).  Adjectival forms of proper names are capitalized
(*e.g.*, "Alaska marmot").




## Taxon Relations

`Taxon_Relations . Taxon_Relationship VARCHAR2 (30) not null`

`cttaxon_relation`


 are comprised of a relationship type, a related
taxon, and an authority for the relationship. The related taxon is
another record in the taxonomy table.



## Relationship Authority

`Taxon_Relations . Relationship_Authority VARCHAR2 (45) null`


 is an open text field, and it may be `null`.
Presumably the [Source Authority](#source_authority) for an accepted
taxon is adequate documentation, but if not, then Relationship Authority
could cite a publication or the name of an expert to whom the
relationship is attributed.

Most Taxon Relations represent synonymy among taxa. As evolutionary
relationships and nomenclature are revisited, changes in taxonomy are
suggested, and either accepted or rejected. Which changes are accepted,
and by whom, is a routine issue. Therefore, keeping track of synonomy in
the database can be important to users. If they cannot find material
they are seeking under one name, they may find the name that they are
using and its accepted synonym, or they may use a query which returns
records from unaccepted synonyms.

Any number of taxa may be synonymous, but only one of these should have
the value "accepted synonym of," and it should have this value for each
of its synonyms. Accepted synonyms should have a [Valid Catalog
Term](#valid_term) flag of "yes." The other synonyms should have the
value "synonym of," for each synonym, and their Valid Catalog Term flag
should be "no."

[Named hybrids](#named_hybrid) have a unique relationship to their
parent taxa, and this is expressed by "hybrid offspring of." Each named
hybrid should have two such relationships.

Taxon relations may also represent hierarchical relationships between
taxa. So far, this is included only for the purpose of constructing
botanical trinomens with author text for both the species and the
infraspecific category. For example, *Trichophorum pumilum* (M. Vahl)
Schinz & Thell var.*Rollandii* (Fern.) Hult. would be constructed from
the "parent" binomen, *Trichophorum pumilum* (M. Vahl) Schinz & Thell
plus the infraspecific rank, "subspecies," and author text from the
"child" trinomen, *Trichophorum pumilum* var. *Rollandii* (Fern.) Hult.

## Publications

Taxon names may be linked to any number of Publications. These publications should
directly support the name.


## Searching

There are various "taxonomy-like" search fields on SpecimenSearch, and
they query different data.

### "Identification"

queries the identification applied to specimens,
and includes the option to query non-current identifications.
Identifications are usually based in taxonomy, but are not wholly
taxonomy. Examples of strings that will currently find specimens
include:

-   Sorex yukonicus (a taxon name)
-   Sorex cinereus or Sorex ugyunak (an indeterminate identification)
-   Monticola rufiventris and Cuculus optatus (a cataloged item
    consisting of multiple taxa)
-   Diadocidia sp. nov. cf. borealis (a "working name" not yet
    formalized as taxonomy)
-   Iron-rich mudstone (a non-Linnean term identifying a
    non-biological specimen)

### "Taxon Name"

queries all taxonomy classifications, and
classifications related to taxa attached to specimens. For example,
querying MVZ Mammals for Muridae returns *Euryoryzomys nitidus,* even
though MVZ’s preferred classification uses Cricetidae as the family of
that name, because Freebase asserts that the unranked term "Muridae" is
between "Muroidea" and "Sigmodontinae."

Each ranked term – **Kingdom**, **Family**, etc., – query only the
collection’s preferred classification. "Muridae" in Family will NOT
return specimens identified as *Euryoryzomys nitidus*; only
Family=Cricetidae will locate specimens identified using that taxon
name, which may be viewed as "Cricetidae according to MVZ."

### Ranked Terms

Each collection claims a classification, and when appropriate terms (family, order, etc.) are available they are stored in
the search structure and made available as search fields on the SpecimenSearch form. Therefore, searching *e.g.*, Family is
searching "Family, as asserted by each collection's preferred taxonomy source." 

## Details and more examples

Each collection "claims" one taxon term source, and data from that
source, when available, are stored with the specimen record. For
example, if CollectionX claims the FAKE classification source, which
contain the following data for namestring "*Sorex cinereus*":

  | Term            | Rank |
  |-----------------|------|
  | Animalia        | kingdom |
  | Chordata        | phylum |
  | Mammalia        | class |
  | Soricomorpha    | order |
  | Soricidae       | family |
  | Sorex           | genus |
  | cinereus        | species |

and CollectionY claims the NORANKS source:


  | Term            | Rank |
  |-----------------|------|
  | Animalia        | |
  | Chordata        | |
  | Mammalia        | |
  | Soricomorpha    | |
  | Soricidae       | |
  | Sorex           | |
  | cinereus        | |

then searching for "Mammalia" in the "Class" field from SpecimenSearch
will find CollectionX specimens but will NOT find CollectionY specimens.

Searching the "Any taxon term" field will (by way of both example
classifications above) find specimens from both collections.
Additionally, if there is an additional BADEXAMPLE classification for
*Sorex cinereus*:

| Term            | Rank |
|-----------------|------|
| Shrewidae       | family |

then searching the Family field for "Shrewidae" will find no specimens,
as neither collection prefers the BADEXAMPLE classification, but
searching the "any taxon term" field for Shrewidae will find Sorex
cinereus from both collections, based on the assertions made by the
BADEXAMPLE classification.

In other words, the individual ranked fields (Family, Kingdom, etc.)
represent the current assertions of the collections; current taxonomy as
defined by taxonomists. These fields are appropriate for asking pointed
questions: "how many shrews does the XYZ collection hold?" The "any
taxon term" field represents classifications according to some provider
of GlobalNames.org. This field is a very large net, and most queries
using it will return false positives; specimens that do not fit with
modern, consensus ideas of the term searched. This field is appropriate
for exploratory searching: "what genera did someone at some point
consider to be members of taxon BLA?"

## FAQ

**Q: Why not hierarchies/thesauri/some other model?**

A: The taxonomy model is primarily designed for flexibility, an idea
somewhat incompatible with more-structured data. This model is designed
to work with changes, uncertainty, unranked terms, and even
nonbiological taxonomies, and to communicate with services such as
globalnames.

**Q: Why does the editing interface not ….. ?**

A: The editing interfaces are designed to get us by until
[someone](http://gnite.org) does a better job, and are a reflection of
the model in being very generic (and therefore also very limited and
scary in terms of multi-record updates). We hope that most taxonomy will
eventually be managed in remote, limited-scope applications (that is,
applications that do not have to worry about historical names and
homonyms and all the other reality that is taxonomy at the scale of
Arctos) rather than in Arctos (which can now leverage any number of
those services to compile a complete picture).

**Q: How does the model assert "acceptedness"?**

A: All names exist because someone with the proper credentials loaded
them, and presumably because there exists "appropriate" (a term which
varies by discipline, tradition, and time) literature creating or
supporting them. Collections choose a classification, which asserts
"classification according to this collection."

## Create a Name

There are two ways by which taxon names may be created:

1.  Click the "create name" link and enter a namestring.
2.  Click the "cloning classification as a new new name" link.

Search Arctos before creating names. Do not try to create duplicate
namestrings, even in the case of homonyms, hemihomonyms, committee
rulings, or for any other reason.

## Create a Classification

Classifications may be created by pulling from globalnames, cloning an
existing classification into a local source, or manually creating a
local source.

There is currently no classification bulkloader. One can be created if
necessary.

## Source "Arctos"

"Local" sources - those used in asserting taxonomy by collections - are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXONOMY_SOURCE). As of this writing, the split is "plants" and "everything else." It is important to choose the
intended collection's preferred source when creating classification data. Local sources are often limited to hierarchical data and managed through 
the [hierarchical data editor](http://handbook.arctosdb.org/how_to/How-to-Manage-Taxonomy-Hierarchically.html).

## Taxonomy search examples

Note values that pop into search form.

Names that contain the string "microtus"

<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus>

Names that ARE Microtus:

<http://arctos.database.museum/taxonomy.cfm?taxon_name==microtus>

Names that contain microtus AND have an attribute of "mammalia":

<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus&taxon_term=mammalia>

Names that contain microtus AND have an attribute of value "mammalia"
and rank (=term type) "phylclass"

<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus&taxon_term=mammalia&term_type=phylclass>

Names that contain microtus AND have an unranked attribute of value
"mammalia"

<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus&taxon_term=mammalia&term_type=NULL>

Microtus according to Arctos

<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus&taxon_term=&term_type=&source=Arctos>

Genus microtus according to Arctos

<http://arctos.database.museum/taxonomy.cfm?taxon_name=&taxon_term=%3Dmicrotus&term_type=genus&source=Arctos>

## Relationship of taxonomy to specimens

The link between taxonomy and specimens is through Identification and
Identification_Taxonomy. However, Taxonomy no longer resolves to a
single set of ranked assertions (eg, row in table). Collections chose a
single preferred source (in manage collection), and the data in that
classification become available for various "specimen-taxonomy" purposes
(such as asserting ranked terms via DWC exports, searching for
specimens, and printing labels). Some taxonomy searches may produce
unexpected results for the naive user. For example,  given the
following:

-   Collection1 prefers Source1
-   Collection2 prefers Source2
-   Source1 places NameN in Family1
-   Source2 places NameN in Family2
-   Source3 places NameN in Family3
-   Collecton1 and Collection2 both have specimens identified as NameN.

the following are true:

-   Searching Identification (scientific name) for NameN will find NameN
    specimens from Collection1 and Collection2
-   Searching Identification for Family1 will find nothing; the
    Identification is to a name (string), not a "taxon concept" (data
    object including metadata).
-   Searching Taxon Name (any taxon name) for Family1, Family2, or
    Family3 will find NameN specimens from Collection1 and Collection2
-   Searching Family for Family1 will find only specimens from
    Collection1
-   Searching Family for Family2 will find only specimens from
    Collection2
-   Searching Family for Family3 will find nothing

That is,

-   Collection1 is asserting that "the Family of NameN is Family1."
-   Collection2 is asserting that "the Family of NameN is Family2."
-   Something else (via GlobalNames, perhaps) is asserting that "the
    Family of NameN is Family3."

Possible reasons for this include but are not limited to the following:

-   NameN is a hemihomonym. Collection1 is a vertebrate collection, and
    Collection2 is an invertebrate collection.
-   One collection has accepted a new taxonomic opinion, and the other
    simply hasn’t got around to updating their classifications.
-   One collection has accepted a controversial taxonomic hypothesis
    with which the other collection disagrees.
-   One collection has confounded taxonomy and storage location, and
    cannot update their classification until shelves are relabeled and
    specimens are moved.

Note that the sums of the family-according-to-collection searches do NOT
necessarily add up to the "family-according-to-someone" search total; a
collection may use a classification that does not include a term ranked
"family," and doing so will return no specimens with queries which
include family-according-to-collection.

## Editing

### Names

Names should generally not be edited. Do not create garbage names, and
contact the Advisory Committee if you find a garbage name.

### Classifications

It is generally not possible to edit remote (*e.g.*, pulled from
GlobalNames) classifications; they are automatically maintained, and
edits would be lost with the next update. Please note that this does not
preclude using those classifications as preferred, nor from editing them
via any tools (including collaboration with sources such as ITIS) before
they are pushed to GlobalName and then Arctos. This is in fact our
(unfortunately theoretical and untested) preferred approach: Manage data
in specialized (*e.g.*, mammals), collaborative, and funded tools, where
things like homonyms and alternate classifications are easily dealt with
(often by exclusion), and push those data to Arctos via GlobalNames.

There are no "batch" tools in Arctos, because the data scope and
structure does not support them. "UPDATE….WHERE GENUS=’Philometra’…."
cannot do what is probably intended; *Philometra* is a homonym, and may
additionally be recorded as a subgenus, unranked term, etc., and so the
update is very likely to both miss intended data and update unintended
and unrelated data. (This is one reason we encourage external,
limited-scope tools or collaborations to manage taxonomy; *Philometra*
will likely mean exactly one thing in "Lepidoptera of Europe" or
"Parasites of North America," but both of those things and much more are
included in Arctos.)

### The Form

The classification editing form is in two parts.

**"Non-classification terms"** are data which is not part of the
classification but which are important for various curatorial tasks or
for understanding why a specimen has been assigned to a name, or why a
name has been assigned to a classification. Some terms are especially
important:

-   **display_name** is the HTML-formatted namestring. This is included
    in various places on Arctos forms, and in FLAT and DWC
    as FORMATTED_SCIENTIFIC_NAME. The form will suggest values for
    display_name; click to accept the suggestions, or type your own,
    including any necessary HTML markup.
-   **nomenclatural_code** controls how display_name is suggested, and
    helps format display. Actionable values are "ICZN" and "ICNB."
-   **author_text** is the author of ICZN names, or the species author
    of ICBN names
-   **infraspecific_author** is the author of the infraspecific epithet
    in ICBN names

The ordering of these terms is unimportant, and un-paired terms (e.g.,
display_name=`NULL` or `NULL`="Sorex cinereus") will be ignored (that is,
deleted at save).

## Deleting

Taxon names should be deleted only when they are identified as "not taxonomy." 
The [overview section of this document](http://handbook.arctosdb.org/documentation/taxonomy.html#overview) describes the scope of 
"taxonomy." Generally, names which pass "The Google Test" (_e. g._, those which are in use outside of Arctos) should not be deleted.
To perform "The Google Test," search for the name in double-quotes; if no results, or results only referencing Arctos, are found, it
is probably safe to delete the name. Results which include only sources which draw from Arctos (such as GBIF) should be carefully scritinized
to determine if the results are in fact an indirect reflection of Arctos data.

_Do not_ delete names which are not "current" or "accepted," or those which you do not agree with, or won't use for some particular use case. Delete only names which do not meet the Arctos definition of "taxonomy." 

## Classification terms

 are ordered taxonomic data (drag rows to
order). Ranks are optional; the following mixture of ordered ranked and
unranked terms is possible (and common):


  | Term            | Rank |
  |-----------------|------|
  | Animalia        | Kingdom |
  | Cellular Life   | |
  | Soricidae       | Family |
  | Soricinae       | |
  | Sorex           | genus |

The following ranks are used in building "specimen data" (which is used
for things like printing labels, locating specimens from the ranked
search terms such as Family, and as terms in specimen summary):

-   kingdom
-   phylum
-   class (in FLAT as "phylclass" due to RDBMS reserved words)
-   order (in FLAT as "phylorder" due to RDBMS reserved words)
-   family
-   subfamily
-   tribe
-   subtribe
-   genus
-   species
-   "subspecies" (for ICBN data, this is "infraspecific term" and ranked
    as "infraspecific rank" which includes subspecies, subsp., variety,
    var., varietas, subvar., etc.)

Infrageneric terms should be supplied as multinomials: species=**Sorex
cinereus**, never only **cinereus**.

<http://arctos.database.museum/name/Carex%20brunnescens%20subsp.%20alaskana#Arctos>
is an example of a botanical name which includes a subspecific epithet
and two authors.

## Validation Service

Arctos checks taxon names against various services on creation and edit. This check is a tool, not an authority; all services have significant problems as of this writing. "Valid" names will occasionally be flagged as invalid, and erroneous names will occasionally pass (one of the services contains data from Arctos, so the check is a bit circular). Users remain fully responsible for the content of Arctos taxonomy. "Valid for Arctos" taxonomy is described in the     [Overview](#overview) section of this document.

