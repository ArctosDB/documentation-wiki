---
title: Sharing Data and Resources
layout: default_toc
---

# Sharing Data and Resources

Arctos is a shared system, which means we share dictionary and authority
files, as well as ideas and development, while individual collections
exclusively own core specimen data. This page will attempt to summarize
how this works. From Arctos’ Manage Users interface, click the red "read this
before…" link, then the \[def\] link on roles for authoritative
definitions and rules (link [here](http://arctos.database.museum/Admin/user_roles.cfm), if you are logged into Arctos).

Any user with access to shared nodes should have a thorough
understanding of this information, and how it affects their collection
and others.

## What is not shared

Specimens, and core specimen data such at Attributes, Identifications,
Collectors, and Citations, are wholly owned by individual collections.

However, Relationships allow users to navigate between related
(including "same individual as") specimens, and to perform
cross-collection queries (such as those involving hosts and parasites).
The Data Entry application allows related specimen data (events, places,
collectors, etc.) to be "seeded" into new specimen records. Various
reports and alerts exist to facilitate maintaining these relationships.

[Transactions](transactions)—loans, accessions, and borrows—are not shared, but see
[Projects](projects).

[Specimen-events](specimen-event) are not shared, but [Events](collecting-event), [Localities](locality), and [Higher Geography](higher-geography)
are.

## What is shared

**Code tables** with a "collection_cde" column are shared across collection
types. That is, all "Herp" collections (and no "Mamm" collections) have
access to an Attribute "carapace width" which in all collections
requires a numeric value and units. All collections share
non-partitioned code tables. That is, every collection with any numeric
Attribute may access the "length units" code table.

**Taxonomy** is shared at the "source" level, which is set by collection
under Manage Collection. All collections which use the "Arctos"
classification should be consulted before changes are made; if no
agreement can be reached, it may be necessary to split the
classification. All classifications are available for querying data from
all collections.

**Agents** are fully shared, and thousands of agents span collections – as
collectors, borrowers, authors, and georeferencers. Changes to Agents
should be coordinated by all users (available from Agent Activity).
Major changes (such as mergers) prompt notifications and have a waiting
period.

**Publications** and **Projects** are shared globally. Researchers borrowing
specimens from several collections may create shared Projects which
produce shared Publications citing multiple collections.

**Media** are shared globally. PDFs of shared publications are one use case;
field notes of hosts and parasites are another.

**Containers** are shared globally, facilitating the combined storage of
e.g., parasites and "part parasites" belonging to vertebrate
collections.

**Higher Geography** is shared globally. 

**Localities** are shared. Changes are logged and reported.

**Events** are partially shared; only users with access to all collections
using a shared event may edit it. (Please comment on [#1017](https://github.com/ArctosDB/arctos/issues/1017).)

## When to Edit

Some data a (taxonomy, for example) are structurally locked and cannot be edited when used; the view is that ANY change might be a fundamental change to the nature of the data, and so no changes may safely be allowed. (Taxonomic Classifications are **not** locked, however.) Other data (geography, for example) may be changed by Operators with appropriate access, and the safety of the data is left to careful operators. The general question is, "Am I changing the fundamental nature of the data?" If the answer is "yes," the data should not be changed. Examples:

|Current Data|Desired Data|Considerations|
|------------|------------|--------------|
|A county-level geography term is missing a qualifier such as "Province"|Consistent Data|If the new term is clearly an alternate spelling of the existing term, the change is probably safe. Make very sure that you are not inadvertently "promoting" a lower-level term or similar.|
|A general locality has no coordinates|A georeference which encompasses the entire locality as defined by all geography and specific locality.|Adding a georeference is safe and will improve the usability of all linked specimens.|
|A general locality has no coordinates|A georeference which is more precise than the entire locality as defined by all geography and specific locality.|Adding a georeference will alter the fundamental nature of the data; specimens with more precise data must be moved to a new locality.|

