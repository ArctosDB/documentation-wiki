---
title: Publish Data to GBIF
authors: Teresa J. Mayfield-Meyer, Michelle Koo
date_updated: 2025-10-06
redirect_from:
  - /how_to/How-to-Publish-to-GBIF/
---

## [Beyond Arctos Documentation]({% link _documentation/github.markdown %})

Publishing Arctos data to data aggregators begins with a Darwin Core archive of your collection's data. Arctos uses the VertNet IPT to accomplish and share these files. Typically these archives are then published to the Global Biodiversity Information Facility (GBIF). This process can be fairly technical especially the first time, but if done properly, the data will be updated at the IPT monthly and the only requirement going forward is an annual review of the collection's metadata.

## Is the Collection Already Published to GBIF?

If you are not sure whether a collection has already been published to GBIF, you can [search the datasets at GBIF](https://www.gbif.org/dataset/search) to check. 

### Yes

If the collection has already been publishing data to GBIF, there will be a GBIF dataset page and an Institution Publisher Page.  Once a dataset page is found:

- Add the url of the dataset page and the institution publisher page to the Github issue.
- review the information on the GBIF publisher page. If any changes are required, email them to David Bloom
- Create a resource relationship file that matches the records currently published at GBIF to those that will be published from Arctos (see instructions below).
- Ensure that all fields are complete in Manage Collection so that the EML file can be generated.
- Task [David Bloom](https://arctos.database.museum/agent/21314879) with publishing to the VertNet IPT; schedule for monthly updates

### No

Read [How To Choose a Data set](https://discourse.gbif.org/t/how-to-choose-a-dataset-class-on-gbif-gbif-data-blog/1513)

- register as a publisher at [Become a GBIF publisher](https://www.gbif.org/become-a-publisher)
Select "My org is not already registered", THEN, agree to the Terms and conditions, THEN complete the form, AND at the end select Yes, No, and No. **NOTE:** The Description section in the form is about the publisher as a whole, not just the individual collections ready to publish right now. 

After your institution has been endorsed by the US Node, you will receive an email with an IPT Key.
-  Email the key to [David Bloom](https://arctos.database.museum/agent/21314879) who will add the institution as a publisher to the IPT 
- Ensure that all fields are complete in Manage Collection so that the EML file can be generated.
- Task [David Bloom](https://arctos.database.museum/agent/21314879) with publishing to VertNet IPT; schedule for monthly updates

**NOTE** In order to save any changes made to this section you must select the **Save Changes** button at the bottom of the section.

## Publishing to GBIF or other aggregator with a DarwinCore archive

To indicate the collection's intent to publish to the aggregator, please file an issue in the private [data migration Github repository](https://github.com/ArctosDB/data-migration/issues) and [open a new data publishing issue](https://github.com/ArctosDB/data-migration/issues/new?assignees=&labels=&template=12--publication-to-aggregators.md&title=Acronym+Collection+-+12.+Publish+to+Aggregators).

## Data Mapping

Data mapping from Arctos to GBIF's Darwin Core Archive for Occurrences (DwC-A) is documented [here](https://github.com/ArctosDB/PG_DDL/blob/master/shared_data/dwc_occurrence.sql).
