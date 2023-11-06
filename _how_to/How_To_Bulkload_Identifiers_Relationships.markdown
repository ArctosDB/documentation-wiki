---
title: How To Bulkload Identifiers and Relationships
layout: default_toc
author: Michelle Koo (original by Andy Doll, Teresa J. Mayfield-Meyer)
date: 2023-11-06
---

# How To Bulkload Identifiers and Relationships

Use this tool to bulkload other identifiers with or without relationships to existing catalog records. For example, GenBank records to a catalog record or parasite and/or host relationship. Read [How To Choose the Proper Identifier Type](/how_to/How-to-choose-the-proper-other-identifier-type.html) if you are unsure of the Identifier type when preparing a file for upload to this tool. Note: This tool does NOT add missing Issued By to existing Identifiers, go here for the [Identifier IssuedBy Bulkloader](https://arctos.database.museum/loaders/bulk_identifier_issuedby.cfm).

- **Other Identifiers** are other numbers unique to that record
- **Other Identifier Types** are [controlled vocabulary in a code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type)
- **Issued By** is the agent (person, organization, or other) responsible for assigning the identifer. This 'Issuer' must already have an Agent profile.
- **Relationships** are links to other cataloged records (e.g. collected with, sibling of…). They are controlled by the vocabulary in the <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references" class="external">id_references</a> code table.

1. Log into Arctos. You will need to have data_entry permission to load and manage_records permission to update to the database. Go to the <b>Tools Directory -> Records tile -> <a href="https://arctos.database.museum/loaders/BulkloadOtherId.cfm" class="external">Identifier: Bulkload</a></b>. 
<p>Click on <b>Load CSV</b> to get started</p>.
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/BulkloadIdentifiersRelationships_toolpage.png)

2. This will open a new panel. These steps below will assume you need to prepare a file first. The table at the bottom of the page details the fields needed in the CSV for this tool. You can either click on the link to <b>Get a template</b> for a prepared CSV with the fields in the table or simple create your own in a spreadsheet program.
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/BulkloadIdentifiers_howtoPrep file.png)

3. Understanding the fields: 

 - There are five conditional fields to choose the record that will have the added identifer, which means one combination of these fields is required. For Example:<br>
 Use: <b>GUID</b> (eg., MVZ:MAMM:12222)<br>
 OR
 Use: <b>guid_prefix</b> AND <b>existing_other_id_type, existing_other_id_number</b> <br>
 OR 
 Use: <b>UUID</b> (completely unique)
 
 - There are three required fields:<br><b>new_other_id_type</b> = [controlled vocabulary](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type), if unsure which to use, choosing 'identifier' is safe)<br><b>new_other_id_number</b> = the value of the identifier, which can be an integer, string or a URL such as a GenBank record<br><b>new_other_id_references</b> = [controlled vocabulary](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references), choose 'self' when adding in identifiers such as GenBank, otherwise a Relationship to another catalog record can be selected.
 
 - There are three optional fields but it is best practise to include at least <b>issued_by</b>, which is the agent (person or organization) responsible for the identifier. The Agent must exist in Arctos.

4. Once you have your file prepared then upload by clicking the <b>Browse</b> button. This will open a Finder or Explorer window; find and select your file, then click <b>Upload this file</b> button.


5. For managers: Once uploaded, click on ‘Review and Load’
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture4.jpg)

5. That will take you to this page to review your entries:
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture5.jpg)

6. If everything looks correct, click the ‘Check All and Change Status to autoload’ button: 
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture6.jpg)<br>
If errors are present, you have options:<br>
- Click the ‘Return to Review and Load’ link, click ‘Delete’ to remove everything you just loaded, fix your .csv and reload.<br> 
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture6a.jpg)<br>
- Check individual rows and change their status to ‘delete’.<br>
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture6b2.jpg)<br>
This will separate them from the rest of the entries and they can then be downloaded or deleted on the ‘Review and Load’ page.<br>
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture6b.jpg)

7. Once you have set the status to autoload, just wait for the bulkloader to process the records.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**TIP** If you return to the ‘Review and Load’ page and refresh it periodically, you should see the Count number decrease (it can be slow, maybe 10 entries/minute)

8. When everything is loaded, the table on the ‘Review and Load’ page will be empty:
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture8.jpg)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How_To_Bulkload_Identifiers_Relationships.markdown" target="_blank">here</a>.
 
