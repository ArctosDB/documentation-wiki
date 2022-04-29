---
title: How To Record Prior Inclusion in Another Collection
author: Teresa Mayfield-Meyer
date: 2022-04-21
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

[Add to current update request](https://github.com/ArctosDB/documentation-wiki/issues/265)

# How To Record Prior Inclusion in Another Collection

Objects have often passed through many hands before finally arriving in a museum collection and provenance information is valuable to historians and can also sometimes help to verify the veracity of a record.

When an object was once part of another collection this may be denoted with stamps, printed labels, or handwritten entries. In herbaria, specimens often have stamps related to exchange clubs.

Recording this in Arctos can happen in many ways, depending upon your needs you may choose to use an agent, a project or an entity. Following are examples of these methods and some of the reasons people chose those methods.

## Agents

### Reasons to use an Agent
 - Agents are great when a human or some human-created "organization" is involved. ("Exchange Collection of E. J. Hill" is certainly included.)
 - A data entry operator can use agents without additional permissions (unlike projects or entities) and so e.g., "Edward Royal Warren Collection" shows up right beneath the collector name on a catalog record. It seems intuitive to display people names together. People have outlined above why projects aren't workable. And with Entities, the verbatim collection name won't display on catalog records - it will say "Entity:67" vs. "Edward Royal Warren Collection," so Agents just seem all-around more user-friendly.
 - We already use this for Estates (e.g., Candy Waugaman Estate ) to describe an individual's collection that comes in after their death, we should use a similar structure to mark a similar assemblage of items from when they were alive.
 - Agent Activity nicely collates everything across institutions, and meets the need of attaching individual records vs. creating a transaction. The "not the same as" relationship disambiguates collectors with two collections, and most importantly, using Agents makes the collection name easily findable and visible to outside users from the catalog record.
 
### Use an Agent to record inclusion in a prior collection
Complete the following steps to record an object's previous inclusion in another collection.

 - [Search Agents](https://arctos.database.museum/agent.cfm) to see if the previous collection exists in Arctos. If it does not, create an agent of type [other agent](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctagent_type#other_agent) using the collection's name as preferred name. See [Flora of Manitoba](https://arctos.database.museum/agent/21339709) for an example.
 - Add the agent to the appropriate catalog record with the role [collector](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollector_role#collector).
 
 ## Entities
 
 ### Reasons to use an Entity
  - You want to record the kinds of data an Entity can carry, or you're just looking for a good generic identifier that can be shared across multiple records/institutions, including those external to Arctos
  - The naive understanding is surely that a collection series is not an agent but an entity.
  
  ### Use an Entity to record inclusion in a prior collection
  Complete the following steps to record an object's previous inclusion in another collection.
  
  - [Search Entities](https://arctos.database.museum/SpecimenSearch.cfm?guid_prefix=Arctos%3AEntity) to see if the previous collection exists as an Entity in Arctos If it does not, create the entity and use the A {string} identification formula to name the entity appropriately for future searches. If this method were used for the above, Plantae {Flora of Manitoba} would be an appropriate identification.
  - Add the Entity url to the appropriate catalog record(s) using an other identifier. 
  
  ## Projects
  
  ### Reasons to use a Project
   - When following transaction data is important - projects were created for https://arctos.database.museum/project/15, Native hunters want to know how "their" seals contribute to science (via future loans and publications)
   -  A preference for the format of the project page and the ablity to share that project page with others. 
   
   ### Use a Project to record inclusion in a prior collection
   - [Search Projects](https://arctos.database.museum/SpecimenUsage.cfm)to see if the previous collection exists as a Project in Arctos If it does not, create the project.
   - Create a data loan for the catalog records that should be associated with the project and add the loan to the project.

