---
title: Collector Search for a Single Collection
layout: default_toc
author: Dusty McDonald, Phyllis Sharp, Teresa J. Mayfield-Meyer
date: 2021-09-20
---
# Institutional Collector Agent Search

This query provides a list of the agent(s) associated with a specific collection in Arctos.

## GitHub Issue
This query was created as a response to this Github Issue - <a href="https://github.com/ArctosDB/arctos/issues/3945#issue-1000117365" target="_blank">Issue #3945</a>

## Code
Copy the code below and paste it into <a href="https://arctos.database.museum/tools/userSQL.cfm" target="_blank">Reports/Services > Write SQL</a> in Arctos to repeat this query

### Instructions
Replace 'DMNS:Inv' with the GUID prefix for the collection of interest.

```
 select
  preferred_agent_name,
  agent_remarks,
  agent_type,
  count(distinct(cataloged_item.collection_object_id)) reccount
from
  agent
  inner join collector on agent.agent_id=collector.agent_id
  inner join cataloged_item on collector.collection_object_id=cataloged_item.collection_object_id
  inner join collection on cataloged_item.collection_id=collection.collection_id
where
  guid_prefix='DMNS:Inv'
group by 
  preferred_agent_name,
  agent_remarks,
  agent_type
  ```
