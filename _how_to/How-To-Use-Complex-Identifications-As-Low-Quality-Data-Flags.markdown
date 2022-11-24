---
title: How To Use Complex Identifications as Low-quality Data Flags
layout: default_toc
author: Anna Chinn
date: 2019-10-15
---
# How to use complex identifications as low-quality data flags

## What are complex identifications?
[Complex identifications](http://handbook.arctosdb.org/how_to/How-to-Use-Complex-Identifications.html "Complex identifications") are frequently used by object-based collections, like cultural and art collections, to link descriptive or informal identifications with Arctos' formal taxonomic structure. These complex identifications are built using the [A{string} identification formula](http://handbook.arctosdb.org/documentation/identification.html "A{string}"). This formula allows the identifications displayed on a catalog record page to be flexible and relates the record to a taxon name and classification in Arctos' taxonomy tables. As such, A{string} identifications can suit collection-specific needs while enhancing an object's discovery in Arctos searches.

![](https://user-images.githubusercontent.com/40321380/66869076-336c1480-ef64-11e9-9c57-a24b9c762f47.png)

This page will discuss an **alternate use of complex identifications for specimen-based collections** that allows for more efficient bulkloading and that flags potentially low-quality data in need of curatorial scrutiny.


## A{string} identifications as "working names"

When adding an identification that uses a taxon name not already in Arctos, you have the option to either [create a new taxon](https://handbook.arctosdb.org/how_to/How-to-Create-Taxa.html), or to use an A{string} identification that captures the desired taxon name as string data and relates the identification to an existing taxon name.

In general, this relationship between an A{sting} identification and an existing taxon name is to a some name of higher taxon rank, like a genus. For example, for [CHAS:Inv:1909.2954.1](https://arctos.database.museum/guid/CHAS:Inv:1909.2954.1), the collection manager has chosen to relate the identification to genus *Galba* rather than to add name *Galba umbilicata* to Arctos. This is reflected in the hierarchical classification written under the identification.

![](https://user-images.githubusercontent.com/40321380/66868248-9a88c980-ef62-11e9-887f-cade8941bac7.JPG)

### Why not add the name to the Arctos taxonomy?
If a given taxon name cannot be validated using an automated web-service, like the [Arctos taxon name validator](https://arctos.database.museum/DataServices/taxonNameValidator.cfm) or [Global Names Architecture services](http://globalnames.org/), this may be a sign that the name is not “real” or that the name is out of date/is no longer valid. Create new taxon names if you are able to individually verify that the names you would like to add are, in fact, real. However, indiscriminately adding names can introducing fake names to Arctos. This is detrimental to other Arctos users who expect to use Arctos taxonomy as an authority and are at risk of incorporating errors introduced by other collections.

As such, when bulkloading, consider using A{string} identifications rather than adding new taxon names to Arctos. Using A{string} identifications allows the user to quickly bulkload catalog records with unusual names without fear of adding fake names to Arctos and without having to spend a great deal of time [cleaning classifications and adding metadata to new names](http://handbook.arctosdb.org/how_to/How-to-manage-taxonomic-classifications.html) prior to data migration.

As a bonus, the A{string} identifications allow users to **capture legacy data** that correspond to verbatim trasncriptions from labels or ledgers. Further, records that use the identification formula can be queried and returned at a later date. The formula can therefore **act as a flag for potentially low-quality data**, including transcription errors or invalid taxonomy.

### Discoverability issues in database queries
Because data entered using the A{string} formula are unstructured, using the formula comes with search performance drawbacks. Typographical errors and unpredictable formats in A{string} identifications can make catalog records completely unsearchable when the formula is not used with care. That said, Arctos [searches on identications](http://handbook.arctosdb.org/how_to/How_to_Search_for_Specimens_with_Identification_and_Taxonomy.html) will attempt to match query inputs to identification strings and will return records when A{string} identifications are an *exact* match. Catalog records with A{string} identifications will also appear in searches on higher taxonomy, provided that the taxon name to which their identification is related has a classification.

GBIF and iDigBio both attempt to resolve A{string} identifications to their own taxonomic backbones upon data ingestion. This may have unintended consequences and lead to misinterpreted data at the aggregator-level. However, these aggregators will frequently resolve A{string} identifications to the genus-level, which allows most catalog records to be discovered using queries on specimen taxonomy.

e.g. *Galba umbilicata* is not a species recognized in the GBIF backbone. Therefore, [GBIF has interpreted CHAS:Inv:1909.2954.1](https://www.gbif.org/occurrence/1802535533) as genus *Galba* (Schrank, 1803). However, the specimen is still discoverable using the search term "Galba umbilicata." Further, any taxonomy-based queries that would return specimens in genus *Galba* will also return this specimen.

## Resolving A{string} identification flags once they are in Arctos

The following [SQL](https://docs.google.com/document/d/15e3b8WNErFPqg1SW-QNq0nI_RjiEEZjWQDznxIJNFHE/edit#heading=h.b20evqfj43mk) will generate a list of catalog records whose accepted identification uses the A{string} format:

	select 
	  guid,
	  identification.scientific_name
	from
	  identification,
	  flat,
	  taxon_name
	where
	  identification.collection_object_id = flat.collection_object_id and
	  identification.taxa_formula ='A {string}' and
	  identification.scientific_name = taxon_name.scientific_name and
	  identification.accepted_id_fg = 1


Catalog records that use A{string} identifications as low-quality data flags should be revisited following the initial catalog record bulkload. When possible, curators should add new determinations to the catalog record using real/contemporary scientific names, adding names and classifications to Arctos taxonomy tables when necessary. For large projects of this nature, identifications can be [bulkloaded](https://arctos.database.museum/tools/BulkloadIdentification.cfm) and [classifications should be managed hierarchically](http://handbook.arctosdb.org/how_to/How-to-Manage-Taxonomy-Hierarchically.html).

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-To-Use-Complex-Identifications-As-Low-Quality-Data-Flags.markdown" target="_blank">here</a>.
