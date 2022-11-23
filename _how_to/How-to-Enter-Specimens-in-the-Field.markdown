---
title: How To Enter Specimens in the Field
layout: default_toc
---

**This guide will walk you through the procedure of setting up a spreadsheet to enter specimens while in the field.**
**Be sure you are familiar with Arctos and how to enter specimens BEFORE attempting to do this in the field.**

Before going into the field, you need to prepare a **bulkload** spreadsheet for bulkloading specimens. Fill in all the information you need other than what is collected in the field. This will save on time.

The following is what should be filled out before going into the field. (in order of top to bottom, not left to right).

* **COLLECTION_OBJECT_ID** 1 up to the maximum you expect to collect.
* **DATUM** World Geodetic System 1984
* **ENTEREDBY** “your name”
* **GEOREFERENCE_SOURCE** global positioning system (transcription)
* **OTHER_ID_NUM_TYPE_5** A gps id if you have one
* **MAX_ERROR_DISTANCE** Usually ~10 m, here just put 10
* **ACCN** The accession number it will be in.
* **MAX_ERROR_UNITS** m
* **NATURE_OF_ID** field
* **GEOREFERENCE_PROTOCOL** not recorded
* **ID_MADE_BY_AGENT** agent's name of primary expert on trip
* **EVENT_ASSIGNED_BY_AGENT** agent's name of primary expert on trip
* **MADE_DATE** Date of trip.
* **EVENT_ASSIGNED_DATE** Date of trip.
* **VERBATIM_DATE** Date of trip.
* **VERIFICATIONSTATUS** Unverified
* **BEGAN_DATE** Date of trip.
* **COLLECTOR_AGENT_1** agent's name of primary expert on trip
* **ENDED_DATE** Date the specimen was prepped.
* **COLLECTOR_ROLE_1** collector
* **HIGHER_GEOG** Location of trapping.
* **GUID_PREFIX** Museum followed by collection, e.g., NMU:Mamm
* **LATDEG** N (Assuming you know the location.)
* **PART_NAME_1, PART_NAME_2, etc…** List the usual parts taken, (h, k, lu, spl; liver; skeleteon) Change if needed.
* **LONGDEG** W  (Assuming you known the location.)
* **PART_CONDITION_1, etc…** Almost always will be “good”. Change if needed.
* **PART_LOT_COUNT_1, etc…** 1
* **ATTRIBUTE_DETERMINER _1, etc…** agent's name of primary expert on trip
* **PART_DISPOSITION_1, etc…** In collection
* **ATTRIBUTE_UNITS_1, etc…** Use units that go with that attribute
* **ATTRIBUTE_1, etc…** List the usual: sex, weight, total length, etc…
* **SPECIMEN_EVENT_TYPE** accepted place of collection
* **ATTRIBUTE_DATE_1, etc…** Date of prep
* **OTHER_ID_REFERENCES_1** self

**Excel trick:** You can quickly fill in multiple cells with the same info without highlighting and dragging multiple times. Only highlight and drag once and then the rest of the cells can be automatically filled in by double clicking the small square at the bottom right hand side of the cell. Be careful with numbers: If you want all 1’s you might end up with 1, 2, 3… To fix this, fill in two cells with 1 then highlight both of them and double click the box in the bottom right hand corner.

**Save often to avoid losing progress.**

**Double check the data before entering it into Arctos.**

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Enter-Specimens-in-the-Field.markdown" target="_blank">here</a>.
