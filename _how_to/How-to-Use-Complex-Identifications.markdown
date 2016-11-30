---
title: How To Use Complex Identifications
layout: default_toc
---

## Capabilities

Arctos provides for the ability to link identifications (what a thing is called) with taxonomy (a formal naming system) via [http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXA_FORMULA](Identification Formula). This allows curatorial users to assert any amount of precision; a specimen may be exactly representative of a formal taxon name, there may be some ambiguity or mixing involved, or taxonomy may have only tangential relationships to the identification.

## Taxonomy

Note that Arctos taxonomies have no imposed limitations; these instructions work equally well for biological, mineral, or cultural taxonomies. Note also that Arctos is unique in fully separating taxonomy (e.g., published and accepted-as-names terms) from identifications; in all other known systems these data are [confounded](https://en.wikipedia.org/wiki/Confounding) and therefore cannot both accurately represent the known information and maintain formality. Arctos can.

## The Exception

Arctos (purposefully) contains precisely one informal taxonomic term, "unidentifiable." Please consider the scale of Arctos when using this term; anything cataloged in a bird collection can probably be identified as "Animalia," which is drastically more precise than "unidentifiable," for example. (That is, knowing that an object is **not** a virus, redwood, rock, video recording, or manufactured item - all of which occur in Arctos - is a very valuable thing.)

## Normal Stuff

The various formula are somewhat straightforward, allowing mixing taxon names and tightly controlled text strings in predictable ways to produce things like hybrids and denote uncertainty, and these should be strongly favored when possible as predictable data are inherently discoverable. When such formulaic approaches are not sufficient, the "A {string}" formula is available.

## History of Complex IDs

The "A {string}" formula was initially developed for "working names," in which an often-descriptive term is used for a specimen (often one of several groups) before formal names are published. The "A" (like all other taxa formulae) links to a single taxon, generally a genus (when a new species is being described) or species (for subspecies). Note that identifications are essentially unsearchable under this model, while linked taxonomy remain formal. The working name will be supplied by a person (not chosen from an authority) and may contain typographical errors, unpredictable formats, or anything else.

## Current Usage

In cultural collections, informal identification strings are the norm; there is no limit on the diversity of objects humans may produce, and there is no formal naming or categorization system for such objects, and so a less-formal system is required. At the same time, there are various taxonomies attempting to categorize cultural items, and cultural items are often made from materials which may have associated taxonomies (animals, plants, fungi, and minerals). While retaining the "A {string}" terminology to reflect the capabilities of the specimen bulkloader, we have in the Arctos individual specimen identification forms simultaneously added the ability to link a string identification to any number of taxon names.

## Biological Implications

Cultural items are often made of material which is extremely valuable from a natural history perspective, including extinct species (such as mammoth) and items of significant age representing pre-nuclear and pre-industrial collecting activity. These data have traditionally been cataloged as cultural items in cultural collections, and have been generally inaccessible to the natural history community. Arctos uniquely provides the mechanism to simultaneously represent these objects both as items of cultural value and items of biological or ecological value.

## Examples

_You may need to log OUT of Arctos and any portals to access the following links._

### Unidentifiable

Many cultural items are (relatively) recently manufactured of manufactured materials, have little association with any taxon, and the namestring in such cases is generally linked to taxon "unidentifiable."

* [Yukon Stove](http://arctos.database.museum/guid/UAM:EH:UA79-011-0002AE)
* [Whistle](http://arctos.database.museum/guid/UAM:EH:UA2009-020-0031)

### Simple associations

#### Cultural Collections

Other items may have straightforward links to taxonomies, but also have cultural significance. When cataloged in cultural collections, these generally require a descriptive name but may be linked to biological or mineral taxonomies. These may be identified with varying specificity, ranging from "some kind of wood" to "Betula papyrifera."

* [Wood](http://arctos.database.museum/guid/UAM:EH:0538-0002)
* [Birch-bark basket](http://arctos.database.museum/guid/UAM:EH:0595-5857)

#### Other Collections

It is important to stress that collection type is a poor indicator of the nature of an item. Vertebrate collections occasionally catalog culturally-important materials, and Arctos uniquely provides a cultural pathway to this material.

* [Hydrodamalis gigas (worked rib)](http://arctos.database.museum/guid/UAM:Mamm:63998)

### Complex associations

Cultural objects are often created of diverse materials, and Arctos provides a pathway of linking to any number of taxa.

* [Parka, Fur](http://arctos.database.museum/guid/UAM:EH:UA67-133-0001)

## Discoverability

This structure supports queries by identification, taxonomy, or any combination thereof. In addition to directly-assigned taxa, it is possible to query the Arctos taxonomy structure which supports collection-assigned hierarchies, hierarchies retrieved from GlobalNames.org, common names, and taxon relationships.

* [Parkas](http://goo.gl/cQjr6f)
* [Caribou (in one collection)](http://goo.gl/rzfxVK)
* [Parka made of Caribou ("Rangifer tarandus")](http://goo.gl/iuJvLC)
* [Parka made of Cervidae](http://goo.gl/eCYhuu), a [taxon term from a local classification](http://arctos.database.museum/name/Rangifer%20tarandus#Arctos)
* [Parka made of Caribou (common name)](http://goo.gl/LVbQfV)
* [Cultural items made from Cetartiodactyla](http://arctos.database.museum/SpecimenResults.cfm?taxon_name=Cetartiodactyla&collection_id=76), a [taxon term imported from National Center for Biotechnology Information](http://arctos.database.museum/name/alces%20alces#NCBI)
* [Mink (by an "unaccepted synonym")](http://goo.gl/ojx5KR)

## HowTo

Simply click the Identification tab from any specimen, type a (partial) taxon name in Associated Taxa, click Add a Row and repeat as necessary, then save.

To get the most value from taxonomy linkages, create better taxonomy information in Arctos. Add taxon relationships or common names, edit classifications to include more or better higher-level information, or encourage sources of taxonomy information to contribute to GlobalNames. Note that these tasks are shared not just across Arctos collections, but also across the Internet via GlobalNames.
