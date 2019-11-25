---
title: How To Create a Locality
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2019-11-25
---
# How To Create a Locality

## What is a Locality?
[Locality](http://handbook.arctosdb.org/documentation/locality.html) is a specific place associated with one or more Collecting Events. 

A locality includes three types of data:

 -   [Higher geography](higher-geography) is controlled "authority data" and is included via key relationships.
 -   [Georeferencing determinations](coordinates) are spatial data; they define a shape on a map. Localities may include point-radius data and/or WKT (polygon) data.
 -   Descriptive data, most importantly Specific Locality. Also includes locality attributes such as [Geology](http://handbook.arctosdb.org/documentation/geology.html)

Localities are [shared](http://handbook.arctosdb.org/documentation/sharing-data-and-resources.html). It is important to remember this anytime you are working with Locality. If you want to retain more control over a locality (and therefore, less collaborative maintenance), you can use a [Locality Nickname](http://handbook.arctosdb.org/documentation/locality.html#locality-nickname) to designate the locality as different from any other locality with essentially the same information.

## Create a Locality as Part of Data Entry

Localities are created as part of [Single Record Data Entry](http://handbook.arctosdb.org/how_to/How-to-Enter-Data-for-a-Single-Record.html) and [Data Bulkloading](http://handbook.arctosdb.org/how_to/How-to-Bulkload-Specimen-Data.html). When these localities are exactly the same, they are [merged](http://handbook.arctosdb.org/documentation/locality.html#maintenance).

## Create a Locality for future use in Data Entry/Bulkloading

### Why create a locality without an associated catalog record?
When collections are made from a single locality, data entry can be easier if the locality is created in advance. Providing a Locality Nickname allows anyone entering new catalog records from the locality to complete all locality information simply by inserting the locality nickname. This is accomplished with the "Pick Locality" option. 

![](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/tutorial_images/locality/locality%20nickname.jpg)

Then the Locality Nickname is inserted into the "Locality Nickname" field of the pop-up window

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/locality%20nickname%20pick.jpg)

Select "Find Matches" to see Localities matching the search request

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/locality%20nickname%20accept.jpg)

Select "Accept" for the correct locality

And the locality details will be copied into the current record in data entry

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/locality%20nickname%20entered.jpg)

### Creating a Locality
In order to create a locality for use as described above, complete the following:

 - Log in to Arctos **You must have MANAGE_LOCALITY privileges in order to complete any of the following tasks.**
 
 - From the Arctos Main Menu select Manage Data > Location > Create Locality. You will be directed to the "Create Locality" form.
 
 ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/create%20locality%20form.jpg)
 
 - Select the desired Higher Geography by clicking the "Pick" button and searching for your desired higher geography. 
 
 ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/higher%20geog%20pick.jpg)
 
 - Choose the appropriate higher geography
 
 ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/higher%20geog%20pick%20list.jpg)
 
 - You will be returned to the Create Locality Form, but now, the higher geography you selected will appear in the "pick geography" field.
 
 ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/create%20locality%20with%20HG.jpg)
 
 - At this point, you can complete the other fields in the form or leave them to complete on the next screen. Click “Save” to move on.

 - After clicking "Save” you will be directed to the Edit Locality page so that you can make additional changes. 
 
 ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/edit%20locality%20add%20nickname.jpg)
 
 - Complete all of the relevant fields. If necessary, review the documentation for [Specific Locality](http://handbook.arctosdb.org/documentation/locality.html#specific-locality) and [coordinates](http://handbook.arctosdb.org/documentation/locality.html#coordinates). If you plan to use the locality in future data entry, you will want to add a [Locality Nickname](http://handbook.arctosdb.org/documentation/locality.html#locality-nickname) so that the locality can be easily located during data entry or referred to in data bulkloading. You can create the nickname or let Arctos create one for you. Either way, make a note of the nickname! Anyone entering data using this new locality will be able to find the Locality quickly using the nickname.
