---
title: Find catalog records with unresolvable identifier relationships
layout: default_toc
author: Dusty McDonald, Teresa J. Mayfield-Meyer
date: 2021-11-18
---
# Institutional Collector Agent Search

This query provides a list of catalog records with unresolvable other identifier relationships.

## GitHub Issue
This query was created as a response to this Github Issue - <a href="https://github.com/ArctosDB/arctos/issues/2277#issuecomment-535607332" target="_blank">Issue #3945</a>

## Code
Copy the code below and paste it into <a href="https://arctos.database.museum/tools/userSQL.cfm" target="_blank">Reports/Services > Write SQL</a> in Arctos to repeat this query

### Instructions
No substitutions are required. This query finds unresolved identifier relationships for all collections

```
 select 
  guid,
  CTCOLL_OTHER_ID_TYPE.other_id_type,
  display_value,
  ID_REFERENCES 
from 
  flat,
  coll_obj_other_id_num,
  CTCOLL_OTHER_ID_TYPE 
where 
  flat.collection_object_id=coll_obj_other_id_num.collection_object_id and 
  coll_obj_other_id_num.other_id_type=CTCOLL_OTHER_ID_TYPE.other_id_type and 
  ID_REFERENCES!='self' and 
  base_url is null
order by
  guid
  ```
