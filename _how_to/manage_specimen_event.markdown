---
title: Manage Specimen Event
authors: Dusty L. McDonald, Teresa Mayfield-Meyer
---


# Managing specimen_events aka record_events


(copied from documentation, please update and enhance!)



## Edit Record Event Form

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
