---
title: How To Delete a Catalog Record
author: Teresa J. Mayfield-Meyer unknown
date: 2021-10-18
layout: default_toc
---
# How To Delete a Catalog Record

In order to delete a catalog record(s) in Arctos, you must first create an **Encumbrance**

Note that you can only delete a maximum of 1000 catalog records at a time through this method.

##### NAVIGATION: Manage Date Menu → Metadata Menu → Encumbrances**

## Create an Encumbrance to Delete Catalog Records

Go to Manage Data -> Metadata -> Encumbrances from the main Tools menu (If you do not see this menu, you will need to request access). From the Encumbrances screen, click on the “Create an Encumbrance” hyperlink at the top of the page. Fill in the required fields with generic information so that you can reuse this encumbrance any time you would like to delete a catalog record now or in the future:
* **Encumbering Agent** - in most cases will be you, the operator
* **Made Date** - select today's date
* **Expiration Date**: choose a date up to the maximum of five years ahead of the made date. All encumbrances will expire on the expiration date or 5 years from the made date unless they are renewed - the collection contact will receive an email warning of expiration. Pay attention to these emails.
* **Encumbrance** - title with a generic name (e.g."delete records" or "duplicate records for deletion"); choose something that you will be able to search on and find later. Remember that you can create many different encumbrances, so it is OK to create one for a specific project.
* **Encumbrance Action** - For deletion purposes, you will want to choose "mask record", which will hide the record from public view. However, other options for encumbrances found at the code table controlled vocabulary here:
ctos.database.museum/info/ctDocumentation.cfm?table=CTENCUMBRANCE_ACTION
* click the "Create Encumbrance" button

## Delete Catalog Records

* To delete one or more catalog records, you will need to do a Catalog Record Search for record(s) that you would like to delete. You can also search on a group of records for deletion, for example, by searching on an accession.
* On the Search Results page, make sure you want to delete all catalog records listed in the table (if not, either remove records from the table using the check boxes or redo your search to isolate the records to be deleted). Select "Encumbrances" from the **Manage Menu** at the top of the results table.
* You will be navigated to the Encumbrance page where you will see all of the catalog records that you just queried listed at the bottom of the screen. Enter your agent name and encumbrance name to find your specific "delete" encumbrance.
* On the next screen, click on the "Add all Items to this Encumbrance" hypertext. Remember, you can only delete a maximum of 1000 catalog records at a time.
* You will now see all the records listed again, with an option to "Remove from this Encumbrance." If everything is OK, click "Return to this Encumbrance."
* Now click the "Delete Encumbered Records" hypertext and all records included in the encumbrance will be deleted from Arctos. You will need to confirm at the prompt **NOTE:** Records with citations or media cannot be immediately deleted - you must first detach citations or media objects from the record before you can delete it. If you are trying to delete more than 1000 records, you'll get an error message that starts with 'fail: listlen(catIdList)=...'
* **TIP:** you can also access Encumbrances through the Detail page of a single catalog record (via the top "Encumbrances" tab).
