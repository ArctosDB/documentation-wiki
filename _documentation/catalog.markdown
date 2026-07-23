---
title: Catalog
authors: Dusty L. McDonald
date_updated: 2025-02-24
---

Catalogs or Collections are administrative lists with inconsistent relationships to
physical items. Therefore, a Cataloged Item or Record is an abstraction, *i.e.*,
it is an item that has been cataloged, and hence defined, by the
administrator of a catalog. 

The term "*record*" may be used synonymously with "cataloged item" throughout Arctos, and is favored over "specimen", which is generally understood as referring to biological objects.

## Catalog Number

`Cataloged_Item . Cat_Num VARCHAR2(40) not null`

Catalog Number is the identifier assigned to a
Cataloged Item. It must be unique (case-insensitive) within a particular
collection (duplicate catalog numbers within a collection are not allowed). Various formats are supported and bring various functional limitations with them.
See [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcatalog_number_format) for more information.

    
## Cataloged Item Type

`Cataloged_Item . Cataloged_Item_Type VARCHAR2(20) not null`

The [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCATALOGED_ITEM_TYPE) is available to explicitly label various types of cataloged material, also referred to as the DarwinCore term Basis of Record.

## Remarks

`Coll_Object_Remark . Coll_Object_Remarks VARCHAR2(4000) null`

Use remarks to document non-standard information pertaining to the record. 
Do not use remarks for any information which could be recorded with more structure elsewhere, including remarks better stored with a part, event, or any other "piece of the specimen."

## Entered By

`Coll_Object . Entered_Person_ID NUMBER(22) not null`

Agent creating the catalog record in Arctos.

## Entered Date

`Coll_Object . Coll_Object_Entered_Date NUMBER(7) not null`

Date on which the record was created.

## Edited By

`Coll_Object . Last_Edited_Person_ID NUMBER(22) null`

Agent last editing the catalog record.

## Edited Date

`Coll_Object . Last_Edit_Date NUMBER(7) null`

Date on which the record was last edited.

## Flags

`Coll_Object . Flags VARCHAR2(20) null`

Flags mark a specimen as missing information during the entry process. It is sometimes more convenient to bulkload data after the catalog record exists than to enter data with the record; flags serves as a marker to facilitate locating those records still needing attention.

## Associated Species

`Coll_Object_Remark . Associated_Species VARCHAR2(4000) null`

Free-text description of species associated with the specimen.

## GUID Prefix

Public | Required | Editable | Max Length | Value Code Table | What it does 
 -- | -- | -- | -- | -- | -- 
Yes | Yes | No | 20 | None | In conjunction with catalog number it forms a unique identifier within Arctos, and in conjunction with Arctos’ URI forms a Globally Unique Identifier (GUID) for the specimen record. 

* Although not controlled by a code table, GUID_PREFIX is required to be 20 or fewer characters, and contain exactly one colon `:` not at the beginning or end of the string. 

