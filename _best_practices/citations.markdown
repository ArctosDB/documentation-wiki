---
title: Citing Catalog Records
layout: default_toc
authors: Dusty L. McDonald
date_updated: 2025-07-25
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)
*This is a draft document; recommendations have not been finalized.*

Citations are intended to link literature with the material on which it is based. Specifics will vary for each situation, and the following is generalized.

## Worst Practices

Do not cite vague datasets or non-resolvable identifiers. Local identifiers, "DWC Triples," a collection, or "some rats from Alaska" will all about equally useless to some future researcher hoping to replicate (or just understand) the work.

## Data Archives

No citation format is an adequate replacement for simply archiving the data examined. This is equally important in a deeply normalized system like Arctos, where there are a near-infinite number of ways of packaging the data. Services such as [Dryad](https://datadryad.org/) exist for this purpose. If only one citation is given, an archive which contains record GUIDs should be the choice.

## Record Identifiers

In addition to a data archive, Arctos record GUIDs (example: https://arctos.database.museum/guid/UAM:Ento:17972) should be listed when possible. An explicit list minimizes any chance of "drift."

## Packages of Record Identifiers

Projects and Archives provide short identifiers for groups of records, and may be a suitable citation (in addition to a data archive) when a list is not possible. Note that this approach increases the chance of drift; future actions may result in a packages which does not directly correspond with the material that was actually examined.

## After Publication

[Citations](/documentation/citation.html) should be added to each involved Arctos record, serving as a reciprocal and redundant to the ``publication --> record`` relationship established by good citations.
