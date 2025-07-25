---
title: Specimen Citations
layout: default_toc
---

# Citations

If an unequivocal relationship exists between a particular cataloged item and
a page in the publication, then it is a Citation. Ideally, a
publication refers to items by their catalog numbers and
institutions, but data can be entered for items that were cataloged
after they were cited, or that were cited by some other identifier such
as a field number. 

## Parts of a Citation

A citation includes:

### Publication

`Citation.Publication_ID (FK) INTEGER not null`

 There cannot be a Citation until the Publication has
been included in the database. Because full citation includes a page
number, the best practice is to enter citations only when the
publication is in its final form.

### Cataloged Item

`Citation.Identification_ID (FK) INTEGER not null`

 Citations link to, and ideally create, Identifications for cataloged items.

### Publication Page Number

`Citation.Occurs_Page_Number INTEGER null`

The number of the first page on which the
specific cataloged item is mentioned. Referrals to the cataloged item on subsequent
pages within the same publication are ignored.

### Basis of Citation

`Citation.Type_Status VARCHAR(20) not null`

[`ctcitation_type_status`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcitation_type_status)

This describes the context in which the cataloged item was
cited. It is possible that one cataloged item was cited in more than one
context within a single publication. In this case, use either the first
context in which the cataloged item is cited, or the most important context in
which the cataloged item is cited. Vocabulary is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcitation_type_status).

### Cited As

`Citation.identification_ID (FK) INTEGER not null`

The Identification.Scientific_Name to which the
author(s) applied the cataloged item in the publication. Sometimes this must
be inferred from the publication because the author has not explicitly
identified individual cataloged items. For example, the whole paper is about
wolverines, *Gulo gulo*, and individual cataloged items are only listed by
catalog number. In at least one case, an author has treated a whole
family, listed the cataloged items examined, but not their identifications to
species. In this case, the cited taxonomic identification is the
family. It is preferable to create Identifications *sensu* the
publication, even when the publication does not explicitly create names
or re-identify cataloged items, as doing so supports more-detailed queries.

## Creating Citations

Citations are a linkage between a cataloged item (via [Identifications](identifications))
and a page in a publication. They contain little information, being
essentially a connection between existing sets of information. Therefore
in order to create citations, three items must already be present in
Arctos:

1.  the [publication](publications)
2.  the [cataloged item](catalog)
3.  the [cited scientific name](identifications) (Often the same as the current
    identification but not always. Therefore, we record what the
    publication said.)

Citations can be individually entered by finding the publication from
the Search -&gt; Publication/Project tabs, clicking the Citation Button,
and using the form (Citation.cfm) to enter the appropriate information. You can select the cited cataloged items by catalog number or an Other
Identifier. The form will automatically fill in the catalog number (if
an Other_ID was used), and the current taxonomic determination for the
cataloged item. You then select the scientific name by which the publication
cited the item.

## Erroneous Citations

In entering Cited As determinations and comparing them to current determinations, errors within the publication
sometimes become evident. For example the cited cataloged item is described
as a walrus in the publication, but the published catalog number
indicates a mouse… a typographical error that becomes nonsense only when
the published catalog number is resolved. We cannot correct the
publication, but we should not leave obvious errors unremarked, if for
other reason than it leaves the data in Arctos suspect. There is a
value of Basis of Citation for this situation: "erroneous citation." In
addition to using "erroneous citation" for the actual citation, it may
be possible to correct the error in Arctos with an additional (what was
meant) citation, if the author’s true meaning can be obtained or
logically inferred.

-   Can you contact the author(s) and obtain a clarification?
-   What cataloged items did the author(s) borrow from the collection?
-   Details in the paper and details of particular cataloged items may provide
    explicit possibilities.

If you can establish the author’s intention with reasonable certainty,
then create an additional citation to the correct catalog record. The
actually (and incorrectly) cited record should be designated "erroneous
citation," and Citation Remarks should say something like, "An incorrect
transcription of MVZ 123456." The second citation of the intended
record should have the appropriate value for Basis of Citation, and
Citation Remarks should say something like, "Incorrectly
cited as MVZ 125456." With this, anyone coming from the publication
should be able to find their way to the correct meaning.

## Bulk-loading Citations

In publications that cite numerous cataloged items, it is often efficient to
bulkload the citations, especially if they are in tabular form within an
electronic copy of the document. This can be done by copying and pasting
the table from the publication into a spreadsheet. It must then be
formatted to exactly match the key fields in Arctos, and exported as a
comma-delimited text file. The tool for uploading this file, and a
detailed description of the file are found from Bulkload Citations on
the Tool tab.

### Searching Citations

Searching for cataloged items by the nature of their citation, or for cataloged items 
that have been cited, can be done from the "Usage" segment of
the Arctos search form (SpecimenSearch.cfm). 

## How To

Instructions for doing specifc tasks related to Citations in Arctos (please note that "under construction" icons on pages indicate that the documentation may be incomplete or out-of-date):

 - [How To Create Citations](https://handbook.arctosdb.org/how_to/How-to-Create-Citations.html)
 - [How To Bulkload Citations](https://handbook.arctosdb.org/how_to/How-to-Bulkload-Citations.html)

See also, Publications

 - [How To Create a Publication](https://handbook.arctosdb.org/how_to/How-to-Create-a-Publication.html)
 - [How To Search Projects and Publications](https://handbook.arctosdb.org/how_to/How-to-Search-Project-Publications.html)
 - [How To Understand Deep Publication Data in Arctos](https://handbook.arctosdb.org/how_to/deep-publications.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/specimen-citations.markdown" target="_blank">here</a>.
