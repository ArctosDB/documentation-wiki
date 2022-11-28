---
title: How To Catalog an Observation 
author: Observation Interest Group, Ally Coconis (2019-06-19)
date: 2022-11-28
layout: default_toc
---
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

The Observation Interest Group is currently working on improving this document. Please [file an issue](https://github.com/ArctosDB/arctos/issues/new) if you have questions about cataloging observations in Arctos.

# **How To Catalog an Observation**

An observation in Arctos should “represent an occurrence record rather than a physical object”. 

## Collection Type

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Do not rely on the collection name or code to indicate whether the cataloged items are observations.

Some institutions prefer to record observations in a separate collection. 

Examples of Observational collections:
* [MVZObs:Bird]( https://arctos.database.museum/collection/MVZObs:Bird)
* [MSBObs:Mamm](https://arctos.database.museum/collection/MSB:Mamm)
* [UTEPObs:Herp](https://arctos.database.museum/collection/UTEPObs:Herp)

But observations may be integrated into any collection.

Examples of observations recorded in collections not specifically designated as observation collections:



## Cataloged Item Type

However you choose to organize your observational data, an observation can be identified as such by selecting one of the observation cataloged item types:

 * [human observation](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcataloged_item_type#human_observation)
 * [machine observation](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcataloged_item_type#machine_observation)
 
 
Everything below this line has not been reviewed by the Arctos Observation Interest Group
___________________________________________________________________________________________________

In the Specimen/Event section, under Specimen/Event Type drop-down menu, choose “observation”.

If your institution has recordings or images that are the only records of a Specimen Event available, the part name can be entered as media (and the media attached).

If, however, there is no such media to attach, but the Specimen Event can be linked to other known database records such as GBIF or iNaturalist to confirm occurrence, the part name can be entered as “observation”. The current method of entry is as follows:

* Part name: observation
* Condition: unknown
* Part Disposition: observation

Another option to consider is Agent entry. “Collector” may be the appropriate term, however “maker”, or “copyright holder” may be more applicable for Specimen Events with attached media.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How to Enter Observational Data.markdown" target="_blank">here</a>.
