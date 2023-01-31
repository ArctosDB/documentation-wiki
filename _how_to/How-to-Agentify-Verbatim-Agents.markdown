---
title: How To Agentify Verbatim Agents
layout: default_toc
author: Teresa J Mayfield-Meyer
contributor: Angela Linn
date: 2023-01-31
---
# How to Agentify Verbatim Agents

If you have new information about a person that is currently only recorded in a [verbatim agent attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent), you can follow these steps to add their agent as a collector, creator, preperator or subject in the records in which they performed those roles.

## Create the Agent

If the agent your verbatim agent represents does not already exist in Arctos, follow the instructions in [How To Create an Agent](/How-to-Create-Agents.markdown) to add the agent in Arctos. 


## Find Records with the Verbatim Agent

From the main search page, search the verbatim agent attribute for the verbatim agent name you want to convert to an agent.



The additional fields described below can assist Arctos users in determining that they are working with the appropriate Agent.  Please take the time to make each Agent's information as complete as possible.

## Agent Names

- <a href="https://handbook.arctosdb.org/documentation/agent.html#names" target="_blank">Documentation</a>

It is a good idea to add variations of the Agent name for which Arctos users might search. Someone may type in Kurt Galbreath, Kurt G., or K. Galbreath but the preferred name is Kurt E. Galbreath. It is especially helpful to add the full middle name if known and any suffixes (e.g., Jr., Sr.) or maiden names.

### Name Type login
The login name should be the Arctos user name for any agent who is an Arctos operator.

**TIP**
An agent should never have more than one name of type "login". For Arctos operators who also wish to use a public search username, only the operator username should be associated with their Arctos agent.

## Agent Remarks

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Agent remarks are NOT meant to replace Agent data! Any information in any remark that could coplete an agent status, relationship, or address should be placed in the appropriate section, even if it is repeated in the remark.

### Agent Remark (public)
This free text field will appear on the agent's public page. Do not include any personal details or sensitive information in the remark without express permission from the agent. Only information that is already publicly available should be included here, but also see the **Pro Tip** above!

### Curatorial Remark (internal)
This free text field will appear on the agent's edit page, so will only be visible to those with agent edit access. This can be used to include information about the agent that should not be made public, but also see the **Pro Tip** above!

## Agent Status

- <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_status" target="_blank">Code Table</a>

Agent status applies to both person and organization Agents. It may sound funny, but organizations in Arctos are born and die. This keeps our tables simple and makes it easy for Arctos to find low quality data where the actions of an agent occur outside of their lifetime. These dates are not included on the agent's public page.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

When adding birth and death dates, put the source of the information in the remark field. The date needs to be in YYYY-MM-DD format (which means that YYYY is fine too) and belongs in the yellow field when editing.

![](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/tutorial_images/Agents/Agent_status.jpg)

Keep in mind that birth and death dates can lead to better data quality in catalog records (collections or identifications that occure before abirth date or after a death date raise a flag), so always use thes when possible as opposed to "alive" and "dead".

## Relationships

- <a href="https://handbook.arctosdb.org/documentation/agent.html#agent-relationships" target="_blank">Documentation</a>
- <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type" target="_blank">Code Table</a>

Relationships are useful to connect students to instructors, spouses to each other, children to parents, people to organizations they worked for or were associated with, etc.

* Note that only one relationship can be saved at a time.  If you want to add more than one relationship to an Agent, you will need to click "Save Changes" after each addition in order for the form to work properly.

## Address

Addresses and other contact information are useful for all Agents as they can provide Arctos users with contact information when questions about a record arise. Addreses are also useful for Agents who send or receive loans so that shipping and receiving address can be easily populated in loan documents created in Arctos. Addresses are not included on the agent's public page except for ORCiD, Wikidata, and Library of Congress links.

## Save It!

Once you have entered all the information about the Agent click “Save Changes” at the bottom of the screen to save your new Agent or any edits you have made to an existing Agent.

## Video Tutorial

[![YouTube: How To Create Agents](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20play.png)](https://www.youtube.com/watch?v=s3Rxk2LhY9E)

## Edit this How To

If you see something that needs to be edited in this How To, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_how_to/How-to-Create-Agents.markdown).
