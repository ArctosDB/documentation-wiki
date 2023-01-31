---
title: How To Agentify Verbatim Agents
layout: default_toc
author: Teresa J Mayfield-Meyer
contributor: Angela Linn
date: 2023-01-31
---
# How to Agentify Verbatim Agents

If you have new information about a person that is currently only recorded in a [verbatim agent attribute](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent), you can follow these steps to add their agent as a collector, creator, preperator or subject in the records in which they performed those roles.

## Create the Agent

If the agent your verbatim agent represents does not already exist in Arctos, follow the instructions in [How To Create an Agent](/How-to-Create-Agents.markdown) to add the agent in Arctos. 


## Find Records with the Verbatim Agent

From the main search page, search the verbatim agent attribute for the verbatim agent name you want to convert to an agent.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Agents/image7.png)

OR

From any catalog record with the verbatim agent select the search option next to the verbatim agent attribute.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Agents/image3.png)

## Manage

In your search results find the Tools Menu

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Agents/image6.png)

Select “Manage Collectors”

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Agents/image8.png)

Enter the agent’s name in “Name” field; select the agent role and list order, then click the “Insert Agent” button.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Agents/image9.png)


## Confirm

After the additions have been made, you can confirm the agents by performing the same search used to mange them.

## Verbatim Agent Attribute

You may want to discard the verbatim agent attributes because they seem redundant, but in most cases they provide good information about verbatim documentation and should be left in place. If they are truly redundant (the new agent name is exactly the same), these attributes can be removed using the [Attribute Unload Tool](https://arctos.database.museum/tools/BulkUnLoadAttribute.cfm). 

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

The Bulk Unload Attribute tool will unload ALL verbatim agent attributes from the records indicated in the tool. If any records contain verbatim agents other than the one you want to remove, you may want to check with a DBA to have them removed for you. 

## Video Tutorial

Please make one!

## Edit this How To

If you see something that needs to be edited in this How To, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_how_to/How-to-Agentify-Verbatim-Agents.markdown).
