---
title: How To Manage a Collection
author: Teresa J. Mayfield-Meyer, Michelle Koo, Philip Khan, Dusty McDonald
date: 2023-02-03
layout: default_toc
---

# How to Manage a Collection

The Manage Collection form in Arctos allows new or existing collections to create/edit metadata about their collection (except for some field values that are set when the collection is created) and to modify the header presented with individual catalog records. Users will need to have Manage_Collection permission for a collection in order to use this tool. Access this form through the following steps in the Arctos main menu: <a href="http://arctos.database.museum/Admin/Collection.cfm" target=_blank>**Tools Directory -> Internal Settings -> Manage Collection**</a>

It is important to fill out as many fields in Manage Collection as practical. Much of this information will be used to complete the collection profile for data aggregators and is also useful for those using your data to ensure that the collection is properly cited. The form for managing a collection is divided into multiple parts; [Arctos Community Data](#arctos-community-data), [Collection Contacts](#collection-contacts), [Collection Header](#collection-header), [Licenses and Terms](#licenses-and-terms), [Collection Defaults](#collection-defaults), and [Summary Information](#summary-information).

## Arctos Community Data
This section includes three Fields that cannot be edited without the assistance of a DBA as changes may affect the way data is published and create issues with locating your data. Below are descriptions and examples of what should be in the individual fields. 

**NOTE** In order to save any changes made to this section you must select the **Save Changes** button at the bottom of the section.

### GUID Prefix
**REQUIRED, set by DBA**
GUID Prefix is set at collection creation, and is used in combination with catalog numbers to form GUIDs (URLs).

### Collection Type
**REQUIRED, set by DBA**
Collection Type is set at collection creation, and controls code table access. Values are controlled by a <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollection_cde" target=_blank>code table</a>

### Institution Acronym
**REQUIRED, set by DBA**
Institution Acronym is set at collection creation, and is changeable only by the DBA team to encourage standardization. 

### Institution
**REQUIRED, change with caution**
Institution is set at collection creation, this can be changed, but it can affect sorting in the portal page. In general, all collections from a single institution should have the exact same institution name entered here.

### Collection
**REQUIRED, change with caution**
Collection is set at collection creation, this can be changed and consistency with other Arctos collections of the same type is recommended.

### Catalog Number Format
**REQUIRED, change with DBA assistance**
Changing to a value that conflicts with existing data may cause significant, widespread problems. Consult with the DBA team before changing.

Select from the dropdown of choices. This specifies the format of catalog numbers for the collection. NOTE: Catalog numbers in integer format are preferred for ease of data discovery; see also <a href="http://handbook.arctosdb.org/documentation/catalog.html" target=_blank>Catalog documentation</a>. There are three options:

 * integer
 * prefix-integer-suffix
 * string

## Collection Contacts

**NOTE** Changes to this section are saved by selecting the **Save** button next to the contact that has been edited.

### Contact Name
Anyone who is a contact for the collection must first be entered into Arctos as an agent, with a valid email address (see "[How to Create Agents](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Create-Agents)"). Add the name of each person who is a contact for the collection: type their last name and hit the tab key to bring up the list of agents with that name, then select the correct agent. 

### Contact Role

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

It is recommended that every collection have at least one contact for each role with the exception of mentor, which is optional. Technical Support contact should be given as Dusty L. McDonald unless otherwise advised. 

For each contact, specify their [Contact Agent Role](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_CONTACT_ROLE) through the dropdown of choices.

#### Special Note on Contacts

Selected contacts, including associated address information, are used for Collection Metadata EML (GBIF dataset) creation. The Formatted JSON address is used for mailing address.

## Collection Header
Collections may customize the header that appears at the top of a collection record or when searching a collection portal.

**NOTE** In order to save any changes made to this section you must select the **Save** button at the bottom of the section.

### Header Color
**OPTIONAL, no selection returns a white background**
This is the background color of the header. Enter a color code or use the <a href="http://www.google.com/search?q=html+color+picker" target=_blank>google color picker</a>.

**NOTE** If the header color is dark, you will need to lighten the text.

### Header Link Color
**OPTIONAL**
This is the color of the text in the header. Enter a color code or use the <a href="http://www.google.com/search?q=html+color+picker" target=_blank>google color picker</a>. 

### Header Image
**RECOMMENDED**
The header image should be a 130px high and smaller than 25K in filesize. Images must reside in /images/header/. Type to select, type 'image' to list everything. <a href="https://github.com/ArctosDB/arctos/issues/new" target=_blank>File an issue </a> for assistance with creating a header image or for placing a header image on the server. Leave blank for no image.
    
### Header Image Link
**OPTIONAL**
You may provide a URL that clicking on the header image leads to. Leave blank for no link. 

### Header Credit
**OPTIONAL**
Header image attribution that will be displayed under the header image. (60 character maximum)
 
    EXAMPLE: "NM Museum of Natural History"
 
### Collection Link Text
**RECOMMENDED**
Text to display in place of Collection URL. (60 character maximum) This text will also appear at the top of every catalog record in the collection.
 
    EXAMPLE: "Bird Collection"
    
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/collection_name.jpg) 

