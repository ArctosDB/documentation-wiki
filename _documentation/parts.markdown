---
title: Specimen Parts
layout: default_toc
---

# Specimen Parts

Parts are physical entities, in contrast to [Cataloged Items](/documentation/catalog) (an abstract entity) or binary objects
(such as Images). One or many parts may comprise a Cataloged Item, and
parts may be defined as the minimal units for which [storage location](/documentation/container), usage, and condition are
tracked. (*"Parts are things to which you can stick barcodes."*) In many
collections, parts are nearly always "whole organisms" but in others,
such as vertebrate paleontology, the variety of parts is huge.

Embryos and parasites may be treated parts of the host organism.
Ideally, embryos should be treated as separate cataloged items because
they may have, or they may acquire, attributes distinct from those of
their mothers. Nevertheless it is often practical to consider them as
parts of the mother until such time as they do acquire separate
attributes. Similarly, parasites have been recorded as parts of their
hosts until such time as they might be worked into a separate parasite
collection.

## Part Names

`Specimen_Part . Part_Name VARCHAR(70) not null`

What we choose to name as a part depends on what we
define as a part, and while this is often obvious (*e.g.,* "whole
organism"), organisms become separated into parts in ways both
standardized and not. Thus, it is difficult to standardize vocabulary
for every fragment worthy of preservation.

Vocabulary is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctspecimen_part_name).
Part names should refer to specific anatomical parts or recognized
groups of parts (*e.g.*, "postcranial skeleton"). With rare exception,
parts are the singular form of a noun. 

Parts, when separable, should be entered on individual lines of the
parts grid as individual collection objects. Distinct parts should be entered on separate lines,
*e.g*., ***skull*** and ***postcranial skeleton***. A ***postcranial
skeleton*** is considered a single part. Parts already contained in the ***postcranial skeleton*** may be entered on
separate lines for clarity. An acceptable entry might be:

* skull
* postcranial skeleton (partial)
* right humerus [part condition: broken]

Such an entry would designate a postcranial skeleton that has a broken right humerus. Situations like this are 
typically discovered during loans, are almost always unique, and should be dealt with on a case by case basis.

Part name contains information once split out into part modifier, and
also preservation and storage information. Preservation and storage
information (eg, "reproductive tract (formalin-fixed, 70% ethanol)") is
not meant to replace container condition information (e.g.,
"checked-by-on-date" and environmental history), but simply to
facilitate searching.

"Traditional" (a concept which varies wildly by discipline and
collection) part names are often stored without "modifiers." A
"skeleton" in a mammal collection probably consists of cleaned, dried
bones stored at room temperature, for example.

## Tissue

Each part name may be flagged as representing "tissue." 

>A tissue in Arctos is defined as a specimen part that was collected and/or preserved for molecular or chemical studies, 
and is intended for consumptive use.

While we have been unable to produce a functional definition, tissues are generally samples intended for
subsampling and distribution, generally for purposes of destructive analysis, or simply a part with 
readily-available tissue from which DNA
may be extracted. In general, these parts are soft organs, or parts thereof, preserved by freezing. Such samples commonly supply DNA for
sequence analysis, and many researchers want to search for specimens
from which they can readily obtain subsamples.

Tissues are not necessarily biological productions of the cataloged item.
For example, parasites may be cataloged as parts and flagged as tissues.

Tissues are not necessarily suitable for any particular usage, and may include products such as venom.

## Disposition

`Coll_Object . Disposition VARCHAR(20) not null`

Disposition describes the status of parts and, as an abstract
generality, the status of cataloged items. Typical values are controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctcoll_obj_disp) and include:

-   in collection
-   being processed
-   on loan
-   missing
-   destroyed

## Condition

`Coll_Object . Condition VARCHAR(255) not null`

Condition is used for entries such as "broken" or "dissected." The following condition ratings apply specifically to parts with the "is_tissue" flag:

-   5 – The best tissues. These have gone from a freshly killed animal
    directly into liquid nitrogen. The animal should not have been dead
    for more than thirty minutes.
-   4 – These are tissues taken from animals only a few hours post
    mortem at cool temperatures. Such tissues should not have been
    previously frozen and thawed.
-   3 – These are tissues taken from an animal that has been dead less
    than sixteen hours at cool temperatures, or tissues taken from an
    animal that was hard frozen soon after death and then thawed
    for preparation. Fur is not slipping.
