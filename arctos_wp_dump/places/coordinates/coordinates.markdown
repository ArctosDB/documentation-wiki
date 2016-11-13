# Coordinates

<div class="entry-content">

[]()[top](#top){#toplink}

<div class="anchors">

<div class="anchortitle">

Concepts

</div>

[Original Units](#original_units)\
[Datum](#datum)\
[Reference Source](#reference)\
[Georeference Method](#georefmethod)\
[GPS Accuracy](#gpsaccuracy)\
[Extent](#extent)\
[Maximum Uncertainty Distance](#maximum_error)\
[Determiner](#determiner)\
[Date](#date)\
[Verification Status](#verificationstatus)\
[Accepted Flag](#accepted)\
[Remarks](#remarks)

<div class="anchortitle">

Search Tips

</div>

[Spatial Query](#spatialquery)

</div>

The application of latitudes and longitudes to verbal
[locality](locality) data is called georeferencing. Latitude describes a
position in degrees north or south of the equator. Longitude describes a
position in degrees east or west of the Greenwich meridian. However,
coordinates alone are of limited use without information on uncertainty
and the coordinate frame of reference (datum).

Protocols for georeferencing natural history collections are described
in the [MaNIS Georeferencing
Guidelines](http://manisnet.org/GeorefGuide.html).  Tools that automate
these protocols include the [Georeferencing
Calculator](http://manisnet.org/gc.html),
[BioGeomancer](http://bg.berkeley.edu/latest/), and
[GeoLocate](http://www.museum.tulane.edu/geolocate/ "GeoLocate at Tulane"). 
GeoLocate is called as a web service by applications within Arctos.

Coordinates are stored with collecting events and with locality, both
optional. Collecting event coordinates are “verbatim” and should reflect
some data associated with specimen events. Locality coordinates are part
of georeferences, and may be standardizations or corrections of, or
additions to verbatim coordinates.

Any locality has zero or one coordinate assertions. “Unaccepted
coordinates” are handled by having multiple specimen events referencing
multiple localities.

Data Entry has (for brevity) one place for coordinate information, and
these data are stored as both verbatim and locality coordinates. Events
and localities may be pre-made and selected when these limitations
prevent accurately representing the data.

[](#top){.infoLink}

<div class="fldDef">

collecting\_event . Orig\_Lat\_long\_Units\
VARCHAR(20) null\
[ctlat\_long\_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLAT_LONG_UNITS)\
DarwinCore2=VerbatimCoordinateSystem

</div>

**Original Units** for geographic coordinates vary with the source of
the data.  Classically, latitude and longitude have been recorded in
degrees, minute and seconds.  Now, modern GIS applications generally use
degrees only, including decimal fractions for all levels of precision. 
In Arctos, coordinates are stored and displayed in their original
format.  Except for UTMs, coordinates are also translated to, and stored
as, decimal degrees for standardization and mapping.  There is not yet
programming to convert UTMs to decimal degrees. Include as many digits
of precision as are provided in the original data.  Forms in Arctos are
customized according to which format is chosen, and the vocabulary and
formats are defined and described by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLAT_LONG_UNITS).

In all formats, include as many digits of precision as are provided in
the original data.\
[](#top){.infoLink}

<div class="fldDef">

Collecting\_Event . Datum\
VARCHAR(40) null\
[ctdatum](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctdatum)\
DarwinCore2=GeodeticDatum

</div>

**Datum:** The geodetic datum to which the latitude and longitude refer.
A geodetic datum describes the size, shape, origin, and orientation of a
coordinate system for mapping the earth. Latitude and longitude data
referenced to the wrong datum can result in positional errors of
hundreds of meters. Therefore, when providing latitude and longitude
data, it is important to know from which datum those data are derived.
Most GPS units allow you to select the geodetic data from which its
coordinates will be determined (default usually set to WGS84, but this
should be checked in the field). Maps and gazetteers generally provide
this information as well.\
[](#top){.infoLink}

<div class="fldDef">

Locality . GEOREFERENCE\_SOURCE\
VARCHAR(255) not null\
[ctGEOREFERENCE\_SOURCE](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctGEOREFERENCE_SOURCE "Georefrence Source")\
DarwinCore2=GeoreferenceSources

</div>

**Reference Source(s)** refers to the source of the coordinates and not
to the source of the error. Coordinates may be original data collected
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

[](#top){.infoLink}

<div class="fldDef">

Locality.GEOREFERENCE\_PROTOCOL\
VARCHAR(40) not null\
[ctGEOREFERENCE\_PROTOCOL](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctGEOREFERENCE_PROTOCOL "GEOREFERENCE_PROTOCOL")

</div>

**Georeference Method** is the protocol used to obtain the values for
the coordinates and the measure of precision. Different methods and
tools have been produced, and are sometimes revised, and these
differences can produce different results.  The
[vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctgeorefmethod "Georeference Method")
for this field is controlled.

[](#top){.infoLink}

<div class="fldDef">

Lat\_Long . Max\_Error\_Distance\
NUMBER null\
DarwinCore2=CoordinateUncertaintyInMeters

</div>

<div class="fldDef">

—

</div>

<div class="fldDef">

Lat\_Long . Max\_Error\_Units\
VARCHAR2(2) null

</div>

<div class="fldDef">

[ctlat\_long\_error\_units](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_error_units "Distance Units")

</div>

**Maximum Uncertainty Distance** is the upper limit of the horizontal
(as opposed to elevational) distance from the reported latitude and
longitude. It describes a circle within which the whole of the described
locality lies. Leave the value empty if the uncertainty is unknown,
cannot be estimated, or is not applicable (because there are no
coordinates). Zero is not a valid value. Maximum Uncertainty is the sum
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

Note that there is no error inherent to coordinates.
{Dec\_Lat=12,Dec\_Long=34} is precisely the same point as
{Dec\_Lat=12.000000000000000000000000000000,Dec\_Long=34.000000000000000000000000000000}.
Make no assumptions of coordinate error or “size” (all coordinates
describe a point) based on anything other than asserted maximum error.

For most usage, including exportation to federated portals, the value
for Maximum Uncertainty is converted from the original units (recorded
here) to the value in meters.\
[](#top){.infoLink}

<div class="fldDef">

Lat\_Long . Determined\_By\_Agent\_id\
INT not null

</div>

**Determiner** is the
[agent](http://arctosdb.wordpress.com/documentation/agent/ "Agents")
(usually a person) who determined that these coordinates and measures of
uncertainty apply to this locality. Often, this is the collector or,
dear reader, you.  The form will load with the currently logged-in user
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
accepted determination.\
[](#top){.infoLink}

<div class="fldDef">

Lat\_Long . Determined\_Date\
DATETIME null

</div>

**Determination Date** is the [ISO8601](/documentation/dates/) date that
the determination was made. Entry/editing forms load with the current
date as a default for new records.\
[](#top){.infoLink}

<div class="fldDef">

Lat\_Long . VerificationStatus\
VARCHAR(40) not null\
[ctverificationstatus](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctverificationstatus "Verification Status")\
DarwinCore2=GeoreferenceVerificationStatus

</div>

**Verification Status:** A categorical description of the extent to
which the georeference has been verified to represent the location where
the specimen or observation was collected. 
[Vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctverificationstatus "Verification Status")
is controlled.

“Verified by collector” indicates that the person who removed the
specimen from nature has looked at the coordinates and uncertainty
represented on an appropriately scaled map, and believes that these data
are accurate and that the represented uncertainty is as small as
possible.\
[](#top){.infoLink}

<div class="fldDef">

Lat\_Long . Accepted\_Lat\_Long\_fg\
TINYINT not null

</div>

**Accepted?**  There can be more than one georeferencing determination
per locality but only the accepted determination is routinely displayed.
You can revert to an earlier determination by changing its *accepted*
flag from “no” to “yes.”\
[](#top){.infoLink}

<div class="fldDef">

Lat\_Long . Lat\_Long\_Remarks\
VARCHAR2(4000) null\
DarwinCore2=GeoreferenceRemarks

</div>

**Remarks** about the spatial description determination, explaining
assumptions made in addition or opposition to the those formalized in
the method referred to in [Georeference Method](#georefmethod).\
[](#top){.infoLink}

### **Spatial Query**

-   Click the select icon
    ([![](/wp-content/uploads/sites/21/2011/09/selector.png "selector"){.alignnone
    .size-full .wp-image-667 width="18"
    height="18"}](/wp-content/uploads/sites/21/2011/09/selector.png)) to
    add a spatial query box to the map. Click the X to start over. Click
    and drag the box to select an area on the map. The northeast and
    southwest corner coordinates of the selected area are indicated on
    the line above the map.
-   Use the search box above the map to locate features or places. This
    searches the map, NOT Arctos specimens.
-   You may click the zoom icon in the select tool to zoom the map to
    the approximate size of the select tool. Scrollwheel and map control
    zoom work too.
-   Spatial query can be used alone, or in combination with any other
    search parameters.
-   Not all records can be found with a spatial query. As of March 2013,
    78% of the records represented in Arctos have been documented with
    geographic coordinates. Within individual collections, this
    proportion ranges from all to none.
-   Localities are not simply points, but circles indicating precision.
    (Some have radius 0, which should be interpreted as “NULL” rather
    than “infinitely precise,” and some are very large.) Choose the
    “query by points and error” option to find specimens by error (the
    match is “any overlap”) rather than only by coordinate points. Error
    is represented as a simplified rectangle and may be especially
    inaccurate at high latitudes and large errors.
-   All records are plotted on the geodetic datum WGS84, irrespective of
    the datum on which they were recorded. Such untransformed non-WGS84
    records may be misplaced by as much as half a kilometer. The
    original datum is documented for individual records.

For example, this query:

[![Screen Shot 2013-05-20 at 10.14.18
AM](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am.png){.alignnone
.size-full .wp-image-1268 width="640" height="456"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am.png 814w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-300x214.png 300w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-768x547.png 768w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-250x178.png 250w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-550x392.png 550w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-800x570.png 800w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-253x180.png 253w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-421x300.png 421w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-702x500.png 702w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-210x150.png 210w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am-400x285.png 400w"}](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-14-18-am.png)

(note the “query by points only” option)

produces these results:

[![Screen Shot 2013-05-20 at 10.16.51
AM](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am.png){.alignnone
.size-full .wp-image-1269 width="640" height="422"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am.png 975w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-300x198.png 300w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-768x507.png 768w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-250x165.png 250w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-550x363.png 550w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-800x528.png 800w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-273x180.png 273w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-454x300.png 454w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am-757x500.png 757w"}](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-16-51-am.png)

Note that BerkeleyMapper does not by default include precision or
remember your settings, so you must enable it every time:

[![Screen Shot 2013-05-20 at 10.36.58
AM](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-36-58-am.png){.alignnone
.size-full .wp-image-1275 width="354" height="295"
sizes="(max-width: 354px) 100vw, 354px"
srcset="/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-36-58-am.png 354w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-36-58-am-300x250.png 300w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-36-58-am-250x208.png 250w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-36-58-am-216x180.png 216w"}](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-36-58-am.png)

Feel free to stop by
<https://code.google.com/p/berkeleymapper/issues/detail?id=44> and leave
a comment!

Change the original query to “points and error”….

[![Screen Shot 2013-05-20 at 10.18.05
AM](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am.png){.alignnone
.size-full .wp-image-1270 width="640" height="532"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am.png 693w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am-300x250.png 300w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am-250x208.png 250w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am-550x458.png 550w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am-216x180.png 216w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am-360x300.png 360w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am-601x500.png 601w"}](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-18-05-am.png)

we get….

[![Screen Shot 2013-05-20 at 10.19.20
AM](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am.png){.alignnone
.size-full .wp-image-1271 width="640" height="485"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am.png 748w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am-300x227.png 300w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am-250x190.png 250w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am-550x417.png 550w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am-237x180.png 237w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am-396x300.png 396w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am-660x500.png 660w"}](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-19-20-am.png)

To remove the huge-error specimens, we can add a maximum coordinate
precision value:

[![Screen Shot 2013-05-20 at 10.30.26
AM](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-30-26-am.png){.alignnone
.size-full .wp-image-1273 width="640" height="106"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-30-26-am.png 647w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-30-26-am-300x50.png 300w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-30-26-am-250x42.png 250w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-30-26-am-550x92.png 550w"}](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-30-26-am.png)

which results in:

[![Screen Shot 2013-05-20 at 10.32.33
AM](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am.png){.alignnone
.size-full .wp-image-1274 width="640" height="390"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am.png 720w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am-300x183.png 300w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am-250x152.png 250w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am-550x335.png 550w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am-295x180.png 295w, /wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am-492x300.png 492w"}](/wp-content/uploads/sites/21/2013/05/screen-shot-2013-05-20-at-10-32-33-am.png)
