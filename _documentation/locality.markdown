---
title: Locality
layout: default_toc
---

# Locality


A locality is a specific place associated with one or more [Collecting Events](collecting-event).  Ultimately, each locality should be a unique
circle in geographic space.  The center is a point defined by [latitude
and longitude](coordinates), and the radius is a linear estimate of
error.  For electronic mapping, we convert such data to decimal degrees
with estimates of error in meters.  Interfaces to the data are more
flexible.

A locality has these related elements:

-   a description of [higher geography](higher-geography)
-   one or more [georeferencing determinations](coordinates)

Unfortunately, not all localities are even crudely georeferenced.  Thus
much of the descriptive data is hierarchical (e.g., continent, country,
state, county, specific locality).  Applying coordinates and errors
(georeferencing) to such descriptions is error-prone and even
subjective.  Therefore, multiple georeferencing determinations can be
applied to a single locality even though only the "accepted"
determination is routinely displayed.  Some caveats:

-   A locality documents one *or more* collecting events.
-   Separate but similar localities may differ only in the extent of
    their respective errors.  For example, if the specific locality
    "Barrow" is given for a lemming, it would be reasonable to assume
    the animal came from right in Barrow, or from somewhere on the
    limited road system around Barrow. Five kilometers might be
    appropriate.  If Barrow were given for the specific locality of a
    bowhead whale, then an appropriate error might be more like 50
    kilometers because whalers travel several tens of kilometers.  In
    both cases, the latitude, longitude, specific locality, and higher
    geography are potentially identical.
