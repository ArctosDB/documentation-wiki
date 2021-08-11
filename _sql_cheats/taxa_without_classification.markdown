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

```select distinct
 taxon_name.scientific_name
from
  identification_taxonomy,
  identification,
  cataloged_item,
  collection,
  taxon_name
where
  identification_taxonomy.identification_id=identification.identification_id and
  identification.collection_object_id=cataloged_item.collection_object_id and 
  cataloged_item.collection_id=collection.collection_id and
  identification_taxonomy.taxon_name_id=taxon_name.taxon_name_id and
  collection.guid_prefix='GUID Prefix' and
  taxon_name.taxon_name_id not in 
  (select taxon_name_id from taxon_term where 
    taxon_term.taxon_name_id = taxon_name.taxon_name_id)
```
