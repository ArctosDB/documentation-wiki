---
title: Bulkloader
layout: default_toc
---

# Bulkloader

New specimen records may be created from a single flat (non-relational)
file, a text file in which all (or most) data for a single cataloged
item are in a single row. This file can be created with any convenient
client-side application. The file is then loaded into a similarly
structured table on the server, and a server-side application (the
bulkloader) parses the columns from each row into the relational
structure of the database. The process provides an independent layer of
data checking before new information is incorporated into the database
proper. Original data that are received in electronic format may require
minimal manipulation; you can sometimes merely add the necessary columns
to build a file in the bulk-loading format.

**Bulkloader templates should be created from the Bulkloader Builder in
Arctos. All other means, including this documentation, may produce
non-current data which will be rejected.**

There is no standard method for moving data into table Bulkloader. You
may import data from any file format, type the data into the table,
write your own data entry screen, or use any other method you choose. We
appreciate documentation, even for specialized datasets – [contact us](https://arctosdb.org/join-arctos/contacts-support) 
if you wish to contribute.

You may mix accessions, collections, or anything else in a single load.

The specimen Bulkloader will not alone handle every eventuality that may
ever occur while entering data. (The suite of tools available should.)
Use [flags](#fields) to mark incomplete records for further editing, tie
to other bulkloaders with UUIDs, or talk to your friendly local Arctos
development team BEFORE you make a mess.

Error messages should include more than enough information to allow you
to locate and correct the problem. If that isn’t the case, [contact us](https://arctosdb.org/join-arctos/contacts-support) 
with the error message and a description of
the action that caused the error message.

Arctos is case-sensitive. JOHN DOE is not the same value as John Doe.
Leading and trailing spaces and other non-printing characters matter.

The web-based applications may not work well for very large loads.
[Contact us](https://arctosdb.org/join-arctos/contacts-support) if you’re having problems.

## Agent Names

[Agent](/documentation/agent) Names must match a unique namestring, not
necessarily the preferred name. If you are loading "John Smith" and
there are three John Smiths in Arctos, you might create a new name "John
Smith (my project)" and use that namestring in your data. Once loaded,
the records will display preferred name, and agent name "John Smith (my
project)" may be removed.

## Taxonomy

Special note primarily for botanists: The bulkloader
requires `taxonomy.scientific_name`, not `taxonomy.display_name`. That is,
"Carex bigelowii subsp. lugens" rather than "*Carex bigelowii* Torr.
subsp. *lugens* (Holm) T.V. Egorova".

Any of the following are acceptable taxon name values (current
23 Aug 2011, see [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula) for most current formulas):

-   Formula "A": An exact match to any accepted
    `taxonomy.scientific_name`
    -   Sorex cinereus
    -   Soricidae
-   Formula "A sp.": Any accepted `taxonomy.scientific_name` where
    scientific name is also genus plus " sp."
    -   Sorex sp.
-   Formula "A cf.": Any accepted `taxonomy.scientific_name` plus " cf."
    -   Sorex cf.
-   Formula "A ?": Any accepted `taxonomy.scientific_name` plus " ?"
    -   Sorex ?
-   Formula "A x B": Any two accepted `taxonomy.scientific_name`s
    separated by " x "
    -   Sorex cinereus x Sorex yukonicus
-   Formula "A or B": Any two accepted `taxonomy.scientific_name`s
    separated by " or "
    -   Sorex cinereus or Sorex yukonicus
-   Formula "A and B": Any two accepted `taxonomy.scientific_name`s
    separated by " and "
    -   Sorex cinereus and Sorex yukonicus
-   Formula "A {string}": Any valid `taxonomy.scientific_name`, followed
    by a space, followed by an opening curly bracket, followed by a
    verbatim identification, followed by a closing curly bracket.
    -   Sorex {Sorex new species "my name"}
    -   unidentifiable {granite}

Be sure anything coming from other applications
(especially Microsoft products) has not changed field length, precision,
or other attributes. Watch dates and non-integer numbers (such as
decimal latitude) most closely.

## Fields

The following table describes select individual
fields in the Bulkloader. **Check the Bulkloader Builder for the latest
table structure. Do not attempt to use this as a template.** [Let us
know](http://arctos.database.museum/contact.cfm) if it’s out of date, incomplete, cryptic, or otherwise useless.

| Field Name | Data Type/Vocabulary | Description/Example |
|------------|----------------------|---------------------|
| <span class="blrequired">required</span><br/><span class="blcondreq">conditionally required</span><br/><span class="bloptional">not required</span> | | |
|<span class="bloptional">Collection_Object_Id</span>| any unique number | Temporary record identifier; Does NOT carry over to any internal primary keys.|
| <span class="bloptional">Cat_Num</span> | set by collection | Existing catalog number, or leave blank to assign sequential numbers on upload. |
| <span class="blrequired">Began_Date</span> | ISO8601 date |[\[ doc \]](/documentation/collecting-event#began-date--ended-date) Earliest date the specimen could have been collected. |
| <span class="blrequired">Ended_Date</span> | ISO8601 date | [\[ doc \]](/documentation/collecting-event#began-date--ended-date) Latest date the specimen could have been collected. |
| <span class="blrequired">Verbatim_Date</span> | text; any string | [\[ doc \]](/documentation/collecting-event#verbatim-date) Examples: ‘winter 2002’; ‘1 Nov 2002’; ‘Nov 2002’. |
| <span class="blrequired">VERIFICATIONSTATUS</span> |text; [ctverificationstatus](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctVERIFICATIONSTATUS) | |
| <span class="blrequired">SPECIMEN_EVENT_TYPE</span> | text; [ctspecimen_event_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctSPECIMEN_EVENT_TYPE) | Type of specimen-event relationship |
| <span class="blrequired">Event_Assigned_By_Agent</span> | text; [agent name](#agent-names) | Agent asserting specimen-to-event relationship; often coordinate determiner. |
| <span class="blrequired">Event_Assigned_Date</span> |date|Date on which the specimen-event relationship is made|
|<span class="bloptional">Coll_Event_Remarks</span>|text; any string | Remarks about Collecting Event.|
|<span class="blrequired">Higher_Geog</span>|text; [pre-existing](http://arctos.database.museum/showLocality.cfm)|[\[ doc \]](/documentation/higher-geography) Higher Geography *exactly* as it appears in table Geog_Auth_Rec. New values must be added to the database prior to bulk-loading. |
|<span class="blcondreq">Maximum_Elevation</span>|integer &gt; minimum_elevation|[\[ doc \]](/documentation/locality#elevations) Maximum elevation from which the specimen could have come. Used in conjunction with Minimum_Elevation and Orig_Elev_Units.|
|<span class="blcondreq">Minimum_Elevation</span>|integer &lt; maximum_elevation|[\[ doc \]](/documentation/locality#elevations) Minimum elevation from which the specimen could have come. Used in conjunction with Maximum_Elevation and Orig_Elev_Units.|
|<span class="blcondreq">Orig_Elev_Units</span> | text; [ctorig_elev_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctorig_elev_units) |  Used in conjunction with Maximum_Elevation and Minimum_Elevation. (Code table controlled.)
| <span class="blrequired">Spec_Locality</span> | text; any string | [\[ doc \]](/documentation/locality#specific-locality) Specific locality from which a specimen originates.|
|<span class="bloptional">Locality_Remarks</span> | text; any string | Remarks associated with Locality.
| | — Begin coordinate fields. All coordinate data are optional unless Orig_Lat_Long_Units is specified, and leaving Orig_Lat_Long_Units `NULL` will cause all other coordinate data to be ignored. — | |
|<span class="blrequired">Orig_Lat_Long_Units</span> | text; [ctlat_long_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_units) | [\[ doc \]](/documentation/coordinates#original-units) Lat/Long units as given by the determining agent and before any transformations. |
|<span class="blrequired">Datum</span> | text; [ctdatum](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctdatum) |  [\[ doc \]](/documentation/coordinates#geodetic-datum) Map datum used to determine Lat/Long. Required if coordinates are given.
|<span class="bloptional">GEOREFERENCE_SOURCE</span> | text; any string | [\[ doc \]](/documentation/coordinates#reference-sources) A code indicating the reference from which a Lat/Long was determined.|
|<span class="blrequired">GEOREFERENCE_PROTOCOL</span> | text;[ ctgeorefmethod](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctGEOREFMETHOD) ||
|<span class="blcondreq">Max_Error_Distance</span>|  number | [\[ doc \]](/documentation/coordinates#maximum-uncertainty-distance) The maximum possible error in distance between the recorded Lat_Long and the actual Lat_Long of the specific locality. Required if Max_Error_Units provided.|
|<span class="blcondreq">Max_Error_Units</span> | text; [ctlat_long_error_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLAT_LONG_ERROR_UNITS) | [\[ doc \]](/documentation/coordinates#maximum-uncertainty-distance) The units in which the Max_Error_Distance are recorded. Required if Max_Error_Distance provided. *Geographic coordinates may be entered in decimal degrees<sup>1</sup>, degrees-minutes-seconds<sup>2</sup>, or in degrees with decimal minutes<sup>3</sup>* [\[ doc \]](/documentation/coordinates#original-units). | 
|<span class="blcondreq">Dec_Lat<sup>1</sup></span> | number | Decimal latitude. | 
|<span class="blcondreq">Dec_Long<sup>1</sup></span> | number | Decimal longitude. | 
|<span class="blcondreq">LatDeg<sup>2 and 3</sup></span> | positive number| Degrees Latitude (Integer, 90 or less).|
|<span class="blcondreq">LatMin<sup>2</sup></span> | positive number | Minutes Latitude (Integer, less than 60).|
|<span class="blcondreq">LatSec<sup>2</sup></span> | positive number | Seconds Latitude (Decimal fraction, less than 60).|
|<span class="blcondreq">LatDir<sup>2 and 3</sup></span> | text; N or S | Latitude Direction: "N" or "S" (North or South).|
|<span class="blcondreq">LongDeg<sup>2 and 3</sup></span> | positive number | Degrees Longitude (Integer, 180 or less).|
|<span class="blcondreq">LongMin<sup>2</sup></span> | positive number | Minutes Longitude (Integer, less than 60).|
|<span class="blcondreq">LongSec<sup>2</sup></span> | positive number | Seconds Longitude (Decimal fraction, less than 60).|
|<span class="blcondreq">LongDir<sup>2 and 3</sup></span> | text; W or E | Longitude Direction: "E" or "W" (East or West).|
|<span class="blcondreq">Dec_Lat_Min<sup>3</sup></span> |  positive number | Decimal Latitude Minutes (Used with LatDeg, decimal fraction, less than 60).|
|<span class="blcondreq">Dec_Long_Min<sup>3</sup></span> | positive number| Decimal Longitude Minutes (Used with LongDeg, decimal fraction, less than 60).|
| | — end coordinate fields — |  |
|<span class="blrequired">Verbatim_Locality</span> | text; any string | [\[ doc \]](/documentation/collecting-event#verbatim-locality) The locality, entered as closely as possible to the original text provided by the collector. (Not necessarily the same as [specific locality](locality#specific-locality).)|
|<span class="blrequired">Collecting_Source</span> | text; [ctcollecting_source](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source) | [\[ doc \]](/documentation/specimen-event#collecting-source) Source from which the specimen was received. Example: "wild caught"|
|<span class="bloptional">Habitat</span> | text; any string |[\[ doc \]](/documentation/specimen-event#habitat) A description of habitat at the time of the collecting event.|
|<span class="bloptional">Associated_Species</span> | text; any string | A description of other species occurring at the collecting event. Use relationships to other specimens when possible.|
|<span class="bloptional">Coll_Object_Remarks</span>| text; any string | Remarks about the cataloged item.|
|<span class="blrequired">Id_Made_By_Agent</span>| text; [agent name](#agent-names) | [\[ doc \]](/documentation/identification#determiner) Determiner, or agent who identified the specimen.|
|<span class="bloptional">Identification_Remarks</span> | text; any string | [\[ doc \]](/documentation/identification#remarks) Remarks associated with this identification.|
|<span class="blrequired">Made_Date</span> | ISO8601 date | [\[ doc \]](/documentation/identification#determined-date) Date that the taxonomic determination (or identification) was made.|
|<span class="blrequired">Nature_of_Id</span> | text; [ctnature_of_id](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctnature_of_id) | [\[ doc \]](/documentation/identification#nature-of-id) How identification was determined. (Code-table controlled.)|
|<span class="blrequired">Taxon_Name</span> | text; [taxon name](#taxonomy) | [\[ doc \]](/documentation/identification#determination-formula) Scientific Name assigned by identifying agent.|
|<span class="bloptional">Other_Id_Num_x</span> | text; any string | Other identifying numbers (ie, original field number).|
|<span class="blcondreq">Other_Id_Num_Type_x</span> | text; [ctcoll_other_id_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type)| Used in conjunction with Other_Id_Num. (Code-table controlled.) |
|<span class="blcondreq">Other_Id_References_x</span> | text; [ctid_references](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTID_REFERENCES)| Establish relationships to other specimens. (Code-table controlled.) |
|<span class="blrequired">Collector_Agent_x</span> | text; [agent name](#agent-names) | Collector or preparator name as it appears in Arctos. At least one collector_agent is required. |
|<span class="blrequired">Collector_Role_x</span> | text; [ ctcollector_role ](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLLECTOR_ROLE) | Collector Role.|
|<span class="blrequired">Part_Name_x</span> | text; [ctspecimen_part_name](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_part_name) | [\[ doc \]](/documentation/parts#part-names) At least one part is required.
|<span class="blrequired">Part_lot_count_x</span> | number | [\[ doc \]](/documentation/parts#lot-count) A part_lot_count is required for all non-`null` parts.|
|<span class="blrequired">Part_Condition_x</span> | text; any string | [\[ doc \]](/documentation/parts#condition) A description of the latest documented condition.|
|<span class="blrequired">Part_disposition_x</span> | text; [ctcoll_obj_disp](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_OBJ_DISP) | [\[ doc \]](/documentation/parts#disposition) A Part_disposition is required for all non-`null` parts. Example: "in collection"|
|<span class="bloptional">Part_Barcode_x</span> | text; any barcode | [\[ doc \]](/documentation/container#barcode) Barcode on the part as it will be read by a barcode scanner.|
|<span class="bloptional">Part_Container_Label_x</span> | text; any string | [\[ doc \]](/documentation/container#label) Label on the container (e.g., Nunc tube). The human-readable printing on the container. `NULL` results in no changes to the part container; ignored if Part_Barcode_x is `null`.|
|<span class="bloptional">Part_Remark_x</span> | text; any string | Remark about the part.|
|<span class="blrequired">Accn</span> | text; accn number| [\[ doc \]](/documentation/accession#accession-number) Accession Number assigned upon acceptance of specimens. Format is accn number without collection information, but see [cross-collection considerations.](/documentation/accession#data-entry-considerations)|
|<span class="blcondreq">EnteredBy</span> | text; [agent name](#agent-names)| [\[ doc \]](/documentation/agent#names) Agent entering the data into this table. Must match agent_name of type login. `NULL`able if entered_by_agent_id provided.|
|ENTERED_AGENT_ID | number; [key](#primary-key-warning) | EnterdBy’s agent_id. Increased performance over EnteredBy. |
|<span class="blcondreq">GUID_Prefix</span>| text; controlled | [\[ doc \]](/documentation/catalog#guid-prefix) Unique-within-Arctos identifier of the collection under which the specimen will be cataloged. Replaces Institution_Acronym + Collection_Cde.|
|<span class="blcondreq">collection_id</span> | number; [key](#primary-key-warning) | Primary key of table Collection. Alternative to GUID_prefix.
|<span class="bloptional">Loaded</span>| text; any string | This is where errors are stored after Bulkloader processing. [More Info](/how_to/How-to-Bulkload-Specimen-Data)|
|<span class="bloptional">Flags</span> | text; [ctflags](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctflags) | Flag indicating the specimen needs further work.|
|<span class="bloptional">Attribute</span> | text; [ctattribute_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type) | [\[ doc \]](/documentation/attributes#attribute-name) Attribute name. (Code-table controlled.)|
|<span class="bloptional">Attribute_value</span> | text; various | [\[ doc \]](/documentation/attributes#attribute-value) Value of the attribute. Leaving this `NULL` will cause the bulkloader to ignore the attribute entry regardless of other values.|
|<span class="bloptional">Attribute_units</span>| text; [L](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlength_units),[W](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctweight_units), etc. | [\[ doc \]](/documentation/attributes#attribute-units) Units on attribute_value, where appropriate.|
|<span class="bloptional">attribute_remarks</span>| text; any string | [\[ doc \]](/documentation/attributes#remark) Remarks about the attribute.|
|<span class="bloptional">attribute_date</span>| ISO8601 date | [\[ doc \]](/documentation/attributes#determined-date) Date the attribute was determined.|
|<span class="bloptional">attribute_det_meth</span>| text; any string| [\[ doc \]](/documentation/attributes#method) How the attribute was determined.|
|<span class="bloptional">attribute_determiner</span>| text; [agent name](#agent-names)| [\[ doc \]](/documentation/attributes#determiner) Agent who determined the attribute.|
|<span class="bloptional">locality_id</span>|  number; [key](#primary-key-warning) | A primary key from table locality may be used in place of locality information. A value here will over-ride anything entered into higher_geog, spec_locality, coordinates, etc.|
|<span class="bloptional">locality_name</span>|  string; locality.locality_name | A persistent locality identifier which may be used in place of locality information. A value here will over-ride anything entered into higher_geog, spec_locality, coordinates, geology, etc.|

|<span class="bloptional">collecting_event_id</span> | number; [key](#primary-key-warning) | A primary key from table collecting_event may be used in place of collecting_event information. A value here will over-ride anything entered into higher_geog, spec_locality, coordinates, dates, method, etc. \* All date fields should be formatted as ISO 8601, *e.g.*, 2006-12-31.

## Primary Key Warning

Some values may be replaced by or require primary keys: `locality_id`,
`entered_by_agent_id`, `collecting_event_id`, etc. These are internal
database identifiers that exist only for convenience, and may be
updated, transferred to another data object, or removed for seemingly
arbitrary reasons and without warning. They’ll probably work over short
time-periods, but we offer no guarantees.
