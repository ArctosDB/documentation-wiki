---
title: Specimen Event
layout: default_toc
---

# Specimen Event


Specimen Events link [Specimens]({{site.baseurl}}/documentation/catalog.html) to [Collecting
Events]({{site.baseurl}}/documentation/collecting-event.html).



## Event Determiner

Agent asserting that the specimen
has [Event Type](#type) relationship to a collecting event (including locality, geography, geology, etc.). This person
has determined coordinates and error, dates, higher
geography, and everything else in the "[place and time
stack](/documentation/collecting-event/)."


## Event Date

 is the date on which the specimen was assigned to the place/time.


## Event Type

 See
[CTSPECIMEN_EVENT_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTSPECIMEN_EVENT_TYPE)

## Verification Status

 See
[CTVERIFICATIONSTATUS](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTVERIFICATIONSTATUS)

## Verified By

Person who set Verification Status


## Verified Date

Date on which Verification Status was set


## Collecting Method

 is free-text describing how the specimen and the
event are related. Examples:

-   gill net
-   hand seine
-   Otter Trawl
-   salvage, roadkill, DOR


## Collecting Source

Collecting Source is a broad categorization of how the specimen came to be at the associated event. 
 See
[CTCOLLECTING_SOURCE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLLECTING_SOURCE) for values.




## Habitat

 is free-text describing the habitat at the place and time of
the specimen event. Examples:

-   limestone outcrops and ledges with dwarf shrub, sedge herbaceous
    tundra, scattered
-   under spruce bark
-   steep west-facing slopes

## Remarks

Use only for data which pertains to the relationship between the specimen and the event and which is not appropriate
for any more-specific fields.

# Edit Form

There are two ways to edit specimen-events and associated place/time data.

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
Fixing a type in a remarks field, verifying an event, making minor georeference adjsutments, etc. can safely use this approach. When
this option is used, the specimen-event is moved out of the "old" event and locality; it becomes detached from any history those objects
may have had, and if other specimens are not using the event/locality they will be purged by the cleanup scripts.

* add ("unaccept current specimen_event; add Event with these data") creates a new specimen event, and preserves the old. This maintains
the history of the specimen being attached to now-unaccepted events, and the edit history of those events and the localities to
which they are attached; it is a purely additive action. This option should be used for major or fundamental changes to the locality.

In both cases "save" clones the entire event/locality/geology stack; edits apply only to the single specimen-event being used by the single specimen.
It is not possible to alter data used by any other specimen from this form.
