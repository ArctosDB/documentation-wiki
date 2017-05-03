---
title: Understanding Portals
layout: default_toc
---

## Background

Arctos uses Virtual Private Databases (VPDs) to partition collections. A VPD is a virtual container around rows in a table to which
specific users may be granted specific rights. From a user's perspective, the rows to which they've been granted access are all that exist; 
their viewpoint would not change if other collections were on another server on another system to which they do not have access. 

## Users

Unlike other systems, the Arctos UI has the capability to log into the database as specific users. Every operator is a user, and as above 
users may be granted specific roles to specific partitions.  When a user goes to Arctos a session is established and they are logged into
a specific account. 

## Roles

Arctos has two "types" of roles: access and permission. Access roles grant a user access to a VPD. Permission roles grant a user specific 
operations on the data to which they have access. (Examples:

* A user who has only UPDATE permission on "sometable" can update the records in "sometable." 
However, without VP access, "sometable" does not exist for them.
* A user who has only "some_collection" access can access the "some_collection" VPD partition - in which nothing will exist for them 
without a permission role.
* A user who has UPDATE permission on "sometable" *and* "some_collection" VPD access can update the rows owned by "sometable" which are 
owned by "some_collection." (Which would be awkward, because they can't SEE those data without also having SELECT explicitly granted!)

That is, user access is defined as the intersection of a user's permissions and access.


### Portals

Portals are simply public-access shared users. The default account is "public" which has SELECT access on selected tables. For example,
 the "public" user has full access to FILTERED_FLAT (the summary/query table from which restricted information has been removed) and no 
 access to FLAT (the "internal" summary table which contains encumbered information). Each portal has an associated user. An institution
 with two collections would generally have three portals:
 
 * A "Collection1" portal with SELECT permission on Collection1 data in public tables
 * A "Collection2" portal with SELECT permission on Collection2 data in public tables
 * An institutional portal, with SELECT permission on Collection1 and Collection2 data in public tables
 
#### Portal Roles

Portal users are granted SELECT on public tables. Internal table (such as transactions) do not exist for portal users.
 
 
### Operators

Each Arctos Operator (agent with more than SELECT access) is a user. As such, when logged in they are explicitly granted their own permissions.
To access portals, a user must log out of their operator account (which would log them into the default "public" account) and then
click a link to a portal (which would log them in as the portal's associated public user).

#### Operator Roles

Operators are explicitly assigned roles by their supervisors. These roles have been bundled for convenience - for example, the MANAGE_SPECIMENS
 role allows INSERT and UPDATE and DELETE on table ATTRIBUTES, but only INSERT and UPDATE on IDENTIFICATION. (That is, students can create and
 manage identifications, but they cannot remove them.) Operator roles include PUBLIC, which provides read access to assigned collection's data.