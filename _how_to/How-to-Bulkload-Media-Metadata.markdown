---
title: How To Bulkload Media Metadata
layout: default_toc
author: Teresa Mayfield-Meyer
date: 2018-09-13
---


# How To Bulkload Media Metadata

After uploading, the directory can be used to build a media bulkloader file which creates media objects using the uploaded files in Arctos. Media uploaded using any of the tools available in Arctos will be stored at https://web.corral.tacc.utexas.edu/arctos-s3/

We'll use this directory to demonstrate.

Index of /arctos-s3/jegelewicz/2020-04-02/

Thumbnails are:

https://web.corral.tacc.utexas.edu/arctos-s3/jegelewicz/2020-04-02/tn/

and are prefixed with "tn_"

## Get a Media Metadata Bulkload Template

From the Arctos main menu select [Enter Data > Batch Tools > Bulkload Media Metadata](https://arctos.database.museum/tools/BulkloadMedia.cfm). You will see this

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_Metadata_Bulkload_Tool_Page.jpg)

Select the information you want to include in the template, then select "get template". You will be asked what you want to do with the file.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_Metadata_Bulkload_Template_Create.jpg)

Open the file with Excel and you will have a worksheet with all of the headers needed to bulkload your media metadata.

## Complete the Media Metadata Bulkload File


ignore folders with "Filter for extension (eg, ".jpg")"

regexfind=_.*$ captures the information before the first underbar for variable "[filename]." (This common situation is documented in the inline documentation at the top of the page.)

Preview Directory URL is the folder containing the thumbnails

Preview prefix (eg, "tn_") - enter "tn_" to prepend to the image filenames

Preview extension (eg, ".jpg") - enter ".jpg" for jpg previews

Select a license, media type, and mime type.

The bulkloader will accept a part's barcode as a proxy to cataloged items. We've extracted that from the filename with the regex above,
so all that's necessary is to include the variable in relationship term.

<img width="759" alt="screen shot 2018-05-23 at 1 12 21 pm"
src="https://user-images.githubusercontent.com/5720791/40448644-fc399ca0-5e8a-11e8-9cda-a32bda279b55.png">

Scroll down, click "build/rebuild," confirm that everything worked as expected, download CSV, fill in any remaining blanks (or use the
tool to do so before downloading), load to the media bulkloader, wait for email.

## Alternative Method ##

For use with small batch media uploader tool - see full documentation at [How to Upload Media to TACC](/how_to/How-to-Upload-Media-to-TACC)

### Modify Media Metadata Bulkload File

The file that you receive once your image upload is complete contains much of the information required to bulkload media.  Remember that although your media are now stored at TACC, they are not associated with any data in Arctos. The [Bulkload Media Metadata](http://arctos.database.museum/tools/BulkloadMedia.cfm) tool will allow you to complete this process.

This file will be deleted 3 days after the message is sent, but may be regenerated from the "existing jobs" link on the [Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm) tool page. 

#### Media Metadata Bulkload Video Tutorial ####

[![YouTube: How to Bulkload Media Metadata in Arctos](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Bulkload_Media_Metadata_in_Arctos_thumb.jpg)](https://www.youtube.com/watch?v=JkiRIH-JgYg)

# Related Links

[How to Upload Media to TACC](/how_to/How-to-Upload-Media-to-TACC)

[How to Create Media/Images](/how_to/How-to-Create-Media-Images)

