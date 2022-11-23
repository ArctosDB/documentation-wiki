---
title: How To Search Transactions
author: DLM
layout: default_toc
---
# How to Search Transactions

Transactions are Loans, Accessions, and Borrows. All may be accessed via one Arctos form.

## General Search

Searches using only transaction, shipping, project, and/or permit terms will find transactions of various type. This can be used to find all transactions involving an agent or using a permit, for example.

## Specific Search

Searches involving the "transaction panes" are limited to one type of transaction. (If data for multiple transaction types is provided, only one arbitrary type will be returned.)

## Search Hints

Search terms are generally ANDed. The provides the possibility to search only agents, only roles, or the intersection of agent-in-role (and any similar search).

The vertical ellipsis by some SELECT controls allows multiple terms, in which case the terms are ORed together. Find loans of status "closed" OR "returned," for example.

Most free-text search terms are by default substring case-insensitive matches. Prefixing with = where specified in the labels performs a fully-string match.

Loaned part name has a special handler to deal with both comma-lists ("any of these parts") and parts which contain commas.
* ``skull, skin`` matches ``skull`` or ``skin``
* ``=skull, skin`` matches only ``skull, skin``
* ``%skull`` matches ``skull`` or ``skull, skin``

Results Terms provides a means to control the maximum number of search results (per transaction type) or to specify a sort order.
 
## Results

Results includes transactions and linked permits, shipments, media, and projects (including publications). Shipments may be mapped by or across transaction type. CSV downloads are available. Links scroll to specific transaction panes, and buttons can hide panes.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/how-to-search-transactions.markdown" target="_blank">here</a>.
