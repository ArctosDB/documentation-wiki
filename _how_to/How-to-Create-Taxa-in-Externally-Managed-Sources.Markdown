---
title: How To Create Taxa in Externally Managed Sources
layout: default_toc
author: Phyllis Sharp, Teresa J. Mayfield-Meyer
date: 2020-02-29
---

# How To Create Taxa in Externally Managed Sources

There are currently three taxonomic sources: Arctos, Arctos Plants and WoRMS (via Arctos).  To better understand the reason for each source and select the one best for your collection, read the descriptions in [this table](https://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXONOMY_SOURCE).

Arctos and Arctos Plants are managed by Arctos users.  WoRMS (via Arctos) is managed by the [World Register of Marine Species](http://www.marinespecies.org/).  Arctos uploads all taxon names, classifications and metadata from WoRMS and refreshes continually using the WoRMS ID.  Here is an example of a WoRMS (via Arctos) classification as it appears in WoRMS and in Arctos.

![image](https://user-images.githubusercontent.com/15368365/75610598-e4b4b680-5acf-11ea-9ead-d646ae0a597a.png)

![Screen Shot 2020-02-29 at 5 19 08 PM](https://user-images.githubusercontent.com/15368365/75617089-a4792680-5b17-11ea-82d9-6a5a0da8ab75.png)

It is unlikely that you will need to add any marine taxa to WoRMS (via Arctos).  More likely, you will add a terrestrial or freshwater species.  WoRMS is adding taxa for these groups consistently by linking with [MolluscaBase](http://molluscabase.org/index.php).  As with marine species, terrestrial and freshwater taxa are always being modified and updated.  

Periodically, we create a list of taxon names in WoRMS (via Arctos) and compare them to the [WoRMS Match Taxa tool](http://www.marinespecies.org/aphia.php?p=match).  We then add the aphiaID to the metadata for each name now in WoRMS.  If you see a missing aphiaID, do add it to the metadata.

It is adviseable to do an "advanced" search in either WoRMS or MolluscaBase to see if the species has been moved to a new genus.  If you find the new name in WoRMS, it should already be in WoRMS (via Arctos).  

For example, our specimen label reads _Therasia kivi_ Gray in the family Charopidae.  WoRMS does not have this species but if we select Advanced Search, we can look for all names that contain "kivi" in the family Charopidae.  

![Screen Shot 2020-03-01 at 3 31 21 PM](https://user-images.githubusercontent.com/15368365/75636613-7827dd80-5bdd-11ea-9200-fb4cb56392b0.png)

This leads us to the current name _Serpho kivi_ (Gray, 1843).  This name is already in WoRMS and therefore in WoRMS (via Arctos). 

![Screen Shot 2020-03-01 at 3 31 38 PM](https://user-images.githubusercontent.com/15368365/75636644-b2917a80-5bdd-11ea-85c8-a11226b5fa6a.png)

Of course, it's best to compare images of the revised taxonomy to your specimen to confirm it's the correct species. Also, note that WoRMS may not include every possible synonym created over the centuries. Individual curators may use different standards to confirm synonymy.  

If it is a very recent name that has not yet been uploaded to WoRMS (via Arctos), you have only to create the taxon name, then add the aphiaID in the metadata.  Save the record and go to the taxon page.  Click on the "refresh" button in the WoRMS (via Arctos) classification and all the data from WoRMS will be added to the taxon record.

Before adding any taxa to WoRMS (via Arctos) read through [How to Create Taxa](https://handbook.arctosdb.org/how_to/How-to-Create-Taxa.html).  The procedure below is not significantly different and is ideal for taxa added to all sources.  To maintain the integrity of the externally managed source, users are asked, if at all possible, to not deviate from these recommended procedures for creating the name, classification and metadata.

## Create Taxon Names

Preferably, all new taxon names should have a **taxon status** of VALID.  **Taxon status** is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS).  If you must add a taxon name with a taxon status of INVALID, be sure to link it to the VALID taxon name. Click on [Edit Name + Related Data] to access this form.

![Screen Shot 2020-02-29 at 10 45 26 AM](https://user-images.githubusercontent.com/15368365/75612460-d15e1700-5ae0-11ea-907b-407dbb61f3d4.png)

Complete the **preferred name** to identify the synonym that is the valid taxon name especially if there are multiple synonyms.  In the example below, _Helix postelliana_ is the invalid taxon name.  The preferred valid name is _Daedalochila postelliana_.

![Screen Shot 2020-02-29 at 10 46 30 AM](https://user-images.githubusercontent.com/15368365/75612481-fd799800-5ae0-11ea-9555-27914da175d1.png)

## Create Classification

To maintain consistency of the classification hierarchy in WoRMS (via Arctos) always clone a new record from an existing record in WoRMS (via Arctos).  For example, we need to add the taxon name _Chiliborus bridgesii_.  We have researched the taxon name and found two reputable sources that confirm that it is a valid taxon. Arctos has the genus Chiliborus but not our species.  

![Screen Shot 2020-03-01 at 3 46 08 PM](https://user-images.githubusercontent.com/15368365/75635682-4a3e9b00-5bd5-11ea-9451-14eafc44f9ae.png)

We open the genus as we will want to clone this to create our new taxon. Click on "Clone classification as a new name"

![Screen Shot 2020-03-01 at 4 00 35 PM](https://user-images.githubusercontent.com/15368365/75635769-dcdf3a00-5bd5-11ea-8176-b4991eebb63d.png)

We enter the new taxon name and select WoRMS (via Arctos) as the preferred source, then click on "create name with entire classification."

![Screen Shot 2020-03-01 at 4 03 07 PM](https://user-images.githubusercontent.com/15368365/75635803-2fb8f180-5bd6-11ea-89a7-ee318d00dc38.png)

- First we delete the "aphidid" row.  Taxon names that we add have no aphidID and are not automatically updated. 
- Next we change the author to be (Pfeiffer, 1842)
- The nomenclatural code is not changed
- We add the two source authorities.  On the first, we enter the title and the URL.  The second is a GBIF entry with multiple images and collection records
- We leave the taxon status as "valid" unless we are entering an invalid taxon with a link to the valid name.  
- Entered your name in the "managed by" field.  Your name will also show at the top of the record as the person who entered it 

![Screen Shot 2020-03-01 at 4 45 55 PM](https://user-images.githubusercontent.com/15368365/75636454-377b9480-5bdc-11ea-96e4-429c4910cdc2.png)

Usually, the species name you have entered will be highlighted in red and you will have pull it to its correct position in the classification.  Because you have cloned the WoRMS (via Arctos) classification, you should not have to make any other changes.

![Screen Shot 2020-03-01 at 4 47 41 PM](https://user-images.githubusercontent.com/15368365/75636479-698cf680-5bdc-11ea-81e6-85d8f6381460.png)

Save Edits, then View Taxon Page to see the completed record.  Click [here](https://arctos.database.museum/name/Chiliborus%20bridgesii) to see the completed record. 


