---
title: How To Create Taxa in Arctos Ichnology
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2021-05-19
---

# How To Create Taxa in the Arctos Ichnology Taxonomy Source

[Arctos Ichnology](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxonomy_source#arctos_ichnology) is currently the preferred taxonomic source for ichnofossils. While ichnotaxa classifications can be added to other sources, it is preferable that all ichnotaxa classification remain in Arctos Ichnology for ease of maintenance. Collections with any trace fossil identifications should add Arctos Ichnology to their list of preferred taxonomy sources.

Before adding any taxa to Arctos Ichnology read through [How to Create Taxa](https://handbook.arctosdb.org/how_to/How-to-Create-Taxa.html).  The procedure below is not significantly different but there are a few special steps required for ichnotaxa.  To maintain the integrity of the locally managed source, users are asked, if at all possible, to not deviate from these recommended procedures for creating the name, classification and metadata.

## Create Taxon Names

Preferably, all new taxon names should have a **taxon status** of VALID.  **Taxon status** is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS).  If you must add a taxon name with a taxon status of INVALID, be sure to link it to the VALID taxon name. Click on [Edit Name + Related Data] to access this form. It is preferable to use the A {string} identification for invalid taxon names that do not have a valid synonym than to add that invalid taxon name to Arctos.  

![Screen Shot 2020-02-29 at 10 45 26 AM](https://user-images.githubusercontent.com/15368365/75612460-d15e1700-5ae0-11ea-907b-407dbb61f3d4.png)

Complete the **preferred name** to identify the synonym that is the valid taxon name especially if there are multiple synonyms.  In the example below, _Helix postelliana_ is the invalid taxon name.  The preferred valid name is _Daedalochila postelliana_.

![Screen Shot 2020-02-29 at 10 46 30 AM](https://user-images.githubusercontent.com/15368365/75612481-fd799800-5ae0-11ea-9555-27914da175d1.png)

## Create Classification

To maintain consistency of the classification hierarchy in Arctos Ichnology it is easiest to clone a new classification from an existing related classification in Arctos Ichnology.  For example, we need to add the taxon name _Need name_.  We have researched the taxon name and found two reputable sources that confirm that it is a valid taxon. Arctos has the genus Chiliborus but not our species.  

![Screen Shot 2020-03-01 at 3 46 08 PM](https://user-images.githubusercontent.com/15368365/75635682-4a3e9b00-5bd5-11ea-9451-14eafc44f9ae.png)

We open the genus as we will want to clone this to create our new taxon. Click on "Clone classification as a new name"

![Screen Shot 2020-03-01 at 4 00 35 PM](https://user-images.githubusercontent.com/15368365/75635769-dcdf3a00-5bd5-11ea-8176-b4991eebb63d.png)

We enter the new taxon name and select WoRMS (via Arctos) as the preferred source, then click on "create name with entire classification."

![Screen Shot 2020-03-01 at 4 03 07 PM](https://user-images.githubusercontent.com/15368365/75635803-2fb8f180-5bd6-11ea-89a7-ee318d00dc38.png)

- Change the author to be **Need**
- The nomenclatural code is not changed
- We add the two source authorities.  On the first, we enter the title and the URL.  The second is a GBIF entry with multiple images and collection records
- We leave the taxon status as "valid" unless we are entering an invalid taxon with a link to the valid name.  
- Enter your name in the "managed by" field.  Your name will also show at the top of the record as the person who entered it 

![Screen Shot 2020-03-01 at 4 45 55 PM](https://user-images.githubusercontent.com/15368365/75636454-377b9480-5bdc-11ea-96e4-429c4910cdc2.png)

Usually, the species name you have entered will be highlighted in red and you will have pull it to its correct position in the classification.  Because you have cloned an Arctos Ichnology classification, you should not have to make any other changes.

![Screen Shot 2020-03-01 at 4 47 41 PM](https://user-images.githubusercontent.com/15368365/75636479-698cf680-5bdc-11ea-81e6-85d8f6381460.png)

Save Edits, then View Taxon Page to see the completed record.  Click [here](https://arctos.database.museum/name/Chiliborus%20bridgesii) to see the completed record. 


