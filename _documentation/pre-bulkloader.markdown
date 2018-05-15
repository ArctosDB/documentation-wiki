---
title: Pre-Bulkloader
layout: default_toc
---

The pre-bulkloader is a specimen data cleanup tool.

Data must first be transformed into Arctos Specimen Bulkloader format with [proper column names](http://handbook.arctosdb.org/documentation/bulkloader.html).

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
| Guy, Some      | Some Guy | Formatting Agents according to the [Agent Creation Guidelines](http://handbook.arctosdb.org/documentation/agent.html#creating--maintaining-agents) now will save some work later on. |
| S. Guy      | Some Guy  |  Merging alternate names now will save some work later on. If there's reason to suspect that this is NOT "Some Guy" it may be best to pre-create the agents with a "not the same as" relationship. |
| Some Guy | Some Guy      |   Most records will probably be as good as they can be made at this point, and just need copy/pasted from AGENT_NAME to SHOULDBE, which will result in no changes. |


Agents must ultimately match agents in Arctos. After the cleanup here, they will be tested against existing agents. Some will likely resolve (and are therefore done), some will need to be created. Note that only a unique string match is required to load specimen data. If preferred_name "Some Random Guy" exists in Arctos with alternate names "S. R. Guy," "Guy, R.," "S. Guy," "Some Guy," "Guy, Some" then the "bad" examples above would all load UNLESS some other agent (Stanley perhaps) also carries agent name "S. Guy."







## Taxa

pre_bulk_taxa will contain two columns: TAXON_NAME and SHOULDBE. Data appear here when the bulkloader cannot resolve them to names according to the [handled formulae](http://handbook.arctosdb.org/documentation/bulkloader.html#taxonomy). Common situations:

* The name is valid and correctly formatted, just not in Arctos. This situation should be relatively rare, particular for species-and-above names. This must be resolved by creating the name in Arctos. A DBA can bulkload confirmed names, or they can be created individually in Arctos. The name should be copied to  SHOULDBE in conjunction with being added to Arctos.
* The name is misspelled. This is by far the most common situation. The corrected named should be entered in SHOULDBE.
* A formula is not formatted correctly. See [handled formulae](http://handbook.arctosdb.org/documentation/bulkloader.html#taxonomy).

A blank value in TAXON_NAME must be addressed. "unidentifiable" is available if no information is available. Often more precision can be inferred - bird collections tend to catalog Aves, for example. ("unidentifiable" has no implicit limitations in scope.)

## Attributes

{need documentation here}

## OtherIDs


{need documentation here}

## Dates

Date data must meet the [Arctos Date Standard](http://handbook.arctosdb.org/documentation/dates.html)

## Parts

{need documentation here}

## Disposition

{need documentation here}

## Collector Role
{need documentation here}

## Accn
{need documentation here}

## Geography
{need documentation here}

## NatureOfID
{need documentation here}

## CoordinateUnits
{need documentation here}

## GeoreferenceProtocol
{need documentation here}

## VerificationStatus
{need documentation here}

## CoordinateErrorUnits
{need documentation here}

## CollectingSource
{need documentation here}

## DepthUnits
{need documentation here}

## Datum
{need documentation here}



