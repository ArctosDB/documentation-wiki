---
title: How To Encumber Locality Data
layout: default_toc
author: Teresa J. Mayfield-Meyer, Michelle Koo
date: 2025-02-24
---

## Note on Encumbrances
Encumbrances in Arctos restrict certain aspects of or the entire catalog record from the public view, usually to protect personal identity, proprietary data, or the provenance of a vulnerable population/habitat. Strictly defined database encumbrances are temporary and may be reversed when specified conditions change (publication of research, expiration or retraction of encumbering legislation, eradication of critical habitat where cataloged items were collected, etc.). However, curators can make an entire locality dataset be restricted from public view with a locality attribute. 

[Encumbrance Documentation](/documentation/encumbrance)

Because of the following reasons, we no longer mask coordinates nor mask year collected:
 - Encumbrances expire, so if no one renews an encumbrance, the data will become publicly available upon the specified expiration date.
 - Coordinates can often be inferred from other locality data.

Instead, locality datasets can be entirely restricted from public view-- see below.

## Restricting Access to the Entire Locality by Collection

To restrict public access to the entire Locality event to only curatorial management access: Add all the locality data as you would for any locality (e.g. higher geography, specific locality, coordinates, and attributes). Use the Locality Attribute ``` locality_access``` [ct link](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlocality_attribute_type#locality_access) and set the value to your collection GUID prefix (e.g., MVZ:Herp). 

Adding the locality attribute "access" to a specific collection to any locality will publicly hide the locality both in catalog records and in locality searches. It will also hide collecting and record events that use the locality. 

If your collection GUID prefix is not in the drop down option, then simply request it to be added by filing a [Code Table Request](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=Function-CodeTables&projects=&template=code-table-request.md&title=Code+Table+Request+-+). These are granted right away.

When using this option, some collections choose to create a second catalog record event for any affected catalog records, which has generalized locality information that can be made public or notes that additional information is available.

Locality attributes like ``` locality_access``` can be done to multiple records at once through the normal means of sharing localities. All other rules of locality editing and management apply.

### Access - Private Example

The New Mexico Museum of Natural History and Science (NMMNH) Paleontology collection includes fossils collected from federally protected sites as well as private property. The museum is required to withhold information about these collection sites unless requested and approved for specific research. Additionally, the NMMNH is a state-funded institution with the mission to "preserve and interpret the distinctive natural and scientific heritage of New Mexico through extraordinary collections, research, exhibits and programs designed to ignite a passion for lifelong learning." 

In placing the collection data into Arctos, the museum is fostering this mission, but also may be violating agreements with federal and private lands to keep locality information encumbered because even if no coordinates are provided, specific locality could provide enough information to allow the sites to be discovered by fossil poachers or other unauthorized collectors. Thus, each NMMNH Paleo record contains two catalog record events: 1) one which includes all known locality information and is hidden from public view; and 2) one which includes higher geography only. Only those with administrative access to the collection in Arctos can view, edit, or download the research event information.

#### NMMNH:Paleo:1

The public view of this record appears as follows:

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/encumber_locality/NMMNH_Paleo_1_public.JPG)

The "private" view of this record appears as follows (sensitive information has been blacked out):

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/encumber_locality/NMMNH_Paleo_1_private.jpg)

Note the access: private locality attribute in the purple box. This attribute encumbers the locality and values come from the [locality access code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlocality_access).  

### Steps to Encumber Locality
The Arctos operator steps to make a locality private to a collection and to create a second public locality are currently detailed in the [Geography Handbook](https://docs.google.com/document/d/1dsUTONLnj6IFJCVE8PntOoWkuqJNFxDrZxteLy-rIyc/edit?tab=t.0#heading=h.y5bfchnd2n2y). 

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Encumber-Locality.markdown" target="_blank">here</a>.
