---
title: Agents
layout: default_toc
author: Teresa J. Mayfield-Meyer, ArctosDB
date: 2021-11-11, 2016-12-01
---

# Agents

Agents are people, organizations, or groups that perform actions. Collectors are agents, authors of publications are agents, users of objects are agents, and, if you enter or edit data, you are an agent. A single agent can have many roles and many names. No matter how many roles or names an agent has, a single person (or agency) should be in the database only once. 

 - <a href="https://handbook.arctosdb.org/best_practices/Agents.html" target="_blank">Best Practice - Creating Meaningful Agents</a>

## Agent Type

Agent Type is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_type).

### Person

Data about a person-agent can include first, middle, and last names (and must include at least one "person name"). Prefix and Suffix (formerly singular attributes of persons) are now embedded in agent names and should not be viewed as static. (Prefix and suffix should seldom be included in preferred name.) For example, the following might all apply to one agent:

-   Some Guy
-   Lieutenant Some Guy
-   Major Some Guy
-   Some Guy Sr.
-   Reverend Some Guy Senior, Ph.D

See [Wikipedia: Generational Titles](http://en.wikipedia.org/wiki/Suffix_%28name%29#Generational_titles) for more information.

### Organization

Examples of organizations include:

-  [University of Alaska Museum of the North](https://arctos.database.museum/info/agentActivity.cfm?agent_id=3691)
-  [Alaska Department of Fish and Game](https://arctos.database.museum/info/agentActivity.cfm?agent_id=9)
-  [U. S. National Park Service](https://arctos.database.museum/info/agentActivity.cfm?agent_id=40)

Agencies can have hierarchical relationships, *e.g.*:

-  [Kanuti National Wildlife Refuge](https://arctos.database.museum/info/agentActivity.cfm?agent_id=27) is a [division of](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#division_of)
-  [U. S. Fish and Wildlife Service](https://arctos.database.museum/info/agentActivity.cfm?agent_id=3679) is a [division of](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#division_of)
-  [U. S. Department of the Interior](https://arctos.database.museum/info/agentActivity.cfm?agent_id=1012052)

For catalog record roles person agents are more explicit and preferable to organizations. Organizations are generally more useful in transaction and project roles.

### Group

A group is two or more agents functioning in some named capacity. So, instead of listing several collectors on an expedition, one might make all the collectors members of something like the "1994 Swedish-Russian Tundra Ecology Expedition."

Agent Groups consists of:

1.  An agent of type=group, and optionally
2.  person agents as group members

Groups may be useful for things like collecting expeditions and classes.

### Verbatim Agent Attribute

The catalog record [attribute](/documentation/attributes) "[verbatim agent](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent)" allows uncontrolled strings to be associated with individual catalog records. 

This is preferable to creating low-data Agents when possible, and puts any necessary cleanup in the context of the catalog record data. For example, when working with bare agent names (as is often the case when importing data to Arctos), deciding if "J. Smith" and "J. D. Smith" are the same Agent is often impossible or impractical. Determining whether similar strings represent one entity is a much more robust exercise in the context of multiple catalog records, where it's relatively straightforward to determine if the potential agents are conducting similar activity (in which case they probably are the same, and it's easy to "upgrade" them to Agents using Arctos tools) or if they are probably different (in which case more research may be necessary, or multiple agents with differentiating relationships and addresses may be created and used). We recommend this approach for most incoming string-based "collector" information.

This data structure is suitable for any agents acting in any "[role](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role)". Attribute method is required in order to differentiate intended roles for verbatim agents.  

When "bad duplicate of" agents are merged, "verbatim agent" Attributes are automatically created for all affected catalog records.

## Names

All agents must have one and only one "preferred name" and one and only one "login". An agent can have any number of other names.

## Name Type

Agent Name Type, e.g. "preferred," is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type).

## Address

Address matches any part of [any address](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTADDRESS_TYPE),
including mailing addresses, telephone numbers, and email addresses.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

ORCiD and Wikidata urls are found in the addresses section of the agent table.

### Agent Status

Agent Status matches values from a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_STATUS).

## Remarks

Remarks is a good place to include a one sentence description of the agent. Anything that might be helpful to other users in understanding who or what the agent is should be included. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Never use remarks for data which can be linked or formalized elsewhere.

Agent remarks allow for free text descriptive information and can also include HTML to make text more readable on the Agent page.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

You can use an HTML cheat sheet to help with the code. Try <a href="https://htmlcheatsheet.com/" target="_blank">HTML Cheatsheet</a> or <a href="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf" target="_blank">Stanford HTML Cheatsheet</a>

## Deleting/merging agents

Duplicate agents (&gt;1 agent record referring to the same agent entity) prevent accurate answers to questions involving agents. Collector "John Smith" cannot locate "his" collected items if some of them are recorded under agent "J. Smith."

### How To

To delete an agent, create a "bad duplicate of" relationship to another agent. All collections will receive a [warning email](/documentation/notifications), and if no action is taken the agent will be automatically deleted in 14 days (previously 7).

Check collection contacts and their email addresses if you are not receiving notifications.

Generally, the record with least complete information and/or the least activity should be the "bad duplicate of." Any useful information (such as names, remarks or addresses) must be transcribed to the "good" agent. The deletion process does not retain agent names or remarks, addresses are copied only when they are used in shipments. Manually copy anything that seems important to the merged agent; avoid copying anything which might cause confusion (and the introduction of more duplicates) in the future.

### Why

Any Operator with Agent access may flag agents as duplicates. Agents lacking evidence to the contrary should be marked as duplicates; if there is evidence of useful individuality, add it by way of relationships and supporting remarks. Often, low-quality Agents not representing an individual are expedient; there is little reason to have two "J. Smith" (no other information) agents; if disambiguating information is available, add it.

### Identical Agent Names

Identical agent **names**, between and among agents, is different than identical agents. Duplicate agents are two or more agent records that mean the same physical entity (THAT PARTICULAR John Smith; US Fish and Wildlife Service). It is not necessary for duplicate agents to share a name; in fact, they are often introduced because of misspellings. The "Agent Activity" link is a good place to make sure you're dealing with real duplicates.

### Not Duplicates

Occasionally, it will be determined that two agents are not in fact duplicates. The only action that will stop future attempts to merge them is a "not the same as" relationship. Document the relationship in remarks, but do not try to build functionality into remarks.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/agent.markdown" target="_blank">here</a>.
