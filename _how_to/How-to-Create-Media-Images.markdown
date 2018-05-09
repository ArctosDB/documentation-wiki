---
title: How To Create Media
layout: default_toc
author: Carla Cicero
date: 2016-04-24
---

# How to Create Media (Images)

Digital images and associated metadata can be related to records in Arctos through the Media function. When processing large volumes of images, it may be more efficient to use the Media Bulkloader rather than manually enter each media record through the Create Media screen.

Media should be uploaded first to TACC where they are accessible on a web server (see [How to Upload Media to TACC](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Upload-Media-to-TACC))

**NAVIGATION: Search Menu → Media → "Create Media" hypertext**

![](../tutorial_images/create_media.JPG)

## Media URI

Enter the Uniform Resource Identifier (URI) that finds the media object on the Internet (a URL is a common type of URI). URIs should be stable in order to avoid broken links - If your files are at TACC, enter the TACC url here. **Or**, click the "Upload" hypertext next to the URI field to browse and upload the image file directly from your computer. Filesize should not exceed 500K.

## Preview URI

Enter the URI for a thumbnail preview of the Media object in this field. If you are in the "Upload" window, browse your computer for a thumbnail file, or leave the **Preview URI** field blank in order to auto-generate a thumbnail preview of the large format image - If your files are at TACC and processed into thumbnails there, enter the TACC url here. Preview filesize should be well under 10K and scale to ~1200x, previews larger than 48K will NOT be displayed.

## MIME Type

Specify the [MIME TYPE](https://en.wikipedia.org/wiki/Media_type), which consists of a type and subtype, (e.g., "image/jpeg"). Values are controlled by a code table.

## Media Type

Select the kind of media you are creating from the code table (e.g., audio, image, video). The Media Type field exists to categorize media whose MIME type is not sufficiently descriptive (e.g., an HTML image viewer application would have MIME_TYPE of `text/html` and MEDIA_TYPE of `image`).

## License

Select a value from the code table that describes permissions regarding copyright, use and distribution of related media. Code table includes Creative Commons licenses, institutional policies, and an Arctos Data Ownership and Use Policy.

## Media Relationships

Link the media to specimens, agents, projects, accessions, publications, etc. by selecting the relevant **Media Relationship** from the code table. This action will bring up a search box so that you may query the specific specimen record, agent, project, accession, publication etc. in which the media will display. **For example, to link media to a Specimen Record:**

* select "shows cataloged_item" from the Media Relationships code table
* In the search window that appears, enter and select the catalog number of the specimen record to be linked to the media and it will automatically populate the Media Relationships field.
* **TIP:** Add multiple relationships by clicking the blue "Add Relationship" hypertext to display additional fields so that the same image or media object can be associated with multiple records. However, create only necessary relationships (e.g., an image showing a specimen should have a relationship of "shows cataloged_item" but not "shows collecting_event" or "shows locality" or "documents accn," all of which can be derived from the relationship to the cataloged item).

Relationship values:

* created by agent - person who imaged the item
* created from collecting_event - media relating to a time and place
* derived from media - most often JPG media derived from a DNG. Related term must be the valid URI of existing media
* describes taxon_name - media which documents or describes a taxon name or concept
* documents accn - media which documents an accession (custody transfer documents)
* documents loan - media which documents a loan, such as email correspondence, loan invoices, etc.
* retake of media - typically refers to image retakes, where an image is rephotographed from the same view but at a different point in time. Often entails comparison of modern versus historic images to document landscape changes over time.
* shows agent - agent who is the subject of media
* shows cataloged_item - media relating to specimens (often images of the specimen in life or death)
* shows locality - media which may only be related to a place (no temporal component)
* shows publication - generally a PDF of the publication

## Media Labels

Summarize media through the Media Labels menu (e.g., aspect, subject, made date). Values are controlled by a code table. Note that text entered into the **Description** label field will be displayed below the image/media object as a title.

Click the "Create Media" button. The image will now be available in the record(s) specified in **Media Relationships** fields (you may have to refresh the relevant page/wait a few minutes before the media displays).

![](../tutorial_images/media_examples.JPG)
