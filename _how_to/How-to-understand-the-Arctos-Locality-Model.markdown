---
title: How To Understand the Arctos Locality Model
layout: default_toc
---
[Locality Documentation](https://handbook.arctosdb.org/documentation/locality.html)

[Collecting Event Documentation](https://handbook.arctosdb.org/documentation/collecting-event.html)

# Understanding the Arctos Locality Model


The core Arctos locality model consists of 4 primary tables plus an edit archive. This guide and the following illustration describe their primary function and interaction.

![Arctos Locality Stack Diagram](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/master/tutorial_images/Arctos_locality_stack.png)

## Specimen_Event

Specimen-Event is the link from specimens to localities. Specimen-Event is not shared; a unique instance exists for and establishes every specimen<--->locality link, so a specimen with multiple encounters or unaccepted coordinates will have multiple specimen-events.

* SPECIMEN_EVENT_ID is the primary key
*  COLLECTION_OBJECT_ID is the foreign key to specimens
*  COLLECTING_EVENT_ID is the foreign key to localities
*  ASSIGNED_BY_AGENT_ID is the foreign key to agents, and represents the user who is responsible for the entirety of the specimen-->locality data link
*  ASSIGNED_DATE is the DATE (not ISO8601) on which the specimen-->locality link was created
*  SPECIMEN_EVENT_REMARK is any remark regarding the specimen-event link
*  SPECIMEN_EVENT_TYPE is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTSPECIMEN_EVENT_TYPE)
*  COLLECTING_METHOD describes how a specimen was collected
*  COLLECTING_SOURCE is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLLECTING_SOURCE)
*  VERIFICATIONSTATUS is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTVERIFICATIONSTATUS)
*  HABITAT is a description of the specimen's habitat

## Collecting_Event

Collecting Event adds verbatim data plus dates. Collecting events are shared; one collecting_event may be parent to any number of specimen_events. In the case of co-collected specimens (_e.g._, hosts and parasites) maintaining one collecting event for multiple specimen-events is doubly critical.

* COLLECTING_EVENT_ID is the primary key
* LOCALITY_ID is a foreign key to Locality
* VERBATIM_DATE is the date as provided by the collector, and may include values such as "before 1942" or "2/3/86."
* VERBATIM_LOCALITY is the descriptive locality data as provided by the collector
* COLL_EVENT_REMARKS is any remarks concerning the collecting event. This field is a denormalizer; use with caution.
* BEGAN_DATE is an ISO8601 date field describing the start of the event
* ENDED_DATE is an ISO8601 date field describing the end of the event
* VERBATIM_COORDINATES are the coordinates as provided by the collector. Data entry is partitioned into coordinate components
* DATUM is the horizontal datum in which the original coordinates were provided, and is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTDATUM)
* COLLECTING_EVENT_NAME is a "human-readable primary key" allowing the unambiguous sharing of events among specimens, and adding stability to the event

## Locality

Locality adds formality and vertical spatial data to collecting events. Localities are shared; one locality may be parent to any number of collecting_events.

