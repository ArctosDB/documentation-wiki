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

#### ctexamined_detected

Terms should be formatted as ``category: term`` and consist of ASCII characters with no italics, markdown, etc. "Common" terms should be used when they are appropriate and (relatively) unambiguous: ``Rabies`` rather than ``Lyssavirus rabies``, for example.

#### ctlithostratigraphic_bed

Terms should follow the following criteria:

* The unit is registered in a national geologic database, with a link included in the documentation. 
    * https://ngmdb.usgs.gov/Geolex/search
    * https://www.bgs.ac.uk/technologies/the-bgs-lexicon-of-named-rock-units/

* If the unit is not listed in a national database, the documentation should include a link to a publication that describes the unit.
* The term is properly formatted as "Name Type". Lithology descriptors should only be included when the unit is not referred to both with and without the descriptor. When a lithology descriptor is included, the format is "Name Lithology Type". Acceptable examples: 
    * Westfield Fish Bed
    * Down Cliff Sand Member Starfish Bed

* In addition to the required links, the documentation must include a short description of the unit which should include:
    * the geographic region(s) in which the unit outcrops
    * geologic age
    * dominant lithology.


ref: https://github.com/ArctosDB/arctos/issues/7844

#### ctlithostratigraphic_formation

"Formal" lithostratigraphic formations; Data should follow a national geologic database or be attributable to a recognized type publication.

Terms should include the unit type (generally "Formation") Lithology descriptors should only be included if there are multiple valid units with similar names where the lithology term is the distinction


*  Duck Creek Formation 
*  Duck Creek Limestone Formation 

Description should include a concise summary of the unit, including:

* geographic region(s) in which the unit outcrops
* geologic age of the unit
* (optionally) dominant lithology


Write for an international audience; **do not** abbreviate.


Include clarifying links (such as Wikipedia) when available.


Addition of terms which occur in the following databases may be expedited.

* USGS National Geologic Map Database (https://ngmdb.usgs.gov/Geolex/search)
* BGS Lexicon of Named Rock Units (https://www.bgs.ac.uk/technologies/the-bgs-lexicon-of-named-rock-units/)
* Australian Stratigraphic Units Database (https://asud.ga.gov.au/search-stratigraphic-units/)
* WEBLEX Canada (https://weblex.canada.ca)


The Arctos Paleo Committee should be consulted regarding any additions which do not meet the above criteria. These entries will require additional descriptive data and references, and should cite primary literature type publications when possible.

~~Use this template to request additions: https://docs.google.com/spreadsheets/d/14cKF6oo2ClEbIAU5kw8T-wYZNXjfZQP6MM_CqEP9-Xc~~


#### ctlithostratigraphic_group

Term additions may be expedited if the following criteria are met:

* The unit is registered in a national geologic database, with a link included in the documentation.
    * https://ngmdb.usgs.gov/Geolex/search
    * https://www.bgs.ac.uk/technologies/the-bgs-lexicon-of-named-rock-units/


If the unit is not listed in a national database, the documentation must include a link to a primary literature publication that describes the unit.


Terms must be consistently formatted. Acceptable examples include:

* Dunquin Group
* Old Red Sandstone Supergroup

* In addition to the required links, the documentation must include a short description of the unit which includes
    * the geographic region(s) in which the unit outcrops, 
    * geologic age
    * dominant lithology

Write for an international audience; **do not** abbreviate.

References:

* https://github.com/ArctosDB/arctos/issues/7844
* https://github.com/ArctosDB/arctos/issues/9086
* https://stratigraphy.org/guide/litho

#### ctlithostratigraphic_member

 Terms may be added to this table if the following criteria are met:
* The unit is registered in a national geologic database, with a link included in the documentation. 
    * https://ngmdb.usgs.gov/Geolex/search
    * https://www.bgs.ac.uk/technologies/the-bgs-lexicon-of-named-rock-units/
* If the unit is not listed in a national database, the documentation should include a link to a publication that describes the unit.
* The term is properly formatted as "Name Type". Lithology descriptors should only be included when the unit is not referred to both with and without the descriptor. When a lithology descriptor is included, the format is "Name Lithology Type". Acceptable examples: 
    * Cameron Creek Member
    * Down Cliff Sand Member
* In addition to the required links, the documentation must include a short description of the unit, including:
    * The geographic region(s) in which the unit outcrops
    * Geologic age
    * Dominant lithology.

ref: https://github.com/ArctosDB/arctos/issues/7844

#### ctmime_type

 Values listed here must be registered on the Internet Assigned Numbers Authority
(https://www.iana.org/assignments/media-types/media-types.xhtml) and may be added as needed if requirements are met.

#### ctspecimen_part_name

 - Part names should be compatible with an ontological framework. Best practice would be a link to an ontology
 - It is preferable to create a general part that can then be refined with a modifier (e.g. girdle -> with the ability to add a modifier such as pectoral or pelvic).
 -  Part names must be singular and have broad usage among collections; thus, favor generic over specific, especially if part attribute can be used to specify a part (eg. wing vs left wing where wing is the part and 'left' is an attribute).
 -  Part names require a functional description and an external "scholarly" reference such as an ontology (e.g, Uberon http://uberon.org) or Wikipedia link. Dictionary definitions are not sufficient.
 -  Add alternative terms to maximize discoverability when available.

#### ctquad

 Terms may be added to this table if the following criteria are met:
 - the quad is included in a published map series
 - the description includes a description of the geography in which the quad is placed. For example: Country, State(s)
 - the description includes a https://ngmdb.usgs.gov link to a specific map. Other authorities may be suitable with proper review.

Acceptable scales are as follows.

| map scale | suffix | more | example |
|-----------|---------|-----|-------|
| 1:250000 | nothing | "default" scale | Unalaska |
| 1:50000 | 1:50000 |  | Antioch 1:50,000 |
|  1:100000 |  1:100000 | 30 by 60 minute  | Mount Rainier 1:100000 |
| 1:125000 | 1:125000 |  aka 30 minute | Stillaguamish 1:125000 |
| 7.5 minute | 7.5 minute |  | Deadman Lake 7.5 minute |
| 15 minute | 15 minute | 1:63600 | Kaylor Mountain 15 minute |



### Taxonomy

Taxonomy is included here only for completeness. See [Taxonomy Documentation](/documentation/taxonomy) for more information.

### Geography

Geography is included here only for completeness. See [Geography Documentation](/documentation/higher-geography) for more information.

### Agents

Agents are included here only for completeness. See [Agent Documentation](/documentation/agent) for more information.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/authorities.markdown" target="_blank">here</a>.

