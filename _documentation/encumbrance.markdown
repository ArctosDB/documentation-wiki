---
title: Encumbrance
author: unknown, Teresa J. Mayfield-Meyer
date: 2023-01-26
layout: default_toc
---
# Encumbrance

Encumbrances restrict the use of catalog records or record data and are often used to mask information such as collectors, preparators, field numbers, attributes, and remarks.

[List of active Arctos encumbrances](https://arctos.database.museum/Reports/encumbranceByCollection.cfm)

Encumbrances are applied to [Cataloged Items](/documentation/catalog). Attributes of an encumbrance include an encumbering [agent](/documentation/agent), an encumbrance name, an expiration date, and an encumbrance action.

Encumbrances should be used to:

-   Mark erroneous records for deletion. (Records for which a cataloged object
    no longer exists should NOT be deleted, but should rather have
    disposition updated.)
-   **Restrict usage** of records conditionally placed in
    public collections that should still remain publicly visible.
-   Restrict coordinate data from sensitive collecting
    events or where required by law. Removing coordinate data
    removes much of the "discoverability" of records, and will exclude
    those records from many searches. Use this encumbrance with
    great caution. **TIP** For sensitive localities, Arctos provides an alternate method with more flexibility. For information, read [Encumbering Locality](/how_to/How-to-Encumber-Locality.html#encumbering-locality).

Encumbrances should NOT be used to:

-   Mask the entire record for specimen/objects under active research. **Restrict usage** is sufficient to protect any existing interests in the record, and the record remains available, upon approval of the encumbering agent, for other non-conflicting research.
-   Mask illegal activity, including a lack of permits.
-   Mask "sensitive" records such as those records on CITES lists or records which have been tested for disease.
-   Hide "messy" data of any sort.
-   Mask truly sensitive data. While we strive to effectively implement Encumbrances, Arctos has no security staff and should not be considered a secure system. Don’t use Encumbrances to protect extremely sensitive information.

## Encumbering Agent

`Encumbrance . Encumbering_Agent_ID NUMBER(22) not null`

The encumbering [agent](/documentation/agent)) is the person or organization requiring the restriction. This agent may act in an advisory role; final authority to remove encumbrances rests with the collection.

## Encumbrance Name

`Encumbrance . Encumbrance VARCHAR2(60) not null`

Encumbrances are described with a name. This name should be as general as possible with the aim of avoiding separate encumbrances when the encumbering agent and the encumbering action are the same. (If possible, additional specimens should be added to existing encumbrances.) Do **not** just copy-paste the encumbrance action here.

## Expiration Date

`Encumbrance . Expiration_Date DATE(7) not null`

All encumbrances are temporary, and encumbrances must be periodically reviewed. De-accession should be considered for permanently-encumbered specimens. Yearly email notifications are provided to collection staff, and encumbrances may be extended (in 5-year increments) indefinitely. 

To extend the term of an encumbrance, change the expiration date. **Note:** the expiration date cannot be changed to a date more than five years in the future from the date the edit is being made.

Expiration date is a triggering event – encumbrances are automatically retracted when the expiration date is reached.

## Encumbering Records

See [How to Create an Encumbrance](http://handbook.arctosdb.org/how_to/How-to-Create-an-Encumbrance.html)
       
## Un-Encumbering Records

1.  Find the records from which you wish to remove an encumbrance using SpecimenSearch.
2.  From the Manage tool, choose Encumbrances. You should now see a summary of your records at the bottom of the page, and the encumbrance finder at the top.
3.  Find the appropriate encumbrance by entering search criteria and clicking Find Encumbrance. Under the appropriate encumbrance, click the "Remove Listed Items From This Encumbrance" button.

When the screen refreshes, the specimens are no longer in the selected encumbrance.

## How To

Instructions for doing specifc tasks related to Encumbrances in Arctos (please note that "under construction" icons on pages indicate that the documentation may be incomplete or out-of-date):

 - [How to Create an Encumbrance](http://handbook.arctosdb.org/how_to/How-to-Create-an-Encumbrance.html)
 - [How to Delete a Catalog Record](https://handbook.arctosdb.org/how_to/How-to-Delete-Specimen-Records.html)
 - [How to Encumber Locality Data](https://handbook.arctosdb.org/how_to/How-to-Encumber-Locality.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/encumbrance.markdown" target="_blank">here</a>.
