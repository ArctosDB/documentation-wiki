---
title: How To Create a New Collecting Event for a Locality
layout: default_toc
---

[Locality Documentation](https://handbook.arctosdb.org/documentation/locality.html)
[Collecting Event Documentation](https://handbook.arctosdb.org/documentation/collecting-event.html)

# How To Create a New Collecting Event for a Locality

If you need to create a new collecting event associated with an already existing locality, or if you want to edit a locality for only some of the specimens currently sharing it, follow these steps.

* In Arctos go to the tab Manage Data > Location > Find Locality (or otherwise navigate to the edit locality form)

* Type in your locality ID or search terms into the appropriate fields and you should get a results page that has columns for "Geog", "Locality", and "Map".

* Click on "Edit [locality ID #]", which will bring you to the edit page. Scroll to the bottom of the page and you should see an option to "Add Collecting Event" as well as an option to "Find all Collecting Events" that are associated with that locality.

* If you select "Add Collecting Event" then Arctos will automatically create a new collecting event where you can enter in all of the information for that event.

* Alternatively, if you select "Find all Collecting Events" then you will be directed to a window that has columns for "Geog", "Locality", "LocalityMap", "Verbatim Locality", "Began Date", "End Date", and "Verb. Date". The "Verbatim Locality" column has the collecting event ID. Click on the ID for the event that most closely matches the event that you want to create. At the bottom of the page you'll see options for "Clone Event and Locality" or "Clone Event (new event under this locality)".

* In the first option ("Clone Event and Locality") you will be creating both a new event and a new locality that you can edit (e.g., change specific locality, coordinates, verbatim locality, dates, etc.). Neither the event nor the locality are attached to any record at this stage. You will need to do that after you have finished editing the collecting event and locality. Once you have attached the new event to a record (specimen, observation, media), it will automatically attach the new paired locality to that same record.

* In the second option ("Clone Event") you will be creating a new event under the same locality. In this case, you can edit the relevant event data (e.g., verbatim locality, dates) but you still need to attach that event to a record. Once you have attached the new event to a record (specimen, observation, media), it will automatically attach the associated locality to that same record.

* Note that a new collecting event ID will be created each time you create a new collecting event. You may need to record that ID in a spreadsheet if you are bulkloading data.

**What to Enter for Each Collecting Event**

* Verbatim Locality - see guide on [How to Edit Verbatim Locality](https://handbook.arctosdb.org/how_to/How-to-Edit-a-Specific-Locality.html)

* Verbatim Date - this is a text field that contains the date as recorded by the collector or observer

* Begin Date/Time and End Date/Time - these are fields in [ISO date format](https://en.wikipedia.org/wiki/ISO_8601)

* Collecting Event Remark and Collecting Event Nickname - optional

* Verbatim Coordinates - enter them if you have them, along with the Coordinate Units and the Datum

More information on the specifics of how to input collecting event data into Arctos can be found in the documentation (e.g., what to do when the verbatim date says “Spring 1996”).

### How to Safely Edit Collecting Event Tutorial Video ###

[![How to Safely Edit Collecting Event](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Edit_a_Collecting_Event_without_Changing_Shared_Data.jpg)](https://youtu.be/Gt4WamxFTkM)

# Fork-Edit method
This creates a new locality and event with every save. There are two save modes:

* edit (“Edit the current specimen_event”) should be used when changes have not affected the fundamental nature of the space-time data. Fixing a typo in a remarks field, verifying an event, making minor georeference adjustments, etc. can safely use this approach. When this option is used, the specimen-event is moved out of the “old” event and locality; it becomes detached from any history those objects may have had, and if other specimens are not using the event/locality they will be purged by the cleanup scripts.

* add (“unaccept current specimen_event; add Event with these data”) creates a new specimen event, and preserves the old. This maintains the history of the specimen being attached to now-unaccepted events, and the edit history of those events and the localities to which they are attached; it is a purely additive action. This option should be used for major or fundamental changes to the locality.

In both cases “save” clones the entire event/locality/geology stack; edits apply only to the single specimen-event being used by the single specimen. It is not possible to alter data used by any other specimen from this form.

### How to Fork-Edit Tutorial Video ###

[![How to Fork-Edit](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_use_the_Arctos_Fork_Edit_Tool_thumb.jpg)](https://youtu.be/XScI6HpIB5E)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Create-a-New-Collecting-Event-for-a-Locality.markdown" target="_blank">here</a>.

