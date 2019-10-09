---
title: How To Create and Manage Geology Terms
authors: Teresa Mayfield-Meyer
date created: 2019-10-09
layout: default_toc
---
 
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG) 

# How To Create and Manage Geology Terms

This guide provides step-by-step instructions for creating and managing geology terms and relationships in the [Geology Attributes Code Table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE). In order to access the functions described in this How To, an Arctos Operator must have [MANAGE_CODETABLES](http://arctos.database.museum/Admin/user_roles.cfm) access. If you need a new term added to the code table and you do not have appropriate access, please file a new [Authority Request](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=&template=authority-request.md&title=) in [Arctos GitHub Issues](https://github.com/ArctosDB/arctos/issues)

## Create a New Term

To create a new geology term, from the Arctos main menu select Manage Data > Metadata > Code Tables 

  <img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Screenshot%202019-10-09%2010.22.32.png" width="400" align="middle">

Scroll down the list of Code Tables to CTGEOLOGY_ATTRIBUTE and select that table by clicking the link (or go directly to [CTGEOLOGY_ATTRIBUTE](http://arctos.database.museum/Admin/CodeTableEditor.cfm?action=editGeologyTree))

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Screenshot%202019-10-09%2010.23.01.png" width="400" align="middle">

You will see the data entry form for a new geology attribute

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Screenshot%202019-10-09%2010.23.43.png" width="400" align="middle"> 

In order to create a new term, all fields must be completed

### Attribute

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Attribute.jpg" width="300">

The Attribute term is a category to which the term you are adding belongs. If you begin typing in this field, a list of attributes that already exist in the table and closely match what you are typing will appear.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **CAUTION**  

  Take care when entering an attribute that you don't misspell an attribute that already exists or create an attribute that is a synonym for existing attributes. 

It may help to peruse the code table to see if the attribute you want to use already exists. Think cautiously and critically about new attributes being added to ensure they will be useful to the Arctos Community. Any attributes that will only serve a single collection may belong elsewhere. Please consult with Arctos Community by creating a new [GitHub Issue](https://github.com/ArctosDB/arctos/issues) is you are unsure about adding a new attribute.

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20FAQ.jpg" width="50">**What do I enter in the Attribute field when creating a term for search/code table organization purposes?**

Attribute and Value are always required and value is used in building hierarchies for searching, so " " (a blank space) should be entered in the attribute field for values that are not valid for data entry. (See [Attribute valid for data entry?](https://handbook.arctosdb.org/how_to/How-to-Create-and-Manage-Geology-Terms.html#attribute-valid-for-data-entry?)

### Value

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Value.jpg" width="300">

The Value is the term you are adding. This is what will be visible in searches and on specimen pages. For some values, the term includes its related attribute. For example, when entering a value for attribute "formation" you would enter "Value Formation". A review of existing code table terms is a good idea to ensure that the value entered will be consistent with other code table values with the same attribute.

### Attribute valid for data entry?

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/valid%20data%20entry.jpg" width="300">

This field allows you to designate some terms in the code table that will only be used for organization of the code table hierarchy to facilitate searching. For example, "Lithostratigraphy" might be a useful term as the start of a set of hierarchies, but it's not something that can have a meaning in Geology Attributes so should not be "valid." Select "no" for "Attribute valid for Data Entry" for terms of that nature. Note that Attribute and Value are always required and value is used in building hierarchies for searching, so " " (a blank space) should be entered in the attribute field for values that are not valid for data entry. 

### Description

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Description.jpg" width="300">

The description should be a detailed definition of the term or a link to a website with the definition. It is important to properly document terms in the code table so that users can select appropriate terms.

### Insert Term

<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/geology_images/Insert%20Term.jpg" width="300">

When you are satisfied with your entries in all fields, select "Insert Term" to create the new code table term.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **CAUTION**  
Your new term will not be included in any of the hierarchies that exist in the code table. If you want a term to be searchable using a hierarchy, you must create the appropriate relationship.

## Create Term Relationships
