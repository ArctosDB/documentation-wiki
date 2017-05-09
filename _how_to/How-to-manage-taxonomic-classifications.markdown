---
title: How To Manage Taxonomic Classifications
layout: default_toc
---

# Managing Taxonomic Classifications: Overview

All taxon names live under a unique index, including homonyms and hemihomonyms. "The specimen's taxonomy" comes from the collection's preferred taxonomy source, set under manage collection. It is generally advisable to only alter classifications used by your collection. Do not do anything that might mess with another collections' data without first consulting them (use the Contact link if necessary; the AC can mediate). For example, if you are working in a parasite collection and find an insect homonym, do NOT edit higher taxonomy (which would "edit taxonomy" for the insect specimens) without consulting the relevant collection managers.

Taxonomy only works properly when there is one named term for each "rank" pulled into Flat. Avoid having two (or more) terms ranked "family" and avoid unranked family-level terms.

Try to include "common" ranked terms for searchability - kingdom, phylum, order, family.

# Common Problems

## The name I want to use exists, there's no classification in "my" preferred taxonomy

* Find a similar classification; there's usually one from GlobalNames.
* Click Clone Classification.
* Select your collection's preferred Source
* Edit the results

If there are no classifications, or no suitable classifications, you may click "create classification" to start from scratch. Please carefully follow all editing guidelines.

## The name I want to use does not exist

* Find a similar name
* Click "clone classification as new name"
* Type the name, pick a source. Note that names are published strings accepted as taxonomy by the scientific community (but not necessarily current or valid).
* Click the button, edit as necessary.

## There's a homonym or hemi-homonym (two names spelled the same but not sharing higher taxonomy)

* If there's no classification in your collection's preferred classification, see **The name I want to use exists, there's no classification in "my" preferred taxonomy**. Names may have multiple "definitions" in multiple classifications.
* If there's a homonym among collections using a shared classification, us the contact button on the bottom of any Arctos page for help. Example: Philometra is a lepidopteran under the Arctos classification, you also use the Arctos classification and need to catalog Philometra-the-nematode.

# Editing non-classification data

* Non-classification data include the scientific name, common name, and relationships to other taxa. Taxon relationship types are managed in the code table [TAXON_RELATIONSHIP](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXON_RELATION)
* When a taxon gets merged (i.e., synonymized) into another taxon, you want to create a relationship between these two names. The old name becomes the 'synonym of' the new name, and the new name becomes the 'accepted synonym of'
