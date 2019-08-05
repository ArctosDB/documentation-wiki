---
title: How To Edit Taxa
layout: default_toc
author: Phyllis Sharp
date: 2019-04-15
---


# How to Edit Taxa

Users with taxonomic authority can edit taxonomy by altering an individual taxonomic record or by using the Hierarchical tool to manage multiple records.  These instructions cover the editing of individual records.  See [How to Manage Taxonomy Hierarchically](http://handbook.arctosdb.org/how_to/How-to-Manage-Taxonomy-Hierarchically.html) to manage multiple taxa.  

These instructions apply to all three Taxonomic Sources: Arctos, Arctos Plants, and WoRMS (via Arctos).  You should only modify taxa in the source that you use for your collection.  The taxa in WoRMS (via Arctos) are created and continually maintained through a webservice.  Taxa should not be added to WoRMS (via Arctos) without a complete classification and a valid source authority.  

## Taxon Names

Taxon Names cannot be edited.  They can be added and deleted (see below).  Do not consciously create names of no value, misspelled names, etc. and use the link [Comment or report bad data] on the taxon page if you find one.  

### Validation Service

Arctos checks taxon names against various services when they are created or edited. This check is a tool, not an authority; all services have significant problems as of this writing. “Valid” names will occasionally be flagged as invalid, and erroneous names will occasionally pass.  One of the services contains data from Arctos, so the check is a bit circular. Users remain fully responsible for the content of Arctos taxonomy. “Valid for Arctos” taxonomy is described in [Taxonomy](http://handbook.arctosdb.org/documentation/taxonomy.html) in Documentation. 

## To edit an existing record

### Editing Classification Metadata data

Search for the taxon you need to edit in Search/Taxonomy.  In this case, we need to make a change of the taxon status from valid to invalid.  The authority for this change is the World Register of Marine Species.  

![image](https://user-images.githubusercontent.com/15368365/56094791-9f759f00-5e93-11e9-9837-94be4a0b8fde.png)

We open the Arctos record for *Haliotis mariae dentata*.

![image](https://user-images.githubusercontent.com/15368365/56094807-be743100-5e93-11e9-9471-a6f39d072ede.png)

Click [Edit Classification] which links to a screen with the classification and classification metadata terms.  

![Screen Shot 2019-08-05 at 10 06 29 AM](https://user-images.githubusercontent.com/15368365/62478618-bf91dc80-b768-11e9-8890-3a6cc6326b38.png)

We want to change the classification metadata.  We change the taxon status from “valid” to “invalid.”  We add the source of the change to the “source_authority” field.  

![Screen Shot 2019-08-05 at 10 04 12 AM](https://user-images.githubusercontent.com/15368365/62478471-69bd3480-b768-11e9-99ed-17c222463b36.png)

Alternatively, this could be placed in a “remark” field.

After making the changes, click “Save Edits” then [View Taxon Page] to see the edits as they will appear on the taxon page.

![Screen Shot 2019-08-05 at 10 04 12 AM](https://user-images.githubusercontent.com/15368365/62478471-69bd3480-b768-11e9-99ed-17c222463b36.png)

### Editing Taxon Relationships

Since we have changed the taxon status to “invalid,” we need to link to the valid taxon.  In this case, WoRMS shows the valid taxon to be *Haliotis mariae*.  This is classification metadata that is entered on a separate screen by clicking [Edit Name + Related Data]. 

In this case, we want to create a link between the valid taxon *Haliotis mariae* and this invalid taxon *Haliotis mariae dentata*.  This can be done from either taxon page.  Under Related Taxa, we choose “synonym of” and enter the related taxon *Haliotis mariae dentata*.  Our Authority is WoRMS and, if we want, we can enter a URL, a WoRMS AphiaID, an LSID identifier or any other appropriate authority.  

![image](https://user-images.githubusercontent.com/15368365/56095053-1f9d0400-5e96-11e9-9927-08a0a5c8c9ba.png)

When we return to the taxon pages, we see that the taxon relationship has been added both taxon names.

![image](https://user-images.githubusercontent.com/15368365/56095067-42c7b380-5e96-11e9-97ac-09117d08c4af.png)

### Editing Taxon classifications by Editing each Field in a Taxon Record

We can edit a taxonomic classification several ways.  One option is to can edit each field in an existing record.  In this example, *Erronea subviridis dorsalis*, we need to correct the classification and add non-classification data such as the taxon status and author.

![image](https://user-images.githubusercontent.com/15368365/56095090-77d40600-5e96-11e9-852b-ef36ba1c7749.png)

When we click [Edit Classification] we find many red boxes that need attention.

![image](https://user-images.githubusercontent.com/15368365/56095103-9c2fe280-5e96-11e9-80a6-a62582d69bbe.png)

First, we must add the “nomenclatural code” ICZN.  We add a row to add the author text Schilder & Schilder, 1938.  We add a row for the taxon status “valid” and a row for the source authority.  The “display name” and the “scientific name” will be autocreated.  

In the classification, we need to correct “animalia” to “Animalia”      

![image](https://user-images.githubusercontent.com/15368365/56095116-c386af80-5e96-11e9-8315-9d0fc54c309c.png)

We’ll need to delete the incorrect rows.

![image](https://user-images.githubusercontent.com/15368365/56095130-e87b2280-5e96-11e9-8760-d830548de649.png)

We also want to add the subclass Caenogastropoda by adding a row, selecting “subclass” and entering Caenogastropoda.  

![image](https://user-images.githubusercontent.com/15368365/56095141-047ec400-5e97-11e9-9d55-16726f2c1d2e.png)

Then we drag it to its correct position in the classification and Save Edits.  

![image](https://user-images.githubusercontent.com/15368365/56095154-20826580-5e97-11e9-91e6-51d731df83c5.png)

The Arctos Classification shows the changes are complete. 

![image](https://user-images.githubusercontent.com/15368365/56095163-3db73400-5e97-11e9-86a7-8fa1a1da8cbf.png)

Here is the final record on the Taxon Page.

![image](https://user-images.githubusercontent.com/15368365/56095542-4d387c00-5e9b-11e9-8317-5da471e376c9.png)


### Editing Taxon classifications using a Webservice Source

Alternatively, we can edit a record by selecting a webservice source, deleting the erroneous classification and creating a new classification.  In this case, we are updating the classification for *Erronea subviridis dorsalis*.  We open the taxon record and clone the classification from the World Register of Marine Species by clicking “Clone Classification.”  

![image](https://user-images.githubusercontent.com/15368365/56095578-8cff6380-5e9b-11e9-9e1d-6525daa2ffa4.png)

Just as when creating a new taxon, we would complete the non-classification data and save the record.

![image](https://user-images.githubusercontent.com/15368365/56095590-a2748d80-5e9b-11e9-9289-f1a22bffae3e.png)

If you did not delete the erroneous classification before cloning a new one, it is very important that you return to the Taxon Page and delete it.  Otherwise, there will two classifications and you will not be able to search for specimens or manage the taxonomy in the Hierarchical Classification Editor.  

![image](https://user-images.githubusercontent.com/15368365/56095608-c7690080-5e9b-11e9-9e0c-d6b22b1c63e4.png)

Note that deleting a classification for a taxon is different from deleting the taxon name, which is described below.

## Deleting a Taxon Name

Users with taxonomic authority can delete taxon names that are without any validity or value to the Arctos users and to researchers.  Some “invalid” taxa are retained for legacy identifications.  But taxa that do not pass the Google test and are obviously without value may be deleted. 

To perform “The Google Test,” search for the name (it’s best in double quotes).  If there are no results or results only referencing Arctos, it is probably safe to delete the name. Results which include only sources that draw from Arctos (such as GBIF) should be carefully scrutinized to determine if the results are in fact a circular reflection of Arctos data. 

Here the taxon *Calliostoma fronkii* fails the Google test bcause the only result is from Arctos. 

![image](https://user-images.githubusercontent.com/15368365/56095625-f0899100-5e9b-11e9-8d08-8c202c4442b7.png)

Similarly, Amoria canaliculata fails the Google Test.

![image](https://user-images.githubusercontent.com/15368365/56095639-157e0400-5e9c-11e9-8425-11becc0b9ecc.png)

Do not delete names that are not “current” or “accepted,” or those that you do not agree with or won’t use for some particular use case.  Do mark these names “invalid” in the “taxon status” field and link them to the accepted taxon.     

To delete a record, search for the taxon.  Refresh GlobalNames to see if any of our webservices recognize the taxon.  In this case, we have refreshed *Cyprea ocellata* and no webservice has come up.   It appears to be a misspelling of *Cypraea ocellata*, which is an invalid but historically valuable term for *Naria ocellata*.  

![image](https://user-images.githubusercontent.com/15368365/56095662-4827fc80-5e9c-11e9-8c5e-f1215e3fe05f.png)

Also run the Google test.  In this case, one shell dealer has misspelled Cypraea.  The other entries are from OCR translations of older texts in which Cypraea was misread as Cyprea.  

![image](https://user-images.githubusercontent.com/15368365/56095669-6130ad80-5e9c-11e9-9ffd-ac059e99ff9d.png)

You must remove all links to other taxa and there must be no specimens using the species. This taxon meets all those requirements.  Click on [Edit Name + Related Data] to bring up the Taxon Relationship screen.  

![image](https://user-images.githubusercontent.com/15368365/56095710-c7b5cb80-5e9c-11e9-921a-d91ceaf09e6a.png)

Follow the instructions in the red box to ensure that there is no one using the taxon and it should not be in the Arctos taxa tables.  Then click “Delete taxon.”

![image](https://user-images.githubusercontent.com/15368365/56095723-e6b45d80-5e9c-11e9-9ca8-3b05f81d22a3.png)

Arctos will confirm the deletion.  You cannot reverse this but you can recreate the entire entry if needed.

![image](https://user-images.githubusercontent.com/15368365/56095734-0186d200-5e9d-11e9-98db-eb65ffe48838.png)





