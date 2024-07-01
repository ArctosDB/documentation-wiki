---
title: How To Migrate Data Into Arctos 
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2024-07-01
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

# How To Migrate Data Into Arctos

This How To walks through the steps of data migration. These steps are more completely outlined in the numbered issue templates in the [Arctos Data Migration Github repository](https://github.com/ArctosDB/data-migration).

## Manage Collection(s)

Before any data is entered, it is important that the collection metadata is complete.

Documentation: [Managing a Collection in Arctos](https://handbook.arctosdb.org/documentation/manage_collection.html)
Handbook instructions: [How To Manage a Collection](http://handbook.arctosdb.org/how_to/How-to-Manage-a-Collection-in-Arctos.html) 

## Create Your Arctos Team

At least one person at any institution will have an operator account created as part of creation of the collection(s). Anyone else who will assist with data migration or data entry will need to follow the same steps to become an Arctos operator.

* Documentation: [Agents}(http://handbook.arctosdb.org/documentation/agent.html) 
* Handbook instructions: [How To Create and Manage Your Arctos Team (Users and Operators)](https://handbook.arctosdb.org/how_to/How-to-Create-your-Arctos-Team-Users-and-Operators.html) 

## Agents

People and organizations are associated with almost all types of data available in Arctos so it is important to map the names in use in your current data to names available in Arctos. Ensure that all People (collectors, preparators, makers, identifiers, event assignors, donors) in your data file are included as Agents in Arctos and that there are no duplications (same person with name spelled different ways). If you are entering records one at a time, you will probably return to this step every time you enter something.

* Documentation: [Agents}(http://handbook.arctosdb.org/documentation/agent.html) 
* Handbook instructions: [How To Create Agents](https://handbook.arctosdb.org/how_to/How-to-Create-Agents.html)

### Permissions
Agents are a shared resource in Arctos and care should always be given to editing existing agents and efforts made to not create duplicate agents. At least one person at every institution should have permission to [manage agents](https://arctos.database.museum/Admin/user_roles.cfm#manage_agents). This person should read the documentation about Agents above and respond in the appropriate Github issue that they understand that Agents are a shared resource in Arctos and they understand how to manage them. Once this is complete, they will be given permission to [manage agents](https://arctos.database.museum/Admin/user_roles.cfm#manage_agents).

## Accessions

ALL Arctos records require an associated accession. If your institution does not currently use accessions, at least one "legacy accession" will need to be created to facilitate entry of catalog records into Arctos.

Legacy Accession data can be entered individually or created in bulk.

* Documentation: [Accessions](https://handbook.arctosdb.org/documentation/accession.html) 
* Handbook instructions: [How To Create an Accession](http://handbook.arctosdb.org/how_to/How-to-Create-an-Accession.html) 

### Permissions

At least one person at every institution should have manage transactions access, this person should read the documentation above and and respond in the appropriate Github issue that they understand that Transactions are an important and useful tool for demonstrating collection building and use. Once this is complete, they will be given permission to [manage transactions](https://arctos.database.museum/Admin/user_roles.cfm#manage_transactions).

### Pro Tips

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**
`![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**`

> add the tips under the bear in a quote block
> 
> you accomplish this by adding `> ` at th beginning of each line

### Caution

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**
`![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**`

> want to warn users about possible pitfalls? Add some caution notes in a quote block
> 
> you accomplish this by adding `> ` at th beginning of each line
 
### Images

If you want to add screen shots or other images, see [How To Handle Images](https://handbook.arctosdb.org/how_to/How-to-Get-the-Most-from-Arctos-Github-Editing.html#how-to-handle-images)

### FAQ
<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20FAQ.jpg" width="50"> **Add FAQ text here?**
`<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20FAQ.jpg" width="50"> **Add FAQ text here?**`

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/data_migration.markdown" target="_blank">here</a>.
