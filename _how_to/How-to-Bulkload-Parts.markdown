---
title: How To Bulkload Parts
layout: default_toc
author: Teresa J Mayfield-Meyer
date: 2021-07-15
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

# [How to Bulkload Parts](#how-to-bulkload-parts)

**[Enter Data > Bulkload Tools > Parts > Bulkload Parts]()**

## [Bulkload Parts Template](#bulkload-parts-template)

If you do not have a Bulkload Parts Data sheet, begin with the [Bulkload Parts Template]().

Now click on “Download Template” located below the small table and above the large table. Your file will automatically be put into your computer’s downloads.

## Helpful Hints:

* Any header can be deleted, added, or rearranged in the excel sheet manually. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Be sure edited cells do not have an invisible lead or end, otherwise Arctos will reject it. 

* You may notice the bulkload template has a large number of fields for parts, attributes, collector, etc. These are there only if you need them. You may or may not use them all and that is ok. They can be left blank.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**

* The bulkloader only allows for one part attribute per part. If you need to add more attributes, consider bulkloading the records without parts and then bulkloading parts with the Part Bulkload Tool. 

The following is a complete breakdown of all fields and what data they should include:

* COLLECTION_OBJECT_ID
  * A temporary number for the excel list only. It will not be included in the specimen data.
* ENTEREDBY
  * Your Arctos user name
* CAT_NUM
  * Arctos will automatically assign the next available catalog number if this field is left blank.
  * If the specimen already has an existing catalog number, put it here.
* OTHER_ID_NUM_5
  * Don’t ask why 5 is first, but this is used if there are any other useful ID’s connected with the specimen, e.g., wolf – WDL # AND KG #
* OTHER_ID_NUM_TYPE_5
  * Again, if there is another useful ID connected with the specimen, put the type here.
  * e.g., wolf- WDL # “original identifier” / KG # “collector number”
  * Make sure to use a type that Arctos offers, do not make up your own!
* OTHER_ID_NUM_1
  * This is typically used more often in conjunction with one ID that is connected with the specimen.
  * e.g., just the KG, or any other number previously assigned to the specimen.
  * NOT THE NMZ #!. NMZ numbers are catalog numbers and have their own column.
* OTHER_ID_NUM_TYPE_1
  * Describes what the other ID number is. KG for instance is a “collector number”.
* ACCN
  * Accession
  * Format example: [NMU:Mamm]2015.02
* TAXON_NAME
  * The specimen’s taxonomic name.
  * Make sure it is spelled correctly!
  * You can use any of the taxon formulas allowed in Arctos. Just enter the name(s) in the format shown in the [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula).
* NATURE_OF_ID
  * If it was caught then use “field”. If it is a specimen that has already existed in the museum, use “legacy”.
* ID_MADE_BY_AGENT
  * Choose an existing agent such as Kurt E. Galbreath, or make a new agent in Arctos.
* MADE_DATE
  * The date the specimen was identified
* IDENTIFICATION_REMARKS
  * Any remarks made about the identification
* VERBATUM_DATE
  * The date on the id tag or data sheet
* BEGAN_DATE
* ENDED_DATE
  * If a date is not exact or there is some uncertainty about it, use a sufficient range.
  * e.g, Date on tag = 1978, Range = 1, Jan. 1978 – 1, Jan. 1979
* HIGHER_GEOG
  * Continent, country, state, county
* SPEC_LOCALITY
  * Verbatim locality + state & country
* VERBATIM_LOCALITY
  * The locality on the specimen tag or data page
* ORIG_LAT_LONG_UNITS
  * decimal degrees
* DEC_LAT
  * Decimal latitude
* DEC_LONG
  * Decimal longitude
* LATDEG
  * N or S
* LONGDEG
  * E or W
* DATUM
  * World Geodetic System 1984
* GEOREFERENCE_SOURCE
  * Global positioning system (transcription)
* MAX_ERROR_DISTANCE
  * The max error for distance
* MAX_ERROR_UNITS
  * The units for max error; meters (m)
* GEOREFERENCE_PROTOCOL
  * Not recorded
* EVENT_ASSIGNED_BY_AGENT
  * Event determiner which is usually the same as the collector and identifier unless indicated otherwise.
* EVENT_ASSIGNED_DATE
  * Determination date
