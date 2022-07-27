---
title: How To Search for Specimens
layout: default_toc
---

# Conducting a Search

The key to getting the most out of Arctos is learning to search effectively. More often than not, a task will specify a specimen by MVZ number, or a group of specimens by their Accession. In these cases, your search will consist of only one step. Occasionally, however, you will be asked to find a list of specimens without using these numbers. Fortunately, Arctos’ powerful search feature will help you get there.

The homepage of Arctos is also its search feature. That is your signal that you will be seeing this page a lot, so you will very quickly grow familiar with it. This guide explains some of the most commonly used search features.

You do not need to create an account or login to search. However, there are some features (e.g., downloading records) that require you to login.

* At the most basic level, Arctos has nine categories of search criteria that are analogous to the basic search feature of other sites. You can enter one criterion to execute a broad search, or you could enter multiple criteria to perform a more specific one.

* Although you are provided with these nine different options, you will find that you will use some fields more often than others. There are also some fields you may never have to use at all.

* In the grey header of each section, there’s is a link to “Show More Options" all the way to the right of the header. Clicking on it will expand the section and display more fields to help narrow down your search.

* At the top of the page you will see an option for "Require Tissues" - click this box if you want to limit your search to records associated with at least one tissue sample.

* Likewise at the top of the page, you will see an option to limit your search to just specimens or observations (default is "any" type of record).

## Identifiers

* The list of options supplied in the field “Collection” allows you to limit your search to only one collection or vertebrate taxon. Ignoring this field will return results that match your search criteria from all collections.

* The “Catalog Number” field is used to search for a specific specimen if you know the number. You should use this in conjunction with a collection, otherwise you will get results from multiple collections of specimens that share the same number. Each catalog number is tied directly to one specimen within each collection.

* GUID is another specific way of searching for a specimen. The GUID is the three-part identifier for the specimen that includes the institution code, collection code, and catalog number (e.g., MVZ:Bird:180000). The GUID is part of the URL for the specimen.

* You can also search by any type of other identifier through the "Other Identifier Type" field. This is a dropdown list of identifier types in Arctos. Select the identifier type you want and conduct your search using any other search field in addition to this identifier type.

 * For example, to search for records with GenBank numbers, select "GenBank" from the dropdown list.

 * When searching by another identifier, you can also enter a specific value for that identifier in the "Other Identifier" is/contains/in list field. For example, you can select the identifier type of "collector number" and enter the actual number in the "Other Identifier" field.

 * If you commonly search by a particular identifier, you can customize the search by selecting a specific identifier type that will show up on the search interface each time you login. In the grey header of the Identifier section, there is a link to "Customize" that will take you to a window where you can customize your identifier. Once you save that, the "Identifier" section will always have that chosen identifier type as a search option.

* “Accession” is another numerical field that you can use to search for a group of specimens. Accessions are typically associated with a specific collection.

### Any ID

* The AnyID search covers other IDs, catalog numbers, barcodes, and GUIDs. Expect slow performance and false positives.

## Identification and Taxonomy

* The first field in this section is "Identification" which allows you to search by anything in the scientific name (genus, species, subspecies).

* Once you hit "Show More Options" to the right in the gray section header, you will see a number of other search fields. These allow you to search by higher taxonomy or other types of data in Arctos.

* For more detailed instructions, see [How to Search for Specimens with Identification and Taxonomy](/how_to/How_to_Search_for_Specimens_with_Identification_and_Taxonomy.html)

## Locality

* As with taxonomy, this section provides a number of fields for searching (if you select "Show More Options"). However, take heart in the fact that you will not have to fill them all out. The field that you will likely use the most is "Any Geographic Element", which performs a broad search incorporating the other fields in this section. If for any reason, you need to be more specific, you can search in the appropriate category.

* Arctos also allows you to search spatially by selecting a bounding box on a map. To do that, click the small box to open the spatial query tool, then move and/or adjust the bounding box until you've covered the area of interest.

