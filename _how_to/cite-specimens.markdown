---
title: How To Cite Specimens
layout: default_toc
---

# How to cite specimens

Unfortunately, there are no clear universal guidelines for citing specimens, and there are potential problems for all specimen identifiers. 

## Considerations 

When choosing an identifier, the following should be considered:

### Uniqueness

A "good" identifier cannot be ambiguous; there must be only one "thing" to which is refers.

### Persistence

A good identifier is easy to keep forever, and has no mechanism for becoming non-unique.

### Machine Resolvability

A good identifier will be easy for machines to recognize. This facilitates automated discovery.

### Human Resolvability

A good identifier  will be easy for humans to recognize; it should probably be printed on specimen labels.


## Possibilities

These are presented roughly in order of preference

### Full specimen GUID

* Uniqueness is guaranteed.
* Persistence is excellent
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. 
* Human Resolvability is excellent; the GUID contains the primary specimen identifier (catalog number)


### DOI (for specimen GUID)


* Uniqueness is guaranteed.
* Persistence is very good, although an update to EZID may be required if the specimen is removed from Arctos.
* Machine Resolvability is inherent and has no dependencies.
* Human Resolvability is poor; most specimen labels do not include DOIs.

### Locked Archives

* Uniqueness is guaranteed.
* Persistence is very good, although Arctos is required to resolve to specimens.
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. 
* Human Resolvability is poor; specimen labels do not include Archive Name.

### DOI (for locked archives)

* Uniqueness is guaranteed.
* Persistence is excellent, although Arctos is required to resolve to specimens.
* Machine Resolvability is inherent, but reliant upon Arctos. 
* Human Resolvability is poor; specimen labels do not include DOI.


### Unlocked Archives

* Uniqueness is guaranteed.
* Persistence is intermediate. Arctos is required to resolve to specimens, there is little to prevent the Archive from being modified
or specimens being encumbered or deleted.
* Machine Resolvability is inherent, but reliant upon Arctos and the HTTP protocol. 
* Human Resolvability is poor; specimen labels do not include Archive Name.

### "DWC Triplet" (UAM:Mamm:12)


* Uniqueness is extremely unlikely; there are at least 4 "UAM:Mamm" collections.
* Persistence is lacking
* Machine Resolvability is extremely unlikely. 
* Human Resolvability is mediocre; someone familiar with the specimens will probably figure it out.


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