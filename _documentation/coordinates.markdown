---
title: Coordinates
layout: default_toc
---

# Coordinates

The application of latitudes and longitudes to verbal
[locality](/documentation/locality) data is called georeferencing. Latitude describes a
position in degrees north or south of the equator. Longitude describes a
position in degrees east or west of the Greenwich meridian. However,
coordinates alone are of limited use without information on uncertainty
and the coordinate frame of reference (datum).

Protocols for georeferencing natural history collections are described
in the [MaNIS Georeferencing Guidelines](http://manisnet.org/GeorefGuide.html). Tools that automate
these protocols include the [Georeferencing Calculator](http://manisnet.org/gc.html),
[BioGeomancer](http://www.gbif.org/resource/80536), and
[GeoLocate](http://www.museum.tulane.edu/geolocate). GeoLocate is called as a web service by applications within Arctos.

Coordinates are optionally stored *both* with [collecting events](/documentation/collecting-event) and with [locality](/documentation/locality). Collecting event coordinates are "verbatim" and should reflect
some data associated with specimen events. Locality coordinates are part
of georeferences, and may be standardizations or corrections of, or
additions to, verbatim coordinates.

Any locality has zero or one coordinate assertions. "Unaccepted
coordinates" are handled by having multiple specimen events referencing
multiple localities.

[Data Entry](/how_to/How-to-Enter-Data-for-a-Single-Record.html) has (for brevity) one place for coordinate information, and
these data are stored as both verbatim (in the collecting event) and locality coordinates. Events
and localities may be pre-made and selected when these limitations
prevent accurately representing the data.

## Original Units

`Collecting_Event . Orig_Lat_Long_Units VARCHAR(20) null`

<!--`DarwinCore2=VerbatimCoordinateSystem`-->

Geographic coordinates vary with the source of
the data. Classically, latitude and longitude have been recorded in
degrees, minute and seconds. Now, modern GIS applications generally use
degrees only, including decimal fractions for all levels of precision. In Arctos, coordinates are stored and displayed in their original
format. Except for UTMs, coordinates are also translated to, and stored
as, decimal degrees for standardization and mapping. There is not yet
programming to convert UTMs to decimal degrees. Forms in Arctos are
customized according to which format is chosen. The vocabulary and
formats for Original Units are defined by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLAT_LONG_UNITS).

In all formats, include as many digits of precision as are provided in
the original data.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Original Units indicate which coordinate fields should be completed.

Original Units | Dec_Lat | Dec_Long | LatDeg | LatMin | LatSec | LatDir | LongDeg | LongMin | LongSec | LongDir | Dec_Lat_Deg | Dec_Lat_Min | Dec_Lat_Dir | Dec_Long_Deg | Dec_Long_Min | Dec_Long_Dir  
 -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- 
 [decimal degrees](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_units#decimal_degrees) |X|X|  |  |  |  |  |  |  |  |  |  |  |  |  
 [deg. min. sec.](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_units#deg__min__sec_) |  |  |X|X|X|X|X|X|X|X|  |  |  |  |  
 [degrees dec. minutes](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_units#degrees_dec__minutes) |  |  |  |  |  |  |  |  |  |  |X|X|X|X|X|X  

## Geodetic Datum

`Collecting_Event . Datum VARCHAR(40) null`

<!--`DarwinCore2=GeodeticDatum`-->

The geodetic datum to which the latitude and longitude refer, with values controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctdatum).
A geodetic datum describes the size, shape, origin, and orientation of a
coordinate system for mapping the earth. Latitude and longitude data
referenced to the wrong datum can result in positional errors of
hundreds of meters. Therefore, when providing latitude and longitude
data, it is important to know from which datum those data are derived.
Most GPS units allow you to select the geodetic data from which its
coordinates will be determined (default usually set to WGS84, but this
should be checked in the field). Maps and gazetteers generally provide
this information as well.

## Reference Source(s)

`Locality . GEOREFERENCE_SOURCE VARCHAR(255) not null`

<!--`DarwinCore2=GeoreferenceSources`-->

Reference Source(s) refers to the source of the coordinates and not
to the source of the error. 
 Coordinates may be original data collected
with the specimen, or they may be provided by after-the-fact
georeferencing efforts. In the latter situation, data in Source(s)
should be specific enough to allow anyone in the future to use the same
resources to validate the coordinates, or to georeference the same
locality. These data might be a list of maps, gazetteers or other
resources used to georeference the locality. Examples:

-   USGS 1:24000 Florence Montana Quad
-   Dictionary of Alaska Place Names (Orth, 1967)
-   Geographic Names Canada (NRC website)
-   Geographic Names Information System (USGS website)

In cases where the coordinates are original data, a description of the
original source should be provided. Again, these data should make the
coordinates as verifiable as possible by referring to records associated
with the specimen. Examples:

-   collector’s notation
-   preparator’s notation
-   specimen label
-   accession file
-   global positioning system (download)
-   global positioning system (transcription)

## Georeference Method

`Locality . Georeference_Protocol VARCHAR(40) not null`

Georeference Method is the protocol used to obtain values for
the coordinates and the measure of precision. Different methods and
tools have been produced, and are sometimes revised, and these
differences can produce different results. The
[vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctGEOREFERENCE_PROTOCOL)
for this field is controlled.

## Maximum Uncertainty

`Lat_Long . Max_Error_Distance NUMBER null`

`Lat_Long . Max_Error_Units VARCHAR2(2) null`

<!--`DarwinCore2=CoordinateUncertaintyInMeters`-->

This is the upper limit of the horizontal
(as opposed to elevational) distance from the reported latitude and
longitude. It describes a circle within which the whole of the described
locality lies. Leave the value empty if the uncertainty is unknown,
cannot be estimated, or is not applicable (because there are no
coordinates). Values are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_error_units). Zero is not a valid value. Maximum Uncertainty is the sum
of GPSAccuracy, Extent, and all other sources of error or imprecision.

This is a simple concept, but there are several sources of error which,
when correctly combined, often demonstrate a value larger than intuition
might suggest. These sources of error are enumerated in the MaNIS
Guidelines, and are combined into estimates of total error by the
Georeferencing Calculator.

In some circumstances the greatest source of error is the behavior of
the collector and/or any intermediary sources of the data. For example,
if a locality names a village, the collector may have obtained specimens
from a resident who forages over a large area near the village. The
collector may even have provided coordinates for the village, often from
some standard source, implying specificity equal to the extent of the
village. Estimating error can therefore be subjective, and conservative
interpretation demands large values for Maximum Uncertainty. To avoid
ambiguous or misleading locality descriptions, see [MVZ’s
guidelines](http://mvz.berkeley.edu/Locality_Field_Recording.html).

There is no "maxumum maximum certainty," and something is almost always more useful than nothing. Do not hesitate to provide uncertainty which encapsulates a continent or ocean if that is what the data are capable of supporting.

Note that there is no error inherent to coordinates.
{Dec_Lat=12,Dec_Long=34} is precisely the same point as
{Dec_Lat=12.000000000000000000000000000000,Dec_Long=34.000000000000000000000000000000}.
Make no assumptions of coordinate error or "size" (all coordinates
describe a point) based on anything other than asserted maximum error.

For most usage, including exportation to federated portals, the value
for Maximum Uncertainty is converted from the original units (recorded
here) to the value in meters.

## Determiner

`Lat_Long . Determined_By_Agent_ID INT not null`

The Determiner is the [agent](/documentation/agent)
(usually a person) who determined that these coordinates and measures of
uncertainty apply to this locality. Often, this is the collector or,
dear reader, you. The form will load with the currently logged-in user
as the default Determiner for new records.

Sometimes, a determination is developed by two or more successive
agents. For example, one agent might locate a named place and provide
the coordinates, but little or no information about the uncertainty. A
second agent might then evaluate the determination (mapping it and
comparing it to the Verbatim Locality) and then develop a Maximum
Uncertainty. In this case, we assume that the second agent has
re-evaluated the coordinates, and the determination is considered to
have been made by the second agent (*i.e.,* the agent who last modified
the determination). If there is a need to maintain the identity of the
first agent, then the second agent should create a second (separate)
determination.

If the collector offered a determination in the original data, this
determination should not be modified even if it is no longer the
accepted determination.

## Determination Date

`Lat_Long . Determined_Date DATETIME null`

This is the [ISO8601](/documentation/dates) date that
the determination was made. Entry/editing forms load with the current
date as a default for new records.

## Verification Status

`Lat_Long . VerificationStatus VARCHAR(40) not null`

<!--`DarwinCore2=GeoreferenceVerificationStatus`-->

A categorical description of the extent to
which the georeference has been verified to represent the location where
the specimen or observation was collected. [Vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctverificationstatus)
is controlled.

"Verified by collector" indicates that the person who removed the
specimen from nature has looked at the coordinates and uncertainty
represented on an appropriately scaled map, and believes that these data
are accurate and that the represented uncertainty is as small as
possible.

## Accepted?

`Lat_Long . Accepted_Lat_Long_FG TINYINT not null`

There can be more than one georeferencing determination
per locality but only the accepted determination is routinely displayed.
You can revert to an earlier determination by changing its *accepted*
flag from "no" to "yes."

## Remarks

`Locality . GEOREFERENCE_SOURCE VARCHAR(255) not null`

<!--`DarwinCore2=GeoreferenceRemarks`-->

Remarks about the spatial description determination, explaining
assumptions made in addition or opposition to the those formalized in
the method referred to in [Georeference Method](#georeference-method) should be placed in [Georeference Source](#reference-source(s)).

## Searching with Coordinates

### Spatial Query

-   Click the **select icon**
    (![](../images/classic-uploads/2011/09/selector.png "selector")
    <!--{.alignnone .size-full .wp-image-667 width="18" height="18"}]-->) 
    to add a spatial query box to the map. Click the X to start over. Click
    and drag the box to select an area on the map. The northeast and
    southwest corner coordinates of the selected area are indicated on
    the line above the map.
-   Use the **search box above the map to locate features or places**. This
    searches the map, NOT Arctos specimens.
-   You may click the **zoom icon** in the select tool to zoom the map to
    the approximate size of the select tool. Scrollwheel and map control
    zoom too.
-   Spatial query can be used alone, or **in combination** with any other
    search parameters.
-   **Not all records can be found with a spatial query.** As of March 2013,
    78% of the records represented in Arctos have been documented with
    geographic coordinates. Within individual collections, this
    proportion ranges from all to none.
-   **Localities are not simply points**, but circles indicating precision.
    (Some have radius 0, which should be interpreted as `NULL` rather
    than "infinitely precise," and some are very large.) Choose the
    "query by points and error" option to find specimens by error (the
    match is "any overlap") rather than only by coordinate points. Error
    is represented as a simplified rectangle and may be especially
    inaccurate at high latitudes and large errors.
-   All records are plotted on the **geodetic datum WGS84**, irrespective of
    the datum on which they were recorded. Such untransformed non-WGS84
    records may be misplaced by as much as half a kilometer. The
    original datum is documented for individual records.

For example, this query (note the "query by points only" option):

![Screen Shot 2013-05-20 at 10.14.18 AM](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am.png)
<!--{.alignnone .size-full .wp-image-1268 width="640" height="456"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am.png 814w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-300x214.png 300w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-768x547.png 768w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-250x178.png 250w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-550x392.png 550w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-800x570.png 800w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-253x180.png 253w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-421x300.png 421w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-702x500.png 702w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-210x150.png 210w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am-400x285.png 400w"}](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-14-18-am.png)-->

produces these results:

![Screen Shot 2013-05-20 at 10.16.51 AM](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am.png)
<!--{.alignnone .size-full .wp-image-1269 width="640" height="422"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am.png 975w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-300x198.png 300w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-768x507.png 768w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-250x165.png 250w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-550x363.png 550w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-800x528.png 800w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-273x180.png 273w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-454x300.png 454w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am-757x500.png 757w"}](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-16-51-am.png)-->

Note that BerkeleyMapper does not by default include precision or remember your settings, so you must enable it every time:

![Screen Shot 2013-05-20 at 10.36.58 AM](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-36-58-am.png)
<!--{.alignnone .size-full .wp-image-1275 width="354" height="295"
sizes="(max-width: 354px) 100vw, 354px"
srcset="../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-36-58-am.png 354w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-36-58-am-300x250.png 300w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-36-58-am-250x208.png 250w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-36-58-am-216x180.png 216w"}](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-36-58-am.png)-->

Feel free to stop by and leave a comment on this [issue](https://github.com/BNHM/berkeleymapper/issues/44)!

Change the original query to "points and error"….

![Screen Shot 2013-05-20 at 10.18.05 AM](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am.png)
<!--{.alignnone .size-full .wp-image-1270 width="640" height="532"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am.png 693w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am-300x250.png 300w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am-250x208.png 250w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am-550x458.png 550w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am-216x180.png 216w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am-360x300.png 360w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am-601x500.png 601w"}](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-18-05-am.png)-->

we get….

![Screen Shot 2013-05-20 at 10.19.20 AM](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am.png)
<!--{.alignnone .size-full .wp-image-1271 width="640" height="485"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am.png 748w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am-300x227.png 300w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am-250x190.png 250w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am-550x417.png 550w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am-237x180.png 237w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am-396x300.png 396w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am-660x500.png 660w"}](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-19-20-am.png)-->

To remove the huge-error specimens, we can add a maximum coordinate precision value:

![Screen Shot 2013-05-20 at 10.30.26 AM](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-30-26-am.png)
<!--{.alignnone .size-full .wp-image-1273 width="640" height="106"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-30-26-am.png 647w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-30-26-am-300x50.png 300w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-30-26-am-250x42.png 250w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-30-26-am-550x92.png 550w"}](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-30-26-am.png)-->

which results in:

![Screen Shot 2013-05-20 at 10.32.33 AM](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am.png)
<!--{.alignnone .size-full .wp-image-1274 width="640" height="390"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am.png 720w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am-300x183.png 300w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am-250x152.png 250w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am-550x335.png 550w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am-295x180.png 295w, ../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am-492x300.png 492w"}](../images/classic-uploads/2013/05/screen-shot-2013-05-20-at-10-32-33-am.png)-->

### Coordinates as Specimen Search terms

Search term "**coordinates**" matches a full-precision dec_lat,dec_long concatenation.

Search term "**rcoords**" matches a round(dec_lat,1),round(dec_long,1) concatenation.

Search term "**rcoordslist**" accepts a pipe-delimited list of rcoords.

## Tools

https://www.engineeringtoolbox.com/utm-latitude-longitude-d_1370.html will batch-convert northern hemisphere UTM to DD.dd format.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/coordinates.markdown" target="_blank">here</a>.
