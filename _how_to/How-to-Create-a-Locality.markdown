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

When collections are made from a single locality, data entry can be easier if the locality is created in advance. Providing a Locality Nickname allows anyone entering new catalog records from the locality to complete all locality information simply by inserting the locality nickname
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/locality/locality%20nickname.jpg)
