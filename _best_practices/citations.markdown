---
title: Best Practice - Citation of Collection Objects with Data in Arctos
author: Teresa J Mayfield-Meyer previous authors unknown
date: 2021-10-12
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)
*This is a draft document; recommendations have not been finalized.*

# Best Practice - Citation of Collection Objects with Data in Arctos

Unfortunately, there are no clear universal guidelines for citing collection objects and there are potential complications for all collection object identifiers. When providing guidance to users of collection objects the following should be considered in addition to the nature of the material (or data) being used, the nature of the work being done, and anything else which might effect how data and objects (or samples) are ultimately accessed, both digitally and physically. 

It also may be useful to consider community terms. For biological collections, the Darwin Core exchange standard is useful and the record-level term <a href="https://dwc.tdwg.org/terms/#dcterms:bibliographicCitation" target="blank">bibliographicCitation</a>.

> A bibliographic reference for the resource as a statement indicating how this record should be cited (attributed) when used.

    From Dublin Core, "Recommended practice is to include sufficient bibliographic detail to 
    identify the resource as unambiguously as possible." The intended usage of this term in 
    Darwin Core is to provide the preferred way to cite the resource itself -     "how to cite 
    this record". 

Given that, what should an Arctos collection require of those who borrow and make use of collection objects or data in research and how can we get users to follow instructions?

This document will offer up recommendations for all collections with data in Arctos.

## Choosing an Identifier

When choosing an identifier to be cited, the following should be considered:

* **Uniqueness**: The best identifier cannot be ambiguous (there must be only one object to which is refers) and has no mechanism for becoming non-unique.
* **Persistence**: The best identifier is easy to sustain over long periods of time (in perpetuity!).
* **Machine Resolvability**: The best identifier will be easy for machines to recognize. If users cite machine-resolvable 
identifiers then Arctos can find them, even if there are no other clues that the data were used and the user fails to report the publication. 
* **Human Resolvability**: The best identifier will also be easy for humans to recognize and use to locate objects. It should probably be printed on object labels.

With the above in mind, the Arctos Working Group recommends requesting citations in the form of the full Arctos catalog record or stable part identifier <a href="https://en.wikipedia.org/wiki/URL" target="_blank">Uniform Resource Locator (URL)</a>, however, collections may choose other options and we have listed them roughly in order of preference below. 

### Full catalog record or stable part identifier URL 

[http://arctos.database.museum/guid/UAM:Ento:145576](http://arctos.database.museum/guid/UAM:Ento:145576) or stable part identifier **NEED EXAMPLE**

The full catalog record URL or stable part URL represent web addresses on the Internet and so are <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank">Globally Unique Identifiers (GUID)</a>. This makes them the preferred method of citation for all catalog records, parts and occurences in Arctos. There are no extra identifiers to acquire, making this the easiest GUID to use and share for all Arctos catalog records and parts.

* Uniqueness is guaranteed.
* Persistence is excellent.
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. (It'll probably work for a few more decades.)
* Human Resolvability is excellent; the Arctos catalog record or stable part identifier URL contains the primary object identifier (catalog number) http://arctos.database.museum/guid/**UAM:Ento:145576**

### <a href="https://en.wikipedia.org/wiki/Digital_object_identifier" target="_blank">Digital Object Identifier (DOI)</a> 

[https://doi.org/10.7299/X75Q4W7G](https://doi.org/10.7299/X75Q4W7G)

* Uniqueness is guaranteed.
* Persistence is excellent; the identifier can survive the deprecation of Arctos and the HTTP protocol.
* Machine Resolvability is inherent and has no dependencies.
* Human Resolvability is poor; most object labels will not include DOIs and the DOI does not conatain any percevable relationship to the object or any of its other potential identifiers.

### [Locked Arctos Archives](https://handbook.arctosdb.org/documentation/archive.html#locked-archives) 

[http://arctos.database.museum/archive/ak-liogluta](http://arctos.database.museum/archive/ak-liogluta)

* Uniqueness is guaranteed.
* Persistence is very good, although data in Arctos is required to resolve to catalog records.
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. 
* Human Resolvability is poor; object labels will not include the Archive Name.

### DOI for Locked Arctos Archives

[https://doi.org/10.7299/X7JH3M91](https://doi.org/10.7299/X7JH3M91)

* Uniqueness is guaranteed.
* Persistence is excellent, although Arctos is required to resolve to catalog records.
* Machine Resolvability is inherent, but reliant upon Arctos. 
* Human Resolvability is poor; object labels will not include DOI. 

### [Unlocked Arctos Archives](https://handbook.arctosdb.org/documentation/archive.html#unlocked-archives) 

[http://arctos.database.museum/archive/catnum12](http://arctos.database.museum/archive/catnum12)

* Uniqueness is guaranteed.
* Persistence is intermediate. Arctos is required to resolve to catalog records, there is nothing to prevent the Archive from being modified or catalog records being encumbered or deleted.
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. 
* Human Resolvability is poor; object labels will not include Archive Name.

### "Darwin Core (DwC) Triplet" (UAM:Mamm:12)

For many years this has been the standard for citing collection objects. We recommend reading <a href="https://doi.org/10.1371/journal.pone.0114069" target="_blank">The trouble with triplets in biodiversity informatics: a data-driven case against current identifier practices</a>. 

* Uniqueness is extremely unlikely; there are at least 4 "UAM:Mamm" collections.
* Persistence is lacking
* Machine Resolvability is extremely unlikely.
* Human Resolvability is poor; someone familiar with the objects and publication might figure it out.


### [Arctos Saved Searches](https://handbook.arctosdb.org/documentation/archive.html#saved-searches) 

[http://arctos.database.museum/saved/catnum12](http://arctos.database.museum/saved/catnum12)

* Uniqueness is inherent.
* Persistence is nonexistent; results change as data are added or altered
* Machine Resolvability is dependent upon persistence, of which there is none. That is, these are machine-discoverable but the current catalog records may have little to do with the used catalog records. 
* Human Resolvability is nonexistent.

### [Projects](https://handbook.arctosdb.org/documentation/projects.html) 

[http://arctos.database.museum/project/beringian-coevolution-project-bcp](http://arctos.database.museum/project/beringian-coevolution-project-bcp)

* Uniqueness is inherent.
* Persistence is nonexistent; results change as data are added or altered
* Machine Resolvability is dependent upon persistence, of which there is none. That is, these are machine-discoverable but the current catalog records may have little to do with the used catalog records. 
* Human Resolvability is poor; some resolution is possible, but results must be uncertain. 

### “Local” identifiers ("12")

These include AF, NK, ALAAC, collector numbers, bare catalog numbers, or catalog number with nonstandard prefix ("Alaska 12") 
  
* Uniqueness is extremely unlikely
* Persistence is poor
* Machine Resolvability is nonexistent. 
* Human Resolvability is very poor; someone familiar with the objects can possibly figure it out, sometimes, with low certainty.