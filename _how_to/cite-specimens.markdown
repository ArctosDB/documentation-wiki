---
title: How To Cite Specimens
layout: default_toc
---


# *This is a draft document.*




# How to cite specimens



# For Users

* It is strongly preferred to cite specimens individually. To do so, use the information in the "cite_this_as" field in the Arctos download.

```
AWG: What should we put in that field?
```
* If citing individual specimens is not possible or practical, contact the Curator(s) of the collection(s) with which you are working for 
guidance. 

--- 
# For Curators

Unfortunately, there are no clear universal guidelines for citing specimens, and there are potential problems for all specimen identifiers. 

## Considerations 

When choosing an identifier, the following should be considered:

### Uniqueness

A "good" identifier cannot be ambiguous; there must be only one "thing" to which is refers.

### Persistence

A good identifier is easy to keep forever, and has no mechanism for becoming non-unique.

### Machine Resolvability

A good identifier will be easy for machines to recognize. If users cite machine-resolvable 
identifiers then Arctos can find them, even if there are no other clues that the data were used and the user fails to report the publication. 

### Human Resolvability

A good identifier will be easy for humans to recognize, and use to locate specimens; it should probably be printed on specimen labels.


## Possibilities

These are presented roughly in order of preference.

### Full specimen GUID

* Uniqueness is guaranteed.
* Persistence is excellent
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. (It'll probably work for a few more decades.)
* Human Resolvability is excellent; the GUID contains the primary specimen identifier (catalog number)


### DOI (for specimen GUID)


* Uniqueness is guaranteed.
* Persistence is excellent; the identifier can survive the deprecation of Arctos and the HTTP protocol.
* Machine Resolvability is inherent and has no dependencies.
* Human Resolvability is poor; most specimen labels do not include DOIs.

### Locked Archives

* Uniqueness is guaranteed.
* Persistence is very good, although data in Arctos is required to resolve to specimens.
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. 
* Human Resolvability is poor; specimen labels do not include Archive Name.

### DOI (for locked archives)

* Uniqueness is guaranteed.
* Persistence is excellent, although Arctos is required to resolve to specimens.
* Machine Resolvability is inherent, but reliant upon Arctos. 
* Human Resolvability is poor; specimen labels do not include DOI.


### Unlocked Archives

* Uniqueness is guaranteed.
* Persistence is intermediate. Arctos is required to resolve to specimens, there is nothing to prevent the Archive from being modified
or specimens being encumbered or deleted.
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. 
* Human Resolvability is poor; specimen labels do not include Archive Name.

### "DWC Triplet" (UAM:Mamm:12)


* Uniqueness is extremely unlikely; there are at least 4 "UAM:Mamm" collections.
* Persistence is lacking
* Machine Resolvability is extremely unlikely.
* Human Resolvability is poor; someone familiar with the specimens and publication might figure it out.


### Saved Searches

* Uniqueness is inherent.
* Persistence is nonexistent; results change as data are added or altered
* Machine Resolvability is dependent upon persistence, of which there is none. That is, these are machine-discoverable but the 
current specimens may have little to do with the used specimens. 
* Human Resolvability is nonexistent.

### Projects

* Uniqueness is inherent.
* Persistence is nonexistent; results change as data are added or altered
* Machine Resolvability is dependent upon persistence, of which there is none. That is, these are machine-discoverable but the 
current specimens may have little to do with the used specimens. 
* Human Resolvability is poor; some resolution is possible, but results must be uncertain.


### Random “local” identifiers

These include AF, NK, ALAAC, collector numbers, bare catalog numbers (“12”), or catalog number with nonstandard prefix ("Alaska 12")
 
 
* Uniqueness is extremely unlikely
* Persistence is poor
* Machine Resolvability is nonexistent. 
* Human Resolvability is very poor; someone familiar with the specimens can possibly figure it out, sometimes, with low certainty.