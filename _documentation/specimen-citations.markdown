---
title: Specimen Citations
layout: default_toc
---

# Specimen Citations



If an unequivocal relationship exists between a particular specimen and
a page in the publication, then it is a Citation.  Ideally, a
publication refers to specimens by their catalog numbers and
institutions, but data can be entered for specimens that were cataloged
after they were cited, or that were cited by some other identifier such
as a field number.  A specimen citation includes:



## Publication

`Citation . Publication_ID (FK) INTEGER not null`


 There cannot be a Citation until the Publication has
been included in the database.  Because full citation includes a page
number, the best practice is to enter citations only when the
publication is in its final form.



## Specimen

`Citation . Identification_ID (FK)INTEGER not null`


 Citations link to, and ideally create, Identifications.




## Publication Page Number

`Citation . Occurs_Page_Number INTEGER null`


 is the number of the first page on which the
specific specimen is mentioned.  Referrals to the specimen on subsequent
pages within the same publication are ignored.




## Basis of Citation

`Citation . Type_Status VARCHAR(20) not null`

[`ctcitation_type_status`](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcitation_type_status)


 describes the context in which the specimen was
cited.  It is possible that one specimen was cited in more than one
context within a single publication.  In this case, use either the first
context in which the specimen is cited, or the most important context in
which the specimen is cited.  Vocabulary is controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcitation_type_status).




## Cited As

`Citation . identification_id (FK) INTEGER not null`


 is the Identification.Scientific_Name to which the
author(s) applied the specimen in the publication.  Sometimes this must
be inferred from the publication because the author has not explicitly
identified individual specimens.  For example, the whole paper is about
wolverines, *Gulo gulo*, and individual specimens are only listed by
catalog number.  In at least one case, an author has treated a whole
family, listed the specimens examined, but not their identifications to
species.  In this case, the cited taxonomic identification is the
family. It is preferable to create Identifications *sensu* the
publication, even when the publication does not explicitly create names
or re-identify specimens, as doing so supports more-detailed queries.



### Creating Specimen Citations

Citations are a linkage between a cataloged item (via Identifications)
and a page in a publication. They contain little information, being
essentially a connection between existing sets of information. Therefore
in order to create citations, three items must already be present in
Arctos:

1.  the publication
2.  the cataloged item
3.  the cited scientific name (Often the same as the current
    identification but not always.  Therefore, we record what the
    publication said.)

Citations can be individually entered by finding the publication from
the Search -&gt; Publication/Project tabs, clicking the Citation Button,
and using the form (Citation.cfm) to enter the appropriate information. 
You can select the cited specimens by catalog number or an Other
Identifier.  The form will automatically fill in the catalog number (if
an Other_ID was used), and the current taxonomic determination for the
specimen.  You then select the scientific name by which the publication
cited the item.



### Erroneous Citations

In entering Cited As determinations and
comparing them to current determinations, errors within the publication
sometimes become evident.  For example the cited specimen is described
as a walrus in the publication, but the published catalog number
indicates a mouse… a typographical error that becomes nonsense only when
the published catalog number is resolved.  We cannot correct the
publication, but we should not leave obvious errors unremarked, if for
other reason than it leaves the data in Arctos suspect.  There is a
value of Basis of Citation for this situation: "erroneous citation."  In
addition to using "erroneous citation" for the actual citation, it may
be possible to correct the error in Arctos with an additional (what was
meant) citation, if the author’s true meaning can be obtained or
logically inferred.

-   Can you contact the author(s) and obtain a clarification?
-   What specimens did the author(s) borrow from the collection?
-   Details in the paper and details of particular specimens may provide
    explicit possibilities.

If you can establish the author’s intention with reasonable certainty,
then create an additional citation to the correct specimen.  The
actually (and incorrectly) cited record should be designated "erroneous
citation," and Citation Remarks should say something like, "An incorrect
transcription of MVZ 123456."  The second citation of the intended
record should have the appropriate value for Basis of Citation, and
Citation Remarks should say something like, "Specimen was incorrectly
cited as MVZ 125456."  With this, anyone coming from the publication
should be able to find their way to the correct meaning.



## Bulk-loading Citations

In publications that cite numerous specimens, it is often efficient to
bulkload the citations, especially if they are in tabular form within an
electronic copy of the document. This can be done by copying and pasting
the table from the publication into a spreadsheet. It must then be
formatted to exactly match the key fields in Arctos, and exported as a
comma-delimited text file. The tool for uploading this file, and a
detailed description of the file are found from Bulkload Citations on
the Tool tab.



### Searching Specimen Citations

Searching for specimens by the nature of their citation, or for
specimens that have been cited, can be done from the "Usage" segment of
the Arctos search form (SpecimenSearch.cfm). Type specimens can also be
sought using Nature of ID = type specimen in the Identification and
Taxonomy segment of the same form. Because this kind of Nature of ID
does not require a citation, its use has been inconsistent.