* LOCALITY_ID is the primary key
* GEOG_AUTH_REC_ID is the foreign key to geography
* SPEC_LOCALITY is a standardization of verbatim_locality, intended to decrease entropy and provide data which can be understood by services such as GeoLocate. For example, verbatim locality "5 m n hwy 15 brg" might be "interpreted" to specific locality "5 miles north of Highway 15 bridge."
* DEC_LAT decimal latitude calculated from verbatim_coordinates
* DEC_LONG decimal longitude calculated from verbatim_coordinates
* MINIMUM_ELEVATION is maximum possible elevation of the collecting event
* MAXIMUM_ELEVATION is minimum possible elevation of the collecting event
* ORIG_ELEV_UNITS is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTORIG_ELEV_UNITS)
* MIN_DEPTH is minimum possible depth of the collecting event
* MAX_DEPTH is maximum possible depth of the collecting event
* DEPTH_UNITS is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTDEPTH_UNITS)
* MAX_ERROR_DISTANCE is the radius of the total spatial uncertainty of the event
* MAX_ERROR_UNITS is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLAT_LONG_ERROR_UNITS)
* DATUM is repeated from collecting_event.DATUM; we will eventually convert everything to a standard format
* LOCALITY_REMARKS is any remarks regarding the locality. This field is a denormalizer; use with caution.
* GEOREFERENCE_SOURCE is the source of the spatial information. This field is a denormalizer; use with caution.
* GEOREFERENCE_PROTOCOL is documented in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOREFERENCE_PROTOCOL)
* LOCALITY_NAME is a "human-readable primary key" allowing the unambiguous sharing of localities among specimens, and adding stability to the locality
* WKT_POLYGON is the [well-known text](https://en.wikipedia.org/wiki/Well-known_text) polygon of the locality

## Locality_Archive

* Locality plus when and who, automatically maintained by an INSERT or UPDATE trigger.

## Geography

Geography adds formalized descriptive data to locality. Geography is shared; one geography may be parent to any number of localities.

* GEOG_AUTH_REC_ID is the primary key
* HIGHER_GEOG is the "display value" derived from components (such as state_prov) which have been excluded from this document. HIGHER_GEOG is a unique value; there can be only one "United States, Alaska."
* SOURCE_AUTHORITY is the evidence supporting the existence of or clarifying a geography entry, generally a Wikipedia article.
* GEOG_REMARK is any remark regarding the geography
* STPATIAL_FOOTPRINT is the ``postgis:geography``-datatype polygon of the geography. The source of this is genearlly given in remarks. 

## Not Included

In addition to the primary tables listed above, [geology_attributes](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE) adds any number of hierarchical geology determinations to localities, table GEOG_SEARCH_TERM adds discovery data (such as old or local placenames, or placenamess in local charactersets) to geography, and several service-populate fields in Locality add automated georeference and reverse-georeference data which aids in discoverability and provides editing suggestions.

## The Locality Stack

"A specimen's locality" or can be viewed as everything from one record in collecting_event, locality (potentially including geology), and geog_auth_rec, while specimen_event is the glue which attaches "the locality" to specimens. Note that all Arctos keys are bit-wise, and very minor differences in the data (error distance or units, punctuation in remarks, etc.) can force into existence new and (slightly) different data objects. (Arctos provides "fuzzy" merger tools.) In addition to inconsequential differences, localities (which are simultaneously descriptive and/or spatial) often differ from similar localities by specific locality, coordinate point, coordinate error distance, elevation, depth, or the choice of higher geography. That is, there is not necessarily one correct interpretation of "Fairbanks, Alaska." Collecting events often differ by the format of verbatim date or locality. Finally, the choice of higher geography is often somewhat arbitrary. All of these factors must be considered when attempting to ensure that a specimen shares a locality stack with other specimens. Collecting_event_id and collecting_event_name serve as proxies to the locality stack and may be used in the bulkloader or data entry screens to select existing "places."

## Hierarchy

The core data model is hierarchical; an example as a hierarchical "tree" is given below.

* North America, United States, Alaska (geography)
  * Fairbanks (locality 1)
    * 2016-06-06 (collecting_event 1-1)
      * black spruce (specimen_event 1-1-1)
        * ABC:XYZ:1 (specimen)
      * white spruce (specimen_event 1-1-2)
        * ABC:XYZ:2 (specimen)
    * 2016-06-07 (collecting_event 1-2)
      * black spruce (specimen_event 1-2-1)
        * ABC:XYZ:3 (specimen)
      * white spruce (specimen_event 1-2-2)
        * ABC:XYZ:3 (specimen)
  * Bonanza Creek (locality 2)
    * 2016-06-06 (collecting_event 2-1)
      * ...
    * 2016-06-07 (collecting_event 2-2)
      * ...

All of the above is from one geography: North America, United States, Alaska.

There are two localities given; we will focus only on Locality 1, which contains two collecting events differing only by date. Collecting Event 1-1 contains two specimen-events and, like all other specimen-events, each contains exactly one specimen. Collecting Event 1-2 also contains two collecting events, but in this case they contain the same specimen - perhaps a tagged individual which moved and was re-encountered on the same day.

Note that the specimen<-->specimen_event relationship is always 1:1; all other relationships in this model are 1:∞. One geography may contain two (or zero or two million) localities, one locality may contain two (or zero or two million) events, and one event may contain two (or zero or two million) specimen-events.

(Note also that the possibility of 1:0 relationships is in the context of specimens; "unused" data objects may exist in support of other nodes, such as Media.)

## History

### Origins

"The Old Model" consisted of two tables in a one:many relationship. "Locality" contained textual data, and "coordinates" contained spatial data. Zero or one coordinate determinations could be "accepted" for any locality. In this model, the "locality" data are structurally primary data and coordinates are structurally data about the locality, or metadata. Coordinates contained metadata (agent, method, date, reference, etc.) allowing precise tracking of their origin. There was no capacity to treat coordinates (eg, those downloaded from a GPS) as primary data. There was no history of the locality component; it was possible to edit a locality after it had been used to determine coordinates, which often lead to a partial and confusing "history" from the perspective of specimens. It was exceedingly difficult to find duplicates and "almost duplicates" (e.g., those records that differ by a few unimportant characters in the many free-text metadata fields). Localities are "facts" in this model and coordinates are "determinations." There was no additional "determination node" between localities and specimens.


### New Model

"The New Model" consists of a single table in which coordinates and string-data (such as specific locality) are treated as parts of the same place or data object. The entire object is a "fact" - there are no determiners involved. The determination is inserted between the specimen and the entire locality stack; the determiner is asserting the the locality as a whole applies to the specimen. Bare coordinates, bare specific locality, specific locality determined from coordinates, and coordinates determined from specific locality are all possible. The model is much more normalized, although multiple denormalizers (locality remarks, datum, various distance units) remain. A specimen may have any number of localities, each containing a determiner and date, verificationstatus, and specimen-event type. Changes (INSERT and UPDATE) are logged, and these may be used to discover the agents who georeferenced, reverse-georeferenced, changed geography, make corrections (or introduced errors), etc. A full history of locality data may be maintained from the perspective of specimens by "verifying" erroneous data as unaccepted and adding a new locality stack with a not-unaccepted VerificationStatus.


## Geography Model

### "Old Geography" 


The former geography model was generally an attempt to "fill in the blanks," which resulted in many - often dozens - of ways of saying, or almost saying, the same thing. This model was primary descriptive, with most shapes not having spatial data available. [https://github.com/ArctosDB/arctos/issues/4836](https://github.com/ArctosDB/arctos/issues/4836) is one discussion regarding this problem. Additionally there were no clear guidelines on what does or does not constitute geography, often involving very large ("Patagonia") or very small (one of the smaller Florida Keys).

### New geography 


Several months of intense discussion lead to [The Plan](https://github.com/ArctosDB/arctos/issues/5138), which is summarized in [Geography Documentation](https://handbook.arctosdb.org/documentation/higher-geography.html). Some common questions will be addressed below.

#### What's going on with higher geography? Seems all my data have lost their continent.

Correct, no currently assertable source of geography contains continents.

#### How can I find a former Feature?

Consult [https://github.com/ArctosDB/arctos/issues/5207](https://github.com/ArctosDB/arctos/issues/5207), then search Feature:

<img width="761" alt="Screenshot 2022-11-08 at 6 45 21 AM" src="https://user-images.githubusercontent.com/5720791/200595145-ab792a6f-c210-46e9-b004-dad738e6cbce.png">

#### How can I get a former feature in CSV or labels?

Use function ```concatLocalityAttributeValue (lid int,attrtype varchar)``` (enabled in search results as locality_feature) or file a [Report Template Request](https://github.com/ArctosDB/arctos/issues/new?assignees=lkvoong&labels=function-Reports&template=report-template-request.md&title=New+Arctos+Report+Template+Request) for help.

#### How do I enter data with a feature?

Use the finder to locate locality attributes...

<img width="324" alt="Screenshot 2022-11-08 at 7 11 39 AM" src="https://user-images.githubusercontent.com/5720791/200601808-07772028-e654-48c4-bf3d-8aef4971ab03.png">

turn at least one row on, choose Feature, and begin typing to get values.

<img width="509" alt="Screenshot 2022-11-08 at 7 14 07 AM" src="https://user-images.githubusercontent.com/5720791/200602329-7d2e27e4-97f7-44e4-93e0-941654181b71.png">


#### Where is previous geography?

[https://github.com/ArctosDB/arctos/issues/5144](https://github.com/ArctosDB/arctos/issues/5144) encompasses significant changes. (Predictable operations, like removing continent from an entire country, are not captured here.)

#### Now specific locality is redundant!


See [Locality Documentation](https://handbook.arctosdb.org/documentation/locality) and [https://github.com/ArctosDB/arctos/issues/5132](https://github.com/ArctosDB/arctos/issues/5132) - some geography was moved to specific locaity per The Plan, and not following the "Do not include higher geography ... in the Specific Locality" directive results in redundancy. File an Issue; we can help clean up.

#### Associated Names is still crazy!

The new approach to Geography means that I can use Arctos alone to get "should be" placenames. This operation is very resource limited, but is progressing. [https://arctos.database.museum/guid/BYU:Herp:41840](https://arctos.database.museum/guid/BYU:Herp:41840) which asserts ``United States, California`` gets Associated Names of ``North America, United States, California, Mariposa County, Yosemite National Park``, for example.


#### How do Fun Flexible Feature (FFF) work?

[https://arctos.database.museum/place.cfm?action=detail&geog_auth_rec_id=10016796](https://arctos.database.museum/place.cfm?action=detail&geog_auth_rec_id=10016796) is a FFF.


<img width="353" alt="Screenshot 2022-11-07 at 2 04 13 PM" src="https://user-images.githubusercontent.com/5720791/200425146-a3e6849e-42d4-4507-a84a-b82d69d4d306.png"> finds stuff from Yosmite (or it would if Arctos had sufficient resources) no matter what's asserted.


<img width="646" alt="Screenshot 2022-11-07 at 2 05 48 PM" src="https://user-images.githubusercontent.com/5720791/200425494-4279ccf3-e0e8-436e-a0ee-3df9cf4fb59a.png">

is the same spatial query plus a search term (also derived from the spatial query) that shouldn't time out and finds about the same thing. Note that the search by spatial intersection is also the operation which generates Associated Names. Associated Names will eventually be *almost* interchangeable with spatial shape search, but as above is resource limited.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-understand-the-Arctos-Locality-Model.markdown" target="_blank">here</a>.

