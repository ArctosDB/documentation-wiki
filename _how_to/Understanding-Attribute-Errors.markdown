---
title: How To Understand Attribute Errors
author: unknown
layout: default_toc
---
# Understanding Attribute Errors

The various bulkloader-checking tools throw somewhat cryptic error messages when an Attribute does not satisfy database-level requirements. This document serves as a troubleshooting guide.

The problem appears as (part of) LOADED after attempting to load or validate specimen data.

<img width="155" alt="screen shot 2017-01-06 at 10 02 39 am" src="https://cloud.githubusercontent.com/assets/5720791/21727706/73ec3782-d3f7-11e6-9f60-1e220be8b2ee.png">

Attributes are data-driven; the structural and data value requirements depend upon the attribute. Missing data, extraneous data, and incorrectly typed data all lead to failure. Do not exclude the possibility of e.g., something in a UNITS column causing failure in a text-type attribute. Check ALL attribute fields.

<img width="875" alt="screen shot 2017-01-06 at 10 07 14 am" src="https://cloud.githubusercontent.com/assets/5720791/21727822/f39ca26e-d3f7-11e6-9ace-a6ec70e5719b.png">

First, confirm that the attribute itself is correct. Arctos uses bitwise indexes to check, so character case, leading or trailing spaces, or invisible (eg, control) characters are all important. Copying from the data and pasting into your browser's search at [CTATTRIBUTE_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_TYPE) is sufficient to find most errors. Ensure that the attribute is available for use under the collection type in which you're working as well.

Second, check datatype. Attributes may be of three types, all with different data requirements:

1) Free-text (descriptive) attributes may not have units, and will accept any character string as value. Descriptive attributes will NOT appear in [CTATTRIBUTE_CODE_TABLES](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES). An example is attribute "age."

<img width="888" alt="screen shot 2017-01-06 at 10 22 12 am" src="https://cloud.githubusercontent.com/assets/5720791/21728243/060e9676-d3fa-11e6-87d4-c01114c77c89.png">

2) Categorical attributes have a value in the "value code table" column of [CTATTRIBUTE_CODE_TABLES](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES), and clicking that code table name will redirect your browser to appropriate values. Categorical attributes may not have units. An example is attribute "age class," in which all values are contained in [CTAGE_CLASS](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGE_CLASS).

<img width="550" alt="screen shot 2017-01-06 at 10 22 41 am" src="https://cloud.githubusercontent.com/assets/5720791/21728261/18304be2-d3fa-11e6-990a-d4c6d8ebb1bb.png">

3) Numerical attributes have a value in the "units code table" column of [CTATTRIBUTE_CODE_TABLES](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTATTRIBUTE_CODE_TABLES), and that link will direct your browser to acceptable values for units. In all cases, these data require a number (not necessarily integer) in the value column. An example is attribute "numeric age," in which all values are numbers and all units are defined by [CTNUMERIC_AGE_UNITS](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTNUMERIC_AGE_UNITS).

<img width="542" alt="screen shot 2017-01-06 at 10 23 08 am" src="https://cloud.githubusercontent.com/assets/5720791/21728269/26988730-d3fa-11e6-9c46-e256b7f8b22b.png">

Attribute Remarks and Attribute Det Meth are optional fields, only constrained from containing nonprinting characters.

Attribute Date must be an ISO8601 date object.

Attribute Determiner must be an existing Agent.

The example failure above is caused by non-numeric data ("28900 +/- 1700") in a numeric attribute.

<img width="547" alt="screen shot 2017-01-06 at 10 29 03 am" src="https://cloud.githubusercontent.com/assets/5720791/21728412/f90f7854-d3fa-11e6-95d0-01a7693bd727.png">

Datatype controls discoverability. Given an "age" attribute, value is not searchable - users should expect things like "old", "lod" (misspellings), "YoY" (perhaps-cryptic abbreviations), etc. (There is still value in the existence of the attribute; users can know that SOMETHING about age has been asserted.) Given "age class" one can search for categories, but accuracy is limited by the categorical data and whatever precision exists within the categories and their documentation. Given numeric data, units may be converted and the data may be searched using boolean operators - most any query is possible.

Any record may have any number of attributes, and there are several possibilities for proceeding with the example data:

1. Enter the data as a numeric range:
* attribute type='radiometric date' value='27200' units='years'....
* attribute type='radiometric date' value='30600' units='years' ....

2. Create explicit minima and maxima:
* attribute type='minimum radiometric date' value='27200' units='years' ....
* attribute type='maximum radiometric date' value='30600' units='years' ....

3. Convert the data and datatype to text:
* attribute type='radiometric date' value='27200 years' units=NULL ....

(1) and (2) provide comparable searchability, although (2) facilitates slightly more-targeted searching. (3) does not provide for searching by radiometric date, and functions more like a remarks field than a bounding value.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/Understanding-Attribute-Errors.markdown" target="_blank">here</a>.
