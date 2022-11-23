---
title: How To Bulkload Legacy Loans
layout: default_toc
author: Toni Androski, Teresa J. Mayfield-Meyer
date: 2019-04-04
---

# How To Bulkload Legacy Loans

Bulkloading loan information created prior to migration into Arctos is a two step process. The first step involves creating loan metadata in Arctos with a bulkload tool.  The second step populates the loan with specimen data and anything else that is missing from the metadata. Before beginning this process, it may help to read [How to Create a New Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html) as the process for bulkloading is comleting the same steps in bulk.

## Create Loan Metadata ([Initiating a Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html#initiating-a-loan))

### Create the Loan Metadata Bulkload file

 * Log into Arctos and from the main menu select [Enter Data > Batch Tools > Bulkload Loans](http://arctos.database.museum/tools/BulkloadLoan.cfm)  
 * Select “get CSV template,” then open the file that downloads **Tip** The tool works best with no more than 15-20 loans at a time  
 * Formatting is very important, so make sure you are typing things into the spreadsheet exactly as they appear when you pull up a loan in Arctos. **Tip** When entering agent names, the easiest way to make sure that 1) the agent exists in Arctos and 2) you have the name spelled and formatted correctly, is to search in Arctos for the agent and if existing, copy/paste that name from Arctos into the spreadsheet. If you need to create an agent, see [How to Create Agents](http://handbook.arctosdb.org/how_to/How-to-Create-Agents.html) **Tip** Excel tends to auto-correct dates into a default format.  Change the date columns from date or number format to text format, or select the date format used in Arctos (yyyy-mm-dd) **Tip** The written sections of the loan (Nature of Material, Description, Instructions) must be “HTML-friendly.” If there are any symbols in these fields that don’t work in HTML, Arctos will not let you create the loan. The ususal culprit is the enter/return key, instead of using “enter” to create a line break, you will need to use <br>  
 * If the loan contains items from multiple collections in the institution, the loan may be assigned to the collection with the greatest number of specimens in the loan, no matter how this determination is made it is best to be consistent, so document the method of choice for your institution  
 * For details about what should be included in each field of the Loan Metadata Bulkload, see the [Loan Bulkload Tool](http://arctos.database.museum/tools/BulkloadLoan.cfm) and follow the links for each column header for more information or reiew [Initiating a Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html#initiating-a-loan)  
 * When the template is complete, save the file as a CSV
 
### Upload the Loan Metadata to Arctos 

 * Log into Arctos, from the main menu select [Enter Data > Batch Tools > Bulkload Loans](http://arctos.database.museum/tools/BulkloadLoan.cfm)
 * Browse for the csv file created above and select upload this file
 * If you get an error message, check formatting and make sure there are no leading and trailing spaces in the cell. If an agent isn’t working, make sure that the name exists in Arctos and double-check the spelling. Once you think you’ve fixed the problem, save the file and upload it again
 
### Edit Uploaded Metadata

 * If edits are required after the loan metadata is uploaded, from the Arctos main menu select [Manage Data > Transactions > Find Loan](http://arctos.database.museum/Loan.cfm?Action=addItems) 
 * Select the appropriate GUID Prefix and enter the loan number you wish to edit in the top two search fields
 * Select Edit Loan
 * Review the information that was loaded via the bulkload (Collection, Loan Number, Agents and Roles, Loan Type, and Dates)
 * Save any changes by selecting the light orange **Save Edits** button at the bottom of the Edit Loan box
 
## Add Specimen Parts to Bulkloaded Loans ([Adding Specimens to the Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html#adding-specimens-to-the-loan))

Now that the loans have been created in Arctos, specimen parts that were included in each loan need to be added. To accomplish this, complete the following steps for each loan:

 * From the Arctos main menu select [Manage Data > Transactions > Find Loan](http://arctos.database.museum/Loan.cfm?Action=addItems) 
 * Select the appropriate GUID Prefix and enter the loan number you wish to edit in the top two search fields
 * Select Edit Loan then click the **add items** link  
 * Search for specimens as you normally would. When Arctos finds your searched specimens, there will be an option next to each specimen’s parts that will allow you to add it to the loan. Select the relevant specimens/parts **Tip** Check the “Subsample?” box to indicate that you are taking a subsample of the specimen part (i.e. you are loaning a femur from a complete skeleton or hair from a study skin). 
 * If the loan is returnable and has been closed, use the drop-down menus to change the disposition of the specimens from “on loan” to “in collection.” If it is not recorded that a returnable loan has been closed, flag it so you can check if it’s in the collection  
 * If there are remarks about the condition of each specimen, you can also add these to the “condition” field on this page 
 * After all parts have been recorded appropriately, select **Back to Loan** at the top of the page (above the line that indicates the number of specimens that were found) 
 * Items borrowed from other institutions outside of Arctos cannot be entered in the loan. In this case, enter all of the specimen details (species, catalog number, specimen type) in the Nature of Material section.

# Tutorial Videos ↗️

How to Bulkload Loans (Step 1):

[![How to Bulkload Loans](https://i9.ytimg.com/vi/pN40CkKAbgw/mq2.jpg?sqp=CJCU8I8G&rs=AOn4CLCgvG7IypQyOLtWLJ3jqMzZHZ6e7A)](https://youtu.be/pN40CkKAbgw)

How to Bulkload Loan Items (Step 2):

[![How to Bulkload Loan Items](https://i9.ytimg.com/vi/h4QKUb2cQgs/mq1.jpg?sqp=CJCU8I8G&rs=AOn4CLBVntj4GzENC48neloo6sYTX2GUTg)](https://youtu.be/h4QKUb2cQgs)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How_To_Bulkload_Legacy_Loans.markdown" target="_blank">here</a>.
