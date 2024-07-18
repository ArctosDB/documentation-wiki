---
title: Collection
layout: default_toc
author: DLM
date: 2024-07-18
---

# Collection

An Arctos collection is a group of co-managed records. Most collections are "traditional," (eg MVZ Mammal Collection, [https://arctos.database.museum/collection/MVZ:Mamm](https://arctos.database.museum/collection/MVZ:Mamm)) but there are few  technical constraints.

## collection_id

Internal primary key (integer), not to be confused with collectionID generated from guid_prefix.

## guid_prefix

The "functional primary key" which most usefully defines a collection in Arctos. Used as part of the catalog record identifier which each record in Arctos recieves. Forms collectionID when prefixed by ``https://arctos.database.museum/collection/``. Note that this is a concept with no dependencies; it is completely unrelated to ``institution_acronym``, ``collection_cde``, and all other fields in all other tables.

## citation

Recommended text for citing the collection. Cataloged items within a collection should be cited by GUID.

## catalog_number_format

Foreign key to [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcatalog_number_format](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcatalog_number_format)

## genbank_collection

Collection identifier as registered with NCBI. Used to automatcally find records in GenBank.

## loan_policy_url

A loan policy is required by Arctos, but the contents of the policy are left to the collection. 

## web_link and web_link_text

Used to make links to the collection's web page from the Arctos UI.

## collection

Free text short description

## institution_acronym

Legacy column, used to group collections in UI and serves as a VPD partition for managing containers


## institution

Free-text

## collection_cde

Legacy column, can be useful for selecting 'suggested' authority items.

## internal_license_id

Foreign key to [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctdata_license](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctdata_license), licenses data downloaded from Arctos.


## external_license_id

Foreign key to [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctdata_license](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctdata_license), licenses data downloaded from outside Arctos (eg, DWC Portals). Data from these sources are generally incomplete, are often outdated, and should be used with caution.


## collection_terms_id

Foreign key to [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_terms](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_terms), a terms document is intended to suppliement licenses.

* Discussion: [https://github.com/ArctosDB/arctos/issues/7861](https://github.com/ArctosDB/arctos/issues/7861)


## default_cat_item_type

Allows a collection to specify a default value for [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcataloged_item_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcataloged_item_type) in records.


## preferred_identifiers 

Prioritize certain identifiers in UI using [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type).

## preferred_identifier_issuers 

Prioritize certain identifiers in UI using Issued By Agent.

## collection_agent_id

Foreign key to Agents. All collections have a coresponding Agent, which provides data structure for additional information.

# collection_attributes

Collection_Attributes provides a very flexible structure for storing collection-related data, such as that used to build .eml files for sharing with DWC portals.


## attribute_type

Foreign key to [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_attribute_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_attribute_type)

## attribute_value

## attribute_remark

## created_date and created_agent_id

Environment-derived metadata.

# collection_templates

Collection_Templates provides a mechanism to store information for one-click filling certain forms, such as loans and shipments.

## template_type

Controls access

## template_name 

User-supplied identifier

## template_data

Data (generally serialized JSON)


## created_date and created_agent_id

Environment-derived metadata.



# collection_contacts

Collection_Contacts links agents to collections in roles. These are used to direct error logs, messages, and provide metadata in .eml files.



## contact_role

Foreign key to [https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_contact_role](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_contact_role)

## contact_agent_id

Foreign key to Agent.


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/collection.markdown)
