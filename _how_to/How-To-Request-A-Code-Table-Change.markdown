---
title: How To Request a Code Table Addition or Change
authors: Teresa Mayfield-Meyer
date created: 2020-05-21
layout: default_toc
---
# How To Request a Code Table Addition or Change

[Code Tables in Arctos](http://arctos.database.museum/info/ctDocumentation.cfm) are maintained by the Arctos Community. [Arctos Code Table Administrators](http://arctos.database.museum/agent.cfm?agent_id=21327088&agent_name=Arctos%20Code%20Table%20Administrators) are community members with code table access who are able to add, edit or delete code table terms. The process for requesting a new code table term or making a change to an existing term is outlined in Arctos Code Table Management Procedures. This document is a quick summary of those procedures.

## Make a Code Table Request
All community members, including Code Table Administrators should submit a [GitHub Code Table Request Issue](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=&template=authority-request.md&title=) to request any change to any code table. If possible, assign the issue to any Arctos community members you know may have an interest in the term. If there is no response to your request within 2 days, contact one of the [Arctos Code Table Administrators](http://arctos.database.museum/agent.cfm?agent_id=21327088&agent_name=Arctos%20Code%20Table%20Administrators) for assistance.

## Community Discussion 
Code Table change requests should be discussed by the community members it may affect. The length of time required for community discussion will vary. Some changes may only take a day and some may linger for months. If the extended discussion of a code table change request you have submitted is hampering your ability to get work done, make sure that the Priority-Critical label is added to the issue.

## Issue Summary 
Once the community discussion is complete, there should be a “Summary” post to the issue that supplies the information required for a Code Table Administrator to complete the addition, edit or deletion as agreed upon in the community discussion. Include @ArctosDB/Code_Table_Administrators to let the Code Table Admins know the issue is ready to be resolved. [Summary Post Example](https://github.com/ArctosDB/arctos/issues/2137#issuecomment-548500471)

## Code Table Administrator/DBA Evaluation
Two Code Table Administrators and a DBA will evaluate the Summary post. If they agree that the request is straightforward, does not create inconsistencies, and will not significantly impact data already in Arctos, they will demonstrate their agreement by adding a “Thumbs Up” to the Summary post. 

### Code Table Change Approved by Code Table Administrators and DBA 
If two Code Table Administrators and the DBA agree that the request can be implemented, one of the Code Table Administrators will complete the tasks required to implement the request. [Example of Request Approved After Community Discussion](https://github.com/ArctosDB/arctos/issues/2137#issuecomment-548500471)

### Code Table Change Not Approved by Code Table Administrators and DBA 
If a code table change request is not unanimously approved by two Code Table Administrators and a DBA, the issue will be discussed by The Code Table Administrators at their monthly meeting and either returned to the community for more discussion, conditionally approved, or rejected. [Example of Request Sent to Code Table Admins](https://github.com/ArctosDB/arctos/issues/2579)

### Returned for Discussion 
If returned to the community for discussion, it will fall on the original requestor to stimulate discussion and present a new Summary resolution.

### Conditional Approval 
Occasionally, an issue requires multiple rounds of discussion and a notification to the community prior to implementation as it may affect daily activities of many community members. An example of such an issue can be found in the [Nature of ID GitHub discussion](https://github.com/ArctosDB/arctos/issues/2579). If conditionally approved, it has been deemed that an announcement should be made to the community prior to implementation. In such instances, a member of the Code Table Administrator Team will add the issue to the “Critical Issues” column of the [AWG Agenda Project](https://github.com/ArctosDB/arctos/projects/6) and facilitate discussion of the request with the Arctos Working Group (AWG) at the next meeting. The AWG will either [approve the request](###Code-Table-Change-Approved-by-Code-Table-Administrators-and-DBA), [return the request to the community for further discussion](###Returned-for-Discussion), [reject the request](###Rejected), or require an announcement of the approval before implementation.

### Rejected 
If rejected, a member of the Code Table Administrators will perform the steps required to ensure that the issue documentation is archived appropriately should a duplicate or similar issue arise in the future.
