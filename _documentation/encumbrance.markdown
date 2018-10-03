---
title: Encumbrance
layout: default_toc
---

# Encumbrance

Encumbrances restrict the use of specimens or specimen data.
Encumbrances are applied to [Cataloged Items](/documentation/catalog). Attributes of an
encumbrance include an encumbering [agent](/documentation/agent), an encumbrance name, an
expiration date, and an encumbrance action.

Encumbrances should be used to:

-   Mark erroneous records for deletion. (Records for which a specimen
    no longer exists should NOT be deleted, but should rather have
    disposition updated.)
-   **Restrict usage** of specimens conditionally placed in
    public collections that should still remain publicly visible.
-   Restrict coordinate data for specimens from sensitive collecting
    events or where required by law. Removing coordinate data
    removes much of the "discoverability" of specimens, and will exclude
    those specimens from many searches. Use this encumbrance with
    great caution.

Encumbrances should NOT be used to:

-   Mask the entire record of specimens under active research. **Restrict usage** is sufficient to protect any existing interests in the specimen, and the specimen remains available, upon approval of the encumbering agent, for other non-conflicting research.
-   Mask illegal activity, including a lack of permits.
-   Mask "sensitive" records such as those records on CITES lists or records which have been tested for disease.
-   Mask truly sensitive data. While we strive to effectively implement Encumbrances, Arctos has no security staff and should not be
    considered a secure system. Don’t use Encumbrances to protect extremely sensitive information.

Encumbrances are often used to mask information such as collectors, preparators, field numbers, attributes, and remarks. A 
[list of active Arctos encumbrances](http://arctos.database.museum/info/encumbrances) is available.

## Encumbering Agent

`Encumbrance . Encumbering_Agent_ID NUMBER(22) not null`

The encumbering [agent](/documentation/agent)) is the person or organization requiring the restriction. This agent may act in an advisory role; final authority to remove encumbrances rests with the collection.

## Encumbrance Name

`Encumbrance . Encumbrance VARCHAR2(60) not null`

Encumbrances are described with a name. This name should be as general as possible with the aim of avoiding separate encumbrances when the encumbering agent and the encumbering action are the same. (If possible, additional specimens should be added to existing encumbrances.) Do **not** just copy-paste the encumbrance action here.

## Expiration Date

`Encumbrance . Expiration_Date DATE(7) not null`

All encumbrances are temporary, and encumbrances must be periodically reviewed. De-accession should be considered for permanently-encumbered specimens. Yearly email notifications are provided to collection staff, and encumbrances may be extended (in 5-year increments) indefinitely. Expiration date is a triggering event – encumbrances are automatically retracted when the expiration date is reached.

## Encumbering Specimens

See [How to Create an Encumberance](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_how_to/How-to-Create-an-Encumbrance.markdown)
       
## Un-Encumbering Specimens

1.  Find the specimens from which you wish to remove an encumbrance using SpecimenSearch.
2.  From the Manage tool, choose Encumbrances. You should now see a summary of your specimens at the bottom of the page, and the encumbrance finder at the top.
3.  Find the appropriate encumbrance by entering search criteria and clicking Find Encumbrance. Under the appropriate encumbrance, click the "Remove Listed Items From This Encumbrance" button.

When the screen refreshes, the specimens are no longer in the selected encumbrance.
