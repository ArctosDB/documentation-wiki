---
title: Authorities
layout: default_toc
author: DLM
---

# Authorities

Arctos maintains authorities in order to standardize content that is [shared amongst all collections using Arctos](/documentation/sharing-data-and-resources).

## Code Tables

[Code Tables](http://arctos.database.museum/info/ctDocumentation.cfm) enforce data consistency, which results in more-usable pick lists to better provide users with what they need, and allow more flexibility in communicating with other data. Authorities exist to maximize discoverability, and any value or proposal which is contrary to this core principle should be rejected. 





![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)


## Principles

All code table values should adhere to our principles [developing document](https://docs.google.com/presentation/d/106K73W3og-iFLI9TZlfK00GtvVOJjIx5rU_43TsP49E/edit#slide=id.g24c167402f2_0_0)) in support of standardized, normalized, properly-categorized, connected, sharable "Research Grade" data.


## Concepts

All code tables provide a definition; values are **concepts** which mean what they're definied to mean, and meanings cannot be drawn from the values alone.


## Procedures

Additions or changes generally require open discussion through Issues, and the Issue/discussion must be recorded with the new value.

## Table Definitions

All code tables should have a prescriptive, functional definition. (Some of these allow expedited additions.)

## Content

Code tables cannot contain HTML. (Cleanup is an ongonig process; file an Issue for prioritization.)

### Reality

Arctos is a Community, and often cleaning up "legacy" data in favor of ideals is a difficult process involving local processes across hundreds of collections. We remain convinced that Arctos data are more capable of supporting deep research than anything else in existence, but we also acknowledge the realities of humans, traditions, resources, funding, etc.

### Alternatives

Arctos provides a free-text way to say most everything. If data cannot be standardized to fit into Authorities, or while the authority creation process is underway, it may be desirable to use less-restricted methods. (Given proper consistency, "upgrading" at a later time should be trivial.)

## Collection-Specific Values


Many code tables are collection-specific. Operators with ``manage_collection`'' roles may select individual values for use in their collections under manage collection, or at the top of the relevant code table page. For example, parts:

![Firefox_Screenshot_2024-08-28T17-58-28 978Z](https://github.com/user-attachments/assets/62681465-ede6-41ba-8db1-a74f5161beb3)



## Rules of the Road for Code Table Terms

### General Rules for Adding Code Table Terms

#### CAUTION: This is still being discussed, see https://github.com/ArctosDB/arctos/issues/9141

 - Use predictable Punctuation  
    Allowed characters:
     - a-Z
     - 0-9
     - space
     - underscore
     - apostrophe (UTF-8) (e.g., ‘)
 - Whenever possible terms should have a published reference or citation.
 - Terms and their definitions should be as general and unambiguous as possible.

### Specific Rules for Specific Code Tables

#### ctattribute_type

Terms should not be overly specific that limit usage and should use existing controlled vocabulary as much as possible (e.g. units of measurements). Attribute terms must be singular, and require a functional description and an external “scholarly” reference such as an ontology or Wikipedia link. Dictionary definitions are not sufficient.


#### ctculture

Terms should meet the following criteria to be considered for this table.

 - The culture is described in a widely recognized online source, e.g.,
    - https://en.wikipedia.org/wiki/Native_Americans_in_the_United_States
    - https://native-land.ca/
    - https://ehrafworldcultures.yale.edu/
 - If the culture is not listed in a national database, the documentation should include a link to a publication in the primary literature that describes the culture.
 - The term is properly formatted as a singular ethnonym or endonym. Forward slash is acceptable for showing two or more currently-accepted terms. Inverted format using a colon (:) separator may be used when cultures are part of an overarching larger cultural group. The use of “and” is acceptable when multiple groups share a collective cultural affiliation. Acceptable examples:
  - Haudenosaunee
  - Alutiiq/Sugpiaq
  - Inuit: Canadian
  - Hutu and Tutsi
 - The documentation must include a short description of the culture which includes (if relevant):
An “Also” statement of additional accepted alternative names,
a summary of the cultural group,
a geographic boundary,
A “Formerly” statement for any past names used in the literature or collection documentation, a link to an external scholarly reference, such as Wikipedia or Native Land Digital separated from the description with a pipe (|)
 - Write for an international audience; do not abbreviate.

#### ctspecimen_part_name

 - Part names should be compatible with an ontological framework. Best practice would be a link to an ontology
 - It is preferable to create a general part that can then be refined with a modifier (e.g. girdle -> with the ability to add a modifier such as pectoral or pelvic).



### Taxonomy

Taxonomy is included here only for completeness. See [Taxonomy Documentation](/documentation/taxonomy) for more information.

### Geography

Geography is included here only for completeness. See [Geography Documentation](/documentation/higher-geography) for more information.

### Agents

Agents are included here only for completeness. See [Agent Documentation](/documentation/agent) for more information.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/authorities.markdown" target="_blank">here</a>.

