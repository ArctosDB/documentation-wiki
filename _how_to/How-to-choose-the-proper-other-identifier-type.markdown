---
title: How To Build Other Identifiers
author: unknown, Teresa J. Mayfield-Meyer
date: 2024-06-05
layout: default_toc
---

# How To Build Other Identifiers

Other Identifiers in Arctos are composed of:

 - issued by (an Arctos Agent)
 - value (free text)
 - [relationship](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references)
 - [type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_OTHER_ID_TYPE)
 - remark (free text) 

It is important to be consistent when describing other identifiers if they are going to be useful. This document provides methods for making better other identifiers.

## How to use other identifiers to create resolvable relationships between Arctos records

There are many reasons that one Arctos record should be linked to another, these can be found in the [relationships code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references). Creating links between Arctos records using these relationships is easy, all you need to know is the triplet for the record you want to relate the record you are editing or entering to and Arctos does the rest!

### Example

I am cataloging a parasite and I know the host is a record in the MSB Mammal collection with catalog number 11405. To create a link from my parasite record to the MSB mammal record, I would enter the other identifier as follows:

Other ID field | Value entered 
 -- | -- 
issued by | 
value | MSB:Mamm:11405 OR https://arctos.database.museum/guid/MSB:Mamm:11405
[relationship](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references) | [parasite of](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references#parasite_of) 
[type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_OTHER_ID_TYPE) | [Arctos record GUID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#arctos_record_guid) 
remark | say whatever you need to say 

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

The most important selection for making links between Arctos records is

type = [Arctos record GUID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#arctos_record_guid)

This lets Arctos do much of the work for you and provides a check to ensure that links will be operational. All values that are associated with a valid Arctos collection either through a record triplet or a record url will have the issued by automatically insterted by Arctos. Also note that if only the record triplet is entered in the value, Arctos will append the base url (https://arctosdatabase.museum/guid/) automatically.

If you enter a value that does not match an existing Arctos collection's prefix, you will recieve an error as Arctos lets you know that all other identifiers of type [Arctos record GUID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#arctos_record_guid) must be included in an existing Arctos collection.

If you attempt to enter a valid Arctos record triplet or url using a type other than Arctos record GUID, you will receive an error as Arctos lets you know that links between Arctos records must be type = [Arctos record GUID](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#arctos_record_guid).

## How to use other identifiers to create resolvable relationships between Arctos records and external resources

There are many reasons that an Arctos record should be linked to an external resource, these can be found in the [relationships code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references). Creating links between Arctos records and external resources using these relationships is easy, all you need to know is the url for the external resource!

### Example

I am cataloging a mammal and I know that it has a related accession in GenBank. To create a link from my mammal record to the GenBank accession, I would enter the other identifier as follows:

Other ID field | Value entered 
 -- | -- 
issued by | [NCBI Nucleotide (GenBank)](https://arctos.database.museum/agent/21349032)
value | http://www.ncbi.nlm.nih.gov/nuccore/AF520643
[relationship](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references) | [same individual as](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references#same_individual_as) 
[type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_OTHER_ID_TYPE) | [identifier](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type#identifier) 
remark | say whatever you need to say 

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

The most important selection for making links between Arctos records and external resources is

value = **the entire url of the related resource**

Selecting an inappropriate issued by or type (other than Arctos record GUID, which will cause an error) does not functionally change the fact that the record will now include a link to an external resource (as long as you have entered a working url!).

## How to use other identifiers that do not create relationships to other resources

For identifiers which are not, and are unlikely to become, resolvable, the choice of other ID type becomes somewhat more arbitrary, but some important considerations remain. For example, "field number" is not a number assigned to an individual specimen (as is traditional terminology for many mammalogists), but rather an identifier assigned to a collecting event (as is traditional in ichthyology); "collector number" is (usually) the appropriate choice for a "mammal field number." Please consult the documentation in the other ID code table, and [file an Issue](https://github.com/ArctosDB/arctos/issues/new) if any questions remain.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-choose-the-proper-other-identifier-type.markdown" target="_blank">here</a>.
