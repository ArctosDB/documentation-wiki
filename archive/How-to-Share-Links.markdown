---
title: How To Create Arctos Links
layout: default_toc
author: MSK
---

# How To Create Arctos Links

Arctos has a number of ways to share customized searches, results, and other aspects of the platform with colleagues and non-curatorial users.


## Search Shareable URLs 
To share search results with non-Arctos users, a link that embeds the search parameters can be generated with the Shareable URL tool. First conduct a search, then users can use **Tools-> Reload with Shareable URL** to generate a URL with those same search parameters.

**Example:**

## Customized search interface
To share a customized search interface, you can append the base URL (https://arctos.database.museum/) with the specific search profile name like below:

**Example:** https://arctos.database.museum/search.cfm?sp=Tissue_plus

The search profile must be saved in your profile first. (See [Customize Search & Results](https://handbook.arctosdb.org/how_to/record-search.html))

## Customized and Collection-specific search interface 
Parameterized URLs may be appended. To share a customized search interface for a specific collection, use this form for your link:

**Example:** To link to the MVZ:Arch collection with the preset of  https://arctos.database.museum/search.cfm?guid_prefix=MVZ%3AArch

**RECOMMENDED:**
If you do not want the search link to actually run once submitted to the browser, then add *autosubmit=false*
at the end: 

**Example:** https://arctos.database.museum/search.cfm?guid_prefix=MVZ%3AHerp&autosubmit=false

**Example:** https://arctos.database.museum/search.cfm?guid_prefix=MVZ%3AHerp&sp=Tissue_plus&autosubmit=false

Further, you can create useful URLs that combine a specific collection, a customized search interface, and a prefilled in variable:

**Example:** Link to search MVZ Archive's Bound Volumes (i.e., Field Notebooks)
https://arctos.database.museum/search.cfm?guid_prefix=MVZ%3AArch&id_issuedby=%3DMVZ%20Archives%20Bound%20Volume&autosubmit=false

#### File an Issue, if you'd like a hand.

-----
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Share-Links.markdown" target="_blank">here</a>.
