---
title: Record Event
author: Dusty L. McDonald, Teresa J. Mayfield-Meyer
date: 2024-06-06
layout: default_toc
---

# Record Event

Record Events link [Events]({{site.baseurl}}/documentation/collecting-event.html) to [Records]({{site.baseurl}}/documentation/catalog.html).

## Event Determiner

[Agent]({{site.baseurl}}/documentation/agent.html) asserting that the [Record]({{site.baseurl}}/documentation/catalog.html) has [Event Type](#type) relationship to an event (including locality, geography, geology, etc.).

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

This person has determined coordinates and error, dates, higher geography, and everything else in the "[place and time stack]({{site.baseurl}}how_to/How-to-understand-the-Arctos-Locality-Model.html)."

## Event Date

The date on which the [Event]({{site.baseurl}}/documentation/collecting-event.html) was assigned to the [Record]({{site.baseurl}}/documentation/catalog.html).

## Event Type

The action during the [Event]({{site.baseurl}}/documentation/collecting-event.html) that affected the [Record]({{site.baseurl}}/documentation/catalog.html).

Select from values in [Object Event: Types](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTSPECIMEN_EVENT_TYPE).

## Verification Status

The opinion of the verifier of the veracity and completeness of the coordinates included in the [Event]({{site.baseurl}}/documentation/collecting-event.html).

Select from values in [Object Event: Verification Status Values](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTVERIFICATIONSTATUS)

## Verified By

[Agent]({{site.baseurl}}/documentation/agent.html) who selected the Verification Status.

## Verified Date

Date on which Verification Status was set.

## Collecting Method

Describe methods employed at the event as they relate specifically to the record. Examples:

 - gill net
 - hand seine
 - Otter Trawl
 - salvage, roadkill, DOR

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Method may be better placed in the [event method](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_event_attr_type#event_method) event attribute if the method corresponds to all records that may have participated in the event.

## Collecting Source

A broad categorization of how the record came to be at the event.

Select from [Event: Source Values](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source).

## Habitat

Describe the habitat at the place and time of the event as it relates specifically to the record. Examples:

-   limestone outcrops and ledges with dwarf shrub, sedge herbaceous
    tundra, scattered
-   under spruce bark
-   steep west-facing slopes

## Remarks

Use only for data which pertains to the relationship between the record and the event and which is not appropriate for any more-specific fields.

# Edit Record Event Form

There are two ways to edit record events and associated place/time data.

1.  old/normal way
	* normalized, makes managing data for shared localities easy
	* normalized, makes accidentally editing unrelated specimens easy
	* requires scary access to shared data
	* requires an in-depth understanding of the Arctos Locality Model to safely use

2. Fork-Edit method
	* denormalized - every save creates a new locality and event
	    * but who cares, the cleanup scripts will renormalize the data by consolidating duplicates and purging orphans
	* requires only manage_specimens access; always creates new localities which can't possibly be shared,
	so the back-end can safely run with elevated rights to create localities, collecting events, and geology determinations
	* provides a one-click path to keeping full history as unaccepted specimen-events
		* adding rather than editing is an option on every save
		    * AWG: should *not* achiving be an option at all?
	* One-click georeferencing with GeoLocate
	* GUI georeference editing with GeoLocate
	* Provides service-derived coordinates and elevation; use them with one click


## Fork-Edit method

This creates a new locality and event with every save. There are two save modes:

* edit ("Edit the current specimen_event") should be used when changes have not affected the fundamental nature of the space-time data.
Fixing a typo in a remarks field, verifying an event, making minor georeference adjustments, etc. can safely use this approach. When
this option is used, the specimen-event is moved out of the "old" event and locality; it becomes detached from any history those objects
may have had, and if other specimens are not using the event/locality they will be purged by the cleanup scripts.

* add ("unaccept current specimen_event; add Event with these data") creates a new specimen event, and preserves the old. This maintains
the history of the specimen being attached to now-unaccepted events, and the edit history of those events and the localities to
which they are attached; it is a purely additive action. This option should be used for major or fundamental changes to the locality.

In both cases "save" clones the entire event/locality/geology stack; edits apply only to the single specimen-event being used by the single specimen.
It is not possible to alter data used by any other specimen from this form.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/specimen-event.markdown" target="_blank">here</a>.
