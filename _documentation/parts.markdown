---
title: Parts
author: DLM
date: 2025-08-11
layout: default_toc
---

# Parts 

Parts are physical entities, in contrast to [Cataloged Items](/documentation/catalog) (an abstract entity) or binary objects
(such as Images). One or many parts may comprise a Cataloged Item, and parts may be defined as the minimal units for which [storage location](/documentation/container), usage, and condition are tracked. (*"Parts are things to which you can stick barcodes."*) Parts are generally the equivalent of [dwc:MaterialSample](https://dwc.tdwg.org/terms/#materialsample)

## specimen_part

Specimen Part is the primary parts table.

### collection_object_id

Primary key


### derived_from_cat_item

Foreign key to catalog_item; internal record identifier.

### part_name

Name of the part, references [ctspecimen_part_name](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_part_name). Note that "tradition" requires Arctos to carry as part names many non-part values (such as taxa of parasites); usage of these part names is not recommended, and the material wearing them should receive extra scrutiny.

### sampled_from_obj_id

References ``specimen_part.collection_object_id``; a not-null value here is indicative of a chain of custody, and may have condition or fit-for-use implications. Name hints at a more-focused background, but this concept is useful for any action which separates one part into two.

### disposition

Foreign key [ctdisposition](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctdisposition)

### part_count

Number of items in this part. (Best Practice: Parts should be individually tracked and monitored, this value should always be 1.)


### condition

Free-text description of the part. Note that there are many part attributes that may confirm or conflict with the information in condition. These include, but are not limited to:

1. [condition report](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctpart_attribute_type#condition_report) - this concept can carry metadate, and we recommend its usage.
2. [preservation](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctpart_attribute_type#preservation)
3. [preservation need](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctpart_attribute_type#preservation_need)
4. [remaining volume](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctpart_attribute_type#remaining_volume)
5. [storage temperature](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctpart_attribute_type#storage_temperature)
6. [tissue quality](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctpart_attribute_type#tissue_quality)


### part_remark

Free-text remarkable (non-condition) notes.

### created_agent_id

Agent initially creating the record, usually gathered from environment.

### created_date

Date on which the record was created, usually gathered from environment.

## coll_obj_cont_hist

This table is automatically maintained, and ensures that parts are simultaneously containers of type [collection object](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcontainer_type#collection_object)

### collection_object_id

Foreign key --> specimen_part


### container_id

Foreign key ---> container

## loan_item

Table Loan Item, fully described in Transactions, links parts to loans.


### part_id

Foreign key --> specimen_part

## specimen_part_attribute

Table Specimen Part Atribute applies Part Attributes to Parts. This mechanism provides an essentially infinite, very fine-grained way of refining the concept expressed by a part name. A part may have any number of Attributes, each of which should carry metadata (who, when, how).

### part_attribute_id

Primary key

### collection_object_id

Foreign key --> specimen_part


### attribute_type

Foreign key --> [ctpart_attribute_type object](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcontainer_type#ctpart_attribute_type)

### attribute_value

Some are type or value controlled, others are free text; see [ctpart_attribute_type object](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcontainer_type#ctpart_attribute_type) for details.

### attribute_units

See [ctpart_attribute_type object](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcontainer_type#ctpart_attribute_type) for details.

### determined_by_agent_id

Agent responsible for the assertion; foreign key --> Agent

### attribute_remark

Remarkable things; free text.


### determined_date

Date/time of determination; ISO8601

### determination_method

Evidence or technique used.

## Preservation

Special Note: Part attribute [preservation](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctpart_preservation) drives the "tissueness" flag.


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/parts.markdown).