* VERIFICATIONSTATUS
  * Unverified
  * Anything else will lock this section and cannot be changed.
* LOCALITY_REMARKS
  * Any remarks about the locality. If none, it can be left blank.
* HABITAT
  * Not required by Arctos but it is there if someone decides to include the habitat.
  * Can be left blank.
* COLL_EVENT_REMARKS
  * Any remarks about the collection event.
* COLLECTOR_AGENT_1
  * The collector agent
* COLLECTOR_ROLE_1
  * “Collector”
* GUID_PREFIX
  * Choose for your collection (NMU:Mamm, MLZ:Bird)
* COLL_OBJECT_REMARKS
  * Any remarks about the collection object
* PART_NAME_1
  * One of the parts being put into the collection, ie; tissue, skeleton, skull, skin, etc o This is TEXT SPECIFIC, must spell exactly how arctos spells it.
* PART_CONDITION_1
  * The condition of the part, ie; good, fair, bad, excellent.
* PART_BARCODE_1
  * You can assign barcodes to new or old specimens here if so desired. Otherwise it can also be done through the “Bulkload Barcodes to Specimen Parts”.
* PART_CONTAINER_LABEL_1
  * This also has to do with barcoding. If using a barcode use the barcode verbatim for the label.
* PART_LOT_COUNT_1
  * How many of that specimen you have. Usually just one (1) for skeletons, skins and skulls. May be two (2) if there was more than one tissue sample taken.
* PART_DISPOSITION_1
  * In collection
* PART_REMARK_1
  * Any remarks regarding the part. Can be left blank.
* ATTRIBUTE_1
  * Sex, total length, tail, hind foot, ear, or weight.
* ATTRIBUTE_VALUE_1
  * Male or female, measurement #
* ATTRIBUTE_UNITS_1
  * No units for male or female, measurement = cm and g unless specified otherwise.
* ATTRIBUTE_REMARKS_1
  * Remarks
* ATTRIBUTE_DATE_1
  * Same as collection or id date
* ATTRIBUTE_DET_METH_1
  * Method of finding the attribute, usually left blank.
* ATTRIBUTE_DETERMINER_1
  * Collector or identifier agent
* COLLECTING_METHOD
  * Usually left blank unless told otherwise.
* COLLECTING_SOURCE
  * Wild caught
* ASSOCIATED_SPECIES
  * Not really needed
* LOCALITY_ID
  * Not yet utilized;
  * Use if returning to the same location a number of times.
* COLLECTING_EVENT_ID
  * Not yet utilized;
  * Use if returning to the same location a number of times.
  * (similar to accession and agent)
* SPECIMEN_EVENT_REMARK
  * Any remarks about the trapping event.
* SPECIMEN_EVENT_TYPE
  * Accepted place of collection
* OTHER_ID_REFERENCES_1
  * Any other id references

<h3 id="this-is-a-test">
  Before Bulkloading
</h3>

At the bulkloading page, just above where you will click to choose your file to upload

### Ready to Bulkload    

* Choose your file and click “Upload this file”. **!MAKE SURE TO EDIT THE FILE IN “NOTE” FIRST!**
  * Open the file in “note” and delete the empty space at the bottom of your data, save and your good to go.
* You will be brought to a page that says “There are (#) records in the staging table. They have not been checked or processed yet”. (#- the number of records you are trying to upload).
* From here you will choose from the following choices; Check and load these records, just load these records, or cleanup.
  * **“Check and load these records”** - By-passes the need for the records to go into the bulkloader where they would normally be looked over by an administrator.
  * **“Just load these records”** - Moves the records to the “personal” bulkloader where your administrator can approve them like any other single data entry.
  * **“Cleanup”** – If you have last minute data that needs to be added or changed. Once you do that, go back and choose one of the two other choices. For practical purposes, choose “Just load these records”.
* You will be brought to a new page that says, “Your records have been checked and are now in the table bulkloader and flagged as loaded=’BULKOADED RECORD’. A data administrator can un-flag and load them.” After that it will say in blue “please delete from the staging table”, click that then click “yep, delete away” and you are all set.
* Your data should now be in your institution’s (?) bulkloader awaiting approval.

## How to Bulkload Parts Tutorial Video

[//]: # ([![YouTube: How to Bulkload Parts](need thumbnail)](need tutorial))