* Occasionally, you may be asked to survey some of the entries in Arctos to figure out how many records have been georeferenced or how precise the georeferences are. For these tasks, there are two relevant fields near the bottom of the Locality section. The drop-down menu for “Georeferenced?” has two options: "Is Georeferenced" and "Not Georeferenced". To evaluate how precise existing georeferences are, you can use the fields for “Coordinate Precision”.

### Spatial

Spatial Search provides spatial tools which consider both asserted and derived data. A (very) brief overview of Arctos is necessary to understand how these tools function.
* Each record in Arctos has zero or more "place assertions," which may range from 'we do not know' to complex spatial assertions.
* Assertions may or may not be to the most precise geography. A collection might choose to use COUNTRY or COUNTRY, STATE, COUNTY.
* Assertions may or may not be to the correct geography. Geography spatial data may encompass, intersect, or entirely avoid the corresponding locality assertion.
* Practices and protocols vary wildly across and within collections. This is often related to legacy data, but an expectation that any group of records will adhere to any particular protocol will probalby not be fruitful.

**Any Geographic Element** considers asserted locality and geography terms, plus geography search terms, plus terms pulled from various spatial query services including Arctos, GBIF, and GeoLocate. This field is intended to cast the broadest possible net, and should be expected to find inintended records.

**Map Polygon** - zoom and pan the map to the area of interest, click the polygon icon (top-center, next to the 'stop drawing' hand), then click the vertices to create a polygon. (Doubleclick or click the hand to close the polygon; the search will fail without this critical step.)

**Geography Shape Name** searches by geographic shapes, regardless of assertions. That is, a search for _A_ will find records where the locality "insersects" (see spatial map type) the named geography, even if the geographic assertion is for _Z_. 

**Spatial Match Type** is coupled with both **Map Polygon** and **Geography Shape Name**. 4 options are available
    * *contains* finds records entirely within the polygon (drawn or named). 
    * *intersects* finds records at least partially within the polygon (drawn or named). 
    * *not contains* finds records entirely or partially outside polygon (drawn or named). 
    * *not intersects* finds records which do not at all interrsect the polygon (drawn or named). 
**Place Term Type** together with **Place Term** are essentially **Any Geographic Element** with more control; these are terms gathered from various sources, but here it is possible to type them (for example, 'term as understood by GADM2')

### Locality Attributes Magic

**Age** and **Chronostratigraphy** are 'metadata terms' from various sources which provide less-specific ways to find localities. For example, a metadata query for Cisuralian will find assertions for Asselian because of a ``Cisuralian includes Asselian`` assertion on the ctchronostrat_series_epoch code table.


### The Rest

The rest of the locality section is limited to direct assertions. A search for **Locality Attribute Value** "Jurassic" will find "Jurassic" and nothing else (and assertions are generally to lithostratigraphic elements or finer-scales chronostratigraphic elements). A search for county=X will find records with that assertion and nothing else; it will find records that have the assertion but map elsewhere, and will not find records which map to the county but have a state-level assertion.

### Examples

#### Named Shape Contains

<img width="598" alt="Screen Shot 2022-07-27 at 10 58 27 AM" src="https://user-images.githubusercontent.com/5720791/181340749-d059b43d-90db-47a6-b97c-8e1fc6de1f93.png">

Finds all records from a named shape, even when the assertion does not include that shape. Records for which county-level geography is not specified are included when the locality assertion is entirely contained within the county.

<img width="749" alt="Screen Shot 2022-07-27 at 11 00 48 AM" src="https://user-images.githubusercontent.com/5720791/181341004-5072ddbd-4866-4224-8c84-d7159b98a504.png">



#### Named Shape Intersects


## Date/Collector

* This section allows you to search by a person's name (or part of the name). What you enter here must match how the person is entered into Arctos. It is often better to enter just the last name of the person, rather than try to match the full name if you do not know how it is entered in the database.

* If you are interested in specimens by date, you can search by a range of years or more specific dates.

