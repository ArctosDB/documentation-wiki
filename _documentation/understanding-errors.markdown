---
title: Errors
layout: default_toc
---

# Understanding Arctos Errors

Links:
 - [check constraint](#ck)
 - [bulk loading: invalid table columnn, etc](#bl_row)
 - [table of view does not exist](#notable)
 - [unique constraint-_iu_table_and_column_ violated](#iu)
 - [unique constraint (UAM.IU_CONTAINER_BARCODE) violated](#iu_barcode)
 - [cannot update or insert _schema.table.column_](#schema)
 - [missing expression](#me)
 - [integrity constraint violated](#fk)
 - [cannot insert NULL](#insnull)

---
<a id="ck"></a>
>## check constraint (UAM.CK_{tbl}_{col}_NOPRINT) violated

### Problem

Column {col} (often cryptically abbreviated due to Oracle object name constraints) in table {tab} has nonprinting characters.

### Solution

Find the disallowed characters using Reports/DataServices/FindAndReplaceNonprintingCharacters (or the tool of your choice) and strip them from your data.

### More Information

Arctos generally disallows characters which are not in POSIX character class "PRINT" due to limitations in "data consumers" such as GBIF.

<a id="bl_row"></a>
>## Specimen Bulkloader: invalid user.table.column, table.column, or column specification

### Problem

You've tried to use a column that doesn't exist.

### Solution

Use the BulkloaderBuilder to create CSV templates

### More Information

The bulkloader insert is entirely dynamic; column names are inferred from the header of the loaded CSV file. This allows unused columns to simply be excluded, but causes errors to be somewhat cryptic. "Columns" are often caused by Excel adding trailing NULL values onto CSV files. This is because Excel is evil; check your CSV in a UTF8-compliant text editor that won't "helpfully" mangle your data.<a name="tbldne"></a>

<a id="notable"></a>
>## table or view does not exist

### Problem

A temporary table no longer exists.

### Solution

Re-query

### More Information

Arctos is session-based. When a search is performed, a temporary table is created to hold the search results. This allows high-performance paging (_e.g._, through SpecimenResults), and allows results-based forms (such as label printing) to "know" what your last query was. Temporary tables are expunged when your session expires (90 minutes) and are replaced when a new query is performed. If you're seeing this error,  you're probably trying to work with two results sets in multiple tabs, you're just coming back from lunch and have been automatically logged out, or you've logged in or out.<a name="iu"></a>

<a id="iu"></a>
>## unique constraint _iu_table_and_column_ violated

### Problem

You are trying to create an object which already exists, or re-use a name or identifier that is required to be unique.

### Solution

Create a unique value, or use existing data

### More Information

Many fields in Arctos are required to be unique at various scopes; a collection may have only one "catalog number one," all of Arctos may have only one taxon name "Sorex cinereus." If the situation leading to this error is more similar to catalog numbers, you may have an organizational problem; check that the item you are trying to create is not indistinguishable from other items. If the situation leading here is more similar to taxon names, please carefully search the data before creating new values; failure to do so often leads to the creation of functionally-identical data.<a name="iubc"></a>

<a id="#iu_barcode"></a>
>## unique constraint (UAM.IU_CONTAINER_BARCODE) violated

### Problem

An especially disturbing instance of unique constraint violations.

### Solution

Do not create or edit individual containers

### More Information

This error is a strong indication of risky behavior, in which one existing container is being replaced by another existing container. Done incorrectly, this has the potential of scrambling the information on both containers (and therefore everything contained in them). We strongly suggest a thorough review of [object tracking documentation](/documentation/container/) and local procedures.<a name="nonull"></a>

<a id="schema"></a>
>## cannot update _schema.table.column_ to null or cannot insert NULL into _schema.table.column_

### Problem

You are trying to update a non-nullable value to NULL, or create a NULL value in a non-nullable field

### Solution

Delete, or choose/supply suitable data

### More Information

Two actions commonly lead here:

1.  A user is trying to make data go away
2.  A user is trying to assert "we don't know" for a required field

In the first situation, use the DELETE button. NULL values are NULL values, not a removal of the data object. In the second situation, supply an appropriate value. Required data always have a no-data option, such as Agent "unknown."


<a id="me"></a>

>## missing expression

### Problem

You've made Oracle angry

### Solution

Do not taunt the Oracle

### More Information

Two actions commonly lead here:

1.  Your browser has "helpfully" filled something in, bypassing the actions that get the data needed to save
2.  We've failed to properly sanitize input.

In the first situation, most common with Agent Picks, remove a character from the end of the data your browser has so helpfully supplied and hit TAB - a popup window should open (and usually immediately self-close) and the selected data should turn green, indicating it is safe to save. In the second situation, use the contact link at the bottom of the form.

<a id="fk"></a>

>## integrity constraint (_schema.table.column_) violated

### Problem

You're trying to delete something that's been used elsewhere

### Solution

Delete "child" data

### More Information

These errors are most commonly encountered when attempting to delete specimen parts which have been on loan. Arctos (usually) links specimens to loans via parts. Deleting loaned parts therefore removes any record of the specimen having been loaned, and so is prevented. In the unusual situation where it is desirable to delete loaned specimens, first remove them from any loans then proceed with the delete.

<a id="insnull"></a>

>## cannot insert NULL into (_schema.table.column_)

### Problem

Something required is NULL or blank

### Solution

Provide required data OR remove empty row

### More Information

The most common cause of this error is Excel adding a "blank" row to the end of CSV files intended for various bulkloaders. _schema.table.column_ will be the first NOT NULL column encountered by Oracle. Simply open the CSV in any PLAIN text editor and remove the blank line. Special caution: Some text editors (TextPad) are known to mess with character encoding. We use Sublime Text. 

![Screen Shot 2016-02-03 at 10.29.59 AM](https://arctosdb.files.wordpress.com/2014/09/screen-shot-2016-02-03-at-10-29-59-am.png)

Typical INSERT statement. Notice the data (last line) are all NULL.

![Screen Shot 2016-02-03 at 10.32.55 AM](https://arctosdb.files.wordpress.com/2014/09/screen-shot-2016-02-03-at-10-32-55-am.png) 

Data viewed in plain-text editor. Note Line #168. Please use the contact link at the bottom of any Arctos page if you know how to prevent this behavior by Excel!