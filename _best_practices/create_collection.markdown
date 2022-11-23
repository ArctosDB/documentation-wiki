---
title: Best Practice - Creating a Collection in Arctos 
authors: Teresa Mayfield-Meyer
date created: 2021-09-21
layout: default_toc
---

# Best Practice - Creating a Collection in Arctos 

Creating a collection in Arctos requires thoughtful consideration because it provides a portal for immediate publication of collection records to the Internet. In order to create a collection, the following information is required.

## GUID Prefix

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution** 

Database Administrators will actively oppose any efforts to change this. For information on why change is discouraged, please see <a href="https://en.wikipedia.org/wiki/Replication_crisis" target="-blank">Replication Crisis</a>

This is one of the most important decisions in creating a new collection. In conjunction with catalog number the GUID Prefix forms a unique identifier within Arctos, and in conjunction with Arctos’ URI (https://arctos.database.museum/guid/) forms a Globally Unique Identifier (GUID) for the catalog record. For example: The Museum of Vertebrate Zoology's bird catalog record 134762 has a GUID Prefix of MVZ:Bird which forms the GUID https://arctos.database.museum/guid/MVZ:Bird:134762.

<a href="https://handbook.arctosdb.org/best_practices/GUID.html" target="_blank">Find out how to create a meaningful GUID Prefix</a>

## Catalog Number Format

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution** 

Catalog Number Format can be changed without Database Administrator assistance, but it is not recommended.  

Catalog number format is selected from a <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcatalog_number_format" target="_blank">code table</a>. We generally encourage the use of the integer format for catalog numbers. This makes sorting, review for number gaps, and determining the last catalog number used an easy task. The other options do not allow for predictive, series- or range-based tools.

## Institution Name

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution** 

Institution Name cannot be changed without Database Administrator assistance

The formal name of the institution that manages this collection. This will appear in the institution column of the <a href="https://arctos.database.museum/home.cfm" target="_blank">Arctos portal page</a>.

## Institution Acronym 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution** 

Institution Acronym cannot be changed without Database Administrator assistance

The <a href="https://handbook.arctosdb.org/documentation/catalog.html#institution-acronym" class="external">Institution Acronym</a> should be applied to all collections held by an institution. It may be identical to the first part of the GUID Prefix, but it does not have to be. The institution acronym is used within Arctos to allow institutions to track the collections they are managing.

## Collection Type

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution** 

Collection Type cannot be changed without Database Administrator assistance

The <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde" class="external">Collection Type</a>" helps to limit the terms available for use in certain code tables, including <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_part_name" target="_blank">part names</a> and <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type" target="_blank">collection object attributes</a>. Selecting a collection type for some collections will be easy, but for others a bit of research might be necessary. Filtering the part name and collection object attribute tables by the various collection types can help clarify which type is best for a collection.

## Collection Contents

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution** 

Collection Contents cannot be changed without Database Administrator assistance

This is a very brief description of what comprises the collection.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

Take a look at the <a href="https://arctos.database.museum/home.cfm" target="_blank">Arctos portal page</a> for exisitng collections that are similar and use the same terms.

## Loan Policy URL

All collections are required to supply a URL for their collection policy.

## Collection Terms

<a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_terms" target="_blank">Collection Terms</a> are a well-considered code of conduct that anyone who uses data downloaded from a collection is expected to uphold. These terms should model a set of ethical behaviors and help us to build a vibrant community intended to support efforts to make collection data as complete, discoverable, and accessible as possible. Collections wishing to provide their own terms must also provide a URL for the document.

<a href="https://handbook.arctosdb.org/how_to/How-To-Apply-Licensing-and-Terms.html" target="_blank">Find out about Collection Terms and Licenses</a>

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution** 

By signing the Arctos MOU, collections agree that they have read the Arctos policy and accept it for their collection if they do not provide an alternate.

## Cataloged Item Type

<a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcataloged_item_type" target="_blank">Catalog Item Type</a> provides a default value for the <a href="http://rs.tdwg.org/dwc/terms/basisOfRecord" target="_blank">basis of record</a> term in a Darwin Core archive. Unless a different term is chosen during data entry, the value selected here will be used.

## Collection Manager

The Arctos username of the person who will have intitial management access to the collection. Responsibilities include managing collection metadata, inviting users to become operators, granting and revoking rights from users and operators, DELETEing cataloged items and identifications, marking records in the bulkloader to load, and creating DOIs.

## Collection Mentor

The Arctos username of the person who will mentor the Collection Manager through collections set-up and data migration. This person will have the same access and responsibilities as the Collection Manager.

## Summary

 - Arctos GUIDs are expected to be permanent, so choose GUID Prefix and Catalog Number Format carefully.
 - Integer catalog numbers are the most flexible and easiest to manage.
 - Collection Type should also be carefully considered. Change is not impossible, but might be difficult.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_best_practices/create_collection.markdown" target="_blank">here</a>.
