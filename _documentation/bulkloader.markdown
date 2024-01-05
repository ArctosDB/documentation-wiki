---
title: Bulkloader
author: Dusty L. McDonald, Teresa J. Mayfield-Meyer
layout: default_toc
---

# Bulkloader

#### Navigation: <a href="https://arctos.database.museum/Bulkloader/enter.cfm" target="_blank">Data Entry  > Enter Records</a>

New specimen records may be created from a single flat (non-relational)
file, a text file in which all (or most) data for a single cataloged
item are in a single row. This file can be created with any convenient
client-side application. The file is then loaded into a similarly
structured table on the server, and a server-side application (the
bulkloader) parses the columns from each row into the relational
structure of the database. The process provides an independent layer of
data checking before new information is incorporated into the database
proper. Original data that are received in electronic format may require
minimal manipulation; you can sometimes merely add the necessary columns
to build a file in the bulk-loading format.

**Bulkloader templates should be created from the Bulkloader Builder in
Arctos. All other means, including this documentation, may produce
non-current data which will be rejected.**

There is no standard method for moving data into table Bulkloader. You
may import data from any file format, type the data into the table,
write your own data entry screen, or use any other method you choose. We
appreciate documentation, even for specialized datasets – see [How To Github - Contribute to the Arctos Handbook](https://handbook.arctosdb.org/how_to/How-to-Contribute-Content-to-Arctos-Handbook.html) if you wish to contribute.

You may mix accessions, collections, or anything else in a single load.

The catalog record Bulkloader will not alone handle every eventuality that may
ever occur while entering data. (The suite of tools available should.)
Use [flags] to mark incomplete records for further editing, tie
to other bulkloaders with UUIDs, or talk to your friendly local Arctos
development team BEFORE you make a mess.

Error messages should include more than enough information to allow you
to locate and correct the problem. If that isn’t the case, [contact us]([https://arctosdb.org/join-arctos/contacts-support](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=contact&projects=&template=contact-arctos.md&title=%5Bexternal+CONTACT%5D)) 
with the error message and a description of
the action that caused the error message.

Arctos is case-sensitive. JOHN DOE is not the same value as John Doe.
Leading and trailing spaces and other non-printing characters matter.

The web-based applications may not work well for very large loads.
[Contact us](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=contact&projects=&template=contact-arctos.md&title=%5Bexternal+CONTACT%5D) if you’re having problems.

## Columns and Documentation

Documentation is provided as a Google Sheet:

[https://docs.google.com/spreadsheets/d/1VbNC3k17WAHMum_qD5UYoXxUUWwXXh5gZSM5vfGvRzU/edit#gid=529334279](https://docs.google.com/spreadsheets/d/1VbNC3k17WAHMum_qD5UYoXxUUWwXXh5gZSM5vfGvRzU/edit#gid=529334279)

Make sure to check the tabs for additional information!

## Pre-Bulkloader

Uploads go initially to table pre_bulkloader, which has the same columns as table bulkloader but is less controlled. (Mistakes will generally produce helpful errors rather than 'failed to load' states.)
 However, some fields do have controls and defaults.

 * **key** must exist (``NOT NULL``) and will default to a unique string if not provided. For most situations, do not include this column in uploads.
 * **entered_to_bulk_date** must exist (``NOT NULL``) and will default to ``current_timestamp`` if not provided. For most situations, do not include this column in uploads.
 * **enteredby** must exist and be an exact match to a current username.
 * **guid_prefix** must exist and be an exact match to ``collection.guid_prefix``

## Primary Key Warning

Some values may be replaced by or require primary keys: `locality_id`, `entered_by_agent_id`, `collecting_event_id`, etc. These are internal database identifiers that exist only for convenience, and may be updated, transferred to another data object, or removed for seemingly arbitrary reasons and without warning. They’ll probably work over short
time-periods, but we offer no guarantees.

## Processing

Once a record is marked to load by making ``status`` "autoload_core" (loads data from table bulkloader) or "autoload_extras" (also marks UUID-linked records in "component loaders" to autoload), a script periodically attempts to parse the record into the normalized core Arctos structure. This may result in two things:
    * the record is created and marked for cache refresh, or
    * an error is returned in the ``status`` column
   
Records which successfully load must be refreshed in the cache before appearing in the user interfaces. Records are refreshed in the order they enter the queue. This process often takes 
less than one minute, but in the case of many thousands of records being queued can take up to several days. <a href="https://arctos.database.museum/info/flat_status.cfm" target="_blank">Reports/Services >View Statistics >FLAT</a> status provides a summary of the state
of the cache, and may be useful in estimating processing time.

Note that there is a period of time between successful loading and the cache being refreshed where records are not visible in any user interface.

Additionally, status DELETE (case-sensitive) can be used to mark records for deletion. This process generally takes about 30 minutes.

## How To

Instructions for doing specifc tasks related to Bulkloading in Arctos

 - [How To Bulkload Catalog Records](https://handbook.arctosdb.org/how_to/How-to-Bulkload-Specimen-Data.html)
 - [How To Use SQL option in the Bulkloader](https://handbook.arctosdb.org/how_to/How-to-Use-Bulkloader-SQL.html)
 - [Pre Bulkloader](https://handbook.arctosdb.org/documentation/pre-bulkloader.html)
   
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/bulkloader.markdown" target="_blank">here</a>.
