---
title: How To Create an Individual Container in Arctos Object Tracking
layout: default_toc
author: Emily Braker, Teresa Mayfield-Meyer
date: 2016-02-27, 2018-11-29, 2019-02-22
---

# How To Create an Individual Container in Arctos Object Tracking (e.g. Freezer Box with Positions)

There are many types of containers possible in Arctos. This guide walks you through the steps of creating a freezer box or another container type as a new container. This is the first step before you can scan barcoded parts such as tissues into positions in Arctos.

## Create the Container
  * From the Arctos main menu select Manage Data > Object Tracking > Find Container and enter the barcode you will use for the container under Barcode 
  * Select Search at the bottom of the form
  * The barcode should show up as a Container Label in the Universe. This assumes the [barcode series has already been created in Arctos](/how_to/How-to-Start-Object-Tracking.html)
  * Click on the square box next to the barcode in the center panel, this should bring up an edit box to the right
  * Select Edit Container
  * Go to the Container Type dropdown and select the appropriate container type for your usage 
  * Enter your container dimensions: **caution!** make sure the dimensions will accomodate the containers that will be placed in the individual positions within this container and that the dimensions of the container will fit inside whatever container it will be scanned into  
  * Create the container position grid (if you want to have positions in the container) this is not required, and creating a position grid will limit the number of containers you can place in this container. This is very useful when the physical space includes positions, such a freezer box or rack that will only hold one container in each position, making it possible to easily find a single container amongst many  
    * Create the positions in your container by entering the number of rows and columns and selecting an either vertical or horizontal layout: for freezer boxes the position grid information can be autopopulated by selecting the appropriate box type from the "magic" dropdown, for any other container type specify your grid as appropriate **caution!** make sure the position grid matches the physical container  
    
  Note: vertical layouts will appear like this:
  
  ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Vertical_orientation.JPG)
  
  and horizontal layouts like this:
  
  ![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Horizontal_orientation.JPG)
  
  * Select Save Container Edits

## Create the Container Positions
  * You should now see "positions" at the top of the edit form, Select it  
  * Enter the dimensions of the positions **caution!** make sure the sum of the position dimensions will fit into the container you just created AND the position dimensions will accomodate the containers that will be placed in the individual positions  
  * Select "Create all new positions" at the bottom of the page
  * You should now see a "map" of the container's positions
  
## Scan Containers Into the Positions
  * Containers can be scanned into position using a scanner programmed to TAB  
  * Containers may not be deleted from a position. To delete or reposition, the container must be moved elsewhere and then back into the correct position  
  * After moving a container, hit the Refresh on your browser to see the changes in position  

# Alternate Method
This is not recommended, as it is preferable to create all barcodes as labels first and then convert them as needed. But if you have to create a container de novo, it is possible to use this form. The barcode used cannot currently be in use for another container. 

  * In Arctos, go to Manage Data > Object Tracking > Create Container  
  * Select the container type you wish to create from the dropdown list under "Container Type"  
  * Enter the dimensions of your container in centimeters: a typical 81-position freezer box is 13 (W) x 5.3 (H) x 13 (L)  
  * Enter a description (not required)  
  * Select your Institution from the dropdown list  
  * Enter the barcode for the freezer box  
  * Enter a label for the freezer box (may be identical to the barcode)  
  * Select "Create Container"  
  * Once you create the container, you will see a pane on the right that allows you to edit the container, use the instructions above to set up a position grid and prepare the positions in the container  

You are now ready to start scanning (i.e., installing) barcoded vials into a freezer box (see [How to Install Tissue Cryovials into a Freezer Box](https://arctosdb.github.io/documentation-wiki/how_to/How-to-Install-Tissue-Cryovials-Into-a-Freezer-Box.html)).
