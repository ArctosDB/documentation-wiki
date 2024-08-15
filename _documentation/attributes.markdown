---
title: Attributes
layout: default_toc
---

# Attributes

Attributes are descriptive, categorical, or quantitative characteristics of cataloged items such as measurements, weight, age, and sex. Like other determinations in Arctos, Attributes have a determiner, a determination date, and a determination method. Because they are treated as determinations, a record may have any number of similar and even contradictory Attributes.

Attributes, many of which use controlled vocabularies with many values and many individual definitions, are largely documented within tables within Arctos, as opposed to being documented here. 


## Attribute Type

attribute_type is the name of an Attribute. These must be unambiguous and well-defined.

These values are controlled by a complex code table, [ctattribute_type table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type), defined below.

## Attribute Value

`Attributes . Attribute_Value VARCHAR2(4000) not null`

Attributes have attribute_value, and those values are of three types:

-   **numeric** (with [Units](#units)) – These are measurements and meristic values that are subject to numeric operators, such as "greater than" (&gt;) and "less than" (&lt;). Only numbers (integers and/or decimal fractions) can be entered. ([Convert](#conversion) "1 1/2 inches" to "1.5 inches.")
-   **controlled vocabulary** – These are Attributes for which there are a limited number of possible states, *e.g.*, the sex of the individual.
-   **uncontrolled vocabulary** – These are often relatively subjective Attributes, and the values are anything that can be expressed in text. Examples include the Attributes "Colors" and "Body Condition."

Some examples:

  |Attribute Name |  Value                              |Units|
  |---------------|-------------------------------------|-----|
  |Total Length   |"123.4"                              |millimeters|
  |Age Class      |"adult" (controlled text)            |`null`|
  |Colors         |"reddish feet" (uncontrolled text)   |`null`|

The appropriate units for particular numeric Attributes, and the
appropriate vocabulary for controlled vocabulary are set by [ctattribute_type table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type).


## Attribute Units


Numeric Attributes have values expressed in units, given in attribute_units.

## Method


determination_method is how the Attribute was determined. 

## Remark


attribute_remark is a place for comments about the Attribute. For example:

-   "Transcribed from collector’s journal."
-   "Weighed after substantial loss of blood."
-   "verbatim: 7 3/16 inches"

## Determiner


determined_by_agent_id is the agent that determined the Value of the Attribute.
Many Attributes are determined by either the collector or preparator of
the specimen, but often Attributes are determined at a later time by an
investigator using the specimen. 

## Determined Date

determined_date is the [ISO8601](/documentation/dates/) date that
the determination was made. 

# Attribute Type Control

Code table [ctattribute_type table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type) controlls the structure and usage of Attributes.

## attribute_type

attribute_type is a unique value which controls and provides attribute type. 

* Attribute types should only be added when they are clearly disambiguated from any existing type.
* Attributes should NOT include any method (including ‘left’, ‘right’, ‘with claw’, ‘from notch’, etc.) either in the term itself or in the description other than to say “add left or right in method” or something similar.
* Attribute Type may only include characters A-Z, 0-9, and space or dash.

## description

Description defines attribute type. This must be an exhaustive, functional definition capable of disambiguating the type from all other types.

## collections

Collections may choose to use an attribute type; such selection is recorded (as an array item) here.

## recommend_for_collection_type

This nonfuntional column facilitates easy collection setup (sort by this, shift-select recommended items).

## search_terms

Provides a way to locate synonyms, inclusions, similarities, etc.

## issue_url

List of relevant Issues. Will be NULL for legacy terms, should contain one item for most terms, and may contain multiple values for terms which have been refined after creation.

## documentation_url 

Any URI which might support or clarify the term.

## value_code_table

Controls acceptable values by referencing a code table. A value here results in a categorical attribute. Categorical attributes may not have units.

## unit_code_table

Controls acceptable units by referencing a code table. A value here results in a numerical attribute. Numerical attributes must have a value which may be cast to numeric.


# Usage Notes

Usage notes.

### Conversion of fractional values

Numeric values are sometimes
reported in the numerator/denominator format. For example, total length
= 7 3/16 inches. Such values must be converted to decimal fractions in
order to be represented as a numeric data type. In making such
conversions, avoid adding unwarranted precision to the value of an
observation. For example, simply converting 7 3/16 to 7.1875, a value
indicating observation to within a few ten-thousandths of an inch
implies an improbable degree of precision. Because the measurement was
probably made with a ruler (and not a micrometer) graduated, at best, in
32ths of an inch, the last digits of the value are a spurious artifact
of the calculation and should be rounded off to reflect actual
precision. Both the 16ths and 32ths on our assumed ruler are smaller
(more precise) than tenths, but larger (less precise) than 100ths, so
there can be no precision beyond the 100ths place. Therefore we should
round off to 7.19 inches. Whenever the value of an attribute is
converted (or in any way modified or assumed), the verbatim value should
be given in the [Attribute Remark](#remark).



## How To

Instructions for doing specifc tasks related to Attributes in Arctos

- [How to Create and Edit Catalog Record Attributes](https://handbook.arctosdb.org/how_to/How-to-Create-and-Edit-Attributes.html)
- [How To Add Geology Attributes to a Locality](https://handbook.arctosdb.org/how_to/How-to-Add-Geology-Attributes-to-a-Locality.html)
- [How To Collect Attributes with a Google Form](https://handbook.arctosdb.org/how_to/How-To-Collect-Attributes-With-A-Google-Form.html)
- [How to Understand Attribute Errors](https://handbook.arctosdb.org/how_to/Understanding-Attribute-Errors.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/attributes.markdown" target="_blank">here</a>.
