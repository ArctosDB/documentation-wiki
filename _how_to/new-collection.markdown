---
title: Create a collection in Arctos
layout: default_toc
author: DLM
date: 2018-06-08
---
# New Collections in Arctos
 
## For prospective partners

Fill out the form at [http://arctos.database.museum/new_collection.cfm](http://arctos.database.museum/new_collection.cfm) and we will contact you.
You will need and Arctos account to access the form; you may create one at the top of any page. Following the guidelines at the [http://handbook.arctosdb.org/documentation/users.html](Users Documentation) will streamline things later.



## For Arctos


You will receive an email on form submission. You should contact the submittor as soon as possible to ensure a good communications channel is established.
After the administration considerations are addressed, a Mentor should be assigned to the institution. A list of volunteer Mentors is available at
[http://arctos.database.museum/info/mentor.cfm](http://arctos.database.museum/info/mentor.cfm). Eventually each collection will need a Mentor;
the initial contact/Mentor will need to arrange this. 

Once a Mentor is assigned, they should confirm administrative arrangements have been made and then may create "seed" collections from the link provided in the initial contact email. (Set Status to "approve_to_pre-create_collections" to see this tool.) Only GUID_PREFIX is required for this step; the Mentor should ensure that collections understand the implications of 
this critical part of a permanent identifier and have selected appropriate values before proceeding. This value should never be changed after being established.

The Mentor should then work with the collections to establish a relationship with a Collection Mentor, populate collection metadata on the form, and invite new Operators. The link provided in the initial submission provides access to anyone with an Arctos account; the Mentor may choose to fill out the forms, or assist the new collections in doing so.

Once collection metadata are provided and reviewed _for all collections in the institution_, the Mentor should change the status to "approve_to_create_collections" and ensure that the database administrators have received the notification of new collections. 

## For DBAs

You'll get email from new_collections@arctos.database.museum when a Mentor flags an institution as approve_to_create_collections. Sufficient data to create new collections should be in tables pre_new_institution (pkey: niid) and pre_new_collection (fkey: niid). 

All communication should be addressed to pre_new_collection.contact_email and copied to pre_new_collection.mentor_contact.


1. Create collections
2. Grant collection access, manage_collection, and global_admin to pre_new_collection.admin_username (it may be a list).
3. Set pre_new_institution.status to "complete".