---
title: Taxonomy
layout: default_toc
---

# Taxonomy



## Overview

The taxonomic model in Arctos is designed to provide both a controlled table
to reduce errors and the flexibility to accommodate each collection’s
preferred taxonomic structure and ongoing changes in taxonomic classifications.   

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
then "Some critter" may be a useful taxon in Arctos. 

If another publication declares "*Some critterrrr*" is not a valid
taxon, biological distinction, etc., then "Some critterrrr" may still be
a useful taxon name to include in Arctos for discovery purposes, even
though it’s an obvious misspelling of a name. In short, if a name
might be useful in discovering specimens, it should be included in
Arctos. Remarks, annotated taxon relationships, [taxon status](https://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS) and links to
publications should be used to clarify.

Arctos taxonomy consists of two tables: 
-  taxon names are the "base names" such as Animalia, Aves, *Canis lupus* or nonbiological "granite" 
-  taxon terms are non-classification metadata regarding a taxon name such as author, taxon status, or nomenclatural code.

Informal terms, such as "*Sorex sp.*" or "*Sorex cinereus* or *Sorex ugyunak*" are
identifications, not taxonomy. Identifications are, however, generally drawn from
and linked to taxonomy in various ways.


## Taxon Name

Taxon names are intended to be a formal taxonomic
authority and should all be drawn from relevant taxonomic publications.
A name is not linked to any particular classification (rather,
classifications are linked to taxon names) and may be a homonym or
hemihomonym. The name ["Diptera"](https://arctos.database.museum/name/Diptera) correctly includes classifications
for flies and plants, and the taxon has both an Arctos and an Arctos Plants classification.  This is not a mistake and should not be
"corrected" to any particular point of view. Another example is [Ficus gracilis](https://arctos.database.museum/name/Ficus%20gracilis) which is both a plant and an animal taxon.  Adding the author as non-classification data can ensure that the correct term is selected by users.

Taxon names may be disambiguated at the specimen level via identification publications ("ID
sensu"), and at the collection level by choosing and curating a
classification. Database rules prevent change of used names. Names may
be higher taxon terms, such as "Animalia," ICZN-type
genus-species-subspecies concatenations, ICBN-type
genus-species-infraspecific rank-infraspecific epithet concatenations,
or nonbiological taxonomy terms ("Granite"). The sole distinguishing
feature of this field is that a curator, usually a taxonomist, considers
the name to be formal taxonomy.

While single classifications may be hierarchical, taxonomy as a body of 
literature is anything but: Most names have a long history of "current
family, according to….", for example, and many refer to multiple
concepts, such as plants and animals.

Arctos users with taxonomic authority may create, edit and delete taxonomic names and classifications.  Complete instructions are given in the How-to Section of the Handbook.

## Validation Service

Arctos checks taxon names against various services on creation and edit. This check is a tool, not an authority; all services have significant problems as of this writing. "Valid" names will occasionally be flagged as invalid, and erroneous names will occasionally pass.  One of the services contains data from Arctos, so the check is a bit circular. Users remain fully responsible for the content of Arctos taxonomy.  

## Taxon Term

[Taxon Term](https://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_TERM) contains metadata regarding taxon names and a system for organizing such data. Every term may be arranged hierarchically within a
classification, and hierarchical terms may optionally be ranked. Terms are further divided as:

-   "Local data" are curated from within Arctos and may be edited. A
    [controlled vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_TERM)
    is required for "local" data.
-   “Webservice data” are drawn from various sources via GlobalNames.org and is used primarily for locating specimens.  The specific sources vary with the taxon a user is searching for.  These webservices are frequently cloned to create a classification for a new taxon name in a local source.  

______________

![Screen Shot 2019-04-13 at 10 15 54 AM](https://user-images.githubusercontent.com/15368365/56082355-37608380-5dd5-11e9-8424-0633fb2c9ced.png)
______________

### Hierarchical Classification Terms

Terms which are organized hierarchically are "classification data"
intended to be part of a classification system. These terms may be
ranked or unranked but unranked terms may make it difficult for users to
find your specimens. Here is the classification for the mollusk *Ficus gracilis*.
_________________
    
![Screen Shot 2019-04-13 at 9 30 35 AM](https://user-images.githubusercontent.com/15368365/56081830-d2a22a80-5dce-11e9-96f6-c90973b783e0.png)
_________________
    
### Classification Metadata

These are terms which are not part of the classification but clarify and augment the taxon classification. 
There are currently eight Metadata Term Types which may be completed.

•	**[nomenclatural_code](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTNOMENCLATURAL_CODE)** is controlled by the code table.  Most common values are “ICZN” and “ICNB.”  This is a mandatory field.  
•	**author_text** is the author of ICZN names, or the species author of ICBN names.  Always include the author (with or without parenthensis as appropriate) unless no author is given.     
•	**infraspecific_author** is the author of the infraspecific epithet in ICBN names  
•	**[taxon-status](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS)** is controlled by a code table.   
•	**source_authority** should list the publication, website or other authority for the taxon.     
•	**remark** is an open field for any comment that will be helpful to Arctos users.  
•   **aphiaid** is the taxon identification assigned by the World Register of Marine Species  
•   **preferred name** may be used to reference the related accepted or preferred taxon  

The Display Name and Scientific Name are autogenerated by Arctos.
__________________

![Screen Shot 2019-04-13 at 9 27 34 AM](https://user-images.githubusercontent.com/15368365/56081784-6c1d0c80-5dce-11e9-8044-2495ac3dc0da.png)
__________________

## Common Names

Common Names are intended to help users find what they are looking
for, and not to propagate any standard or system. A taxon may have
several common names, in several languages and using several types of
characters, or nothing. The same common name may apply to more than one
taxon. For example, the term "common shrew" has been published for
*Sorex cinereus* in North America and for *Sorex araneus* in Europe.
Common names have not been capitalized except when they draw on a
particular standard such as that of the American Ornithological Union
(AOU Checklist).  Adjectival forms of proper names are capitalized
(*e.g.*, "Alaska marmot").

Common Names are added to the taxon record as non-classification metadata.

## Taxon Relations

[Taxon Relations](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_RELATION)
are comprised of a relationship type, a related
taxon, and an authority for the relationship. The related taxon is
another record in the taxonomy table.
__________________
    
![Screen Shot 2019-04-13 at 9 45 24 AM](https://user-images.githubusercontent.com/15368365/56082005-e9e21780-5dd0-11e9-9462-dc874fad53ce.png)
__________________
    
The [taxon status](https://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS) is used to clarify which synonym is preferred by entering "valid" for the accepted or preferred name and "invalid" for the unaccepted name.

## Taxon Relation Authority

Taxon Relation Authority is an open text field, and it may be `null`.
Presumably the Authority for an accepted
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

Any number of taxa may be synonymous, but only one should have the [Taxon Status](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS) of “valid.” The other synonyms should have the Taxon Status “invalid.”

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

## Taxon Classification Sources

There are currently three [local sources](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXONOMY_SOURCE) of taxonomic data that can be used by a collection for specimen identification.  Each collection selects its preferred source and the classifications from that source are used in their records for specimen identification.  Taxon names and classifications of "Local" sources are added, deleted and modified with Arctos.  A [controlled vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_TERM) is required for local data.  

Collections may elect to use an independent taxonomic database that suits their specimens.  They remain responsible to curate the taxa.

-  **Arctos Plants** includes ICBN-regulated Arctos classification of "plants" (="things curated by herbaria").  Classifications are added, deleted and maintained by Arctos curators.
-  **Arctos** includes all non-plant taxa from legacy data migrated from Arctos flat tables.  Classifications are added, deleted and maintained by Arctos curators.
-  **WoRMS (via Arctos)** contains data primarily from http://www.marinespecies.org/. The taxa classificaitons are continually updated via WoRMS webservice.  Each taxon has a unique aphiaID.  Taxa that are not in WoRMS may be added by authorized Arctos members who use the WoRMS (via Arctos) as their taxonomy source.
_____________

![Screen Shot 2019-04-13 at 1 16 09 PM](https://user-images.githubusercontent.com/15368365/56084289-6f27f500-5dee-11e9-9b87-f8f37e9c09d8.png)
_____________

![Screen Shot 2019-04-13 at 1 16 16 PM](https://user-images.githubusercontent.com/15368365/56084296-8bc42d00-5dee-11e9-8ca6-b43cfab55c53.png)
_____________

![Screen Shot 2019-04-13 at 1 16 34 PM](https://user-images.githubusercontent.com/15368365/56084304-a5657480-5dee-11e9-83a1-a367c8359dec.png)
_____________

Through GlobalNames webservice, Arctos users can access multiple remote classifications for taxa.  These are automatically maintained and cannot be edited by Arctos users.  They are provided as a resource and Arctos users frequently clone them into the local source used by the collection.  Arctos users may wish to collaborate with the remote sources to edit taxa before they are pushed to GlobalNames and then to Arctos.  

##  Examples of model taxa

The taxonomic model in Arctos conveys more than just the classification of each taxon.  As displayed in the examples below, each taxon entry integrates media and the geolocation of specimens in Arctos identified with that taxon name.  This can be a highly useful tool for researchers and the general public.  Here are links to various taxa that show these features.

[https://arctos.database.museum/name/Canis%20lupus](https://arctos.database.museum/name/Canis%20lupus)    
[http://arctos.database.museum/name/Amazona%20amazonica](http://arctos.database.museum/name/Amazona%20amazonica)   
[http://arctos.database.museum/name/Chamaesaracha%20sordida](http://arctos.database.museum/name/Chamaesaracha%20sordida)  
[http://arctos.database.museum/name/Thera%20otisi](http://arctos.database.museum/name/Thera%20otisi) 
[https://arctos.database.museum/name/Achatinella%20lorata](https://arctos.database.museum/name/Achatinella%20lorata)  
[http://arctos.database.museum/name/Mus%20musculus](http://arctos.database.museum/name/Mus%20musculus)

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
"classification according to this collection."   Many classifications
are historic and no longer accepted but may be helpful in searching
for specimens.  They should be marked "invalid" and linked to the currently 
valid taxon.

For further instructions, consult the following "How to" documents.
-  [How to create taxa](http://handbook.arctosdb.org/how_to/How-to-Create-Taxa.html)
-  [How to manage taxonomic classifications](http://handbook.arctosdb.org/how_to/How-to-manage-taxonomic-classifications.html)
-  [How to manage taxonomy hierarchically](http://handbook.arctosdb.org/how_to/How-to-Manage-Taxonomy-Hierarchically.html)
-  [How to edit taxa](http://handbook.arctosdb.org/how_to/How_to_Edit_Taxonomy.html)
-  [How to search for specimens through Identification and taxonomy](http://handbook.arctosdb.org/how_to/How_to_Search_for_Specimens_through_Identification_and_Taxonomy.html)



