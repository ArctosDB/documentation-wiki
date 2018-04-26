---
title: Specimen Results
author: DLM
date: 2018-04-24
layout: default_toc
---

# Specimen Results

Specimen results presents summary specimen data in a tabular format. 

## Features

### Requery

Click "show/hide search terms" near the top of the page to alter your query term(s).

### Map

Click "show map" near the top of the page to view a map. Note that the map shows only "preferred" events.

The size of the map is customizable, and may be used to limit results to the bounding box defined by the map viewport.

### Customize

Open the Tools: Map, Customize, or Download option for customization.

* Map results in BerkeleyMapper sends query results to the external BerkeleyMapper application
* Map results in BerkeleyMapper+RangeMap is available for some results sets, and will attempt to map with a rangemap overlay in BerkeleyMapper.
* Map results in Google Maps/download for Google Earth provides KML options
* Add or Remove Data Fields (columns) allows user customizations. Arctos will remember this setting for logged-in users.
* Save Search provides a portable link to the current query. That is, results will reflect current data when the link is accessed.
* Archive Results provides a portable link to the current dataset. That is, results should not change. (Curators may lock Archives, guaranteeing stability.)
* Download provides results in CSV format						
						

### Batch Edits

Operators will see a "manage" dropdown; choose an option to bulk-edit the query results, to print labels for the query results, or to download query results in various formats.

### Annotations

The "Report Bad Data" link will annotate each specimen in the query results, and notify associated collection personnel.


## Limitations

Specimen data are often much more complex than can readily be represented in a tabular format. Arctos provides embedded data objects
to address the most common situations. Associated "Expand...." buttons will "pretty print" the JSON (transform it into a human-readable format). 

Many queries also consider only "preferred" or "most important" data (often an arbitrary distinction). Contact us for more information.

### Locality

Many specimens have multiple locality associations. Only one is generally available, although specimens with multiple events 
display even count in small gree text in the GUID column. Turn on "JSON Locality" to see all locality data.

### Parts

Specimen Parts are presented as concatenated strings. Turn on "partdetail" to see individual parts (as JSON).

### Identifications

Only the current accepted identifications is shown by default. Turn on "ID History (JSON)" to see all identifications.