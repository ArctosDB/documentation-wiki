---
title: Best Practice - Creating Meaningful Agents 
authors: Teresa J Mayfield-Meyer
date created: 2021-07-27
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

# Best Practice - Creating Meaningful Agents 

What is an Agent? Before you make any decisions about one, you should know what it is. Start by reading the [Agent Documentation](https://handbook.arctosdb.org/documentation/agent.html).

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**  

Agents are shared by all Arctos members. Always use caution when creating or editing a shared resource and make sure that others who might be affected by a change are notified beforehand.

## General Recommendations for Creating Meaningful Agents 

We recommend working with an experienced Arctos operator if you have a lot of people names to review for duplication. Below are some general recommendations for creating meaningful agents and keeping duplication of agents to a minimum..

### Avoid Duplicating Agents
No matter how many roles or alternate names an person or organization has, a single Agent should be in Arctos to describe them. Before new Agent records are created, the database should be carefully queried to check that the “new” Agent is not already in Arctos. Some examples of things to look for include:

 - someone who may have married and is now known by both a birth name and a married name

 - non-English names that may exist in the database under alternative transliterations. (Felix Chernyavski’s name is published in English as Tchernyavski and Chernyavsky.) In these cases, aka Agent Names are required, not additional Agents. Aka names using original alphabet of the agent’s name are an obvious clarification. (Cyrillic, in the example above.)

For legacy data, the above can be a difficult standard. Are Robert Smith, R. Smith, and Bob Smith three agents or one? Sometimes, the activities already recorded for an agent makes the answer clear, e.g., there were probably not two Eleazer Fitzgarrolds collecting grasshoppers in northern Madagascar in the 1930s. (If you are viewing a an agent record, the “Agent Activity” link will show you all of the agent’s actions that are recorded.) Thus, it is useful to provide as much information as possible when creating and editing agent records. If you can figure it out, the database can usefully handle the information. If you cannot figure it out it probably doesn’t matter; having multiple agents collecting under the name “J. Smith” doesn’t really affect any conceivable use of the data, and if one of the agents distinguishes themselves somehow (e.g., through publications), it’s easy to split the combined agent.

To check for names already in Arctos, you can search for them individually or if you have a lot of names to check, you can use the Agent Name Splitter Tool to find exact matches as well as names that are similar. If there are no current Agents that use a name you have searched, you are good to go. If you discover Agents with a similar name, make sure that they are different people so that you don't create a duplicate Agent. 

 - <a href="https://handbook.arctosdb.org/how_to/How-to-Search-Agents.html" target="_blank">How to Search Agents</a>
 - <a href="https://handbook.arctosdb.org/how_to/How-to-Bulkload-Agents.html#use-the-agent-name-splitter" target="_blank">Use the Agent Name Splitter</a>

### A Note on Preferred Name 

**need to add** 

### A Note on aka 

**need to add** 

### A Note on Using unknown 
Use the Agent “unknown” when the person or organization doing the collecting, identifying, borrowing, etc. is unknown or unclear. Please do not create new Agents such as “Collector unknown” or “Determiner unknown”. Consider using “unknown” along with the verbatim collector attribute rather than creating cryptic agents such as A.B.C. or S. Smith. If at some point in the future the full name of collector, determiner, or borrower S. Smith is determined to be Susan B. Smith for a specific set of records, add the full Agent name to Arctos and assign the records appropriately

## Summary

 - Agents are shared by all Arctos collections.
 - Every Agent should represent an individual person or organization.
 - Make every effort possible to avoid creating duplicate Agents.
 
