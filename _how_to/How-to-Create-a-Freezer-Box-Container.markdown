---
title: How To Create an Individual Container in Arctos Object Tracking
layout: default_toc
author: Emily Braker, Teresa Mayfield-Meyer
date: 2016-02-27, 2018-11-29
---

# How To Create an Individual Container in Arctos Object Tracking (e.g. Freezer Box with Positions)

There are many types of containers possible in Arctos. This guide walks you through the steps of creating a freezer box or another container type as a new container. This is the first step before you can scan barcoded parts such as tissues into positions in Arctos.

* From the Arctos main menu select Manage Data>Object Tracking>Find Container and enter the barcode you will use for the container under Barcode. 
* Click Search at the bottom of the form.
* The barcode should show up as a Container Label in the Universe. This assumes the [barcode series has already been created in Arctos](/how_to/How-to-Start-Object-Tracking.html).
* Click on the square box next to the barcode in the center panel. This should bring up an edit box at right.
* Click Edit Container.
* Go to the Container Type dropdown and select the appropriate container type for your usage.
* If freezer box has been selected, the dimensions should autopopulate. For any other container type, enter dimensions as appropriate. **caution!** make sure the dimensions will accomodate the containers that will be placed in the individual positions within this container.
* Create the positions in your container by entering the number of rows and columns and selecting an either vertical or horizontal layout.
  
  Note: vertical layouts will appear like this:
  
  ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Vertical_orientation.JPG)
  
  and horizontal layouts like this:
  
  ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Horizontal_orientation.JPG)
  
* Click Save Container Edits.
* You should now see "positions" at the top of the edit form. Click it.
* Enter the dimensions of the positions **caution!** make sure the sum of the position dimensions will fit into the container you just created AND the position dimensions will accomodate the containers that will be placed in the individual positions.
* Containers can be scanned into position using a scanner programmed to TAB.
* Containers may not be deleted from a position. To delete or reposition, the container must be moved elsewhere and then back into the correct position.  After moving a container, hit the Refresh on your browser to see the changes in position.


# Alternate Method
* This is not recommended, as it is preferable to create all barcodes as labels first and then convert them as needed. But if you have to create a container de novo, it is possible to use this form. The barcode used cannot currently be in use for another container. 

* In Arctos, go to Manage Data > Object Tracking > Create Container.

* Select "freezer box" from the dropdown list under "Container Type."

* Enter the dimensions of your freezer box (cm). A typical 81-position box is 13 (W) x 5.3 (H) x 13 (L).

* Enter the number of positions (e.g., "81"). Freezer boxes typically contain 81 or 100 positions.

* Enter a description if you want (not required).

* Select Institution from the dropdown list.

* Enter a barcode for the freezer box.

* Enter a label for the freezer box.

* Click "Create Container."

* Once you create the container, you will get a window with a pane on the right that allows you to edit the container, look at positions, etc. Edit the container to make sure that the number of positions is entered (even if you enter that number in the previous step, it doesn't always save that value so you need to enter it again). Hit "Update" to save.

* The first time you create a new freezer box, click "Positions" and Arctos will prompt you to create new positions. After you do that, a window will appear that shows the freezer box grid with the empty positions you have made (the box barcode and label will display at the top of the screen).

* You are now ready to start scanning (i.e., installing) barcoded vials into a freezer box (see [How to Install Tissue Cryovials into a Freezer Box](https://arctosdb.github.io/documentation-wiki/how_to/How-to-Install-Tissue-Cryovials-Into-a-Freezer-Box.html)).
