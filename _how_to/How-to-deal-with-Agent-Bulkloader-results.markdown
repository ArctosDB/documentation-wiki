---
title: How To Use the Agent Pre-Bulkloader
layout: default_toc
---
# How To Use the Agent Pre-Bulkloader

Before creating agents, any new agent name should be checked against existing agents in Arctos. For single agents, this can be done through an Agent Search. If you need to check a list of names, then the Agent Pre-Bulkload Tool will hlep you do this in bulk. This tool will only review agents; it will not add or modify existing agents.

## Navigation

Navigation: [Arctos Tools Directory > Agents & Users > Agent: Pre-Bulkload](https://arctos.database.museum/loaders/pre_bulkload_agents.cfm)

<a href="https://handbook.arctosdb.org/documentation/agent.html" target="_blank">Agent Documentation</a>

## How to Interpret the Results

Once the Agent Prebulkloader has processed your agent list you will have a lot of information in the Status Column. Interpreting the statuses can be difficult. Below are some helpful hints for working with the various statuses.

**no problems detected**: This message can arise because both new and existing data are unambiguous, or because the input is nothing like any existing data in Arctos (e.g., because it's horribly mis-spelled!). The latter are deserving of further scrutiny.

**Check for abbreviations and acronyms. Do not create unnecessary variations of `unknown.`**: This is usually attached to low-information names and may usually be ignored, but check that eg., person agents are in fact persons and not groups or organizations.

**FATAL ERROR: duplicate of**: The exact string match of the agent already exists. If the agent seems like the same entity, the row can generally just be deleted - there's nothing to add, the specimens will successfully load against the existing data. If the duplicate seems like a new agent, email us (or use the contact link on any Arctos page) - these must be dealt with on a case-by-case basis.

**FATAL ERROR: {anything except duplicate of...}**: The problem should be clear from the status; fix and re-run.

**possible duplicate ....** - ideally check all of the suggestions in Arctos, make sure you're not creating duplicates, and flag any duplicates you do find. Realistically, check the things that look particularly suspicious. For example, if the new data contain "N. Wood" and a half-dozen "N. {some initial} Wood" agents exist, there will likely not be enough information to come to a defensible conclusion, and simply creating "N. Wood" may be a realistic choice. The situation may become more apparent when specimens are re-attached, at which time creating relationships ("bad duplicate of" or "not the same as") would be appropriate. A "Nathaniel Wood" being suggested as a duplicate of "Nathaniel {some initial} Wood" is much more likely to be a resolvable situation and deserves more scrutiny.

## Needs moved to bulkload agents

If duplicates exist within the file - for example, if "Some Random Agent" and "Some R. Agent" are on two rows and should be the same agent - simply add "Some R. Agent" as an "aka" name (using any available OTHER_NAME_n/OTHER_NAME_TYPE_n pair) of "Some Random Agent" and delete the "Some R. Agent" row (or vice-versa). This will create an agent with a preferred name of "Some Random Agent" and an AKA name of "Some R. Agent." 

To modify a few existing agent agents, simply use the Arctos forms. For example, if you have "Some Random Agent" and "Some R. Agent" has been suggested, you could simply locate the "Some R. Agent" record in Arctos and modify it as necessary. Arctos loads records against all available data, so a new catalog record containing "Some Random Agent" will load to "Some R. Agent" as long as "Some R. Agent" contains alternate name (aka) "Some Random Agent" AND there are no other uses of "Some Random Agent" in any other agent profile.

Batch modifications are possible; consult with a DBA.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-deal-with-Agent-Bulkloader-results.markdown" target="_blank">here</a>.
