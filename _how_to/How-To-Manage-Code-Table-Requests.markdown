---
title: How To Manage Code Table Addition or Change Requests (for Code Table Administrators)
authors: Teresa Mayfield-Meyer, Dusty McDonald
date created: 2020-05-21
layout: default_toc
---

# How To Manage Code Table Addition or Change Requests (for Code Table Administrators)

[Code Tables in Arctos](http://arctos.database.museum/info/ctDocumentation.cfm) are maintained by the Arctos Community. [Arctos Code Table Administrators](http://arctos.database.museum/agent.cfm?agent_id=21327088&agent_name=Arctos%20Code%20Table%20Administrators) are community members with code table access who are able to add, edit or delete code table terms. The process for requesting a new code table term or making a change to an existing term is as follows:

## Make a Code Table Request 
All community members, including Code Table Administrators should submit a [GitHub Code Table Request Issue](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=&template=authority-request.md&title=) to request any change to any code table.

1. Complete all pertinent parts of the form. 
2. Tag the issue with an appropriate [Priority label](https://handbook.arctosdb.org/how_to/How-to-Use-Issues-in-Arctos.html#guidance-on-assigning-labels). 
3. Add the issue to the [Code Table Management Project](https://github.com/ArctosDB/arctos/projects/13#card-31628184). 
4. Add the “Needs Discussion” milestone. 
5. If possible, assign the issue to any Arctos community members you know may have an interest in the term. 
6. If there is no response to your request within 2 days, contact one of the [Arctos Code Table Administrators](http://arctos.database.museum/agent.cfm?agent_id=21327088&agent_name=Arctos%20Code%20Table%20Administrators) for assistance. 

## Community Discussion 
Code Table change requests should be discussed by the community members it may affect. Not all community members monitor GitHub regularly, so it is helpful to assign or mention community members who may have an interest in the topic. For example, a discussion about a change to parts that are used by both mammal and paleo collections should include at least one member from each community. The length of time required for community discussion will vary. Some changes may only take a day and some may linger for months. If the extended discussion of a code table change request you have submitted is hampering your ability to get work done, make sure that the Priority-Critical label is added to the issue. 

## Issue Summary 
Once the community discussion is complete, there should be a “Summary” post to the issue. This post should include:
1. All details required for a Code Table Administrator to complete the addition, edit or deletion as agreed upon in the community discussion. 
2. Inform the Code Table Managers with @ArctosDB/Code_Table_Administrators 
3. Change the milestone to “Needs Code Table Review” 

## Code Table Administrator/DBA Evaluation 
Two Code Table Administrators and a DBA will evaluate the Summary post. If they agree that the request is straightforward, does not create inconsistencies, and will not significantly impact data already in Arctos, they will demonstrate their agreement by adding a “Thumbs Up” to the Summary post.

### Code Table Change Approved by Code Table Administrators and DBA 
If two Code Table Administrators and the DBA agree that the request can be implemented, one of the Code Table Administrators will complete the following tasks: 
1. Complete the implementation of the code table change in Arctos. 
2. Remove the priority label. 
3. Remove the milestone 
4. Add the issue to the Arctos Communications Project if the change needs broad communication. 
5. Close the issue. 
6. Move the issue to the “Code Table Edit Complete” column of the Code Table Management Project. 

### Code Table Change Not Approved by Code Table Administrators and DBA 
If a Code Table Administrator or DBA believes further discussion is required, They will take the following steps: 
1. Add the issue to the “Code Table Admins Discussing” column of the Code Table Management Project for discussion at the next monthly Code Table Administrators meeting. 
2. Change the milestone to “Needs Discussion” 
3. If the issue is not already tagged as Priority-Critical or Priority-High, change the priority to Priority-High. 
4. If the issue is already tagged as Priority-Critical, check with the community member who made the original request to determine if there is a need for a special meeting of Code Table Administrators to resolve the issue. 
5. Code Table Administrators Review 
6. If a code table change request is not unanimously approved by two Code Table Administrators and a DBA, the issue will be discussed by The Code Table Administrators at their monthly meeting and either returned to the community for more discussion, conditionally approved, or rejected. 

### Returned for Discussion 
If returned to the community for discussion, it will fall on the original requestor to stimulate discussion and present a new Summary resolution.

### Conditional Approval 
Occasionally, an issue requires multiple rounds of discussion and a notification to the community prior to implementation as it may affect daily activities of many community members. An example of such an issue can be found in the [Nature of ID GitHub discussion](https://github.com/ArctosDB/arctos/issues/2170). If conditionally approved, it has been deemed that an announcement should be made to the community prior to implementation. In such instances, a member of the Code Table Administrator Team will perform the following: 
1. Add the Blocked: Needs Discussion label to the issue. 
2. Add the Priority-Critical label to the issue. 
3. Change the issue milestone to “Needs Discussion” 
4. Add the issue to the “Critical Issues” column of the [AWG Agenda Project](https://github.com/ArctosDB/arctos/projects/6). 
5. Facilitate discussion of the request with the Arctos Working Group (AWG) at the next meeting. The AWG will either [approve the request](###Code-Table-Change-Approved-by-Code-Table-Administrators-and-DBA), [return the request to the community for further discussion](###Returned-for-Discussion), [reject the request](###Rejected), or require an announcement of the approval before implementation (see next steps if this is the result). 
6. Prepare an announcement that includes a link to the latest Summary post in the issue and a deadline for community comments that is before the next AWG meeting. Send it to the Arctos Communication Chair for distribution to the Arctos mailing list. 
7. Facilitate discussion of the request with the Arctos Working Group (AWG) at the next meeting. If there are no objections to implementation of the request, the AWG will [approve the request](###Code-Table-Change-Approved-by-Code-Table-Administrators-and-DBA). If there are unresolved objections to the request, the AWG will [return the request to the community for further discussion](###Returned-for-Discussion). 

### Rejected 
If rejected, a member of the Code Table Administrators will perform the following: 
1. Add the issue to the “Code Table Edit Rejected” column of the Code Table Management Project. 
2. Remove any milestone 
3. Add the Priority-Cancelled label and remove any other Priority labels. 
4. Close the issue. 

## General Values Considerations 


1. Be consistent in terminology. Consistency is of the utmost importance, and when there is a conflict consistency should over-ride all
other considerations. For example, part "whole organism (partial)" exists for consistency; even though "whole" and "partial" in the 
same part name is somewhat nonsensical, this format preserves sort order (making choosing the correct part easier for 
data entry personnel) and provides predictable terminology for users.

2. Put the important stuff first. As of this writing there are about 800 parts; having all of the "whole organisms" together 
(with modifiers and preservation information being parenthetical or comma-separated) makes the data much more usable than having 
"partial organism" which might end up hundreds of rows away from similar material in a sorted list.

3. Be consistent at scale. Arctos has no inherent boundaries, and many collections 
(Host of parasite, Teaching, Hildebrandt anatomical preparations, or "cultural collections") do not follow taxonomic boundaries. 
Terminology and accompanying definitions must not be limited to certain material; "adult" (an age class) must be consistent across
bird, mammal, insect, and archeology collections, for example.

4. If you must provide discipline- or taxon-specific information, do so parenthetically. For example, age class "adult" is currently:
>Sexually mature. Mammals: all adult teeth in wear; all epiphyses solidly fused; surface of bones with no sponginess; sutures fused. 
>Birds: all bone surfaces well formed and hard surfaced; adult sized for the species.
>Cestodes: use mature/immature.


5. Follow Standards when possible; use or build on the work of others. (This is almost never possible in practice.) 

6. Consider user's needs. If a significant portion of users might want to find (and borrow) "skulls" then creating a separate part "skull"
and using it even when the skull is stored with the postcranial skeleton may be advantageous. If that is not the case, cataloging
"skeleton" rather than separate parts will result in 50% fewer parts and make the authority list easier to digest.
 
7. Consider doing nothing. Obscure terms which may only be used by a few specimens may be better stored as more general data
with explanatory remarks. This will need evaluated on a case by case basis.

8. Be explicit in terminology. Never abbreviate or make assumptions. "Sex=M" may make perfect sense to a mammalogist working
 in a mammal collection, but at the scope of Arctos "M" could refer to "monecious."
 
9. Be explicit in definitions. Make no assumptions; ensure that all terms are well-defined and make sense in any context.
Definitions should be given as complete sentences.

10. Ensure that definitions are functional. HOW is {thing} measured, _e. g._, for what purposes are these data suitable? Include links (preferably via the DOI system) to publications if possible.

11. Use mutually-exclusive terminology. Users (especially Operators) should never have an arbitrary choice.

12. Do not include both "thing (modifier)" and "thing" in the code table. Avoid creating new "bare" terms ("thing") in order
to avoid this problem in the future. Parts of unknown preservation/preparation should be explicit: "thing (unknown)."

13. Do no use unnecessary characters in authority values, particularly Attributes. Letters, dash, and space are generally acceptable. 

14. Include the GitHub discussion link/URL in the definition. (Reports/DataServices includes a <a href="https://arctos.database.museum/DataServices/linkerizer.cfm" class="external">link-builder tool</a>.)


### Specific Values Considerations

#### ctcoll_other_id_type

For Other ID Types, attempt to evaluate whether there might realistically be **functionality** at some time in the future. For identifiers that are deemed unlikely to have this, strongly consider using a generic type (such as "other identifier" or "institutional catalog number") rather than creating a new type. The goal should be for all identifier types to have a functional base_url (which equates to functionality for both humans and machines); this is not a necessary element of the data, but should be a significant consideration in deciding if the identifier needs a dedicated type or could be equally useful as a more generic type.

Example Considerations:

| Requested Identifier      | Description | Considerations |
| ----------- | ----------- |---|
| GenBank      | Unique identifier supplied by an known entity, when appended to a base_url the identifier leads to data  | Create; this is the ideal situation. |
| UCB: University of California Berkeley   | Identifier supplied by some unknown department of a large heterogeneous organization.  | Encourage ``other identifier``==>``UCB: University of California, Berkeley {the_number}`` rather than a new type. Such a generic identifier is extremely unlikely to be useful for discovery, and is sufficient for humans looking at the catalog record.|
| MVZ: Museum of Vertebrate Zoology   | Identifier supplied by some unknown department of a (more or less) homogeneous organization.       | Discuss in depth before creation. Can the identifier be resolved to an assigning entity (_e.g._, MVZ:Mamm)? If so, direct the requestor to use that. In some cases, while the identifier is unlikely to ever be useful by itself, some future effort might be able to use the identifier type plus some associated data (_e.g._, taxonomy) to create better identifiers and this potential use case **may** be sufficient justification to create.|
| TU:Fish   | A specific entity which holds (or held) material, not currently discoverable online. "Official" acronym may be in question.   | Create; while this is not currently useful, it it reasonable to believe that at some point the collection may become more accessible and the identifier will become resolvable.|
| EBRPD: East Bay Regional Park District | Identifier of unknown uniqueness supplied by an entity which probably does not have material but may have additional data. Deemed unlikely to have a base_url at any time, but correspondence is likely to produce data. | Create; "correspondence is likely to produce data" is sufficient evidence of usefulness.  |
