# Sharing Data and Resources 

<div class="entry-content">

Sharing Data
------------

Arctos is a shared system, which means we dictionary and authority
files, and ideas and development while individual collections
exclusively own core specimen data. This page will attempt to summarize
that. From Arctos’ Manage Users interface, click the red “read this
before…” link, then the \[def\] link on roles for authoritative
definitions and rules.

Any user with access to shared nodes should have a thorough
understanding of this information, and how it affects their collection
and others.

What’s not shared
-----------------

Specimens, and core specimen data such at Attributes, Identifications,
Collectors, and Citations are wholly owned by collections.

However, Relationships allow users to navigate between related
(including “same individual as”) specimens, and to perform
cross-collection queries (such as those involving hosts and parasites).
The Data Entry application allows related specimen data (events, places,
collectors, etc.) to be “seeded” into new specimen records. Various
reports and alerts exist to facilitate maintaining these relationships.

Transactions – loans, accessions, and borrows – are not shared, but see
Projects.

Specimen-events are not shared, but events, localities, and geography
are.

What is shared
--------------

Code tables with a “collection\_cde” column are shared across collection
types. That is, all “Herp” collections (and no “Mamm” collections) have
access to an Attribute “carapace width” which in all collections
requires a numeric value and units. All collections share
non-partitioned code tables. That is, every collection with any numeric
Attribute may access the “length units” code table.

Taxonomy is shared at the “source” level, which is set by collection
under Manage Collection. All collections which use the “Arctos”
classification should be consulted before changes are made; if no
agreement can be reached, it may be necessary to split the
classification. All classifications are available for querying data from
all collections.

Agents are fully shared, and thousands of agents span collections – as
collectors, borrowers, authors, and georeferencers. Changes to Agents
should be coordinates by all users (available from Agent Activity).
Major changes (such as mergers) prompt notifications and have a waiting
period.

Publications and Projects are shared globally. Researchers borrowing
specimens from several collections may create shared Projects which
produce shared Publications citing multiple collections.

Media are shared globally. PDFs of shared publications are one use case;
field notes of hosts and parasites are another.

Containers are shared globally, facilitating the combined storage of
e.g., parasites and “part parasites” belonging to vertebrate
collections.

Higher Geography is shared globally. Localities are optionally shared,
and are locked when shared; only users with access to all collections
using a shared locality may edit it. Events are shared similar to
localities.
