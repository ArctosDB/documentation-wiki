---
title: Reports
author: ArctosDB
date: 2022-09-30
layout: default_toc
---

# Reports

Arctos has a built-in user-customizable reporter. It's pretty great.

## Language

The reporter uses CFML, HTML, and CSS, generally to produce PDF's through a browsers print-to-PDF functionality. Extensive documentation for each of these languages is widely available.

## Input

The reporter generally accepts the results of queries, or identifiers passed on from containers or transaction. This is readily expandable to most anything; file an Issue.

## Output

Output is generally either PDF-friendly HTML for labels, or CSV for consumption by external applications. However, it is possible to produce most anything that can be pushed through a browser.

## Fields

The reporter has the following structure:

* ``Report Name`` is the primary report identifier and must be unique. We recommend all lower-case ASCII characters (eg "myreport"), but at least locally any unique string will work.
* ``Report Type`` is for categorization and sorting.
* ``Accepts Variable`` controls what reports are avaiable when printing, and allows report selection to include only reports which work with the current data. Details are provided below.
* ``Report Description`` should contain enough information for anyone to understand why this report exists and how to use it.
* ``Used By Collections`` is used to filter and sort. This does not control access; all reports may be used by all collctions.
* ``Report CFM`` is (sorta) dynamic HTML, with query and processing capability.
* ``Report CSS`` is code that controls the page layout. It's generally better manage separately, but can be included in the cfm section in ``style`` tags as well.


## Accepts Variable

Accepts Variable controls what reports are avaiable when printing, and allows report selection to include only reports which work with the current data. 
The variable should be used in the SQL for selecting records (examples below). Supported values:

* table_name: temporary/cache table name of last catalog record search. This will always contain collection_object_id, which may be used to join to catalog records or flat. This is almost always the best choice for catalog record based labels.
* collection_object_id: a list of cataloged_item (or flat and filtered flat) collection_object_ids.
* transaction_id: a list of transaction (or loan, borrow, or accn) transaction_ids.
* container_id: a list of container IDs. May be be used to print container labels, or by joining to parts, catalog records.

## Getting Data

### SQL
 
PostgreSQL-flavored SQL is the primary mechanism to retrieve data from the database. 

#### Variables
SQL Input variables must be enclosed in hash marks, like "#table_name#".

### Functions

Many functions exist in Arctos. These can be used to simplify SQL, filter results, or package data in expected and portable formats. These may be viewed in the DDL repository.


### Tables

Table structure is available from the table browser. Cache tables FLAT (restricted access, unfiltered data) and FILTERED_FLAT (unrestricted access, filtered data) are often good easy to use sources of data, but do have limitations. Talk to your friendly local DBA if you have any questions. You may get a list of FLAT columns by entering "select * from flat where 1=2" in reports/writeSQL.

## Backups

All reports and individual reports may be downloaded as CSV, and new reports may be created from this. Save early and often.  https://github.com/ArctosDB/arctos-assets is available for more-persistent backups.

## Clean up

Take backups, then delete any reports for which you are responsible and do not use. Huge piles of abandoned reports cause problems for everyone, and drastic action may result. (OK, not that drastic, there will be backups.)

## Printing

Use the browser's built-in print to PDF functionality. Click settings and turn off headers.

## Debugging

Variable ``debug`` default ``false`` is available to the reporter. Use open+debug to set it to true. See examples below for usage.

## Libraries

* In the CFM section of the report, ``<cfset inclPagedJs=true>`` (or ``inclPagedJs=true`` in cfscript) will make the Paged.js library avaialble to reports.


## Examples and usage

In general, it is best to work with the DBA team to get started. Some commonly-used code examples are below.

### CFML Query Objects 


````
<cfquery name="d" datasource="user_login" username="#session.dbuser#" password="#decrypt(session.epw,session.sessionKey,'AES/CBC/PKCS5Padding','hex')#">
	select field_name from table_name where key=<cfqueryparam value="#transaction_id#" SQLType="int"> 
</cfquery>
````

*  name="d" - return a query object in variable ``d``
* ``username="#session.dbuser#" password="#decrypt(session.epw,session.sessionKey,'AES/CBC/PKCS5Padding','hex')#"`` - authentication based off of your Arctos login. Messing with this can cause accounts to be locked.
* ``<cfqueryparam value="#transaction_id#" SQLType="int">`` - please use cfqueryparam rather than bare variables in queries. Sending unsanitized SQL to the database makes the DBA team nervous, and can cause accounts to be locked.

### Debug

````
<cfif debug>
    <cfdump var="#d#">
</cfif>
````

will dump the object ``d`` - in this case the query we just performed.


### Comment
````
<!----
    this is a CFML comment
---->
````

Comments are ignored by the processor; future-you (and future everyone else!) will thank you for including lots of comments.

