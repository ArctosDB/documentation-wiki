# Identifications

<div class="anchors">

[Scientific Name](#scientific_name)\
[Determination Formula](#id_formula)\
[“A {string}” Formula](#astring)\
[Determiner](#id_by)\
[Determination Date](#id_date)\
[Nature of Determination](#nature_of_id)\
[*Sensu* Publication](#identification_publication)\
[Remarks](#id_remarks)\
[Searching](#search)

</div>

Determinations, or “identifications” (IDs), apply taxonomic terms to
specimens.  In other words, determinations are not necessarily just
taxonomic terms.  Information about taxonomic names (which are used to
compose determinations) is in [Taxonomy](taxonomy).

A taxonomic determination is comprised of:

-   the taxonomic term, or combination of terms and/or modifiers
-   the name (or names) of the determiner(s)
-   the date of the determination
-   and the nature, or basis of the determination

Arctos maintains a history of determinations for each specimen. 
Specimens are therefore reidentified by adding a new determination and
retaining prior determination(s) as “unaccepted.” This means that there
can be only one accepted determination, but not necessarily that prior
identifications are wrong. In fact, complimentary IDs by experts or by
alternative methods enhance the value of the specimen.\
[]()

**Scientific Name:** There is a distinction between Scientific Name here
in determinations, as opposed to [Scientific Name as it is used in the
taxonomy table](taxonomy/#scientific_name). The latter is a term from a
table serving as a taxonomic look-up (or authority). Here, it is a
character string applied to a specimen by a [determiner](#id_by), though
it uses terms from the look-up table to create such strings.
Nevertheless, in the simplest and commonest case ([Determination
Formula](#id_formula)= “A”), they are identical. (Some forms display a
third related term called [Display Name](taxonomy/#display_name), which
is merely a specific formatting of the data in Taxonomy.)  The
explanation of Determination Formula (immediately below) is
illustrative.

[]()

<div class="fldDef">

Identification . TAXA\_FORMULA\
VARCHAR2 (25) not null\
[cttaxa\_formula](http://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula)

</div>

**Determination Formula:**\
A determination can contain more than one taxon, possibly in conjunction
with modifiers. Taxa are combined with each other, or with modifiers,
according to a formula. For example:

  -------------------------------------------------------------------------------------------
  Identification.Scientific\_Name            Formula           Taxonomy.Scientific\_Name(s)
  ------------------------------------------ ----------------- ------------------------------
  *Sorex cinereus*                           one taxon (A)     A = *Sorex cinereus*

  *Sorex cinereus* ?                         taxon (A) + “?”   A = *Sorex cinereus*

  *Sorex cinereus* or *Sorex ugyunak*        A “or” B          A = *Sorex cinereus*\
                                                               B = *Sorex ugyunak*

  *Sorex sp.*                                A + “sp.”         A= *Sorex*

  *Canis latrans x Canis lupus familiaris*   A “X” B           A = *Canis latrans*\
                                                               B = *Canis lupus familiaris*
  -------------------------------------------------------------------------------------------

More formulae are documented in the [vocabulary-control
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula).
Bulkloader taxa guidelines are [here](/how-to/create/bulkloader/#taxa).

You can pick a formula from the editing screen for determinations.  You
do not need to designate a formula for data entry if you intend a simple
one-taxon determination (formula “A”), and the bulkloader will recognize
and appropriately parse constructions such as “Canis sp.”

### []()\
“A {string}” Formula

The “A {string}” formula links nonformulaic identifications to taxa,
thereby allowing infinite flexibility in applying identifications to
specimens (if you can type it in fewer than 255 UTF16 characters, it’s
“valid”) while retaining a link to formal taxonomy (e.g., things that
have appeared in the reviewed literature) and thereby facilitating the
discovery of informal data through formal taxa (including namestrings,
“higher taxonomy” and other metadata, relationships, and common names).

The “taxon variables” as used in constructing taxon names exist for the
purposes of ordering or formulating complex names, and as such there
exist no restrictions on how many ‘A’s can exist for an identification.
The following table is illustrative.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Identification                            Taxa             Why
  ----------------------------------------- ---------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Sorex n. sp. “funnyfeet”                  Sorex            “Working names” (eg, informal identifiers not yet published as formal names) are perhaps the most common usage of the ‘A {string}’ formula

  Iron-rich mudstone                        unidentifiable   While non-Linnean taxonomies are possbile in Arctos, they do not exist for all material. In this case, a mineral sample has no formal taxonomy.

  Birchbark basket with moosehide lacings   Alces alces\     Artifact collections identify objects using ethnological terminology, but the items are often made from biological material. Adding linkages to Linnean taxonomy makes the material discoverable by attributes of those taxa. With these linkages, a biologist might locate this item and request subsamples of the (often pre-industrial) biological components.
                                            Betula           
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

<div class="fldDef">

Identification . Made\_By\_Agent\_id\
NUMBER not null (FK)

</div>

**Determiner:** The determiner is the [agent](agent) (or agents, usually
a person) who identified the specimen. More than one agent can be
entered. The order in which such co-determiners are displayed is set in
the form by the order in which they were added to the determination. To
change the displayed order, create a new copy of the determination with
the determiners in the desired order, then delete the old record.\
[]()

<div class="fldDef">

Identification . Made\_Date\
DATE null

</div>

**Determined Date:** [ISO8601](/documentation/dates/) date-type. The
chronological order of determinations may be the most critical issue.

<div class="fldDef">

Identification . Nature\_Of\_ID\
VARCHAR2 (30) not null\
[ctnature\_of\_id](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctnature_of_id)

</div>

[]()\
**Nature of ID:** The basis of the identification. Vocabulary is defined
in, and controlled by, a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctnature_of_id).

<div style="border:1px solid red;margin:2em;padding:2em">

This concept is undergoing modification. Please see [Issue
515](http://code.google.com/p/arctos/issues/detail?id=515) for
additional guidance.

</div>

[]()

<div class="fldDef">

Identification.Publication\_ID\
NUMBER NOT NULL (FK Publication.Publication\_ID)

</div>

***Sensu* Publication:**\
Signifies that a determination is made in the sense of (*sensu*) a
particular
[publication](http://arctosdb.wordpress.com/documentation/publications/ "Publications").
This may be used both in the taxonomic sense (“this specimen fits in
with Some Author’s concept of *Aus bus*“) and as supporting
documentation (“We’ve determined this to be *Aus bus* using the methods
provided by Some Author”).\
[]()

<div class="fldDef">

Identification . Remarks\
VARCHAR2 255

</div>

**Remarks** can elaborate or clarify any signficant aspect of a
determination.  This is a good place for recording the verbatim form of
a [Determined Date](#id_date) if it was not recorded as an exact day.\
[]()\
SpecimenSearch contains a dropdown list with the following values. All
searches are case-insensitive. Examples are fictitious and incomplete.

-   Current Identification CONTAINS: Substring match of
    current identification. “Sorex” matches “Sorex” and “Sorex
    cinereus.”
-   Current Identification IS: Exact string match of
    current identification. “Sorex” matches only “Sorex,” not “Sorex
    cinereus.”
-   Current Identification IN LIST: Comme-delimited list-item exact
    match of current identification. “Sorex cinereus, Sorex monticolus”
    matches both “Sorex cinereus” and “Sorex monticolus” but not “Sorex
    yukonicus” or “Sorex.”
-   Current Identification NOT: Exact-match exclusion of
    current taxonomy. geog=”someplace” + taxon\_name=Current
    Identification NOT “Sorex” + this option returns everything from
    “someplace” that is not currently identified as “Sorex” – including
    “Sorex cinereus”
-   Any Identification CONTAINS: Same as Current Identification CONTAINS
    but includes unaccepted identifications.
-   Any Identification IS: Same as Current Identification IS but
    includes unaccepted identifications.
-   Any Identification IN LIST: Same as Current Identification IN LIST
    but includes unaccepted identifications.
-   Any Identification NOT: Same as Current Identification NOT but
    includes unaccepted identifications.
-   CurrentTaxonomy CONTAINS: Substring match of any taxon term of
    current ID. “Soricidae” finds “Sorex cinereus” and “Sorex
    yukonicus.”
-   RelatedTaxonomy CONTAINS: Substring match of any taxon term within
    one relationship step of current ID. “Apiales” finds “Washingtonia
    divaricata” even though Apiales is not directly an attributes of
    Washingtonia divaricata, because Washingtonia divaricata is listed
    as a synonym of Osmorhiza berteroi, which DOES contain the attribute
    Apiales (as an Order).
-   CommonName CONTAINS: Substring match of any common name of the
    current-identification taxon.
