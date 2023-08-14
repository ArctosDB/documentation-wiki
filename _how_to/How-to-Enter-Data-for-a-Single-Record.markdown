---
title: How To Enter Data for a Single Record
author: Teresa J. Mayfield-Meyer
date: 2023-03-14
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

[GitHub Issue](https://github.com/ArctosDB/documentation-wiki/issues/238)

# How To Enter Data for a Single Record 

**Documentation: [Catalog Record](https://handbook.arctosdb.org/documentation/catalog.html)**

## Navigation [Tools Directory > Data Entry -> Enter Records]([https://arctos.database.museum/enter_data.cfm](https://arctos.database.museum/Bulkloader/enter.cfm))

## Select a Data Entry Form 

### Begin with Previous Records 

You can start with the last record you entered or if you have sufficient access, with any previously entered record.

### Choose a Collection

Use this option to start from scratch, or from the values stored in a Profile. Select the collection for which you wish to enter data and you will start with your last data entry customization.

After choosing one of these options, you will be directed to the appropriate data entry form.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

The background of your new data entry screen should be **green**. If it is not, Arctos will not let you save your data.

### Pick a Profile 

Profiles are customized data entry forms that may carry seed data. You - or any other user - may use any profile to begin data entry with the data and arrangement in the profile. To see existing profiles or create a new profile, select the **Customize** button at the bottom of the data entry screen.

Once at the customization screen, you can select an existing profile with the **Profiles Home** button.

The Profile you are currently using will appear at the top of the list. You may create any number of Profiles, use Profiles created by others, and others may use Profiles created by you. 

 Profiles serve several functions:

 - control the number of some items (such as Attributes) on entry pages
 - hide some individual fields
 - control the post-save behavior by carrying or clearing values entered in the previous record
 - carry "seed" data, defaulted in when the entry form first loads

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Note that a profile's seed data will NOT be loaded when a seed record is used. The profile's customization will still be used. Also, data values saved in a profile will have a distinct style and should be carefully checked before saving a record.

## How To Customize Data Entry and Create Data Entry Profiles

See [How To Customize the Data Entry Form](https://handbook.arctosdb.org/how_to/customize_data_entry.html)

## Data Entry Form Details

The following provides some specifics by data entry section.

### Catalog Record Data

This block includes data about the entire catalog record.

**REQUIRED**

* **accn** is the acquisition number that is given to a set of objects, e.g., 01.2014 and can be selcted using the "pick" button. The accession **does not** need to be associated with the same collection as the item being entered.

* **guid_prefix** will be completed based upon the collection selected above or what has been added to a customized data entry form.

* **record_type** can be left blank if you wish to use the default type selected in collection metadata (See [How To Manage a Collection](https://handbook.arctosdb.org/how_to/How-to-Manage-a-Collection-in-Arctos.html#default-cataloged-item-type)).

**OPTIONAL**

* **cat_num** can be left blank if you wish Arctos to assign the next available number (only for collections using integer catalog numbers).
  
* **flags** can be used to add a notification to the record that some data needs attention after the record is entered.

* **record_remark** is a free text field where any thing related to the catalog record that does not fit in the other fields can be documented.

### Identifiers
This block includes any identifiers other than the catalog number that are applied to the objects or observations being cataloged or that are applied to objects or observations related to the object or observation being cataloged. You can add 5 identifiers to any catalog record in data entry. Additional identifiers will need to be added manually or via the [Identifier: Bulkload Tool](https://arctos.database.museum/loaders/BulkloadOtherId.cfm).

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Any information entered will be ignored unless identifier_type is completed.

**CONDITIONALLY REQUIRED** (if any other identifier information is entered)
* **identifier_type** should be selected from the [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type)

**OPTIONAL** 

* **identifier_issued_by** can be left blank, but should be completed with the preferred name of the Arctos Agent that issued the identifier if known. If the Agent does not exist, leave blank and place the information in identifer_remark.
* 
* **identifier_value** is the **COMPLETE** identifer. When the identifier is a webpage, DOI, or some other resolvable identifier enter the full url.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Arctos includes a helpful tool to help build complete urls for a host of known identifiers. If all you have is the identifier, but you believe it may be part os a url, use the **build** at the far right of the identifier row to make use of the tool.

* **identifier_relationship** documents how the identifier_value is related to the catalog record being entered. Default is self ( the identifier is applied to the object or observation being cataloged). For information about the available relationships see the [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references).

* **identifier_remark** is a free-text field that allows you to make comments about the identifier.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Has the data for the record already been entered as part of another record? You can enter the identifier_issued_by, identifier_type and identifier_value and use the **pull** button on the same row to fill in the current record with data from that record. 

### Identification 

This block includes data about what identifications are applied to the catalog record. You can add 2 identifiations to any catalog record in data entry. Additional identifications will need to be added manually or via the [Identification Bulkload Tool](https://arctos.database.museum/tools/BulkloadIdentification.cfm).

**CONDITIONALLY REQUIRED** (if an identification_n is supplied)

* **identification_n_order** indicates the "acceptedness" of the identification. "0" = unaccepted, "1" = most accepted, "2"-"10" = accepted, but less so than anything with order = "1".

**OPTIONAL**

* **identification_n** is the identification to be applied to the cataloged item. Type in all or part of the cataloged item’s identification and use the Tab key to select a taxon name, or use the "build" button to create a complex identification.

* **identification_n_date** is the date the identification was assigned. If this is not known, leave it blank.

* **identification_n_remark** can be used to add information about the identification, including a verbatim determiner(s) if the Identifying Agent(s) are not found in Arctos Agents.

* **identification_n_agent_n** is the Arctos Agent that determined the identification. Type in all or part of the Agent’s name and use the Tab key to select an Agent. Up to 3 determiners can be added in data entry. Additional determiners will need to be added manually.

#### Identification Attributes

Every identification can include up to 3 attributes in data entry, additional identification attributes can be added manually.

**CONDITIONALLY REQUIRED** (if any other identification attribute information is entered)

* **Attribute** is selected from a [code table](https://arctos.database.museum/info/ctDocumentation.cfm).

* **Value** may be selected from a code table or accept free text depending upon the attribute selected.

**OPTIONAL**

* **Units** are **CONDITIONALLY REQUIRED** by some attribute types, otherwise should be left blank.
 
* **Date** is the date the attribute was determined.

* **Determiner** is the Arctos Agent that determined the attribute value. Type in all or part of the Agent’s name and use the Tab key to select an Agent.

* **Method** is a free-text description of how the determination was made.

* **Remark** can be used to add information about the identification attribute, including verbatim determiner(s) if the determining Agent(s) are not found in Arctos Agents.

### Agents

This block includes data about people or organizations that performed one of the [agent roles](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role) with regard to the catalog record. You can add 8 Agents to any catalog record in data entry. Additional Agents can be added manually or via the [Agent Role: Bulkload Tool](https://arctos.database.museum/loaders/BulkloadCollector.cfm).

**CONDITIONALLY REQUIRED** (both **agent_n_role** and **agent_n_name** must be completed or the information will be ignored)

* **agent_n_role** is selected from a [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role).
 
* **agent_n_name** is the Arctos Agent that performed the selected role. Type in all or part of the Agent’s name and use the Tab key to select an Agent.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Use the **CopyAcross** button next to any Agent to add the name to all other agent fields in the form.

### Place and Time

This block consists of three sections. 

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

**NONE** of the information entered in these sections will save if **record_event_type** is blank.

#### Record-Event

This block includes data about why the **Event** has been associated with the cataloged objects or observations. The information here indicates curation and the activities are related to documenting who and why and Event is associated with the cataloed objects or observations. You can add 1 Record-Event to any catalog record in data entry. Additional Record-Events can be added manually or via the [Catalog Record Event: Bulkload Tool](https://arctos.database.museum/loaders/BulkloadSpecimenEvent.cfm).

**CONDITIONALLY REQUIRED** (if ANY portion of the Time and PLace section includes information)

* **record_event_type** is a description of what happened at the **Event** and is controlled by a [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_event_type)

**OPTIONAL** 

* **record_event_determiner** is the Arctos Agent who assigned the **Event** to the catalog record.  Type in all or part of the Agent’s name and use the Tab key to select an Agent.

* **record_event_determined_date** is the date it was determined that the **Event** should be associated with this catalog record..

* **record_event_verificationstatus** will always be [unverified](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctverificationstatus#unverified) on initial data entry.

* **record_event_verified_by** is the Arctos Agent who completed the **verification_status**.  Type in all or part of the Agent’s name and use the Tab key to select an Agent.

*  **record_event_verified_date** is the date the **verification_status** was assigned.

*  **record_event_collecting_source** indicates the captive status of the cataloged objects or observations at the time of the **Event** and is controlled by a [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source). 

* **record_event_collecting_method** is a free-text field that can be used to add information about methods applied at the **Event** that are specific to the cataloged objects or observations.
  
![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

If methods apply to more than one cataloged object or observation at the same event, use the [event method](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_event_attr_type#event_method) **Event** attribute as it will be applied to all catalog records associated with th event and will not require repeated entry of the method in individual catalog records.

* **record_event_habitat** is a free-text field that can be used to add information about habitat at the **Event** that are specific to the cataloged objects or observations.

* **record_event_remark** is a free-text field that can be used to add any additional information at the **Event** that is specific to the cataloged objects or observations.

* **associated_species** is a free-text field that can be used to add information about other species present at the **Event** id such information is not present in associated catalog records or in secondary identifications on the same catalog record.

#### Event

This block includes standrdized time and verbatim time and location data. You can add 1 Event to any catalog record in data entry. Additional Events can be added manually or via the [Catalog Record Event: Bulkload Tool](https://arctos.database.museum/loaders/BulkloadSpecimenEvent.cfm). 

**CONDITIONALLY OPTIONAL** (if you add any **Event** or **Locality** data)

* **event_verbatim_locality** is the location of the event exactly as described in the fieldnotes or wherever the information is being transcribed from. This field should be as descriptive as possible and include all aspects of "place" provided in the original data.

* **event_verbatim_date** is the day and time or day and time range of the event as recorded. This field should be as descriptive as possible and include all aspects of "time" provided in the original data.

* **event_began_date** is the standardized (See [Dates Documentation](https://handbook.arctosdb.org/documentation/dates.html)) date and time that the event began.

* **event_ended_date** is the standardized (See [Dates Documentation](https://handbook.arctosdb.org/documentation/dates.html)) date and time that the event ended.

* **event_remark** is a free-text field that allows you to record information about the event that does not fit elsewhere.

**OPTIONAL**
* **event_name** Events can be created in advance, given names, and used to eliminate the need for entering the same data into multiple catalog records.
 
![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Entering an exisitng **Event** name here will ignore any data that you enter in any of the remaning **Event** or **Locality** fields.

Use the **pull/sync** button to view the data that is included in the **Event**. If you find that you have chosen the wrong **event** name, then you can use the **clear all event** button to remove any **Event** and **Locality** data and start over.

* **event_id** is the ID assigned by Artos to previously entered **Event**s. Use the **pick event** button to search for events if you believe there is an existing **Event** you could use.

* **event_remark** is a free-text field that allows you to record information about the event that does not fit elsewhere. Make sure that any data that could fit into an **Event Attribute** is placed there instead of in this catch-all field.

##### Event Attributes

Every **Event** can include up to 6 attributes in data entry, additional **Event** attributes can be added manually or as part of an [Event Bulklaod](https://arctos.database.museum/tools/BulkloadCollectingEvent.cfm).

**CONDITIONALLY REQUIRED** (if any other **Event** attribute information is entered)

* **Attribute** is selected from a [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_event_attr_type).

* **Value** may be selected from a code table or accept free text depending upon the attribute selected.

**OPTIONAL**

* **Units** are **CONDITIONALLY REQUIRED** by some attribute types, otherwise should be left blank.
 
* **Date** is the date the attribute was determined.

* **Determiner** is the Arctos Agent that determined the attribute value. Type in all or part of the Agent’s name and use the Tab key to select an Agent.

* **Method** is a free-text description of how the determination was made.

* **Remark** can be used to add information about the identification attribute, including verbatim determiner(s) if the determining Agent(s) are not found in Arctos Agents.


## Everything below this line needs updating
<hr/>

**Locality**
* “Higher Geog” is the county the specimen was collected from.
* “Spec Locality” if not given, is usually the verbatim locality with town and county.

**Coordinates (event and locality)**
* “Original lat/long Units” is a drop down menu where you will select “decimal degrees”.
* “Max Error” is usually guestimated to be around 10m unless indicated otherwise.
* “Datum” will be “World Geodetic System 1984” down near the bottom.
* “Georeference Source” is a section where you can start typing in “global positioning” and a dropdown menu will automatically pop up. From that select “Global Positioning System (Transcription)”
* “Georeference Protocol” is a dropdown menu where you will select “not recorded”.
* “Dec Lat” is the latitude value in decimal degrees found on the data sheet.
* “Dec Long” is the longitude value in decimal degrees found on the data sheet.
* **Note:** If the verbatim locality is vague, you may need to go digging for lat / long coordinates and district.
* To do this, try your best to find the location given in google maps. It should give you a lat/long if you click on the map.
* To find district, use this website: http://www.michigan.gov/dnr/1,1607,7-153-10371_14793-30743--,00.html
* Type in the lat/long in this section and click [geolocate] in blue, located at the top of this section right next to where you choose your Original lat/long units.
* This will give you a map of the general location of your lat/long units.
* You can move the green dot marker anywhere you want for a more precise location and can also edit your max error here.
* To edit max error, click on the green dot marker and a box will pop up where you can choose “edit uncertainty”

**Parts**

* List all the parts collected from the specimen.
* Again, you can press the Tab key and a small window will pop up with a list to select from. Choose the most appropriate one, ie; h,k,lu,spl (frozen) instead of just h,k,lu,spl
* “Condition” correlates to the circled number on the data sheet for “Tissue Condition”.
* “Disposition” is another drop down menu from which you will always select “in collection” unless indicated otherwise.
* “#” is the number of samples kept of the part. This will almost always be a 1 unless of course indicated otherwise.


# Extras

Occasionally data which has no place in the default screen will be available. This may be handled in two ways.

### Option One: Flags

A flag may be added to the record during entry ...

<img width="320" alt="Screen Shot 2021-07-15 at 6 50 22 AM" src="https://user-images.githubusercontent.com/5720791/125799282-cb6916d8-ee48-4840-8ab3-c3754e1e93ad.png">

... and then, after the record has been loaded, it may be located by searching flags ...

<img width="581" alt="Screen Shot 2021-07-15 at 6 50 59 AM" src="https://user-images.githubusercontent.com/5720791/125799492-1871e7a9-42c0-4d67-a51b-443b198111e5.png">


... and resolving any issues. This approach requires reliable procedures.


### Option Two: Extras

The most common "extras" are available from the bottom of the data entry screen....


These options allow, for example, adding parts with multiple attributes. Simply select the appropriate type ...

<img width="599" alt="Screen Shot 2021-07-15 at 6 48 03 AM" src="https://user-images.githubusercontent.com/5720791/125799814-ee689b91-361f-4da7-8014-4fdff05bc7fd.png">

... provide whatever's requested by the form, and save.

<img width="981" alt="Screen Shot 2021-07-15 at 6 56 37 AM" src="https://user-images.githubusercontent.com/5720791/125800281-d5c768cc-b8c8-4a7f-a974-28ab8b813a75.png">

These data are written to the Component Loader system, which generates a weekly report.


**All finished!**
* Now you will want to click on “Save This As A New Record” in the bottom left hand side of the page in the blue box.
* Your data sheet will then be put into the bulkloader and await approval.
* To approve the records for upload to Arctos see [How to approve records entered with Data Entry form](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-approve-records-entered-with-Data-Entry-form)

## Stuff from old document
* If there is a collector or preparator number, use the “CustomID Type” drop down menu. Scroll all the way to the bottom and select “collector number” or “preparator number.”
* Custom ID” is the specimen’s collector or preparator number, if it has one.

### Data Entry Tutorial Video ###
[![Data Entry Example](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Arctos_Data_Entry_Example.jpg)](https://youtu.be/IOJP1M_Lu_E)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Enter-Data-for-a-Single-Record.markdown" target="_blank">here</a>.
