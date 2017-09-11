---
title: Date Entry
author: DLM
date: 2017-09-11
layout: default_toc
---

# Data Entry form

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

