---
title: How To Bulkload Parts
layout: default_toc
author: Teresa J Mayfield-Meyer
date: 2023-03-14
---

# How To Bulkload Parts

This document will walk through the steps for bulkloading parts and their associated attributes using the Part Bulkload Tool.

### Navigation: [Manage -> Records -> Parts - Bulkload -> Load csv](https://arctos.database.museum/tools/BulkloadParts.cfm?action=ld)

## Create Part Bulkload CSV

Use the the "[Get a template](https://arctos.database.museum/tools/BulkloadParts.cfm?action=makeTemplate)" hyperlink to download the part bulkloader spreadsheet (.csv)
 
* Populate the spreadsheet fields following the conventions outlined by the Definitions and Documentation which indicates what fields are required. 

* Formatting is very important, so make sure you are typing things into the spreadsheet exactly as they appear when you pull up a catalog record part in Arctos. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

> For details about what should be included in each field of the Part Bulkload, see the Definitions and Documentation section of the [Parts Bulkload Tool](https://arctos.database.museum/tools/BulkloadParts.cfm?action=ld) and follow the links for each column header for more information.  
 
* When the template is complete, save the file as a csv

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

For better formatting when using Excel see [How To Manage Excel for Arctos](https://handbook.arctosdb.org/how_to/How-to-Excel-for-Arctos.html)

## Upload CSV to the Part Bulkload Tool

* Upload the file using the upload button found on the [Part Bulkload Tool](https://arctos.database.museum/tools/BulkloadParts.cfm?action=ld).

## Review and Load

* Once your spreadsheet formatting has completed validation, click on the 'Review and Load' link to see your records in the Parts Bulkload Tool (if your data does not validate and you receive an error message, check that your spreadsheet column headings are correct and that Excel hasn't reformatted dates for you).

* If you entered "autoload" in the status column of your csv, the records should begin to load automatically, otherwise you will need to select "Review all records for user" next to your Arctos username, then select "check all and change status to 'autoload'" and finally, "Change status for checked records". This series of steps will set your parts and their attributes to begin loading.

* Return to "Review and Load" to monitor the progress, any errors with your part or part attribute data will be returned in the 'Status' column. 

## Loading Errors

* Common errors include missing data (e.g., required fields) or catalog records that are not found. To rectify these erros, select "Get csv for this user/status", then delete the offending records using "Delete for this user/status". Use the downloaded csv to make corrections then repeat the process above for the corrected data.

* Parts will be immediately added to catalog records, however they may not appear in your catalog records for up to 24 hours.

* If edits are required after the parts are uploaded, see [How To Create and Edit Parts](https://handbook.arctosdb.org/how_to/How-to-Create-and-Edit-Parts.html)  

## How to Bulkload Parts Tutorial Video

### Need video tutorial
[//]: # ([![YouTube: How to Bulkload Parts](need thumbnail)](need tutorial))

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Bulkload-Parts.markdown" target="_blank">here</a>.
