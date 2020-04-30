---
title: How To Bulkload Media Metadata
layout: default_toc
author: Teresa Mayfield-Meyer
date: 2020-04-30
---

# How To Bulkload Media Metadata #

If you have used the CyberDuck method to upload large amounts of media, or your media has otherwise been added at TACC, but never "created" in Arctos, this tutorial can help you create the metadata in bulk.

The TACC directory to which your media was loaded can be used to build a media metadata bulkload file which creates media objects in Arctos. Most media uploaded using any of the tools available in Arctos will be stored at https://web.corral.tacc.utexas.edu/arctos-s3/ sub directories are generally created with Arctos usernames of the person who uploaded media.

We'll use this directory to demonstrate:

https://web.corral.tacc.utexas.edu/arctos-s3/jegelewicz/2020-04-02/

Thumbnails are found at:

https://web.corral.tacc.utexas.edu/arctos-s3/jegelewicz/2020-04-02/tn/ and are prefixed with "tn_".

## Bulkload Media Metadata From Scratch ##

### Get a Media Metadata Bulkload Template ###

From the Arctos main menu select [Enter Data > Batch Tools > Bulkload Media Metadata](https://arctos.database.museum/tools/BulkloadMedia.cfm). You will see this

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_Metadata_Bulkload_Tool_Page.jpg)

Select the information you want to include in the template, then select "get template". You will be asked what you want to do with the file.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_Metadata_Bulkload_Template_Create.jpg)

Open the file with Excel and you will have a worksheet with all of the headers needed to bulkload your media metadata.

### Complete the Media Metadata Bulkload Template ###

Using the downloaded template, fill in the appropriate fields.

#### MEDIA_URI ####
This field should hold the URI for the media itself. From our example. The directory appears as follows:

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_To_Bulkload_Metadata_1.jpg)

The URI for each of the three images is the root directory which appears in the search bar of your browser (red box), plus the filename that appears in the list (purple box).

You can use the CONCATENATE function in Excel to create the URIs. Copy the root directory and paste it into the first column of a blank Excel worksheet, copy the filenames and place them into the next column to the right, then use the CONCATENATE function to put them together.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_CONCATENATE_URI.jpg)

Select enter and you have it! Copy the CONCATENATE formula down for all files in the batch.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_CONCATENATE_URI_1.jpg)

Use Copy/Paste Special Values Only to put the complete URIs into your Media Metadata Bulkload Template.

#### MIME_TYPE ####
Enter the appropriate value from the [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=CTMIME_TYPE).

#### MEDIA_TYPE ####
Enter the appropriate value from the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmedia_type).

#### PREVIEW_URI ####
This field should hold the URI for the media thumbnail. From our example, the directory of thumbnail images can be found in the tn/ folder of the MEDIA_URI folder above. Double click the tn/ (red box) to view the directory.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_To_Bulkload_Metadata_tn.jpg)

The URI for each of the three images is the root directory which appears in the search bar of your browser (red box), plus the filename that appears in the list (purple box). Note - in this example, only two thumbnails were created during image upload. See **NEED INSTRUCTIONS** for creating thumbnails if you need to create a thumbnail manually. Metadata can be created without a thumbnail.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_To_Bulkload_Metadata_tn_1.jpg)

You can use the CONCATENATE function in Excel to create the URIs. Copy the root directory and paste it into the first column of a blank Excel worksheet, copy the filenames and place them into the next column to the right, then use the CONCATENATE function to put them together (see directions above).

#### MEDIA_LICENSE ####
Enter the appropriate value from the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMEDIA_LICENSE).

#### MEDIA_LABEL ####
Up to 10 labels can be added using this tool and label types are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMEDIA_LABEL). Adding **description** and **made date** labels, while not required, will help in locating media via media search.

#### MEDIA_RELATIONSHIP ####
Up to 5 relationships can be made between the media and Arctos data objects and relationships are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMEDIA_RELATIONSHIP). Adding at least one relationship is recommended as this is how displayed media makes Arctos awesome! The most used relationship is with a cataloged item (shows cataloged_item). The value for this relationship should be the GUID for the related cataloged item.

  **Pro Tip** Naming files so that they include the GUID makes this task easier. With a few strategic find/replace moves in Excel the file name can be tranformed into the GUID. Also, the bulkloader will accept a part's barcode as a proxy to cataloged items. Barcodes can also be incorporated into the filename so that it can be extracted from the filename.
  
### Upload Media Metadata Bulkload File to the Tool ###

Once the required and any optional fields are complete in the template, save the file as a .csv

  **Pro Tip** .csv is the format required for upload to Arctos, however, opening a previously saved .csv in Excel will remove formatting included in the .csv, particularly for dates. Before saving the completed template as a .csv, safe the file first as .xlxs in case you need to make any modifications so that you will retain any formatting.
  
From the Arctos main menu select [Enter Data > Batch Tools > Bulkload Media Metadata](https://arctos.database.museum/tools/BulkloadMedia.cfm). You will see this

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_Metadata_Bulkload_Tool_Page.jpg)

Scroll to the bottom of the page and select "Browse". Navigate to your .csv and select open. You will now see the file name next to the "Browse" button. Select "Upload this File". You will then see this message:

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_Metadata_Bulkload_Loaded.jpg)

Depending upon the size of your file, you may be able to see your media immediately, or it may take a day or two. You can see the progress by selecting "[My Stuff](https://arctos.database.museum/tools/BulkloadMedia.cfm?action=mystuff)".

Any errors, will need to be corrected by correcting and re-loading the file. In this case, the cataloged items do not yet exist in Arctos. If they are added, the media metadata should load.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/media/Media_Metadata_Bulkload_Errors.jpg)

## Bulkload Media Metadata with Small Batch Media Upload Tool File ##

For use with small batch media uploader tool - see full documentation at [How to Upload Media to TACC](/how_to/How-to-Upload-Media-to-TACC)

#### Modify Media Metadata Bulkload File ####

The file that you receive once your image upload is complete contains much of the information required to bulkload media.  Remember that although your media are now stored at TACC, they are not associated with any data in Arctos. The [Bulkload Media Metadata](http://arctos.database.museum/tools/BulkloadMedia.cfm) tool will allow you to complete this process. Use the instructions above to help you modify this file for use in the tool.

This file will be deleted 3 days after the message is sent, but may be regenerated from the "existing jobs" link on the [Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm) tool page. 

## Media Metadata Bulkload Video Tutorial  ##

[![YouTube: How to Bulkload Media Metadata in Arctos](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Bulkload_Media_Metadata_in_Arctos_thumb.jpg)](https://www.youtube.com/watch?v=JkiRIH-JgYg)

## Related Links ##

[How to Upload Media to TACC](/how_to/How-to-Upload-Media-to-TACC)

[How to Create Media/Images](/how_to/How-to-Create-Media-Images)

