---
title: Delete Media
authors: Emily Braker
date_updated: 2024-04-24
redirect_from:
  - /how_to/How-To-Delete-Media/
---

[Media Documentation](https://handbook.arctosdb.org/documentation/media.html)

Media attached to catalog records, agents, events, or transactions can be deleted through Edit Media and removing files from TACC.

**Navigation: Media object -> Media Details -> Edit Media**

* Navigate to the media object that you would like to delete.
* Change all existing relationships and labels to “delete” (“marked for deletion” will appear in the value field). A media object cannot be deleted if it has any values recorded in these fields.
* Save edits. Upon saving, the “delete media button” will appear.
* Click “delete media.”

**Note:** At this point, the media will be deleted from Arctos. However, the file remains stored at TACC. Technically, someone on the internet is still able to access deleted media should they have the MEDIA_URI. 

## Deleting Media from TACC

In order to fully delete a media file from TACC:
1.	Navigate to the TACC directory in which the media is stored (see https://handbook.arctosdb.org/how_to/How-to-Upload-Media-to-TACC.html). You must have user access to the relevant folder in order to delete media (in general, users have sole edit access to the subfolders they create within an institution’s directory).

    **Note:** If you do not have access to a TACC folder that stores media marked for deletion (perhaps the files wer created by a former employee), a request can be submitted by an authorized representative of your institution to the Arctos Working Group to permit the DBA to permanently remove the file(s).

2.	Delete the media from the directory.

## Bulk Deleting Media
To bulk delete media, please submit a request to the DBA that includes a list of the relevant media object IDs formatted as a csv or txt file. Media IDs can be found in the URL of the media object (https://arctos.database.museum/media/#####).
