---
title: Best Practice - Creating a Meaningful GUID Prefix 
authors: Teresa Mayfield-Meyer
date created: 2021-07-13
layout: default_toc
---

# Best Practice - Creating a Meaningful GUID Prefix 

What is a GUID Prefix? Before you make any decisions about one, you should know what it is. Start by reading the [GUID Prefix Documentation ](https://handbook.arctosdb.org/documentation/catalog.html#guid-prefix).

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**  

In conjunction with catalog number the GUID Prefix forms a unique identifier within Arctos, and in conjunction with Arctos’ URI (https://arctos.database.museum/guid/) forms a Globally Unique Identifier (GUID) for the catalog record. For example: The Museum of Vertebrate Zoology's catalog record 134762 has a GUID Prefix of MVZ:Bird which forms the GUID https://arctos.database.museum/guid/MVZ:Bird:134762.

> The guid prefix does not need to be the full name of a taxonomic group, plural or not. But it is important to be consistent within Arctos, and to be simple. The main thing about the guid prefix is that it should be something concise and easy to remember so that it will not be too difficult for researchers - you want to make it as easy as possible for anyone to cite these guids or urls for specimen citation. Long, difficult to remember complex acronyms are going to result in poorly cited or incorrect specimen citations and confusion.

 * **Mariel Campbell, Collection Manager of Genomic Resources at Museum of Soputhwestern Biology**

## General Recommendations for GUID Prefix 

We recommend choosing a GUID_PREFIX that will survive being transferred through various mechanisms, displayed in web pages that might use “fancy” formatting, or typed by users with many kinds of input devices in many languages. This means using only upper and lower-case ASCII letters (A-Z,a-z), other than the required colon. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**  

Think of the GUID Prefix as something you will need to live with forever. Make sure that the GUID Prefix you choose is as simple as possible, but reflects the nature of the cataloged items. Remember, the only real limitation on GUID Prefix is that it be no longer than 20 characters and include a colon that is neither the first nor the last character. It will be most useful if the remaining characters consist of upper and/or lower-case ASCII letters (A-Z,a-z).

### Before the Colon - Institution

We recommend that the characters before the colon match an existing institution acronym if one has already been in use, especially if it is recorded in a directory such as <a href="http://sweetgum.nybg.org/science/ih/" class="external">Index Herbariorum</a>, <a href="https://www.gbif.org/grscicoll">Global Biodiversity Information Facility Registry of Scientific Collections</a> or has been cited in publications. This makes finding legacy collection use and publication citations easier and also helps those who have worked with your collection in the past find your newly published records in Arctos. In general we recommend that this be the same as the <a href="https://handbook.arctosdb.org/documentation/catalog.html#institution-acronym" class="external">Institution Acronym</a>, but it is not required to be so.

One reason to deviate from the Instution Acronym for Institution is when collections have traditionally used something different from what the institution currently uses. For example, the Arkansas Center for Biodiversity Collections (Arctos Instiution Acronym ACBC) includes the STAR Herbarium, which is registered with the <a href="http://sweetgum.nybg.org/science/ih/herbarium-details/?irn=123984" class="external">Index Herbariorum</a> and multiple other collections previously published as "ASUMZ". In this case, the Arkansas Center for Biodiversity Collections has decided to use the registered "STAR" and legacy "ASUMZ" acronyms as the institution information in the collections' GUID prefixes in order to maintain stability.

Collection | Collection Type | Institution Acronym | GUID Prefix 
  -- | -- | -- | -- 
Herbarium | Herb | ACBC | STAR:Herb 
Birds | Bird | ACBC | ASUMZ:Bird


### After the Colon - Collection 

We recommend that the characters after the colon provide a brief description of the collection. In general we recommend that this be the same as the <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde" class="external">Collection Type</a>. There are many examples of this in Arctos.

 - MSB:Mamm
 - MVZ:Herp
 - UAM:Art
 
However, use of the Collection Type is not a requirement. One reason to deviate from the collection types for Collection is when an institution holds more than one collection for which they would use a single collection type. For example, the New Mexico Museum of Natural History and Science has two Earth Science or "<a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde#es" class="external">ES</a>" collections - Fossils and Minerals. These are set up as follows:

Collection | Collection Type | GUID Prefix 
  -- | -- | -- 
Fossils | ES | NMMNH:Paleo 
Minerals | ES | NMMNH:Geol 


## Summary

 - Arctos GUIDs are expected to be permanent, so choose carefully.
 - The GUID Prefix can be, but doesn't need to be dependent upon Institution Acronym and/or Collection Type.
 - The GUID Prefix must be no longer than 20 characters and include a colon that is neither the first nor the last character.
 - The GUID Prefix should consist of upper and/or lower-case ASCII letters (A-Z,a-z) other than the requisite colon.
 - A review of <a href="https://arctos.database.museum/home.cfm" class="external">GUID Prefixes currently in use</a> may be helpful!
  - Check <a href="https://www.gbif.org/grscicoll">Global Biodiversity Information Facility Registry of Scientific Collections</a> and the <a href="http://sweetgum.nybg.org/science/ih/herbarium-details/?irn=123984" class="external">Index Herbariorum</a> to see if your collections have legacy Institutional Acronyms.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_best_practices/GUID.markdown" target="_blank">here</a>.