* You can also search by other fields relating to the specimen event, e.g., collecting source ("captive", "wild-caught") or method ("mistnet"). Note that some of these fields are text strings, so the data my not be entered consistently (e.g., "mistnet" versus "net" or "mist net").

## Biological Individual

* This section allows you to search by specific parts. For example, if you are only interested in study skins or skeletal material, you can narrow down your search by entering a part name here. When you type something into the "Part Name" field, Arctos will search the matching parts in its authority table and you can then choose one of those parts to refine the search.

## Relationships

* This section allows search by relationships to other specimens.

### Relationship

Relationship is applied to found specimens. "Eaten by" will find kangaroo rats eaten by snakes; "ate" will find the snake which consumed the rat.

### Related Identifier Type

Related Identifier Type is the type of ID establishing the relationship, and is drawn from 
[CTCOLL_OTHER_ID_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_OTHER_ID_TYPE)

### Term and Value

Term and Value are key-value pairs drawn from the related specimen's data.
 
## Usage

* Use this section if you are interested in searching by "Basis of Citation", e.g., for type specimens.

## Media

* Arctos has a lot of media associated with its records. If you are interested in records with media (images, audio, video), you can select the media type here. If you do not choose a media type, you will get records with as well as without media in your other search options.

# Customizing Results of a Search

The default Specimens Result page provides a pretty comprehensive overview of each specimen and its relevant locality information. The most important fields you will pay the most attention to are GUID, Identification, Specific Locality, Dec. Lat., Dec. Long., and Max Error. Even though these are already present on the page, different tasks may require you to modify your results out of convenience or necessity.

* The modification to your results that you will probably perform most frequently is reordering the specimens to group similar entries together. By default, these specimens are initially sorted by GUID. There is usually some rhyme or reason to how they are assigned, but it may still make more sense to sort them in another order.
 * On top of the specimen results and on the left side of the screen, you will find a drop-down menu under the header “Order by…” listing different fields used to identify the specimen. Simply select the criterion by which to organize your results.
 * Eagle-eyed readers may have noticed the neighboring drop-down menu “...then order by”. It has the same list of options as the first field. As its header suggests, it is a secondary criterion to order the specimens.
 * In the example above, the specimens from the same locality will be grouped together, and within each locality grouping, they will then be arranged according to their date of collection. You can change whether these specimens are arranged in increasing order or decreasing order by clicking on the respective arrows to the right.
* For most tasks, the GUID, Identification, Specific Locality, and Date will be all that you need to identify specimens in need of correction. Some odd tasks may require you to add another field. This can be done by clicking on the “Add/Remove Data Fields” button in the middle of the screen above the specimen results.
 * This brings up a window with a huge list of options. As you may have guessed, you will mainly be working with the Locality section. The other fields are worth looking at, however, whether out of utility or curiosity. The Random section has an option for “collectors” which you may find useful on occasion. Lastly, the Attribute section is interesting, even if not directly applicable for the tasks we are concerned with. It contains a variety of biological information about the specimen including size, wingspan, parasite information, and reproductive status.
 * Once you have selected the additional options, you can click “Close and Refresh” in the top right corner to refresh the page and add the new data fields to your specimen results.
 * You can return to this window later on to remove any unnecessary fields in order to keep your results from becoming too cluttered.
* One other way to customize your results is to remove specimens from your search that do not require attention or edits. In order to do this, return to the “Add/Remove Data Fields” window and look for the “Row-Removal Option” in the top left corner. Set this option to “Yes” then click “Close and Refresh” in the top right corner. Doing so will add a new column on the left side of your specimen results.
 * All that is left to do is check the boxes for the specimens you want to remove. Once you have made your selection, click the glaring red “Remove Checked Rows” button above the specimen results to refresh the page.
 
# Specimen Search Refine Widget
*Click [ Show/Hide Search Terms ] to add or remove an inline search form.*

![Search Terms Widget screenshot](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/images/uploads/search-terms-widget-screen.png?raw=true
"Search Terms Widget screenshot")

