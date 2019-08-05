---
title: How To Create Taxa
layout: default_toc
author: Phyllis Sharp, Teresa J. Mayfield-Meyer
date: 2019-04-15
---

# How To Create Taxa

The instructions in this How To are also given on each screen in Arctos as you create a new taxon.  Suggestions and clarifications to improve the instructions here and on the screens are always welcome.  Depending on the computer (PC or Mac) you are using and your browser, your images may differ slightly from what you see here.

## Terms

The completed Arctos taxon page for *Laubierina peregrinator* identifies the key elements of each taxon.

![image](https://user-images.githubusercontent.com/15368365/56143548-fa73c880-5f5d-11e9-9db7-35f829b649ec.png)

## Create Taxon Name

The first step in creating a taxon is to create the name. Always search Arctos before creating taxon names.  Arctos will not let you create a name that already exists.  Do not try to create duplicate namestrings, even in the case of homonyms, hemihomonyms, committee rulings, or for any other reason.  

There are two ways that taxon names are created.
For users with assigned taxonomic authority, under the main menu Search/Taxonomy appears a link “Create a new name.”

![image](https://user-images.githubusercontent.com/15368365/56133952-cb079080-5f4a-11e9-8575-714f9701a73b.png)

Alternatively, within the taxon page with the desired higher classification, click the “clone classification as a new name” link.    

![image](https://user-images.githubusercontent.com/15368365/56133980-dce93380-5f4a-11e9-8070-922f97243b7b.png)

Both approaches take you to the next screen where you will enter the new taxon name.

![image](https://user-images.githubusercontent.com/15368365/56136478-1bcdb800-5f50-11e9-92ee-65af42970952.png)

### Validation Service

When taxon names are created or edited, Arctos checks them against various external services. This check is a tool, not an authority; all services have significant problems as of this writing. “Valid” names will occasionally be flagged as invalid, and erroneous names will occasionally pass.  One of the services contains data from Arctos, so the check is a bit circular. Users remain fully responsible for the content of Arctos taxonomy. “Valid for Arctos” taxonomy is described in [Taxonomy](http://handbook.arctosdb.org/documentation/taxonomy.html) in Documentation.  

### Taxonomy Source

There are two types of taxonomic classifications: local and webservices.  It is generally not possible to edit webservice classifications.  These are pulled from GlobalNames and they are automatically maintained, so edits would be lost with the next update.  This does not preclude using those webservice classifications as the preferred source for your collection, nor from editing them via any tools or collaborating with sources such as ITIS before they are pushed to GlobalNames and then Arctos. 

Each collection chooses one source as its preferred source.  There are three [Local Sources](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXONOMY_SOURCE) currently available: 
- Arctos is a locally-managed classification for everything but plants.  It does contains some paleontological plant classifications.
- Arctos Plants is a locally-managed classification for plants which are controlled by ICBN code.
- WoRMS (via Arctos) contains automatically-maintained data from [http://www.marinespecies.org](http://www.marinespecies.org), in addition to some locally-maintained data (for taxa not in WoRMS but cataloged in collections which use this classification). To manage or create classifications in this source, simply provide an "aphiaid" as non-classification metadata and click the "refresh" link. 

It is important to choose the intended collection's preferred source when creating classification data. Local sources are often limited to hierarchical data and managed through the [hierarchical data editor](http://handbook.arctosdb.org/how_to/How-to-Manage-Taxonomy-Hierarchically.html).

**Classifications** may be created one of three ways:
1.	cloning one from a webservice through Globalnames, 
2.	cloning an existing classification 
3.	manually creating a local source classification.  

## Create Classification from webservice

After confirming that the taxon is not yet in Arctos, click “Create a New Name.”  Enter the name string in the Scientific Name field and click “Create Name.”

![image](https://user-images.githubusercontent.com/15368365/56134252-7a446780-5f4b-11e9-8c83-f25fe9f0c151.png)

Next “Refresh/pull GlobalNames” to access all webservice classifications for the new scientific name. 

![image](https://user-images.githubusercontent.com/15368365/56134322-98aa6300-5f4b-11e9-99f0-4e00f186e95f.png)

Here is the list of all webservices with a classification for that taxon.

![image](https://user-images.githubusercontent.com/15368365/56134368-abbd3300-5f4b-11e9-82aa-ac47edfe5139.png)

Select the preferred webservice and click [Clone Classification].  Note that the Author is a non-classification term and will not upload.  It is recommended that you copy it from the source and paste it into the next screen.

![image](https://user-images.githubusercontent.com/15368365/56134403-c1caf380-5f4b-11e9-9da2-d4dcc43a60d6.png)

Select the Local Source used for your collection: Arctos, Arctos Plants, or WoRMS (via Arctos).  Note the cautions about the taxon cloning process in the red box.  Only the listed ranks will transfer from the selected source to the local classification.  These ranks are used to build “specimen data” which are used to create labels, locate specimens, etc.  If any are missing, you can add them on the next screen.

After selecting the Source, click “Create cloned classification.”

![image](https://user-images.githubusercontent.com/15368365/56134472-ddce9500-5f4b-11e9-8126-f09f0b1b5a1a.png)

Enter the Classification Metadata appropriate to your taxon.  Add as many rows as needed.  Two terms will be created automatically from the taxon name and classification.  These are the display_name (an HTML-formatted namestring) and the scientific_name.

The following terms are created by the user and are selected from the drop-down menu:
-	**nomenclatural_code** controls how display_name is suggested, and helps format display. Most common values are “ICZN” and “ICNB.”  This is a mandatory field.
-	**author_text** is the author of ICZN names, or the species author of ICBN names.  Always include the author (with or without parentheses as appropriate) unless no author is given.  It will be added to the display_name.  
-	**infraspecific_author** is the author of the infraspecific epithet in ICBN names
-	**taxon-status** is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_STATUS).  While this is not mandatory, it is extremely helpful to users to know if the taxon is valid or invalid, extant or extinct, etc.
-	**source_authority** should list the publication, website or other authority for the taxon.  
-	**remark** is an open field for any comment that will be helpful to Arctos users.
-	**preferred name** is completed for "invalid" taxa to identify the synonym that is the valid taxon name.  This is especially helpful when there are multiple synonyms listed.
-	**aphiaID** is the unique number assigned to that taxon by the [World Register of Marine Species](http://www.marinespecies.org/)

![Screen Shot 2019-08-05 at 9 49 25 AM](https://user-images.githubusercontent.com/15368365/62477514-64f78100-b766-11e9-9705-b7f0e50bbb8a.png)

### Classification Terms 

Ranks listed under TermType in classifications are used to build "specimen data," create labels, locate specimens from the ranked search term (such as family) and sort search results in “specimen summary.”  Ranks are controlled by a [code table]( https://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_TERM)

The ordering of these terms is unimportant, and un-paired terms will be ignored and deleted when you save the record.

Review the uploaded **Classification terms** for accuracy. You can drag rows to reorder.  Ranks are optional but may help users locate your specimens.  The following mixture of ordered ranked and unranked terms is possible (and common).  

![Screen Shot 2019-04-15 at 7 03 27 AM](https://user-images.githubusercontent.com/15368365/56134838-a0b6d280-5f4c-11e9-9079-6d29418ca29e.png)

Infrageneric terms should be supplied as multinomials: species=*Sorex cinereus*, never only *cinereus*.
[http://arctos.database.museum/name/Carex%20brunnescens%20subsp.%20alaskana#Arctos](http://arctos.database.museum/name/Carex%20brunnescens%20subsp.%20alaskana#Arctos) is an example of a botanical name which includes a subspecific epithet and two authors.

The classification for our example imported through GlobalNames appears below.  Click “Save Edits” to save all data for your taxon.

![image](https://user-images.githubusercontent.com/15368365/56134894-c512af00-5f4c-11e9-8b0f-8f2ce3d50261.png)

At [View Taxon Page] you can check for accuracy and see how the taxon will appear to users.

![image](https://user-images.githubusercontent.com/15368365/56134929-d956ac00-5f4c-11e9-9f2d-9879894131bb.png)

### Possible inconsistencies from webservices

If you create an invalid taxon, webservices may create the taxon with the accepted taxon causing a difference between the SCIENTIFIC_NAME based on your Taxon Name and the species or other ranked term based on the webservice name.

In this example, the taxon name entered was *Charonia tritonis variegata*.  The website World Register of Marine Species accepts *Charonia variegata* and not *Charonia tritonis variegata*.  When cloning a webservice taxon, always check that there are no ranks in red indicating a discrepancy.  In this case, the matching species and subspecies must be selected, even if the taxon status is “invalid.”  The taxon can then be linked as a synonym to the accepted taxon *Charonia variegata*. 

![image](https://user-images.githubusercontent.com/15368365/56134997-0a36e100-5f4d-11e9-93bb-5481a7d7fbd6.png)

In the second, but similar example, the webservice accepts *Charonia variegata* for *Charonia sequenzae*.  Saving the taxon without selecting the matching species will create a species in the classification that does not match the taxon name, which will make it difficult for users to find specimens.

![image](https://user-images.githubusercontent.com/15368365/56135037-20dd3800-5f4d-11e9-98e6-caa23270c00f.png)

## Create Classification by Cloning Local Source

Often it is convenient to clone an existing classification into a new taxon.  From the main menu select Search/Taxonomy and search for the Taxon Name you want to clone.  In this case, we want to add the taxon *Astele stenomphala* E. A. Smith, 1898, and we know that the higher classification for the genus Astele is accurate.  We will click on [Clone Classification as new name].  

![image](https://user-images.githubusercontent.com/15368365/56135183-67329700-5f4d-11e9-9adf-b664966e3220.png)

On the next screen, we will enter just the species name without the author.  In this case we selected “create name with cleaned classification” because of changes in the non-classification data.  As always, be certain to read the information outlined in red as it can help you avoid many errors.

![image](https://user-images.githubusercontent.com/15368365/56135222-7dd8ee00-5f4d-11e9-94bc-7ccc66a00296.png)

On the following screen, the nomenclatural code has already been entered by Arctos. 

![image](https://user-images.githubusercontent.com/15368365/56135263-93e6ae80-5f4d-11e9-9ae0-66890187b0cd.png)

We will need to add rows to the Classifications Metadata table for the 1) author 2) taxon status 3) source and 4) any other remarks. 

![image](https://user-images.githubusercontent.com/15368365/56135312-ae208c80-5f4d-11e9-82d4-db94ce79bd8a.png)

We also will pull the species name to the bottom of the classification list.  Arctos has cloned the higher classification terms from Astele.

![image](https://user-images.githubusercontent.com/15368365/56135347-c1335c80-5f4d-11e9-9685-ea0ed2332144.png)

Click “Save Edits” then [View Taxon Page] to review your new taxon.

## Create Classification manually

If there is no webservice or local classification to clone, you can create the classification from scratch.  Follow the above instructions to create the taxon name but select “Create Classification.”

![image](https://user-images.githubusercontent.com/15368365/56135404-e758fc80-5f4d-11e9-8726-0f0ffc4ebfa0.png)

All fields will be blank.  Follow the instructions to create the classification for your taxon from kingdom through species plus the non-classification terms then click “Create Classification.”  You will be able to edit your classification as needed until you are satisfied with each field.

![image](https://user-images.githubusercontent.com/15368365/56135452-035c9e00-5f4e-11e9-928c-f33248ae79c6.png)


