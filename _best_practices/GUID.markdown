---
title: Best Practice - Creating a Meaningful GUID Prefix 
authors: Teresa Mayfield-Meyer
date created: 2021-07-13
layout: default_toc
---

# Best Practice - Creating a Meaningful GUID Prefix 

What is a GUID Prefix? Before you make any decisions about one, you should know what it is. Start by reading the [GUID Prefix Documentation](https://handbook.arctosdb.org/documentation/catalog.html#guid-prefix).

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**  

In conjunction with catalog number the GUID Prefix forms a unique identifier within Arctos, and in conjunction with Arctos’ URI (https://arctos.database.museum/guid/) forms a Globally Unique Identifier (GUID) for the catalog record. For example: The Museum of Vertebrate Zoology's catalog record 134762 has a GUID Prefix of MVZ:Bird which forms the GUID https://arctos.database.museum/guid/MVZ:Bird:134762.

> The guid prefix does not need to be the full name of a taxonomic group, plural or not. But it is important to be consistent within Arctos, and to be simple. The main thing about the guid prefix is that it should be something concise and easy to remember so that it will not be too difficult for researchers - you want to make it as easy as possible for anyone to cite these guids or urls for specimen citation. Long, difficult to remember complex acronyms are going to result in poorly cited or incorrect specimen citations and confusion.

 * **Mariel Campbell, Collection Manager of Genomic Resources at Museum of Soputhwestern Biology**

## General Recommendations for GUID Prefix 

We recommend choosing a GUID_PREFIX that will survive being transferred through various mechanisms, displayed in web pages that might use “fancy” formatting, or typed by users with many kinds of input devices in many languages. This means using only upper and lower-case ASCII letters (A-Z,a-z), other than the required colon. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**  

Think of the GUID Prefix as something you will need to live with forever. Make sure that the GUID Prefix you choose is as simple as possible, but reflects the nature of the cataloged items. Remember, the only real limitation on GUID Prefix is that it be no longer than 20 characters and include a colon that is neither the first nor the last character. It will be most useful if the remaining characters consist of upper and/or lower-case ASCII letters (A-Z,a-z).

### Before the Colon - Institution

In the "DWC Triple," the characters before the colon are also the institution acronym. This is not a requirement in Arctos; GUID Prefix has no dependencies. If synchronizing the GUID Prefix (which cannot be changed) and the institution acronym (which can be changed) in this way is deemed useful for some purpose, then such usage is encouraged. If this limitation would somehow be inconvenient, then you may freely ignore institution acronym when considering GUID Prefix.



### After the Colon - Collection 


In the "DWC Triple," the characters after the colon are also the collection code. This is not a requirement in Arctos; GUID Prefix has no dependencies. If synchronizing the GUID Prefix (which cannot be changed) and the collection code (which can be changed) in this way is deemed useful for some purpose, then such usage is encouraged. If this limitation would somehow be inconvenient, then you may freely ignore collection code when considering GUID Prefix.


## Summary

 - Arctos GUIDs are expected to be permanent and stable, so choose carefully.
 - The GUID Prefix may, but is not required to, reflect Institution Acronym and/or Collection Code.
 - The GUID Prefix must be no longer than 20 characters and include a colon that is neither the first nor the last character.
 - The GUID Prefix should consist of upper and/or lower-case ASCII letters (A-Z,a-z) other than the requisite colon.
 - A review of [GUID Prefixes currently in use](https://arctos.database.museum/home.cfm) may be helpful!
  - The [Global Biodiversity Information Facility Registry of Scientific Collections](https://www.gbif.org/grscicoll) and the [Index Herbariorum](http://sweetgum.nybg.org/science/ih/herbarium-details/?irn=123984) may be useful in locating legacy identifiers and information. You are not required to maintain or follow such data.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_best_practices/GUID.markdown" target="_blank">here</a>.
