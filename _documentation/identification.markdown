---
title: Identifications
layout: default_toc
---

# Identifications

Determinations, or "identifications" (IDs), apply taxonomic terms to
specimens. In other words, determinations are not necessarily just
taxonomic terms. Information about taxonomic names (which are used to
compose determinations) is in [Taxonomy](/documentation/taxonomy).

A taxonomic determination is comprised of:

-   the taxonomic term, or combination of terms and/or modifiers
-   the name (or names) of the determiner(s)
-   the date of the determination
-   and the nature, or basis of the determination

Arctos maintains a history of determinations for each specimen.
Specimens are therefore reidentified by adding a new determination and
retaining prior determination(s) as "unaccepted." This means that there
can be only one accepted determination, but not necessarily that prior
identifications are wrong. In fact, complimentary IDs by experts or by
alternative methods enhance the value of the specimen.

## Scientific Name

There is a distinction between Scientific Name here
in determinations, as opposed to [Scientific Name as it is used in the
taxonomy table](/documentation/taxonomy#taxon-name). The latter is a term from a
table serving as a taxonomic look-up (or authority). Here, it is a
character string applied to a specimen by a [determiner](#determiner), though
it uses terms from the look-up table to create such strings.
Nevertheless, in the simplest and commonest case ([Determination
Formula](#determination-formula)= "A"), they are identical. (Some forms display a
third related term called [Display Name](/documentation/taxonomy#editing), which
is merely a specific formatting of the data in Taxonomy.) The
explanation of Determination Formula (immediately below) is
illustrative.

## Determination Formula

`Identification . Taxa_Formula VARCHAR2(25) not null`

A determination can contain more than one taxon, possibly in conjunction
with modifiers. Taxa are combined with each other, or with modifiers,
according to a formula. For example:

  |`Identification . Scientific_Name`         | Formula          | `Taxonomy . Scientific_Name`(s)|
  |-----------------------------------------|------------------|------------------------------|
  |*Sorex cinereus*                         | one taxon (A)    | A = *Sorex cinereus*         |
  |*Sorex cinereus* ?                       | taxon (A) + "?"  | A = *Sorex cinereus*         |
  |*Sorex cinereus* or *Sorex ugyunak*      | A "or" B         | A = *Sorex cinereus*         |
  |                                         |                  | B = *Sorex ugyunak*          |
  |*Canis latrans x Canis lupus familiaris* | A "X" B          | A = *Canis latrans*          |
  |                                         |                  | B = *Canis lupus familiaris* |

More formulae are documented in the [vocabulary-control
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula).
Bulkloader taxa guidelines are [here](/documentation/bulkloader#taxonomy).

You can pick a formula from the editing screen for determinations. You
do not need to designate a formula for data entry if you intend a simple
one-taxon determination (formula "A"), and the bulkloader will recognize
and appropriately parse construction.

### "A {string}" Formula

The "A {string}" formula links nonformulaic identifications to taxa,
thereby allowing infinite flexibility in applying identifications to
specimens (if you can type it in fewer than 255 UTF16 characters, it’s
"valid") while retaining a link to formal taxonomy (e.g., things that
have appeared in the reviewed literature) and thereby facilitating the
discovery of informal data through formal taxa (including namestrings,
"higher taxonomy" and other metadata, relationships, and common names).

The "taxon variables" as used in constructing taxon names exist for the
purposes of ordering or formulating complex names, and as such there
exist no restrictions on how many ‘A’s can exist for an identification.
The following table is illustrative.

  |Identification                          | Taxa            | Why             |
  |----------------------------------------|-----------------|-----------------|
  | Sorex n. sp. "funnyfeet"               |  Sorex          | "Working names" (eg, informal identifiers not yet published as formal names) are perhaps the most common usage of the ‘A {string}’ formula |
  | Iron-rich mudstone                     | unidentifiable  | While non-Linnean taxonomies are possbile in Arctos, they do not exist for all material. In this case, a mineral sample has no formal taxonomy. |
  | Birchbark basket with moosehide lacings| Alces alces     | Artifact collections identify objects using ethnological terminology, but the items are often made from biological material. Adding linkages to Linnean taxonomy makes the material discoverable by attributes of those taxa. With these linkages, a biologist might locate this item and request subsamples of the (often pre-industrial) biological components. |

## Identification Order

A record may carry any number of identifications which may be in any order. (Order is currently confined to integers between zero and ten.) Order zero is generally treated as "unaccepted" in the UI; all other values are "accepted." Order is non-unique; multiple determinations may be ranked 0 (eg if they are later determined to be incorrect), or multiple determinations may be ranked '1' (="most preferred") - for example, if they consider different aspects of a cultural item (parka and -Gulo_).

## Determined Date

`Identification . Made_Date VARCHAR2(22) null`

[ISO8601](/documentation/dates) date-type. The
chronological order of determinations may be the most critical issue.


## *Sensu* Publication

`Identification . Publication_ID NUMBER(22) null`

Signifies that a determination is made in the sense of (*sensu*) a
particular [publication](/documentation/publications).
This may be used both in the taxonomic sense ("this specimen fits in
with Some Author’s concept of *Aus bus*") and as supporting
documentation ("We’ve determined this to be *Aus bus* using the methods
provided by Some Author").


## Taxon Concept

As well as specifying a name during an identification, an (optional)
link can be made to a particular _taxonomic concept_: a ‘name plus its
accordingTo’. This is very valuable when a name has changed its
circumscription during subsequent revisions. See the
[Taxonomic Concepts](https://handbook.arctosdb.org/documentation/taxonomy.html#taxonomic-concepts)
section of the Taxonomy page for more background.

To enter a taxon concept in the Identification pane, type part of the
taxon concept’s label and hit TAB, to pull up a pop-up window of
options. The label is of the form `<i>name</i> author <i>sensu</i>
ref`.



## Remarks

`Identification . Identification_Remarks VARCHAR2(4000) null`

Remarks can elaborate or clarify any signficant aspect of a
determination. This is a good place for recording the verbatim form of
a [Determined Date](#determined-date) if it was not recorded as an exact day.



## Determiner

`Identification_Agent . Agent_ID NUMBER(22) not null`

Determiners are the [agent](/documentation/agent) (or agents, usually
a person) who identified the specimen. More than one agent can be
entered. The order in which such co-determiners are displayed is set in
the form by the order in which they were added to the determination. To
change the displayed order, drag rows.


## Identification Attributes

Identification attributes allow adding any type of metadata to identifications.

## Nature of ID



`Identification . Nature_Of_ID VARCHAR2(30) not null`

The basis of the identification. Vocabulary is defined
in, and controlled by, a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctnature_of_id).

> This concept is undergoing modification. Please see [Issue 515](https://github.com/ArctosDB/arctos/issues/515) for additional guidance.

SpecimenSearch contains a dropdown list with the following values. All
searches are case-insensitive. Examples are fictitious and incomplete.

-   Current Identification CONTAINS: Substring match of
    current identification. "Sorex" matches "Sorex" and "Sorex
    cinereus."
-   Current Identification IS: Exact string match of
    current identification. "Sorex" matches only "Sorex," not "Sorex
    cinereus."
-   Current Identification IN LIST: Comme-delimited list-item exact
    match of current identification. "Sorex cinereus, Sorex monticolus"
    matches both "Sorex cinereus" and "Sorex monticolus" but not "Sorex
    yukonicus" or "Sorex."
-   Current Identification NOT: Exact-match exclusion of
    current taxonomy. geog="someplace" + taxon_name=Current
    Identification NOT "Sorex" + this option returns everything from
    "someplace" that is not currently identified as "Sorex" – including
    "Sorex cinereus"
-   Any Identification CONTAINS: Same as Current Identification CONTAINS
    but includes unaccepted identifications.
-   Any Identification IS: Same as Current Identification IS but
    includes unaccepted identifications.
-   Any Identification IN LIST: Same as Current Identification IN LIST
    but includes unaccepted identifications.
-   Any Identification NOT: Same as Current Identification NOT but
    includes unaccepted identifications.
-   CurrentTaxonomy CONTAINS: Substring match of any taxon term of
    current ID. "Soricidae" finds "Sorex cinereus" and "Sorex
    yukonicus."
-   RelatedTaxonomy CONTAINS: Substring match of any taxon term within
    one relationship step of current ID. "Apiales" finds "Washingtonia
    divaricata" even though Apiales is not directly an attributes of
    Washingtonia divaricata, because Washingtonia divaricata is listed
    as a synonym of Osmorhiza berteroi, which DOES contain the attribute
    Apiales (as an Order).
-   CommonName CONTAINS: Substring match of any common name of the
    current-identification taxon.
##  How To

Instructions for doing specifc tasks related to Identifications in Arctos

-  [How To Create and Edit Determinations](https://handbook.arctosdb.org/how_to/How-to-Create-and-Edit-Determinations.html)
-  [How To Batch Update Identifications](https://handbook.arctosdb.org/how_to/How-to-Batch-Update-Identifications.html)
-  [How To Use Complex Identifications](https://handbook.arctosdb.org/how_to/How-to-Use-Complex-Identifications.html)
-  [How To Use Complex Identifications as Low-quality Data Flags](https://handbook.arctosdb.org/how_to/How-To-Use-Complex-Identifications-As-Low-Quality-Data-Flags.html)


See also, Taxonomy

-  [How to Create Taxa](http://handbook.arctosdb.org/how_to/How-to-Create-Taxa.html)
-  [How to Edit Taxa](http://handbook.arctosdb.org/how_to/How_to_Edit_Taxa.html)
-  [How to Manage Taxonomic Classifications](http://handbook.arctosdb.org/how_to/How-to-manage-taxonomic-classifications.html)
-  [How to Manage Taxonomy Hierarchically](http://handbook.arctosdb.org/how_to/How-to-Manage-Taxonomy-Hierarchically.html)
-  [How to Search for Specimens with Identification and Taxonomy](http://handbook.arctosdb.org/how_to/How_to_Search_for_Specimens_with_Identification_and_Taxonomy.html)
-  [How To Manage Taxon Concepts in Arctos](https://handbook.arctosdb.org/how_to/How-To-Manage-Taxon-Concepts.html)
-  [How To Create Taxa in Arctos Ichnology](https://handbook.arctosdb.org/how_to/How-to-Create-Taxa-in-Arctos-Ichnology.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/identification.markdown" target="_blank">here</a>.