GUIDs, once formed, must never be allowed to change or expire, so selection of GUID Prefix is an important task in new collection set-up. See [Creating a Meaningful GUID](https://handbook.arctosdb.org/best_practices/GUID.html). All catalog record citations should occur by way of GUID. Note that GUID Prefix is an independent concept; unrelated to any other fields, real or imagined.

## Collection

`Collection . Collection VARCHAR2(50) not null`

A short name for a particular collection type. For example:

-   Mammal Specimens

<h2 id="collection-code">
  Collection Type
</h2>

<!---

Public | Required | Editable | Max Length | Value Code Table | What it does 
 -- | -- | -- | -- | -- | -- 
No | Yes | No | 5 | [ctcollection_cde](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde) | Links collection catalogs to collection-type-specific code tables.

Code applied to a collection that provides context for types of parts and attributes that the collection will use. Exploring the "filter" option of [Attribute Type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_TYPE) or [Part Name](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_part_name)
will provide an idea of how a collection type has been used.

[//]: # (See https://github.com/ArctosDB/documentation-wiki/issues/209)
---->

## Description

`Collection . Descr VARCHAR2(4000) null`

An extended name or description of the collection, free text. For example:

-   University of Alaska Museum, Mammal Collection
-   Parasite Collection at the Museum of Southwestern Biology,
    Albuquerque, NM
-   Kenelm W. Philip lepidoptera collection

## Institution Acronym

Public | Required | Editable | Max Length | Value Code Table | What it does 
 -- | -- | -- | -- | -- | -- 
No | Yes | No | 20 | None | Linked to barcode series and provides a method for sorting collections by institution.

Acronym of the institution that hosts the catalog and collection. For example, "MVZ" for Museum of Vertebrate Zoology, "UAM" for University of Alaska Museum (of the North) and "MSB" for Museum of Southwestern Biology. 

Arctos generally follows global collection registries that include institution acronyms including:
 - <a href="https://www.gbif.org/grscicoll">Global Biodiversity Information Facility (GBIF) Registry of Scientific Collections (GRSciColl)</a>
 - <a href="http://sweetgum.nybg.org/science/ih/herbarium-details/?irn=123984" class="external">Index Herbariorum</a>


## Institution

Expanded Institution Acronym


## Taxonomy Source

Collections may choose and order any number of [Taxonomy Source, code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxonomy_source). Classifications are applied to records from the first source which includes data for all taxa used in an identification.

# Understanding Identifiers

The identifiers associated with a record are useful at various scales and origins; understanding the scope at which an identifier can function before choosing an identifier is critical to successful citations, references, and attribution.


| Identifier Type | Example  | Useful For   | Description  |
| --------------- | ----------------- | ---------------------- | ------------------------ |
| catalog number  | 246033   | Unique identifier within the collection. | All records in Arctos have a catalog number, and catalog number is unique within a collection. |
| GUID_Prefix     | MVZ:Herp   | An internal value, may be useful for specifying collections within Arctos. Should never be used outside of Arctos. | GUID_Prefix is unique and synonymous with "collection" within Arctos. |
| triplet         | MVZ:Herp:246033 | Unique identifier within Arctos. | GUID_Prefix combined with catalog number makes a unique-within-Arctos idenfier which has traditionally been used as a sort of "local GUID." (Yes, we do know what the "g"- and "u" - in GUID stands for....) This identifer should ***never\*** be used when there's any possibility that it could be interpreted as something outside of Arctos, and should not be referred to as a "GUID." |
| collectionID    | [https://arctos.database.museum/collection/MVZ:Herp](https://arctos.database.museum/collection/MVZ:Herp)   | Identifying Arctos collections in any context. | GUID_Prefix plus an Arctos-supplied URI fragment forms a true GUID for the collection. |
| GUID            | [https://arctos.database.museum/guid/MVZ:Herp:246033](https://arctos.database.museum/guid/MVZ:Herp:246033) | Unambiguously referring to the record at any scale in any context. When in doubt, use this. (Use the 'copy' button on the record "GUID page" to get it.)  | collectionID plus catalog number forms a true GUID for the record. This is occasionally (and regretably) referred to as "Record Identifier." |



## Searching

From SpecimenSearch, Catalog Number accepts arguments of several forms.
The following table is illustrative.

  |Input     | Matches                                         | Why           |
  |----------|-------------------------------------------------|---------------|
  |12        | ```12```                                              | No-operator inputs are string matched.|
  |12-14     | ```12```, ```13```, or ```14```                                   | Dash-separated smaller–&gt;larger integers specify a range. Note that there is a 1000-item limit on ranges and lists.|
  |=12-14    | ```12-14```                                           | "=" (equals) prefix overrides all other operators and assumptions; only a matching string is returned.|
  |12-11     | ```12-11```                                           |  "Second" item is smaller than "first" item; not considered as range.|
  |12-0110   | ```12-0110```                                          | "Second" item is zero-padded so not considered an integer; not considered as range.|
  |12,13,14  | ```12```, ```13```, or ```14```         |  Commas are treated as list delimiters unless the value is prefixed with an equals sign. Note that there is a 1000-item limit on ranges and lists.|
  |12,13a,14 | ```12```, ```13a```, or ```14```                                 | Commas are treated as list delimiters unless the value is prefixed with an equals sign. Neither catalog numbers nor list elements must be numeric. Note that there is a 1000-item limit on ranges and lists.|
  |%12%      |```12```, ```12```1, ```12```a, 9994836```12```345, ….      | "%" is "match anything." This matches anything CONTAINING 12.|
  |%12       |  ```12```, 1```12```, AABC-5-a```12```, ….                        |  "%" is "match anything." This matches anything ENDING WITH 12.|
  |\_12      |  0```12```, a```12```, 9```12```, ….                              |  "\_" is "match any single character."|
  |1_2       | ```1```0```2```, 1```12```, ```1```A```2```, ….                               | "\_" is "match any single character."|


## Understanding Cataloged Items

We address assigning catalog numbers to material with a few brief
examples.

In short, we strongly recommend cataloging the item of
interest: the material that Researcher \#2 will ask to borrow, the item that a collection needs to track conservation or preservation or internal locations, the object that will be audited by administrators, etc. Any other approach complicates tracking citations and data management.

We present as example a brief list of things that have been cataloged and some considerations

-   A **biological individual**
    -   Standard practice in vertebrate collections, and the method we
        strongly encourage when possible. Biological individuals are
        generally the item of scientific interest, and the thing a
        future researcher will wish to examine if attempting to
        replicate results.
-   A **biological individual and their parasites**
    -   Common practice in vertebrate collections, but makes locating or
        citing a parasite more complicated and less reliable than it
        needs to be. Rather, we recommend cataloging the host,
        cataloging the individual parasites (or donating them to someone
        who can), and establishing proper relationships.
-   A **lot** (*e.g.*, all intestinal parasites from an individual; all
    members of a taxon from a time and place, or all insects or fish from
    a trap)
    -   Lots are a convenient and sometimes necessary "working
        group," (*e.g.*, due to the number of individuals involved or
        the available expertise in identification) but lots may also complicate items available for citation. Creating parts of a record may be needed to track loans and usage of a single individual from a lot. Insect
        collections often loan lots, and the borrowing researcher will
        sort the lot to individuals for which they are provided catalog
        numbers. 
-   An **occurrence** (*e.g.*, each instance of the capture of
    an individual)
    -   Arctos supports cataloging encounters as
        [specimen events](/specimen-event.html) under one catalog record. However there are situations where the blood sample of wild caught banded birds is cataloged as independent records, and instead use of relationships such as ```same individual as``` or Arctos Entity collection may be used instead to indicate the shared origin of the samples.
-   **Your "share"** of an individual (*e.g.*, tissues wiht the bones being
    cataloged and housed elsewhere)
    -   Similar to occurrences in that this leads to multiple
        identifiers being assigned to an individual (and potentially the
        two being compared in a study), which can be avoided when both systems  support resolvable identifiers and link to each other as in Arctos. Specimen
        downloads should include the relationship, and Arctos also adds reciprocal links with records tied as "same individual as" .
-   **Various parts** of an individual (*e.g.*, tissues cataloged separately
    from vouchers)
    -   This denormalization of data inevitable leads to divergence and
        confusion (not to mention increased curatorial workload), in
        addition to the aforementioned implications of assigning the
        item of scientific interest multiple primary identifiers. Having
        reconciled the data in similar systems, we cannot possibly be
        vigorous enough in discouraging the continuation of
        such methodology. Instead a single record can have several parts. Each part has its own unique attributes.
-   An **entire collection**
    -   We include this to stress the fact that cataloged items are
        wholly arbitrary concepts assigned to whatever someone wanted
        to catalog. That is, the scientific value of a cataloged number
        is entirely up to the person deciding upon the material
        to catalog.


## Understanding Catalog Records

As a highly normalized system, there is no real meaning to the term  "catalog record" in Arctos. Most views of the data provide information somewhat equivalent to [Simple DarwinCore](https://dwc.tdwg.org/simple/). No view contains everything that might be considered the entire record. The available information varies wildly across records and collections.

## Understanding DarwinCore mapping

The primary entity in DarwinCore (DWC) is the Occurrence ([https://dwc.tdwg.org/terms/#occurrence](https://dwc.tdwg.org/terms/#occurrence)). Mapping Arctos records to Occurrences is not straightforward (it's like going from a color palette of 255 to only the 5 primary colors); new OccurrenceIDs must be minted for DWC transfer by appending "seid" (Specimen Event ID, although identifiers should be viewed only as identifiers). A GUID + SEID URI will highlight the relevant Event determination in Arctos records (example below). A few examples follow; these are not the only complex situations possible in Arctos, but are the most common. (Data in Arctos change frequently; please [let us know](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=contact&template=contact-arctos.md&title=%5BCONTACT%5D) if an example does not make sense or function as described.)

* [https://arctos.database.museum/guid/MSB:Mamm:55245](https://arctos.database.museum/guid/MSB:Mamm:55245) is a "simple" record with one Event determination in Arctos, and is sent to DWC as a single Occurrence.
* [https://arctos.database.museum/guid/DMNS:Mamm:12344](https://arctos.database.museum/guid/DMNS:Mamm:12344) and [https://arctos.database.museum/guid/MSB:Mamm:233616](https://arctos.database.museum/guid/MSB:Mamm:233616) together represent one Occurrence, with parts in different collections. These are provided to DWC as two Occurrences; we make no attempt to merge them.
* [https://arctos.database.museum/guid/MVZ:Egg:10460](https://arctos.database.museum/guid/MVZ:Egg:10460) represents at least two Occurrences (the thrush and the cuckoo, although individual eggs could be considered Occurrences as well). We provide this to DWC as a single Occurrence.
* [https://arctos.database.museum/guid/MSB:Mamm:193703](https://arctos.database.museum/guid/MSB:Mamm:193703) represents two Occurrences, and is provided via DWC as two Occurrences. In this case a single individual was sampled multiple times, and the samples were cataloged as one record. (The improbable use of event type "[collection](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_event_type)" for both events makes this record difficult to interpret.)
* [https://arctos.database.museum/guid/UAMb:Herb:26709](https://arctos.database.museum/guid/UAMb:Herb:26709) represents two Occurrences, and is provided via DWC as two Occurrences. In this case there is uncertainty as to which "interpretation" of the original data is most appropriate; the data as provided have no spatial information, the spatial information (from automation) are occasionally wildly wrong, and the collection simply does not have the resources to review each record and choose the best at this time, so both are made available. 

### DWC Mapping

[**Current DarwinCore Mapping for IPT** <i class="fa-solid fa-arrow-up-right-from-square"></i>](https://docs.google.com/spreadsheets/d/1aCBYX9ErjicL8VdNdHbJUI0JTwWu6L4D_37gJ7IneRY/edit?usp=sharing)


### Minimum Data

The minimum possible catalog record is a catalog number, although "core" data such as Identifications and Accessions are difficult or impossible to avoid in the interfaces. There are "we don't know" values for all "required" fields and concepts; "unidentifiable" is a valid taxon which may be used in identifications, for example. 

### All Data

The "full record" consists of the core data and all data linked to those data at any depth. The full record should not be viewed as something that resides entirely within Arctos. There are currently no views which could be considered "the full record." A  record may contain any number of Attributes, Collectors, Citations, record or specimen-Events, Identifications, Media, Identifiers, Parts, Transactions, etc. Many of these objects are linked to other objects, which are in turn linked to more. Some incomplete examples:

* Identifications may be linked to any number of taxa. Taxa may have any number of classifications, including those in external systems (such as [WoRMS](http://www.marinespecies.org/)).
* Citations are linked to Publications. Publications may be linked to CrossRef, which may link to other publications (references and referenced by), author data in the ORCID system, funding data in FundRef, etc. Additionally, the context of other specimens - and therefore everything they are linked to, including more specimens - cited from publications may be critical to understanding the current specimen.
* Other Identifiers may form links to various sources of data including GenBank, UCMP's Locality Database, specimens in other collections in and out of Arctos, etc.
* In addition to the direct link through Collectors, most "nodes" employ to Agents in various capacities - as publication authors, identifiers, attribute determiners, verifiers of specimen-events, etc. Agents in turn may contain:
  * Any number of names
  * Any number of status reports
  * Any number of addresses, including any data which resides at dereferencable addresses (such as publications from ORCID, funding information through Projects, linked data from WikiData, etc.)
  * Any number of Media, which may contain anything - images, text, videos, static or linked data, etc.
  * The context of activity within Arctos, which often includes thousands of other specimens which may include everything mentioned here
  * Any number of related Agents, including all similar information from them and the agents to whom they are related
  
Any of these data - and those not mentioned here - may be critical to answering some questions involving a collection object or item, and should therefore be considered "the record." It is unlikely that any question requires all of these data, and assembling them into one view would be, at best, difficult. Arctos links to related data when possible, and we are always receptive to adding more or different data to "default views," adding pathways to records through any of these data, or otherwise providing tools to access various data in the context of other data. 
  
  See also: [Arctos as an ecosystem](https://arctosdb.org/about/details/ecosystem/)

# Defining Collections

Collections in Arctos are wholly administrative. Collections may be comprised of a taxa (*e.g.* mammals), of various taxa organized for some purpose (such at the [Hildebrandt Collection at MVZ](http://mvz.berkeley.edu/Other_Collections.html)),
by legacy usage, or anything else. 

Legacy collections often exist for various reasons, and these may have duplicate catalog numbers, unpredictable formats which may
confuse users, or contain arbitrary divisions which no longer are relevant. Combining these into a unified collection in Arctos is generally
trivial, and Arctos provides various mechanisms (such as [actionable identifiers](identifiers.html) and 
[redirects](/redirect.html)) to ensure that no functionality is lost. Collections with "less citable" catalog number schemes are unlikely to support actionable citations, and so little is lost if the "traditional catalog numbers" are subsumed under a "citable catalog number." This approach has been used to unify and disambiguate several Arctos collections.

# Recataloging Records

It is sometimes necessary to move cataloged items from one collection or
catalog number to another. When doing so, it is important to maintain a
way of finding the specimen by its original identifiers. In this, be as
specific as possible. Use specific identifier types and GUIDs if
possible. (See more at [Other IDs]({% link _documentation/identifiers.markdown %}).)

Arctos provides HTTP redirect capability (see [Redirect]({% link _documentation/redirect.markdown %})), under which one URL
(<http://arctos.database.museum/guid/KNWR:Ento:7193>, for example) can
be automatically redirected to another
(<http://arctos.database.museum/guid/UAM:Ento:228334>). This helps in
maintaining a record of the specimen rather than the specimen’s
identifying numbers, and allows users to continue using bookmarks and
links.
                                                             |

# Edit History

Many updates trigger cache refresh requests. These updates are also logged in table ``flat_edit_history``, which is available to operators in the UI (something like 'Enter/Edit History'). The cache and the accompanying update log may be incomplete or misleading in any number of ways. Errors and omissions should be reported, but many scenarios will result in cryptic (at best) information, and may result in a stale cache. Operators may manually request refresh from the UI.



