---
title: Component Loaders
author: DLM
date: 2025-08-21
layout: default_toc
---
# Component Loaders and Unloaders

Component Loaders are an ecosystem of tools which work asynchronously, and so therefore can generally deal with any number of operations without fear of overwhelming the always-limited infrastructure.


## Adding Data

All Component loaders may be directly interacted with, and each will provide a data template (which is also the only authoritative source of information). Additionally, there are many UI shortcuts which write to component loaders. An API is possible but not implemented as of this writing.


## Keys

Component loaders generally follow the Arctos [Identifier Convention](/documentation/developer-guide.html#identifier-convention).

## Status

Every component loader has a 'status' column. A value of ``autoload`` indicated the record is ready for processing; any other value will be ignored. It is usually possible to load data with status to the loaders, providing a mechanism to beging processing immediately.

## Success

A successful run generally results in the record being deleted from the tool. A few lookup tools do not follow this model; such behavior is documented in the tools.

### Errors

Occasionally a cryptic error will be returned in status; contact us for help.


## Permissions

Permissions vary across tools, but ``manage_records`` is generally required for bulk operations. Users with this role are expected to have a GitHub address; those without may have problematic data transferred to CSV without notice.

## Order of Operations

A UI which provides comprehensive runtime information, and allows user-based intra-tier sorting, is available.

## Tiers

See https://github.com/ArctosDB/dev/issues/507; tiers are no longer available, all run order is user-controlled.


## General Guidelines

- Arctos is case-sensitive. JOHN DOE is not the same value as John Doe. Leading and trailing spaces and other non-printing characters matter.
- Be sure anything coming from other applications (especially Microsoft products) has not changed field length, precision,
or other attributes. Watch dates and non-integer numbers (such as decimal latitude) most closely.
- The component loaders generally do precisely what they're documented to do, and don't do anything they're not documented to do. Please do not make any assumptions, including that behavior in one tool will be applicable to any other.




## Edit this Documentation

If you see something that needs to be edited in this Documentation, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/componentloader.markdown).
