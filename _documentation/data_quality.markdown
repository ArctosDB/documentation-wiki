---
title: Data Quality
author: DLM, Teresa J Mayfield-Meyer
date: 2024-03-22
layout: default_toc
---

# Arctos Data Quality Checks, Reports, and Tools

Arctos includes built-in checks, reports, and tools for creating and maintaining high quality data. Checks prevent the addition of low quality data and reports and tools detect problems with data after it has been entered. This document provides an overview of the data quality checks, reports, and tools available.

## Data Quality Checks

When using the single record data entry form or bulkloader, the following checks occur at the point of data entry and must be resolved before a record can be saved.

### Dates
[Dates must be in the ISO format](https://handbook.arctosdb.org/documentation/dates.html). End dates must be after begin dates anywhere there are two dates provided. Dates are always entered as a single value. Components (year, month, day, time) are extracted at the time of request, never stored. Future dates of collection (dates that fall after the current date) are not allowed.

* [iDigBio Data Quality Toolkit: Date hasn't happened yet](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Date_Hasn't_Happened_Yet)
* [iDigBio Data Quality Toolkit: Year, Month, and Day values do not match date](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Year,_Month,_and_Day_Values_Do_Not_Match_Date)
   
### Nonprinting Characters
No fields may include a non-printing character, leading spaces, or trailing spaces.

* [iDigBio Data Quality Toolkit: Incorrect character encodings](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Incorrect_Character_Encodings)
* [iDigBio Data Quality Toolkit: Incorrect line endings](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Incorrect_Line_Endings)

### Catalog Numbers
Catalog numbers must match the expected format for the collection and may not already exist in Arctos. Duplicate catalog numbers can not be created within a collection.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**
Collections using the integer catalog number format can leave catalog number blank and Arctos will assign the next available integer catalog number to the record as it is loaded.

* [iDigBio Data Quality Toolkit: Duplicate catalog numbers](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Duplicate_Catalog_Numbers)

### Basis of Record
Basis of record is required in Arctos and must match a controlled vocabulary that includes the terms expected in the DarwinCore Archive prepared for GBIF. Collections can select a preferred value and if left blank during data entry the preferred value will be automatically used.

* [iDigBio Data Quality Toolkit: Non-standardized_BasisOfRecord_Values](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Non-standardized_BasisOfRecord_Values)

### Accession
Every record must be associated with a pre-exiting accesion. 

### Agents
Any field that accepts an agent must include a value that matches exactly one Agent in Arctos. This includes collectors, preparators, creators, identification determiners, attribute determiners, participants in transactions and publications, and creators of media.

### Code Tables
Arctos has a published list of acceptable terms for many fields [Code Tables](https://arctos.database.museum/info/ctDocumentation.cfm). Any field that accepts values from any of these code tables, must match a term in the table that is accepted by the collection in which the record is being entered.

### Identification (Taxon Names)
Identifications in Arctos can be made in [several formats](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula), however, they all must include a reference to at least one term from the [Taxon Name Table](https://arctos.database.museum/taxonomy.cfm). This table is maintained by Arctos Operators with manage_taxonomy permissions and is not guaranteed to exclude misspellings or errors, but when these are discovered, there are paths for linking poorly formatted names to the correct version and/or quaratining such names from use while still allowing them to be present for the purposes of search and discoverability.

* [iDigBio Data Quality Toolkit: Misspelled or invalid taxonomic names](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Misspelled_or_Invalid_Taxonomic_Names)

### Higher Geography
Higher geography in Arctos is a controlled vocabulary composed of terms from GADM and IHO World Seas supported by shapes. Higher geography must match a term in this vocabulary, so any "misspellings" would be intentionally matching the relevant authority.

* [iDigBio Data Quality Toolkit: Misspelled geographic unit names](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Misspelled_Geographic_Unit_Names)

### Elevation and Depth
Lowest elevation or depth cannot be more than highest and elevation values are constrained to avoid elevations or depths not possible on Earth.

* [iDigBio Data Quality Toolkit: Minimum and maximum elevation values mismatched](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Minimum_and_Maximum_Elevation_Values_Mismatched)
* [iDigBio Data Quality Toolkit: Elevation is unlikely](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Elevation_is_Unlikely)

### Georeference
Latitude and longitide must either both be NULL or both include a value.

* [iDigBio Data Quality Toolkit: Missing latitudes/longitudes](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Missing_Latitudes/Longitudes)

Datum must be supplied with coordinates, but cannot be supplied without them. In addition, georeference protocol and georeference error cannot be supplied without coordinates, although coordinates can be supplied without them. All spatial data are converted to WGS84 and datum is explicitly provided. Input datum is also retained.

* [iDigBio Data Quality Toolkit: Missing geodetic datum](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Missing_Geodetic_Datum)
* [iDigBio Data Quality Toolkit: Georeference metadata with no associated georeference](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Georeference_Metadata_with_no_Associated_Georeference)

Coordinate values are datatyped to disallow invalid entries. 

* [iDigBio Data Quality Toolkit: Invalid_Coordinates](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Invalid_Coordinates)

## Data Quality Reports and Tools

### Dates
Many legitimate very old dates exist, however a date of collection or identification before the birth date of the collector or determiner will trigger a data quality notification in Arctos.

* [iDigBio Data Quality Toolkit: Date is suspiciously old](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Date_is_Suspiciously_Old)

Arctos supports more than collecting, so something may legitimately be identified (as in an observation) prior to being collected, however, there is a curatorial report that flags this situation for review.

* [iDigBio Data Quality Toolkit: Identified date is earlier than Collected date](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Identified_Date_Earlier_than_Collected_Date)


### Agents
Agent pages include a list of potential duplicates.

### Locality

Higher geography in Arctos is a controlled vocabulary of data objects associated with spatial polygons. Components are extracted on demand, never stored. Assigned coordinates plus error that do not fall within the higher geography polygon for any location generate a data quality report for all collections using the locality. This clearly highlights improper negation as well as coordinate/geography mismatches.

* [iDigBio Data Quality Toolkit: Lower geography values are provided, but no higher geography](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Lower_Geography_Values_are_Provided,_but_No_Higher_Geography)
* [iDigBio Data Quality Toolkit: Mismatched geographic terms](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Mismatched_Geographic_Terms)
* [iDigBio Data Quality Toolkit: Coordinates do_not fall within the named geographic unit](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Coordinates_Do_Not_Fall_Within_Named_Geographic_Unit)
* [iDigBio Data Quality Toolkit: Improperly negated latitudes/longitudes](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Improperly_Negated_Latitudes/Longitudes)
* [iDigBio Data Quality Toolkit: Coordinates are zero](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Coordinates_are_Zero)
    * Such a place exists and these coordinates are acceptable, however, if they do not fall inside the associated higher geography polygon, a data quality report will be generated.



* [iDigBio Data Quality Toolkit:Mismatched Country and Country Code]https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Mismatched_Country_and_CountryCode_Values)
    * countrycode isn't part of Arctos (because adding it would in many cases introduce unnecessary ambiguity)

### Taxonomy

Taxon pages in Arctos include external validation through comparisons with select taxonomic authorities including the World Register of Marine Species (WoRMS), Encyclopedia of Life (EOL), the Global Biodiversity Information Facility (GBIF) and Wikipedia among others. This tool is also engaged whenever a new name is added to the taxonomic name table to help avoid the addition of mispellings and misused names. The [Taxonomy Gap](https://arctos.database.museum/Reports/flat_taxonomy_gap.cfm) tool in Arctos allows for review of taxonomic classifications with missing terms (Family, Order, etc.) or with no associated local classification. Arctos also pulls data from GlobalNames so records are generally still discoverable even when local taxonomic sources are missing terms or entire classifications.

* [iDigBio Data Quality Toolkit: Unknown higher taxonomy](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Unknown_Higher_Taxonomy)

### Curatorial

#### Individual Count
 Individual count is a curatorial assertion, there are no constraints.

* [iDigBio Data Quality Toolkit: Invalid individual count](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Invalid_Individual_Count)
   
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/data_quality.markdown" target="_blank">here</a>.

