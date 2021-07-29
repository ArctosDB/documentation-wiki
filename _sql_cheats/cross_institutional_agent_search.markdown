---
title: Cross Institutional Agent Search
layout: default_toc
author: Dusty McDonald, Emily Braker, Teresa J. Mayfield-Meyer
date: 2021-07-29
---
# Cross-institutional Agent Search

This query provides a list of the agent(s) associated with more than 20 GUID Prefixes in Arctos.

## GitHub Issue
This query was created as a response to this Github Issue - <a href="https://github.com/ArctosDB/arctos/issues/3781" target="_blank">Issue #3781</a>

## Code
Copy the code below and paste it into <a href="https://arctos.database.museum/tools/userSQL.cfm" target="_blank">Reports/Services > Write SQL</a> in Arctos to repeat this query

```select 
  agent_id,
  count(distinct(guid_prefix)) number_columns
from
  collector
  inner join CATALOGED_ITEM on collector.collection_object_id=CATALOGED_ITEM.collection_object_id
  inner join collection on CATALOGED_ITEM.collection_id=collection.collection_id
group by agent_id
having count(distinct(guid_prefix))  > 20
order by count(distinct(guid_prefix))```
