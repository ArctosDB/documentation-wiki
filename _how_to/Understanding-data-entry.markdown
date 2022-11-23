---
title: How To Understand Data Entry
author: DLM, Teresa J Mayfield-Meyer
date: 2021-09-24
layout: default_toc
---

# Understanding Data Entry

This document provides a high-level overview of the catalog record data entry mechanism provided by Arctos.

## Table "Bulkloader"

All catalog record data passes through table "bulkloader." Bulkloader is a highly-denormalized (~300 columns) spreadsheet-like table which contains columns for "normal" catalog record data. 

## Other Bulkloaders

In addition to the "core" catalog record bulkloader, Arctos provides many bulkloaders for various ancillary data, such as parts and attributes. These bulkloaders are typically less-denormalized (_e.g._, one part or agent or attribute per row) than the catalog record bulkloader, and as such will deal with any number of additional items. These tools may be leveraged to handle anything which won't fit into the core catalog record bulkloader. Arctos forms will generate unique identifiers (UUIDs) to link data which has not yet been assigned a GUID with ancillary data in other bulkloaders.

## Bulkloader Process

A script runs periodically to fetch marked records from the catalog record bulkloader, verify them, and either return an error message or load them into the core tables.

## Writing to table Bulkloader

Various mechanisms for writing to the bulkloader exist. Several of these paths could eassily be used by external applications; custom data entry applications (_e.g._, for your collection, or optimized for specific purposes, or ...) are possible and practical.

### Data Entry form

Arctos provides a data entry form which writes single records to the catalog record bulkloader. This form is highly user-customizable; it is possible to hide un-needed "fields," to carry over values, and re-arrange the form layout. The form may also be code-customized for collection type (=collection_cde: Bird, Ento, etc.) and for specific collections.

### Single-record API

The Data Entry form writes via a single-record API which may be opened to other uses.

### "The Bulkloader"

A user-accessible bulkloader application is available. This application ingests CSV files and writes to the catalog record bulkloader, optionally using various cleaning and confirmation tools in the process. The application uses a browser and the HTTP protocol, and file size is a limiting factor. A few thousand records are usually possible, perhaps 50,000 records for somewhat-minimal datasets on good connections.

### Pre-Bulkloader

The pre-bulkloader is a user-accessible data formatting and cleaning tool which writes to the catalog record bulkloader. Processing is  asynchronous so, while DBA assistance for the initial load may be required, any number of records may be processed through this application.

### SQLLDR

Users with DBA access may load records through Oracle's SQLLDR tool, which has no obvious dataset size limitations 
(tested to ~500,000 records). Tools to create the SQLLDR control and data files are available.

### Custom internal forms

Various custom forms accept specific types of data and write to the catalog record bulkloader. These mostly exist in support of rapid digitization involving imaging, and are optimized in support of very specific workflows. 

### Custom external forms 

Several of the above pathways are available to external applications.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/Understanding-data-entry.markdown" target="_blank">here</a>.
