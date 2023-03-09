---
title: How To Bulkload Loan Items
layout: default_toc
author: Teresa J. Mayfield-Meyer, Toni Androski
date: 2023-03-08
---

# How To Bulkload Loan Items

Bulkloading loan information is a two step process. The first step involves creating loan metadata in Arctos with a bulkload tool.  The second step populates the loan(s) with catalog record data and anything else that is missing from the metadata. Before beginning this process, it may help to read [How To Add Items to an Object Loan](https://handbook.arctosdb.org/how_to/How-to-Add-Loan-Items.html) as the process for bulkloading is comleting the same steps in bulk.

## Bulkload Parts to Loans ([How To Add Items to an Object Loan](https://handbook.arctosdb.org/how_to/How-to-Add-Loan-Items.html))

### Navigation: [Manage -> Accessions, Loans, Permits -> Loan Item Bulkload -> Load csv](https://arctos.database.museum/tools/BulkloadLoanItem.cfm?action=ld)  

 Use the the "[Get a template](https://arctos.database.museum/tools/BulkloadLoanItem.cfm?action=makeTemplate)" hyperlink to download the loan item bulkloader spreadsheet (.csv)
 
* Populate the spreadsheet fields following the conventions outlined by the Loan Loader screen. The summary indicates what fields are required. 

* Formatting is very important, so make sure you are typing things into the spreadsheet exactly as they appear when you pull up a loan in Arctos. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

> For details about what should be included in each field of the Loan Item Bulkload, see the Definitions and Documentation section of the [Bulkload Loan Item Tool](https://arctos.database.museum/tools/BulkloadLoanItem.cfm?action=ld) and follow the links for each column header for more information or reiew [How To Add Items to an Object Loan](https://handbook.arctosdb.org/how_to/How-to-Add-Loan-Items.html)  
 
* When the template is complete, save the file as a csv
 
* Upload the file using the upload button found on the component loader screen.

* Once your spreadsheet formatting has completed validation, click on the 'Review and Load' link to see your records in the component loader (if your data does not validate and you receive an error message, check that your spreadsheet column headings are correct).

* If you entered "autoload" in the status column of your csv, the records should begin to load automatically, otherwise you will need to select "Review all records for user" next to your Arctos username, then select "check all and change status to 'autoload'" and finally, Change status for checked records". This series of steps will set your loan items to begin loading.

* Return to "Review and Load" to monitor the progress, any errors with your loan item data will be returned in the 'Status' column. Common errors include missing data (e.g., required fields) or loan numbers that are not found. To rectify these erros, select "Get csv for this user/status", then delete the offending records using "Delete for this user/status". Use the downloaded csv to make corrections then repeat the process above for the corrected data.

* Loan items will be immediately added to loans, however the loan information may not appear in your catalog records for up to 24 hours.

* If edits are required after the loan items are uploaded, see [How To Find and Edit Loans](https://handbook.arctosdb.org/how_to/How-to-Find-and-Edit-Loans.html) 

## Tutorial Videos ↗️

How to Bulkload Loan Items (Step 2):

[![How to Bulkload Loan Items](https://i9.ytimg.com/vi/h4QKUb2cQgs/mq1.jpg?sqp=CJCU8I8G&rs=AOn4CLBVntj4GzENC48neloo6sYTX2GUTg)](https://youtu.be/h4QKUb2cQgs)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How_To_Bulkload_Loan_Parts.markdown" target="_blank">here</a>.
