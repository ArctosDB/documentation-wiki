---
title: How To Manage Taxonomy in the WoRMS (via Arctos) Source
layout: default_toc
author: Phyllis Sharp
date: 2021-06-15
---
[Request an Update to this How To](https://github.com/ArctosDB/documentation-wiki/issues/new?assignees=&labels=How+To+Update&template=how-to-update.md&title=How+To+%5Badd+title%5D+update)

# How to Manage Taxonomy in the WoRMS (via Arctos) Source

WoRMS (via Arctos) is an externally managed taxonomic resource.  Whereas Arctos and Arctos Plants are managed by Arctos users, WoRMS (via Arctos) is 
managed by the [World Register of Marine Species](http://www.marinespecies.org).  It is highly recommended that collections of marine invertebrates select WoRMS 
(via Arctos) as their first taxonomic source.  The second taxonomic source should be Arctos, Arctos Plants or another appropriate source.

<img width="390" alt="image" src="https://user-images.githubusercontent.com/15368365/122125556-da661b00-cded-11eb-9bd0-e774e40f6fed.png">

Arctos uploads taxon names, classifications, and metadata from WoRMS and refreshes continually using the WoRMS AphiaID.  As an example, here are the entries for _Conus marmoreus_ as it appears in WoRMS and in WoRMS (via Arctos).

<img width="981" alt="image" src="https://user-images.githubusercontent.com/15368365/122125637-f2d63580-cded-11eb-90d3-194ea07b087c.png">

<img width="987" alt="image" src="https://user-images.githubusercontent.com/15368365/122125665-fb2e7080-cded-11eb-8196-16ba7da14119.png">

## Linking with WoRMS Aphia ID

All taxon names in WoRMS (via Arctos) must have an AphiaID.  

The AphiaID 215457 is the unique identifier for _Conus marmoreus_.  This is used by Arctos to link the taxon name in the Arctos database to the WoRMS classification.  Clicking **[refresh]** will bring into WoRMS (via Arctos) any changes that have been made at WoRMS since the last refresh.

Because this is an externally managed resource, there is no reason or need to edit the classification or metadata.  Any changes made to the entry will be overwritten with the next refresh.  

## How to Manage Taxa not in WoRMS

If a name is not in WoRMS but is needed for your collection, the classification and metadata should be added to the second source such as Arctos or Arctos
Plants.  It is helpful to add your name as “Managed by” in the metadata.  You will need to manage any updates or changes in the higher classification or
metadata.  

When WoRMS (via Arctos) is the primary source and there is no WoRMS (via Arctos) classification, Arctos uses the classification from the second 
source.  If no second source is selected or there is no classification in the second source, the identification in catalog record will have no higher
classification and may not be searchable.

To add a taxon name and classification to your second source, see [How to Create Linnean Taxa](https://handbook.arctosdb.org/how_to/How-to-Create-Taxa.html) in 
the Handbook.  If WoRMS adds that name later, the classification will automatically appear with the next refresh.  There may be a lag between the time that
names are added to WoRMS and their first upload to WoRMS (via Arctos).  If the classification is not yet in WoRMS (via Arctos), it can be added by entering the 
AphiaID as metadata and refreshing the classification.  

Alternatively, use the A {string} identification for invalid taxon names that do not have a valid synonym.

<img width="512" alt="image" src="https://user-images.githubusercontent.com/15368365/122126404-e9999880-cdee-11eb-94dc-1e6354568d2b.png">

## WoRMS use of subgenera

For the phylum Mollusca, WoRMS uses the classifications provided in [MolluscaBase](http://www.molluscabase.org/).  MolluscaBase has adopted the editorial convention to treat subgenera as an alternate representation.  

      ‘Some scientists make an extensive use of subgenera and/or subspecies. Names including subgenera are flagged in 
      MolluscaBase as "alternate representation",i.e. both name strings (with/without subgenus) are taxonomically 
      correct, but only the binomen is flagged as "accepted".’
      
Arctos classification fields include subgenus, but the taxon name field does not accept the parentheses ( ) that are used around the subgenus.  Therefore, none 
of the molluscan taxon names with subgenera are included in the WoRMS (via Arctos) table and should not be added even though they may have an AphiaID. 

Instead, clone the WoRMS classification into the Arctos or Arctos Plant secondary source.  To do so, copy the AphiaID from the WoRMS name with the subgenus into
the new taxon name without the subgenus.  Refresh to bring up the entire classification and metadata.  Then clone that classification into Arctos and delete it
from WoRMS (via Arctos). This will capture the subgenus in the classification, but it will not appear in the taxon name.  

See, for example, [Anadara nodifera](https://arctos.database.museum/name/Anadara%20nodifera).  The classification from WoRMS has been cloned into Arctos using
the AphiaID 871395.  This classification shows the subgenus Tegillarca.  Using this approach enables Arctos users to follow the arrow directly to the WoRMS 
entry.   

<img width="467" alt="image" src="https://user-images.githubusercontent.com/15368365/122127250-23b76a00-cdf0-11eb-8752-875d284a1d69.png">

<img width="709" alt="image" src="https://user-images.githubusercontent.com/15368365/122127258-2b770e80-cdf0-11eb-901b-1972b5923cac.png">

If you add a taxon name with a WoRMS (via Arctos) taxon status of INVALID, be sure to link it to the VALID taxon name. Click on **[Edit Name + Related Data]** to access this form. Here the invalid name has been linked to the preferred name Tegillarca nodifera. 

<img width="888" alt="image" src="https://user-images.githubusercontent.com/15368365/122129685-b0aff280-cdf3-11eb-8428-11784ed30e78.png">

Most names with a subgenus in WoRMS are invalid.  Exceptions are those in echinodermata, cnidaria, and other non-molluscan phyla.

[Request an Update to this How To](https://github.com/ArctosDB/documentation-wiki/issues/new?assignees=&labels=How+To+Update&template=how-to-update.md&title=How+To+%5Badd+title%5D+update)
