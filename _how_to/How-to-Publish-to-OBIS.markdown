---
title: How To Publish Data to OBIS
layout: default_toc
author: Teresa J Mayfield-Meyer
contributor:  Phyllis Sharp 2022-06-14, David Bloom 2022-08-29
date: 2022-08-29
---
# How to Publish Arctos Data to the Ocean Biodiversity Information System (OBIS)

 The following are the steps that Phyllis Sharp took to prepare DMNS:Inv data for inclusion in [OBIS](https://obis.org/).  

## Before Publication to OBIS

Get data cleaned up and respond to specific questions from [Abby Benson](https://github.com/albenson-usgs) at OBIS.

The DMNS:Inv clean-up included:

1.  Checking all scientific names against WoRMS and updating invalid names.  Abby prepared a list of names with no match in WoRMS or that were invalid.  Most of those with no match were terrestrial species but all invalid names were updated. 
2. Geolocating where possible as records without decimalLatitude and decimalLongitude are excluded. 
3. Reviewing Abby's list of non-marine lots for reasonableness.  WoRMS associates all taxon names with its Environment so only those with Marine or Brackish environments are included.  
4. Adding [Individual Count](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#individual_count) to all records. 

## Publication

Once the cleanup and coordination with Abby are complete, notify David Bloom at VertNet which collection(s) are to be added/published to OBIS. After the initial publication, monthly publication should be automatic. If any issues areise with publication, please file an issue in the [Arctos main repo](https://github.com/ArctosDB/arctos/issues/).

## Edit this How To

If you see something that needs to be edited in this How To, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_how_to/How-to-Publish-to-OBIS.markdown).
