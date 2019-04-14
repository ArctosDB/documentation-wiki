---
title: How to Search for Specimens with Identification and Taxonomy
layout: default_toc
---


# How to Search with Identification and Taxonomy

There are various search fields on SpecimenSearch under **Identification and Taxonomy**, and
they query and return very different data.

## Identification

**Identification** queries the identification applied to specimens
and includes the option to query previous identifications as well as the
current identification.  
_______________

![Screen Shot 2019-04-13 at 2 27 57 PM](https://user-images.githubusercontent.com/15368365/56084948-650af400-5df8-11e9-8f9b-dfc15871719b.png)
_______________

Identifications are usually based in taxonomy, but are not wholly
taxonomy. Examples of strings that will currently find specimens
include:

-   *Sorex yukonicus* (a taxon name)
-   *Sorex cinereus* or *Sorex ugyunak* (an indeterminate identification)
-   *Monticola rufiventris* and *Cuculus optatus* (a cataloged item
    consisting of multiple taxa)
-   *Diadocidia sp. nov. cf. borealis* (a "working name" not yet
    formalized as taxonomy)
-   Basket handle (a non-Linnean term identifying a
    non-biological specimen)

## Any taxon, ID, common name

This field queries all taxonomy classifications, and
classifications related to taxa attached to specimens. For example,
querying MVZ Mammals for Muridae returns *Euryoryzomys nitidus,* even
though MVZ’s preferred classification uses Cricetidae as the family of
that name, because Freebase asserts that the unranked term "Muridae" is
between "Muroidea" and "Sigmodontinae."  Results will take longer to return
in this field because of the wider net it casts.

##  Specific Ranked Classification Term

More specifically, a search can be conducted by entering
the taxon name in the appropriate classification field.  
Each ranked term such as **Kingdom**, **Family**, **Species** etc. returns only specimens
that have a classification that includes that term.  If the query is limited
to a specific collection, it will query only the collection’s preferred classification.
Each collection claims a classification, and when appropriate terms (family, order, etc.) are available they are stored in
the search structure and made available as search fields on the SpecimenSearch form. Therefore, searching *e.g.*, Family is
searching "Family, as asserted by each collection's preferred taxonomy source." 

For example, whether a species is assigned to the family Muridae or Cricetidae may depend on what classification authority is selected by the collection.  Searching at the family level may not return all the expected specimens.  

In this example, a search for Oryzomys returned almost all records in the family Cricetidae, but a search for all specimens in that family would have missed two specimens in a collection that uses a classification with the family Muridae.

_______________

![Screen Shot 2019-04-13 at 3 05 37 PM](https://user-images.githubusercontent.com/15368365/56085274-b073d100-5dfd-11e9-9295-b9812148578f.png)

_______________

![Screen Shot 2019-04-13 at 3 03 08 PM](https://user-images.githubusercontent.com/15368365/56085237-465b2c00-5dfd-11e9-9c95-410a4d54057f.png)
_______________


## Additional Examples

Each collection "claims" one taxon term source, and data from that
source, when available, are stored with the specimen record. For
example, CollectionX claims the COMPLETE classification source, which
contains the following data for namestring "*Sorex cinereus*".

  | Term            | Rank |
  |-----------------|------|
  | Animalia        | kingdom |
  | Chordata        | phylum |
  | Mammalia        | class |
  | Soricomorpha    | order |
  | Soricidae       | family |
  | Sorex           | genus |
  | cinereus        | species |

CollectionY claims the NORANKS source:


  | Term            | Rank |
  |-----------------|------|
  | Animalia        | |
  | Chordata        | |
  | Mammalia        | |
  | Soricomorpha    | |
  | Soricidae       | |
  | Sorex           | |
  | cinereus        | |

Users who search for "Mammalia" in the "Class" field from SpecimenSearch
will find CollectionX specimens but will NOT find CollectionY specimens.

Searching the "Any taxon, ID" field will find specimens from both Collections X and Y.

GlobalNames may return a classification with an unaccepted family for *Sorex cinereus*, for example:

| Term            | Rank |
|-----------------|------|
| Shrewidae       | family |

Since neither of CollectionX or Y uses this classification, 
searching the Family field for "Shrewidae" will find no specimens. 
But searching the "Any taxon, ID" field for Shrewidae will find Sorex
cinereus from both collections, based on the assertions made by
this unaccepted classification through GlobalNames.

The "Any taxon, ID" field represents classifications according to ANY provider to 
GlobalNames.org. This field is a very large net, and most queries
using it will return false positives - specimens that do not fit with
current consensus on the term searched. This field is appropriate
for exploratory searching: "what genera did someone at some point
consider to be members of a specific taxon?"

The individual ranked fields (Family, Kingdom, etc.)
represent the current assertions of the collections and their taxonomists. 
These fields are appropriate for asking pointed
questions: "how many shrews does the XYZ collection hold?" 


## Searching from Taxon Page

There are multiple ways to search for a taxon from the Search/Taxonomy screen and from there to specimens identified with that taxon.  

_________________

![Screen Shot 2019-04-13 at 3 30 52 PM](https://user-images.githubusercontent.com/15368365/56085478-3fceb380-5e01-11e9-8d8f-77454ef96ab2.png)

_________________

Each field returns different results and can be modified to be "exact" or "contain" the search string.  Note values that pop into search form with these examples.

Names that contain the string "microtus"
_________________
<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus>

![Screen Shot 2019-04-13 at 3 33 51 PM](https://user-images.githubusercontent.com/15368365/56085500-94722e80-5e01-11e9-8a6e-4915be540f9a.png)
_________________

Names that ARE Microtus:

<http://arctos.database.museum/taxonomy.cfm?taxon_name==microtus>
_________________

![Screen Shot 2019-04-13 at 3 34 57 PM](https://user-images.githubusercontent.com/15368365/56085514-c1264600-5e01-11e9-92f7-c5d1e02f5c64.png)
_________________

Names that contain microtus AND have an attribute of "mammalia":

<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus&taxon_term=mammalia>
_________________

![Screen Shot 2019-04-13 at 3 36 34 PM](https://user-images.githubusercontent.com/15368365/56085520-f59a0200-5e01-11e9-9593-1d4f33753d89.png)
_________________

Microtus taxon page

http://arctos.database.museum/name/Microtus

One you have reached the taxon page, you can access the specimens identified with that taxon.  
_____________

![Screen Shot 2019-04-13 at 4 22 54 PM](https://user-images.githubusercontent.com/15368365/56085866-7b20b080-5e08-11e9-846f-67557d1158cb.png)
________________

You can request specimens with a current ID as Microtus or a previous (possibly unaccepted) identification of Microtus. Results can be limited to specimens with media and exact matches (in this case, specimens identified only to the genus Microtus).  Note that if you are logged in with access to a specific collection, you will only see the results within your collection.  Log out or create a separate profile without access to any collection to see results for all collections in Arctos.

## Relationship of taxonomy to specimens

The link between taxonomy and specimens is through Identification and
Identification_Taxonomy. However, Taxonomy no longer resolves to a
single set of ranked assertions (eg, row in table). Collections chose a
single preferred source (in Manage Data/Metadata/Manage Collection), and the data in that
classification become available for various "specimen-taxonomy" purposes
(such as asserting ranked terms via DWC exports, searching for
specimens, and printing labels). Some taxonomy searches may produce
unexpected results for the naive user. For example,  given the
following:

-   Collection1 selects source Arctos
-   Collection2 selects source WoRMS (via Arctos)
-   Arctos places the genus Cymatium in Ranellidae
-   WoRMS (via Actos) places Cymatium in Cymatiidae
-   GBIF places Cymatium in Fasciolariidae
-   Collection1 and Collection2 both have specimens identified as Cymatium.

the following are true:

-   Searching Identification (scientific name) for Cymatium will find Cymatium
    specimens from Collection1 and Collection2
-   Searching Identification for Cymatiidae will find nothing; the
    Identification is to a name (string), not a "taxon concept" (data
    object including metadata).
-   Searching Taxon Name (any taxon name) for Cymatiidae, Ranellidae or Fasciolariidae
    will find Cymatium specimens from Collection1 and Collection2
-   Searching Family for Ranellidae will find only specimens from
    Collection1
-   Searching Family for Cymatiidae will find only specimens from
    Collection2
-   Searching Family for Fasciolariidae will find nothing

Note that we can search for Cymatium under Identification (or Genus) and "See Results as" Specimen Summary by family.


![Screen Shot 2019-04-13 at 4 50 52 PM](https://user-images.githubusercontent.com/15368365/56086094-a0172280-5e0c-11e9-83fc-311b3e4a4d64.png)


The results will show that Arctos has specimens identified as Cymatium in two families.  This is an excellent way to check for taxon names with inconsistent higher classification.


![Screen Shot 2019-04-13 at 4 45 46 PM](https://user-images.githubusercontent.com/15368365/56086082-78c05580-5e0c-11e9-9adf-549a64377b87.png)


This shows that 

-   Collection1 is asserting that "the Family of Cymatium is Ranellidae" (1 specimen record)
-   Collection2 is asserting that "the Family of Cymatium is Cymatiidae" (25 specimen record)
-   Something else (via GlobalNames, perhaps) is asserting that "the
    Family of Cymatium is Fasciolariidae" but no Arctos collections are using that classification

This type of inconsistency in higher classification can occur for many reasons.  For example

-   The taxon name is a hemihomonym used in both a vertebrate and an invertebrate collection
    or a plant and an animal collection.
-   One collection has accepted a new taxonomic opinion, and the other
    hasn’t updated their classifications.
-   One collection has accepted a controversial taxonomic hypothesis
    with which the other collection disagrees.
-   One collection has confounded taxonomy and storage location and
    cannot update their classification until shelves are relabeled and
    specimens are moved.

Note that the sums of the family-according-to-collection searches do NOT
necessarily add up to the "family-according-to-someone" search total.  A
collection may use a classification that does not include a term ranked
"family," and doing so will return no specimens with queries which
include family-according-to-collection.

