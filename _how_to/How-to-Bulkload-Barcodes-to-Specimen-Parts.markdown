---
title: How To Bulkload Barcodes to Specimen Parts
layout: default_toc
author: Emily Braker
date: 2016-02-27
---

# Bulkloading Barcodes to Specimen Parts
(Based on a guide initally developed by April Payne, Northern Michigan University)

This page describes how to bulkload barcodes to specimen parts. Note that the barcodes you wish to assign must first be made into containers BEFORE you assign them to specimen parts. (See the “Making Containers” page in How To Arctos). 

To begin, use the Arctos drop-down menus to select **Enter Data > Batch Tools > Parts >> Containers**

This will bring you to a new page that allows you to download a CSV template that can be opened and edited in your favorite spreadsheet software.  Alternatively you can create your own file, but make sure it has the headers listed below and is saved in CSV format (comma delimitated).  

Open the template as a spreadsheet (e.g., in Excel), and fill in the columns beneath the headers as follows:

* OTHER_ID_TYPE - type the words “catalog number”

* OTHER_ID_NUMBER - this field requires the catalog number only (without the collection prefix)

* guid_prefix - indicate the collection prefix (e.g., NMU:Mamm) 

* PART_NAME - indicate the type of specimens (e.g., skull, skeleton, skin, etc.)

* PRINT_FG - this field is not required, but if it gives you trouble enter a 1 or 2 to comply

* NEW_CONTAINER_TYPE - indicate the type of container you will be assigning to the specimen in question (e.g., skin=tag, skeleton/skull=vial).

* BARCODE - indicate the barcode to be assigned to the container
  
Save the file (retaining the CSV format). Before uploading the resulting file you may need to delete any extra carriage returns (i.e., blank lines) at the bottom of the file. Open the file in any text editor (e.g., Notepad or Notepad++ NOT Microsoft Word), scroll down to the bottom of the file, delete the extra line(s) and save. Excel automatically adds this extra line and it is not compatible with Arctos.

Select "Choose File" to browse to the file that you just edited.  Click the "Upload this File" button.  If the upload worked you should see a dialog window indicating “Success!” 

If the upload was not successful, you will need to troubleshoot the problem. Search for the specimens that you are working with in Arctos and check for the following:

  * Make sure all specimens in your bulkload file exist. If any are not recorded in the database, delete those specimens from the file and re-upload it. (It is a good idea to keep a record of specimens that are not entered in to Arctos, as you may want to figure out why they are not in the database.)   

  * Check to see that you have assigned the correct Part_Name to the specimen. For example, rather than “skin”, it might have been categorized in the database as “study skin” or “flat skin”.    

  * The container type might need to be changed to conform with existing types defined in Arctos. You can only use a container type category that exists within Arctos such as vial, tag, cryovial, etc.

Once you have corrected any errors, attempt to re-upload the file.

### Bulkload Parts > Containers Tutorial Video ###
[![How to Bulkload Parts into Containers](https://i9.ytimg.com/vi/4_bY4DMgOkE/mq2.jpg?sqp=CL2hlvIF&rs=AOn4CLBdd_Ji-zc6ng2i0zPOvQLifmgVYw)](https://youtu.be/4_bY4DMgOkE)