-   2 – These tissues may be beginning to show signs of decomposition.
-   1 – These tissues are flaccid and thoroughly autolyzed. They
    probably stink.

## Lot Count

`Coll_Object . Lot_Count NUMBER(22) not null`

A **Lot Count** is an integer that enumberates how many similar items
comprise a part. The value is frequently one (1), but collections of
fish and invertebrates usually assign a single catalog number to all of
the individual organisms of one species from one collecting event.
Thus, 86 minnows of one species from one place, collected at the same
time, and stored together in one jar of alcohol would be a cataloged
item with one part, and that part would have a lot count of 86 whole
animals.

Lot counts are not static; lots may be split into smaller lots by
creating a separate part. If one of those 86 minnows was prepared for
skeletal study by clearing and staining, it would be necessary to create
a second "part" within the catalogued item, *e.g.:*

| Catalog \#         | Part Name          | Pres Method        | Lot Cnt            |
|--------------------|--------------------|--------------------|--------------------|
| 123456             | whole animal       | alcohol            | 85                 |
| 123456             | skeleton           | cleared and stained| 1                  |

A cryotube of embryos or a box of ribs should have a lot count. In
contrast, three tubes of muscle from an individual will be tracked
separately; these should be entered as three collection objects, each
with a lot count of one.

There must be a value of at least one (1) for each part, and the maximum
is 99999. Lot counts are sometimes approximate. For example, a
three-liter jar of small minnows in alcohol might be given a lot count
of 400, at least until such time as someone counts the minnows.

Examples of lot count usage:

| Material                             | Entry                                |
|--------------------------------------|--------------------------------------|
| Two embryos stored in the same crytube      | embryo (lot count = 2)               |
| Two liver samples stored in individual tubes         | liver (lot count = 1)               |
| Three tubes each containing five nematodes     | nematode (lot count = 5) <br/> nematode (lot count = 5) <br/> nematode (lot count = 5)             |
| Ten vertebrae in a box               | vertebra (lot count = 10)            |
| A jar of five salamanders of the same species from the same collecting event.                    | whole animal (lot count = 5)     |

## Sampled From

`Specimen_Part . Sampled_From_Obj_ID NUMBER(22) not null`

Sampled From designates a part derived from another part. This is
intended to be a subsample supplied to an investigator for destructive
analysis. Therefore it often applies to parts that are no longer in the
collection, but if the subsamples or extracts thereof are returned,
these can be tracked.

## Remarks

`Coll_Object_Remark . Coll_Object_Remarks VARCHAR2(4000) null`

Use remarks to document non-standard information pertaining to the specimen part. 
Do not use remarks for any information which could be recorded with more structure elsewhere, 
including [Part Attributes](/documentation/attributes).

# Specimen Results

Specimen Results column "partdetail" contains "core" part information formatted as [JSON (JavaScript Object Notation)](https://en.wikipedia.org/wiki/JSON). JSON is a 
lightweight data exchange format capable of representing complex data (_e.g._, multiple parts each with multiple child attributes)
as simple text strings. Most browsers will "pretty print" 
JSON data, making these data very human-readable.

The most simple data will be one part and it's direct metadata:

```
[
  {
    "part_name": "skull",
    "lot_count": "1",
    "disposition": "in collection",
    "condition": "unchecked",
    "barcode": "",
    "container_path": "",
    "remark": "",
    "attributes": []
  } 
]
```

Many specimens will contain data for multiple parts:
```
[
  {
    "part_name": "skull",
    "lot_count": "1",
    "disposition": "in collection",
    "condition": "unchecked",
    "barcode": "",
    "container_path": "",
    "remark": "",
    "attributes": []
  },
  {
    "part_name": "study skin",
    "lot_count": "1",
    "disposition": "in collection",
    "condition": "unchecked",
    "barcode": "",
    "container_path": "",
    "remark": "",
    "attributes": []
  }
]
```
And some specimens will also contain part attribute data for one or more of the parts:
```
[
  {
    "part_name": "study skin",
    "lot_count": "1",
    "disposition": "in collection",
    "condition": "unchecked",
    "barcode": "",
    "container_path": "",
    "remark": "",
    "attributes": [
      {
        "attribute_type": "location",
        "attribute_value": "Cabinet 12; Drawer 5",
        "attribute_units": "",
        "determined_date": "",
        "determiner": "",
        "attribute_remark": ""
      }
    ]
  }
]
```