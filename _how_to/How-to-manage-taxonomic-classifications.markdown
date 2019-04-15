---
title: How To Manage Taxonomic Classifications
layout: default_toc
---

# Managing Taxonomic Classifications

All taxon names live in a unique index including homonyms and hemihomonyms. "The specimen's taxonomy" comes from the collection's preferred [taxonomy source](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXONOMY_SOURCE) selected under Manage Data/Metadata/Manage Collection. 

It is generally advisable to only alter classifications used by your collection. Do not do anything that might mess with another collection's data without first consulting them.  Use the Contact link if necessary and the AWG can mediate. For example, if you are working in a parasite collection and find an insect homonym, do NOT edit higher taxonomy (which would "edit taxonomy" for the insect specimens) without consulting the relevant collection managers.

Taxonomy only works properly when there is one named term for each "rank" pulled into Flat. Avoid having two (or more) terms ranked "family" in the same classifiction and avoid unranked family-level terms.

To better understand how to make your specimens appear in a researcher query, see [How to Search for Specimens with Identification and Taxonomy](http://handbook.arctosdb.org/how_to/How_to_Search_for_Specimens_through_Identification_and_Taxonomy.html) which shows the different results that can be achieved by using the different search fields.  It also shows the importance of having the most complete classification possible for each taxon name.  Try to include common ranked terms for searchability - kingdom, phylum, order, family, etc.

The quality of the taxonomy you use is very important to the accessibility of your specimens.  Arctos provides a number of tools to manage your taxonomic tables.  Because these tables are a shared resource, you can benefit from the knowledge of other curators but also need to be mindful that your actions may impact their data as well.  

If you are using WoRMS (via Arctos), management of the taxonomic table is reduced but not eliminated.  WoRMS (via Arctos) taxa with an aphiaid are automatically maintained.  Taxa without an aphiaid (which are not in WoRMS) must be maintained by the users.

## Common Problems

### The Taxon Name I want to use exists, but there's no classification in my preferred source

[How to Edit Taxa](http://handbook.arctosdb.org/how_to/How_to_Edit_Taxa.html) shows step-by-step how to edit a taxon. Briefly, 
* open the taxon name
* find a similar classification (usually from GlobalNames)
* click clone classification
* select your preferred source
* edit the results.  

You can also clone an existing record with a suitable classification into your prefered source and edit as necessary.  

If there are no classifications or no suitable classifications to clone, you may click "create classification" to start from scratch. Please carefully follow all editing guidelines.

### The Taxon Name I want to use does not exist

Steo-by-step instructions for adding taxa are given in [How to create taxa](http://handbook.arctosdb.org/how_to/How-to-Create-Taxa.html).  Briefly,
* find a similar name with a suitable classification.  For example, the same genus as the species you need to add.
* click "clone classification as new name"
* enter the taxon name
* select the source
* edit as needed  
Note that names are published strings accepted as taxonomy by the scientific community (but not necessarily current or valid).

### There's a homonym or hemi-homonym (two names spelled the same but not sharing higher taxonomy)

Taxon names may have multiple "definitions" in multiple classifications.  
The same taxon name can exist in Arctos and Arctos Plants.  If the name is in Arctos and you need it to be in your source Arctos Plants, clone the record, select Arctos Plants as the source, and edit as needed.  

If there's a homonym among collections using the same source, use the Contact button (Report a bug or request support) on the bottom of any Arctos page for help. Example: Philometra is a lepidopteran under the Arctos classification, but you also use the Arctos classification and need to catalog Philometra-the-nematode.

### Species in the same genus are assigned to multiple families

This can occur because various collections add new taxa that may not share the same higher classification.  You can edit each taxon record to have the same higher classification, but it is faster to use the [Hierarchical Classification Editor](http://handbook.arctosdb.org/how_to/How-to-Manage-Taxonomy-Hierarchically.html).  This tool enables you to more quickly adjust all the species or other classification level into the identical higher classification and save it back into your preferred source.  The Editor helps to maintain consistent higher classification and is recommended whenever possible.  Inconsistent (or nonexistent) higher classification may make it difficult for users to find your specimens.

## Editing non-classification data

[Non-classification metadata](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_TERM) include the author, common name, source authority, relationships to other taxa and other data.  It augments and clarifies the taxon classification.

Taxon relationship types are managed in the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_RELATION).   
When a taxon is synonymized with another taxon, you want to create a relationship between these two names. They become synonyms of each other.  The accepted taxon has a [taxon status](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS) of valid and the unaccepted taxon has a taxon status of invalid.
