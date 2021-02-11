---
title: How To Bulkload Identifiers and Relationships
layout: default_toc
author: Andy Doll, Teresa J. Mayfield-Meyer
date: 2021-02-10
---

# How To Bulkload Identifiers and Relationships

This document describes how to bulkload other identifiers with or without relationships to exisiting catalog records. You may also find [How To Choose the Proper Identifier Type](/how_to/How-to-choose-the-proper-other-identifier-type.html) useful in preparing a file for upload to this tool.

- **Other Identifiers** are other numbers (e.g. collector number) for that specimen
- **Other Identifier Types** are controlled by the vocabulary in the <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type" class="external">coll_other_id_type</a> code table.
- **Relationships** are links to other cataloged specimens (e.g. collected with, sibling of…). They are controlled by the vocabulary in the <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references" class="external">id_references</a> code table.

1. Log into Arctos and from the main menu select <a href="https://arctos.database.museum/tools/BulkloadOtherId.cfm" class="external">Enter Data -> Batch Tools -> Identifiers/Relationships -> Bulkload Identifiers/Relationships</a>
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture1.jpg)


2. The tool takes you to the Review and Load page. If you have already loaded data, you will see it here. If you need to load data, click on ‘Load csv’:
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture2.jpg)

3. Click on ‘Choose File’ button. Explorer window will pop up, find and select your file, then click ‘Upload this file’ button.
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/other_ids/Other_ID_Picture3.jpg)

4. Once loaded, click on ‘Review and Load’
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


 
