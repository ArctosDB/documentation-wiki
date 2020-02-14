---
title: How To Bulkload Catalog Records
layout: default_toc
author: Carla Cicero
date: 2016-03-08
---

# Bulkloading Catalog Records

**Enter Data > Bulkloader > Bulkload Builder**

If you do not have a Bulkload Catalog Record Data sheet, begin with the [Bulkload Builder](https://arctos.database.museum/Bulkloader/bulkloaderBuilder.cfm).

## Bulkload Builder: The first small table is the groups of fields available to use.

Select which ones you want to save time on selecting individual fields in the larger table below.
The following are the groups most relevant to our collection:

* Required
* Coordinate Meta
* DMS Coordinates
* D.d Coordinates
* Identifiers
* Agents
* Parts
* Attributes
* The Rest

From the larger table, you will see the fields that were selected as part of the group selected above.
Those that were not selected and need to be are as follows:

* DEC_LAT
* DEC_LONG

There are some fields that will never be used four our collection’s purposes and therefore do not need to be in your file. So, **unselect** the following:

* LOADED
* LATMIN
* LATSEC
* LATDIR
* LONGMIN
* LONGSEC
* LONGDIR
* MAXIMUM_ELEVATION
* MINIMUM_ELEVATION
* ORIG_ELEV_UNITS
* FLAGS
* MIN_DEPTH
* MAX_DEPTH
* DEPTH_UNITS
* LOCALITY_NAME
* COLLECTING_EVENT_NAME You will want to keep the format in CSV. That is the type of file Arctos works with.

Now click on “Download Template” located below the small table and above the large table.
Your file will automatically be put into your computer’s downloads.

## Helpful Hints:

* Any header can be deleted, added, or rearranged in the excel sheet manually.
* **BUT BE CAREFUL!** Be sure edited cells do not have an invisible lead or end, otherwise Arctos will reject it.
* Open your new Bulkloader template and review the headers.
* You may notice it has a large number of fields for parts, attributes, collector, etc. These are there only if you need them. You may or may not use them all and that is ok. They can be left blank.
* **IT IS VERY HELPFUL TO HAVE THE SINGLE DATA ENTRY PAGE OPEN WHILE ENTERING DATA INTO THE BULKLOAD DATA SHEET.**
 * Much of the bulkloader works off of the single data sheet and many things are “text sensitive”, meaning Arctos will not accept your file if something does not already exist within Arctos (ie; agents, parts, attributes, etc) OR if something is spelled incorrectly.
* Agents can be listed as “unknown” if it is absolutely necessary.
* If no Catalog Number has been previously assigned;
 * Leave the CAT_NUM blank if you want Arctos to automatically assign the next available catalog number.
 * **WARNING!** This does not always work. When trying to fill a gap in the available catalog numbers, it is wise to view what is available and enter them manually. Otherwise you will have to either email the head janitor of Arctos to ask for the records to be deleted, or do each one manually via the “Other ID” tab in edit mode.

## Excel Helpful Hints:

* Excel likes dates to be in the (mm-dd-yyyy) format, whereas Arctos likes them to be in (yyyy-mm-dd) format. Excel will also re-format the date back to how it likes if you close and re-open the file. To change the date format at any point, do the following:
 * In the Home tab of excel in the “Number” section there will be a drop menu. With the cell(s) you need selected, click the drop menu and scroll to the bottom and select Text. This tells excel to stop assuming it knows what to do with the date and keep it the way you want it.
 * Another way to do this, which is especially helpful with a re-opened file, is to again, select the cell(s) you want and click the drop down menu in the “Number” section of the Home tab.
* Select “more number formats” at the very bottom.
* If “date” is not already selected, do so and it will bring up all the different formats for dates.
* In the “Locale (location)” drop down menu, select “English (South Africa)”
* South Africa is your new best friend because they have the date format that you need. Select “yyyy-mm-dd” format and click ok.
* Your highlighted cell(s) should automatically change to Arctos date format. **Woot!**

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
 * Format example:
 * [NMU:Mamm]2015.02
* TAXON_NAME
 * The specimen’s taxonomic name.
 * Make sure it is spelled correctly!
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

### Before Bulkloading    

At the bulkloading page, just above where you will click to choose your file to upload, Arctos will tell you if the bulkloader is currently being used.
* **“There is nothing in the staging table. You are free to proceed”**
* As we know, Arctos is publicly shared. This is also true for the bulkloader. If another institution is bulkloading, this page will tell you who is using it and show their contact information (if they have any).
* If you are using the bulkloader, your name and contact information will be shown and will stay up there if you do not clear the staging table after you are done. If you forget to delete your stuff from the staging table, you may end up getting some emails from other institutions asking when you will be done.

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

 ***IMPORTANT: DELETE YOUR DATA FROM THE STAGING TABLE***

## How to Bulkload Data Tutorial Video

[![YouTube: How to Bulkload Data](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Bulkload_Data_thumb.jpg)](https://youtu.be/2ehyZqS_C3Q)
