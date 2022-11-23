---
title: How To Manage Taxonomy Hierarchically
layout: default_toc
author: DLM
date: 2017-08-28
---
# How To Manage Taxonomy Hierarchically

# Background

## Hierarchical data

Hierarchical data are those in which each term is unique and each term has zero or one parent terms.

## Structure of taxonomy

Taxonomy (as a body of literature) is not hierarchical. The "parent" of Echidna (a homonym) varies according to usage, and includes "Muraeninae" (eels) and "Viperidae" (snakes). The "parent" of "Neotoma" has changed with our understanding of evolutionary history, and has at times and according to various authors included "Cricetidae" and "Muridae."

## Structure of Arctos

The core taxonomy structure of Arctos is built to hold all of the above data and anything else which might have been considered "taxonomy" at some point. Arctos taxonomy consists of grouped, sometimes named, sometimes ordered terms. There is no enforced consistency across or within taxon names; the structure which allows varying taxon concepts also allows inconsistent data (which are programmatically indistinguishable from taxon concept assertions).

## Hierarchical data in Arctos

Arctos provides a hierarchical taxonomy management tool suitable for consistently managing large groups of taxa as hierarchical data. Hierarchical data are those in which each term is unique and has zero or one parent terms. That is, the term "Neotoma" can exist precisely one time in a hierarchy. A term can have any number of children ("Neotoma albigua", "Neotoma cinerea", etc.), and those terms may have children of their own ("Neotoma albigula albiglua"). "Neotoma" must have zero or one parent terms - "Cricetidae" or "Muridae." There is no possibility of Neotoma having two parent terms within the same hierarchy.

## Finding consistency

