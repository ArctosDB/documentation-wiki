---
title: Entities
author: ArctosDB
date: 2021-05-12
layout: default_toc
---

# Entities

Entities are primarily assemblages of catalog records intended to represent DWC:Organisms, but could easily be extended to other types of records and other types of assemblies.

## Usage

Entities serve initially and primarily to provide a resolvable identifier for use as Organism ID.


## Model

### Entity

Entity is the "core" table. Entities consist of a unique identifier (in the form of a URL) and a type. Entity type is controlled by [ctentity_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctentity_type)

### Entity Assertion


Entity assertions are metadata which clarify the Entity. An Entity can have any number of Assertions. Datatype is loosely enforced; Assertions are primarily intended as a discovery mechanism. 

Fields include:

* assertion_type: controlled by [ctentity_assertion_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctentity_assertion_type)
* assertion_value: text
* assertion_url: link to the assertion (in some form)
* assertion_remark: supporting comments

## Examples

The simplest use case involves simply creating an Entity. Creation is available to authorized users after search results; users are expected to ensure that they are not creating functional duplicates. (True duplicates are prevented.)

<img width="595" alt="Screen Shot 2021-05-12 at 8 46 58 AM" src="https://user-images.githubusercontent.com/5720791/118004829-aaaf8900-b2fe-11eb-861e-922c5dd144e7.png">


This results in an Entity ID suitable for use as an Organism ID.

<img width="521" alt="Screen Shot 2021-05-12 at 8 48 18 AM" src="https://user-images.githubusercontent.com/5720791/118005030-ddf21800-b2fe-11eb-9565-d332f7b17d3c.png">

It is not possible to modify an Entity after creation, but a preferred alternative can be asserted. 

<img width="856" alt="Screen Shot 2021-05-12 at 8 49 52 AM" src="https://user-images.githubusercontent.com/5720791/118005222-0bd75c80-b2ff-11eb-985b-ebe9c2fd2dfa.png">

Any number of assertions may be added. The edit form contains a method of pulling metadata for ``component`` assertions.

<img width="680" alt="Screen Shot 2021-05-12 at 8 52 03 AM" src="https://user-images.githubusercontent.com/5720791/118005621-6375c800-b2ff-11eb-9ed2-7e85761dd298.png">

<img width="861" alt="Screen Shot 2021-05-12 at 8 52 16 AM" src="https://user-images.githubusercontent.com/5720791/118005638-683a7c00-b2ff-11eb-857a-3b10eda3cd05.png">


Checks against "local" data are provided, including records wearing the Entity ID as Organism ID but not listed in the Organism:

<img width="340" alt="Screen Shot 2021-05-12 at 8 53 12 AM" src="https://user-images.githubusercontent.com/5720791/118005828-93bd6680-b2ff-11eb-952c-351969e80efe.png">

And records listed which do not wear the identifier:

<img width="1358" alt="Screen Shot 2021-05-12 at 8 54 29 AM" src="https://user-images.githubusercontent.com/5720791/118005972-b780ac80-b2ff-11eb-93c6-0c15ab788fa5.png">


Catalog records bearing an Entity ID as Organism ID will link to the Entity, and provide a link to locate all other records which share the ID.

<img width="412" alt="Screen Shot 2021-05-12 at 8 56 11 AM" src="https://user-images.githubusercontent.com/5720791/118006218-edbe2c00-b2ff-11eb-8078-d5f0bbebb308.png">

## Choosing Organism ID

[ Consider moving this to Other ID documentation ]

Any string may be used as Organism ID. Some possibilities and their implications include:

### Arctos Entity ID

Arctos Entities are currently our recommended Organism ID.

* Is a GUID (Globally Unique IDentifier)
* Is resolvable
* Bears metadata
* Easily tested for existence and suitability
* Is controlled by the Arctos Community
* Currently used only by the Arctos Community

### Other Resolvable Identifiers

Other Resolvable Identifiers are more or less "anything with a URL." These include WikiData, and potentially things like zoo records (should such come online). These are "good" identifiers by virtue of being globally unique and resolvable, but may vary wildly on attributes such as:

* persistence
* control (including vandalism prevention)
* ability to carry metadata or form links to relevant data
* ability to be tested for existence or suitability

### Non-resolvable Identifiers

Non-resolvable Identifiers are strings, generally issued by some (perhaps unknown) Agent. These are generally "less good" identifiers in that they:

* are often represented in many forms (ABC123,ABC-123, ABC 123, ...)
* can contain no mechanism to test for suitability
* can bear no metadata
* may or may not be unique

Examples include:

* USGS Bird Banding Laboratory numbers
* GAN numbers (zoo identifiers)
* Mexican Wolf Studbook numbers
* Collector numbers
