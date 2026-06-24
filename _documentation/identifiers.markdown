---
title: Identifiers and Relationships
layout: default_toc
authors: Dusty L. McDonald, Michelle Koo
date_updated: 2026-06-04
---

**Identifiers** (identifiers) are any identifiers applied to records. These identifiers may allow tracking records (as in the case of collector numbers), reference other resources (*e.g.*, GenBank numbers), or form relationships among specimens (such as hosts of parasites).

## Background

Arctos is built on the premise that each catalog record will gather all the information known about the object or record, especially resolvable, unique links to external and online resources. The Extended Specimen Network is one way to describe the Arctos implementation of Linked Open Data principles ([LOD](https://www.ontotext.com/knowledgehub/fundamentals/linked-data-linked-open-data/)) of machine-readable interlinkages across the internet. Identifiers and relationships between records are the working blocks of LOD.

Arctos originally created identifiers from a paired identifier [type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#description) and value. This worked reasonably well for short periods of time and small numbers of well-defined identifiers. However, over time and with increased users, cryptic references to people (the “ABC” in ‘ABC 123’) become lost or ambiguous. Less-precise identifiers create the possibility that several unrelated series are mixed under a type. 

## Agent-Based Identifiers

Arctos Agents are entities that perform or represent an action or activity, which may refer to a person, an organization, an institutional catalog, etc. Many “traditional” identifiers clearly reference Agents, just in ambiguous and nonpersistent ways. Arctos has made this connection explicit; all identifier values may now be “issued by” an Agent whether a person, organization or other discoverable entity.

### Benefits of the Agent-Based model

* Agents in Arctos are capable of carrying extensive metadata, including relationships to other Agents (e.g., child of, division of), dates of existence, alternate names, and external references. This supports choosing precisely the correct “type” of identifier.  
  * This model readily supports very specific and context-dependent identifiers. A short-lived project within a bigger project within a section within a division of a department of an organization is easy to handle and search, for example.   
  * This model also supports vague or low-information identifiers with the flexibility to enhance and expand knowledge of the Agent to one of high data quality. A “something about the organization, we don’t know more at this time” identifier can simply be linked to the organization as a whole, where it will be found in general searches, and made more specific when and if such information surfaces.  
      
* Agents are expected to be multitudinous, and agent-involved UIs are developed to deal with thousands of similar *things* distinguishable by metadata.   
* Agent name-string changes do not break or muddy the explicit connection between agents and identifiers. E.g. a person may change their name and thus their initials; the Agent-Based identifier model makes it explicit that “JMM 454” and “JMA 455” are indeed part of the same series.  
* Agents with similar “identifier abbreviations,” once entered properly, cannot easily be confounded.


### Drawbacks of the Agent-Based model

* We can identify none.

	

### Identifier Types in Arctos

There are three main categories of identifier that Arctos supports, and it is strongly recommended to have an Issued by agent  (even if unknown; yes, unknown is an option\!):

**Type A: Identifiers that have URLs where the “issued by” agent can be used to create explicit agent links (i.e., conforms to Linked Open Data).  Supports the Extended Specimen Network. If in doubt which type to choose, select this  type = ```identifier``` with an Issued By agent.**

| Arctos fields |  |  |
| ----- | ----- | ----- |
| *IssuedBy* | *Value* | *Type* |
| MVZ Bird Collection | https://arctos.database.museum/guid/MVZ:Bird:69400 | Arctos record GUID |
| NCBI Nucleotide \- GenBank | [http://www.ncbi.nlm.nih.gov/nuccore/EU011370](http://www.ncbi.nlm.nih.gov/nuccore/EU011370) | identifier |

**Type B: Used by specific collections for internal purposes only. Arctos may use these as shortcuts to auto-link to exactly one Agent. Not usable in the Extended Specimen Network.**

| Arctos fields |  |  |
| ----- | ----- | ----- |
| *IssuedBy* | *Value* | *Type* |
| [NK](https://arctos.database.museum/agent/21350608) | 39385 | NK |
| [AF](https://arctos.database.museum/agent/21369125) | 51930 | AF |

**Type C: Identifiers which are not resolvable (no URL-based assignments) and cannot be auto-assigned. These may be used to describe original data (e.g, collector number, field number, preparator number) where the “issued by” agent (person or organization or shared catalog) needs to be assigned manually.  Not usable in the Extended Specimen Network.**  
	

| Arctos fields |  |  |
| ----- | ----- | ----- |
| *IssuedBy* | *Value* | *Type* |
| James L. Patton | [1811](https://arctos.database.museum/search.cfm?oidtype=collector%20number&oidnum==1811&id_issuedby==James%20L.%20Patton) | collector number |
| Carla Cicero | [1062](https://arctos.database.museum/search.cfm?oidtype=preparator%20number&oidnum==1062&id_issuedby==Carla%20Cicero) | preparator number |
| Lindsay Wildlife Hospital | [2004-335](https://arctos.database.museum/guid/MVZ:Bird:184048) | identifier |
| Bell Museum Bird Collection | [X7314](https://arctos.database.museum/search.cfm?oidtype=preparator%20number&oidnum==X7314&id_issuedby==Bell%20Museum%20Bird%20Collection) | preparator number |

**Type D: Legacy identifiers that are transitioning to one of the other categories; as is, these identifiers do not provide useful information and are likely making data difficult to find and manage (at best causing confusion). None of these should be used with new data and ideally will migrate to a more explicit solution.**

	




--------------------



## Other Identifier Type

`Coll_Obj_Other_ID_Num . Other_ID_Type VARCHAR2(75) not null`

This field describes the kind of identifier using a [controlled vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type). Note that many are arbitrary; Agents are much more capable of pointing to data.




## ID Issued By

ID Issued By is the Agent issuing the identifier. "Issuing" may involve any process of creating the identifier, such as a collector writing something in a notebook or on a tag, or a subdivision of NCBI creating a URL representing a genetic sequence. Note that this allows very fine-scaled "typing" of identifiers; a subdivision of a department within an institution is easily achievable and wholly unambiguous, for example. Much of this functionality has traditionally - and very roughly - been embedded into type, or as part of the identifier itself (such as a collector's initals prefixing their collector number).

## ID Assigned By

ID Assigned By is the Agent assigning the identifier to a catalog record. Note that some identifiers may be assigned by bot agents, and these should receive extra scrutiny. This information is generally extracted from the user's environment rather than being asserted.

## assigned_date

Date on which identifier was assigned.

## ID References

ID References is a [controlled vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references)
defining the item to which the other ID was originally applied. "Self"
is the value used when an ID was applied to the current item; all other
values create a (sometimes-resolvable) relationship to another item.
Note that the "other half" of an ID-created relationship does not
necessarily resolve to a cataloged item (though it should), and is not
limited to other records in Arctos (relationships can be formed to any
online resource).

A special type ("[Arctos record GUID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type)") is available for linking records within Arctos. This type ensures that identifiers and issued by agent are properly formed.

Various tools are available for detecting and creating reciprocal relationships, or a [bot](https://handbook.arctosdb.org/documentation/bot.html) may be enabled to fully automate this process.

## remarks

A remarks field is available for any clarifying information.

## General Guidelines

Be as specific and complete as possible in choosing both an Other ID
Type and assigning an Other ID Number. Everything that follows is an
elaboration of this simple concept.

Other ID numbers are in a zero-or-one-or-many:1 relationship with
Cataloged Items. There is no limit to the number of Other IDs that may
be assigned to a catalog item, and there is no implication that IDs must
be unique, particularly identifying, or even useful. Capture every
identifier associated with a specimen – someone at some time considered
the identifier useful, and may wish to locate the specimen using it.

Loaned specimens occasionally return with de-facto other IDs (in the
form of attached barcodes, GenBank numbers, "personal numbers," etc.).
Record all these as Other IDs.

## Choosing Type

See [documentation](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type) for type definitions and guidelines. "Identifier" is usually a good choice.


### Arctos References

To reference another record in Arctos, use [Arctos record GUID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#arctos_record_guid). This type requires metadata, but will generally be able to automate the addition of such from partial information (such as the triplet).

### Personal Catalogs

To reference a person's personal catalog, [collector number](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#collector_number) or [preparator number](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#preparator_number) should be used.

### Lot-at-location

[field number](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#field_number) is appropriate for cataloging e.g., lots of fish. (This is not a recommendation for such traditional practices!)

### Organism

[Organism ID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#organism_id) is appropriate for referencing a parent Organism. These are often (but not necessarily) cataloged in the [Arctos:Entity](https://arctos.database.museum/collection/Arctos:Entity) collection, and many tools for assembling Organisms exist. Only one Organism ID is allowed.

### separated data

[UUID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#uuid) (expected, but not required, to be of the form described [here](https://en.wikipedia.org/wiki/Universally_unique_identifier)) is useful for linking data together in the absence of better identifiers.

### all other identifiers

All other identifiers are properly entered as type [identifier](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#identifier). This type should always have metadata, and some data require precise handling.

* GenBank may only issue identifiers of the pattern ``http[s]://[www].ncbi.nlm.nih.gov/nuccore/{code}``, and must be issued by [https://arctos.database.museum/agent/21349032](https://arctos.database.museum/agent/21349032)
* NCBI BioProject may only issue identifiers of the pattern ``http[s]://[www].ncbi.nlm.nih.gov/bioproject/{code}``, and must be issued by [https://arctos.database.museum/agent/21349072](https://arctos.database.museum/agent/21349072)
* NCBI SRA may only issue identifiers of the patterns ``http[s]://[www].ncbi.nlm.nih.gov/sra/{code}`` or ``http[s]://[www].ncbi.nlm.nih.gov/Traces/sra/sra.cgi\?run={code}``, and must be issued by [https://arctos.database.museum/agent/21349034](https://arctos.database.museum/agent/21349034)
* NCBI BioSample may only issue identifiers of the pattern ``http[s]://[www].ncbi.nlm.nih.gov/biosample/{code}``, and must be issued by [https://arctos.database.museum/agent/21348953](https://arctos.database.museum/agent/21348953)
*BOLD may only issue identifiers of the patterns ``http[s]://[www].boldsystems.org/index.php/Public_RecordView?processid={code}`` or ``http[s]://[www].boldsystems.org/connectivity/specimenlookup.php?processid={code}``, and must be issued by [https://arctos.database.museum/agent/21348931](https://arctos.database.museum/agent/21348931)
* MCZ:Mala may only issue identifiers of the pattern ``http[s]://mczbase.mcz.harvard.edu/guid/MCZ:Mala:{code}``, and must be issued by [https://arctos.database.museum/agent/21347821](https://arctos.database.museum/agent/21347821)
* MCZ:Mamm may only issue identifiers of the pattern ``http[s]://mczbase.mcz.harvard.edu/guid/MCZ:Mamm:{code}``, and must be issued by [https://arctos.database.museum/agent/21355896](https://arctos.database.museum/agent/21355896)
* MCZ:Orn may only issue identifiers of the pattern ``http[s]://mczbase.mcz.harvard.edu/guid/MCZ:Orn:{code}``, and must be issued by [https://arctos.database.museum/agent/21355897](https://arctos.database.museum/agent/21355897)






## How To

Instructions for doing specifc tasks related to identifiers in Arctos

 - [How to Record Prior Inclusion in Another Collection](https://handbook.arctosdb.org/how_to/How_To_Add_Object_Provenance.html)
 - [Searching Arctos](/how_to/How-to-Search-for-Specimens)
 - [How to Identify National Park Specimens](https://handbook.arctosdb.org/how_to/National-Park-Specimens.html)
