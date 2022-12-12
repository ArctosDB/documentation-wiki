---
title: Accessions
author: ArctosDB
date: 2016-11-30
layout: default_toc
---

# Accessions

An accession is a transaction that conveys an item, or (commonly) a group of items received from one source at one time, to an institution. As an administrative (rather than biological) entity, an accession can be delimited by administrative criteria such as previous title, applicable [permits](/documentation/permits.html), or association with a particular [project](/documentation/projects.html). In general, accessioning is the first step of incorporating items into a collection and indicates that the institution has accepted custody of (if not title to) the accessioned material. Accessioning generally precedes cataloging. Therefore, it is unnecessary to have individual item data in order to create an accession. Nevertheless, the nature and disposition of the items' data should be recorded in order to assure that the data can eventually be located for purposes of cataloging.

## Accession Fields

### Accession Number

`Accn . Accn_Number VARCHAR2(60) not null`

Accession Number is a text string assigned to identify the accession for a specific collection.

### Status

`Accn . Accn_Status VARCHAR2(20) not null`

Accession Status indicates whether or not the accession is cataloged. Values are controlled by a <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctaccn_status" class="external">code table</a>. 

### Type

`Accn . Accn_Type VARCHAR2(35) not null`

Accession Type describes the means of acquisition. Values are controlled by a <a href="https://arctos.database.museum/info/ctDocumentation.cfm?table=ctaccn_type" class="external">code table</a>.

### Nature of Material

`Trans . Nature_of_Material VARCHAR2(4000) null`

Nature of Material describes the contents of the accession, including identifications of specimens, specimen parts, geographic origin of the material, etc.

### Received From

`Trans_Agent . Agent_ID NUMBER(22) not null`

See [Transaction Documentation](/documentation/transactions.html#transaction-agents) for agent information.

### Received Date  

`Accn . Received_Date VARCHAR2(22) null`

Received Date is the day that the accessioned material was received by the museum.  This must be a valid [date](/documentation/dates).  Default could be the system date when the record was created.

### Entry Date

`Trans . Trans_Date VARCHAR2(22) null`

Entry Date is the day that the accession record was created. This must be a valid [date](/documentation/dates). Default could be the system date when the record was created.

### Remarks

`Trans . Trans_Remarks VARCHAR2(4000) null`

Place for expanding a description of the conditions of acceptance, or for instructions in processing the material.  For example, "Take 50 gram subsamples for fatty-acid analysis."

### Estimated Count

`Accn . Estimated_Count NUMBER(22) null`

Accession Estimated Count or “Est. Cnt.” is an integer expressing approximately how many items can be expected to be cataloged as part of an accession. Accession Containers are Containers which hold unprocessed material, e.g., bags of frozen mice can be made Containers and scanned into freezers. Email is sent on every annual anniversary of Transaction Data for accessions which are not "closed" but contain no cataloged items.

### Public Flag

The "Public?" flag allows accession data to be displayed in a public (open to non-operators) page, currently linked to from Search Results. This is useful for displaying accession-level Media, such as UAM Earth Science accession and locality card scans.

## Data Entry Considerations

You can catalog records in "your collection" that have been accessioned by another collection.  For data entry (through either the data-entry application or the bulkloader) indicate the accession that you wish to use, but put brackets around the part of the accession "number" that indicates the collection.  This effectively tells the bulkloader, "ignore the collection (collection_cde + institution_acronym) to which this record is going to be appended, and indicate the accession based on what is in the brackets." (Though that accession must be present in Arctos.)   Examples include:

*   A UAM Mammal Observation being entered into a UAM Mammal accession
*   An MVZ Bird being entered into an MVZ Mammal accession
*   An MSB parasite host being entered into an MSB parasite accession

### Example Usage

*   Desired accession: 1234.123.Mamm
*   New Cataloged Item: UAMObs:Mamm 9876
*   Default accession: UAMObs:Mamm 1234.123.Mamm (Does not and should not exist)
*   Value to enter for Accession: [UAM:Mamm]1234.123.Mamm

*   Desired accession: MVZ:Birds 14508
*   New Cataloged Item: MVZ:Bird 183000 - Value to enter for Accession: 14508
*   New Cataloged Item: MVZ:Mamm 250000 - Value to enter for Accession: [MVZ:Bird]14508
*   New Cataloged Item: MVZObs:Bird 10 - Value to enter for Accession: [MVZ:Bird]14508

*   Desired accession: MSB:Para 2012.123.Para
*   New Cataloged Item: MSB:Host:9876
*   Default accession: MSB:Host 2012.123 (Does not and should not exist)
*   Value to enter for Accession: [MSB:Para]2012.123.Para

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/accession.markdown" target="_blank">here</a>.
