---
title: Record Event
authors: Dusty L. McDonald, Teresa J. Mayfield-Meyer
date_updated: 2024-06-06
---

Record Events link [Events]({{site.baseurl}}/documentation/collecting-event.html) to [Records]({{site.baseurl}}/documentation/catalog.html). These are also known as specimen-events.

## Table specimen_event

### specimen_event_id 

Primary key. When exposed publicly as specimenEventID it is formatted as ``https://arctos.database.museum/guid/UAM:Herp:12?seid=673238``.

### collection_object_id

Non-NULL foreign key to catalog_record.

### collecting_event_id

Non-NULL foreign key to collecting_event

### assigned_by_agent_id

[Agent]({{site.baseurl}}/documentation/agent.html) asserting that the [Record]({{site.baseurl}}/documentation/catalog.html) has [Event Type](#type) relationship to an event (including locality, geography, geology, etc.).

{% include caution.html content="This person has determined coordinates and error, dates, higher geography, and everything else in the place and time stack" %}

### assigned_date

The date (datatype ``timestamp``) on which the [Event]({{site.baseurl}}/documentation/collecting-event.html) was assigned to the [Record]({{site.baseurl}}/documentation/catalog.html).

### specimen_event_type

The action during the [Event]({{site.baseurl}}/documentation/collecting-event.html) that affected the [Record]({{site.baseurl}}/documentation/catalog.html).

Select from values in [Object Event: Types](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTSPECIMEN_EVENT_TYPE).

### verificationstatus

The opinion of the verifier of the veracity and completeness of the coordinates included in the [Event]({{site.baseurl}}/documentation/collecting-event.html).

Select from values in [Object Event: Verification Status Values](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTVERIFICATIONSTATUS)

### verified_by_agent_id

[Agent]({{site.baseurl}}/documentation/agent.html) asserting the Verification Status.

### verified_date

Date (datatype ``ISO8601``) on which Verification Status was asserted.

### collecting_method

Describe methods employed at the event as they relate specifically to the record. Examples:

 - gill net
 - hand seine
 - Otter Trawl
 - salvage, roadkill, DOR

{% include tip.html content="Method may be better placed in the [event method](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_event_attr_type#event_method) event attribute if the method corresponds to all records that may have participated in the event." %}

### collecting_source

A broad categorization of how the record came to be at the event.

Select from [Event: Source Values](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source).

### habitat

Describe the habitat at the place and time of the event as it relates specifically to the record. Examples:

-   limestone outcrops and ledges with dwarf shrub, sedge herbaceous
    tundra, scattered
-   under spruce bark
-   steep west-facing slopes

### specimen_event_remark

Use only for data which pertains to the relationship between the record and the event and which is not appropriate for any more-specific fields.

