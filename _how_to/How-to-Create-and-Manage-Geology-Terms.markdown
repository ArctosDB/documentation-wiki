---
title: How To Create and Manage Geology Terms
authors: Teresa Mayfield-Meyer
date created: 2019-10-09
layout: default_toc
---
 
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG) 

### [Update Request Github Issue](https://github.com/ArctosDB/documentation-wiki/issues/300)

# How To Create and Manage Geology Terms

**Documentation: [Authorities](https://handbook.arctosdb.org/documentation/authorities.html)**

This guide provides step-by-step instructions for creating and managing geology terms and relationships in the Geology Attributes Code Tables.

Purpose | Table 
 -- | -- 
Locality Attribute: Eons/Eonothems |	[ctchronostrat_eon_eonothem](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_eon_eonothem)
Locality Attribute: Eras/Erathems |	[ctchronostrat_era_erathem](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_era_erathem)
Locality Attribute: Series/Epochs |	[ctchronostrat_series_epoch](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_series_epoch)
Locality Attribute: Stages/Ages |	[ctchronostrat_stage_age](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_stage_age)
Locality Attribute: Substages/Subages | [ctchronostrat_substage_subage](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_substage_subage)
Locality Attribute: Systems/Periods |	[ctchronostrat_system_period](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_system_period)
Locality Attribute: Informal Chronostratigraphy |	[ctchronostrat_informal](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctchronostrat_informal)
Locality Attribute: Biochronology |	[ctbiochronology](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctbiochronology)
Locality Attribute: Biostratigraphic Zones |	[ctbiostratigraphic_zone](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctbiostratigraphic_zone)
Locality Attribute: Lithodemic Suites |	[ctlithodemic_suite](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlithodemic_suite)
Locality Attribute: Lithostratigraphic Groups |	[ctlithostratigraphic_group](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlithostratigraphic_group)
Locality Attribute: Lithostratigraphic Formations |	[ctlithostratigraphic_formation](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlithostratigraphic_formation)
Locality Attribute: Lithostratigraphic Members |	[ctlithostratigraphic_member](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlithostratigraphic_member)
Locality Attribute: Lithostratigraphic Beds |	[ctlithostratigraphic_bed](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlithostratigraphic_bed)


In order to access the functions described in this How To, an Arctos Operator must have [MANAGE_CODETABLES](http://arctos.database.museum/Admin/user_roles.cfm) access. If you need a new term added to the code table and you do not have appropriate access, please file a new [Authority Request](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=&template=authority-request.md&title=) in [Arctos GitHub Issues](https://github.com/ArctosDB/arctos/issues)

## Create a New Term

**Navigation [Search > Code Tables ](https://arctos.database.museum/info/ctDocumentation.cfm)**

Scroll down the list of Code Tables to the table that is appropriate for the new term and select the edit button next to it.

### Term

The new term should be entered into the yellow box at the top of the code table edit page just under the code table name. Take care when entering the term that you don't misspell a term that already exists or create aterm that is a synonym for existing terms. 

This is what will be visible in searches and on specimen pages. For some terms, the term includes its related attribute. For example, when entering a term in the Lithostratigraphic Formation table you would enter "Term Formation". A review of existing code table terms is a good idea to ensure that the term entered will be consistent with other code table values within the same code table.

It may help to peruse the code table to see if the term you want to use already exists. Think cautiously and critically about new terms being added to ensure they will be useful to the Arctos Community. Any terms that will only serve a single collection may belong elsewhere. Please consult with Arctos Community by creating a new [GitHub Issue](https://github.com/ArctosDB/arctos/issues) if you are unsure about adding a new term.

### Description

The description should be a detailed definition of the term or a link to a website with the definition. It is important to properly document terms in the code table so that users can select appropriate terms.

#### Github Issue Link

Following the definition, always include the link to the Github issue that documents the community's agreement to add the term.

### Add Term

When you are satisfied with your entries in all fields, select "Insert" to create the new code table term.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **CAUTION**  
Your new term will not be included in any of the hierarchies that exist in the code table. If you want a term to be searchable using a hierarchy, you must create the appropriate relationship. (See [Create Term Relationships](https://handbook.arctosdb.org/how_to/How-to-Create-and-Manage-Geology-Terms.html#create-term-relationships))

## Manage Terms

Geology terms can be edited if they have not yet been attached to any locality. Descriptions can be edited at any time, but should only be changed with an approval from the community. Always include the link to the Github issue where any change was discussed.

Once your edits are complete, select "Save" or select "Delete" if you wish to remove the term from the code table.

## Create Term Relationships

To create hierarchies between geology attribute code table terms, use the "Manage Metadata" link to select the type of relationship and parent and child terms.  

Both a parent and child term must be entered in the form in order to create a relationship. Parent or child can be entered in "data_value, depending upon the relationship selected in "meta_type"

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **CAUTION**  

  Take care when selecting meta_type, data_value and meta_value terms and review your choices before creating the relationship. 

### Parent Term

The "higher" term in the hierarchy. This can also be a "not valid for data entry" term.

### Child Term

The "lower" term in the hierarchy. This can also be a "not valid for data entry" term. Any terms that are currently children of the term chosen here will move along with this child term to the parent.

### Create Relationship

After you have made and reviewed your parent and child terms, select the "Insert" button. Your relationship should now appear in the Metadata column of the code table.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Create-and-Manage-Geology-Terms.markdown" target="_blank">here</a>.
