---
title: How To Upload Media to TACC
layout: default_toc
author: Carla Cicero, Teresa Mayfield-Meyer
date: 2018-05-04
---

# How To Upload Media to TACC

The [Texas Advanced Computing Center (TACC)](https://www.tacc.utexas.edu/) offers media hosting for Arctos users through an Arctos Project allocation. If you are using TACC to store media, the files must be uploaded to TACC and accessible on the web server before [creating media in Arctos](/how_to/How-to-Create-Media-Images.html). There are three ways to upload media to TACC: Single file uploads, small batch uploads, and large batch uploads. This document covers all three.

## Single File Uploads
If you have a single media file to upload, you can upload it through the **attach/upload** media link found on any specimen or agent page which will automatically create an association between the media and the specimen or agent you are viewing. You can also upload a single file from the main Arctos menu through [Search>Media/Documents>](http://arctos.database.museum/MediaSearch.cfm) and selecting the **Attach/Upload Media** link at the top of the search form. **Note that when using this method, no relationships are created to the media, so the only way you will be able to find it is with the information you provide during the upload.** You will need to [edit the media](/how_to/How-to-Edit-Media) to add relationships after the upload is complete. Any media can have additional relationships added after initial upload, so if your media represents a collecting event, project, or loan, you may want to upload it to the agent who created it, then edit it to add those relationships.

## Small Batch Uploads
If you have a small batch of images (less than 50 photos) you can use the [Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm) tool in Arctos, which you can access from the Arctos main menu at [Enter Data>Batch Tools>Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm). Done properly, this tool can make uploading a small number of images fairly easy, however some preparation before upload is required.

### Media File Preparation
  * Only .jpg, .jpeg, and .png (case-insensitive) files will be accepted. If you would like to see this tool expanded for other file types, please [file an Issue](/blob/gh-pages/_how_to/How-to-Use-Issues-in-Arctos/how-to-file-an-issue) with expansion requests.
  * Ensure that your file names either contain enough information so that you will be able to add relationships after they are uploaded or pre-create your bulkload media file with the filenames.
  * Files which start with _ (underbar) or . (dot) will be ignored so be sure none of your file names begin with these characters.
  * File names containing characters other than A-Z, a-z, and 0-9 will be changed. If you plan on using information in the file names to ensure your media bulkload makes appropriate associations make sure you aren't relying on any characters other than these.
  * [ZIP](https://support.microsoft.com/en-us/help/14200/windows-compress-uncompress-zip-files) up the files. The ZIP must contain only image files, do not ZIP a folder or the batch will be ignored.
  * Make sure you know where the ZIP file is stored so that you can find it when uploading to the Upload Images tool.

### Upload Images
Once your ZIP file is prepared, go to the [Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm) tool in Arctos.

  * Review the username and email address in the form to ensure they are correct.
  * Either copy the reference name that is auto-generated or create one that you will remember. You will need the job name if any problems occur in the upload process.
  * Use the **Browse** button to locate the ZIP file you created and select **Upload this file** to get the process started.

The upload process usually completes within hours, but backlog is possible.  You will receive an email containing a link to a file when the process is done. If you do not receive an email within 24 hours, use the  [Report a bug or request support](http://arctos.database.museum/contact.cfm?ref=/tools/uploadMedia.cfm) link at the bottom of the [Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm) page to inquire about your upload. Be sure to include your user name, email address, and the job name in your inquiry.

#### Upload Images Bulkloader Video Tutorial ####

[![YouTube: How to Upload Images in Small Batches in Arctos](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/How_to_Upload_Images_in_Small_Batches_in_Arctos_thumb.jpg)](https://www.youtube.com/watch?v=8TInZ6EWRWI&t=3s)

### Modify Media Metadata Bulkload File

The file that you receive once your image upload is complete contains much of the information required to bulkload media.  Remember that although your media are now stored at TACC, they are not associated with any data in Arctos. The [Bulkload Media Metadata](http://arctos.database.museum/tools/BulkloadMedia.cfm) tool will allow you to complete this process. See [Bulkload Media Metadata](/how_to/How-to-Bulkload-Media-Metadata) for instructions on creating the bulkload file.

This file will be deleted 3 days after the message is sent, but may be regenerated from the "existing jobs" link on the [Upload Images](http://arctos.database.museum/tools/uploadMedia.cfm) tool page. 
  
  
#### Media Metadata Bulkload Video Tutorial ####

[![YouTube: How to Bulkload Media Metadata in Arctos](https://i9.ytimg.com/vi/JkiRIH-JgYg/mq2.jpg?sqp=CPmjlvIF&rs=AOn4CLDTJud0wErKcEU9x0llc0iVl5EAog)](https://www.youtube.com/watch?v=JkiRIH-JgYg)

## Large Batch Uploads
If you want to upload a lot of large media files (e.g., 100s or 1000s of images, audio, video), and/or if you have specific processing needs, you should first contact [Chris Jordan](https://www.tacc.utexas.edu/about/directory/chris-jordan) and an Arctos administrator to discuss space allocations. However, most users can follow these instructions:

* Create a TACC User account through the [TACC User Portal](http://portal.tacc.utexas.edu). Direct link: [https://portal.tacc.utexas.edu/account-request](https://portal.tacc.utexas.edu/account-request)
* Once you have created a new account, it may take 24 hours or so for the account to become active. You should receive an email when your account is approved and ready
* Email your account username to Carla Cicero ([ccicero@berkeley.edu](mailto:ccicero@berkeley.edu)), TACC Project Manager for Arctos, so that she can add your user account to the Arctos Project allocation. NOTE: MVZ Users are added to the MVZ Media & Archives Project.
* You will need an SFTP (Secure File Transfer Protocol) program in order to access the Corral system on TACC where Arctos media are stored - see the [TACC Corral User Guide](https://portal.tacc.utexas.edu/user-guides/corral)
 * On the left you’ll see [Transferring Files Using Cyberduck](https://portal.tacc.utexas.edu/user-guides/corral#cyberduck) - download Cyberduck or use another SFTP program
* Set up a transfer protocol:
    * Open Connection
    * Select “SFTP” from dropdown
    * Server Host Name:  data.tacc.utexas.edu
    * Username: enter your TACC portal username
    * Password: enter your TACC portal account password
    * Port number is 22

![TACC User Portal Connection](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/TACC_user_portal_connection.png)

* Once you connect, you will be prompted to enter a TACC Token Code. In order to do this, you will need to install the TACC Token app for multi-factor authentication. Read the [TACC instructions](https://portal.tacc.utexas.edu/tutorials/multifactor-authentication) on this process. After you are set up for authentication, enter the TACC Token at the prompt.
* If you have successfully entered the TACC Token, you will be taken to your directory. Go up to the root directory and then select corral-tacc ---> projects ---> arctos
* Each institution should have a directory for their media, e.g, /corral-tacc/projects/arctos/mvz
* Within that directory, you can organize your media files however you want
* TACC must ingest those files in order for them to appear on the web server - files are also processed during this stage (e.g., from dng or tiff to jpeg, wav to mp3, etc.)
    * File extensions are case-sensitive during processing. To make processing faster (and easier for TACC staff), the letter case for all file extensions should be consistent (e.g., all files that use jpeg extensions are spelled consistently using lowercase .jpg, rather than a mix of .jpg and .JPG).
 * Contact [Chris Jordan](https://www.tacc.utexas.edu/about/directory/chris-jordan) when your file are ready for processing and ingestion

If you have uploaded images, a directory of thumbnail images will also be created. You need to use those thumbnail URIs in your bulkload media template (in the PREVIEW_URI column, http://arctos.database.museum/tools/BulkloadMedia.cfm) when you bulkload the image URIs.

### Modify Media Metadata Bulkload File

The file that you receive once your image upload is complete contains much of the information required to bulkload media.  Remember that although your media are now stored at TACC, they are not associated with any data in Arctos. The [Bulkload Media Metadata](http://arctos.database.museum/tools/BulkloadMedia.cfm) tool will allow you to complete this process. See [Bulkload Media Metadata](/how_to/How-to-Bulkload-Media-Metadata) for instructions on creating the bulkload file..

## Related Links
### Documentaion
[Media](documentation-wiki/documentation/media)

### Other How-Tos
[How to Create Media](/how_to/How-to-Create-Media-Images)

[How to Edit Media](/how_to/How-to-Edit-Media)

## Tools
* [namechanger](https://mrrsoftware.com/namechanger/) is useful for renaming files on Mac.
[How to Bulkload Media Metadata](/how_to/How-to-Bulkload-Media-Metadata)


