---
title: How To Create Citations
layout: default_toc
author: Carla Cicero
date: 2016-03-08
---
# How To Create Citations

Attach a specimen record to a publication via citation. **NOTE:** Before a specimen is cited, the Publication profile **must** already exist in Arctos. See **How to Create a Publication** for tutorial.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/master/tutorial_images/manage_citations.jpg)

## NAVIGATION: Search Menu → Publications/Projects

* Search for the Publication to which you would like to attach specimen record(s) using the various Publication Search fields
* In the results screen, the publication title will appear with multiple links below it indicating different actions that can be performed. Click on the "Manage Citations" hypertext.
* The Manage Citations screen allows users to view, add or delete specimen citations. To add a citation:

**Citation Type**

Select the basis of citation (e.g., voucher, holotype, basis of illustration). Values are controlled by a code table.

**Page Number**

Indicate the page number on which the specimen was first mentioned in the publication,

**Citation Remarks**

Record any relevant remarks. These will be displayed.

**Find a Specimen**

Use the fields to search for the specimen record to be cited (GUID or catalog number). Once you click the "Find Specimen" button, a "working with specimen" link to the record queried by the search appears. The identification data associated with this specimen record is populated into the Identification fields below.

**Identification**

* Click on the "Create Citation with this Identification" button if the existing identification is the same as the identification referenced in the citation.
* If the specimen is cited under a different identification (e.g., a name that has been synonymized), use the "Create a New Identification" fields and click the "Create Citation and Identification" button to save.

The citation is now created and listed at the bottom of the screen under "Existing Citations" where it can be managed (deleted, edited, cloned). After refreshing/waiting a few minutes, you should see the citation and publication information in the associated specimen record(s).

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/master/tutorial_images/citation_specimen_record.png)

# How To Bulkload Citations

## NAVIGATION: Enter Data Menu → Batch Tools → Bulkload Citations 

Use the the "Get a Template" hyperlink to download the citations bulkloader spreadsheet (.csv)
* Populate the spreadsheet fields following the conventions outlined by the bulkload citations screen. The summary indicates what fields are required. Tip: From the Publication record, open the Manage Citations screen to see the fields that map to the bulkloader spreadsheet. From this screen you can view controlled vocabulary as well as get a sense of what values each bulkloader field will require.
* Delete any unused columns from the bulkloader template and save as a csv file.
* Upload the file using the upload button found on the Bulkload Citations screen.
* Once your spreadsheet formatting has completed validation, click on the 'view in table' link to see that your bulkloader records have validated (if your data does not validate and you receive an error message, check that your spreadsheet column headings are correct).
* In the table view, any errors with your citation data will be returned in the 'Status' column. Common errors include missing data (e.g., required fields) or specimen numbers that are not found. Rectify these erros and reload the spreadsheet, it will simply overwrite the existing version.
* If all looks correct in the table, click on the 'proceed to load' text. Citations will be immediately linked. Generally an insert error at this stage refers to duplicate values in your spreadsheet.

### Bulkload Citations Tutorial Video ###
[![YouTube: How to Bulkload Citations](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Bulkload_Citations_in_Arctos_thumb.jpg)](https://youtu.be/xCWrNJk7iVM)
