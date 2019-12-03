---
title: Geology
author: Dusty McDonald, Teresa Mayfield-Meyer
layout: default_toc
---

# Geology

Geology in Arctos is used to add descriptive terms to a [Locality](http://handbook.arctosdb.org/documentation/locality.html) using [Geology Attributes](#geology-attributes). These terms are controlled by the vocabulary contained in the [CTGEOLOGY_ATTRIBUTE code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE). For a summary of geologic stratigraphy, see the <a href="https://www.idigbio.org/wiki/images/7/7f/255-271_Murphy_.pdf">International Stratigraphic Guide —An abridged version</a>

The terms applied using Geology can generally be summarized in the following groups [Stratigraphic Information](#stratigraphi-information), [Petrology](#petrology), [Biochronology](#biochronology), [Public Land Survey System](#public-land-survey-system), [site land status](#site-land-status), and a [locality encumbrance](#locality-encumbrance) attribute for localities that need to be excluded from public view.  **NOTE** Some of these terms (Public Land Survey System, site land stauts, locality encumbrance) are planned for transition to a new Locality Attributes code table in the future but are currently managed under Geology for the time being.

## Stratigraphic Information

Geologic strata may be classified according to many different properties. Each classification has its own distinctive nomenclature and some also include a hierarchical structure. The following kinds of strata are currently represented in Arctos: 

 - <a href="https://en.wikipedia.org/wiki/Biostratigraphy">Biostratigraphy</a> - strata based on the fossil content of the rock bodies. 

 - <a href="https://en.wikipedia.org/wiki/Chronostratigraphy">Chronostratigraphy</a> - strata based on the time of formation of the rock bodies. 

 - <a href="https://en.wikipedia.org/wiki/Lithostratigraphy">Lithostratigraphy</a> - stata based on the lithologic properties of the rock. 

## Petrology

<a href="https://en.wikipedia.org/wiki/Petrology">Petrology</a> is the branch of geology that studies rocks and the conditions under which they form and Petrology terms describe the composition and texture of rocks. 

## Biochronology

In paleontology, <a href="https://en.wikipedia.org/wiki/Biochronology">biochronology</a> is the correlation in time of biological events using fossils. In its strict sense, it refers to the use of assemblages of fossils that are not tied to stratigraphic sections (in contrast to biostratigraphy, where they are). The basic unit of biochronology is the biostratigraphic zone, or biozone, a collection of fossils found together in a rock unit. The following biozone groups are available in Arctos:

 - <a href="https://en.wikipedia.org/wiki/Biochronology#Land_mammal_ages">Land Mammal Ages</a> - A chronology based on mammal taxa has been defined on all the continents except Antarctica. Most of the units are based on assemblage zones, layers of strata that contain three or more distinctive fossils.
 
 - <a href="https://en.wikipedia.org/wiki/Biochronology#Land-vertebrate_ages">Land Vertebrate Faunachrons</a> - Land-vertebrate "ages" (LVAs) or faunachrons have been proposed that use other vertebrates such as dinosaurs. 

## Public Land Survey System

The <a href="https://en.wikipedia.org/wiki/Public_Land_Survey_System">Public Land Survey System</a> (PLSS) is the surveying method developed and used in the United States to plat, or divide, real property for sale and settling. Terms included for this group include:

 - Section - An approximately one-square-mile block of land. There are 36 sections in a survey township. 
 
 - Township - A measure of the distance north or south from a referenced baseline, in units of six miles. 
 
 - Range - A measure of the distance east or west from a referenced principal meridian, in units of six miles. 
 
Aliquots, a terse, hierarchical reference to a piece of land, in which successive subdivisions of some larger area are appended to the beginning of the reference. For example, SW1/4 NW1/4 S13, T1SR20E refers to the southwest quarter of the northwest quarter of section 13 of Township 1 South Range 20 East (a 40-acre parcel). may be added, but this requires coordination with the Arctos DBA. 

## Site Land Status

Site land status is meant to designate private lands through the use of ownership terms. Lands can be designated as private with the "private" Site Land Status" attribute and property ownership can be recorded in the attribute remark. 

## Locality Encumbrance

When it is necessary to hide a locality from public view, use the private (access) attribute. For more on this attribute, see [Encumbering Locality](http://handbook.arctosdb.org/how_to/How-to-Encumber-Locality.html#encumbering-locality).

## Geology Attributes

[Geology Attributes](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE) attach geology information to [Locality](http://handbook.arctosdb.org/documentation/locality.html). Each locality may contain any number of geology attributes. Each Geology Attribute may be accompanied by a determiner (an [Arctos Agent](http://handbook.arctosdb.org/documentation/agent.html)), determination date, determination method, and a remark.

### Structure

UAM@ARCTOS&gt; desc geology_attributes

|Name                                  |`Null`?    |Type|
|--------------------------------------|-----------|----|
|`GEOLOGY_ATTRIBUTE_ID`                  |`NOT NULL`   |`NUMBER`|
|`LOCALITY_ID`                           |`NOT NULL`   |`NUMBER`|
|`GEOLOGY_ATTRIBUTE`                     |`NOT NULL`   |`VARCHAR2(255)`|
|`GEO_ATT_VALUE`                         |`NOT NULL`   |`VARCHAR2(255)`|
|`GEO_ATT_DETERMINER_ID`                 |           |`NUMBER`|
|`GEO_ATT_DETERMINED_DATE`               |           |`DATE`|
|`GEO_ATT_DETERMINED_METHOD`             |           |`VARCHAR2(255)`|
|`GEO_ATT_REMARK`                        |           |`VARCHAR2(4000)`|

 

### Searching

Geology attributes are asserted individually, however, portions of the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE) include a hierarchical structure which makes it possible to locate cataloged items attributed to strata which is more specific than the search term.
