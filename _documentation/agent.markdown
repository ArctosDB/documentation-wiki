---
title: Agents
layout: default_toc
author: ArctosDB
date: 2016-12-01
---

# Agents

Agents are people, organizations, or groups that perform actions.
Collectors are agents, authors of publications are agents, users of
specimens are agents, and, if you enter or edit data, you are an agent.
A single agent can have many roles and many names.

No matter how many roles or names an agent has, a single person (or
agency) should be in the database only once. Before new agent records
are created, the database should be carefully queried to check that the
"new" agent is not already in the database. A collector may have
married and now be submitting specimens as collected under her married
name, for example.

Agents with non-English names may exist in the database under
alternative transliterations. (Felix Chernyavski's name is published in
English as Tchernyavski and Chernyavsky.) In these cases, additional
Agent Names are required, not additional Agents. Additional names using
original alphabet of the agent's name are an obvious
clarification. (Cyrillic, in the example above.)

For legacy data, the above is a difficult standard. Are Robert Smith,
R. Smith, and Bob Smith three agents or one? Sometimes, the activities
already recorded for an agent makes the answer clear, *e.g.*, there were
probably not two Eleazer Fitzgarrolds collecting grasshoppers in
northern Madagascar in the 1930s. (If you are viewing a an agent record,
the "Agent Activity" link will show you all of the agent's actions that
are recorded.) Thus, it is useful to provide as much information as
possible when creating and editing agent records. If you can figure it
out, the database can usefully handle the information. If you cannot
figure it out it probably doesn't matter; having multiple agents
collecting under the name "J. Smith" doesn't really affect any
conceivable use of the data, and if one of the agents distinguishes
themselves somehow (*e.g.*, through publications), it's easy to split
the combined agent.

Use the Agent “unknown” when the person or organization doing the collecting, identifying, borrowing, etc. is unknown or unclear. Please do not create new Agents such as “Collector unknown” or “Determiner unknown”. Consider using “unknown” along with the verbatim collector [attribute](http://handbook.arctosdb.org/documentation/attributes.html) rather than creating cryptic agents such as A.B.C. or S. Smith. If at some point in the future the full name of collector, determiner, or borrower S. Smith is determined to be Susan B. Smith for a specific set of records, add the full Agent name to Arctos and assign the records appropriately.

## Agent Type

`Agent . Agent_Type VARCHAR2(15) not null`

Agent Type is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_type).

### Person

Data about a person-agent can include first, middle, and last names (and must
include at least one "person name"). Prefix and Suffix (formerly
singular attributes of persons) are now embedded in agent names and
should not be viewed as static. (Prefix and suffix should seldom be
included in preferred name.) For example, the following might all apply
to one agent:

-   Some Guy
-   Lieutenant Some Guy
-   Major Some Guy
-   Some Guy Sr.
-   Reverend Some Guy Senior, Ph.D

See [Wikipedia: Generational Titles](http://en.wikipedia.org/wiki/Suffix_%28name%29#Generational_titles)
for more information.

Former concepts **Birth Date** and **Death Date** have now been
generalized to [Agent
Status](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_STATUS).
In addition to recording singular events about an agent (such as birth
date), this structure allows "snapshots" -- "AgentX was seen at a
conference on {DATE} and seemed to be living, so things collected before
that date may still be attributable to AgentX."

### Organizations

Examples of organizations include:

-   University of Alaska Museum
-   Alaska Department of Fish and Game
-   U. S. National Park Service

Agencies can have hierarchical relationships, *e.g.*:

-   Kanuti National Wildlife Refuge
-   U. S. Fish and Wildlife Service
-   U. S. Department of the Interior

For most purposes, person agents are more explicit and preferable to
organizations; designations such "U.S. Department of the Interior" are
next to useless. Nevertheless within a hierarchy of agencies, the more
explicit the designation, the more ephemeral the designation is likely
to be.

### Groups

A group is two or more agents functioning in some named capacity. So,
instead of listing several collectors on an expedition, one might make
all the collectors members of something like the "1994 Swedish-Russian
Tundra Ecology Expedition."

Agent Groups consists of:

1.  An agent of type=group, and optionally
2.  person agents as group members

Groups may be useful for things like collecting expeditions.

### Verbatim Collectors

Verbatim Collectors as Agents is a failed experiment and should not be
used for any purpose. Please change verbatim collectors to another type
of agent or flag them as duplicates when you encounter them.
[Attribute](/documentation/attributes) "verbatim collector" allows
uncontrolled strings to be associated with individual specimens. When
"bad duplicate of" agents are merged, "verbatim collector" Attributes
are automatically created for all affected specimens.

## Names

`Agent_Name . Agent_Name VARCHAR2(184) not null`

All agents must have one and only one "preferred name" and one and only one "login". An agent can have any number of other names.

## Name Type

`Agent_Name . Agent_Name_Type VARCHAR2(18) not null`

Agent Name Type, e.g. "preferred," is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_name_type).

