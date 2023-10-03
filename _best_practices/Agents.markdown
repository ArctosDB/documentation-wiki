---
title: Best Practice - Creating Meaningful Agents 
authors: Teresa J Mayfield-Meyer
date created: 2021-11-11
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

[Add to Current update request](https://github.com/ArctosDB/documentation-wiki/issues/224)

# Best Practice - Creating Meaningful Agents 

What is an Agent? Before you make any decisions about one, you should know what it is. Start by reading the [Agent Documentation](https://handbook.arctosdb.org/documentation/agent.html).

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**  

Agents are shared by all Arctos members. Always use caution when creating or editing a shared resource and make sure that others who might be affected by a change are notified beforehand.

## General Recommendations for Creating Meaningful Agents 

We recommend working with an experienced Arctos operator if you have a lot of people names to review. Below are some general recommendations for creating meaningful agents.

### Don't create an Agent at all

Agents should exist only when they must carry when independent information. [Attribute verbatim agent](https://handbook.arctosdb.org/documentation/agent.html#verbatim-agent-attribute) is functionally identical to most Agents. If there is no compelling data which cannot be derived from activity to assert, not creating an Agent is almost always the correct choice. 

### Avoid Duplicate Agents

No matter how many roles or alternate names a person or organization has, a single Agent should be in Arctos to describe them. Multiple Agent records which in fact refer to the same entity can be difficult to discover. Before new Agent records are created, the database should be carefully queried to check that the “new” Agent is not already in Arctos. Some examples of things to look for include:

 - someone who may have married and is now known by both a birth name and a married name

 - non-English names that may exist in the database under alternative transliterations. (Felix Chernyavski’s name is published in English as Tchernyavski and Chernyavsky.) In these cases, aka Agent Names are required, not additional Agents. Aka names using original alphabet of the agent’s name are an obvious clarification. (Cyrillic, in the example above.)

For legacy data, the above can be a difficult standard. Are Robert Smith, R. Smith, and Bob Smith three agents or one? Sometimes, the activities already recorded for an agent makes the answer clear, e.g., there were probably not two Eleazer Fitzgarrolds collecting grasshoppers in northern Madagascar in the 1930s. (If you are viewing an agent record, the “Agent Activity” link will show you all of the agent’s actions that are recorded.) Thus, it is useful to provide as much information as possible when creating and editing agent records. If you can figure it out, the database can usefully handle the information. If you cannot figure it out it probably doesn’t matter; having multiple agents collecting under the name “J. Smith” doesn’t really affect any conceivable use of the data, and if one of the agents distinguishes themselves somehow (e.g., through publications), it’s easy to split the combined agent.

Before creating an agent, **thoroughly** search to be sure the agent is not already in Arctos. Use the "clear form" button to ensure that you aren't accidentally limiting your search. Using **only** the "any part of any name" option, search for last name, and especially in the case of "foreign" names, search for the substring that might have been transcribed or transliterated in varying ways. If you have a "McDonald," search for "donald" to include the possibility of "Macdonald." Given Чернявских, search for "herny" to include C**herny**avski, Tc**herny**avski, and C**herny**avsky. (Please flag any "bad duplicate" agents you find as such during this exploration.) Consider common variations -- a "Robert" might exist as "Bob," for example.

If you have a lot of names to check, you can use the Agent Name Splitter Tool to find exact matches as well as names that are similar. If there are no current Agents that use a name you have searched, you are good to go. If you discover Agents with a similar name, make sure that they are different people so that you don't create a duplicate Agent. 

 - <a href="https://handbook.arctosdb.org/how_to/How-to-Search-Agents.html" target="_blank">How to Search Agents</a>
 - <a href="https://handbook.arctosdb.org/how_to/How-to-Bulkload-Agents.html#use-the-agent-name-splitter" target="_blank">Use the Agent Name Splitter</a>

#### Agents with Little Data
Use the [verbatim agent attribute](https://handbook.arctosdb.org/documentation/agent.html#verbatim-collector-attribute) for linking low-information names to catalog records. This may be an appropriate choice if the agent is relatively unknown, unlikely to become known, and has no or little other activity. For example, "fisherman" is almost certainly better recorded in the [verbatim agent attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent).

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

An agent must include at least one status, relationship, or address OR be a determiner, author, or participant in a publication/project or it will be subject to removal. When this occurs, the agent name will be placed in the [verbatim agent attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) in all records where it appeared as a collector or preparator.

#### Agent unknown
Use the Agent “unknown” when the person or organization doing the collecting, identifying, borrowing, etc. is unknown or unclear. Please do not create new Agents such as “Collector unknown” or “Determiner unknown”. Consider using “unknown” along with the [verbatim agent attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent) rather than creating cryptic agents such as A.B.C. or S. Smith. If at some point in the future the full name of collector, determiner, or borrower S. Smith is determined to be Susan B. Smith for a specific set of records and you can find dates, addresses, or relationships for them, add the full Agent name to Arctos and assign roles to records as appropriate.

### Do
-   Do format person agent preferred names as "First Middle Last" as a matter of standardization.  
-   Do include name components (first, middle, last) as agent names when appropriate.  
-   Do include **possible** and common variations "Pat" for Patrick, stock symbols, etc. as akas.
-   Do follow abbreviations in preferred names with a period. "J. J. Smith,", never "JJ Smith" or "J J Smith." If nonstandard data are important search terms, include them as akas.  
-   Do follow periods with spaces.  
-   Do include common ASCII-128 (A-Z, no accents or foreign characters) variants. "Николай Е. Докучаев" is an acceptable Preferred Name, but include as a nonpreferred name "Nikolai E. Dokuchaev." Agent "Raúl Gutiérrez" should include the nonpreferred name "Raul Gutierrez." ASCII variants must be character-for-character replacements; include alternative translitertations ("oe" for "ö," for example) as akas.   
-   Do include symbols and their alternatives where users might search by either. For preferred name "Smith & Wesson," also include name "Smith and Wesson." (It doesn't matter which goes where, as long as both are included with the agent.)  
-   Do add [relationships](#agent-relationships). "John Smith Jr. {is child of} John Smith" helps clarify the situation even in the face of suddenly-ambiguous names, promotions, marriages, and other name changes or alternatives.    
-   Do add Status; associating dates with agent records is extremely useful when considering agent ambiguity. Do not simply copy from agent activity; add this information only if there's an independent source (and if possible, link to the source by adding a "URL" address or Media).   
-   Do add addresses when possible. A partial address ("Ohio") or link to a biography (*e.g.*, Wikipedia -- these may be made via Address Type "URL") is very likely to be useful. Avoid using remarks for address information.
-   Do "assemble" namestrings when possible. "A. Lincoln" is an acceptable (if not very good) preferred name, but also include AKA name "Abraham Lincoln." The existence of name components (eg, "first name") is not sufficient to prevent the creation of duplicates.
-   Do follow Wikipedia for preferred agent name, especially for non-person Agents. See for example https://en.wikipedia.org/wiki/United_States_Fish_and_Wildlife_Service, which should be entered in Arctos as "United States Fish and Wildlife Service."  
-   Do consider pushing prefix, suffix, title, etc., to nonpreferred names; limit preferred name to things that do not change in confusing ways. John Smith has a son and becomes John Smith Senior; John Smith Junior has a son and becomes John Smith II; Captain John Smith gets promoted to Major John Smith: avoid potential confusion when possible. If you must create a preferred name with a prefix or suffix, ensure there also exists a "bare" alternate name.   

### Don't
-   Don't abbreviate. "Co." might mean anything; "Company" is unambiguous. "John J. Smith" is much more ambiguous than "John Johnsson Smith." If you do abbreviate, include an unabbreviated equivalent (*e.g.*, "aka") name.  [Abbreviation Exemptions](#abbreviation-exemptions)
-   Don't prefix Jr. and Sr. with a comma; "Larry Amox Jr." _not_ "Larry Amox, Jr."
-   Don't orphan unused names; flag them as "bad duplicate of" the good name so that they will be reviewed and deleted. (Use "unknown" as the good name if there is no acceptable alternative.)
-   Don't include anything other than agent entity information in agent names. "John Smith?" is a remark; use agent "unknown" or "John Smith" and clarify in an appropriate remarks field
-   Don't include parenthetical information in names; create a new name instead. But see [Different Agent, Same Name](#different-agent,-same-name)
-   Don't use remarks when more formal data are possible. Relationship "student of" will stop an agent merger; remark "student of ..." will be ignored by automation (and often, people). Also see [Agent Remarks](https://handbook.arctosdb.org/documentation/agent.html#remarks)

#### Abbreviation Exemptions
Abbreviations are to be avoided, but there are a few exemptions:

-  "Mrs." is acceptable at the beginning of preferred name, unsupported by an unabbreviated variation, when no further information is available.
-   "Jr." is acceptable at the end of preferred name, unsupported by an unabbreviated variation. Include a relationship.
-	"Sr." is acceptable at the end of preferred name, unsupported by an unabbreviated variation. Include a relationship.
-   "St." is acceptable as part of a preferred name, unsupported by an unabbreviated variation. Do not abbreviate "Saint" - use "St." only when it is part of a given name. 
-   "Dr." is acceptable  at the beginning of preferred name, unsupported by an unabbreviated variation. An unabbreviated variant is encouraged.


### Overloaded Agents

Overloaded Agents - Agent records which in fact represent multiple entities - are easy to discover. A search for the proper spelling will not find records linked to a mis-spelled Agent, and users will often continue to explore. (Users searching by agents generally know something of the agent in which they are interested.) When attached records are found, they will often contain information leading to the correct interpretation of the data: The alleged entity collected before they were born, or were collecting fossil molluscs in Alaska and extant grasshoppers in Madagascar at the same time. This information can easily and immediately be used to exclude the records which are not of interest or, for curatorial users, to split the agent and create a 'not the same as' relationship to prevent subsequent confusion.  

### Different Agent, Same Name

Occasionally, two distinct agents will share a name, but there exists a unique key on `preferred_name` so duplicate preferred names are not possible. With some research, it is usually possible to disambiguate the agents by adding initials, middle names, or nicknames. If that is not possible, it may be necessary to add parenthetical information to the
preferred name, for example "John Doe (southwest mammals)." When this is necessary, it's usually preferable to similarly annotate all agents that share the name to avoid later data entry efforts inadvertently picking the wrong agent. Add a "not the same as" relationship and verbose agent remarks.

Without the unique key, applications which use strings to identify agents, such as the catalog record bulkloader, cannot use preferred names, and it becomes necessary to add unique aliases to pick agents. (Internal forms pick by `agent_id` and names are only "human-readable proxies" to the ID.) The current unique index approach seems less problematic than the alternative, both in getting students to choose the correct agent and in avoiding duplicate agent creation, but neither method is ideal. Address any suggestions or concerns to the Arctos Working Group.  

## Agent Relationships

Relationships between agents can be recorded. Like date of birth and date of death, relationships can be critical to understanding duplication and similarities in names, and in understanding relationships within the literature, taxonomic opinions, etc. The pull-downs are self-evident. If you know of a relationship between agents, please record it. The relationship "not the same as" can be useful in understanding that suspiciously similar names are not duplicates, but do in fact refer to separate agents.  

## Summary

 - Agents are shared by all Arctos collections.
 - Every Agent should represent an individual person or organization.
 - Make every effort possible to avoid creating duplicate Agents.
 
## Edit this Best Practice

If you see something that needs to be edited in this Best Practice, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_best_practices/Agents.markdown).  

## Community Discussion
- [Github Issue #224](https://github.com/ArctosDB/documentation-wiki/issues/224)
