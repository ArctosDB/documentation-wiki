---
title: How To Bulkload Accessions
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2022-07-13
---

# How To Bulkload Accessions

Bulkloading accession information is an important step in migration into Arctos. It may help to read [How to Create an Accession](https://handbook.arctosdb.org/how_to/How-to-Create-an-Accession.html) as the process for bulkloading is completing the same steps in bulk.

## Create the Accession Bulkload file

 * Log into Arctos and from the main menu select [Enter Data > Batch Tools > Bulkload Accessions](https://arctos.database.museum/tools/BulkloadAccn.cfm)  
 * Select “[Load CSV](https://arctos.database.museum/tools/BulkloadAccn.cfm?action=ld)” then [get a template](https://arctos.database.museum/tools/BulkloadAccn.cfm?action=makeTemplate) and open the file that downloads  
 * Formatting is very important, so make sure you are typing things into the spreadsheet exactly as they appear when you pull up a loan in Arctos. 
 
 ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**
 
 **Tip** When entering agent names, the easiest way to make sure that 1) the agent exists in Arctos and 2) you have the name spelled and formatted correctly, is to search in Arctos for the agent and if existing, copy/paste that name from Arctos into the spreadsheet. If you need to create an agent, see [How to Create Agents](http://handbook.arctosdb.org/how_to/How-to-Create-Agents.html) 
 
 **Tip** Excel tends to auto-correct dates into a default format.  Change the date columns from date or number format to text format, or select the date format used in Arctos (yyyy-mm-dd) 
 
 **Tip** The written sections of the accession (Nature of Material, Remarks) must be “HTML-friendly.” If there are any symbols in these fields that don’t work in HTML, Arctos will not let you create the accession. The ususal culprit is the enter/return key, instead of using “enter” to create a line break, you will need to use the ```<br>``` tag 
 
 * If the accession contains items from multiple collections in the institution, the accession may be assigned to the collection with the greatest number of records in the accession, no matter how this determination is made it is best to be consistent, so document the method of choice for your institution  
 * For details about what should be included in each field of the Accession Bulkload, see the [Accession Bulkload Tool](https://arctos.database.museum/tools/BulkloadAccn.cfm?action=ld) and follow the links for each column header for more information or reiew [How to Create an Accession](https://handbook.arctosdb.org/how_to/How-to-Create-an-Accession.html) 
 * When the template is complete, save the file as a CSV-UTF8
 
### Upload the Accessions to Arctos 

 * Log into Arctos, from the main menu select [Enter Data > Batch Tools > Bulkload Accessions](https://arctos.database.museum/tools/BulkloadAccn.cfm)
 * Select “[Load CSV](https://arctos.database.museum/tools/BulkloadAccn.cfm?action=ld)” 
 * Browse for the csv file created above and select upload this file
 * If you get an error message, check formatting and make sure there are no leading and trailing spaces in any cell. If an agent isn’t working, make sure that the name exists in Arctos and double-check the spelling. Once you think you’ve fixed the problem, save the file and upload it again
 * If you receive an error that you cannot interpret, [file an issue](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=Error+Explanation%2C+Error+Messages&template=error-help-request.md&title=Need+Help+with+Arctos+Error).
 * Once the data have loaded, return to review and load to see their progress and any errors that may result. If the status field is blank or includes anything other than "autoload", the accession will continue to sit in the component loader tool. To set the accessions to load, select "review all records for user" next to the username of the person who loaded the accessions, then "check all and set to autoload", then "change status for all checked records". It may take a while for the accessions to load, so have a cup of coffee and come back later to see if there are any errors.
 * If any of the accession fail to load, the reason will appear in the status column. The only way to make corrections is to download the data with errors, delete the data from the tool, correct data in the download file, then re-load it to the tool.
 
 ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**
 
 Add a column to the template download "STATUS" and enter "autoload" for every row with data, this will automatically attempt to load the accessions after they are loaded to the component loader tool.
 

# Tutorial Videos ↗️

[![How to Create an Accession](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Create_an_Accession_in_Arctos.jpg)](https://youtu.be/FmWU1iWl6NA)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How_To_Bulkload_Accessions.markdown" target="_blank">here</a>.
