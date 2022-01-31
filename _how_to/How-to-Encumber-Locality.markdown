---
title: How To Encumber Locality Data
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2019-11-22
---
# How to Encumber Locality Data

[Encumbrances](/documentation/encumbrance) restrict certain aspects of specimen/lot records from the public view, usually to protect personal identity, proprietary data, or the provenance of a vulnerable population/habitat. Many encumbrances are temporary and may be reversed when specified conditions change (publication of research, expiration or retraction of encumbering legislation, eradication of critical habitat where specimen/lots were collected, etc.). This document describes the various ways that locality information may be encumbered in Arctos.

## Encumbering Coordinates

If the only locality data that needs to be encumbered are coordinates, using the encumbrance funcionality in Arctos may be the best option. See [How to Create an Encumberance](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_how_to/How-to-Create-an-Encumbrance.markdown)

Some items to be aware of when using this option:

 - Encumbrances expire, so if no one renews an encumbrance upon its expiration, the data will become publicly available when the encumbrance expires.
 - Coordinates can often be inferred from other locality data.

## Encumbering Locality

When it is necessary to encumber specific locality or to more permanently encumber locality information, another option is avaialable.  Adding the locality attribute "access" with the value of "private" to any locality will hide the locality both in catalog records and in locality searches. It will also hide collecting and record events that use the locality. When using this option, it is adviseable to create two catalog record events for any affected catalog records, one with the detailed locality information and the private access locality attribute, and a second with a the most general locality information that can be made available that does not include the private access locality attribute.

### Access - Private Example

The New Mexico Museum of Natural History and Science (NMMNH) Paleontology collection includes fossils collected from federally protected sites as well as private property. As such, the museum is required to withhold information about these collection sites unless requested and approved for specific research. The museum is also a state-funded institution with the mission to "preserve and interpret the distinctive natural and scientific heritage of New Mexico through extraordinary collections, research, exhibits and programs designed to ignite a passion for lifelong learning." In placing the collection data into Arctos, the museum is fostering this mission, but may also be violating agreements with federal and private lands to keep locality information encumbered because even if no coordinates are provided, specific locality could provide enough information to allow the sites to be discovered by fossil poachers or other unauthorized collectors. For this reason, each NMMNH Paleo record contains two catalog record events: 1) one which includes all known locality information and is hidden from public view and 2) one which includes higher geography only. Only those with administrative access to the collection in Arctos can view, edit, or download the research event information.

#### NMMNH:Paleo:1

The public view of this record appears as follows:

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/encumber_locality/NMMNH_Paleo_1_public.JPG)

The "private" view of this record appears as follows (sensitive information has been blacked out):

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/encumber_locality/NMMNH_Paleo_1_private.jpg)

Note the access: private locality attribute in the purple box. This attribute encumbers the locality. For instructions on adding locality attributes, see [How to Add Geology Attributes to a Locality](http://handbook.arctosdb.org/how_to/How-to-Add-Geology-Attributes-to-a-Locality.html)
