---
title: How To Bulkload Citations
layout: default_toc
author: Teresa J Mayfield-Meyer, Carla Cicero
date: 2023-03-08
---

# How To Bulkload Citations

Attach multiple catalog records to a publication via citation. **NOTE:** Before a cataloged item is cited, the Publication profile **must** already exist in Arctos. See [How to Create a Publication](https://handbook.arctosdb.org/how_to/How-to-Create-a-Publication.html) for a tutorial.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/master/tutorial_images/manage_citations.jpg)

## NAVIGATION: Manage → Publications → Bulkload Citations -> Load csv

Use the the "Get a template" hyperlink to download the citations bulkloader spreadsheet (.csv)
* Populate the spreadsheet fields following the conventions outlined by the bulkload citations screen. The summary indicates what fields are required. Tip: From the Publication record, open the Manage Citations screen to see the fields that map to the bulkloader spreadsheet. From this screen you can view controlled vocabulary as well as get a sense of what values each bulkloader field will require.
* Delete any unused columns from the bulkloader template and save as a csv file.
* Upload the file using the upload button found on the Bulkload Citations screen.
* Once your spreadsheet formatting has completed validation, click on the 'Review and Load' link to see your records in the component loader (if your data does not validate and you receive an error message, check that your spreadsheet column headings are correct).
* If you entered "autoload" in the status column of your csv, the records should begin to load automatically, otherwise you will need to select "Review all records for user" next to your Arctos username, then select "check all and change status to 'autoload'" and finally, Change status for checked records". This series of steps will set your citations to begin loading.
* Return to "Review and Load" to monitor the progress, any errors with your citation data will be returned in the 'Status' column. Common errors include missing data (e.g., required fields) or catalog record numbers that are not found. To rectify these erros, select "Get csv for this user/status", then delete the offending records using "Delete for this user/status". Use the downloaded csv to make corrections then repeat the process above for the corrected data.
* Citations will be immediately linked, however due to cacheing, they may not appear in your catalog records for up to 24 hours.

## Bulkload Citations Tutorial Video
[![YouTube: How to Bulkload Citations](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Bulkload_Citations_in_Arctos_thumb.jpg)](https://youtu.be/xCWrNJk7iVM)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Bulkload-Citations.markdown" target="_blank">here</a>.
