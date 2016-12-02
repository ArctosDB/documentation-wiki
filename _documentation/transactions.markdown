---
title: Transactions
layout: default_toc
---

# Transactions


Transactions are actions that effect the coming and going of Cataloged
Items, and parts thereof. 
[Accessions](http://arctosdb.org/documentation/accession/ "Accessions")
permanently bring cataloged items into a collection,
[Loans](http://arctosdb.org/documentation/loans/ "Loans") record
movement and usage of cataloged items, and Borrows record items from
other collections lent, and in your collection’s temporary custody. 
These three types of transactions share several fields in common, and
those fields are treated on this page.



## Nature of Material

`Trans . Nature_of_Material VARCHAR2(4000) not null`


 is a brief textual description of the accession
or loan. Quantities can be approximate if accession material is not
being unpacked prior to storage. For example, "About 300 frozen small
mammals collected during the summer of 2004 in Denali State Park."



## Remarks

`Trans . Trans_Remarks VARCHAR2(4000) null`


 is a place for expanding a description of the conditions of
acceptance, or for instructions in processing the material. For example,
"Take 50 gram subsamples for fatty-acid analysis."
