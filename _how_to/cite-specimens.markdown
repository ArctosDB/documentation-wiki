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

### Full specimen GUID

#### Uniqueness is guaranteed.
#### Persistence is excellent
#### Machine Resolvability is inherent
#### Human Resolvability is excellent; the GUID contains the primary specimen identifier (catalog number)





Random “local” identifiers – AF, NK, ALAAC, collector numbers, etc.; Bare catalog numbers (“12”), or catalog number with nonstandard prefix (“UAM 12”; “Alaska 12”)

In short, avoid these things. They’re sometimes handy for limited-scope “local” projects (such as helping a person find their way from a Nunc tube to a datasheet, or “softlinking” collectors and field notebooks), but should not be published anywhere that context (without which they are invariably meaningless) cannot be guaranteed. These are seldom (never?) unique, so use with caution.
Arctos-issued “GUID” (eg, UAM:Mamm:12)

This may be the most-precise allowable format for things like print publications. GenBank requires this format, but note that GenBank’s registration system (1) ensures uniqueness, and (2) does not necessarily match what’s in Arctos. (Arctos “COA” is “COA<USA>” in GenBank, for example.) These are not necessarily globally unique (the University of Arkansas at Monticello may have a UAM:Mamm:12) so have limited utility for automated comparison. People will probably be able to figure them out, from both publications and specimen labels.
Arctos-issued “GUID-bearing” URLs (eg, http://arctos.database.museum/guid/UAM:Mamm:12)

These are globally unique, but aren’t very nice for things like printing. Computers can use them – Arctos will respond with HTML or RDF. They are not truly persistent, but will probably be functional for a few more decades – the example will not survive the deprecation of the http protocol or the UAM Mammal Collection moving to a new collection management system. These are preferred for limited-term online “publications” and data repackaging such as GBIF (which is periodically refreshed).
DOIs

These are globally unique, and designed to survive domain and protocol changes (with adequate curatorial commitment). They make no sense in the context of specimen labels – computers are required to resolve them. Do not include resolvers (eg, dx.doi.org) and do not wrap the DOI in HTML (eg, <a href=”http://dx.doi.org/mydoi“>http://dx.doi.org/mydoi</a> or http://dx.doi.org/mydoi), but simply prefix them with “doi:” (doi:mydoi).
Saved Searches

Arctos provide the ability to save a search, and provides actionable unique identifiers in the form of URLs for saved searches. These are dynamic, and always reflect the data at the time they’re used, NOT at the time they’re created. Saved searches may be created by anyone with an Arctos account.
Projects

Project provide a means for (indirectly) linking to many  specimens, and also provide a mechanism for examining specimen usage, “softlinking” publications in the absence of useful citations, or grouping multiple related loans. Projects may be changed by altering name or URL, or by adding or removing specimens by persons with proper Curatorial access. That is, they are as stable as Curators make them.
Archives

Archives are much like saved searches, except they are not dynamic. (They are specimen-based, not criteria-based.) A specimen will remain in an Archive despite re-identifications, etc., which might cause it to no longer appear in a saved search. Archives may be further divided into two classes:

Unlocked Archives may be created by any user. These should be viewed as “static saved searches.”

Operators with high-level administrative access may create Locked Archives. Locked archives cannot be unlocked, altered, or changed, cannot contain “mask record” encumbered specimens, and specimens in locked archives are protected from deletion or “mask record” encumbering. This functionality guarantees the indefinite persistence and integrity of the Archive.