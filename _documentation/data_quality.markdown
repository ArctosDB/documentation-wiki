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
[Dates must be in the ISO format](https://handbook.arctosdb.org/documentation/dates.html). Future dates of collection (dates  that fall after the current date) are not allowed. End dates must be after begin dates anywhere there are two dates provided.

### Nonprinting Characters
No fields may include a non-printing character, leading spaces, or trailing spaces.

### Catalog Numbers
Catalog numbers must match the expected format for the collection and may not already exist in Arctos.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**
Collections using the integer catalog number format can leave catalog number blank and Arctos will assign the next available integer catalog number to the record as it is loaded.

### Accession
Every record must be associated with a pre-exiting accesion. 

### Agents
Any field that accepts an agent must include a value that matches exactly one Agent in Arctos. This includes collectors, preparators, creators, identification determiners, attribute determiners, participants in transactions and publications, and creators of media.

### Code Tables
Arctos has a published list of acceptable terms for many fields [Code Tables](https://arctos.database.museum/info/ctDocumentation.cfm). Any field that accepts values from any of these code tables, must match a term in the table that is accepted by the collection in which the record is being entered.

### Identification (Taxon Names)
Identifications in Arctos can be made in [several formats](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula), however, they all must include a reference to at least one term from the [Taxon Name Table](https://arctos.database.museum/taxonomy.cfm). This table is maintained by Arctos Operators with manage_taxonomy permissions and is not guaranteed to exclude misspellings or errors, but when these are discovered, there are paths for linking poorly formatted names to the correct version and/or quaratining such names from use while still allowing them to be present for the purposes of search and discoverability.

### Higher Geography
Higher geography in Arctos is a controlled vocabulary composed of terms from GADM and IHO World Seas. Higher geography must match a term in this vocabulary.

### Elevation and Depth
Lowest elevation or depth cannot be more than highest.

### Georeference
Datum must be supplied with coordinates.

## Data Quality Checks

### Agents
1. Agent pages include a list of potential duplicates.
