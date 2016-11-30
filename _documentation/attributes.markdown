---
title: Attributes
layout: default_toc
---

# Attributes


Attributes are descriptive (usually biological) characteristics of
cataloged items (which are often biological individuals) such as
measurements, weight, age, and sex.  Like other determinations
(opinions) in Arctos, Attributes have a determiner, a determination
date, and a determination method. Because they are treated as
determinations, a record may have any number of similar and even
contradictory Attributes.

Attributes, many of which use controlled vocabularies with many values
and many individual definitions, are largely documented within tables
within Arctos, as opposed to being documented here.  The appropriate
units for numeric Attributes, and the appropriate vocabulary for
Attributes with controlled vocabularies are set by a master "[code table
of code
tables](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES)." 
This can be a useful node for exploring these values outside of the
forms in which the vocabularies are used.


## Attribute Name

is the proper name of an Attribute. These should be
unambiguous and match their usage in scientific literature as closely as
possible.  These names of Attributes are listed, defined, and linked to
particular types of collections, in an another [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type).

-   [ctAttribute_Type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type)
    lists all Attribute names, collection types, and definitions of what
    the Attributes are.
-   [ctAttribute_Code_Tables](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES)
    ("code table of code tables) lists all Attributes that have
    controlled vocabulary and associates them with specific tables that
    control their specific vocabularies.


`Attributes . Attribute_Type VARCHAR(60) not null`

[`ctAttribute_Type`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type)


## Attribute Value:

Attributes have a Value, and those values are of three types:

-   **numeric** (with [Units](#units)) – These are measurements and
    meristic values that are subject to numeric operators, such as
    "greater than" (&gt;) and "less than" (&lt;).  Only numbers
    (integers and/or decimal fractions) can be entered.
    ([Convert](#conversion) "1 1/2 inches" to "1.5 inches.")
-   **controlled vocabulary** – These are Attributes for which there are
    a limited number of possible states, *e.g.*, the sex of
    the individual.
-   **uncontrolled vocabulary** – These are often relatively subjective
    Attributes, and the values are anything that can be expressed
    in text. Examples include the Attributes "Colors" and "Body
    Condition."

`Attributes . Attribute_Value VARCHAR(255) not null`

[`ct_Attribute_Code_Tables`](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES)


Some examples:

  |Attribute Name |  Value                              |Units|
  |---------------|-------------------------------------|-----|
  |Total Length   |"123.4"                              |millimeters|
  |Age Class      |"adult" (controlled text)            |`null`|
  |Colors         |"reddish feet" (uncontrolled text)   |`null`|

The appropriate units for particular numeric Attributes, and the
appropriate vocabulary for controlled vocabulary are set by a by a
"[code table of code
tables](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES)."


## Conversion of fractional values

Numeric values are sometimes
reported in the numerator/denominator format.  For example, total length
= 7 3/16 inches.  Such values must be converted to decimal fractions in
order to be represented as a numeric data type.  In making such
conversions, avoid adding unwarranted precision to the value of an
observation.  For example, simply converting 7 3/16 to 7.1875, a value
indicating observation to within a few ten-thousandths of an inch
implies an improbable degree of precision.  Because the measurement was
probably made with a ruler (and not a micrometer) graduated, at best, in
32ths of an inch, the last digits of the value are a spurious artifact
of the calculation and should be rounded off to reflect actual
precision.   Both the 16ths and 32ths on our assumed ruler are smaller
(more precise) than tenths, but larger (less precise) than 100ths, so
there can be no precision beyond the 100ths place.  Therefore we should
round off to 7.19 inches.  Whenever the value of an attribute is
converted (or in any way modified or assumed), the verbatim value should
be given in the [Attribute Remark](#remark).



## Attribute Units

Numeric Attributes have values expressed in units
such as grams, millimeters, and years. Different Attributes are
described in different units, so there are code tables for units of
weight, length, and time.  Numeric Attributes are assigned one of these
code tables in the "[code table of code
tables](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES)."


`Attributes.Attribute_Units VARCHAR(60) null`

[`ctLength_Units`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctlength_units)

[`ctNumeric_Age_Units`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctNumeric_Age_Units)

[`ctWeight_Units`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctWeight_Units)



## Method

is how the Attribute was determined. If the Method can be
logically inferred, it is usually unspecified. Thus, Attributes such as
length measurements are assumed to have been taken with rulers,
calipers, or another standard tool. In such cases, no value is recorded
for Method.

`Attributes.Determination_Method VARCHAR(255) null`


## Remark

is a comment about the Attribute. For example:

-   "Transcribed from collector’s journal."
-   "Weighed after substantial loss of blood."
-   "verbatim: 7 3/16 inches"

`Attributes.Attribute_Remark VARCHAR(255) null`


## Determiner

is the agent that determined the Value of the Attribute.
Many Attributes are determined by either the collector or preparator of
the specimen, but often Attributes are determined at a later time by an
investigator using the specimen. In the many specimen records for which
this data was not recorded, the institution contributing the record has
been used as a default value for Determiner.

`Attributes.Determined_By_Agent_id integer, not null`


## Determined Date

is the [ISO8601](/documentation/dates/) date that
the determination was made. Where this is unknown, the date that the
specimen record was moved into the database has been used as a default
value, meaning essentially that the determination was made before this
time. For many such Attributes, it would be reasonable to record the
date of collection (or, if known, the date of preparation) as a default.
For Attributes which can be re-determined from the existing specimen,
even an imprecise date will provide a chronological order to successive
determinations.

`Attributes . Determined_Date datetime, null`

## Searching with Attributes

You may search for only [Attribute Name](#name) (leave Value and Units
blank) to return specimens that match your other criteria and possess
data for the specified Attribute. Exercising this option unwisely (For
example, searching for all specimens with Attribute ‘sex’ and no other
qualifiers.) can time-out your request.

You can search for Attributes by only value or by only units. For
example:

-   Attribute: Numeric Age
-   Units = "years" (Returns all specimens with a numeric age recorded
    in years.)



-   Attribute: Numeric Age
-   Value = "5" (Returns all specimens with a numeric age of 6 years, 6
    days, etc.

You may set the search operator for Attributes to:

-   `equals`
-   `contains`
-   `greater than`
-   `less than`

`Equals` will find only exact matches. `Contains` will find substring
matches. For example, sex `equals` ‘male’ will find only *male*
specimens; sex `contains` ‘male’ will find both *male* and *fe**male***.


## Searching by Attribute Type

In addition to the above, the interactive Specimen Results Widget will
accept any attribute, with spaces and dashes replaced by underscore, as
a variable. For example, "age class" becomes "age_class."

All attributes (and most other variables) will accept underbar (\_) to
mean "require the field; match any value." For example, "age_class=\_"
will return specimens for which the attribute "age class" exists.

String attributes – those consisting of uncontrolled text and those
consisting of code-table controlled vocabularies – will accept two
prefixes: = and !, meaning "is exactly" and "is not." Unprefixed
attributes are case-insensitive substring matches, and so "male" will
match "male" and "fe**male**."

Numeric attributes – those with code-table controlled units – will
accept prefixes = (exactly), ! (is not), &lt; (less than), &gt; (greater
than), and appropriate units as suffix.  Arctos will guess at unit
suffix, so an exact code-table match is not usually necessary. Units of
both data and criteria are converted (to meters, days, and grams), and
so exact matches may be difficult to obtain. Therefore, numeric
attributes will also accept a range of values in conjunction with units
(format {low value}{dash}{high_value} {units}).

The following examples are illustrative.

  |SearchTerm              |Result|
  |------------------------|-------|
  |age_class=adult         |adult, subadult, ….|
  |age_class==adult        |adult|
  |age_class=!adult        |juvenile, subadult, ….|
  |numeric_age=3           |3 years, 3 seconds, 3 days, …..|
  |numeric_age=!3          |1 years, 5 years, 1 hour, 5 days, …|
  |numeric_ag=3 years      |{value converted to} 1095.726 days|
  |numeric_age=3-5 years   |{value converted to days} BETWEEN 1095.726 and 1826.21 days|

Arctos can convert the  following units to meters:

-   in
-   M
-   METERS
-   METER
-   FT
-   FEET
-   FOOT
-   KM
-   KILOMETER
-   KILOMETERS
-   MM
-   MILLIMETER
-   MILLIMETERS
-   CM
-   CENTIMETER
-   CENTIMETERS
-   MI
-   MILE
-   MILES
-   YD
-   YARD
-   YARDS
-   FM
-   FATHOM
-   FATHOMS

Arctos can convert the  following units to grams:

-   G
-   GRAMS
-   GRAM
-   KG
-   KILOGRAM
-   KILOGRAMS
-   LB
-   POUND
-   POUNDS
-   OZ
-   OUNCE
-   OUNCES

Arctos can convert the  following units to days:

-   D
-   DAY
-   DAYS
-   H
-   HOUR
-   HOURS
-   M
-   MONTH
-   MONTHS
-   WEEK
-   WEEKS
-   YR
-   Y
-   YEAR
-   YEARS
