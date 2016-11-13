# Container 

<div class="anchors">

<div class="anchortitle">

Model

</div>

[Container Type](#container_type)\
[Barcode](#barcode)\
[Label](#label)\
[Description](#description)\
[Install Date](#install_date)\
[Remarks](#remarks)\
[Print Flag](#print_flag)\
[Dimensions](#width_height_length)\
[Positions](#number_of_positions)

<div class="anchortitle">

Usage

</div>

[General Procedure](#general)\
[Object Tracking in the field](#field)\
[Object Tracking without Barcodes](#nobarcodes)\
[Make a Freezer Box with Positions](#freezerbox)\
[FAQ](#faq)\
[General Usage Guidelines](#usage)\
[Purchase Guidelines](#purchase)

</div>

[]()\
Arctos Object Tracking in a nutshell
------------------------------------

-   “Containers” are of two categories:
    1.  All Parts are (also) containers.
    2.  User-defined containers are whatever someone says they are –
        tubes, tube positions in freezer boxes, boxes, shelves, ranges,
        buildings, institutions, whatever.
-   All containers have exactly one parent container.

That is the functional model in its entirety. Physical specimen-bits ARE
containers, and they can be put into other containers, which are
arbitrary curatorial declarations hopefully arranged in some useful
fashion, such as bones in boxes on shelves. Barcodes (“machine-readable
code” – 2D codes, RFID, etc.) are just machine-readable proxies to
container\_id. Labels are (less reliable) human-readable proxies to
container\_id. Dimensions, container\_type, procedures to disallow
infinite recursion, etc. – everything else about the model – are
attempts to prevent human errors or provide useful information about or
from containers. (All such clues are probably unnecessary in a perfect
and uniform system, but with the great diversity present in Arctos a
remark indicating the color of a box or location of a room is
occasionally valuable.)

The Model
---------

[Collection Objects](/documentation/parts/) are physically located in
containers, and the concept of Containers reflects that reality. Not
only are collection objects located in containers, but containers are
(optionally) located within larger containers and this relationship is
reflected in a recursive, parent-child relationship. Thus, every
container has one parent container, except for “Container Zero” (the
Parentless Void). For example, a tissue sample is typically in a
**cryovial**, within a **position** in a **freezer box**, within a
**position** in a **freezer rack**, within a **freezer** in a
**room**…seven containers.

With each container uniquely labeled with a barcode, tracking objects is
done by scanning a new parent-container ID into the record of a child
container. In the example above, the approximately 1,300 samples in a
freezer rack can be tracked from one freezer to another by the scanning
barcode on the freezer rack and its new parent ID (the barcode on the
freezer).\

<div class="fldDef">

Container . Container\_Type\
VARCHAR(20) not null\
[ctcontainer\_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcontainer_type)

</div>

**Container Type:** Vials, jars, boxes, shelves, and rooms are all
Container Types.
[Vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCONTAINER_TYPE)
is controlled, and should be limited to unambiguous and mutually
exclusive kinds of containers.

The Container Type “Position” is locked by programmed logic within its
Parent Container. Examples of Positions include entities which cannot be
physically moved from their Parent Container such as slots within
freezer racks, slots for vials within freezer boxes, and positions for
racks within freezers. In order create a Position, a Parent Container
must be assigned.

The various “label” container types are for processing. “Labels” may
generally not have parents or be children, and should be changed to some
other container type for usage. For example, one might purchase 100,000
“cryovial label” tags intended for the next several years use, and
change them to “cryovial” 1,000 at a time. A color-coding system is
useful.

 

<div class="fldDef">

Container . Parent\_Container\_id\
NUMBER not null

</div>

**Parent Container:**\
This is the value that identifies the container into which another
(child) Container has been placed. The value is not displayed in
applications because Parent Containers are generally displayed by their
Labels and entered into forms by their Barcode.

[](#top){.infoLink}

<div class="fldDef">

Container . Barcode\
VARCHAR(50) null

</div>

**Barcode:** Within the database, a barcode is a string of characters
unique to a container. Most barcode values are meaningless “dumb
numbers” that serve simply to associate a physical container with the
information about the container.

On labels, these characters are typically represented in one of several
possible machine-readable fonts. Code Three of Nine (usually called Code
39), Code 128, and the two-dimensional DataMatrix codes are being used
at this time. Most modern one-dimensional scanners will automatically
recognize most one-dimensional codes, and most two-dimensional scanners
will recognize both one-dimensional and two-dimensional codes. RFID,
NFC, or any other method by which a machine may interrogate a tag, are
also acceptable “fonts.”

Many barcode labels are preprinted, purchased in lots, and made in
particular sizes with particular adhesives, etc., for fairly specific
applications. Others are printed in-house. Code 39 labels can be
generated by installing a barcode font on a computer and printing to a
laser printer. Code 39 can be
[downloaded](http://www.idautomation.com/fonts/free/) for free.
Asterisks are the stop and start codons for Code 39, so an expression
such as \*1234\* will be read as 1234 by a barcode scanner.

In order to assure that barcode values are unique, barcodes are entered
into the database as containers of the type label. This is done at the
time labels are ordered so that the range of values is reserved. This
practice also allows us to limit the values accepted by the database to
known barcode values.

[](#top){.infoLink}

<div class="fldDef">

Container . Label\
VARCHAR(255) not null

</div>

**Label** is the descriptive value that is displayed in most of our
object-tracking applications. It should usually represent something that
appears on the container. In many cases, this will be the value of the
barcode which is displayed in human-readable fonts on most barcode
labels.

Many legacy containers are not easily barcoded, especially if they are
numerous and stored at low temperatures. Therefore, Label should
certainly be the value that appears in physical searches for un-barcoded
containers. Note that Label is NOT unique.

Some object-tracking applications simplify the container hierarchy by
reporting only the positions (Containers of the type Position) for a
Collection Object. Thus, in order to find a tissue sample in the
freezers, you do not need to know the label of the freezer box or the
freezer rack. You need know only the positions of the box and rack. For
these applications, the Labels of positions might usefully indicate the
parent container of the position. For example, the Label of position 6-B
in Freezer 6 is “Frzr6 6-B,” not just “6-B.”

[](#top){.infoLink}

<div class="fldDef">

Container . Description\
VARCHAR(255) null

</div>

**Description** is a useful expansion of Label. “Room 363” is useful as
a label, but something like “The processing room in the south wing of
the Biology Annex” may be expeditious.

[](#top){.infoLink}

<div class="fldDef">

Container\_History . Install\_Date\
DATETIME not null

</div>

**Install Date** This is the date on which the Parent Container was last
changed, *i.e.*, the date on which the Container was placed in its
parent.

[](#top){.infoLink}

<div class="fldDef">

Container . container\_remarks\
VARCHAR(255) null

</div>

**Remarks**\
is the place to record notes and about the container or its contents.
Remarks are especially useful in explaining the nature and treatment of
legacy containers (*i.e.,* containers without barcode labels).

[](#top){.infoLink}

<div class="fldDef">

Container . print\_fg\
NUMBER(1) null

</div>

**Print Flag** is a temporary flag that can be set for the purpose of
printing container labels.

[](#top){.infoLink}

<div class="fldDef">

Container . width\
Container . height\
Container . length\
NUMBER null

</div>

**Width, Height, Length** are dimensions of a container in centimeters.
Decimal fractions can be used. Because movement of objects involves two
barcode scans that relate a child container to a parent container, there
is a risk of accidentally reversing these two values. These dimensions
are used in logic that prevents scanning a container into a parent that
is smaller than itself.

Some common container dimensions:

  Container                      Width   Height   Length
  ------------------------------ ------- -------- --------
  13-slot freezer rack           14      73       14
  slot in freezer rack           13.5    5.5      13.5
  regular (2 inch) freezer box   13      5        13
  2-dram shell vial              2       5.6      2

[](#top){.infoLink}

<div class="fldDef">

Container . Number\_Positions\
INTEGER null

</div>

**Number of Positions:** Some containers have immovable subcontainers of
the Container Type Position. For example, many freezer boxes designed to
contain cryovials have either 81 (9 X 9 rows) or 100 (10 X 10 rows)
subdivisions, or fixed positions, for cryovials. Recording the number of
positions in a container allows us to make forms specific to tasks such
as scanning cryovials into a 100-position freezer box versus an
81-position freezer box.

[](#top){.infoLink}

<div class="fldDef">

Container . institution\_acronym\
VARCHAR(20) not null

</div>

**Institution** is an abbreviation that indicates which institution’s
“owns” a container. (“Owns” because containers are in fact shared across
VPD boundaries; this is closer to an indication of creator.)

[](#top){.infoLink}\
Object Tracking in general
--------------------------

This section describes very general guidelines for object tracking with
machine-readable labels.

### Getting Started

1.  Claim a barcode series in the [Barcode Series
    Spreadsheet](https://docs.google.com/spreadsheets/d/1Rmj7NCudfdpo2DWwMHZk4FOYM-_anrElznYnjK4nWtY/edit#gid=0)
2.  Purchase or print labels.
3.  Create the corresponding containers as some type of “label”
    container in Arctos using the Create Container Series app.

### Using

1.  Change some labels to an appropriate usable container type (one not
    containing “label”) with the Label&gt;Container app. Mark them
    appropriately; see [Field Procedures](#field)for one idea.
2.  If the barcodes are meant to directly hold specimen parts (*e.g.*,
    if they are nunc tubes or tags), install the part into the container
    using the data entry form, by editing the specimen part, with the
    Parts&gt;&gt;Container batch tool, or any other method.
3.  Use the container by scanning it into other containers or by
    scanning other containers into it using one of the many appropriate
    Arctos forms.

[](#top){.infoLink}\
Object Tracking in the field
----------------------------

The best place to begin the process of object tracking is when a part is
created; for example, when a tissue sample is put into a Nunc tube in
the field. Here is a brief overview of one implementation of that
process.

**As part of system development**

1.  Acquire a sufficient number of 2-piece barcodes. These are generally
    clear plastic labels with two identical, separable barcodes, one of
    which includes a long transparent “wrap around” portion through
    which the tube may be viewed, and which after application serves to
    protect the barcode and any writing on the tube to which it
    is affixed.
2.  Using the Arctos tools, enter the labels into Arctos as containers
    of type “{appropriate modifier} label.” Special handling exists for
    “cryovial label” containers, but this is unused if these practices
    are followed. “Cryovial labels” are often used on glass vials, and
    being overly-specific in creating “label” container types can
    ultimately result in confusion.
3.  Acquire a sufficient number of appropriate containers.
4.  Develop a system of color-coding commonly-used container types. For
    example, agree that all “cryovial” labels will be green, and all
    “vial” labels red.

**Before collecting**

1.  Pull out some containers and a corresponding number of labels.
2.  Use the Arctos tools to change the labels to an appropriate
    container type – from “specimen label” to “vial,” for example.
3.  Color-code the barcodes. Indelible ink (Sharpie markers work well)
    on the peel-off backing is perhaps best, but colored rubber bands,
    sticky-notes, or anything else that allows a user to identify the
    intended use of the barcodes is acceptable.

**In the field**

1.  Using the color coding system, grab an appropriate 2-piece label,
    remove the backing and affix the appropriate half to a container and
    the corresponding half to the data sheet. (Data sheets including
    pre-printed common part names, the part name encoded as barcodes,
    and a clearly-marked area for affixing the appropriate label-half
    are useful.)

**Back in the collection**

1.  Install the barcoded container by scanning it into an appropriate
    box, position, etc.

**Also back in the collection**

1.  Enter specimen data, scanning attached label-halves into the
    appropriate part barcode input area.

Note that the last two steps are independent and may occur in any order
and at any time. Typically tubes are installed immediately upon
returning from the field, and specimen data entry may occur months or
even years later. Once both steps have been completed, the specimen,
part, and object tracking data will automatically consolidate.

**At any time**

1.  If, for whatever reason, an un-barcoded container (with contents
    or not) should appear in the collection, simply refer to the
    color-coding chart, locate an appropriate label, and affix it to
    the container. (If the container does contain something, scan that
    into the new label as well.) No database inputs or container changes
    are necessary to bring the “new” container into the object
    tracking system. This immediately allows the container to be tracked
    by scanning it into any other container, and allows it to contain
    any container or specimen part.

[](#top){.infoLink}\
Object tracking without barcodes
--------------------------------

We are occasionally asked about object tracking without barcodes. While
such interfaces could be developed, we suggest that they should not be;
non-machine-based “object tracking” is best accomplished through
specimen part attributes.

With barcodes, explicitly-defined things (specimen parts) are uniquely,
unambiguously, and globally identified, then “read” by a device which is
mathematically prevented from making read errors. We maintain that this
is fundamentally different than anything produced by people reading
labels. If the machine says ContainerA is in ContainerB, there are
limited possibilities:

1.  It really is
2.  A protocol is ineffective
3.  Employees are not following protocol (which probably means a
    protocol is ineffective)

Without barcodes, things (often poorly-defined parts of cataloged items)
are identified by something that may or may not really be unique
(catalog number as transcribed by some student, some taxonomic term as
accepted whenever the shelf was labeled, one of the 3 objects labeled
“Catalog Number One,” etc.), and that value is interpreted by a “device”
which tends to make the occasional mistake when dealing with large
numbers of similar things. Things end up about where they should,
usually, (the aforementioned device is very good at dealing with a bit
of slop) but there’s not really any way of knowing when they don’t.

The systems are functionally different, and the data they produce are
functionally different. Most every “numbering system” created by humans
has duplicates, etc., and every human who’s ever read very many numbers
has mangled a few of them. (Statistics suggest about 4%; our experience
barcoding legacy object tracking systems suggests something higher.)
Humans can often deal with those errors, but doing so requires a very
different approach than barcodes. Machine codes are as reliable as
they’re made to be, but they must be part of a designed system; there is
and can be no room for interpretation or ambiguity.

If data of a quantifiable quality are desirable, machine-readable codes
and a system of handling them is necessary. If data of those
characteristics are not necessary, or the resources to barcode are not
currently available, use part attribute “location.”

[](#top){.infoLink}\
FAQ
--------------------

Summary: People who use barcodes tend to find them indispensable; they
make producing much better data much simpler.

Q: The only benefit of barcoding is that it provides you with an east
\[sic\] mechanism for processing large loans, doing inventories or
otherwise creating batches of specimens.
[(source)](http://mailman.yale.edu/pipermail/nhcoll-l/2014-February/007337.html)\
A: Barcodes are useful for much more than loans.
[(source)](http://mailman.yale.edu/pipermail/nhcoll-l/2014-February/007341.html)

Q: …reading devices that might go out of production
[(source)](http://mailman.yale.edu/pipermail/nhcoll-l/2014-February/007339.html)\
A: This is an argument that we will soon lose all photodetector, laser,
and optical devices that may be attached to small computers. Other types
of “barcodes” (2D codes and RFIDs, for example) require slightly more
advanced technology, but the argument that very simple methods of
reading very simple encoded data across very short distances will
suddenly become impossible just does not make any sense to us.

Q: The scanner read my barcode wrong.\
A: It probably didn’t. Even the very simplest barcodes have start and
stop codons – half of barcode “1234” is not “12,” it’s unintelligible
garbage. Printing useless barcodes, failing to develop useful protocols,
and scanning the wrong things produce off-by-something-random errors;
technological failures produce only “it didn’t work” errors.

Q: What should I barcode?\
A: Barcode physical objects – things you loan, need to find in the
collection, or otherwise track. Cataloged items (things to which catalog
numbers are assigned) are almost never appropriate; insect genitalia are
separated and stored away from the pinned “voucher,” a mammal may have
multiple organ samples, a plant may be mounted on multiple sheets, etc.
That is, barcode and GUID are different types of identifiers used to
represent entirely different types of objects. Please note that this is
contrary to the  [iDigBio Specimen Barcode and Labeling
Guide](https://www.idigbio.org/wiki/index.php/Specimen_Barcode_and_Labeling_Guide)
([archive](https://web.archive.org/web/20151205163004/https://www.idigbio.org/wiki/index.php/Specimen_Barcode_and_Labeling_Guide)),
which states “A digital specimen GUID is what identifies the specimen
(part of an individual, an individual, a set of individuals) in the
digital world, while a barcode label identifies the specimen in the
physical world. ” A GUID/catalog number is assigned to whatever a
Curator chooses (and traditions vary widely across disciplines and
collections), while a barcode is assigned to definable physical objects.
A barcode may refer to a cataloged item, part of a cataloged item, a
part cataloged in multiple collections, material referencing a cataloged
item or parts thereof (images, field notes, acquisition records), or
anything else; any 1:1 catalog number:barcode ratio is coincidental and
likely indicative of data structure problems.

Q: What should I do differently for \[“vouchers,” “tissues”, herbarium
sheets, slides, whale skeletons, lots, subsamples, etc.\]\
A: Nothing. All of the above (and much more) is tracked in Arctos under
one system. A system which must be modified for “special” situations is
almost certainly also lacking in “normal” usage.

Q: What “numbers” should I use?\
A: Anything unique within your “globe” is sufficient; the larger the
“globe,” the more you one can do with the data. Arctos currently has a
system-wide unique key on barcodes, which allows us to deploy
Arctos-wide tools which are used to track objects loaned to other Arctos
collections, create loans (including those which include material from
multiple collections) by scanning barcodes, transfer barcoded (and
tracked) objects across collections, and store material from various
collections in the same parent containers (*e.g.*, freezers). We find no
fault in the [iDigBio Specimen Barcode and Labeling
Guide](https://www.idigbio.org/wiki/index.php/Specimen_Barcode_and_Labeling_Guide)
([archive](https://web.archive.org/web/20151205163004/https://www.idigbio.org/wiki/index.php/Specimen_Barcode_and_Labeling_Guide))
recommendation of using UUIDs for barcodes, although most collections in
Arctos prefer a human-readable label prefix. DOIs which resolve to the
part internally and specimen externally seem ideal (they’re
globally-unique and resolvable if inadvertently cited), though we have
so far been unable to procure sufficient DOIs to test this idea at
scale.

Q: What encoding should I use?\
A: Whatever fits on your desired labels and can be reliably read by a
convenient machine.

Usage
-----

This section provides a brief overview of the Arctos container forms and
applications. It is not all-inclusive and it should not be viewed as
directive.

### Find a container

Containers may be located and displayed hierarchically through Find
Container, which is accessible directly through the “tools” control in
Specimen Results, from Specimen Detail, from loans, and various other
places within Arctos. Please note that the container “tree” form is
dynamic and asynchronous – clicking controls repeatedly (esp. from slow
connections or searches that return large results sets) may “clog up the
pipe” to the database; be patient.

Once a container search has successfully completed, you will be
presented with a “tree.” Doubleclicking any node will expand that node
to show all its child containers. Clicking the checkbox beside a node
will open a “more information” window, the contents of which are
context-dependent.

-   “Edit Container” provides the ability to edit the container, move it
    to a new parent, add a “checked” entry, record fluid information,
    and provides a list of the children of the container.
-   “See all collection objects” will return a list of parts as “leaf
    nodes.” This includes parts that are in the container, and parts
    that are in containers that are in the container at any level
    of recursion.
-   “Positions” is functional only for appropriate container types. Note
    that nothing prevents adding additional material to a container
    which contains positions, but that doing so will disable the
    position form.
-   “History” provides a scan history, and may be useful for locating a
    misplaced container.

### Use Containers to add items to a loan

Use the “Bulkload Loan Items” batch tool or the “add items by barcode”
link from Edit Loan.

### “Flattening”

There are various options to “flatten” a container hierarchy into a map
for locating specimen parts, generally used in conjunction with loans.
These are part (not specimen) based, and so the option from specimen
results will flatten all parts for all specimens included in the results
set, while the options from loans will flatten only those parts which
are included in the loan. Note also that loans often contain subsamples,
which are generally not included in object tracking systems.

General System Guidelines
-------------------------

The following are general guidelines developed largely from examining
error logs (or a lack thereof) in relation to the number of tracked
objects, the apparent ability to find supposedly-tracked objects, and a
general impression of overall “quality” and utility of the barcoding
system in several collections. This is not a recipe, but rather a
description of the general qualities of the finished product.

-   A ***system*** is critical. Scattering some barcodes around and
    occasionally beeping at them with a scanner does not somehow lead to
    knowing where things are.
-   Containers should be created (as labels) in large batches, when
    printed or purchased.
-   Containers should be edited exactly one time, when Labels are
    changed to containers for immediate usage. (See [field
    procedures](#field).)
-   All other container-related tasks involve only scanning barcodes.

Creating position-holding freezer boxes
---------------------------------------

###### (From MLC 2016-01-19)

<div>

<div>

<div>

<div>

<div>

<div>

<div>

1.  create a freezer box in object tracking ( or use bulk container edit
    to create a bunch)
2.  I prefer, even with 9×9 grids, to create the box wit h100 positions.
    That way, each row will be 1-10, but you don’t fill the
    10th position. This makes the numbering easier.
3.  So, make sure that for “number of positions”, you put 100 (or 81 if
    you prefer, but once you create the positions, they can’t
    be changed).
4.  then go find the container using object tracking
5.  click on the container, putting the check in the box next to it so
    that that the”edit container” screen shows up to the right
6.  below edit container and see all collection objects in this
    container, you will see a “positions” tab – click on it
7.  say yes to create new positions
8.  it should generate a form with a freezer box template that you can
    scan tubes into
9.  note that if you scan a tube in place, and then need to move it, you
    must scan it into a different position first, and then refresh your
    browser to delete it from the old position

</div>

</div>

</div>

</div>

</div>

</div>

</div>

Guidelines for barcode-containing labels:
-----------------------------------------

1.  Barcodes should be clearly replicated in a human-readable format.
    The value read by a scanner should be readable by a human as well.
    Note that XYZ123, 123, ZYX 123, zyx0123, and ZYX0123 are all very
    different values.
2.  Be cautious of lower-case letters. Many barcode readers transmit all
    data in upper-case. Arctos character comparisons are bitwise; a and
    A are not the same character.
3.  Avoid padding with leading zeroes. These may be handled differently
    by different applications. In order to keep the character strings
    all the same length, start the series at a high value. For example,
    instead of beginning a series at 000001, begin at 100001. Thus, the
    character string will always be six characters long, and the printed
    labels will format consistently.
4.  Avoid characters other than A-Z and 0-9. Humans, and sometimes
    machines, can’t always tell if that hole represents a space, tab,
    linefeed, of any of the dozens of other possibilities. **Barcodes
    containing anything except A-Z, a-z, and 0-9 are NOT eligible for
    any script-processing through Arctos or TACC, except by
    previous arrangement.**
5.  Use big numbers if possible. XYZ1234567890 is less likely to cause
    unanticipated problems than XYZ1 is.
6.  Don’t try to be too clever. You’ll learn to hate “L090207” (or was
    it L927? Maybe L0902007?). Dumb numbers with a locally-meaningful
    prefix, such as UAM or UAMMAMM, will be much more sustainable.
7.  Check the Barcode Series Spreadsheet (Arctos: ObjectTracking tab)
    very early in the ordering process. Avoid anything that even
    remotely looks like it could be, or ever could become, a conflict.
    Duplicate barcodes will not be accepted. Barcodes are shared across
    all Arctos collections.
8.  Talk to the Arctos folks before doing anything else. Really. It’s
    free, and we’re here to help. Ordering unusable barcodes is not
    free, and we’ll make fun of you for doing that.
9.  Enter the series of barcodes into Arctos and update the Barcode
    Series Spreadsheet (Arctos: ObjectTracking tab) before placing an
    order or printing your barcodes.
