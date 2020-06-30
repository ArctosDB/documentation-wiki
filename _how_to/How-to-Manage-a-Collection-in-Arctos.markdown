---
title: How To Manage a Collection
author: Teresa J. Mayfield-Meyer, Michelle Koo, Philip Khan, Dusty McDonald
date: 2020-01-16
layout: default_toc
---

# How to Manage a Collection

The Manage Collection form in Arctos allows new or existing collections to create/edit metadata about their collection (except for some field values that are set when the collection is created) and to modify the header presented with individual catalog records. Users will need to have Manage_Collection permission for a collection in order to use this tool. Access this form through the following steps in the Arctos main menu: **[Manage Data -> Metadata -> Manage Collection](http://arctos.database.museum/Admin/Collection.cfm)**

It is important to fill out as many fields in Manage Collection as practical. Much of this information will be used to complete the collection profile for aggregators and is also useful for those using your data to ensure that the collection is properly cited. The form for managing a collection is divided into three parts; Collection Information, Contacts and Header Options.

## Collection Information
The fields for collection information are in the box on the left half of the manage collection page. Fields at the top cannot be edited without the assistance of a DBA as changes may affect the way data is published and create issues with locating your data. Below are descriptions and examples of what should go in the individual fields. 

**NOTE** In order to save any changes made to this section you must select the **Save Changes** button at the bottom of the section.

### Collection Type
Collection Type is set at collection creation, and controls code table access.

### Institution Acronym
Institution Acronym is set at collection creation, and is changeable only by the DBA team to encourage standardization.


### Institution
Institution is set at collection creation, and is changeable only by the DBA team to encourage standardization.

### Collection
Collection is set at collection creation, controls the Collection pick on the search form and is changeable only by the DBA team to encourage standardization.

### GUID Prefix
GUID Prefix is set at collection creation, and is used to form GUIDs (URLs).


### Description  
This field will be populated from the process of creating your collection. You can modify it as necessary. It should contain a description of the collection that is sufficiently detailed to provide a user with information about the size and scope of the collection, as well as any special holdings.

    EXAMPLE: "The NMMNHS Bird collection includes approximately 600 specimens with a focus on the Southwestern US. These specimens were collected as salvage or incidental catches. Tissues are held at the Museum of Southwestern Biology, Division of Genomic Resources Collection."

### Citation  
Indicate how the collection should be cited. It is a good idea to include both a general citation for the collection as well as information about citing individual cataloged items.

    EXAMPLE: "New Mexico Museum of Natural History and Science Bird Collection. Individual specimens should be cited as NMMNH:Bird: followed by the integer catalog number."

### Geography Description  
A general description of the geographic coverage of the collection.

    EXAMPLE: "Primarily New Mexico and the Southwestern United States"

### Coverage Coordinates
This table can create a polygon for your geographic coverage. Enter the extreme lat/lon values to create the polygon or leave these blank if coverage is global or you do not wish to define a polygon.

### General Taxonomic Coverage
A general description of the taxonomic coverage of the collection.

    EXAMPLE: "Birds of New Mexico and the Southwestern United States and Northwestern Mexico"
    
### Taxon Name Value
Taxon name associated with the collection, be as specific as possible. Most biological collections will be at the level of class or higher. Cultural and art colelctions can leave this blank if they wish.

    EXAMPLE: "Aves"

### Taxon Name Rank
Rank of the taxon name given in Taxon Name Value.

    EXAMPLE: "class"

### Purpose of Collection
Describe why the collection was made or continues to grow and for what purpose it is held.

    EXAMPLE: "The bird collection preserves and interprets the distinctive natural and scientific heritage of ornithology in New Mexico and is held for research, exhibits and programs designed to ignite a passion for lifelong learning."

### Alternate identifiers 1 and 2
If a collection has been cited under other catalog numbering systems, describe them in these fields. The DOI assigned to the collection by GBIF can be entered here.

### Specimen Preservation Method
A general description of the method(s) by which items in the collection are preserved.

    EXAMPLE: "Primarily study skins and skeletons with some specimens mounted for exhibition"

### Time Coverage
A general description of the period of time covered in the collection.

    EXAMPLE: "1960 - present with a few older specimens"

### Web Link
A direct link to the web site for the collection (or institution if the collection itself doesn't have a separate web site).

### Link Text
The text that is linked to the list of institutional collections through the [Arctos collections portal](http://arctos.database.museum/home.cfm) and at various other places.

### Loan Policy URL
A direct link to the loan policy for that collection or institution.

### Catnum Format
Select from the dropdown of choices. This specifies the format of catalog numbers for the collection. NOTE: Catalog numbers in integer format are preferred for ease of data discovery; see also [Catalog documentation](http://handbook.arctosdb.org/documentation/catalog.html). There are three options:

 * integer
 * prefix-integer-suffix
 * string

### Internal License
Select from the dropdown of choices. This contains options for licensing _data_ (not media) from the collection for use in, and as downloaded from, Arctos. 


### External License
Select from the dropdown of choices. This contains options for licensing _data_ (not media) from the collection to external sources, such as GBIF and iDigBio. 

### Collection Terms
Collection Terms accompanies the licenses, and provides a method by which collections may describe how they wish their data to be used, cited, etc., above and beyond the legal requirements specified in the license.

#### Special Note on licenses

The External License is used by the Arctos EML Generator and included in DarwinCore data made available to aggregators. Note that GBIF will not accept data which isn't licensed according to their standards - [link](https://www.gbif.org/news/82812/licensing-milestone-for-data-access-in-gbiforg). The Internal License (which may be the same as the External License) accompanies the richer data in Arctos. Both are accompanied by Collection Terms; the [VertNet Guide to Copyright and Licenses for Data Publication](http://vertnet.org/resources/datalicensingguide.html) is a good place to start.

### Taxonomy Source
Select from the dropdown of choices. The designates the source of taxonomic classifications used for the collection.

## Contacts
The contacts section is the top section on the right side of the manage collection page.

**NOTE** Changes to this section are saved by selecting the **Save** button next to the contact that has been edited.

### Contact Name
Anyone who is a contact for the collection must first be entered into Arctos as an agent, with a valid email address (see "[How to Create Agents](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Create-Agents)"). Add the name of each person who is a contact for the collection: type their last name and hit the tab key to bring up the list of agents with that name, then select the correct agent. 

### Contact Role
For each contact, specify their [Contact Agent Role](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_CONTACT_ROLE) through the dropdown of choices. It is recommended that every collection have at least one contact for each role with the exception of mentor, which is optional. Technical Support contact should be given as Dusty L. McDonald unless otherwise advised.


#### Special Note on Contacts

Selected contacts, including associated address information, are used for EML creation. The Formatted JSON address is used for mailing address.

## Header Options
Collections may customize the header that appears at the top of a collection record or when searching a collection portal.

**NOTE** In order to save any changes made to this section you must select the **Save** button at the bottom of the section.

### Header Color
This is the background color of the header. Enter an HTML color code. Clicking the "HEADER_COLOR" label will provide you with a list of options for selecting HTML colors. 

### Header Image
Generally a 60x60 pixel image can be used to replace the Arctos Bear in the catalog record header. The image should be [loaded to media in Arctos](http://handbook.arctosdb.org/how_to/How-to-Upload-Media-to-TACC.html#single-file-uploads), then the media url can be placed in this field.

    EXAMPLE: [NMMNH Logo](https://arctos.database.museum/media/10605393)

### Header Credit
Image attribution, displayed near the header image. (60 character maximum)
 
    EXAMPLE: "NM Museum of Natural History"
 
### Collection URL
URL at which more collection information may be found.
 
    EXAMPLE: http://www.nmnaturalhistory.org/bioscience/bioscience-collections
 
### Collection Link Text
Text to display in place of Collection URL. (60 character maximum)
 
    EXAMPLE: "Bird Collection"
 
### Institution URL
URL at which more institution information may be found.
 
    EXAMPLE: http://www.nmnaturalhistory.org/science
 
### Institution Link Text
Text to display in place of Institution URL. (60 character maximum)
 
    EXAMPLE: "Collections Home Page"
 
### Meta Description
HTML header; for bots, probably no longer useful.
 
### Meta Keywords
HTML header; for bots, probably no longer useful.
 
### Stylesheet
If you have developed a CSS stylesheet, load the css to /includes/css/ or coordinate with a DBA.
 
The examples used above result in a record header that looks like this:
 
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Sample%20Header.jpg)

---
  
## Managing a Collection Over Time
  
It is recommended that each collection's metadata be reviewed at least annually to ensure that contact and web link information is up to date. It is important to check the following for accuracy:

 * collection contacts and associated emails to ensure that someone will receive alerts
 * links to loan forms, collection web pages, etc. to ensure there are no dead links
 * update collection description if necessary
 * update citation if necessary

To accomplish this, from the Arctos main menu select **[Manage Data -> Metadata -> Manage Collection](http://arctos.database.museum/Admin/Collection.cfm)** and select the collection you wish to update from the dropdown list. Make the necessary edits and select **Save Changes** at the bottom of the  section edited.
