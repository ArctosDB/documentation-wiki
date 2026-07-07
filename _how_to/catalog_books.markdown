---
title: How To Catalog a Book 
author: Teresa J. Mayfield-Meyer, Cam Webb
date: 2024-07-12
layout: default_toc
---
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

Teresa and Cam are currently working on improving this document. Please [file an issue](https://github.com/ArctosDB/arctos/issues/new) if you have questions about cataloging books in Arctos.

# **How To Catalog a Book**

A book in Arctos should “represent an instance of a published text”. 

## Collection Type

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Do not rely on the collection name or code to indicate whether the cataloged items are books.

Some institutions prefer to record books in a separate collection. 

Examples of Book collections:
* [UAM:HerbLib](https://arctos.database.museum/collection/UAM:HerbLib)

But books may be integrated into any collection.

Examples of observations recorded in collections not specifically designated as book collections:


## Cataloged Item Type

However you choose to organize your book data, a book should be cataloged as type [MaterialEntity](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcataloged_item_type#materialentity).

## Identification

A book is identified with the taxon name [Book](https://arctos.database.museum/name/Book). In order to more fully identifiy a book, the identification should be made using the [A {string}](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula#a__string_) taxa formula. Where the taxon (A) is Book and the {string} is the book title. So the book titled **Flora of the Russian Far East: Flora Exsiccata** would be identified as

Book {Flora of the Russian Far East: Flora Exsiccata}

### Add a Citation

As a book is also a publication. Adding it as a publication in Arctos and citing the identification as a voucher of the publication will allow for recording all of the usual information associated with a publication. See [How To Create a Publication](https://handbook.arctosdb.org/how_to/How-to-Create-a-Publication.html) and [How To Create a Citation](https://handbook.arctosdb.org/how_to/How-to-Create-Citations.html) for instructions.

## Part

A book should use the part name [object](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_part_name#object). There is no need for the part name "book" as the identification provides this information. Technically, no part is required when cataloging a book unless object tracking or a part location attribute will be used to locate the book within the collection and/or the book may be loaned.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/catalog_books.markdown" target="_blank">here</a>.

 
