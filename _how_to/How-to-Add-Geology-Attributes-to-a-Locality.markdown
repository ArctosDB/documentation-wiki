---
title: How To Add Geology Attributes to a Locality
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2019-11-25
---
# How To Add Geology Attributes to a Locality

[Geology Attributes](http://handbook.arctosdb.org/documentation/geology.html) attach geology information to Locality. Each locality may contain any number of geology attributes, each with a determiner and method. This How-To documents the process for adding Geology Attributes to a Locality.

## Bulkload Geology Attributes

There is no tool for bulkloading geology attributes to existing localities. This is by design as this could result in incorrect locality data. (see [Caution](#Caution) below). However, geology attributes can be added as part of a normal specimen bulkload which creates new localities. To use this method, just add Geology to your bulkload builder:  

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Bulkload_builder.jpg)

Then complete the required fields (GEOLOGY_ATTRIBUTE and GEOL_ATT_VALUE) along with any other fields for which you have data. Up to 6 geology attributes can be added for any single record locality in the bulkload file. **NOTE** Geology attributes and values must conform to terms in the [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE).

## Create or Edit the Locality 

If the locality already exists, you can edit the locality following the instructions in [How to Edit a Specific Locality](http://handbook.arctosdb.org/how_to/How-to-Edit-a-Specific-Locality.html).  

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) 
#### Caution  
Be sure that the geology you plan to add to the locality applies to ALL cataloged items using the locality. If this is not the case, clone the locality using the Clone Locality button at the bottom of the edit locality page and add the geology attributes to the new cloned locality, then change the locality for the appropriate collecting events following the instructions in [How To Create a New Collecting Event for a Locality](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-Collecting-Event-for-a-Locality.html) to reflect the new locality.

Otherwise, create the locality from scratch following the instructions in [How To Create a Locality](http://handbook.arctosdb.org/how_to/How-to-Create-a-Locality.html).

Once you have the locality ready to edit, you can add the geology attributes.

## Add Geology Attributes

Scroll to the bottom of the locality edit page and you will find the Create Geology Determination form.
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Create_Geol.jpg)

Complete the required fields plus any of the other fields for which you have information and select "Create Determination". If you have more than one geology attribute to add, simply repeat this process until all of the geology attributes have been added. There is no need to save locality edits, creating a determination adds the geology attribute to the locality. 

For more information about Geology Attributes and the data format or code table controls for the geology attribute fields see the [documentation](http://handbook.arctosdb.org/documentation/geology.html).

## Edit Geology Attributes 

If you need to edit a geology attribute, edit the locality, find the geology attribute, make the appropriate changes, and select "Save Changes" at the bottom of the list of Geology Attributes. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Edit_Geol.jpg)

## Delete Geology Attributes

If you need to delete a geology attribute, edit the locality, find the attribute, select "Delete this" next to the Geology Attribute, then select "Save Changes" at the bottom of the list of Geology Attributes. 
