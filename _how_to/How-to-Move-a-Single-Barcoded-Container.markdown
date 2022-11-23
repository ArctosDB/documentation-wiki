---
title: How To Move to a Single Barcoded Container
layout: default_toc
---
# How To Move to a Single Barcoded Container

Every barcoded container has a hierarchical position in Arctos, and each level in the hierarchy has a parent-child relationship. Take a tissue vial as an example. A tissue vial is inserted into a position in a box (see tutorial on [How to Install Tissue Cryovials into a Freezer Box](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Install-Tissue-Cryovials-Into-a-Freezer-Box)), which goes into a slot in a rack, which has a position in a freezer, which is located in a room. The parent-child relationship looks like this:

* Room (parent) <---> Freezer (child)
* Freezer (parent) <---> Rack (child)
* Rack (parent) <---> Slot (child)
* Slot (parent) <---> Box (child)

When you first create a barcoded container, it goes into a container labeled the Arctos 'Universe', e.g.,

![Freezer Box in Arctos Universe](https://github.com/ArctosDB/documentation-wiki/blob/master/tutorial_images/freezerbox_in_universe.PNG)

To move a barcoded container from the 'Universe' to another location such as a barcoded slot in a rack, go to:
Manage Data ---> Object Tracking ---> Move Container

The simplest thing is to move one container at a time. Simply scan the barcode for the parent in the 'Parent Barcode' field, and the barcode for the child in the 'Child Barcode' field. Click on 'Move Container' and that's it.

Now when you search for that container in Arctos (Manage Data ---> Object Tracking ---> Find Container), it will appear in its position in the hierarchy, e.g.:

![Barcoded Container Hierarchy](https://github.com/ArctosDB/documentation-wiki/blob/master/tutorial_images/barcoded_container_hierarchy.PNG)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Move-a-Single-Barcoded-Container.markdown" target="_blank">here</a>.
