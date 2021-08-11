---
title: Taxon Names in use by a Collection that have no Classification
layout: default_toc
author: Dusty McDonald, Teresa J. Mayfield-Meyer
date: 2021-08-10
---
# Taxon Names in use by a Collection that have no Classification

This query provides a list of the taxon names) that are used by a collection that do not have an associated classification in a local Arctos source.

## GitHub Issue
This query was created as a response to this Github Issue - <a href="https://github.com/ArctosDB/arctos/issues/1894" target="_blank">Issue #1894</a>

## Code
Copy the code below and paste it into <a href="https://arctos.database.museum/tools/userSQL.cfm" target="_blank">Reports/Services > Write SQL</a> in Arctos to repeat this query

### Edit Required
Be sure to change **GUID Prefix** text to the GUID Prefix of the collection of interest (e.g. for MSB Birds change to MSB:Bird)

```
select distinct scientific_name from flat where guid_prefix='GUID Prefix' and
phylclass is null and
kingdom is null and
phylum is null and
phylorder is null and
family is null and
genus is null and
species is null and
subspecies is null and
author_text is null and
nomenclatural_code is null and
infraspecific_rank is null and
subfamily is null and
tribe is null and
subtribe is null
```
