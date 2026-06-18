---
title: System Stats
layout: default_toc
authors: Michelle Koo
date_updated: 2025-07-03
---

# System Stats Definitions
Arctos tallies a set of specific queries to provide a report of regular counts. These statistics are downloadable as CSV and available to registered users. [Log in to view System Stats](https://arctos.database.museum/info/sysstats.cfm) 

Below are the fields, definition, and how they are compiled.

### -Collections
Total number of collections in Arctos with or without data

### -Institutions
Total number of institutions in Arctos based on the administrative contact for a collection regardless of sponsorship status.

### -CatalogedItems
This is the total number of catalog records that are in a collection. This includes encumbered records that are hidden from the public.
 - SQL: (select count(*) from cataloged_item where collection_id=r.collection_id)

### -Individuals 
This is the sum of individuals based on the record attribute ```Individual Count``` for all records in a collection.

### -UsedTaxa 
This is the total number of taxon names (at any rank) associated with the total number of records in a collection.
 - [Search Taxonomy here](https://arctos.database.museum/taxonomy.cfm)
 - [Learn about Taxonomy here](https://handbook.arctosdb.org/documentation/taxonomy.html) 

### -Localities
This is the total number of localities associated with the total number of records in a collection.
 - [Search Localities here](https://arctos.database.museum/place.cfm?sch=locality)
 - [Learn about Localities here](https://handbook.arctosdb.org/documentation/locality.html)

### -GeoreferencedLocalities
This is the number of localities with geographic coordinates that is associated with a collection.
 - SQL: yes cataloged_item inner join specimen_event on cataloged_item.collection_object_id=specimen_event.collection_object_id inner join collecting_event on specimen_event.collecting_event_id=collecting_event.collecting_event_id inner join locality on collecting_event.locality_id=locality.locality_id and locality.dec_lat is not null


### -CollectingEvents
This is the number of collecting events associated with records in a collection.
 - [Search collecting events here](https://arctos.database.museum/place.cfm)
 - [Learn about collecting events here](https://handbook.arctosdb.org/documentation/collecting-event.html)
 
 
### -SpecimenMedia
This is the total number of media objects in a collection. 
 - SQL: count(distinct(media_relations.media_id))

### -UsedPublications
This is the number of publications that cite catalog records in a collection. Many records may be cited in a single publication but that will only count as one (1) used publication.
 - [Search all Arctos publications here](https://arctos.database.museum/SpecimenUsage.cfm)
 - [Search for publications associated with a specific collection here](https://arctos.database.museum/info/publicationbycollection.cfm)
 - [Learn about publications here](https://handbook.arctosdb.org/documentation/publications.html)

### -Citations
This is the number of times a catalog record in a collection is cited in publications uploaded to Arctos. If the same single catalog record is cited in multiple publications (e.g., in 17 publications), that counts as multiple citations (e.g., 17 citations).
 - [Search for publications and their citation counts associated with a specific collection here](https://arctos.database.museum/info/publicationbycollection.cfm)
 - [Learn about citations here](https://handbook.arctosdb.org/documentation/specimen-citations.html)
 
### -LoanedItems
This is the sum of all parts from a collection that are associated with any loan. This does not indicate anything about the number of catalog records those parts come from.
 - [Search for loans here](https://arctos.database.museum/transactionSearch.cfm)
 - [Learn about loans here](https://handbook.arctosdb.org/documentation/loans.html) 

### -GenBankLinks
This is the number of catalog records with links to any GenBank records.
 - Search for “GenBank” in Identifier IssuedBy in main search page
 - [Find records which are do not have a GenBank link but are expected to](https://arctos.database.museum/info/mia_in_genbank.cfm)
 - [Learn about GenBank registration](https://handbook.arctosdb.org/documentation/genbank.html)
 
### -SpecimenRelationships
This the number of specimens with an external relationship to another record (e.g., “host of” but not “self”) 
 - SQL: coll_obj_other_id_num.ID_REFERENCES != 'self' - number of related items (both specific and vague)

### -PartCount
This is the total number of parts in a collection regardless of what the part is as long as it is ```in collection``` or otherwise still part of the collection, thus excludes parts no longer available to the collection, specifically with the disposition of ```deaccessioned```, ```discarded```, ```missing```, ```on loan```, ```transfer of custody```, ```used up```, ```not applicable```.

For example, in a single record where parts have the disposition of ```in collection``` such as  ```foot``` (4), ```tissue``` (2), ```DNA``` (1), and ```skull``` (1) partcount will be the sum of the quantity of each part (e.g., partcount total is 8).


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/system_stats.markdown" target="_blank">here</a>.
