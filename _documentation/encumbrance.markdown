---
title: Encumbrance
author: DLM
layout: default_toc
---
# Encumbrance

In the strictest sense, an Encumbrance restricts the visibility of catalog record to only the collection managers. Encumbrances should not be confused with [permits](https://handbook.arctosdb.org/documentation/permits.html), which involve acceptable use of materials or information.


## encumbrance_id

Internal key

## encumbering_agent_id

Agent making, and able to remove, the encumbrance. This agent may act in an advisory role; final authority to remove encumbrances rests with the collection.


## made_date

Date on which the encumbrance became active.

## expiration_date

Date on which the encumbrance becomes inactive. All encumbrances are temporary, and encumbrances must be periodically reviewed. De-accession should be considered for permanently-encumbered specimens. Yearly email notifications are provided to collection staff, and encumbrances may be extended (in 5-year increments) indefinitely.  To extend the term of an encumbrance, change the expiration date. **Note:** the expiration date cannot be changed to a date more than five years in the future from the date the edit is being made. Expiration date is a triggering event – encumbrances are automatically retracted when the expiration date is reached.


## encumbrance

Text description or name.

## encumbrance_action

 Foreign key --> [ctencumbrance_action](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctencumbrance_action)


## remarks

Remarkable information

----------


# coll_object_encumbrance

Table coll_object_encumbrance links encumbrances to catalog records


## encumbrance_id

Foreign key --> encumbrance


## collection_object_id


Foreign key --> catalog_item

# security

Do not use Encumbrances for truly sensitive information.

# legal

Do not use encumbrances to mask illegal activity.


--------

# Related

Note that Encumbrances are but one way to restict access to data. Many code tables restrict data of certain types, and locality attribute [locality access](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlocality_attribute_type#locality_access) provides a mean to share or withhold any "place and time" data, for example.


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/encumbrance.markdown" target="_blank">here</a>.