## Remarks

`Agent . Agent_Remark VARCHAR2(255) null`

Remarks is a good place to include a one sentence description of the
agent. Anything that might helpful to other users in understanding who
or what the agent is should be included. Never use remarks for data which can be linked or formalized elsewhere.

## Creating & Maintaining Agents

These are general guidelines to prevent the creation of
[duplicate](#duplicate) agents. Nothing here should be considered a hard
rule; use the Contact form at the bottom of any Arctos page to discuss
these guidelines.

Before creating an agent, **thoroughly** search for existence. Use the
"clear form" button to ensure that you aren't accidentally limiting your
search. Using **only** the "any part of any name" option, search for
last name, and especially in the case of "foreign" names, search for the
substring that might have been transcribed or transliterated in varying
ways. If you have a "McDonald," search for "donald" to include the
possibility of "Macdonald." Given Чернявских, search for "herny" to
include C**herny**avski, Tc**herny**avski, and C**herny**avsky. (Please
flag any "bad duplicate" agents you find as such during this
exploration.) Consider common variations -- a "Robert" might exist as
"Bob," for example.

Consider not creating an agent at all. Attribute "verbatim collector"
exists in part for linking ambiguous or low-value collector strings to
specimens, and may be an appropriate choice if the agent is relatively
unknown, unlikely to become known, and has no or little other activity.
For example, "fisherman" is almost certainly better recorded in
Attributes.

-   When possible, do not abbreviate. "Co." might mean anything;
    "Company" is unambiguous. "John J. Smith" is much more ambiguous
    than "John Johnsson Smith." If you do abbreviate, include an
    unabbreviated equivalent (*e.g.*, "aka") name.  [Abbreviation Exemptions](#abbreviation-exemptions)
-   Consider pushing prefix, suffix, title, etc., to nonpreferred names;
    limit preferred name to things that do not change in confusing ways.
    John Smith has a son and becomes John Smith Senior; John Smith
    Junior has a son and becomes John Smith II; Captain John Smith gets
    promoted to Major John Smith: avoid potential confusion
    when possible. If you must create a preferred name with a prefix or
    suffix, ensure there also exists a "bare" alternate name.
-   Include common ASCII-128 (A-Z, no accents or foreign characters)
    variants. "Николай Е. Докучаев" is an acceptable Preferred Name, but
    include as a nonpreferred name "Nikolai E. Dokuchaev." Agent "Raúl
    Gutiérrez" should include the nonpreferred name "Raul Gutierrez." ASCII variants must 
    be character-for-character replacements; 
    include alternative translitertations ("oe" for "ö," for example) as additional names.
-   Include symbols and their alternatives where users might search
    by either. For preferred name "Smith & Wesson," also include name
    "Smith and Wesson." (It doesn't matter which goes where, as long as
    both are included with the agent.)
-   Use relationships. "John Smith Jr. {is child of} John Smith" helps
    clarify the situation even in the face of suddenly-ambiguous names,
    promotions, marriages, and other name changes or alternatives.
-   Use Status; associating dates with agent records is extremely useful
    when considering agent ambiguity. Do not simply copy from agent
    activity; add this information only if there's an independent source
    (and if possible, link to the source by adding a "URL" address
    or Media).
-   Use remarks as a last resort, only when more formal data are
    not possible. Relationship "student of" will stop an agent merger;
    remark "student of ..." will be ignored by automation (and
    often, people).
-   Person agent preferred names should be formatted as "First Middle
    Last" as a matter of standardization. Address concerns or objections
    to the Advisory Committee.
-   Abbreviations in preferred names must be followed by periods. "J. J.
    Smith,", never "JJ Smith" or "J J Smith." If nonstandard data are
    important search terms, include them as non-preferred names.
-   Periods should be followed by spaces. See above.
-   Jr. and Sr. should _not_ be prefixed by a comma; "Larry Amox Jr." _not_ "Larry Amox, Jr."
-   Do not orphan unused names; flag them as "bad duplicate of" the good
    name so that they will be reviewed and deleted. (Use "unknown" as
    the good name if there is no acceptable alternative.)
-   Do not include anything other than agent entity information in
    agent names. "John Smith?" is a remark; use agent "unknown" or "John
    Smith" and clarify in an appropriate remarks field
-   Include name components (first, middle, last) as agent names
    when appropriate.
-   If possible (especially for non-person Agents), follow Wikipedia for
    preferred agent name. See for example
    https://en.wikipedia.org/wiki/United_States_Fish_and_Wildlife_Service,
    which should be entered in Arctos as "United States Fish and
    Wildlife Service." Include common variations, stock symbols, etc.,
    as nonpreferred names.
-   Do NOT include parenthetical information in names; create a new
    name instead.
-   Include **possible** variations ("Pat" for Patrick) as
    nonpreferred names.
-   "Assemble" namestrings when possible. "A. Lincoln" is an acceptable (if not very good) preferred name, but also include AKA name
"Abraham Lincoln." The existence of name components (eg, "first name") is not sufficient to prevent the creation of duplicates.     
-   Use Addresses when possible. A partial address ("Ohio") or link to a
    biography (*e.g.*, Wikipedia -- these may be made via Address
    Type "URL") is very likely to be useful. Avoid using remarks for
    address information.

## Abbreviation Exemptions

-  "Mrs." is acceptable at the beginning of preferred name, unsupported by an 
	unabbreviated variation, when no further information is available.
-   "Jr." is acceptable at the end of preferred name, unsupported by an 
	unabbreviated variation. Include a relationship.
-	"Sr." is acceptable at the end of preferred name, unsupported by an 
	unabbreviated variation. Include a relationship.
-   "St." is acceptable as part of a preferred name, unsupported by an 
	unabbreviated variation. Do not abbreviate "Saint" - use "St."
	only when it is part of a given name. 
-   "Dr." is acceptable  at the beginning of preferred name, unsupported by an 
	unabbreviated variation. An unabbreviated variant is encouraged.


## Ambiguity

Often when managing Agents, often only limited information will be available. "Is ``J. Smith`` the ``John Smith`` I'm looking for?" may have no clear answer. The Agent Activity report will
provide a summary of all that's known; often dates or places can be vital clues. (A different browser or private tab may be used to query collections to which one does
 not have Operator access.) An email to anyone using the existing or suspect agents may turn up more information. 

Sometimes the data in Arctos cannot provide a clear answer, and a somewhat arbitrary choice becomes necessary. We suggest the choice between creating potential duplicates and "overloading" Agents is not as arbitrary as it may first appear; the "correct" choice among no truly correct choices is generally to create fewer Agents rather than more. 


### Duplicates

Duplicates - multiple Agent records which in fact refer to the same entity - can be difficult to discover; they are almost always based in partial or incorrect data, so any search that should find all seldom will. A search for specimens using one of the duplicates will fail to find everything desired, and will provide no clues to this situation. Finding something will most often lead users to believe they've found everything, and they will not investigate further. We see this as the worst possible situation; the data are actively masking the presence of desired information.

### Overloaded Agents

Overloaded Agents - Agent records which in fact represent multiple entities - are easy to discover. A search for the proper spelling will not find records linked to a mis-spelled Agent, and users will often continue to explore. (Users searching by agents generally know something of the agent in which they are interested.) When attached records are found, they will often contain information leading to the correct interpretation of the data: The alleged entity collected before they were born, or were collecting fossil molluscs in Alaska and extant grasshoppers in Madagascar at the same time. This information can easily and immediately be used to exclude the records which are not of interest or, for curatorial users, to split the agent and create a 'not the same as' relationship to prevent subsequent confusion.  

## Agent Relationships

Relationships between agents can be recorded. Like date of birth and
date of death, relationships can be critical to understanding
duplication and similarities in names, and in understanding
relationships within the literature, taxonomic opinions, etc. The
pull-downs are self-evident. If you know of a relationship between
agents, please record it. The relationship "not the same as" can be
useful in understanding that suspiciously similar names are not
duplicates, but do in fact refer to separate agents.

### Different Agent, Same Name

Occasionally, two distinct agents will share a name, but there exists a
unique key on `preferred_name` so duplicate preferred names are not
possible. With some research, it is usually possible to disambiguate the
agents by adding initials, middle names, or nicknames. If that is not
possible, it may be necessary to add parenthetical information to the
preferred name, for example "John Doe (southwest mammals)." When this is
necessary, it's usually preferable to similarly annotate all agents that
share the name to avoid later data entry efforts inadvertently picking
the wrong agent. Add a "not the same as" relationship and verbose agent
remarks.

Without the unique key, applications which use strings to identify
agents, such as the specimen bulkloader, cannot use preferred names, and
it becomes necessary to add unique aliases to pick agents. (Internal
forms pick by `agent_id` and names are only "human-readable proxies" to
the ID.) The current unique index approach seems less problematic than
the alternative, both in getting students to choose the correct agent
and in avoiding duplicate agent creation, but neither method is ideal.
Address any suggestions or concerns to the Arctos discussion group.

## Searching Agents

The search form contains several fields and options, detailed below. All
are case-insensitive substring matches. You may also include the special
characters \_ and % to match any single character or any string,
respectively.

### Any name search

Any part of a name is appropriate for most exploratory
searching. It matches any name, including preferred, AKAs, name
components, and login name.

### Agent Type

Agent Type matches values used in the [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_TYPE).

### Agent ID

Agent ID matches the (internal, primary key) `agent_id` (an integer).

### Agent Name Type

Agent Name Type matches values used in a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_NAME_TYPE).

