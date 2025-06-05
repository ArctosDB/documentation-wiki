---
Author: Dusty McDonald
title: Container
layout: default_toc
date: 2023-02-22
---

# Object Tracking

In a nutshell, Arctos Object Tracking consists of...

-   "Containers" in one of two categories:
    1.  Catalog record Parts are (also) containers 
    2.  User-defined containers are whatever someone says they are –
        tubes, tube positions in freezer boxes, boxes, shelves, ranges,
        buildings, institutions, etc.
-   All containers have zero or one parent container (the model is a hierarchy)

That is the functional model in its entirety. **Physical catalog record parts** ARE
containers, and they can be put into other containers, which are
arbitrary curatorial declarations hopefully arranged in some useful
fashion, such as bones in boxes on shelves. **Barcodes** (2D codes, RFID, etc.)
are reliable machine-readable proxies for container_id. 

Dimensions, container_type, procedures to disallow
infinite recursion, etc. – everything else about the model – are
attempts to prevent human errors or provide useful information about or
from containers. (All such clues may be unnecessary in a perfect
and uniform system, but with the great diversity present in Arctos a
remark indicating the color of a box or location of a room is
occasionally valuable.)

## The Model

[Collection Objects](/documentation/parts) are physically located in
containers, and the concept of Containers reflects that reality. Not
only are collection objects located in containers, but containers are
(optionally) located within larger containers and this relationship is
reflected in a recursive, parent-child relationship. Thus, every
container has one parent container, except for "Container Zero" (the
Parentless Void). For example, a tissue sample is typically in a
**cryovial**, within a **position** in a **freezer box**, within a
**position** in a **freezer rack**, within a **position** in a **freezer** in a
**room**… eight nesting containers.

With each container uniquely labeled with a barcode, tracking objects is
done by scanning a child container child container barcode into the appropriate
parent container position(s). In the example above, the approximately 1,300 samples in a
freezer rack can be tracked from one freezer to another by the scanning
barcode on the freezer rack into the appropriate position in its new parent 
(the barcode on the freezer).

### container_id

Inernal key, integer.

### parent_container_id

Foreign key --> container.container_id

### container_type

Foreign key --> [CTCONTAINER_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCONTAINER_TYPE)

#### container type position

The Container Type ``position`` is locked by programmed logic within its
Parent Container. Examples of Positions include entities which cannot be
physically moved from their Parent Container such as slots within
freezer racks, slots for vials within freezer boxes, and positions for
racks within freezers. In order create a Position, a Parent Container
must be assigned.

#### container type  label

The various "... label" container types are for processing. "Labels" may
generally not have parents or be children, and should be changed to some
other container type for usage. For example, one might purchase 100,000
"cryovial label" tags intended for the next several years use, and
change them to "cryovial" 1,000 at a time. A color-coding system is
useful.

## barcode

Machine-reaable container labels, unique within an institution. ('Barcode' is a misnomer; "value which can be unambiguously read by machines" is the intent.)
 These identifiers may be "dumb" (eg next in series, ***recommended***) or "smart" (eg catalog number - highly ***not*** recommended),

### barcode claims

Barcodes must be claimed using the Arctos tool before containers may be created. It is recommended to file an Issue for assistance with this process, before committing to any series or pattern of barcodes.

## institution_acronym

Institution owning the container, and RLS partition. Containers may be accessed by users who have access to any collection within the institution, plus sufficient ``... container`` roles.

## label

Human-readable container text. Best practice is usually to mirror the barcode.

## description

Free-text

## container_remarks

Free-text


## last_date, last_user, last_update_tool

Metadata captured as history.

## print_fg

Legacy flag, unused

## width, height, length, dimension_units

Physical size of the "cubed" container.

## weight, weight_units

Weight of the container.

## weight_capacity, weight_capacity_units


Weight capacity of the container.

## number_rows, number_columns, orientation, positions_hold_container_type

Position layout data.


    
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/container.markdown).
