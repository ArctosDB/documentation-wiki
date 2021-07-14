---
title: Best Practice: Choosing an Institutional and Collection Acronyms (GUID Prefix)
authors: Teresa Mayfield-Meyer
date created: 2021-07-13
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

# Best Practice - Creating a Meaningful GUID Prefix 

What is a GUID Prefix? Before you make any decisions about one, you should know what it is. Start by reading the [GUID Prefix Documentation ](https://handbook.arctosdb.org/documentation/catalog.html#guid-prefix).

## General Recommendations for GUID Prefix 

We recommend choosing a GUID_PREFIX that will survive being transferred through various mechanisms, displayed in web pages that might use “fancy” formatting, or typed by users with many kinds of input devices in many languages. This means using only upper and lower-case ASCII letters (A-Z,a-z), other than the required colon. 

### Before the Colon - Institution Acronym

We recommend that the characters before the colon match an existing institution acronym if one has already been in use, especially if it is recorded in a directory such as the <a href="http://sweetgum.nybg.org/science/ih/" class="external">Index Herbariorum</a> or has been cited in publications. This makes finding legacy collection use and publication citations easier and also helps those who have worked with your collection in the past find your newly published records in Arctos. In general we recommend that this be the same as the <a href="https://handbook.arctosdb.org/documentation/catalog.html#institution-acronym" class="external">Institution Acronym</a>, but it is not required to be so.

#### why would it be different?

### After the Colon - Collection Acronym

We recommend that the characters after the colon provide a brief description of the collection. In some cases, using the <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde" class="external">Arctos collection code</a> may be a good choice. There are many examples of this in Arctos:

 - MSB:Mamm
 - MVZ:Herp
 - UAM:Art
 
However, you are not limited to using Collection Code, you are only limited by the GUID Prefix length requirement and your imagination.
 
 **Caution** 
Think of the GUID Prefix as something you will need to live with forever. Make sure that the Collection Acronym you choose is as simple as possible, but reflects the nature of the cataloged items.

There are many reasons to deviate from the collection codes for collection acronym. One is an institution which holds more than one collection for which they would use a single collection code. For example, the New Mexico Museum of Natural History and Science has two Earth science or "<a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde#es" class="external">ES</a>" collections - Fossils and Minerals. These are set up as follows:

Collection | Institutional Acronym | Collection Acronym | GUID Prefix | Collection Code 
  -- | -- | -- | -- | -- 
Fossils | NMMNHS | Paleo | NMMNH:Paleo | ES 
Minerals | NMMNHS | Min | NMMNH:Min | ES 

