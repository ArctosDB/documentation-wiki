---
title: How to Batch Download Images.markdown
layout: default_toc
---

_This is a guide to automatically downloading multiple image files
from TACC based on a query to the standard search interface, and using
a Spreadsheet program (e.g., Excel) and Windows Powershell. Note that
there are many other (quicker) ways to do this (e.g., using the Arctos
API and Linux), but this method should work for most Windows users
with tools at hand. Medium-level Excel skills are expected._

The steps are: 

 1. Download a CSV file from Arctos with the GUIDs and the URLs of the images.
 2. In Excel, convert the CVS file to a batch download script.
 3. Run the script in Powershell


# 1. Query Arctos

 * Using the main specimen search
   [page](https://arctos.database.museum/SpecimenSearch.cfm), enter
   your query. As a worked example, we will attempt to download all
   images for specimens that have an National Park Service ID that are
   in the UAM herbarium. This search requires: i) checking ‘UAM:Alg’,
   ‘UAM:Herb’ and ‘UAMb:Herb’ in the ‘Collection’ dropdown, ii)
   checking ‘U. S. National Park Service accession’ and
   ‘U. S. National Park Service catalog’ in the ‘Other Identifier
   Type’ dropdown, and iii) selecting ‘image’ in the ‘Media Type’
   dropdown. Run the search. (As of 2021-06-09 this example gives
   17,127 specimens.)
 * In the ‘Tools: Map, Customize, or Download’ menu of the Results
   page, select ‘Add/Remove data fields’ and click on ‘Media’ in the
   center ‘Random’ panel. Then click ‘Save and Refresh’
 * In the ‘Tools: Map, Customize, or Download’ menu of the Results
   page, select ‘Download’, and save the CSV file on your Desktop.
   
# 2. Manipulate text in Excel
   
 * Rename the file to give it a suffix of `.txt`, not `.csv`. This is
   impossible in Windows unless have first gone into the Settings and
   enabled seeing the full file name (Windows hides this from you
   usually). You can also do this in Powershell: `mv foo.csv foo.txt`.
 * Open the file in a Spreadsheet. The previous step of giving the
   file a `.txt` suffix triggers the delimiter dialog. Choose a comma
   as the delimiter and a text qualifier of ‘{none}’. (The JSON in the
   Media column is now ‘exploded’ into separate columns.)
 * Delete the first line. Delete all columns except for the GUID and
   the column of the form:
   `""MU"":""https://web.corral.tacc.utexas.edu/.../H1010350.jpg""`. This
   column contains the URL of the full size JPEG image. Another column
   will have the URLs of the DNG (RAW) files (`...dng`) - use that URL
   if you want the DNG files.  Clean the URL column using Find and
   Replace: get rid of quotes and the `MU:` to leave a correct URL. In
   the GUID column, find and replace the colons with an underscore.
 * Exchange the two columns and add an initial column (A) and a column
   (C) between your columns (B and D). In the first cell of column A
   type `curl -Uri ` (note the trailing space), and in the first cell
   of column C type ` -OutFile ` and in the first cell of column E
   type `.jpg`. In the first cell of column F add a function:
   `=A1&B1&C1&D1&E1`. Highlight cells in column A and copy the text
   down (‘Control-D’). Repeat for C, E and F.
 * Column F should now have contents in the form: `curl -Uri
   https://web.corral.tacc.utexas.edu/UAF/2009_01_15/jpegs/H1010350.jpg
   -OutFile UAM_Herb_84091.jpg`. Copy all the cells in column F and
   paste into a text editor (e.g., Notepad, or Notepad++). This is
   your batch download file. You may decide to break this up into
   sections rather than running the whole file at once.  Save the file
   as `arctos.ps1` on your Desktop. However, Windows will probably add
   `.txt` to the file name.
 
# 3. Run the script in Powershell

 * In the Start Menu, find and run Windows Powershell. You will now be
   in a command line environment.
 * Type `cd Desktop` to get to your Desktop.
 * Type `ls` to see your files.
 * If your new file is called `arctos.ps1.txt`, rename it with `mv
   arctos.ps1.txt arctos.ps1`
 * Create a download directory: `mkdir arctos_images`
 * Move the script into that directory: `mv arctos.ps1 arctos_images`
 * Move into that directory `cd arctos_images`
 * Finally, run the script: `.\arctos.ps1`

In File Explorer, check to see that the images are being
downloaded. The filenames will be the GUID, plus `.jpg`.  Then come
back in a few hours and see how the download is going. If you need to
interrupt the script, type Control-C. Search for documentation on
Powershell as needed.

