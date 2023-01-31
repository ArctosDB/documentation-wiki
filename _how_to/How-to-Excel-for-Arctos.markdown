---
title: How To Manage Excel for Arctos
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2023-01-16
---


# Why Use Excel for Arctos?

Excel is a widely used tool for managing data in tables and many people managing data use it as a mechanism for getting data from one system to another. It is often the default tool for opening [.csv](https://en.wikipedia.org/wiki/Comma-separated_values) files (which are the kind of files you get when you download data from Arcots). Excel is user-friendly (mostly) and ubiquitous, almost everyone has access to this program either on their personal computer or on a computer at work. Excel can work for you, but at times it seems like it might be at odds with you. This How To provides insight into ways you can make Excel work better when it comes to uploading data or using downloaded data.

## Uploading Data 

### Dates 

See (#import_the_data_to_excel)

## Downloading Data 

### Non-ASCII Characters

Arctos supports Non-ASCII characters, which makes it nice for [Española Animal Control](https://arctos.database.museum/agent/21254695) but when you download data and open the file in Excel, you get 

`EspaÃ±ola Animal Control`

which isn't exactly useful. Here are two solutions:

#### Import the Data to Excel

Don't just open the CSV with Excel. Do this instead.

1. Open Excel then go to Data Menu
2. Under Get Data, select From Text/CSV.
3. Select the CSV file that you want to open.
4. Select File Origin = 65001: Unicode (UTF-8) from the drop-down list.
5. Select the delimiter, in this case it is comma.
6. Select Data Type Detection = Do not detect data types (This will keep your dates in whatever format they came out!)
7. Select Load to create the Excel data. 

 - adapted from [Microsoft Community Forum Answer](https://answers.microsoft.com/en-us/msoffice/forum/all/how-do-you-openimport-a-csv-file-with-unicode/5614e250-47c4-4577-8638-a809996e2356)

#### Convert the .csv to ANSI

1. On a Windows computer, open the CSV file using Notepad (Tip: change from Text Documents (*.txt) to All Files (*.*) in the file type in order to find your .csv).
2. Click "File > Save As".
3. In the dialog window that appears - select "ANSI" from the "Encoding" field and "All Files (*.*)" from the Save as type field. Then click "Save".
4 . That's all! Open this new CSV file using Excel - your non-ASCII characters should be displayed properly.

 - adapted from [YCBM Knowledgebase](https://support.youcanbook.me/article/502-how-can-i-get-excel-to-properly-display-special-characters-in-the-data-export)


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Excel-for-Arctos.markdown" target="_blank">here</a>.