### Collection URL
**RECOMMENDED**
URL at which more collection information may be found.
 
    EXAMPLE: http://www.nmnaturalhistory.org/bioscience/bioscience-collections

If a collection does not have an external website, you may want to use the Arctos details page for the collection here.

    EXAMPLE: https://arctos.database.museum/collection/NMMNH:Paleo 
 
### Institution Link Text
**RECOMMENDED**
Text to display in place of Institution URL. (60 character maximum)
 
    EXAMPLE: "Abilene Chrisitan University"
    
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/institution_name.jpg) 

### Institution URL
**RECOMMENDED**
URL at which more institution information may be found. This text will also appear at the top of every catalog record in the collection. 
 
    EXAMPLE: http://www.nmnaturalhistory.org/science
    
### Stylesheet
**OPTIONAL**
This allows more control over the style of your catalog record header. If you have developed a CSS stylesheet, load the css to /includes/css/ or coordinate with a DBA.
 
## Licenses and Terms

### Internal License
**REQUIRED**
Select from the dropdown of choices. This contains options for licensing _data_ (not media) from the collection for use in, and as downloaded from, Arctos. 

### External License
**REQUIRED**
Select from the dropdown of choices. This contains options for licensing _data_ (not media) from the collection to external sources, such as GBIF and iDigBio. See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#methods" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

