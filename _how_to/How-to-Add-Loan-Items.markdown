---
title: How To Add Object Loan Items
layout: default_toc
author: DLM, Teresa J Mayfield-Meyer
date: 2023-03-06, 2021-01-15, 2021-07-24
---

[Loan Documentation](https://handbook.arctosdb.org/documentation/loans.html)

[Add to Current update request](https://github.com/ArctosDB/documentation-wiki/issues/186)

[//]: #[Request an Update to this How To](https://github.com/ArctosDB/documentation-wiki/issues/new?assignees=&labels=How+To+Update&template=how-to-update.md&title=How+To+%5Badd+title%5D+update)

# How To Add Items to an Object Loan

Object loans are "standard" loans that record the loan of catalog record parts.

## From the Edit Loan Page

Click the “Add Items” button at the bottom of the page.

The standard Arctos search page will appear, but with a header outlined in red stating:  **Search, then use "Tools/Add items to Transaction" to add items to the transaction**

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/fdca1739-e4ba-494a-9f99-0383564370a9)

Search for catalog records as you normally would (e.g. using individual catalog numbers, search parameters, a saved search, or by scanning barcodes)

When the results are displayed, use the Tools Menu and seclect "add items to transaction." This action will add all results to a Loan Summary page.

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/2c0cda82-d141-46da-b303-354d3d537109)

From here, select the relevant parts you wish to add to the loan AND their updated disposition status (generally "on loan" for physical objects leaving the permises, "subsampled" for consumptive loans, or "in collection" for in-house or data loans). Disposition may be updated in bulk using the "update default disposition" tool directly above the search results. Only dispositions associated with selected parts will update upon saving (parts that are not selected/not included in the loan will retain their original disposition status even if bulk-updated). Note: Check boxes in the Add column outlined in red indicate that the specified part is already incorporated in another loan. These parts may still be added to the current loan, but the red outline serves as a flag to notify users that the object may not be physically present in the collection.

Click the "Add all checked parts to the transaction" button to finalize. You can then use the “Back to Edit Loan” hypertext at the top of the page to navigate back to the loan record. Once back in the Edit Loan form, all added parts will be viewable via the "review attached items" hypertext. Added loan items are now available to print using a Loan Invoice template.

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/a29d5178-ebcc-4baa-872d-3be15175d149)

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**

There are many customizations available on the Loan Summary page. Operators can filter results by Disposition or Part, use the "Check All" button as a shortcut to quickly add all results to the loan, and turn on or off various fields from the Show/Hide menu to reconfigure the results display.  
![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/b26ce6e6-16fe-4778-bfb7-03bb143150d4)

Other ways to add loan items: 

### Bulkloader

A tool to [bulkload loan items](https://handbook.arctosdb.org/how_to/How_To_Bulkload_Loan_Parts.html) is available. 

### Container Leaf Nodes

[How To Find Parts for a Loan Using Object Tracking (Barcodes)](https://handbook.arctosdb.org/how_to/How-To-Find-Parts%20for-a-Loan-Using%20Object%20Tracking-Existing-Freezer-Box.html

Find any container, view leaf nodes

### All Items in a Container

(Source: https://github.com/ArctosDB/arctos/issues/7611#issuecomment-2027826993)

There is a way to do this, I've done it previously for a loan of over 2000 individuals that were in small cryovials organized in 96-well plates. You go to "container:find" then type the barcode for the box with all of your samples into "Container Barcode" then click "see all collection objects in this container" (see below)


<img width="1399" alt="Screenshot 2024-03-29 at 3 44 49 PM" src="https://github.com/ArctosDB/arctos/assets/134456825/89fb30d3-9c69-4541-ad9d-3e9502151072">


Then you should have a list off all the cryovials or objects scanned into the box (not seen in the image below because my example is an empty box) and you should be able to use the buttons at the bottom to add all items to a loan and update dispositions.


<img width="940" alt="Screenshot 2024-03-29 at 3 46 22 PM" src="https://github.com/ArctosDB/arctos/assets/134456825/0c921272-0261-4272-bdec-bb90de3bfe20">


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Add-Loan-Items.markdown" target="_blank">here</a>.

[Add to Current update request](https://github.com/ArctosDB/documentation-wiki/issues/186)

 [//]: #[Request an Update to this How To](https://github.com/ArctosDB/documentation-wiki/issues/new?assignees=&labels=How+To+Update&template=how-to-update.md&title=How+To+%5Badd+title%5D+update)
