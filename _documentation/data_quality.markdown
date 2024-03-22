---
title: Data Quality
author: DLM, Teresa J Mayfield-Meyer
date: 2024-03-22
layout: default_toc
---

# Data Quality Checks and Tools

Arctos includes built-in checks and tools for creating and maintaining high quality data. Some tools prevent the addition of low quality data and others detect problems with data after it has been entered. This document provides an overview of the data quality checks and tools available.

## Data Entry Checks

Checks at the point of data entry occur in two places depending upon the data. First is at the point of entry. When using the single form data entry or bulkloader, the following checks occur at the point of data entry and must be resolved before a record can be saved:

### Dates
[Dates must be in the ISO format](https://handbook.arctosdb.org/documentation/dates.html). End dates must be after begin dates anywhere there are two dates provided.

* [iDigBio Data Quality Toolkit: Date hasn't happened yet](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Date_Hasn't_Happened_Yet)
    * Future dates of collection (dates that fall after the current date) are not allowed.
* [iDigBio Data Quality Toolkit: Date is suspiciously old](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Date_is_Suspiciously_Old)
    *  Many legitimate very old dates exist, however a date of collection or identification before the birth date of the collector or determiner will trigger a data quality notification in Arctos.
* [iDigBio Data Quality Toolkit: Identified date is earlier than Collected date}(https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Identified_Date_Earlier_than_Collected_Date)
    *   Arctos supports more than collecting, so this situation may legitimately exist (something was identified in an observation prior to being collected), however, there is a curatorial report that flags this situation for review.
* [iDigBio Data Quality Toolkit: Year, Month, and Day values do not match date](https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Year,_Month,_and_Day_Values_Do_Not_Match_Date)
   *   Components are extracted on demand, never stored.
 
   
### Nonprinting Characters
No fields may include a non-printing character, leading spaces, or trailing spaces.

### Catalog Numbers
Catalog numbers must match the expected format for the collection and may not already exist in Arctos.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**
Collections using the integer catalog number format can leave catalog number blank and Arctos will assign the next available integer catalog number to the record as it is loaded.

* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Duplicate_Catalog_Numbers

### Accession
Every record must be associated with a pre-exiting accesion. 

### Agents
Any field that accepts an agent must include a value that matches exactly one Agent in Arctos. This includes collectors, preparators, creators, identification determiners, attribute determiners, participants in transactions and publications, and creators of media.

### Code Tables
Arctos has a published list of acceptable terms for many fields [Code Tables](https://arctos.database.museum/info/ctDocumentation.cfm). Any field that accepts values from any of these code tables, must match a term in the table that is accepted by the collection in which the record is being entered.

### Identification (Taxon Names)
Identifications in Arctos can be made in [several formats](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula), however, they all must include a reference to at least one term from the [Taxon Name Table](https://arctos.database.museum/taxonomy.cfm). This table is maintained by Arctos Operators with manage_taxonomy permissions and is not guaranteed to exclude misspellings or errors, but when these are discovered, there are paths for linking poorly formatted names to the correct version and/or quaratining such names from use while still allowing them to be present for the purposes of search and discoverability.

### Higher Geography
Higher geography in Arctos is a controlled vocabulary composed of terms from GADM and IHO World Seas supported by shapes. Higher geography must match a term in this vocabulary.


-- Elevation is Unlikely

### Elevation and Depth
Lowest elevation or depth cannot be more than highest. Values are constrained.

### Georeference
Datum must be supplied with coordinates.

## Data Quality Checks

### Agents
1. Agent pages include a list of potential duplicates.





 
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Coordinates_are_Zero
    * Such a place exists....
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Coordinates_Do_Not_Fall_Within_Named_Geographic_Unit
    * There's a report, collections rejected enforcement
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Georeference_Metadata_with_no_Associated_Georeference
   * not possible
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Elevation_is_Unlikely
      * values are constrained

* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Improperly_Negated_Latitudes/Longitudes
    * will appear in inappropriate geography report
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Invalid_Coordinates
    * datatyped, not possible
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Lower_Geography_Values_are_Provided,_but_No_Higher_Geography
    * Possible and often desirable - eg nontranscribed GPS data might be seen as incorrect if forced into a geography shape
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Minimum_and_Maximum_Elevation_Values_Mismatched
    * not possible
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Mismatched_Country_and_CountryCode_Values
    * countrycode isn't part of Arctos (because adding it would in many cases introduce unnecessary ambiguity)
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Mismatched_Geographic_Terms
    * not possible, geography are data objects not whatever nightmare would lead to this!
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Missing_Geodetic_Datum
    * add spatial data are converted to WGS84 and datum is explicitly provided. Input datum is also retained.
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Missing_Latitudes/Longitudes
    * coordinates are typed, this is not possible
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Misspelled_Geographic_Unit_Names
    * geography is authority-based, so any "misspellings" would be intentionally matching the relevant authority
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Misspelled_or_Invalid_Taxonomic_Names
    * there's a quarantine system
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Unknown_Higher_Taxonomy
    * it happens, but Arctos pulls data from GlobalNames so records are generally still discoverable even when the collections have done unpredictable things
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Incorrect_Character_Encodings
    * is not possible
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Incorrect_Line_Endings
    * not possible
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Invalid_Individual_Count
    * this is a curatorial assertion, there are no constraints
* https://www.idigbio.org/wiki/index.php/Data_Quality_Toolkit_2024#Non-standardized_BasisOfRecord_Values
    * this is authority-based