-   There are important differences between a Locality and a [Verbatim
    Locality](collecting-event/#verbatim_locality), though the verbiage
    may often be the same.


## Locality Nickname

Locality Nickname is a globally-unique human-readable "locality ID"
commonly used to unambiguously associate one or more specimens to a
locality.



## Specific Locality

`Locality . Spec_Locality VARCHAR2 (255) null`


 refers to the locality from which the specimen was
collected from the wild, regardless of whether the animal was brought
into captivity and killed at a different time and place.  If the
wild-caught locality is not known, put the location where the animal
died, was killed, or was purchased (e.g., the zoo, aviary, pet store,
lab, or market) in the Specific Locality field (see [Collecting
Events](collecting-event) for more details).

1.  When writing Specific Localities, the highest priority should be to
    maximize clarity and minimize confusion for a global audience.  Do
    not include higher geography (continent, ocean, sea, island group,
    island, country, state, province, county, feature) in the Specific
    Locality unless it references a place-name in another geopolitical
    subdivision, in which case include that subdivision in parentheses.
    The following example is located in California.

-   **Example:** 10 mi below Ehrenberg (Arizona), Colorado River
-   There some situations in which no Specific Locality is given, or no
    Specific

    Locality would be appropriate. For example, collecting events on the
    high seas

    which are specified by geographic latitude and longitude.

    -   **Example:** North Pacific Ocean, 45 52′ 24″ N, 165 21′ 48″ W

    Or a collecting event on an island that is specified in the
    Higher Geography.

    -   **Example:** USA, Alaska, Petersburg quad, Thorne Island

    In these examples, as well as in records for which appropriate data
    are missing, the correct value for Specific Locality is, "**No
    specific locality recorded.**"

    (In contrast to a normal locality, this is a sentence and therefore
    begins with a capital letter and ends with a period.)

-   Do not anglicize words in Verbatim Locality or Specific Locality. 
    The database supports Unicode, so the limitation is input devices
    (your keyboard!) or possibly your operating system.
    -   **Example:** Las Montañas del Norte
    -   **Not:** Mountains of the North
    -   **Not:** Las Montanas del Norte

    This standard challenges the flexibility of input methods, but
    increasingly foreign data can be received in Unicode, and for many
    editing needs one can cut and paste.
-   Enter Township, Range, Section (TRS), Lat/Long, and elevation data
    in the separate fields provided for them (see below). Do not enter
    TRS data in the Specific Locality field.
-   If an obsolete name for a geographic place is given in Verbatim
    Locality, put the current name in Specific Locality, followed
    immediately by the obsolete name in parentheses after an "=".
    -   **Example:** Whistler (=Alta Lake=Mons), N of Vancouver, British
        Columbia

    In this example, Whistler has historically been known as Alta Lake
    and Mons
-   Specific Locality should start with the most specific part of the
    locality and end with the most general.
    -   **Example:**  0.25 mi S and 1.5 mi W Mt. Edith, Big Belt Mts.
    -   **Not:**  Big Belt Mts., 0.25 mi S and 1.5 mi W Mt. Edith
-   Use ‘and’ rather than ‘&’ when describing multiple directions
    in localities. Do not omit the ‘and’ in favor of a comma or any
    other separator.
    -   **Example 1:**  Lauterwasser Creek, 1 mi N and 6 mi E Berkeley
    -   **Not: ** Lauterwasser Creek, 1 mi N, 6 mi E Berkeley
    -   **Example 2: ** between Davis and Sacramento
    -   **Not:**  between Davis & Sacramento
-   Do not abbreviate directions when they are part of a place name.
    -   **Example:**  S of West Lansing
    -   **Not: ** S of W Lansing
-   Use ‘of ‘to clarify the intention of a locality description.
    -   **Example:**  S of West Lansing
-   Enter distances in decimals, not as fractions.
    -   **Examples:**  1/2 = 0.5; 1/4 = 0.25; 1/8 = 0.125, 1/3 = 0.33,
        2/3 = 0.67
-   Put a "0" before the decimal in distances between 0 and 1 units
    (e.g., 0.5 mi, 0.75 km).
-   Put a period after an abbreviation unless it is a direction or a
    unit of measure (e.g., mi, N, yds, etc.).
    -   **Example: ** 1 mi N junction of Hwy. 580 and Hwy. 80
    -   **Not:**  1 mi. N. jct. Hwys 580 & 80
-   Do not put a period at the end of the specific locality except as
    part of an abbreviation.
-   Include parentheses when giving a description such as "by road" or
    "by air," and place the parenthetical between the direction and the
    named place that it modifies.
    -   **Example:**  1 mi N (by road) Berkeley
-   Capitalize "Junction" only for proper names. When not a proper noun,
    "junction" should be spelled out and followed by "with" or "of."
    -   **Example 1:**  10 km S junction of Hwy. 1 and Hwy. 5
    -   **Example 2:**  junction of Strawberry Creek with Oxford Ave.
-   Use only the following abbreviations:

      | Word or phrase                      | Abbreviation       | Comment     |
      |-------------------------------------|--------------------|-------------|
      | yards                               | yds           | If space permits, spell out non-metric units. *E.g.,*"yards" |
      | feet                                | ft            | If space permits, spell out non-metric units. *E.g.,*"feet" |
      | meters                              | m             | |
      | miles                               | mi            | If space permits, spell out non-metric units. *E.g.,*"miles" |
      | kilometers                          | km            | |
      | east (of)                           | E             | |
      | west (of)                           | W             | |
      | north (of)                          | N             | |
      | south (of)                          | S             | |
      | northeast (of)                      | NE            | |
      | northwest (of)                      | NW            | |
      | southeast (of)                      | SE            | |
      | southwest (of)                      | SW            | |
      | approximately, about, near, *circa* | ca.           | |
      | Highway                             | Hwy.          | Only as part of a proper noun (e.g., "Hwy. 1", but not "on the highway").|
      | Route                               | Rte.          | Only as part of a proper noun (e.g., "Rte. 66"). |
      | Provincia, Province                 | Prov.         | |
      | Departmento                         | Depto.        | |
      | Road                                | Rd.           | Only as part of a proper noun (e.g., "Sunset Rd.", but not "on the road" or "by road"). |
      | Mount                               | Mt.           | Only as part of proper noun in which it is spelled out (e.g., "Mount Holyoke"). |
      | Mountains                           | Mts.          | Only as part of a proper noun (e.g., Rocky Mts., but not "in the mountains N Lake Tahoe"). |
      | Number, NÀômero                     | No.           | |
      | Avenue                              | Ave.          | |
      | Boulevard                           | Blvd.         | |
      | United States                       | U.S.          | e.g., U. S. Forest Service |
      | University of California            | U.C.          | Should be followed by a modifier, e.g., U.C. Berkeley |
      | Doctor                              | Dr.           | e.g., Dr. Pearson’s house. Do not use for "Drive" (e.g., "Sunset Drive"). |





## Elevations

```

Locality . Maximum_Elevation

Locality . Minimum_Elevation

NUMBER null



Locality . Orig_Elev_Units VARCHAR2 (2) null

ctorig_elev_units

```

 are a height above mean sea level.  If elevation data are
part of the verbatim locality, they should be entered into Minimum
Elevation, Maximum Elevation, and Elevation Units (ft, m).  If the
Verbatim Locality contains a range for an elevation, e.g., 500-600 ft,
these values should be entered into the minimum and maximum elevation
fields, respectively.  If a single elevation is given in Verbatim
Locality, put that value in both the minimum and maximum elevation
fields.




## Depths


```

Locality . Max_Depth

Locality . Min_Depth

NUMBER null



Locality . Depth_Units VARCHAR2 (2) null

ctdepth_units

```

 are a distance below the surface of a body of water.  The
body of water may or may not be at sea level, *e.g.,* a mountain lake. 
If depth data are part of the verbatim locality, they should be entered
three fields for elevation: Minimum Depth, Maximum Depth, and Depth
Units (ft, m).  If the verbatim locality contains a depth range, e.g.,
500-600 ft, these values should be entered into the minimum and maximum
depth fields, respectively.  If a single depth is given in the verbatim
locality, put that value in both the minimum and maximum elevation
fields.



Deprecated:~~**Township, Range, and Section (TRS)** information is sometimes given
for localities.  If TRS data are part of the Verbatim Locality, they
should be entered into the TRS fields associated with Specific Locality
in the database.  Legal descriptions to 1 mile square sections have 4
parts: the Meridian, Range, Township and Section.  Note that an official
legal description is always written from the smallest scale to the
largest.  For example, the NW1/4 SE1/4, sec. 12, T11N, R15E, San
Bernardino Meridian is the northwest quarter of the southeast quarter of
section 12, Township 11 North, Range 15 East, San Bernardino Meridian. 
This example describes a square 1/16th of a mile on each side. 
Collectors often neglect the Meridian in TRS data, and we do not store
this information in the database because it can usually be inferred from
the state and county.  There are 6 fields in the database to accommodate
TRS data: 1) Township, 2) Township Direction, 3) Range, 4) Range
Direction, 5) Section, and 6) Part.  In the above example, the data
would be entered as:~~

