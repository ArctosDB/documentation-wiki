---
title: How To Edit Media
layout: default_toc
author: TBD
date: 2018-09-13
---

# How to Edit Media

Once media has been uploaded to TACC (see [How to Upload Media to TACC](../how_to/How-to-Upload-Media-to-TACC)) **and** created in Arctos (see [How to Create Media/Images](../how_to/How-to-Create-Media-Images)), you may find that you need to edit it.  The first step is to locate the media you wish to edit.

## Finding Media
There are several ways you can find media in Arctos

### Media Search
**NAVIGATION: [Search Menu → Media/Documents](http://arctos.database.museum/MediaSearch.cfm)

![](../tutorial_images/attach_upload_media.JPG)

Enter information in the fields that you wish to search. If you need information about the fields, just click on the hypertext links to discover what information the field contains and whether it uses a controlled vocabulary. It helps to be as specific as possible to narrow the search and avoid timeout issues. If you have problems with this search form, you might want to try one of the alternate methods below.

### From an Associated Specimen, Agent, Loan, Etc.
**Specimen** If the media is associated with a specimen, find the specimen using the main search page (see [How to Search for Specimens](../how_to/How-to-Search-for-Specimens))
  * Media will appear at the bottom right of the Specimen Page.
  * Select the Media Details hypertext link for the Media item you wish to edit.
  * You will be directed to the MEdia Page for that item, now select the Edit Media hypertext link.

**Agent** If the media is created by or associated with an Agent, find the Agent using the [Agent search](http://arctos.database.museum/agent.cfm)
  * Select the "Agent Activity" hypertext at the top of the agent's page.
  * Scroll down the Agent Activity page to the Media section and select the "created by agent" hyperlink.
  * You will then be provided a list of media created by this agent which you can look through to find the exact media metadata you wish to edit.

## Editing Media

The Media Edit form looks like this:
![](../tutorial_images/edit_media.JPG)

You can edit or add information for the selected media. Descriptions of the fields and what can be edited are as follows:

## Media URI

The Uniform Resource Identifier (URI) that finds the media object on the Internet (a URL is a common type of URI) **should not be changed**. URIs should be stable in order to avoid broken links.

## Preview URI

If the media was not loaded with a thumbnail, but one has been uploaded to TACC and needs to be associated with the media, enter the URI for a thumbnail preview of the Media object in this field. Otherwise, if a Preview URI already exists and is working properly, it **should not be changed**. URIs should be stable in order to avoid broken links.

## MIME Type

[MIME TYPE](https://en.wikipedia.org/wiki/Media_type), which consists of a type and subtype, (e.g., "image/jpeg") should only be changed if the original type was entered incorrectly. Values are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMIME_TYPE).

## Media Type

You can change the kind of media. This is especially useful if you have decided to put images together as a multi page document. Values are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMEDIA_TYPE). The Media Type field exists to categorize media whose MIME type is not sufficiently descriptive (e.g., an HTML image viewer application would have MIME_TYPE of `text/html` and MEDIA_TYPE of `image`).

## License

Select a value from the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMEDIA_LICENSE) that describes permissions regarding copyright, use and distribution of related media.

## Media Relationships

All Media should include at least one relationship, otherwise it will not be visible in Arctos. More than one relationship is possible.        

  * **Add Relationships** Use the "Add relationship" hypertext link to create additional relationships. Link the media to specimens, agents, projects, accessions, publications, etc. by selecting the relevant **Media Relationship** from the [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMEDIA_RELATIONSHIP). This action will bring up a search box so that you may query the specific specimen record, agent, project, accession, publication etc. in which the media will display. **For example, to link media to a Specimen Record:**

  * **Delete Relationships**
    * For the relationship you wish to delete, select the dropdown and change the relationship to "delete"
    * Select ![](../tutorial_images/save_edits_button.JPG) at the bottom of the form.
    
  * **Edit Relationships**
  For the relationship you wish to edit, first delete the relationship, then add the correct relationship using the instructions above.

## Media Labels

Media lables allow you to add searchable descriptions that help to  summarize media through the Media Labels menu (e.g., aspect, subject, made date). Values are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTMEDIA_LABEL).

**Note** that text entered into the **Description** label field will be displayed below the image/media object as a title.

All media should include at least a description. More than one label is possible.
  
  * **Add Label** Use the "Add label" hypertext link to create additional labels.

  * **Delete Label**
    * For the label you wish to delete, select the dropdown and change the relationship to "delete"
    * Select ![](../tutorial_images/save_edits_button.JPG) at the bottom of the form.
    
  * **Edit Labels**
  For the label you wish to edit, first delete the label, then add the correct label using the instructions above.
  
  **Make sure your edits are saved by selecting ![](../tutorial_images/save_edits_button.JPG) at the bottom of the form.**
  
  **Related How-Tos**
  [How to Create Media/Images](../how_to/How-to-Create-Media-Images)
  [How to Upload Media to TACC](../how_to/How-to-Upload-Media-to-TACC)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Edit-Media.markdown" target="_blank">here</a>.

