---
title: List of Collections and their Taxonomy Sources
layout: default_toc
author: Dusty McDonald, Teresa J. Mayfield-Meyer
date: 2021-12-16
---
# List of Collections and their Taxonomy Sources

This query provides a list of the collections in Arctos and their taxonomic sources in order of preference.

## GitHub Issue
This query was created as a response to this Github Issue - <a href="https://github.com/ArctosDB/arctos/issues/4201" target="_blank">Issue #4201</a>

## Code
Copy the code below and paste it into <a href="https://arctos.database.museum/tools/userSQL.cfm" target="_blank">Reports/Services > Write SQL</a> in Arctos to repeat this query

```select guid_prefix,string_agg(source,'|' order by preference_order) from collection left outer join collection_taxonomy_source on collection.collection_id=collection_taxonomy_source.collection_id group by guid_prefix order by guid_prefix```
