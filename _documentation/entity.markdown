---
title: Entities
author: ArctosDB, Teresa J Mayfield-Meyer
date: 2024-06-11
layout: default_toc
---

<!--- [Add to current update request](https://github.com/ArctosDB/documentation-wiki/issues/262) --->

# Entities

Entities in Arctos are assemblages of catalog records related in some particular way.

## Usage

Entities can serve many purposes. Examples include:

 - Providing a resolvable identifier for use as dwc:Organism ID as in <a href="https://arctos.database.museum/guid/Arctos:Entity:1">Arctos:Entity:1</a>
 - Three parts of a dress that are cataloged separately as in <a href="https://arctos.database.museum/guid/Arctos:Entity:2">Arctos:Entity:2</a>
 - All shrews stored in a jar from which ectoparasites were extracted when it is not known which particular shrew the ectoparasites fell from as in <a href="https://arctos.database.museum/guid/Arctos:Entity:38">Arctos:Entity:38</a>

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

Catalog records bearing an Arctos Entity record GUID as Organism ID will link to the Entity, and provide a link to locate all other records which share the ID.

## How To

Instructions for doing specifc tasks related to Agents in Arctos

* [How To Handle Organisms in Arctos](https://handbook.arctosdb.org/how_to/Organisms.html)
  
## Community Discussion

[Github Issue #262](https://github.com/ArctosDB/documentation-wiki/issues/262)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/entity.markdown" target="_blank">here</a>.