1.  ~~Township = 11~~
2.  ~~Township Direction = N~~
3.  ~~Range = 15~~
4.  ~~Range Direction = E~~
5.  ~~Section = 12~~
6.  ~~NW1/4 SE1/4 (variations on section part may be: SE 1/4, "western
    half," NW corner, etc.)~~

A thorough description of TRS data, along with a tool to translate them
to latitude and longitude can be found at the following URL:

[www.esg.montana.edu/gl/trs-data.html](http://www.esg.montana.edu/gl/trs-data.html).


# Coordinates



The assigning of latitudes and longitudes to verbal
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
optional. Collecting event coordinates are "verbatim" and should reflect
some data associated with specimen events. Locality coordinates are part
of georeferences, and may be standardizations or corrections of, or
additions to verbatim coordinates.

Any locality has zero or one coordinate assertions. "Unaccepted
coordinates" are handled by having multiple specimen events referencing
multiple localities.

Data Entry has (for brevity) one place for coordinate information, and
these data are stored as both verbatim and locality coordinates. Events
and localities may be pre-made and selected when these limitations
prevent accurately representing the data.



## Original Units

`collecting_event . Orig_Lat_long_Units VARCHAR(20) null`

[`ctlat_long_units`](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLAT_LONG_UNITS)

`DarwinCore2=VerbatimCoordinateSystem`

 for geographic coordinates vary with the source of
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
the original data.


## (Geodetic) Datum

`Collecting_Event . Datum VARCHAR(40) null`

[`ctdatum`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctdatum)

`DarwinCore2=GeodeticDatum`


 The geodetic datum to which the latitude and longitude refer.
A geodetic datum describes the size, shape, origin, and orientation of a
coordinate system for mapping the earth. Latitude and longitude data
referenced to the wrong datum can result in positional errors of
hundreds of meters. Therefore, when providing latitude and longitude
data, it is important to know from which datum those data are derived.
Most GPS units allow you to select the geodetic data from which its
coordinates will be determined (default usually set to WGS84, but this
should be checked in the field). Maps and gazetteers generally provide
this information as well.


## Reference Source

`Locality . GEOREFERENCE_SOURCE VARCHAR(255) not null`

[`ctGEOREFERENCE_SOURCE`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctGEOREFERENCE_SOURCE "Georefrence Source")

`DarwinCore2=GeoreferenceSources`


 refers to the source(s) of the coordinates and not
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



## Georeference Method

`Locality.GEOREFERENCE_PROTOCOL VARCHAR(40) not null`

[`ctGEOREFERENCE_PROTOCOL`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctGEOREFERENCE_PROTOCOL "GEOREFERENCE_PROTOCOL")


 is the protocol used to obtain the values for
the coordinates and the measure of precision. Different methods and
tools have been produced, and are sometimes revised, and these
differences can produce different results.  The
[vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctgeorefmethod "Georeference Method")
for this field is controlled.


## Maximum Uncertainty Distance

`Lat_Long . Max_Error_Distance NUMBER null`

`DarwinCore2=CoordinateUncertaintyInMeters`


`Lat_Long . Max_Error_Units VARCHAR2(2) null`

[`ctlat_long_error_units`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlat_long_error_units "Distance Units")


 is the upper limit of the horizontal
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
{Dec_Lat=12,Dec_Long=34} is precisely the same point as
{Dec_Lat=12.000000000000000000000000000000,Dec_Long=34.000000000000000000000000000000}.
Make no assumptions of coordinate error or "size" (all coordinates
describe a point) based on anything other than asserted maximum error.

For most usage, including exportation to federated portals, the value
for Maximum Uncertainty is converted from the original units (recorded
here) to the value in meters.


~~## Determiner

`Lat_Long . Determined_By_Agent_id INT not null`


 is the
[agent](../documentation/agent)
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
accepted determination.~~

## Determination Date

`Lat_Long . Determined_Date DATETIME null`

 is the [ISO8601](../documentation/dates/) date that
the determination was made. Entry/editing forms load with the current
date as a default for new records.
~~

## Verification Status

`Lat_Long . VerificationStatus VARCHAR(40) not null`

[`ctverificationstatus`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctverificationstatus "Verification Status")

`DarwinCore2=GeoreferenceVerificationStatus`


 A categorical description of the extent to
which the georeference has been verified to represent the location where
the specimen or observation was collected. 
[Vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctverificationstatus "Verification Status")
is controlled.

"Verified by collector" indicates that the person who removed the
specimen from nature has looked at the coordinates and uncertainty
represented on an appropriately scaled map, and believes that these data
are accurate and that the represented uncertainty is as small as
possible.



~~## Accepted?

`Lat_Long . Accepted_Lat_Long_fg TINYINT not null`

There can be more than one georeferencing determination
per locality but only the accepted determination is routinely displayed.
You can revert to an earlier determination by changing its *accepted*
flag from "no" to "yes."~~

## Remarks

`Lat_Long . Lat_Long_Remarks VARCHAR2(4000) null`

`DarwinCore2=GeoreferenceRemarks`


 about the spatial description determination, explaining
assumptions made in addition or opposition to the those formalized in
the method referred to in [Georeference Method](#georefmethod).


## NoGeorefBecause

`Locality . NogeorefbecauseVARCHAR2(255) null`

 is should always be `NULL` for localities with
coordinate determinations.  Otherwise, it may be used to indicate
problems with georeferencing the locality, resources needed to
georeference, or anything else about the lack of coordinate
determinations.



## WKT Polygon

 provides for a [well-known
text](https://en.wikipedia.org/wiki/Well-known_text) shape associated
with locality data.


## Edit Locality Form

Localities used by "verified by…." verificationstatus values may not be
edited. If you don’t understand the giant bright red box, please use a
contact link.

Many things are paired or dependant. Min, max, and units must be given
together for elevation and depth. Coordinates must have datum, source,
and protocol. Error cannot exist without coordinates. Fieldset labels on
the form will change as form values change to help inform you of these
associations.

All coordinates are stored as DD.ddd format. (Verbatim Coordinates are
an attribute of Collecting Events.) The form will make conversions.

The webservice data pane has documentation inline. Read it.
