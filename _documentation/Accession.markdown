---
title: Accessions
author: ArctosDB
date: 2016-11-30
layout: default_toc
---

# Accessions     


An accession is a transaction that conveys a specimen, or (commonly) a group of specimens received from one source at one time, to a collection. As an administrative (rather than biological) entity, an accession can be delimited by administrative criteria such as previous title, applicable [permits](../permit), or association with a particular [project](../projects/). In general, accessioning is the first step of incorporating specimens into a collection and indicates that the museum has accepted custody of (if not title to) the accessioned material. Accessioning generally precedes cataloging. Therefore, it is unnecessary to have specimen data in order to create an accession. Nevertheless, the nature and disposition of the specimen data should be recorded in order to assure that the data can eventually be located for purposes of cataloging.

## Accession Fields

### Accession Number

`Accn.accn_number VARCHAR2(60) not null`

Accession Number is a text string assigned to identify the accession for a specific collection.

### Status

Status indicates whether or not the accession is cataloged or not. `Complete` indicates that the disposition of specimens can be determined from individual specimen records. "In process" indicates that at least some of the material is still being stored and labeled by accession number.

### How Obtained

`Accn . accn_type VARCHAR2(35) not null`

[ctAccn_Type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctAccn_Type)

"How Obtained?" is a means of acquiring the specimens, such as "field collection," "gift," "salvaged," and "purchased."

### Nature of Material

"Nature of Material" describes the contents of the accession, including identifications of specimens, specimen parts, geographic origin of the material, etc.

### Received From

"Received From" is the name of the agent (person, organization) who or which provided the described material to the museum. Whenever possible, this should be the name of a person, _i.e.,_ the person within an agency rather than the name of the agency.

### Received Date  

`Accn . Received_Date DATE not null`

"Received Date" is the day that the accessioned material was received by the museum. This must be a valid date. Default could be the system date when the record was created.

### Entry Date

"Entry Date" is the day that the accession record was created. This must be a valid date. Default could be the system date when the record was created.

### Remarks

`Trans . Trans_Remarks VARCHAR2(4000) null`

Accession "Remarks" is a place for expanding a description of the conditions of acceptance, or for instructions in processing the material. For example, "Take 50 gram subsamples for fatty-acid analysis."

### Estimated Count

Estimated Count or "Est. Cnt." is an integer expressing approximately how many specimens can be expected as part of an accession. Accession Containers are Containers which hold unprocessed material, e.g., bags of frozen mice can be made Containers and scanned into freezers. Email is sent on every annual anniversary of Transaction Data for accessions which are not "closed" but contain no specimens.

### Public Flag

The "Public?" flag allows accession data to be displayed in a public (open to non-operators) page, currently linked to from Specimen Results. This is useful for displaying accession-level Media, such an UAM Earth Science accession and locality card scans.

## Data Entry Considerations

You can catalog records in "your collection" that have been accessioned by another collection. For data entry (through either the data-entry application or the bulkloader) indicate the accession that you wish to use, but put brackets around the part of the accession "number" that indicates the collection. This effectively tells the bulkloader, "ignore the collection (collection_cde + institution_acronym) to which this record is going to be appended, and indicate the accession based on what is in the brackets." (Though that accession must be present in Arctos.)  Examples include:

*   A UAM Mammal Observation being entered into a UAM Mammal accession
*   An MVZ Bird being entered into an MVZ Mammal accession
*   An MSB parasite host being entered into an MSB parasite accession

### Example Usage is follows.

*   Desired accession: 1234.123.Mamm
*   New Specimen: UAMObs:Mamm 9876
*   Default accession: UAMObs:Mamm 1234.123.Mamm (Does not and should not exist)
*   Value to enter for Accession: [UAM:Mamm]1234.123.Mamm

*   Desired accession: MVZ:Birds 14508
*   New Specimen: MVZ:Bird 183000 - Value to enter for Accession: 14508
*   New Specimen: MVZ:Mamm 250000 - Value to enter for Accession: [MVZ:Bird]14508
*   New Specimen: MVZObs:Bird 10 - Value to enter for Accession: [MVZ:Bird]14508

*   Desired accession: MSB:Para 2012.123.Para
*   New Specimen: MSB:Host:9876
*   Default accession: MSB:Host 2012.123 (Does not and should not exist)
*   Value to enter for Accession: [MSB:Para]2012.123.Para
