---
title: How To Understand Genbank-Arctos Communication
author:DLM?
date:
layout: default_toc
---
# Arctos and GenBank

This document provides a high-level overview of Arctos/GenBank interoperability.

## Stable GUIDs

The basis of inbound communication from any resource (GenBank, publication citations, related specimens, etc.) is
a stable target. Arctos provides stable resolvable specimen GUIDs, and maintains them using various tools and
services (eg, redirects).

## Registration

GenBank has a registration of Arctos "GUID Prefixes" and can use them in conjunction with catalog numbers
 to form links to Arctos via GenBank's specimen_voucher field.
These serve as a confirmation (or caution), and allow GenBank citations to be discovered even with an incomplete data stream.

## Other IDs

Actionable OtherIDs include a base_url, which when appended to the value of the identifier can form a link to related
resources. One such actionable OtherID type is GenBank. Adding GenBank identifiers to specimen records automatically creates
a link to GenBank.

## LinkOuts

Arctos provides a nightly snapshot of specimens with GenBank numbers to the GenBank LinkOut system. This forms reciprocal
links to Arctos, even without a resolvable specimen_voucher, and serves as a verification data check.

## GenBank MIA tool

Arctos provides a reporting service which monitors GenBank for un-linked specimens.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/Genbank-Communication.markdown" target="_blank">here</a>.
