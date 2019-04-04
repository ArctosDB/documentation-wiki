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
 * Formatting is very important, so make sure you are typing things into the spreadsheet exactly as they appear when you pull up a loan in Arctos. **Tip** When entering agent names, the easiest way to make sure that 1) the agent exists in Arctos and 2) you have the name spelled and formatted correctly, is to search in Arctos for the agent and if existing, copy/paste that name from Arctos into the spreadsheet **Tip** Excel tends to auto-correct dates into a default format.  Change the date columns from date or number format to text format, or select the date format used in Arctos (yyyy-mm-dd)  
 * If the loan contains items from multiple collections in the institution, the loan may be assigned to the collection with the greatest number of specimens in the loan, no matter how this determination is made it is best to be consistent, so document the method of choice for your institution  
 * For details about what should be included in each field of the Loan Metadata Bulkload, see the [Loan Bulkload Tool](http://arctos.database.museum/tools/BulkloadLoan.cfm) and follow the links for each column header for more information or reiew [Initiating a Loan](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html#initiating-a-loan)  
 * When the template is complete, save the file as a CSV
 
### Upload the Loan Metadata to Arctos 

 * Log into Arctos, from the main menu select [Enter Data > Batch Tools > Bulkload Loans](http://arctos.database.museum/tools/BulkloadLoan.cfm)
 * Browse for the csv file created above and select upload this file
 * If you get an error message, check formatting and make sure there are no leading and trailing spaces in the cell. If an agent isn’t working, make sure that it exists in Arctos and double-check the spelling. Once you think you’ve fixed the problem, save the file and follow step 2.a. again. 
3.	Adding the rest of the information: Go to Manage Data > Transactions > Find Loan. 
a.	Enter the VZ loan number in the search field. 
b.	Select [Edit Loan]. 
c.	Check through the information that has been filled in with the bulk upload (Collection, Loan Number, Agents and Roles, Loan Type, and Dates). You’ll need to change the Nature of Material, Description, and Instructions fields to reflect what’s on the original loan invoice (refer to the Returnable Loans Workflow for what should go in each of these fields)2.  
4.	Adding Specimens to the Loan: After you are finished adding information to the loan, click the light orange Save Edits button at the bottom of the Edit Loan box, then click the [add items] link below that button.
a.	Search for specimens as you normally would. When Arctos finds your searched specimens, there will be an option next to each specimen’s parts that will allow you to add it to the loan. Select the relevant specimens/parts3. 
b.	If the loan is returnable and has been closed, use the drop-down menus to change the disposition of the specimens from “on loan” to “in collection.” If it is not recorded that a returnable loan has been closed, flag it so we can check if it’s in the collection.
c.	If there are remarks about the condition of each specimen, you can also add these to the “condition” field on this page. 
d.	Click Back to Loan at the top of the page (above the line that indicates the number of specimens that were found). 
For loans with items that UMNH borrowed from another institution, you won’t be able to add these items to the loan if that museum doesn’t use Arctos. In this case, you should enter all of the specimen details (species, catalog number, specimen type) in the Nature of Material section.


Footnotes
1. If you need to create an agent, see the Arctos How-To guide: http://handbook.arctosdb.org/how_to/How-to-Create-Agents.html  
2. The written sections of the loan (Nature of Material, Description, Instructions) must be “HTML-friendly.” If there are any symbols in these fields that don’t work in HTML, Arctos will not let you create the loan. Most likely, all that you will need to know is that you cannot use the enter/return key. Instead of pushing “enter” to create a line break, you will need to type <br>
3. Check the “Subsample?” box to indicate that you are taking a subsample of the specimen part (i.e. you are loaning a femur from a complete skeleton or hair from a study skin). 