Data in Arctos are seldom consistent even at very small scales. For example, the Arctos classifications for Neotoma devia ([http://arctos.database.museum/name/Neotoma%20devia](http://arctos.database.museum/name/Neotoma%20devia)):

<img width="344" alt="screen shot 2018-09-14 at 9 33 06 am" src="https://user-images.githubusercontent.com/5720791/45563109-36e11980-b801-11e8-907b-2015ac019676.png">

and Neotoma devia monstrabilis ([http://arctos.database.museum/name/Neotoma%20devia%20monstrabilis](http://arctos.database.museum/name/Neotoma%20devia%20monstrabilis)):

<img width="465" alt="screen shot 2018-09-14 at 9 33 52 am" src="https://user-images.githubusercontent.com/5720791/45563137-52e4bb00-b801-11e8-9d59-0d58a5744223.png">

diverge at the level of subfamily.

This inconsistency is not possible in hierarchical data, so the import process will attempt reconciliation. This will very likely result in orphaned ranks.

<img width="282" alt="screen shot 2018-09-14 at 9 35 28 am" src="https://user-images.githubusercontent.com/5720791/45563225-94756600-b801-11e8-9ce0-2328e3fbdadd.png">

In this example, the processor encountered subfamily "Neotominae" first and so "Sigmodontinae" has been ignored. It is necessary to reconcile these discrepancies before exporting the data back to Arctos. 

Dealing with these inconsistencies is a very large proportion of the work involved, and the source of all data lost in the hierarchical editor. For collections which can manage specimen data under a hierarchical taxonomy, we highly recommend avoiding sources which are edited with tools that allow the existence of inconsistent data.

## Impacts

Changing the subfamily of Neotoma in the Arctos single-record editor is a hit-or-miss prospect. A user would have to find all records which are their idea of Neotoma (e.g., exlude those which are homonyms or hemihomonyms), update each individually, and hope that the process of editing 145 records has somehow not introduced other inconsistencies.

A request for DBA update would involve a non-taxonomist attempting to match strings in a system with tens of thousands of known homonyms. This has not worked well in the past.

The classification bulkloader can work, but runs the same risk of encountering [hemi]homonyms as the DBA update. Finding the records to update becomes increasingly difficult when the names do not share strings - finding Neotoma is straightforward, but finding all genera which should be under Neotominae is effectively impossible due to variations in the data.

Importing data to the classification bulkloader comes with all of the above difficulties in finding data, but unlike other tools the editor provides reports for missed or inconsistent data. Orphaned terms provide another strong indication of inconsistency. For example, finding "Arachnida" somewhere in the Neotoma data might indicate that a homonym has been used for identifications in unexpected ways. (The classification bulkloader would simply over-write the spider classifications, potentially altering specimens in unrelated collections.)

Importing clean data - that which has not been edited by non-hierarchical tools - to the hierarchical editor involves only providing a "seed" (eg, "Neotoma" or "Cricetidae") and clicking a button.

Changing the family of Neotoma in the hierarchical editor involves only dragging the term "Neotoma" to a new parent.

A user attempting to find specimens amongst inconsistent data will almost certainly fail without knowing they've failed. For example, a search for "Neotominae" against the classification data above will find Neotoma devia but not Neotoma devia monstrabilis. Most users will not realize that they're missing a subspecies, but instead will assume that what they've found is all that's available from Arctos and move on. 

A user attempting to find specimens amongst consistent data will find all or nothing. A search for "Neotominae" against consistent data will find either all Neotoma or none. A user finding no specimens will generally realize that their result is unlikely and continue looking (perhaps by visiting a taxonomy page before performing another search). 

# Using the Hierarchial Editor

## Overview

Note that the Hierarchical tool can only be used to structure classifications in Arctos and Arctos Plants.  It cannot be used to clean up classifications in the source WoRMS (via Arctos) which is managed externally by the World Register of Marine Species. 

1. Create a dataset (hierarchy name). This is a group of names which are managed together. Datasets are wholly arbitrary "working groups" of
names which may be created for any reason and deleted at any time without affecting any "read" data. Datasets do not necessarily need to correspond with Sources in core Arctos taxonomy. It is possible, for example, to manage dataset "shrews" and dataset "voles" separately, but repatriate them to core Arctos Source "shrews and voles." (Higher taxonomy should be carefully coordinated in such a system.)

2. Find data to import. A common method is to use the "download" link from any Arctos taxon page; it can attempt to build hierarchical data from whatever's found. Alternatively, a CSV template is availabe, and data from any source may be munged into it.

3. Deal with errors. Core Arctos data (and taxonomy itself) is not hierarchical, and the download scripts which convert seeded taxa
to a hierarchical structure are very likely to encounter errors which should be dealt with early in the process. Fixing errors may be best
done by editing single records in Arctos, deleting local data, and re-seeding. Errors may be fixed in the download CSV before loading to the editor, or at any other time.

4. Manage data hierarchically.

5. Export your data to the Arctos classification bulkloader.

6. Review data in the bulkloader (it will be in tabular/spreadsheet format), 
repatriate to Arctos using the classification bulkloader.


## Tips and Tricks

Some operations are easier done in text files. To make a consistent change across a dataset, the following actions may be performed:

1. Download CSV
2. Edit using any CSV editor. For example, [nomenclatural_code](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxon_term#nomenclatural_code) could be added to all records more efficiently in text form.
3. Delete the contents of the dataset
4. Upload the modified CSV, continue editing hierarchically 

# Example: Import from Arctos, export to new Source

Open the hierarchical editor and create a source if you haven't already.

<img width="470" alt="Screen Shot 2021-04-05 at 8 23 02 AM" src="https://user-images.githubusercontent.com/5720791/113590976-32abc000-95e8-11eb-8c8c-db922972e282.png">


Find some taxon and click download


<img width="640" alt="Screen Shot 2021-04-05 at 8 19 21 AM" src="https://user-images.githubusercontent.com/5720791/113590674-c7fa8480-95e7-11eb-8f63-669e7d85e78d.png">

Use Option Two with your Source

<img width="773" alt="Screen Shot 2021-04-05 at 11 23 08 AM" src="https://user-images.githubusercontent.com/5720791/113609947-56c7cb00-9601-11eb-8aa6-5bf3b27d88cb.png">

Back to the hierarchical editor, click...

<img width="149" alt="Screen Shot 2021-04-05 at 11 27 41 AM" src="https://user-images.githubusercontent.com/5720791/113610462-03a24800-9602-11eb-85f1-0df27a6fb4eb.png">

First option, choose file

<img width="771" alt="Screen Shot 2021-04-05 at 11 28 38 AM" src="https://user-images.githubusercontent.com/5720791/113610521-1caaf900-9602-11eb-8361-4f04e8d1b54c.png">

continue

<img width="227" alt="Screen Shot 2021-04-05 at 11 29 09 AM" src="https://user-images.githubusercontent.com/5720791/113610568-2a607e80-9602-11eb-8347-fd2d29a0de04.png">


It did stuff

<img width="94" alt="Screen Shot 2021-04-05 at 11 29 36 AM" src="https://user-images.githubusercontent.com/5720791/113610646-42d09900-9602-11eb-919b-65da2f6d857d.png">

Manage

<img width="239" alt="Screen Shot 2021-04-05 at 11 30 15 AM" src="https://user-images.githubusercontent.com/5720791/113610709-55e36900-9602-11eb-9b09-76366974ccfb.png">

Data. Note the outliers - this should be expected, it's just a reflection of the inconsistent data in the Arctos classification, drag stuff around to rearrange

<img width="386" alt="Screen Shot 2021-04-05 at 11 24 43 AM" src="https://user-images.githubusercontent.com/5720791/113610127-91c9fe80-9601-11eb-9467-9ef411cf856e.png">

To save/repatriate back to "core Arctos", first navigate back to hierarchical editor home screen, then select a target source and save.

<img width="401" alt="Screen Shot 2021-04-05 at 11 34 14 AM" src="https://user-images.githubusercontent.com/5720791/113611128-f20d7000-9602-11eb-9253-eef123c95187.png">


Export:

<img width="158" alt="Screen Shot 2021-04-05 at 11 35 08 AM" src="https://user-images.githubusercontent.com/5720791/113611179-03ef1300-9603-11eb-84c0-ce67b893493a.png">

Status will change

<img width="213" alt="Screen Shot 2021-04-05 at 11 50 14 AM" src="https://user-images.githubusercontent.com/5720791/113612807-271ac200-9605-11eb-872f-206cfe67cbe4.png">

Wait a while (on production, on test run ScheduledTasks/hier_to_bulk.cfm), when status has fully changed again....

<img width="477" alt="Screen Shot 2021-04-05 at 11 51 41 AM" src="https://user-images.githubusercontent.com/5720791/113612926-4f0a2580-9605-11eb-9a0a-87430d847ba1.png">

....check classification bulkloader

<img width="504" alt="Screen Shot 2021-04-05 at 11 35 42 AM" src="https://user-images.githubusercontent.com/5720791/113611293-2aad4980-9603-11eb-82cf-2e53793e6d6a.png">

It works like other Component Loaders

<img width="574" alt="Screen Shot 2021-04-05 at 11 52 34 AM" src="https://user-images.githubusercontent.com/5720791/113613023-77921f80-9605-11eb-9516-ae632be4e297.png">

Change to autoload....

<img width="474" alt="Screen Shot 2021-04-05 at 11 53 32 AM" src="https://user-images.githubusercontent.com/5720791/113613139-9db7bf80-9605-11eb-8aab-6794f22cd367.png">

...and hang out a while (or on test, run component_loader). When the classification loader has been cleared, the data will be available in the normal place

<img width="1119" alt="Screen Shot 2021-04-05 at 11 55 23 AM" src="https://user-images.githubusercontent.com/5720791/113613309-e40d1e80-9605-11eb-98f8-ab3fd51d2e80.png">

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Manage-Taxonomy-Hierarchically.markdown" target="_blank">here</a>.
