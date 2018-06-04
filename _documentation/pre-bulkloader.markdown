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

### Verbatim Collector

Agents are often the most labor-intensive part of data cleanup. Rather than resolving all problems before bulkloading specimen, 
it is possible to instead load the original verbatim strings to Attribute "verbatim collector." If you choose that approach, the specimens will not be findable by agent data until it is cleaned up and added as Agents. The original string data would be searchable through Attributes. Arctos does have a collector bulkloader, which may be useful in future data improvement efforts.


### Multi-agent strings

Multi-agent strings ("You and Me") can be deconcatenated using Reports/DataServices/AgentNameDeconcatenator. Data in this format are almost always
 messy; the tool should properly extract most agents, but careful review of the results is critical. The results will contain columns
 ORIGINAL and AGENTn. Do not alter ORIGINAL in any way; it contains the path back to specimens. Populate the AGENTn columns with distinct entities
 from ORIGINAL. Some cleanup at this stage may be useful. For example, "A & C PETERSON" (assuming it represents two people and not a company or similar) should be split into "A. Peterson" and "C. Peterson" - the 
 tool will probably split that into "A" and "C Peterson" and data will be lost if this is not corrected. Data from this step should be repatriated to the 
 bulkloader, then re-extracted for cleanup. There are no repatriation tools available; this will need individual consideration, and may require using 
 additional bulkloaders or the creation of group agents (for example, if there are multiple agents in ID Determinations, for which the specimen bulkloader
 offers only a single column).
 
### Reconciling Duplicates

Once each AGENT_NAME represents a single entity, a "translation" should be entered in the SHOULDBE column.

| AGENT_NAME        | SHOULDBE           | explanation  |
| ------------- |-------------| -----|
| Guy, Some      | Some Guy | Formatting Agents according to the [Agent Creation Guidelines](http://handbook.arctosdb.org/documentation/agent.html#creating--maintaining-agents) now will save some work later on. |
| S. Guy      | Some Guy  |  Merging alternate names now will save some work later on. If there's reason to suspect that this is NOT "Some Guy" it may be best to pre-create the agents with a "not the same as" relationship. |
| Some Guy | Some Guy      |   Most records will probably be as good as they can be made at this point, and just need copy/pasted from AGENT_NAME to SHOULDBE, which will result in no changes. |


Agents must ultimately match agents in Arctos. After the cleanup here, they will be tested against existing agents. Some will likely resolve (and are therefore done), some will need to be created. Note that only a unique string match is required to load specimen data. If preferred_name "Some Random Guy" exists in Arctos with alternate names "S. R. Guy," "Guy, R.," "S. Guy," "Some Guy," "Guy, Some" then the "bad" examples above would all load UNLESS some other agent (Stanley perhaps) also carries agent name "S. Guy."


### Agent Tools
* Reports/DataServices/AgentNameDeconcatenator can help with "you and me" type agent data.
* Reports/DataServices/AgentNamestringFormatter can help with "Guy, S." type agent data.
* EnterData/BatchTools/BulkloadAgents can load Agent data to Arctos, and the "agent loader home" page includes links to more cleanup tools
    * AgentNameSplitter will extract name components from "preferred name"





## Taxa

pre_bulk_taxa will contain two columns: TAXON_NAME and SHOULDBE. Data appear here when the bulkloader cannot resolve them to names according to the [handled formulae](http://handbook.arctosdb.org/documentation/bulkloader.html#taxonomy). Common situations:

* The name is valid and correctly formatted, just not in Arctos. This situation should be relatively rare, particular for species-and-above names. This must be resolved by creating the name in Arctos. A DBA can bulkload confirmed names, or they can be created individually in Arctos. The name should be copied to  SHOULDBE in conjunction with being added to Arctos.
* The name is misspelled. This is by far the most common situation. The corrected named should be entered in SHOULDBE.
* A formula is not formatted correctly. See [handled formulae](http://handbook.arctosdb.org/documentation/bulkloader.html#taxonomy).

A blank value in TAXON_NAME must be addressed. "unidentifiable" is available if no information is available. Often more precision can be inferred - bird collections tend to catalog Aves, for example. ("unidentifiable" has no implicit limitations in scope.)

### Taxa Tools

#### Reports/DataServices/ScientificNameChecker will try to correct formulaic scientific names

#### Reports/DataServices/TaxonNameValidator 

This tool will check validity of taxon names, and must be used before new taxa are created. While the tool is useful, it pulls from several very sloppy "authorities" and summarizes in the most optimistic way possible. Any sizable dataset will contain terms which are not taxonomy flagged as "might be valid." Most datasets will also contain a few names which are taxnoomy but are flagged as "probably_not_valid." Proceed carefully.

 
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

A geog_lookup file containing two columns will be produced. A "Higher Geog" value is required in the "shouldbe" column. Arctos geography
is searchable from Search/Geography.

### Geography Tools

#### Reports/DataServices/HigherGeographyLookup 

This tool may be used to transform various geography into Arctos-compatible higher_geog strings. The tool can work from components or from a 
higher-geography-like concatenation. The "components" option will produce a spreadsheet with Arctos-named columns of original (often "original from VertNet") data, and a higher_geog column. The components columns (continent_ocean, county, etc.) MUST NOT be manipulated; they collectively provide
a path back to specimens. Higher Geog should be an Arctos-formatted representation of the original data. The tool will "suggest" higher_geography values; these should be reviewed for accuracy. Any blank values will need populated from Arctos Higher Geography. Arctos geography is searchable through Search/Geography; the search results contain a "higher geog" column which is suitable to copy and paste into the spreadsheet. New geography entries will need to be created: file an Issue or use the Contact link at the bottom of any form, please include the desired geography and a link to Wikipedia. 



Links:

* [Arctos Geography Search](https://arctos.database.museum/geography.cfm)
* [Geography Creation Guidelines](http://handbook.arctosdb.org/documentation/higher-geography.html#guidelines-for-geographic-terms-in-arctos)

#### Reports/DataServices/HigherGeographyFromSpeclog 

This tool may be used to extract geography from specific locality.


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