This tool is extremely network-intensive; use with caution.

The tool uses intensive caching, and changes to documentation or data may not appear for about an hour.

The form consists to 4 columns:

 - Term is values acceptable by SpecimenResults
 - Value is value of the term
 - Vocabulary is suggested vocabulary
 - Controls provides some simple manipulation tools
 - Term includes

Terms which were included in your current search
Select terms from your search results, based on your preferences (from “add/remove search terms”)
The option to add any available search term
Mouse-over terms for minimal documentation, click for full documentation, links to controlled vocabularies and definitions, etc.

Value is term-specific. Some terms will only accept case-sensitive exact matches, some will accept substrings, and some will accept operators (such as “=” prefix to indicate exact match only). Most term will accept value “_” (underbar) to mean “match anything” or “require this attribute.” (Note that Arctos is highly normalized, and most terms do not exist for most specimens, while some specimens may have multiple values of any term, such as multiple numeric age determinations based on the cementum layers of different teeth.)

Vocabulary includes suggestions from code tables , unique values from some tables (such as Geog_Auth_Rec.Country), and operators from documentation. Data in this column are suggestions only; selecting them will simple push a value to the Value column, which you may then remove, alter, or re-query. Values in the Vocabulary columns are themselves ignored. The Vocabulary column may be incomplete, unused in the current dataset, incompatible with other parameters (e.g., State=Alaska + Country=Somalia should not find anything), or otherwise irrelevant or confusing.

One or two options (depending on current search terms, vocabulary controls, and what’s turned on in your results set) may be available when vocabulary suggestions are available. (Some terms will not provide suggestions due to indirect mapping between the highly-structured database and the “flattened” query view.)

Fetch all will return all available terms, with terms included in results in bold. For example, if you’ve searched for Sorex palustris and United States, fetch all in State will return a few hundred states, and Alaska, California, etc., will be in bold. Selecting any bold value and re-querying will return a subset of the data. Selecting “Yukon Territory” will return nothing, but selecting Yukon Territory and removing United States will produce results. Use this for exploration.
Fetch from results will return only those values which exist in your search results. Selecting any value from this list (they will all be bold) will return a subset of the search results; this is a way of drilling down from a general search to more specific records.
Blank Value does not include the term in subsequent searches. _ (underbar) requires the term to exist, but does not filter by value. Underbar will not work for some terms; we’re working on documentation.

### Maps

If you query by coordinates (“Select on Google Map” search), the map will zoom to contain APPROXIMATELY the area you queried. (Exact fit is not implemented due to limitations of the Google Maps API.)

Under the map, click “QueryByViewport” to add the coordinates of the visible map to your search. Note that the results will, as above, zoom to only approximately the area you selected.

### Warnings

This form is in beta development. Some term/value pairs are dependent, and some will be somewhat nonsensical in this format. Please use the Contact link at the bottom of the page if you find something cryptic, nonfunctional, or just have a great idea for improvement.

# Saving Searches

Occasionally, you will be assigned a task that you may not be able to complete in one session. If the search parameters are simple, it would be easy to execute the search the next time and resume working. If you have modified the results or wish to share your search with someone, it would be helpful to save your search.

* On the search results page, the “Save Search” button can be found in the center of the screen above the list of specimens.
 * Clicking on the button will bring up a little dialog window. All you are required to do is name your search. Make sure it is informative so that you can easily recall what the point of the search was. It might also be helpful to include the date. Click “OK” when you have named your search.
 * Clicking “OK” does not seem to do anything immediately. It closes the dialog and returns you to the specimen results so that you can make the edits that you originally intended. In order to access your saved search, locate the “Saved Searches” button in the drop-down menu “My Stuff” at the top of the page. This button will bring you to a page where you can access or manage all of the searches you have saved.
  * Clicking on the red X’s in the column on the left will delete the saved search.
  * Clicking “Mail” on the right hand column will allow you to send the link to an email address.
