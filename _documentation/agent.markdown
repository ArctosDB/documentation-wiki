---
title: Agents
layout: default_toc
author: Teresa J. Mayfield-Meyer, ArctosDB, DLM
date: 2021-11-11, 2016-12-01, 2024-08-13
---

# Agents

Agents are people, organizations, groups, code, or any human entity that performs actions. Agents are collectors, authors of publications, users of objects, issuers of identifiers and, if you enter or edit data, you are an Agent. A single Agent can have many roles and many names. No matter how many roles or names an Agent has, there should be only one Agent profile in Arctos to represent them. Agents are not deleted, but may be default-hidden by a 'bad duplicate of' relationship.

# Agent

Table Agent is the central or core Agent data table.

## agent_id

Agent_ID is the internal primary key, and when prefixed with ``https://arctos.database.museum/agent/`` becomes an actionable GUID.

## agent_type

Agent Type is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_type).
         
## preferred_agent_name

Preferred Name is the namestring displayed by default.

## created_by_agent_id

Foreign key to agent.agent_id, the person creating the Agent record.

## created_date

Date on which record was created.

# agent_attribute

Agent Attributes carries all name, address, identifier, remark, and other information regarding an Agent. Attributes cannot be deleted, but can be deprecated (thus a history of change is maintained).

## attribute_id

Primary key, not exposed.

## agent_id

Foreign key to agent.agent_id.

## attribute_type

Attribute Type is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type).

## attribute_value

Some are vocabulary or datatype controlled.

## begin_date

Date on which the assertion became active.

## end_date

Date on which the assertion became inactive.

## related_agent_id

Foreign key to agent.agent_id; a relationship to another agent (required by some types).

## determined_date

Date on which attribute was determined.

## attribute_determiner_id

Foreign key to agent.agent_id; agent making the assertion.

## attribute_method

Method by which determination is known.

## attribute_remark

Things which don't fit elsewhere.

## created_by_agent_id

Foreign key to agent.agent_id; agent entering the data.

## created_timestamp


Date on which data was entered.

## deprecated_by_agent_id

Foreign key to agent.agent_id; agent deleting or changing an attribute; this is applied to "olds."

## deprecated_timestamp 

## deprecation_type

update or delete


# Related Entities

## Verbatim Agent Attribute

The catalog record [attribute](/documentation/attributes) [verbatim agent](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) allows uncontrolled strings to be associated with individual catalog records. 

This is preferable to creating low-data Agents when possible, and puts any necessary cleanup in the context of the catalog record data. For example, when working with bare agent names (as is often the case when importing data to Arctos), deciding if "J. Smith" and "J. D. Smith" are the same Agent is often impossible or impractical. Determining whether similar strings represent one entity is a much more robust exercise in the context of multiple catalog records, where it's relatively straightforward to determine if the potential agents are conducting similar activity (in which case they probably are the same, and it's easy to [Agentify](https://handbook.arctosdb.org/how_to/How-to-Agentify-Verbatim-Agents.html) them using Arctos tools) or if they are probably different (in which case more research may be necessary, or multiple agents with differentiating relationships and addresses may be created and used). We recommend this approach for most incoming string-based "collector" information.

This data structure is suitable for any agents acting in any "[role](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role)". Attribute method is required in order to differentiate intended roles for verbatim agents.  

When ["bad duplicate of"](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_relationship#bad_duplicate_of) agents are merged, [verbatim agent](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) Attributes for [collector roles](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role) are automatically created for all affected catalog records.

# How To

Instructions for doing specifc tasks related to Agents in Arctos

 - [Best Practice - Creating Meaningful Agents](https://handbook.arctosdb.org/best_practices/Agents.html)
 - [How To Agentify Verbatim Agents](https://handbook.arctosdb.org/how_to/How-to-Agentify-Verbatim-Agents.html)
 - [How to Batch Update Agents in Catalog Record Roles](https://handbook.arctosdb.org/how_to/How-to-Batch-Update-Agents.html)
 - [How To Bulkload Agents](https://handbook.arctosdb.org/how_to/How-to-Bulkload-Agents.html)
 - [How To Create Agents](https://handbook.arctosdb.org/how_to/How-to-Create-Agents.html)
 - [How To Delete/Merge Agents](https://handbook.arctosdb.org/how_to/How_to_Delete_Agents.html)
 - [How To Search Agents](https://handbook.arctosdb.org/how_to/How-to-Search-Agents.html)
 - [How To Use the Agent Pre-Bulkloader](https://handbook.arctosdb.org/how_to/How-to-deal-with-Agent-Bulkloader-results.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/agent.markdown" target="_blank">here</a>.
