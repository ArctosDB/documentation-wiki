---
title: How To Search for Specimens with Identification and Taxonomy
layout: default_toc
author: Phyllis Sharp
date: 2019-04-14
---


# How to Search with Identification and Taxonomy

There are various search fields on SpecimenSearch under **Identification and Taxonomy**, and
they query and return very different data.

## Identification

**Identification** queries the identification applied to specimens
and includes the option to query previous identifications as well as the
current identification.  
_______________

![image](https://user-images.githubusercontent.com/15368365/56099976-12513b00-5ed1-11e9-8468-87048f6f5c47.png)
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

This field queries all taxonomy classifications and all
classifications related to taxa attached to specimens. 

![image](https://user-images.githubusercontent.com/15368365/56100256-a6240680-5ed3-11e9-81a3-d80c47620e0a.png)

For example, querying MVZ Mammals for Muridae returns *Euryoryzomys nitidus,* even
though MVZ’s preferred classification uses Cricetidae as the family of
that name, because Freebase (accessed through GlobalNames) asserts that the unranked term "Muridae" is
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

In this example, a search for the genus Oryzomys returned mostly records in the family Cricetidae.  

![image](https://user-images.githubusercontent.com/15368365/56099927-b981a280-5ed0-11e9-8bda-4b25eced7c6f.png)

If we had searched for just the specimens of Oryzomys in Cricetidae, we would have missed two specimens in a collection that uses a classification with the family Muridae.

![Screen Shot 2019-04-14 at 4 31 09 PM](https://user-images.githubusercontent.com/15368365/56100177-c0111980-5ed2-11e9-9c7c-1e7dae8c7c65.png)

If the two specimens classified in the family Muridae are in your collection, users may not find them depending on how they structure their search for the genus Oryzomys.  We can't control which fields users will select to search for specimens, but keeping your taxonomy as complete and current as possible will help users to find your specimens.

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

## Video Tutorial

[![YouTube: How To Create Agents](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20play.png)](https://www.youtube.com/watch?v=kHUJHa48m5E)

_________________

![Screen Shot 2019-04-14 at 4 20 50 PM](https://user-images.githubusercontent.com/15368365/56099993-57756d00-5ed1-11e9-8c5a-961d0d975b6b.png)

_________________

Each field returns different results and can be modified to be "exact" or "contain" the search string.  Note values that pop into search form with these examples.

Names that contain the string "microtus"
_________________
<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus>

![Screen Shot 2019-04-14 at 4 22 53 PM](https://user-images.githubusercontent.com/15368365/56100029-99061800-5ed1-11e9-8881-6f4c4961e064.png)
_________________

Names that ARE Microtus:

<http://arctos.database.museum/taxonomy.cfm?taxon_name==microtus>
_________________

![Screen Shot 2019-04-14 at 4 24 40 PM](https://user-images.githubusercontent.com/15368365/56100050-d2d71e80-5ed1-11e9-8ee2-e549d0adda07.png)
_________________

Names that contain microtus AND have an attribute of "mammalia":

<http://arctos.database.museum/taxonomy.cfm?taxon_name=microtus&taxon_term=mammalia>
_________________

![Screen Shot 2019-04-14 at 4 26 00 PM](https://user-images.githubusercontent.com/15368365/56100065-04e88080-5ed2-11e9-8799-d721de9ca509.png)
_________________

Microtus taxon page

http://arctos.database.museum/name/Microtus

One you have reached the taxon page, you can access the specimens identified with that taxon.  
_____________

![Screen Shot 2019-04-14 at 4 27 14 PM](https://user-images.githubusercontent.com/15368365/56100089-2ea1a780-5ed2-11e9-9f76-0c0dd062dcda.png)
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

![Screen Shot 2019-04-14 at 4 28 29 PM](https://user-images.githubusercontent.com/15368365/56100105-5b55bf00-5ed2-11e9-88fb-e94b3bb9fe0e.png)

The results will show that Arctos has specimens identified as Cymatium in two families.  This is an excellent way to check for taxon names with inconsistent higher classification.

![Screen Shot 2019-04-14 at 4 29 39 PM](https://user-images.githubusercontent.com/15368365/56100125-85a77c80-5ed2-11e9-9328-0c758e5fb9ea.png)

This shows that 

-   Collection1 is asserting that "the Family of Cymatium is Ranellidae" (1 specimen record)
-   Collection2 is asserting that "the Family of Cymatium is Cymatiidae" (25 specimen records)
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

