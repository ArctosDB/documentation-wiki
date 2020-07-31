---
title: Locality Attributes
author: Dusty McDonald, Teresa Mayfield-Meyer
layout: default_toc
---

# Locality Attributes

Locality Attributes in Arctos are used to add descriptive terms to a [Locality](http://handbook.arctosdb.org/documentation/locality.html). These terms are controlled by the vocabulary contained in the [ctlocality_attribute_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlocality_attribute_type) code table. For a summary of geologic stratigraphy, see the <a href="https://www.idigbio.org/wiki/images/7/7f/255-271_Murphy_.pdf">International Stratigraphic Guide —An abridged version</a>

The terms applied using Locality Attributes can generally be summarized in the following groups [Stratigraphic Information](#stratigraphi-information), [Petrology](#petrology), [Biochronology](#biochronology), [Public Land Survey System](#public-land-survey-system), [site land status](#site-land-status), and a [locality encumbrance](#locality-encumbrance) attribute for localities that need to be excluded from public view. 

## Stratigraphic Information

Geologic strata may be classified according to many different properties. Each classification has its own distinctive nomenclature and some also include a hierarchical structure. The following kinds of strata are currently represented in Arctos: 

### Biostratigraphy 
<a href="https://en.wikipedia.org/wiki/Biostratigraphy">Biostratigraphy</a> is the branch of geologic stratigraphy in which strata are based on the fossil content of the rock bodies.  Biostrata can be added to localities using the biostratigraphic zone locality attribute. Biostratigraphic zone is controlled by the [ctbiostratigraphic_zone](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctbiostratigraphic_zone) code table.

### Chronostratigraphy 
<a href="https://en.wikipedia.org/wiki/Chronostratigraphy">Chronostratigraphy</a> is the branch of geologic stratigraphy in which strata are based on the time of formation of the rock bodies. [International Commission on Stratigraphy](https://stratigraphy.org/timescale/) chronostrata can be added to localities using the following locality attributes: 

 - Eon/Eonothem - (definition to come) Eon/Eonothem values are controlled by the [ctchronostrat_eon_eonothem](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_eon_eonothem) code table.
 - Era/Erathem - (defintion to come) Era/Erathem values are controlled by the [ctchronostrat_era_erathem](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_era_erathem) code table.
 - System/Period - (defintion to come) System/Period values are controlled by the [ctchronostrat_system_period](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_system_period) code table.
 - Series/Epoch - (defintion to come) Series/Epoch values are controlled by the [ctchronostrat_series_epoch](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_series_epoch) code table.
 - Stage/Age - (defintion to come) Stage/Age values are controlled by the [ctchronostrat_stage_age](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_stage_age) code table. 

Informal chronostrata can be added to localities using the informal chronostratigraphy attribute. Informal chronostratigraphy (defintion to come) informal chronostratigraphy values are controlled by the [ctchronostrat_informal](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_informal) code table. 

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

### Structure

[Locality Attributes](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlocality_attribute_type) attach information to a [Locality](http://handbook.arctosdb.org/documentation/locality.html). Each locality may contain any number of locality attributes. Each Locality Attribute may be accompanied by a determiner (an [Arctos Agent](http://handbook.arctosdb.org/documentation/agent.html)), determination date, determination method, units if required, and a remark. 

|Name                                  |`Null`?    |Type|
|--------------------------------------|-----------|----|
|`LOCALITY_ATTRIBUTE_ID`               |`NOT NULL` |`NUMBER`|
|`LOCALITY_ID`                         |`NOT NULL` |`NUMBER`|
|`LOCALITY_ATTRIBUTE_TYPE`             |`NOT NULL` |`VARCHAR2(255)`|
|`LOCALITY_ATTRIBUTE_VALUE`            |`NOT NULL` |`VARCHAR2(255)`|
|`LOCALITY_ATTRIBUTE_UNITS`            |           |`VARCHAR2(255)`|
|`LOCALITY_ATTRIBUTE_DETERMINER`       |           |`VARCHAR2(255)`|
|`LOCALITY_ATTRIBUTE_DETR_DATE`        |           |`DATE`|
|`LOCALITY_ATTRIBUTE_DETR_METHOD`      |           |`VARCHAR2(255)`|
|`LOCALITY_ATTRIBUTE_REMARK`           |           |`VARCHAR2(4000)`|
 

### Searching

Locality attributes are asserted individually, however, chronostratigraphic terms (Eon/Eonothem, Era/Erathem, System/Period, Series/Epoch, Stage/Age, Substage/Subage) include a hierarchical structure which makes it possible to locate cataloged items attributed to strata which is more specific than the search term.
