---
title: Pre-Bulkloader
layout: default_toc
---

The pre-bulkloader is a specimen data cleanup tool.

Data must first be transformed into Arctos Specimen Bulkloader format with proper column names. http://handbook.arctosdb.org/documentation/bulkloader.html

....

{need documentation here}

...

# Correction and Repatriation

After the status has changed to init_pull_complete, several tables will be available for download and correction.

## Agent

pre_bulk_agent will contain two columns: AGENT_NAME and SHOULDBE. These data come from unique values in all agent columns.

Multi-agent strings ("You and Me") must be dealt with using other tools.

Once each AGENT_NAME represents a single entity, a "translation" should be entered in the SHOULDBE column.

| AGENT_NAME        | SHOULDBE           | explanation  |
| ------------- |-------------| -----|
| Guy, Some      | Some Guy | Formatting Agents according to the [Agent Creation Guidelines]http://handbook.arctosdb.org/documentation/agent.html#creating--maintaining-agents) now will save some work later on. |
| S. Guy      | Some Guy  |  Merging alternate names now will save some work later on. If there's reason to suspect that this is NOT "Some Guy" it may be best to pre-create the agents with a "not the same as" relationship. |
| Some Guy | Some Guy      |   Most records will probably be as good as they can be made at this point, and just need copy/pasted from AGENT_NAME to SHOULDBE, which will result in no changes. |