### Agent Name

Agent Name matches names of the chosen type.

### Address

Address matches any part of [any
address](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTADDRESS_TYPE),
including mailing addresses, telephone numbers, and email addresses.

### Agent Status

Agent Status matches values from a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_STATUS).
This may be combined with "**Match**" and **Status Date** to locate
agents reported in an event, agents having an event on a date, or events
happening on, before, or after a given date.

### Created By

Created By (and corresponding **match** types and **Created Date**)
may be used to find agents created by an agent, agents created by an
agent on/before/after a date, or agents created on/before/after a date.

## Deleting/merging agents

Duplicate agents (&gt;1 agent record referring to the same agent entity)
prevent accurate answers to questions involving agents. Collector "John
Smith" cannot locate "his" specimens if some of them are stored under
agent "J. Smith."

### How To

To delete an agent, create a "bad duplicate of" relationship to another
agent. All collections will receive a [warning email](/documentation/notifications), and if no action is
taken the agent will be automatically deleted in 14 days (previously 7).

Check collection contacts and their email addresses if you are not
receiving notifications.

Generally, the record with least complete information and/or the least
activity should be the "bad duplicate of." Any useful information (such
as names, remarks or addresses) must be transcribed to the "good" agent.
The deletion process does not retain agent names or remarks, addresses
are copied only when they are used in shipments. Manually copy anything
that seems important to the merged agent; avoid copying anything which
might cause confusion (and the introduction of more duplicates) in the
future.

### Why

Any Operator with Agent access may flag agents as duplicates. Agents
lacking evidence to the contrary should be marked as duplicates; if
there is evidence of useful individuality, add it by way of
relationships and supporting remarks. Often, low-quality Agents not
representing an individual are expedient; there is little reason to have
two "J. Smith" (no other information) agents; if disambiguating
information is available, add it.

### Identical Agent Names

Identical agent **names**, between and
among agents, is different than identical agents. Duplicate agents are
two or more agent records that mean the same physical entity (THAT
PARTICULAR John Smith; US Fish and Wildlife Service). It is not
necessary for duplicate agents to share a name; in fact, they are often
introduced because of misspellings. The "Agent Activity" link is a good
place to make sure you're dealing with real duplicates.

### Not Duplicates

Occasionally, it will be determined that two agents are not in fact
duplicates. The only action that will stop future attempts to merge them
is a "not the same as" relationship. Document the relationship in
remarks, but do not try to build functionality into remarks.
