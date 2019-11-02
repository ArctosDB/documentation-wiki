---
title: How to Handle Paleontology in Arctos 
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2019-11-02
---
# How to Handle Paleontolgy in Arctos

Paleonotological data can be challenging, but it can also be very rewarding to work with in Arctos. This How-To documents some of the common issues confronted when entering paleontology data in Arctos and offers solutions developed by the collections who have already addressed them. As always, if a solution appears less-than-optimal, [file an issue](https://github.com/ArctosDB/arctos/issues/new/choose) and help make Arctos better for everyone!

## Identification (Taxonomy)

Identification of paleontological material is often less precise than for extant taxa and there are special cases where a common name may be more useful than the scientific name when searching for object records. This section documents some of the special identification cases encountered by incoming collections and the methodology for recording them.

### Petrified Wood

When ALMNH paleobotany data was migrated to Arctos, all records identified as "petrified wood" in their Access database were migrated to Arctos with the identification Trachyophyta and the part name "unknown". Somewhere along the way, the common name "Petrified Wood" was been added to Trachyophyta.

While the addition of "Petrified Wood" as a common name for Trachyophyta means that ALMNH could find all of their petrified wood using a common name search, it also means that they and others might get unexpected results because there will be a lot of Trachyophyta that are not "petrified" in Arctos. While common names can be problematic, they are also the path that non-research folk use to interact with our collections, so they need to be useful somehow. In this case using the common name attached to the TAXON_NAME did not seem useful.

As a result, the community suggests the following treatment for "petrified wood" in Arctos

For object identification use the [A {string} formula](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXA_FORMULA) "Trachyophyta {Petrified Wood}" (if a more refined taxon name can be presented, then change Trachyophyta to whatever that name is). For these objects, the [part name](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTSPECIMEN_PART_NAME) should be "wood" and the [part preservation](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPART_PRESERVATION) should be "petrifaction".


