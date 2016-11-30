---
title: How To Deal with Agent Bulkloader Results
layout: default_toc
---

This document refers to the output of the validation step of bulkloading agents, which is generally run directly before creation.

The "preferred_name" column is generally a key back to other data (usually specimens) and in almost all cases should NOT be modified independent of any related data.

Status Column Values

**no problems detected**: This message can arise because both new and existing data are unambiguous, or because the input is nothing like any existing data in Arctos (e.g., because it's horribly mis-spelled!). The latter are deserving of further scrutiny.

**Check for abbreviations and acronyms. Do not create unnecessary variations of `unknown.`**: This is usually attached to low-information names and may usually be ignored, but check that eg., person agents are in fact persons and not groups or organizations.

**FATAL ERROR: duplicate of**: The exact string match of the agent already exists. If the agent seems like the same entity, the row can generally just be deleted - there's nothing to add, the specimens will successfully load against the existing data. If the duplicate seems like a new agent, email us (or use the contact link on any Arctos page) - these must be dealt with on a case-by-case basis.

**FATAL ERROR: {anything except duplicate of...}**: The problem should be clear from the status; fix and re-run.

**possible duplicate ....** - ideally check all of the suggestions in Arctos, make sure you're not creating duplicates, and flag any duplicates you do find. Realistically, check the things that look particularly suspicious. For example, if the new data contain "N. Wood" and a half-dozen "N. {some initial} Wood" agents exist, there will likely not be enough information to come to a defensible conclusion, and simply creating "N. Wood" may be a realistic choice. The situation may become more apparent when specimens are re-attached, at which time creating relationships ("bad duplicate of" or "not the same as") would be appropriate. A "Nathaniel Wood" being suggested as a duplicate of "Nathaniel {some initial} Wood" is much more likely to be a resolvable situation and deserves more scrutiny.

This tool will only create agents; it will not modify existing agents.

If duplicates exist within the file - for example, if "Some Random Agent" and "Some R. Agent" are on two rows and should be the same agent - simply add "Some R. Agent" as an "aka" name (using any available OTHER_NAME_n/OTHER_NAME_TYPE_n pair) of "Some Random Agent" and delete the "Some R. Agent" row (or vice-versa). This will create an agent with a preferred name of "Some Random Agent" and an AKA name of "Some R. Agent." Specimens with agents (collector, identifier, etc.) using either string will load to the "Some Random Agent" data object.

To modify a few existing agent agents, simply use the Arctos forms. For example, if you have "Some Random Agent" and "Some R. Agent" has been suggested, you could simply locate the "Some R. Agent" record in Arctos and modify it as necessary. Arctos loads specimens against all available data, so a new specimen record containing "Some Random Agent" will load to "Some R. Agent" as long as "Some R. Agent" contains alternate name "Some Random Agent" (perhaps as "full name" or "aka").

Batch modifications are possible; consult with a DBA.
