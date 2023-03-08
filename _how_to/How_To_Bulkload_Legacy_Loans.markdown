---
title: How To Bulkload Loans
layout: default_toc
author: Teresa J. Mayfield-Meyer, Toni Androski
date: 2023-03-08
---

# How To Bulkload Loans

Bulkloading loan information is a two step process. The first step involves creating loan metadata in Arctos with a bulkload tool.  The second step populates the loan(s) with catalog record data and anything else that is missing from the metadata. Before beginning this process, it may help to read [How to Create a New Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html) as the process for bulkloading is comleting the same steps in bulk.

## Create Loan Metadata ([Initiating a Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html#initiating-a-loan))

### Navigation: [Manage -> Accessions, Loans, Permits -> Loan Metadata Bulkload -> Load csv](https://arctos.database.museum/loaders/BulkloadLoan.cfm?action=ld)  

 Use the the "[Get a template](https://arctos.database.museum/loaders/BulkloadLoan.cfm?action=makeTemplate)" hyperlink to download the loan bulkloader spreadsheet (.csv)
* Populate the spreadsheet fields following the conventions outlined by the Loan Loader screen. The summary indicates what fields are required. 
* Formatting is very important, so make sure you are typing things into the spreadsheet exactly as they appear when you pull up a loan in Arctos. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**

* When entering agent names, the easiest way to make sure that 1) the agent exists in Arctos and 2) you have the name spelled and formatted correctly, is to search in Arctos for the agent and if existing, copy/paste that name from Arctos into the spreadsheet. If you need to create an agent, see [How to Create Agents](http://handbook.arctosdb.org/how_to/How-to-Create-Agents.html)

* Excel tends to auto-correct dates into a default format.  Change the date columns from date or number format to text format, or select the date format used in Arctos (yyyy-mm-dd) **Tip** The written sections of the loan (Nature of Material, Description, Instructions) must be “HTML-friendly.” If there are any symbols in these fields that don’t work in HTML, Arctos will not let you create the loan. The ususal culprit is the enter/return key, instead of using “enter” to create a line break, you will need to use <br>

 * If the loan contains items from multiple collections in the institution, the loan may be assigned to the collection with the greatest number of specimens in the loan, no matter how this determination is made it is best to be consistent, so document the method of choice for your institution
 
 * For details about what should be included in each field of the Loan Metadata Bulkload, see the Definitions and Documentation section of the [Loan Loader](https://arctos.database.museum/loaders/BulkloadLoan.cfm?action=ld) and follow the links for each column header for more information or reiew [Initiating a Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html#initiating-a-loan)  
 
 * When the template is complete, save the file as a csv
 
* Upload the file using the upload button found on the component loader screen.

* Once your spreadsheet formatting has completed validation, click on the 'Review and Load' link to see your records in the component loader (if your data does not validate and you receive an error message, check that your spreadsheet column headings are correct).

* If you entered "autoload" in the status column of your csv, the records should begin to load automatically, otherwise you will need to select "Review all records for user" next to your Arctos username, then select "check all and change status to 'autoload'" and finally, Change status for checked records". This series of steps will set your citations to begin loading.

* Return to "Review and Load" to monitor the progress, any errors with your citation data will be returned in the 'Status' column. Common errors include missing data (e.g., required fields) or catalog record numbers that are not found. To rectify these erros, select "Get csv for this user/status", then delete the offending records using "Delete for this user/status". Use the downloaded csv to make corrections then repeat the process above for the corrected data.

* Citations will be immediately linked, however they may not appear in your catalog records for up to 24 hours.

 * If edits are required after the loan metadata is uploaded, see [How To Find and Edit Loans](https://handbook.arctosdb.org/how_to/How-to-Find-and-Edit-Loans.html)
 
## Bulkload Parts to Loans ([How To Add Items to an Object Loan](https://handbook.arctosdb.org/how_to/How-to-Add-Loan-Items.html))

Now that the loans have been created in Arctos, parts that were included in each loan need to be added. To accomplish this, see [How To Bulkload Loan Items](https://handbook.arctosdb.org/how_to/How-To-Bulkload-Loan-Parts.html)

# Tutorial Videos ↗️

How to Bulkload Loans (Step 1):

[![How to Bulkload Loans](https://i9.ytimg.com/vi/pN40CkKAbgw/mq2.jpg?sqp=CJCU8I8G&rs=AOn4CLCgvG7IypQyOLtWLJ3jqMzZHZ6e7A)](https://youtu.be/pN40CkKAbgw)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How_To_Bulkload_Legacy_Loans.markdown" target="_blank">here</a>.
