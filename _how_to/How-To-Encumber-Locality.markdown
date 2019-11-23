---
title: How To Encumber Locality Data
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2019-11-22
---
# How to Encumber Locality Information

[Encumbrances](/documentation/encumbrance) restrict certain aspects of specimen/lot records from the public view, usually to protect personal identity, proprietary data, or the provenance of a vulnerable population/habitat. Many encumbrances are temporary and may be reversed when specified conditions change (publication of research, expiration or retraction of encumbering legislation, eradication of critical habitat where specimen/lots were collected, etc.). This document describes the various ways that locality information may be encumbered in Arctos.

## Encumbering Coordinates

If the only locality data that needs to be encumbered are coordinates, using the encumbrance funcionality in Arctos may be the best option. See [How to Create an Encumberance](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_how_to/How-to-Create-an-Encumbrance.markdown)

Some items to be aware of when using this option:

 - Encumbrances expire, so if no one renews an encumbrance upon its expiration, the data will become publicly available when the encumbrance expires.
 - Coordinates can often be inferred from other locality data.

## Encumbering Locality

When it is necessary to encumber specific locality or to more permanently encumber locality information, another option is avaialable.  Adding the geology attribute "access" with the value of "private" to any locality will hide the locality both in catalog records and in locality searches. When using this option, it is adviseable to create two specimen events for any affected catalog records, one with the detailed locality information and the private access geology attribute, and a second with a the most general locality information that can be made available that does not include the private access geology attribute.
