# Locality

<div class="anchors">

<div class="anchortitle">

Concepts

</div>

[Locality Nickname](#locality_name)\
[specific\_locality](#specific_locality)\
[elevation](#elevation)\
[depth](#depth)\
[trs\_data](#trs_data)\
[nogeorefbecause](#nogeorefbecause)\
[WKT Polygon](#wkt)

<div class="anchortitle">

Tools

</div>

[Edit Form](#editlocality)

</div>

A locality is a specific place associated with one or more [Collecting
Events](collecting-event).  Ultimately, each locality should be a unique
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
applied to a single locality even though only the “accepted”
determination is routinely displayed.  Some caveats:

-   A locality documents one *or more* collecting events.
-   Separate but similar localities may differ only in the extent of
    their respective errors.  For example, if the specific locality
    “Barrow” is given for a lemming, it would be reasonable to assume
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

[](){.infoLink}

Locality Nickname is a globally-unique human-readable “locality ID”
commonly used to unambiguously associate one or more specimens to a
locality.

[](){.infoLink}

<div class="fldDef">

Locality . Spec\_Locality\
VARCHAR2 (255) null

</div>

**Specific Locality** refers to the locality from which the specimen was
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
    Specific\
    Locality would be appropriate. For example, collecting events on the
    high seas\
    which are specified by geographic latitude and longitude.

    -   **Example:** North Pacific Ocean, 45 52′ 24″ N, 165 21′ 48″ W

    Or a collecting event on an island that is specified in the
    Higher Geography.

    -   **Example:** USA, Alaska, Petersburg quad, Thorne Island

    In these examples, as well as in records for which appropriate data
    are missing, the correct value for Specific Locality is, “**No
    specific locality recorded.**”\
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
    immediately by the obsolete name in parentheses after an “=”.
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
-   Put a “0” before the decimal in distances between 0 and 1 units
    (e.g., 0.5 mi, 0.75 km).
-   Put a period after an abbreviation unless it is a direction or a
    unit of measure (e.g., mi, N, yds, etc.).
    -   **Example: ** 1 mi N junction of Hwy. 580 and Hwy. 80
    -   **Not:**  1 mi. N. jct. Hwys 580 & 80
-   Do not put a period at the end of the specific locality except as
    part of an abbreviation.
-   Include parentheses when giving a description such as “by road” or
    “by air,” and place the parenthetical between the direction and the
    named place that it modifies.
    -   **Example:**  1 mi N (by road) Berkeley
-   Capitalize “Junction” only for proper names. When not a proper noun,
    “junction” should be spelled out and followed by “with” or “of.”
    -   **Example 1:**  10 km S junction of Hwy. 1 and Hwy. 5
    -   **Example 2:**  junction of Strawberry Creek with Oxford Ave.
-   Use only the following abbreviations:\
      Word or phrase                        Abbreviation   Comment
      ------------------------------------- -------------- --------------------------------------------------------------------------------------------
      yards                                 yds            If space permits, spell out non-metric units. *E.g.,*“yards”
      feet                                  ft             If space permits, spell out non-metric units. *E.g.,*“feet”
      meters                                m              
      miles                                 mi             If space permits, spell out non-metric units. *E.g.,*“miles”
      kilometers                            km             
      east (of)                             E              
      west (of)                             W              
      north (of)                            N              
      south (of)                            S              
      northeast (of)                        NE             
      northwest (of)                        NW             
      southeast (of)                        SE             
      southwest (of)                        SW             
      approximately, about, near, *circa*   ca.            
      Highway                               Hwy.           Only as part of a proper noun (e.g., “Hwy. 1”, but not “on the highway”).
      Route                                 Rte.           Only as part of a proper noun (e.g., “Rte. 66”).
      Provincia, Province                   Prov.          
      Departmento                           Depto.         
      Road                                  Rd.            Only as part of a proper noun (e.g., “Sunset Rd.”, but not “on the road” or “by road”).
      Mount                                 Mt.            Only as part of proper noun in which it is spelled out (e.g., “Mount Holyoke”).
      Mountains                             Mts.           Only as part of a proper noun (e.g., Rocky Mts., but not “in the mountains N Lake Tahoe”).
      Number, NÀômero                       No.            
      Avenue                                Ave.           
      Boulevard                             Blvd.          
      United States                         U.S.           e.g., U. S. Forest Service
      University of California              U.C.           Should be followed by a modifier, e.g., U.C. Berkeley
      Doctor                                Dr.            e.g., Dr. Pearson’s house. Do not use for “Drive” (e.g., “Sunset Drive”).

[](#top){.infoLink}

<div class="fldDef">

Locality . Maximum\_Elevation\
Locality . Minimum\_Elevation\
NUMBER null\
– – –\
Locality . Orig\_Elev\_Units\
VARCHAR2 (2) null\
ctorig\_elev\_units

</div>

**Elevations** are a height above mean sea level.  If elevation data are
part of the verbatim locality, they should be entered into Minimum
Elevation, Maximum Elevation, and Elevation Units (ft, m).  If the
Verbatim Locality contains a range for an elevation, e.g., 500-600 ft,
these values should be entered into the minimum and maximum elevation
fields, respectively.  If a single elevation is given in Verbatim
Locality, put that value in both the minimum and maximum elevation
fields.\
[](#top){.infoLink}

<div class="fldDef">

Locality . Max\_Depth\
Locality . Min\_Depth\
NUMBER null\
– – –\
Locality . Depth\_Units\
VARCHAR2 (2) null\
ctdepth\_units

</div>

**Depths** are a distance below the surface of a body of water.  The
body of water may or may not be at sea level, *e.g.,* a mountain lake. 
If depth data are part of the verbatim locality, they should be entered
three fields for elevation: Minimum Depth, Maximum Depth, and Depth
Units (ft, m).  If the verbatim locality contains a depth range, e.g.,
500-600 ft, these values should be entered into the minimum and maximum
depth fields, respectively.  If a single depth is given in the verbatim
locality, put that value in both the minimum and maximum elevation
fields.

[](#top){.infoLink}

~~**Township, Range, and Section (TRS)** information is sometimes given
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
6.  ~~NW1/4 SE1/4 (variations on section part may be: SE 1/4, “western
    half,” NW corner, etc.)~~

A thorough description of TRS data, along with a tool to translate them
to latitude and longitude can be found at the following URL:\
[www.esg.montana.edu/gl/trs-data.html](http://www.esg.montana.edu/gl/trs-data.html).

<div class="fldDef">

Locality . NogeorefbecauseVARCHAR2(255) null

</div>

[](#top){.infoLink}

**NoGeorefBecause** is should always be NULL for localities with
coordinate determinations.  Otherwise, it may be used to indicate
problems with georeferencing the locality, resources needed to
georeference, or anything else about the lack of coordinate
determinations.\
[](#top){.infoLink}

**WKT Polygon** provides for a [well-known
text](https://en.wikipedia.org/wiki/Well-known_text) shape associated
with locality data.

[]()

Edit Locality Form
------------------

Localities used by “verified by….” verificationstatus values may not be
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
