---
title: How To Create and Edit Containers
author: Teresa J. Mayfield-Meyer
date: 2023-08-07
layout: default_toc
---

[Object Tracking Documentation](https://handbook.arctosdb.org/documentation/container.html)

# How To Create and Edit Containers

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

To create containers, barcodes must be uploaded FIRST.  In this proces you will associate barcodes with a temporary container type. This is accomplished as described in “Creating a Container Series” below. Once the barcodes have been uploaded into Arctos, the containers that they represent can be edited as described in "Editing an Individual Container" and "Bulk Editing Containers".

### How To Create a Container Series

This will allow you to upload barcodes into Arctos. Barcodes will later have to be edited in “Container Edit” before use.

**Navigation** [Tools Directory > Barcodes & Containers > Container: Bulkload](https://arctos.database.museum/loaders/bulkCreateContainer.cfm)

* Create a CSV (comma delimited) file with column headers that match the fields shown in the table on the page that comes up.

   * **Container_Type** - Choose the most appropriate container type that represents how the barcodes will be used in your collection. For example, if the barcode series that you are uploading will be used for tissue vials, select "cryovial label".  If the barcode has not been assigned to a specific container, select "container label".  

   * **Label**– This can be the same as “Barcode" but could also include descriptive text.

   * **Barcode** - Choose a set of barcodes to use. Be sure to include their correct prefix. Usually this is already on the barcode itself, e.g., “NMU” if the barcode is NMU10000, NMU10001, etc.

   * **Institution_Acronym** - Indicate the acronym used by Arctos for your institution (e.g., MSB, NMU).

   * **Description** - This provides an optional space to expand on "Label" if that is helpful in your application.

   * **Container_Remarks** - This provides an optional space to provide further description of the container.

* Click the "Choose File" button to browse to and select your CSV file.  Then click the "Upload this File" button.

* Click “Review” to navigate to a confirmation page that tells you if the containers have been successfully created or if there an issue with creating them.


***

### How To Edit an Individual Container

**Navigation** [Tool Directory> Barcodes & Containers > Container: Find](https://arctos.database.museum/findContainer.cfm)

* Search for the barcode you wish to use on the box, freezer, room, etc. in the second field titled “Barcode (comma-list OK). This includes the barcode prefix and unique character string.

* Click “Search” at the bottom of the page. The barcode should pop up on the right side of the page under the file “The Universe”.

* Click the checkbox next to the barcode and another set of information will appear on the right titled “Container Details”

* Click “Edit this Container (new window)” and a new window will come up that will allow you to describe the container that you wish to be associated with the barcode.

**Edit Container Page** - On this page you will need to fill the following fields:

* **Label** - This is what you wish to call the container. The label could be descriptive text that is convenient for internal container tracking.  It is not constrained by limitations associated with barcodes and catalog numbers.  E.g., Pos.5 Tray 1 – Rack A, W-2, Shelf 3, Tray 2, etc…. This will be shown when a part or other container is searched for in “Find Container”.

* **Container Type** - Choose an appropriate container type from the drop down list. Note that anything with “label” in it will not work. A “label” is not a container.

* '**# Positions**' - This field is only used for creating boxes with defined positions (e.g., boxes for frozen tissues, embryos, or parasite vials).

* **Description** - If desired, add a description of what the container is. For example, a container that has the Label “Pos.1 Tray 2 – Rack A” could have the description “First position from the front of Tray 1 - Rack A.” The label “Shelf 3” could have the description “Third shelf from the top of Freezer 1”.  

* **Remarks** - If desired, add additional relevant information here. For example, the label “Pre-PCR Freezer” could have the remark “Pre-PCR freezer that holds DNA extracts, reagents, and temporarily holds specimen tissues.”

* **Move to Barcode** –  In this field put the barcode for the **parent** container in which the container that you are creating will belong. All containers must be put into other containers. Your institution is the main parent container for all collections within your institution. The Universe is the ultimate parent container.

   * You must have an appropriate place to put your container. Otherwise it will not be connected with your institution. This will make it difficult to search for. To find an appropriate place for your container, do the following:

      * Physically look for an available position in your collection and note the parent container.

      * In Arctos, search for the parent container in “Find Container” by entering its label and container type. (Make sure you are choosing the one that belongs to your institution by looking at the institution acronym on the edit page).

      * Copy the barcode of the parent container into the “move to barcode” field in your new container’s edit page.

      * When you are finished click “Update” near the bottom of the page.

**Here is an example:** You are making a new freezer box. You know it will be placed in the -80 freezer in Room 2212 on the top shelf, rack A, tray 1, and in the last position on that tray.

* In Arctos: [Tool Directory> Barcodes & Containers > Container: Find](https://arctos.database.museum/findContainer.cfm)

* Enter “Pos.5 Tray 1 – Rack A” into “Label”. You can also include just a portion of the label name with % as a wildcard value.  For example, "%Rack%" will retrieve all labels that include the word "Rack".

* Click “search” and the container should pop up with its complete list of all parent containers.

* Click on the checkbox next to the container that is of interest and the container details will pop up on the righthand side of the window. The barcode for this container will be in the Container Details box. Keep the window open so you can easily access the barcode.

* To create your new tissue box, follow the steps in “How to Create Individual Containers”

   * During this process, copy and paste the barcode for “Pos. 5 Tray 1 – Rack A” into the field titled “Move to barcode”.

* Click “Save” at the bottom of the page.

Congratulations! You have just made a freezer box that can be found in the large freezer in Room 2212 on the top shelf in rack A, tray 1, and in the last position on that tray.

***
### How To Find and Edit an Individual Container:

**Navigation** [Tool Directory> Barcodes & Containers > Container: Find](https://arctos.database.museum/findContainer.cfm)

* Enter the container’s barcode in the “Barcode (comma-list OK)" field on the left of the page.

   * “comma-list OK” means that you can enter a list of barcodes ONLY separated by commas (no spaces) and they will all show up at once. E.g., NMU10093,NMU10094,NMU10094….

   * You should not need to enter any other information.

* Click the “Search” buton at the bottom of the screen and a list of successional folders should appear, beginning with “The Universe”.

* Click on the empty box next to the container you wish to edit. “Container Details” should pop up on the right half of the page, listing the Container Type, Label, Description, Barcode, and Install Date.

   * This is a good opportunity to double-check that the information is correct.

* Click “Edit this container (new window)”. A new window should pop up which will allow you to edit any information regarding this container.

   * This is also where you can Delete a Container if necessary.

* Once you have finished editing, click "Save".

All finished! You can exit this window and look at the new changes by going back to the “Find Container” page and clicking on the “Search” button again to refresh the page without having to re-enter the barcode.

***

### How To Bulk Edit Containers

This is used to convert barcodes into containers in bulk. Converting barcodes into containers allows you to assign them to catalog record parts or convert them into boxes, shelves, racks, etc…

**Navigation** [Tools Directory > Barcodes & Containers > Container: Bulk Edit](https://arctos.database.museum/loaders/bulkEditContainer.cfm)

* Use your favorite spreadsheet software (e.g., Excel) to create a CSV (comma delimited) document with the correct headings. Headings are listed on the Bulk Edit Container page.  A template is available by clicking the blue “Get a template” above the table on the Bulk Edit Container page.

  * **BARCODE** - The barcode series you are working with.

  * **LABEL** - This can be the same as the barcode, although you could choose to add other information (e.g., liver, kidney, etc.). For parent containers, this could provide a description of container contents.

  * **OLD_CONTAINER_TYPE** - The type of container it was given when the barcodes were first uploaded. Usually “container label” but if this does not work or you are unsure, you can always double check by going to “Find Container” and searching for the barcode. It will say the container type next to the barcode. For example “NMU10800 (specimen label)”.

  * **CONTAINER_TYPE** - The new type of container you want. If you are unsure of what to use, on the “Bulk Edit Container” page there is a link next to CONTAINER_TYPE that shows a list of what is accepted. Choose the one that best fits the container you are making. Remember that Labels are not containers.

  * **DESCRIPTION** - This is mainly used for parent containers and not parts. For example, Tray 1 – Rack A would have a description of “First tray in Rack A”.

  * Save the file, retaining the CSV format.

  * Now you can upload the file.

  * You will be brought to a page that says “Validation complete” along with the information you just uploaded. It will ask you to check through all the data first before finalizing. This is the best time to fix mistakes, so look closely!

  * To finalize the upload, click “click here to finalize the upload”, which is highlighted in blue at the top of the page.

  * All done.
***

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Create-and-Edit-Containers.markdown" target="_blank">here</a>.
