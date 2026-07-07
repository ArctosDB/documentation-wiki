---
title: How To Handle Organisms in Arctos
author: Teresa J. Mayfield-Meyer
date: 2024-06-11
layout: default_toc
---

# How To Handle Organisms in Arctos

**Documentation:** [Entities](https://handbook.arctosdb.org/documentation/entity.html)

Although many catalog records are synonymous with an organism, some are not. Parts of an individual organism may be collected at different points in time (blood samples from a zoo animal) or they may be parsed aout to different collections (herbarium duplicates).

Using an [Organism ID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#organism_id) identifier type with the same value across all records from the same individual is the preferred method for indicating that any given catalog record does not include all collected parts for a given individual.

## Choosing an Organism ID Value

Any string may be used as Organism ID. Some possibilities and their implications include:

### Arctos Entity record GUID

[Arctos Entity record GUIDs](https://handbook.arctosdb.org/documentation/entity.html) are currently our recommended Organism ID. An Arctos Entity record GUID is

* Globally Unique
* resolvable
* Bears metadata
* Easily tested for existence and suitability
* controlled by the Arctos Community
* Currently used only by the Arctos Community

#### How To Add Catalog Records to an "Organism" Entity
* Create the Arctos Entity
* Copy the Arctos Entity record GUID (this is the url in your browser when you are looking at the Arctos Entity catalog record).
* Add the Arctos Entity record GUID to every component catalog record as an other identifier using this format:

Other ID type | Other ID Value | Other ID references | Other ID Issued By | Other ID Remark
 -- | -- | -- | -- | -- 
[Organism ID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#organism_id) | https://arctos.database.museum/guid/Arctos:Entity:xxx | self | Arctos Entity Collection | say whatever you want here 


### Other Resolvable Identifiers
Other Resolvable Identifiers are more or less "anything with a URL." These include USNM EZIDs and are "good" identifiers by virtue of being globally unique and resolvable, but may vary wildly on attributes such as:

* persistence
* control (including vandalism prevention)
* ability to carry metadata or form links to relevant data
* ability to be tested for existence or suitability

### Non-resolvable Identifiers

Non-resolvable Identifiers are strings, generally issued by an Agent. These are generally "less good" identifiers in that they:

* are often represented in many forms (ABC123,ABC-123, ABC 123, ...)
* can contain no mechanism to test for suitability
* can bear no metadata
* may or may not be unique

Examples include:

* USGS Bird Banding Laboratory numbers
* GAN numbers (zoo identifiers)
* Mexican Wolf Studbook numbers
* Collector numbers

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/Organisms.markdown" target="_blank">here</a>.
