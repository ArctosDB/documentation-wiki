---
title: How To Delete an Agent
layout: default_toc
author: Teresa J. Mayfield-Meyer, ArctosDB
date: 2023-06-28
---

# How To Delete/Merge Agents

## Navigation

Navigation: [Arctos Tools Directory > Agents & Users > Agent: Manage](https://arctos.database.museum/agents.cfm)

**Documentation:** <a href="https://handbook.arctosdb.org/documentation/agent.html" target="_blank">Agents</a>

## Permission

Any Operator with [manage_agent](https://arctos.database.museum/Admin/user_roles.cfm#manage_agents) access may delete/merge Agents.

## When To Delete/Merge an Agent

Agents lacking evidence to the contrary should be marked as duplicates; if there is evidence of useful individuality, add it by way of relationships, addresses, statuses and supporting remarks. Duplicate Agents (&gt;1 agent record referring to the same agent entity) prevent accurate answers to questions involving Agents. For Example: Collector "John Smith" cannot locate "his" collected items if some of them are recorded under agent "J. Smith." Merging the duplicate agents corrects this situation. Occasionally, an Agent may be entered in error and need to be removed from the Agent table. This is accomplished by merging the Agent with [unknown](https://arctos.database.museum/agent/0).

## Delete an Agent

To delete an Agent, create a [bad duplicate of](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#bad_duplicate_of) relationship to another Agent. 

## Merge Duplicate Agents

To merge two Agents, create a [bad duplicate of](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#bad_duplicate_of) relationship from the Agent record with least complete information and/or the least activity to the more complete Agent. Any useful information (such as names, remarks or addresses) must be transcribed to the "good" agent. The deletion process does not retain agent names or remarks, addresses are copied only when they are used in shipments. Manually copy anything that seems important from the "bad" Agent to the "good" agent; avoid copying anything which might cause confusion (and the introduction of more duplicates) in the future.

### Stop a Proposed Agent Merge

To stop a proposed Agent merge, remove the [bad duplicate of](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#bad_duplicate_of) relationship. Add disambiguating information and add the ["not the same as"](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#not_the_same_as) relationship to discourage future attempts to merge the Agents. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

If disambiguating information is available, add it.

## Video Tutorial

Tutorial Needed

## Notifications

All collections will receive a [warning email](/documentation/notifications) when an Agent is marked [bad duplicate of](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#bad_duplicate_of) another Agent, and if no action is taken the Agent's activity will be automatically merged into the related Agent and the Agent profile will be deleted in 14 days.

Check collection contacts and their email addresses if you are not receiving notifications.

## Edit this How To

If you see something that needs to be edited in this How To, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_how_to/How_to_Delete_Agents.markdown).
