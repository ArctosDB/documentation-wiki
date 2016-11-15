---
title: Other Identifying Numbers (Other IDs) and Relationships
layout: default_toc
---

# Other Identifying Numbers (Other IDs) and Relationships

<div class="anchors">

<div class="anchortitle">

Concepts

</div>

[Other Identifiers](#other_id)

[Other ID Type](#other_id_type)

[Other ID Number](#other_id_number)

[Other ID References](#other_id_references)

<div class="anchortitle">

Procedures

</div>

[General Guidelines](#guidelines)

[Forming URIs](#forming_uri)

[Bulkloader Considerations](#bulkload_otherid)

[Searching](#search_other_id)

</div>

[](){.infoLink}

<span style="font-size:x-small">Other IDs (Identifiers)</span>

**Other IDs** (identifiers) are identifiers applied to specimens. These
identifiers may make identify specimens (as in the case of collector
numbers), reference other resources (*e.g.*, GenBank numbers), or form
relationships among specimens (such as hosts of parasites).

[](){.infoLink}

```


Coll\_Obj\_Other\_ID\_Num . Other\_ID\_Type

VARCHAR2(75) not null

ctcoll\_other\_ID\_type


```

**Other Identifier Type** describes the kind of identifier. This field
uses a [controlled
vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_other_id_type).
Users who are logged in can choose one Other ID Type to be their
“preferred identifier.”   Your preferred identifier will then be the
default displayed in several forms.

[](){.infoLink}

This same vocabulary can be used to systematically form URLs from
pre-set strings plus Other ID values. For example, the complete
code-table entry for GenBank is

[![](/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am.png "Screen Shot 2012-03-07 at 9.48.25 AM"){.alignnone
.size-full .wp-image-970 width="640" height="62"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am.png 1146w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am-300x29.png 300w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am-768x75.png 768w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am-1024x100.png 1024w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am-250x24.png 250w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am-550x54.png 550w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am-800x78.png 800w"}](/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-48-25-am.png)

The columns above are “other ID type,” “definition,” and “base\_URL.”

The full base\_url is

<http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&db=nucleotide&doptcmdl=GenBank&term=>

and the code from, for example,
<http://arctos.database.museum/guid/UAM:Mamm:86892>

is

[![](/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-51-45-am.png "Screen Shot 2012-03-07 at 9.51.45 AM"){.alignnone
.size-full .wp-image-971 width="545" height="84"
sizes="(max-width: 545px) 100vw, 545px"
srcset="/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-51-45-am.png 545w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-51-45-am-300x46.png 300w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-51-45-am-250x39.png 250w"}](/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-9-51-45-am.png)

returning the link to the GenBank record for that specimen

<http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&db=nucleotide&doptcmdl=GenBank&term=EU139271>

[](){.infoLink}

```

Coll\_Obj\_Other\_ID\_Num.Other\_ID\_Prefix VARCHAR2(60)

Coll\_Obj\_Other\_ID\_Num.Other\_ID\_Number NUMBER

Coll\_Obj\_Other\_ID\_Num.Other\_ID\_Suffix VARCHAR2(60)

```

**Other Identifier** is the value of an Other ID. Data are stored in
three fields:

-   Prefix (text)
-   Number (integer)
-   Suffix (text)

which are automatically concatenated into display\_value. Display value
can, for most purposes, be considered “the number”; the tripartite
structure exists primarily to facilitate numerical sorting.

The main purpose of Other IDs is a link between specimen data and other
related information, such as collector notes or related specimen
records. Therefore, format can be critical: “ABC 123,” “ABC123,”
ABC-123,” and “ABC0123,” are not equivalent values.

Many other IDs are alphanumeric, and there is often a need to sort,
order, and increment them as if they were numeric, it is sometimes
desirable to treat them as true numbers, but with the option of
prefixes, suffixes, or both. Any (but not all) of these three components
may be null.

There is no built-in concatenation operator, and the integer component
does not maintain leading zeroes. How data should be entered is
primarily a function of how the data might be used. GenBank number
“ABC123” should probably be entered into Prefix; it will never be sorted
by the integer component, and adding artificial splits just increases
the chance of errors. Collector number “ABC-123-2014” (where ABC is
perhaps the collector’s initials, 2014 is a “series designator,” and 123
is the 123d specimen in the series) should probably be split out into
prefix, number, and suffix to facilitate sorting.

Examples:

  Desired Result   ID Type            Prefix         Integer   Suffix   Explanation
  ---------------- ------------------ -------------- --------- -------- -----------------------------------------------------------------------------------------------------------------------------------
  ABC123           GenBank            ABC123         NULL      NULL     GenBank number are not usefully sortable; just put them into prefix.
  ABC123XYZ        collector number   ABC            123       XYZ      Allows sorting by integer component
  ABC-123-XYZ      collector number   ABC-           123       -XYZ     The concatenation character (here, dash) must be included
  ABC-0123-XYZ     collector number   ABC-0          123       -XYZ     The integer component will NOT retain leading zeroes. See next row.
  ABC-0123-XYZ     collector number   ABC-0123-XYZ   NULL      NULL     It may not be worthwhile to try to separate a cryptic “integer component,” especially if the number is not part of a large series

[Top](#top){.infoLink}

<span style="font-size:larger;font-weight:bold">ID References</span>

ID References is a [controlled
vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctid_references)
defining the item to which the other ID was originally applied. “Self”
is the value used when an ID was applied to the current item; all other
values create a (sometimes-resolvable) relationship to another item.
Note that the “other half” of an ID-created relationship does not
necessarily resolve to a cataloged item (though it should), and is not
limited to other records in Arctos (relationships can be formed to any
online resource).

Relationships should be reciprocal, and all possible relationships
should be made explicitly; there is nothing automatic or reciprocal
about the system. (Arctos will email suggested reciprocal relationships;
accepting them is 2 clicks.) See below for more information in
specificity of identifiers, but relationships should be made to
resolvable identifiers; ones with a URL in the code table.

Relationships (non-self references) express a
subject-relationship-object directionality in which the “subject” is the
current record and the object is the indicated record.  Example, given
three cataloged items:

-   ABC:123 (a parent of ABC:124 and ABC:125)
-   ABC:124 (a child of ABC:123)
-   ABC:125 (a child of ABC:123)

the following Other IDs would be appropriate for the listed items:

  Item      OtherID   IDReferences
  --------- --------- --------------
  ABC:123   ABC:124   parent of
  ABC:123   ABC:125   parent of
  ABC:124   ABC:123   offspring of
  ABC:125   ABC:123   offspring of
  ABC:125   ABC:124   sibling of
  ABC:124   ABC:125   sibling of

[Top](#top){.infoLink}

<span style="font-size:larger;font-weight:bold">General
Guidelines</span>

Be as specific and complete as possible in choosing both an Other ID
Type and assigning an Other ID Number. Everything that follows is an
elaboration of this simple concept.

Other ID numbers are in a 1:zero-or-one-or-many relationship with
Cataloged Items. There is no limit to the number of Other IDs that may
be assigned to a catalog item, and there is no implication that IDs must
be unique, particularly identifying, or even useful. Capture every
identifier associated with a specimen – someone at some time considered
the identifier useful, and may wish to locate the specimen using it.

Loaned specimens occasionally return with de-facto other IDs (in the
form of attached barcodes, GenBank numbers, “personal numbers,” etc.).
Record all these as Other IDs.

The vast majority of the current 150 (one hundred and fifty!) ID types
in Arctos are  useless. For example, there are 6 identifier types
referencing MVZ, only one of which has a definition:

[![](/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am.png "Screen Shot 2012-03-07 at 10.01.52 AM"){.alignnone
.size-full .wp-image-972 width="640" height="129"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am.png 809w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am-300x61.png 300w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am-768x156.png 768w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am-250x51.png 250w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am-550x111.png 550w, /images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am-800x162.png 800w"}](/images/classic-uploads/2012/03/screen-shot-2012-03-07-at-10-01-52-am.png)

Considering that the one and only mission of Other Identifiers is to
serve as a hopefully-unique “name” for specimens, it is hard to imagine
what of value might be lost if all those were merged into something like

Term: **MVZ: Museum of Vertebrate Zoology**

Defintion: **Various inactionable identifiers assigned by the MVZ**

Better than “MVZ” would be the identifier type “MVZ:Bird,” which in
conjunction with a base\_url could serve as a [GUID](catalog/#guid) to
specimens. (Note that this example also works from outside the MVZ – for
example, if the MSB Bird Collection had co-cataloged an MVZ specimen.)

Actionable Other IDs (at least those that can or could be used to form
URIs) should always be recorded as specific types. Everything else is
subject to curatorial discretion.

[Top](#top){.infoLink}

<span style="font-size:larger;font-weight:bold">Bulk-loading
Rules:</span>

The bulk-loader accepts a single string which is parsed out into three
fields at runtime. Strangely formatted strings may be manually entered
into the correct fields under Specimen Detail.

The specimen bulk-loader has only one field for (each of several) Other
IDs. At load, the values provided in this field are parsed into
individual fields according to the following rules

-   Integers are loaded as Number
-   Square brackets ( <span style="font-weight:bold">\[</span> and <span
    style="font-weight:bold">\]</span> ) may be used to explicitly
    define the numeric portion of an identifier
-   Curly brackets ( <span style="font-weight:bold">{</span> and <span
    style="font-weight:bold">}</span> ) may be used <span
    style="font-weight:bold">around the entire Identifier only</span>

    to force the Identifier into Prefix. This is most useful when
    leading zeros would otherwise be lost in the numeric portion of
    the Identifier.
-   Strings consisting on a single alpha character followed by a
    number (V12345) are split into Prefix and Number (<span
    style="font-weight:bold;font-style:italic">V</span> and <span
    style="font-weight:bold;font-style:italic">12345</span>, respectively)
-   Strings consisting of a number and a single alpha character (12345a)
    are split, as above, into Number and Suffix
-   Strings containing one or two “separator characters” ( | – . ; ) are
    split at those characters.
-   The results of the above are checked to ensure that Number is an
    integer
-   Any errors or ambiguities result in the entire input being recorded
    as Prefix

Examples:

  Input         Prefix    Number   Suffix    Display     Explanation
  ------------- --------- -------- --------- ----------- --------------------------------------------
  v12345        v         12345    NULL      v12345      One character plus number.
  v-12345       v-        12345    v-12345   v-12345     Split at a separator character.
  v-12345-1     v-        12345    -1        v-12345-1   Split at separator characters.
  1\[12345\]1   1         12345    1         1123451     Number explicitly defined.
  1-abc-2       1-abc-2   NULL     NULL      1-abc-2     Value not numeric.
  \[1\]-abc-2   NULL      1        -abc-2    1-abc-2     Number explicitly defined.
  v-00001       v-        1        NULL      v-1         Leading zeros are not stored with NUMBERs.
  {v-00001}     v-00001   NULL     NULL      v-00001     {} force to prefix
  \[1\]-abc-2   NULL      1        -abc-2    1-abc-2     Number explicitly defined.

[]()

**Searching by Other ID:** Most searches by Other ID match text strings
(or substrings) to the concatenated value of Other ID (Prefix + Other ID
Number + Suffix). To **search by the integer component** (Other ID
Number) of an Other ID:

1.  Click Customize on the Identifiers pane.
2.  Change “Show 3-part ID Search” to “yes” and click “Close.”
3.  In the Number box, enter a range of values, *e.g.*, “50000-50110.”
4.  The submitted SQL is
    ` ...AND customIdentifier.other_id_type = 'ALAAC' AND customIdentifier.other_id_number between 50000 and 50110 `

Note that this relies on having other IDs entered as a 3-part number.
Many Other IDs have been entered entirely in Prefix. Note also that you
may specify Prefix and/or Suffix in the 3-part search boxes to produce
SQL like:
` ...AND customIdentifier.other_id_type = 'ALAAC' AND upper(customIdentifier.other_id_prefix) LIKE '%I TYPED THIS IN THE PREFIX BOX%' AND customIdentifier.other_id_number between 50000 and 50110 `

[](){.infoLink}

The “**contains/is/in list**” option works as follows:

-   ***contains*** matches substrings of the concatenation (display
    value), so that search term “1” finds “1” and “12” and “21”
-   ***is*** matches the entire concatenation. Search term “1” finds
    only “1”, not “11” or “{space}1”
-   ***in list*** matches entire terms, with **<span
    style="color:#993300">delimiters and spaces removed from the search
    term</span>**. Search terms “1, 2”, “1,2”, “1 2”, “1;2” all find
    exactly and only “1” and “2”. There is no way by which an “in list”
    search can find other ID “1 2” or “1;2”; use one of the other
    options to find such values.

The specimen bulkloader has only one field for (each of several) Other
Identifiers. At load, the values provided in this field are parsed into
individual fields according to the following rules.

-   Integers are loaded as Number
-   Strings consisting on a single alpha character followed by a
    number (V12345) are split into Prefix and Number (<span
    style="font-weight:bold;font-style:italic">V</span> and <span
    style="font-weight:bold;font-style:italic">12345</span>, respectively)
-   Strings consisting of a number and a single alpha character (12345a)
    are split, as above, into Number and Suffix
-   Strings containing one or two “separator characters” (| – . 😉 are
    split at those characters.
-   The results of the above are checked to ensure that Number is an
    integer
-   Finally, the re-concatenated value is checked against the original.
    If they don’t match, the original becomes Prefix.

Examples:

  Input         Prefix        Number   Suffix    Display     Explanation
  ------------- ------------- -------- --------- ----------- ------------------------------------------------------------
  v12345        v             12345    NULL      v12345      One character plus number
  v-12345       v-            12345    v-12345   v-12345     Split at a separator character
  v-12345-1     v-            12345    -1        v-12345-1   Split at separator characters
  1\[12345\]1   1\[12345\]1   NULL     NULL      1123451     Brackets are treated as characters.
  1-abc-2       1-abc-2       NULL     NULL      1-abc-2     Number is not numeric
  v-00001       v-00001       NULL     NULL      v-00001     Above rules would lead to dropped leading zeroes in Number

See also [Searching Arctos](catalog/#srch2)
