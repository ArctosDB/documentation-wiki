---
title: How To Upload Media to TACC
layout: default_toc
date: 2018-05-04
---

The Texas Advanced Computing Center (TACC) offers media hosting for Arctos users through an Arctos Project allocation. If you are using TACC to store media, the files must be uploaded to TACC and accessible on the web server before creating media in Arctos
 * See [How to Create Media in Arctos](/how_to/How-to-Create-Media-Images.html)

If you want to upload a lot of large media files (e.g., 100s or 1000s of images, audio, video), and/or if you have specific processing needs, you should first contact [Chris Jordan](https://www.tacc.utexas.edu/about/directory/chris-jordan) and an Arctos administrator to discuss space allocations. However, most users can follow these instructions:

* Create a TACC User account through the [TACC User Portal](http://portal.tacc.utexas.edu)
 * Direct link: [https://portal.tacc.utexas.edu/account-request](https://portal.tacc.utexas.edu/account-request)

* Once you have created a new account, it may take 24 hours or so for the account to become active
 * You should receive an email when your account is approved and ready

* Email your account username to Carla Cicero ([ccicero@berkeley.edu](mailto:ccicero@berkeley.edu)) (TACC Project Manager for Arctos) so that she can add your user account to the Arctos Project allocation
 * NOTE: MVZ Users are added to the MVZ Media & Archives Project

* You will need an SFTP (Secure File Transfer Protocol) program in order to access the Corral system on TACC where Arctos media are stored - see the [TACC Corral User Guide](https://portal.tacc.utexas.edu/user-guides/corral)
 * On the left you’ll see [Transferring Files Using Cyberduck](https://portal.tacc.utexas.edu/user-guides/corral#cyberduck) - download Cyberduck or use another SFTP program

* Set up a transfer protocol:
 * Open Connection
 * Select “SFTP” from dropdown
 * Server Host Name:  data.tacc.utexas.edu
 * Username: enter your TACC portal username
 * Password: enter your TACC portal account password
 * Port number is 22

![TACC Corral Login Screen](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/master/tutorial_images/TACC_corral_login_screenshot.jpg)


* Once you are connected, go up to the root directory and then select corral-tacc ---> tacc ---> arctos

* Each institution should have a directory for their media, e.g, /corral-tacc/tacc/arctos/mvz
 * Within that directory, you can organize your media files however you want

* TACC must ingest those files in order for them to appear on the web server: [http://web.corral.tacc.utexas.edu](http://web.corral.tacc.utexas.edu) - files are also processed during this stage (e.g., from dng or tiff to jpeg, wav to mp3, etc.)
 * Contact [Chris Jordan](https://www.tacc.utexas.edu/about/directory/chris-jordan) when your file are ready for processing and ingestion

If you have uploaded images, a directory of thumbnail images will also be created. You need to use those thumbnail URIs in your bulkload media template (in the PREVIEW_URI column, http://arctos.database.museum/tools/BulkloadMedia.cfm) when you bulkload the image URIs.

## Tools

* [namechanger](https://mrrsoftware.com/namechanger/) is useful for renaming files on Mac.

## Media Bulkloader

After uploading, the directory can be used to build a media bulkloader file which creates media objects using the uploaded files in Arctos.


We'll use this directory to demonstrate.

https://web.corral.tacc.utexas.edu/UAF/uam_ento/2018_05_22/

Thumbnails are:

https://web.corral.tacc.utexas.edu/UAF/uam_ento/2018_05_22/tb/

and are prefixed with "tn_"

Open the bulkloader

<img width="363" alt="screen shot 2018-05-23 at 1 06 39 pm" src="https://user-images.githubusercontent.com/5720791/40448362-2ae1fc92-5e8a-11e8-83d2-b6bdd84acfef.png">

and paste the directory URL in to the "Directory URL" box and click the accompanying button.

The pattern of these filenames is {barcode}{sometimes underbar}{dot}{jpg}

ignore folders with "Filter for extension (eg, ".jpg")"

regexfind=_.*$ captures the information before the first underbar for variable "[filename]." (This common situation is documented in the inline documentation at the top of the page.)

Preview Directory URL is the folder containing the thumbnails

Preview prefix (eg, "tn_") - enter "tn_" to prepend to the image filenames

Preview extension (eg, ".jpg") - enter ".jpg" for jpg previews

Select a license, media type, and mime type.

The bulkloader will accept a part's barcode as a proxy to cataloged items. We've extracted that from the filename with the regex above, so all that's necessary is to include the variable in relationship term.

<img width="759" alt="screen shot 2018-05-23 at 1 12 21 pm" src="https://user-images.githubusercontent.com/5720791/40448644-fc399ca0-5e8a-11e8-9cda-a32bda279b55.png">

Scroll down, click "build/rebuild," confirm that everything worked as expected, download CSV, fill in any remaining blanks (or use the tool to do so before downloading), load to the media bulkloader, wait for email.

