---
title: Create a collection in Arctos
layout: default_toc
author: DLM
date: 2018-06-08
---
# New Collections in Arctos
 
## For prospective partners

Fill out the form at [http://arctos.database.museum/new_collection.cfm](http://arctos.database.museum/new_collection.cfm) and we will contact you.
You will need an Arctos account to access the form; you may create one at the top of any page. Following the guidelines at the [http://handbook.arctosdb.org/documentation/users.html](Users Documentation) will streamline things later.



## For Arctos
		
			
You will receive an email on form submission. The submitter should be contacted as soon as possible to ensure a good communications channel is established.

This process relies on mentorship. An institutional Mentor should be assigned as part of the administration process. Each collection in the institution will need a Mentor as well; this may all be the same person, or they may all be different, or any combination. Each collection needs at least one Mentor; any arrangement which satisfies this requirement is suitable.


A list of volunteer Mentors is available at
[http://arctos.database.museum/info/mentor.cfm](http://arctos.database.museum/info/mentor.cfm). Mentors will need global_admin, or someone with global_admin to act on their behalf.


The Mentor(s) are responsible for the following:


* Facilitate communication between the incoming institution, the Arctos Working Group, and Arctos staff during this entire process.
* Define collections. Incoming collections are often merged or split, for example - this should be understood and agreed upon by all involved parties very early in the process. Documentation is available at [http://handbook.arctosdb.org/documentation/catalog.html](http://handbook.arctosdb.org/documentation/catalog.html).
* Create a GUID_PREFIX for all collections in the institution. This is a permanent value which is used in links to specimens and should never be changed. Please take great care to ensure that the collections understand the importance of stability in this value before proceeding. Documentation is available at [http://handbook.arctosdb.org/documentation/catalog.html](http://handbook.arctosdb.org/documentation/catalog.html).
* Pre-create collections. The link in the initial contact email has an administrative section. Set Status to "approve_to_pre-create_collections," save, then provide GUID_PREFIX in the form which will appear to "seed" collections. Any number of collections may be pre-created for an Institution.
* Work with the incoming Institution to provide collection data for each collection.
* Create an Operator for each collection. Documentation is [http://handbook.arctosdb.org/documentation/users.html](http://handbook.arctosdb.org/documentation/users.html) and a Hot-To is available at [http://handbook.arctosdb.org/how_to/How-to-Create-a-New-User-Account-for-Operators.html](http://handbook.arctosdb.org/how_to/How-to-Create-a-New-User-Account-for-Operators.html). These new Operators do not need any roles or collections; this will be assigned when the collections are created.


Once collection metadata are provided and reviewed _for all collections in the institution_, the Mentor should change the status to "approve_to_create_collections" and ensure that the database administrators have received the notification of new collections. 

## For DBAs

You'll get email from new_collections@arctos.database.museum when a Mentor flags an institution as approve_to_create_collections. Sufficient data to create new collections should be in tables pre_new_institution (pkey: niid) and pre_new_collection (fkey: niid). 

All communication should be addressed to pre_new_collection.contact_email and copied to pre_new_collection.mentor_contact.


1. Create collections
2. Grant collection access, manage_collection, and global_admin to pre_new_collection.admin_username (it may be a list).
3. Set pre_new_institution.status to "complete".