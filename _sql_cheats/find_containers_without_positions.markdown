---
title: Find Containers Without Positions
layout: default_toc
author: Dusty McDonald, Chris Conroy, Teresa J. Mayfield-Meyer
date: 2021-11-09
---
# Find all containers of a specific type used by an institution that do not include positions

This query provides a list of containers of a specific type in object tracking for a given institution that do not have positions created.

## GitHub Issue
This query was created as a response to this Github Issue - <a href="https://github.com/ArctosDB/arctos/issues/4072" target="_blank">Issue #4072</a>

## Code
Copy the code below and paste it into <a href="https://arctos.database.museum/tools/userSQL.cfm" target="_blank">Reports/Services > Write SQL</a> in Arctos to repeat this query

### Edit Required
Be sure to change **institution_acronym** text to the acronym for the institution of interest (e.g. for Museum of Southwestern Biology change to MVZ to MSB) and change **container_type** from freezer_box to the container type of interest.

```
select barcode , getcontainerparentage(container_id) from container where institution_acronym ='MVZ' and container_type='freezer box' and number_rows is null;
```
