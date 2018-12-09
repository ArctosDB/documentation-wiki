---
title: How To Create Taxa
layout: default_toc
author: Phyllis Sharp, Teresa J. Mayfield-Meyer
date: 2018-12-09
---

# How To Create Taxa

The instructions in this How To are also given on each screen in Arctos as you create a new taxon.  Suggestions and clarifications to improve the instructions here and on the screens are always welcome.

## Create Taxon Name

The first step in creating a taxon is to create the name. Always search Arctos before creating taxon names.  Arctos will not let you create a name that already exists.  Do not try to create duplicate namestrings, even in the case of homonyms, hemihomonyms, committee rulings, or for any other reason.  There are two ways that taxon names are created, both require the Arctos user to have the manage_taxonomy role.

### Method 1 - Name, Then Related Classification

1. From the Arctos main menu select Search>Taxonomy. 
2. Type the name into the Taxon Name field. 
3. If no results are returned, click the “Create a new name" link. 
4. Type the name into the Scientific Name field. 
5. Click the Create Name button. 

Note that this only creates the name which can be used in object identifications. The name does not have a related classification and objects using that name will only be found in searches under the EXACT name. To facilitate discovery, if your collection is using the Arctos or Arctos Plants Taxonomy, a classification related to the name should be created in the appropriate local taxonomy. A classification can be added to the newly created name from the Taxonomy Details page for the name. You will arrive at this page after creating the name.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/taxonomy_details.JPG)

The list of External Links at the bottom of the page indicates the external Webservices in which the name may exist. You can make use of those to create a local classification by following these steps.

1. Click the [Refresh/pull GlobalNames] link.
2. Available classifications from the Webservice taxonomies will be presented. Select the preferred webservice and click [Clone Classification].
3. Select the preferred local Source: Arctos, Arctos Plants, or WoRMS (via Arctos).  Note the cautions about the taxon cloning process in the red box.  Only the listed ranks will transfer from the selected source to the local classification.  These ranks are used to build “specimen data” which are used to create labels, locate specimens, etc.  If any are missing, you can add them on the next screen.
After selecting the Source, click “Create cloned classification.”


### Method 2 - Name With Related classification
