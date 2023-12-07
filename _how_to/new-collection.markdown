---
title: How To Join Arctos
layout: default_toc
author: DLM
date: 2018-06-08
---
# How To Join Arctos

[Getting Started Documentation](https://handbook.arctosdb.org/documentation/getting_started.html)

## For prospective partners


Fill out the [Prospective Collection Form](https://arctos.database.museum/new_collection.cfm) and we will contact you.
You will need an Arctos account to access the form; you may create one at the top of any page. Following the [user guidelines](https://handbook.arctosdb.org/documentation/users.html) will streamline things later.


The submitted form will go to the Arctos Working Group. Someone from the Arctos Working Group (AWG) will contact the submitter as soon as possible to ensure a good communication channel. Please email arctos.treasurer@gmail.com if you have not received a response within one week.  


Once the prospective partner has committed to Arctos, the Arctos Treasurer will being the process of developing a Memorandum of Understanding (MOU) between the institution and Arctos.

## For Arctos
			
The Arctos Working Group will receive an email when a form is submitted. An AWG representative should establish contact with the submitter as soon as possible. A [template](https://docs.google.com/document/d/1m-lq77WnQpT_6-ClCQfwfqjxP4ETlGAhqh_YXGS0vys/edit) is available. The chair of the Arctos Working Group will forward the submitted form to the Arctos Steering Committee.

That representative should create a project in the [new-collections Github repository](https://github.com/ArctosDB/new-collections) using the steps outlined in both this document and the [Arctos New Collection Project Template](https://github.com/ArctosDB/new-collections/projects/6).



This process relies on mentorship. An institutional Mentor should be assigned as the first part of the administration process. Each collection in the institution will need a Mentor as well; this may all be the same person, or they may all be different, or any combination. Each collection needs at least one Mentor; any arrangement which satisfies this requirement is suitable. 

A [list of volunteer Mentors is available](https://arctos.database.museum/info/mentor.cfm). Mentors will need global_admin, or someone with global_admin to act on their behalf. To become a Mentor, add the mentor role in [Manage Collection](https://arctos.database.museum/Admin/Collection.cfm) for the appropriate collection along with the Agent name of the person who has offered to be a mentor.


The Mentor(s) are responsible for the following:


* Facilitate communication between the incoming institution, the Arctos Working Group, and Arctos staff during this entire process, work with the Arctos Treasures to complete an MOU.

* The link in the initial contact email has an administrative section. The institutional mentor should change status to "administrative approval granted" and add their name and email address to the form. Set Status to "approve_to_pre-create_collections," save.


* Define collections. Incoming collections are often merged or split, for example - this should be understood and agreed upon by all involved parties very early in the process. Documentation is available at [https://handbook.arctosdb.org/documentation/catalog.html](https://handbook.arctosdb.org/documentation/catalog.html). Create a GUID_PREFIX for each collection in the institution. This is a permanent value which is used in links to specimens and should never be changed. Please take great care to ensure that the collections understand the importance of stability in this value before proceeding. Documentation is available at [https://handbook.arctosdb.org/documentation/catalog.html](https://handbook.arctosdb.org/documentation/catalog.html). GRBIO may be a useful resource when considering a new GUID Prefix. When GUID_Prefix is established, pre-create collections. 


* Work with the incoming Institution to provide  metadata for each collection.


* Create an Operator for each collection. Documentation is [https://handbook.arctosdb.org/documentation/users.html](https://handbook.arctosdb.org/documentation/users.html) and a How-To is available at [https://handbook.arctosdb.org/how_to/How-to-Create-a-New-User-Account-for-Operators.html](https://handbook.arctosdb.org/how_to/How-to-Create-a-New-User-Account-for-Operators.html). These new Operators do not need any roles or collections; this will be assigned when the collections are created.

* Assist with publishing collection data to VertNet Integrated Publishing Toolkit (IPT).


Once collection metadata are provided and reviewed _for all collections in the institution_, the Mentor should change the status to "approve_to_create_collections" and ensure that the database administrators have received the notification of new collections. Collections will not be created until an MOU - see [draft template](https://bnhmwp.berkeley.edu/arctos/wp-content/uploads/sites/19/2018/06/Arctos_MOU_template_2018.doc) - has been signed by all parties. The Arctos Steering Committee Chair will sign the MOU on behalf of Arctos.


## Existing Institutions

Existing institutions in good standing do not need to complete a Prospective Collection Request. Established Arctos database institutions that just want to add a collection should proceed to "<a href="https://arctos.database.museum/Admin/pre_collection.cfm" class="external">Finalize collection creation request</a>" under "Manage -> Community."

1. Read through the "<a href="https://arctos.database.museum/Admin/pre_collection.cfm" class="external">Prerequisites</a>" and if anything there isn't clear or hasn't been discussed with your institution, then don't proceed. If you believe you know what you're doing,* check all the boxes to affirm.
    *Note: the "admin_user" is the admin's login name NOT their Agent name.
2. Your new GUID_prefix should be confirmed with your institution and the DBA team.
3. Your "preferred taxonomy source" should be decided ahead of creating the new collection. (There is a wide variety of taxonomy resources to choose from.) 
4. Have your Loan Policy URL copied from menu item "Manage Data," "Metadata," "Manage Collection."
5. After you've checked all the boxes, proceed.
6. Fill in the information on the form.  Sign it with your login name and your mentor's login name if you know it, or simply sign your login name in the mentor's field as well if you are comfortable without a mentor.
     *You may mentor yourself, although we do recommend reaching out to similar collections at other institutions. See options at "<a href="https://arctos.database.museum/info/mentor.cfm" class="external">Find a Mentor</a>."
7. Voila!  A new collection REQUEST has been created.
8. <a href="https://github.com/ArctosDB/new-collections/issues/new?assignees=&labels=&projects=&template=exisiting-institution-requesting-a-new-collection.md&title=Arctos+Institution+Name+request+to+add+a+new+collection" target="_blank" class="external">Create a new issue in the new collections Github repository</a> and add the guid_prefix(s) you've submitted.


## For DBAs

You will be contacted via GitHub by the new collection or their mentor. Data will be in table pre_collection. All subsequent communication should be through GitHub.

1. Ensure GUID_prefix is familiar, users exists, etc.
2. Create collections
3. Grant collection access, manage_collection, and global_admin to admin_user (it may be a list).
4. If a request is denied or revoked, change guid_prefix to "INVALID:{former guid_prefix}"
5. Find pending requests: ``select guid_prefix from pre_collection where guid_prefix not in (select guid_prefix from collection);``

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/new-collection.markdown" target="_blank">here</a>.
