---
title: Bulkloader
layout: default_toc
---

# Bulkloader

<div class="anchors">

[Agents](#agent)\
[Taxon Names](#taxa)\
[Loading Data](#loading)\
[Field Descriptions](#fields)\
[Key warning](#pkey)

</div>

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
appreciate documentation, even for specialized datasets – [contact
us](/governance/contacts/) if you wish to contribute.

You may mix accessions, collections, or anything else in a single load.

The specimen Bulkloader will not alone handle every eventuality that may
ever occur while entering data. (The suite of tools available should.)
Use [flags](#flags) to mark incomplete records for further editing, tie
to other bulkloaders with UUIDs, or talk to your friendly local Arctos
development team BEFORE you make a mess.

Error messages should include more than enough information to allow you
to locate and correct the problem. If that isn’t the case, [contact
us](/governance/contacts/) with the error message and a description of
the action that caused the error message.

Arctos is case-sensitive. JOHN DOE is not the same value as John Doe.
Leading and trailing spaces and other non-printing characters matter.

The web-based applications may not work well for very large loads.
[Contact us](/governance/contacts/) if you’re having problems.

[](#top){.infoLink}**Agent names** must match a unique namestring, not
necessarily the preferred name. If you are loading “John Smith” and
there are three John Smiths in Arctos, you might create a new name “John
Smith (my project)” and use that namestring in your data. Once loaded,
the records will display preferred name, and agent name “John Smith (my
project)” may be removed.

[](#top){.infoLink}Special note primarily for botanists: The bulkloader
requires taxonomy.scientific\_name, not taxonomy.display\_name. That is,
“Carex bigelowii subsp. lugens” rather than “*Carex bigelowii* Torr.
subsp. *lugens* (Holm) T.V.Egorova”.

Any of the following are acceptable taxon name values (current
23Aug2011). ref.
[cttaxa\_formula](http://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula)

-   Formula “A”: An exact match to any accepted
    taxonomy.scientific\_name
    -   Sorex cinereus
    -   Soricidae
-   Formula “A sp.”: Any accepted taxonomy.scientific\_name where
    scientific name is also genus plus ” sp.”
    -   Sorex sp.
-   Formula “A cf.”: Any accepted taxonomy.scientific\_name plus ” cf.”
    -   Sorex cf.
-   Formula “A ?”: Any accepted taxonomy.scientific\_name plus ” ?”
    -   Sorex ?
-   Formula “A x B”: Any two accepted taxonomy.scientific\_names
    separated by ” x ”
    -   Sorex cinereus x Sorex yukonicus
-   Formula “A or B”: Any two accepted taxonomy.scientific\_names
    separated by ” or ”
    -   Sorex cinereus or Sorex yukonicus
-   Formula “A and B”: Any two accepted taxonomy.scientific\_names
    separated by ” and ”
    -   Sorex cinereus and Sorex yukonicus
-   Formula “A {string}”: Any valid taxonomy.scientific\_name, followed
    by a space, followed by an opening curly bracket, followed by a
    verbatim identification, followed by a closing curly bracket.
    -   Sorex {Sorex new species “my name”}
    -   unidentifiable {granite}

[](#top){.infoLink}Be sure anything coming from other applications
(especially Microsoft products) has not changed field length, precision,
or other attributes. Watch dates and non-integer numbers (such as
decimal latitude) most closely.

[](#top){.infoLink}The following table describes select individual
fields in BULKLOADER. **Check the Bulkloader Builder for the latest
table structure. Do not attempt to use this as a template.** [Let us
know](http://arctos.database.museum/contact.cfm) if it’s out of date,
incomplete, cryptic, or otherwise useless.

Field Name\
<span class="blrequired">required</span>\
<span class="blcondreq">conditionally required</span>\
<span class="bloptional">not required</span>
Data Type/Vocabulary
Description/Example
<span class="bloptional">Collection\_Object\_Id</span>
any unique number
Temporary record identifier; Does NOT carry over to any internal primary
keys.
<span class="bloptional">Cat\_Num</span>
set by collection
Existing catalog number, or leave blank to assign sequential numbers on
upload.
<span class="blrequired">Began\_Date</span>
ISO8601 date
[\[ doc \]](/documentation/places/collecting-event/#began_date) Earliest
date the specimen could have been collected.
<span class="blrequired">Ended\_Date</span>
ISO8601 date
[\[ doc \]](/documentation/places/collecting-event/#began_date) Latest
date the specimen could have been collected.
<span class="blrequired">Verbatim\_Date</span>
text; any string
[\[ doc \]](/documentation/places/collecting-event/#verbatim_date)
Examples: ‘winter 2002’; ‘1 Nov 2002’; ‘Nov 2002’.
<span class="blrequired">VERIFICATIONSTATUS</span>
text;
[CTVERIFICATIONSTATUS](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctVERIFICATIONSTATUS)
 
<span class="blrequired">SPECIMEN\_EVENT\_TYPE</span>
text;
[CTSPECIMEN\_EVENT\_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctSPECIMEN_EVENT_TYPE)
Type of specimen-event relationship
<span class="blrequired">Event\_Assigned\_By\_Agent</span>
text; [agent name](#agent)
 Agent asserting specimen-to-event relationship; often coordinate
determiner.
<span class="blrequired">Event\_Assigned\_Date</span>
date
Date on which the specimen-event relationship is made
<span class="bloptional">Coll\_Event\_Remarks</span>
text; any string
Remarks about Collecting Event.
<span class="blrequired">Higher\_Geog</span>
text; [pre-existing](http://arctos.database.museum/showLocality.cfm)
[\[ doc \]](/documentation/places/higher-geography/) Higher Geography
*exactly* as it appears in table Geog\_Auth\_Rec. New values must be
added to the database prior to bulk-loading.
<span class="blcondreq">Maximum\_Elevation</span>
integer &gt; minimum\_elevation
[\[ doc \]](/documentation/places/locality/#elevation) Maximum elevation
from which the specimen could have come. Used in conjunction with
Minimum\_Elevation and Orig\_Elev\_Units.
<span class="blcondreq">Minimum\_Elevation</span>
integer &lt; maximum\_elevation
[\[ doc \]](/documentation/places/locality/#elevation) Minimum elevation
from which the specimen could have come. Used in conjunction with
Maximum\_Elevation and Orig\_Elev\_Units.
<span class="blcondreq">Orig\_Elev\_Units</span>
text;
[ctorig\_elev\_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctorig_elev_units)
[\[ doc \]](/documentation/places/locality/#elevation) Used in
conjunction with Maximum\_Elevation and Minimum\_Elevation. (Code table
controlled.)
<span class="blrequired">Spec\_Locality</span>
text; any string
[\[ doc \]](/documentation/places/locality/#specific_locality) Specific
locality from which a specimen originates.
<span class="bloptional">Locality\_Remarks</span>
text; any string
Remarks associated with Locality.
Begin coordinate fields. All coordinate data are optional unless
Orig\_Lat\_Long\_Units is specified, and leaving Orig\_Lat\_Long\_Units
NULL will cause all other coordinate data to be ignored.
<span class="blrequired">Orig\_Lat\_Long\_Units</span>
text;
[ctlat\_long\_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_units)
[\[ doc \]](/documentation/places/coordinates/#original_units) Lat/Long
units as given by the determining agent and before any transformations.
<span class="blrequired">Datum</span>
text;
[ctdatum](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctdatum)
[\[ doc \]](/documentation/places/coordinates/#datum) Map datum used to
determine Lat/Long. Required if coordinates are given.
 
 
 
 
 
 
GEOREFERENCE\_SOURCE
text; any string
[\[ doc \]](/documentation/places/coordinates/#source) A code indicating
the reference from which a Lat/Long was determined.
<span class="blrequired">GEOREFERENCE\_PROTOCOL</span>
text;
[CTGEOREFMETHOD](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctGEOREFMETHOD)
 
 
 
 
<span class="blcondreq">Max\_Error\_Distance</span>
number
[\[ doc \]](/documentation/places/coordinates/#maximum_error) The
maximum possible error in distance between the recorded Lat\_Long and
the actual Lat\_Long of the specific locality. Required if
Max\_Error\_Units provided.
<span class="blcondreq">Max\_Error\_Units</span>
text;
[ctlat\_long\_error\_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLAT_LONG_ERROR_UNITS)
[\[ doc \]](/documentation/places/coordinates/#maximum_error) The units
in which the Max\_Error\_Distance are recorded. Required if
Max\_Error\_Distance provided.
*Geographic coordinates may be entered in decimal degrees^1^,
degrees-minutes-seconds^2^, or in degrees with decimal minutes^3^.*[\[
doc \]](/documentation/places/coordinatesg/#original_units)
<span class="blcondreq">Dec\_Lat^1^</span>
number
Decimal latitude.
<span class="blcondreq">Dec\_Long^1^</span>
number
Decimal longitude.
<span class="blcondreq">LatDeg^2\\ and\\ 3^</span>
positive number
Degrees Latitude (Integer, 90 or less.)
<span class="blcondreq">LatMin^2^</span>
positive number
Minutes Latitude (Integer, less than 60.)
<span class="blcondreq">LatSec^2^</span>
positive number
Seconds Latitude (Decimal fraction, less than 60.)
<span class="blcondreq">LatDir^2\\ and\\ 3^</span>
text; N or S
Latitude Direction: “N” or “S” (North or South).
<span class="blcondreq">LongDeg^2\\ and\\ 3^</span>
positive number
Degrees Longitude (Integer, 180 or less.)
<span class="blcondreq">LongMin^2^</span>
positive number
Minutes Longitude (Integer, less than 60.)
<span class="blcondreq">LongSec^2^</span>
positive number
Seconds Longitude (Decimal fraction, less than 60.)
<span class="blcondreq">LongDir^2\\ and\\ 3^</span>
text
Longitude Direction: “E” or “W” (East or West).
<span class="blcondreq">Dec\_Lat\_Min^3^</span>
positive number
Decimal Latitude Minutes (Used with LatDeg, decimal fraction, less than
60.)
<span class="blcondreq">dec\_long\_min^3^</span>
positive number
Decimal Longitude Minutes (Used with LongDeg, decimal fraction, less
than 60.)
— end coordinate fields —
<span class="blrequired">Verbatim\_Locality</span>
text; any string
[\[ doc \]](/documentation/places/collecting-event/#verbatim_locality)
The locality, entered as closely as possible to the original text
provided by the collector. (Not necessarily the same as [specific
locality](/documentation/places/locality/#specific_locality).)
<span class="blrequired">Collecting\_Source</span>
text;
[ctcollecting\_source](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source)
[\[ doc \]](/documentation/places/collecting-event/#collecting_source)
Source from which the specimen was received. Example: “wild caught”
[]()<span class="bloptional">Habitat</span>
text; any string
[\[ doc \]](/documentation/places/specimen-event/#habitat) A description
of habitat at the time of the collecting event.
[]()<span class="bloptional">Associated\_Species</span>
text; any string
A description of other species occurring at the collecting event. Use
relationships to other specimens when possible.
 
 
 
 
 
 
<span class="bloptional">Coll\_Object\_Remarks</span>
text; any string
Remarks about the cataloged item.
 
 
 
<span class="blrequired">Id\_Made\_By\_Agent</span>
text; [agent name](#agent)
[\[ doc \]](/documentation/identification/#id_by) Determiner, or agent
who identified the specimen.
<span class="bloptional">Identification\_Remarks</span>
text; any string
[\[ doc \]](/documentation/identification/#id_remarks) Remarks
associated with this identification.
<span class="blrequired">Made\_Date</span>
ISO8601 date
[\[ doc \]](/documentation/identification/#id_date) Date that the
taxonomic determination (or identification) was made.
<span class="blrequired">Nature\_of\_Id</span>
text;
[ctnature\_of\_id](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctnature_of_id)
[\[ doc \]](/documentation/identification/#nature_of_id) How
identification was determined. (Code-table controlled.)
<span class="blrequired">Taxon\_Name</span>
text; [taxon name](#taxa)
[\[ doc \]](/documentation/identification/#id_formula) Scientific Name
assigned by identifying agent.
<span class="bloptional">Other\_Id\_Num\_x</span>
text; any string
Other identifying numbers (ie, original field number).
<span class="blcondreq">Other\_Id\_Num\_Type\_x</span>
text;
[ctcoll\_other\_id\_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type)
Used in conjunction with Other\_Id\_Num. (Code-table controlled.)
<span class="blcondreq">Other\_Id\_References\_x</span>
text;
[ctid\_references](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTID_REFERENCES)
Establish relationships to other specimens. (Code-table controlled.)
<span class="blrequired">Collector\_Agent\_x</span>
text; [agent name](#agent)
Collector or preparator name as it appears in Arctos. At least one
collector\_agent is required.
<span class="blrequired">Collector\_Role\_x</span>
[\[ ctcollector\_role
\]](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLLECTOR_ROLE)
Collector Role.
[]()<span class="blrequired">Part\_Name\_x</span>
text;
[ctspecimen\_part\_name](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_part_name)
[\[ doc \]](/documentation/parts/#part_name) At least one part is
required.
<span class="blrequired">Part\_lot\_count\_x</span>
number
[\[ doc \]](/documentation/parts/#lot) A part\_lot\_count is required
for all non-null parts.
<span class="blrequired">Part\_Condition\_x</span>
text; any string
[\[ doc \]](/documentation/parts/#condition) A description of the latest
documented condition.
<span class="blrequired">Part\_disposition\_x</span>
text;
[ctcoll\_obj\_disp](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_OBJ_DISP)
[\[ doc \]](/documentation/parts/#disposition) A Part\_disposition is
required for all non-null parts. Example: “in collection”
<span class="bloptional">Part\_Barcode\_x</span>
text; any barcode
[\[ doc \]](/documentation/container/#barcode) Barcode on the part as it
will be read by a barcode scanner.
<span class="bloptional">Part\_Container\_Label\_x</span>
text; any string
[\[ doc \]](/documentation/container/#label) Label on the container (ie,
Nunc tube). The human-readable printing on the container. NULL results
in no changes to the part container; ignored if Part\_Barcode\_x is
null.
<span class="bloptional">Part\_Remark\_x</span>
text
Remark about the part.
<span class="blrequired">Accn</span>
text; accn number
[\[ doc \]](/documentation/accession/#accession_number) Accession Number
assigned upon acceptance of specimens. Format is accn number without
collection information, but see [cross-collection
considerations.](http://arctosdb.org/documentation/transaction/accession/#dataentry)
[]()<span class="blcondreq">EnteredBy</span>
text; [agent name](#agent)
[\[ doc \]](/documentation/agent/#names) Agent entering the data into
this table. Must match agent\_name of type login. NULLable if
entered\_by\_agent\_id provided.
ENTERED\_AGENT\_ID
number; [key](#pkey)
EnterdBy’s agent\_id. Increased performance over EnteredBy.
<span class="blcondreq">GUID\_Prefix</span>
text; controlled
[\[ doc \]](/documentation/cataloged_item/#guid) Unique-within-Arctos
identifier of the collection under which the specimen will be cataloged.
Replaces Institution\_Acronym + Collection\_Cde.
<span class="blcondreq">collection\_id</span>
number, [key](#pkey)
Primary key of table Collection. Alternative to guid\_prefix.
<span class="bloptional">Loaded</span>
text; any string
This is where errors are stored after Bulkloader processing. [More
Info](https://arctosdb.wordpress.com/how-to/create/#load)
[]()<span class="bloptional">Flags</span>
text;
[ctflags](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctflags)
Flag indicating the specimen needs further work.
[]()<span class="bloptional">Attribute</span>
text;
[ctattribute\_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type)
[\[ doc \]](/documentation/attributes/#name) Attribute name. (Code-table
controlled.)
<span class="bloptional">Attribute\_value</span>
text; various
[\[ doc \]](/documentation/attributes/#value) Value of the attribute.
Leaving this NULL will cause the bulkloader to ignore the attribute
entry regardless of other values.
<span class="bloptional">Attribute\_units</span>
text;
[L](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlength_units),[W](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctweight_units),
etc.
[\[ doc \]](/documentation/attributes/#units) Units on attribute\_value,
where appropriate.
<span class="bloptional">attribute\_remarks</span>
text; any string
[\[ doc \]](/documentation/attributes/#remark) Remarks about the
attribute.
<span class="bloptional">attribute\_date</span>
ISO8601 date
[\[ doc \]](/documentation/attributes/#date) Date the attribute was
determined.
<span class="bloptional">attribute\_det\_meth</span>
text; any string
[\[ doc \]](/documentation/attributes/#method) How the attribute was
determined.
<span class="bloptional">attribute\_determiner</span>
text; [agent name](#agent)
[\[ doc \]](/documentation/attributes/#determiner) Agent who determined
the attribute.
<span class="bloptional">locality\_id</span>
number; [key](#pkey)
A primary key from table locality may be used in place of locality
information. A value here will over-ride anything entered into
higher\_geog, spec\_locality, coordinates, etc.
<span class="bloptional">collecting\_event\_id</span>
number; [key](#pkey)
A primary key from table collecting\_event may be used in place of
collecting\_event information. A value here will over-ride anything
entered into higher\_geog, spec\_locality, coordinates, dates, method,
etc.
[]()\* All date fields should be formatted as ISO8601, *e.g.*,
2006-12-31.\
[](#top){.infoLink}\
**Primary Key Warning**

Some values may be replaced by or require primary keys: locality\_id,
entered\_by\_agent\_id, collecting\_event\_id, etc. These are internal
database identifiers that exist only for convenience, and may be
updated, transferred to another data object, or removed for seemingly
arbitrary reasons and without warning. They’ll probably work over short
time-periods, but we offer no guarantees.
