---
title: How To Search Agents
author: Teresa J Mayfield-Meyer
date: 2021-02-24
layout: default_toc
---
# How To Search Agents

- <a href="https://handbook.arctosdb.org/documentation/agent.html" target="_blank">Agents Documentation</a>

## Public Search

The search form for those who do not have manage_agents authority.

#### Navigation: [Search > Agents](https://arctos.database.museum/agent.cfm)

Search Agents to explore how people and organizations support collections, connect with each other, and much more. 

### Agent Name

Enter the name of the person or organization you want to find in Arctos.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**

 - At least three characters are required to search.
 - A generic search, such as only a last name is preferred. This form is searching Agent Preferred Names, so a search for John Smith will not return the agent John H. Smith, but a search for Smith will return both.
 
## Arctos Agent Manager Search

The search form for those who have manage_agents authority contains several fields and options, detailed below. All are case-insensitive substring matches. You may also include the special characters \_ and % to match any single character or any string, respectively. 

### Any name search

Any part of a name is appropriate for most exploratory searching. It matches any name, including preferred, AKAs, name
components, and login name.

### Agent Type

Agent Type matches values used in the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_TYPE).

### Agent ID

Agent ID matches the (internal, primary key) `agent_id` (an integer).

### Agent Name Type

Agent Name Type matches values used in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_NAME_TYPE).

### Agent Name

Agent Name matches names of the chosen type.

### Address

Address matches any part of [any address](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTADDRESS_TYPE),
including mailing addresses, telephone numbers, and email addresses.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

ORCiD and Wikidata urls are found in the addresses section of the agent table.

### Agent Status

Agent Status matches values from a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_STATUS). This may be combined with "**Match**" and **Status Date** to locate agents reported in an event, agents having an event on a date, or events happening on, before, or after a given date.

### Created By

Created By (and corresponding **match** types and **Created Date**) may be used to find agents created by an agent, agents created by an agent on/before/after a date, or agents created on/before/after a date.

## Video Tutorial

[![YouTube: How To Search Agents](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20play.png)](https://youtu.be/MfXTtQ2A5hY)

## Edit this How To

If you see something that needs to be edited in this How To, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Search-Agents.markdown).
