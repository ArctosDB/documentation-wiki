---
title: How To Publish to Data Aggregators
author: Teresa J. Mayfield-Meyer
date: 2022-07-13
layout: default_toc
---

# How to Publish to Data Aggregators

Publishing Arctos data to data aggregators begins with publication to the Global Biodiversity Information Facility (GBIF) via the VertNet IPT. This process can be a bit of a headache, but if done properly, the data will be updated at the IPT monthly and the only requirement going forward is an annual review of the collection's metadata.

Note that all of the steps outlined here are also part of the "Publish to Aggregators" step in the [data migration Github repository](https://github.com/ArctosDB/data-migration/issues) and that [opening a new data publishing issue](https://github.com/ArctosDB/data-migration/issues/new?assignees=&labels=&template=12--publication-to-aggregators.md&title=Acronym+Collection+-+12.+Publish+to+Aggregators) is the best way to complete this process.

## Is the Collection Already Published to GBIF?

If you are not sure whether a collection has already been published to GBIF, you can [search the datasets at GBIF](https://www.gbif.org/dataset/search) to check. 

### Yes

If the collection has already been publishing data to GBIF, there will be a GBIF dataset page and an Institution Publisher Page.  Once a dataset page is found:

- [ ] Add the url of the dataset page and the institution publisher page to the Github issue.
- [ ] review the information on the GBIF publisher page. If any changes are required, email them to David Bloom
- [ ] Create a resource relationship file that matches the records currently published at GBIF to those that will be published from Arctos (see instructions below).
- [ ] Ensure that all fields are complete in Manage Collection so that the EML file can be generated. For Instructions on Manage Collection - see [How to Manage a Collection](https://handbook.arctosdb.org/how_to/How-to-Manage-a-Collection-in-Arctos.html)
- [ ] Task [David Bloom](https://arctos.database.museum/agent/21314879) with publishing to the VertNet IPT; schedule for monthly updates

### No

Read [How To Choose a Data set](https://discourse.gbif.org/t/how-to-choose-a-dataset-class-on-gbif-gbif-data-blog/1513)

- [ ] register as a publisher at [Become a GBIF publisher](https://www.gbif.org/become-a-publisher)
Select "My org is not already registered", THEN, agree to the Terms and conditions, THEN complete the form, AND at the end select Yes, No, and No. **NOTE:** The Description section in the form is about the publisher as a whole, not just the individual collections ready to publish right now. 

After your institution has been endorsed by the US Node, you will receive an email with an IPT Key.
- [ ]  Email the key to [David Bloom](https://arctos.database.museum/agent/21314879) who will add the institution as a publisher to the IPT 
- [ ] Ensure that all fields are complete in Manage Collection so that the EML file can be generated. For Instructions on Manage Collection - see [How to Manage a Collection](https://handbook.arctosdb.org/how_to/How-to-Manage-a-Collection-in-Arctos.html)
- [ ] Task [David Bloom](https://arctos.database.museum/agent/21314879) with publishing to VertNet IPT; schedule for monthly updates

**NOTE** In order to save any changes made to this section you must select the **Save Changes** button at the bottom of the section.

## How To Create a Resource Relationship File

If data from a collection has already been published to GBIF, republishing from Arctos will create probalems for anyone who has downloaded previous records from the dataset. In order to help everyone maintain continuity, a resource relationship file matches the previously published occurence ids with the new Arctos occurence ids. A sample template for creating this file can be found [here](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/files/resource.reference.BYU.Herp.xlsx). The steps to complete this template are as follows:

 - Download the dataset from GBIF 
 - Delete all data in the GBIF tab of the Excel file, then place the dowloaded data in the GBIF tab 
 - Use the following SQL in the WriteSQL tool in Arctos, but replace "BYU:Herp" with the GUID prefix of the collection you are creating the resource for. 
 ```select catalognumber,occurrenceid from ipt_cache.occurrence where collectionid=(select collection_id from collection where guid_prefix ='BYU:Herp')``` 
 - Delete all data in the Arctos tab of the Excel file, then place the csv results of that SQL into the tab 
 - Copy the catalogNumber number column from the GBIF tab to the catalogNumber column in the Reference Resource tab 
 - Ensure that the formulas in both the GBIF Occurrence ID column and the Arctos Occurrence ID column of the Reference Resource tab are present for all rows that include a catalogNumber 
 - Delete any rows in the Reference Resource tab that do not include a catalogNumber 
 - Highlight the entire Reference Resource tab by clicking in the top left corner, select copy, then paste special values in the for csv tab 
 - Save the file as an xlxs, then save the for csv tab as CSV UTF8 
 - add the csv to the appropriate Github issue 
 