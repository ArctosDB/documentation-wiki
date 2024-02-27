---
title: How To Customize Search Results
layout: default_toc
author: Emily Braker
date: 2024-02-26
---

**Documentation:** [Searching Arctos](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Search-for-Specimens.markdown)

# How To Customize Search Results

The catalog record search page can be customized to reflect the preferred suite of search and results fields displayed for queries. When logged in, customization options are saved to the user profile and will automatically display on subsequent logins.

### Navigation: [Main Page [OR] Search -> Catalog Record](https://arctos.database.museum/search.cfm)


To customize the search and result fields displayed or add more fields to the pane to create a more advanced search, use the "Customize or Manage Profile" menu option. 

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/30a66614-f458-42e8-9d81-874e9e2f79cf)

## Profiles

You may choose from an existing profile to "seed" the form or start from scratch. Toggle on or off fields in the Search Options and Results Options tables to control what fields are displayed. Note that the results fields/values that are toggled on or off not only correspond to what is displayed on the screen, but also to the information that can be downloaded. 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**
While any user can customize the fields displayed, users must create a login to save these custom preferences for subsequent searches. Provide a name for your new profile, and click 'create and use'.

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/64853aa2-6262-45d0-8e89-b088fe0c5346)

* Each customize table is sortable, listing the field name of either Search Options (query fields) or Reults Options (the fields that will be displayed in the search results table).
* When clicked, eye icons display the definition of each term.
* Use the checkboxes to manually selct desired options, or use the category or subcategory checkmarks to batch-select related options within a categoy, or the "x" symbol to batch toggle off existing selections.

Note that while a user can turn on every Search table option, doing so in the Results table will result in limited record retrieval. This is due to the "cost" of the memory needed to simultaneously search multiple fields/tables throughout the database. Generally speaking, the more Results Options selected, the fewer catalog record results will display. For instance, toggling "core" (default) selections plus a handful of targeted fields will typically result in a search that maxes out at 500,000 records. Adding ten more fields may result in a maximum of 250,000 records returned. However, toggling every Result Option selection will likely retrieve a maximum of 3 catalog records. 

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/882cc1c9-785a-4fbc-848e-a62c50441f66)

# Download

Use the tool menu to select a download option. Users must be logged in to download files. 

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/f12af684-d86d-46b7-a03e-1bb4bd780d33)

* **Download Search results as displayed** will generate a csv file containing the search results organized according to the table header/fields that are currently displayed on the screen (remember, to add additional fields, use the Customize results field option described above). For especially large datasets that time out, users may need to use the **Request Data** option described below.
  
  ![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/e9c1fb07-f23b-4f52-9495-42cd63d907b2)
  
* **Download for record bulkloader** will generate a csv file containing the search results formatted according to all the fields available in the [catalog record bulkloader](https://arctos.database.museum/Bulkloader/bulkloaderBuilder.cfm) to prepare a record bulkload.
  
* **Download for citation bulkloader** will generate a csv file containing the search results formatted according to the fields available in the [citation bulkloader](https://arctos.database.museum/tools/BulkloadCitations.cfm?action=ld) to prepare a citation bulkload.

* **Request Data** is intended for users to request data that cannot be accessed through the standard search UI (generally, large downloads that time out). This action will asynchronously generate a csv file containing the search results organized according to the table header/fields that are currently displayed on the screen. The csv can be found under the user's username "Async Requests". All requests should be generated within a maximum timeframe of 24 hours.

# View/Download

* **Download/view attributes** generates a filterable table summarizing the attributes associated with the queried search results that can be downloaded:
  ![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/df9fe60d-08de-4732-8786-f19321bfc843)
  
* **Download/view identifiers** generates a filterable table summarizing the identifiers associated with the queried search results that can be downloaded:
![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/6247c35f-5a02-4503-b4a0-62c92f642162)

* **Download/view parts** generates a filterable table summarizing the parts associated with the queried search results that can be downloaded (including barcodes and label values if present):
![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/f5a31250-84fd-4c98-89c6-032456bcef0e)

* **Summarize Results** generates a table where one or multiple columns can be selected and summarized and/or downloaded, e.g.:
  ![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/9d594053-5621-4799-b9df-409ff5b466f0)

# Save/Share

* **Save Search** creates a shareable URL that saves the search parameters entered. After naming and saving the search, the URL will be available in the user's Saved Searches stored under their profile. Because this URL saves the parameters, this feature is dynamic and will capture future records that meet the search criteria.
  
![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/0004a7bd-88b0-43c5-8c3c-57c574385dae)
![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/8a1f3271-d15b-479f-be02-5534ae681475)


* **Archive Search** creates a static list of catalog numbers, and unlike Save Search, is not dynamic. Archived searches can be unlocked or locked (i.e. may not be deleted or altered) and can be assigned a DOI. See addtional information [here](https://handbook.arctosdb.org/documentation/archive.html)

* **Reload with Sharable URL** alters the URL so that the search parameters are included. As an example, a search within the UCM:Egg collection for specimens collected by [Dennis] Gale that have media is converted to the URL: https://arctos.database.museum/search.cfm?guid_prefix=UCM%3AEgg&collector=Gale&media_type=image
  
# Related

View related tables such as Events, Localities, Publications, and Sensu Publications corresponding to the queried catalog records.

# Manage

Globally manage queried records through batch editing values related to Attributes, Encumbrances, Identifications, Collectors, Agents, Record-Events, Accessions, Parts, Entities. Be cautious, as edits will be globally applied to all catalog records queried in the search results.
  
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How_To_Customize_Search.markdown" target="_blank">here</a>.
