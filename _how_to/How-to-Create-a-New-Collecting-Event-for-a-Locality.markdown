![](https://github.com/ArctosDB/documentation-wiki/blob/master/tutorial_images/arctoscolorbanner.png)

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

* Verbatim Locality - see guide on [How to Edit Verbatim Locality](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Edit-Verbatim-Locality)

* Verbatim Date - this is a text field that contains the date as recorded by the collector or observer

* Begin Date/Time and End Date/Time - these are fields in [ISO date format](https://en.wikipedia.org/wiki/ISO_8601)

* Collecting Event Remark and Collecting Event Nickname - optional

* Verbatim Coordinates - enter them if you have them, along with the Coordinate Units and the Datum 

More information on the specifics of how to input collecting event data into Arctos can be found in the documentation (e.g., what to do when the verbatim date says “Spring 1996”).
