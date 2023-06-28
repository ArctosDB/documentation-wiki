---
title: Agents
layout: default_toc
author: Teresa J. Mayfield-Meyer, ArctosDB
date: 2021-11-11, 2016-12-01
---

# Agents

Agents are people, organizations, groups, code, or any entity that performs actions. Agents are collectors, authors of publications, users of objects, issuers of identifiers and, if you enter or edit data, you are an Agent. A single Agent can have many roles and many names. No matter how many roles or names an Agent has, there should be only one Agent profile in Arctos to represent them.

 - <a href="https://handbook.arctosdb.org/best_practices/Agents.html" target="_blank">Best Practice - Creating Meaningful Agents</a>

## Agent Type

Agent Type is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_type). All Agents must have a unique [preferred](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type#preferred) name.

### Person

Data about a person-agent can include [first](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type#first_name), [middle](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type#middle_name), and [last](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type#last_name) names. [Prefix and Suffix](http://en.wikipedia.org/wiki/Suffix_%28name%29#Generational_titles) should only be included in preferred name to disambiguate people if necessary. For example, the following might all apply as name type [aka](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type#aka) to one agent:

-   Some Guy
-   Lieutenant Some Guy
-   Major Some Guy
-   Some Guy Sr.
-   Reverend Some Guy Senior, Ph.D

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

1.  An agent of type=organization, and optionally
2.  person agents associated as group members

Groups may be useful for things like collecting expeditions and classes.

### Verbatim Agent Attribute

The catalog record [attribute](/documentation/attributes) [verbatim agent](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) allows uncontrolled strings to be associated with individual catalog records. 

This is preferable to creating low-data Agents when possible, and puts any necessary cleanup in the context of the catalog record data. For example, when working with bare agent names (as is often the case when importing data to Arctos), deciding if "J. Smith" and "J. D. Smith" are the same Agent is often impossible or impractical. Determining whether similar strings represent one entity is a much more robust exercise in the context of multiple catalog records, where it's relatively straightforward to determine if the potential agents are conducting similar activity (in which case they probably are the same, and it's easy to [Agentify](https://handbook.arctosdb.org/how_to/How-to-Agentify-Verbatim-Agents.html) them using Arctos tools) or if they are probably different (in which case more research may be necessary, or multiple agents with differentiating relationships and addresses may be created and used). We recommend this approach for most incoming string-based "collector" information.

This data structure is suitable for any agents acting in any "[role](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role)". Attribute method is required in order to differentiate intended roles for verbatim agents.  

When ["bad duplicate of"](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#bad_duplicate_of) agents are merged, [verbatim agent](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) Attributes for [collector roles](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role) are automatically created for all affected catalog records.

## Names

All agents must have one and only one [preferred](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type#preferred) name and one and only one [login](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type#login). An agent can have any number of other names.

## Name Type

Agent Name Type, e.g. "preferred," is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type).

## Address

Address type is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTADDRESS_TYPE).

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

ORCiD and Wikidata urls are found in the addresses section of the agent table.

### Agent Status

Agent Status is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_STATUS).

## Remarks

Remarks is a good place to include a description of the Agent or their activities. Anything that might be helpful to other users in understanding who or what the agent is should be included. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Never use remarks for data which can be linked or formalized elsewhere.

Agent remarks allow for free text descriptive information and can also include HTML to make text more readable on the Agent page.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

You can use an HTML cheat sheet to help with the code. Try <a href="https://htmlcheatsheet.com/" target="_blank">HTML Cheatsheet</a> or <a href="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf" target="_blank">Stanford HTML Cheatsheet</a>

### Identical Agent Names

Identical agent **names**, between and among agents, is different than identical agents. Duplicate agents are two or more agent records that mean the same physical entity (THAT PARTICULAR John Smith; US Fish and Wildlife Service). It is not necessary for duplicate agents to share a name; in fact, they are often introduced because of misspellings. The "Agent Activity" link is a good place to make sure you're dealing with real duplicates.

### Not Duplicates

Occasionally, it will be determined that two agents are not in fact duplicates. The only action that will stop future attempts to merge them is a "not the same as" relationship. Document the relationship in remarks, but do not try to build functionality into remarks.

## How To

Instructions for doing specifc tasks related to Agents in Arctos

 - [How To Agentify Verbatim Agents](https://handbook.arctosdb.org/how_to/How-to-Agentify-Verbatim-Agents.html)
 - [How To Batch Update Agents](https://handbook.arctosdb.org/how_to/How-to-Batch-Update-Agents.html)
 - [How To Bulkload Agents](https://handbook.arctosdb.org/how_to/How-to-Bulkload-Agents.html)
 - [How To Create Agents](https://handbook.arctosdb.org/how_to/How-to-Create-Agents.html)
 - [How To Deal with Agent Bulkloader Results](https://handbook.arctosdb.org/how_to/How-to-deal-with-Agent-Bulkloader-results.html)
 - [How To Delete/Merge Agents](https://handbook.arctosdb.org/how_to/How_to_Delete_Agents.html)
 - [How To Search Agents](https://handbook.arctosdb.org/how_to/How-to-Search-Agents.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/agent.markdown" target="_blank">here</a>.
