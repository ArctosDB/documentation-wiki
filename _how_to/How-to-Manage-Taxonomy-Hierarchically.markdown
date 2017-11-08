---
title: How to manage taxonomy hierarchically
layout: default_toc
author: DLM
date: 2017-08-28
---
# How to manage taxonomy hierarchically


Arctos provides a hierarchical taxonomy management tool suitable for consistently managing large groups of taxa as hierarchical data.

## Overview

1. Create a dataset. This is a group of names which are managed together. Datasets are wholly arbitrary temporary "working groups" of
names which may be created for any reason and deleted at any time without affecting any "read" data.

2. "Seed" taxa. Select taxa with which to populate a dataset. This is generally done at the level of a taxon rank (e.g., Phylum). A dataset
may be seeded any number of times; you may add records incrementally.

3. Deal with errors. Core Arctos data (and taxonomy itself) is not hierarchical, and the import scripts which convert seeded taxa
to a hierarchical structure are very likely to encounter errors which should be dealt with early in the process. Fixing errors may be best
done by editing single records in Arctos, deleting local data, and re-seeding.

4. Manage data hierarchically.

5. Export your data to the Arctos classification bulkloader.

6. Review data in the bulkloader (it will be in tabular/spreadsheet format), 
repatriate to Arctos using the classification bulkloader.

## Creating a dataset

1. Click Enter Data/Batch Tools/Hierarchical Classifications to open the editor.
2. Click Create a new Dataset
3. Enter a name, select a source classification, click Create Dataset. Source will usually be the Source your collection uses.

## Seeding

1. Enter something in one of the ranked fields on the "seed" section of the edit form. You should have been directed to the 
proper place after creating a dataset. Click the "get count" button to ensure that what you're doing matches your expectations.
The popup may take some time to appear.
2. If the popup gives a reasonable count, click pull seed data. The form will reload.
3. Wait. The import process runs asynchronously, and may take some time. Check the table for import status. It will initially say
"0 records are available to manage hierarchically...." - reload the page after a few minutes, the number here should roughly match the 
"xxxx records have been seeded value."

### Reseeding

Duplicates are not possible in a hierarchy, and various technical issues prevent us from silently ignoring them. Re-seeding any 
overlapping taxa are likely to cause conflict. After the last seed operation has completed, you may click the "delete what you've seeded"
link to clear the way for new imports. 

## Errors

The import will almost always produce a mismatch in the number of records and several errors. Common problems are explained here;
contact a DBA for assistance.

### Count mismatch: too many

Counts between seeded records and imported records should match, but seldom will. Too many records in the local dataset is an indication
of terms used in classifications not also existing as names; these may be created as part of the repatriation process and generally are
not problematic. These data will need CAREFUL review before names are created. Click "Click here to view records which are in your import 
but not in Arctos," download CSV, VERY carefully review all data removing anything that is not a "valid" name, and work with a DBA to create
these names.

### Count mismatch: too few

Click "import error details" for a list of terms which were in your seed (e.g., because they had a term "Mammalia" ranked "class" and 
you seeded class=Mammalia) but are not in the final import. The most common problem is incomplete or inconsistent classification data
in Arctos. For example, name Abrothrix andinus has species "Abrothrix andina" or Mustela erminea richardsoni has subspecies 
Mustela erminea richardsonii.

### Count mismatch: too few continued

"Seeded taxa not in your dataset" are similar to the above, but are generally missing classification data. The most common cause is
missing a root term - genus-->{no species}-->scientific_name for a binomial, for example.

### Nowhere to be found

A taxonomic import filter is seldom sufficient to find all taxa in use by a collection, often because a collection is using taxa with 
incomplete, missing, or mis-placed classifications. Work with a DBA to get these into the hierarchical editor as early as possible. 



