---
title: Entities
author: ArctosDB
date: 2021-05-12
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

[Add to current update request](https://github.com/ArctosDB/documentation-wiki/issues/262)

# Entities

Entities in Arctos are assemblages of catalog records related in some particular way.

## Usage

Entities can serve many purposes. Examples include:

 - Providing a resolvable identifier for use as dwc:Organism ID as in <a href="https://arctos.database.museum/guid/Arctos:Entity:1">Arctos:Entity:1</a>
 - Three parts of a dress that are cataloged separately as in <a href="https://arctos.database.museum/guid/Arctos:Entity:2">Arctos:Entity:2</a>
 - All squirrels stored in a jar from which ectoparasites were extracted when it is not known which particular squirrel the ectoparasites fell from as in **Awaiting example**

## Model

### Entity

Arctos Entities are simply catalog records in a special collection. Arctos Entities are identified with a unique identifier (in the form of a URL that begins with https://arctos.database.museum/guid/Arctos:Entity:) and an integer. 

### Entity Component Assertions

An Entity can have any number of Component Assertions and Component Assertions can be made in two ways.

#### Arctos Catalog Records

Add the complete url of any Arctos Entity record as the value for an identifier in any Arctos catalog record and this will automatically add the catalog record as a component of the Arctos Entity.

An example of this can be seen in <a href="https://arctos.database.museum/guid/MSB:Mamm:326433"> MSB:Mamm:326433</a> which includes https://arctos.database.museum/guid/Arctos:Entity:1 as the organism ID identifier.

Catalog records outside of Arctos can use an Arctos Entity url as dwc:organismID and in time we aspire to add the catalog record identifier from outside resources to the Arctos Entity record when it is discoverable.

#### Records Outside of Arctos

Adding identifiers that are not Arctos catalog record urls to the Arctos Entity directly will not add new component lines to the entity, but it will alert others that there are associaed catalog records outside of Arctos. If an non-Arctos catalog record can be identified with a url, adding the url will create a link to the associated record. Eventually, we aspire to work with other collection management systems to add compnent details to Arctos Entities in the same way we add components from within Arctos. Who wants to collaborate?

Catalog records bearing an Entity ID as Organism ID will link to the Entity, and provide a link to locate all other records which share the ID.

## Community Discussion

[Github Issue #262](https://github.com/ArctosDB/documentation-wiki/issues/262)

[ Consider moving this to Other ID documentation ]

## Choosing Organism ID

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