The External License is used by the Arctos EML Generator and included in Darwin Core collection metadata made available to aggregators. Note that GBIF will not accept data which isn't licensed according to their standards - [link](https://www.gbif.org/news/82812/licensing-milestone-for-data-access-in-gbiforg). **It is advised that the external license be set to CC0**
The Internal License (which may be the same as the External License) accompanies the richer data in Arctos. Both are accompanied by Collection Terms; the [VertNet Guide to Copyright and Licenses for Data Publication](http://vertnet.org/resources/datalicensingguide.html) is a good place to learn more about how the data aggregators view licensing.

### Collection Terms
**REQUIRED**
Collection Terms accompanies the licenses, and provides a method by which collections may describe how they wish their data to be used, cited, etc., above and beyond the legal requirements specified in the license.

### Loan Policy URL
**REQUIRED**
A direct link to the loan policy for that collection or institution.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 

Before selecting your terms and licenses, read <a href="https://handbook.arctosdb.org/how_to/How-To-Apply-Licensing-and-Terms.html" target="_blank">How to Apply Licensing and Terms</a>

## Collection Defaults

### Default Cataloged Item Type
**REQUIRED**
The term selected in this field will be the default for all catalog records in the collection and is passed to biodiversity data aggregators as BasisOfRecord. Individual catalog records can be modified to use a different term if required. Terms available can be found in the <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcataloged_item_type" target=_blank>CATALOG_ITEM_TYPE code table</a>.

### Taxonomy Sources
**REQUIRED**
Select from the dropdown of choices. The designates the source(s) of taxonomic classifications used for the collection. Order is important. Place your preferred source first. If a classification for a name used in an identification is not found in the first selection the one in the second will be used and so on.

### Preferred Identifiers
**OPTIONAL**
Selected identifiers will display in the summary section of catalog record pages. Choose none (blank), a single value, or a comma-separated list. 

## Summary Information

### Genbank Collection
**RECOMMENDED for collections that may have records cited in GenBank accessions**
Genbank Collection is the collection identifier provided by GenBank. This is used to help discover potential links between records in this colelction in Arctos and GenBank accession records. Only collections properly registered with GenBank, and with their assigned identifier entered into Arctos, may access all Arctos-to-GenBank tools.

To register a collection with Genbank or to make institutional updates, please contact:

Shobha Sharma, PhD
Staff Scientist
GenBank Taxonomy
NCBI/NLM/NIH

### Description  
**REQUIRED for those publishing to GBIF**
This field will be populated from the process of creating your collection. You can modify it as necessary. It should contain a description of the collection that is sufficiently detailed to provide a user with information about the size and scope of the collection, as well as any special holdings.

    EXAMPLE: "The NMMNHS Bird collection includes approximately 600 specimens with a focus on the Southwestern US. These specimens were collected as salvage or incidental catches. Tissues are held at the Museum of Southwestern Biology, Division of Genomic Resources Collection."

### Citation  
**REQUIRED**
Indicate how the collection should be cited. It is a good idea to include both a general citation for the collection as well as information about citing individual cataloged items.

    EXAMPLE: "New Mexico Museum of Natural History and Science Bird Collection. Individual catalog records should be cited by the catalog record url: https://arctos.database.museum/guid/NMMNH:Bird:1."

### Geography Description
**RECOMMENDED for those publishing to GBIF**
A general description of the geographic coverage of the collection. See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#geographic-coverage" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

    EXAMPLE: "Primarily New Mexico and the Southwestern United States"

### Coverage Coordinates
**RECOMMENDED for those publishing to GBIF**
This table can create a polygon for your geographic coverage. Enter the extreme lat/lon values to create the polygon or leave these blank if you do not wish to define a polygon. For global coverage enter coordinates as follows:

W | E | N | S 
-- | -- | -- | -- 
-180 | 180 | 90 | -90 

See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#geographic-coverage" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

### General Taxonomic Coverage
**RECOMMENDED for those publishing to GBIF**
A general description of the taxonomic coverage of the collection. See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#taxonomic-coverage" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

    EXAMPLE: "Birds of New Mexico and the Southwestern United States and Northwestern Mexico"
    
### Taxon Rank Name
**RECOMMENDED for those publishing to GBIF**
Select the highest taxon classification rank that describes the collection. Most biological collections will be at the level of class or higher. See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#taxonomic-coverage" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

    EXAMPLE: "class"

### Taxon Rank Value
**RECOMMENDED for those publishing to GBIF**
The taxon name or names (comma separated) that corresponds to the taxon rank name chosen above. Cultural and art collections can leave this blank if they wish. Used in EML generation, See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#taxonomic-coverage" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

    EXAMPLE: "Aves"

### Purpose of Collection
**REQUIRED for those publishing to GBIF**
Describe why the collection was made or continues to grow and for what purpose it is held. See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#methods" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

    EXAMPLE: "The bird collection preserves and interprets the distinctive natural and scientific heritage of ornithology in New Mexico and is held for research, exhibits and programs designed to ignite a passion for lifelong learning."

### Alternate identifiers 1 and 2
**RECOMMENDED for those publishing to GBIF**
If a collection has been cited under other catalog numbering systems, describe them in these fields. The DOI assigned to the collection by GBIF can be entered here. Used in EML generation, See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#dataset-resource" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

### Specimen Preservation Method
**RECOMMENDED for those publishing to GBIF**
Picklist keyword indicating the process or technique used to prevent physical deterioration of non-living collections. Expected to contain an instance from the Specimen Preservation Method Type Term vocabulary. E.g., formaldehyde. Used in EML generation. See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#additional-metadata-natural-collections-description-data-ncd-related" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

    EXAMPLE: "frozen, formalin, dry"

### Temporal Coverage
**RECOMMENDED for those publishing to GBIF**
A general description of the period of time covered in the collection. For paleontologic material describe the geological time periods covered. For extant material provide years. See <a href="https://ipt.gbif.org/manual/en/ipt/latest/gbif-metadata-profile#temporal-coverage" target=_blank>GBIF Metadata Profile – How-to Guide</a>.

    EXAMPLE: "1960 - present with a few older specimens"
    
    EXAMPLE: "Ediacaran to Pleistocene"

### Web Link
**REQUIRED for those publishing to GBIF**
A direct link to the web site for the collection (or institution if the collection itself doesn't have a separate web site). This will populate Resource Homepage in the GBIF collection metadata enter the full current URL of the web page containing information about the resource or its data set.

### Link Text
**RECOMMENDED for those publishing to GBIF**
The text that will be displayed in place of the link provided above.

---
  
## Managing a Collection Over Time
  
It is recommended that each collection's metadata be reviewed at least annually to ensure that contact and web link information is up to date. It is important to check the following for accuracy:

 * collection contacts and associated emails to ensure that someone will receive alerts
 * links to loan forms, collection web pages, etc. to ensure there are no dead links
 * update collection description if necessary
 * update citation if necessary

To accomplish this, from the Arctos main menu select <a href="http://arctos.database.museum/Admin/Collection.cfm" target=_blank>**Tools Directory -> Internal Settings -> Manage Collection**</a> and select the collection you wish to update from the dropdown list. Make the necessary edits and select **Save Changes** at the bottom of the  section edited.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Manage-a-Collection-in-Arctos.markdown" target="_blank">here</a>.
