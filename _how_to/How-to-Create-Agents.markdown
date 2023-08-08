---
title: How To Create Agents
layout: default_toc
author: Teresa J Mayfield-Meyer
contributor:  Emily Braker 2016-02-27, April Payne
date: 2021-07-27
---
# How to Create Agents

#### Navigation: <a href="https://arctos.database.museum/agents.cfm" target="_blank">Arctos Tools Directory > Agents & Users > Agent: Manage</a>

## Before Creating a New Agent

**Documentation:** <a href="https://handbook.arctosdb.org/documentation/agent.html" target="_blank">Agents</a>

Before creating any new Agent, it is important to check if the Agent already exists in Arctos. Do this by typing in the person's last name or the organization's name in the “Any part of any name” box and clicking “Search”. If there are no current Agents that use that name, you are good to go. If you discover Agents with a similar name, make sure that they are different people or organizations so that you don't create a duplicate Agent. Use the Agent “unknown” when the person or organization doing the collecting, identifying, borrowing, etc. is unknown or unclear. Please do not create new Agents such as “Collector unknown” or “Determiner unknown”. Use the [verbatim agent attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) rather than creating cryptic agents such as A.B.C. or S. Smith. If at some point in the future the full name of collector, determiner, or borrower S. Smith is determined to be Susan B. Smith and you can find dates, addresses or relationships for them, add the full Agent name to Arctos and assign roles to records as appropriate.

### Identical Name, Different Person

You are about to bulkload some specimen data and realize that there is already an agent record for an individual named Larry McNeil. However, he is not the same individual as the artist from UAM:Art: [Larry McNeil](https://arctos.database.museum/agent/21290113) that is currently in Arctos.

Since the Larry McNeil that you want to create an agent for is an employee and specimen preparator, you want him to have his own agent record! What do you do?

**Ideal**
Find your Larry McNeil's middle name and now you can create a unique preferred name for your specific Larry McNeil!

**Next Best Thing**
Give your Larry McNeil a parenthetical remark after their preferred name. 

`Larry McNeil (CHAS)`

And add the [not the same as](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#not_the_same_as) relationship to the original Larry McNeil (and back from them to the new agent) and please document WHY in the relationship remark.

Here are some examples of this treatment, although they are all lacking in completing the directions above in some way.

[Carl Johnson (Albuquerque)](https://arctos.database.museum/agents.cfm?agent_id=21325605)
[David Smith (Texas)](https://arctos.database.museum/agents.cfm?agent_id=21331803)
[David Stephen Taylor (MVZ)](https://arctos.database.museum/agents.cfm?agent_id=21309995)

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

An agent must include at least one status, relationship, or address OR be a determiner, author, or participant in a publication/project or it will be subject to removal. When this occurs, the agent name will be placed in the [verbatim agent  attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) in all records where it appeared as a collector or preparator.

## Create a New Agent

* Click “Create Agent” in the blue box.
* A pop up will open asking you to select “Agent Type”.
* Click the yellow box and it will drop down a menu to choose from.
* Choose the appropriate Agent type, e.g., Michigan DNR = organization, Kurt Galbreath = person.
* “Preferred Name” for person Agents should be the Agent’s full name with at least a middle initial (e.g., Kurt E. Galbreath) and for organization Agents should be the full organization name with no abbreviations or special characters (e.g., Michigan Department of Natural Resources). Other variations of the name can be attached to the Agent after it is created, see "Agent Names" below.
* Next to “Autogenerate name components from preferred name” click the “[ if blank ]” link.
* Add in any remarks you may have and click “Create Agent.”
* You may be warned not to create versions of "unknown". If any of the options presented as possible duplicates look like they might be your Agent, cancel the Agent creation and investigate whether your Agent already exists in Arctos. If you have selected an Agent name that includes any initial, you will receive this warning.  If you are using the convention above (full name with middle initial), you can click to force creation.  If you are creating an Agent such as A.B.C. or S. Smith, please use the [verbatim agent attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent).
* Your new Agent will appear on the right hand side of the Agent page. You can now add alternate name spellings, statuses, relationships and addresses to the Agent.

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
