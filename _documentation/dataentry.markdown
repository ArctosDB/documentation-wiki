---
title: Date Entry
author: DLM
date: 2017-09-11
layout: default_toc
---


# Data Entry Version Two

## About

The form is highly customizable, and it is almost always worth spending some time customizing before entering data.

It is possible to customize in ways that cannot save successfully. (For example, all place-time data may be removed from the form.) The user is expected to follow documentation, have a basic understanding of data and dependencies, and act accordingly.

## Modes

Two modes are available:

1. Table View is a two-column-plus-bottom layout. Elements may be customized, but no positioning customization is available.
2. Dynamic View is a fully customizable layout. Drag any element wherever you want it; it will stay there until you move it.

## Customizing

Click 'customize' by any element; set behavior. Inline help is available. It is generally possible to set the behavior of individual elements, set the behavior of 
groups of elements, and to control how many rows are visible when applicable.

* Show makes elements visible (unless they're otherwise hidden, eg by being in a hidden row). A successful save resets the value.
* Carry causes values to persist after save.
* Hide removes values (or rows, etc.) from the form.

## Getting Started

1. You may "seed" a new record from the grid view; this simply imports saved values, which may then be changed.
2. You may pick a collection; this sets code tables without importing any values.

## How-To

### Enter lots of parts, or parts with attributes

1. Customize Parts; hide all rows
2. Customize "Extras" Parts; turn on whatever you want to see.

### Use GeoLocate

1. Customize Place/Time
2. Click the 'geolocate' shortcut, save
3. Use Geolocate


### Have a "Custom ID"

Simply set one ID type to "carry." The accompanying value can be set to behave as desired. Other_ids are only loaded when value is not empty; leaving an unaccompanied type for some 
records is not problematic.

### Enter discipline-specific attributes

Select an appropriate "helper" under customize. Note that these simply push values to the standard form; "standard" values can be further enhanced individually before saving.

### Enter Coordinates

Customize, turn on coordinate metadata and the necessary format(s).

### Use Profiles

By default, settings will be "remembered," profiles allow maintaining multiple states. This may be handy for getting a student started or working on different kinds of data. To save a profile, just click Save Profile and provide a name. To switch, click switch. Profiles can't be edited, but may be deleted by the user who created them. 


# Data Entry Version One

This document applies to the built-in single-record data entry form.

# Customizations

The form has been customized for various collections and collection types. This documentation may not apply to your workflow.

# Required fields

Required fields - usually at the request of a collection or group of collections - are yellow.


# Customizing

## Customize Form

Click Customize Form to add or remove fields, or to set field behavior. Field options are:

* Hide: The field will not be accessible on the form.
* Show: The field will be available on the form, and new records will load with blank values.
* Carry:  The field will be available on the form, and new records will load with values from the previous record.

# Disable/Enable Calendars

Turn the calendar pick off and on. Calendars may interfere with date formats other than to day (YYYY-MM-DD). Most fields are 
ISO8601 format and will accept more (YYYY-MM-DDTHH:MM:SSTZ) or less (YYYY) precision.

# Sortable

Enable to allow dragging field groups on the page. Disable to lock. Reset Default Sort to reset fieldset ordering.

# Documentation

Documentation links are provided for all nodes. All users should be familiar with documentation.

# Locality and Event picks

Providing a locality ID overrides all other locality information at load. Providing an event ID overrides all locality and event 
information at load. Search/pick tools are provided, or enter an ID and TAB to autoselect.

# GeoLocate

Enter geography and specific locality information then click GeoLocate to automatically georeference.

# Errors

Errors will be displayed at the bottom of the page. Most errors are accompanied by a summary popup notification and field coloring.

# Copy2All

The "copy2all" links copy the data from the associated field to all fields using similar data - all agents or dates, for example.

# Scientific Name

Enter a valid scientific name 
(not necessarily taxon name - see [/documentation/bulkloader.html#taxonomy](/documentation/bulkloader.html#taxonomy)),
or click "build" for a helpful tool.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/dataentry.markdown" target="_blank">here</a>.
