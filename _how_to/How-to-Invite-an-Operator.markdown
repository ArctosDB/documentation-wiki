---
title: How To Invite a New User
layout: default_toc
---
# How to Invite a New User

Help and a list of collection roles may be found at http://arctosdb.org/how-to/users/

In Arctos parlance, Operators are users who can manipulate data in Arctos; they must be both users and agents before they may become an Operator. The following steps are needed to create a new operator or user:

1. The new user must first create a user account.
 * Usernames cannot have a period (e.g., carla.cicero is not acceptable)
 * Passwords should be at least 8 characters and contain a combination of letters, numbers, and at least one symbol (e.g., $ @ !)

2. After the account is created, the user should go to My Stuff > Profile.
 * Add the user's name, affiliation, and email address (the email is required)
 * Here is where you can also set some user preferences, e.g., a custom Other Identifier (e.g., collector number) which will show up each time on the Specimen Search page

3. After the new account is created, someone with appropriate permissions (e.g., Curator, Collection Manager) must setup the new user as an agent.
 * First search Agents to determine if the user already is an agent (Manage Data > Agents)
 * If the agent doesn’t exist for the new user, create a new Agent (Manage Data > Agents > Create Person) - see guide on [How to Create Agents](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Create-Agents)
 * In the Agent's detail page, add a new name to the Agent with the name type of "login" - the login name must match the Arctos username

4. The next step is for the Curator to invite the user to be an Operator of Arctos.
 * Manage Arctos > Roles/Permissions > Arctos Users
 * Search by the Arctos username
 * Click Invite
 * An E-mail will be sent to the user inviting them to become an Operator
 * The user should follow the instructions and links in the email to accept responsibilities

5. The user must authenticate their account before it is activated.
 * Click on My Stuff > Profile and the user will see a place to put in their password
 * If the password is acceptable (Oracle rules), then a button will pop up to authenticate - click that
 * If the password is not acceptable, then change the password and try again

6. Finally, the Curator is ready to assign roles that give the Operator permission to manage data
 * There are two sets of roles: (1) collection - assign the user only to the collection(s) for which you want to grant permission; and (2) data - assign the user only to the specific types of data for which you want to grant that user permission
 * All users should have PUBLIC and COLDFUSION_USER roles
 * DATA_ENTRY is required for anyone who is entering data.
 * As a general rule, students should not have permission to manage COLLECTION, TAXONOMY, AGENTS, or GEOGRAPHY - this should be reserved for Curators or Collection Managers
 * The most restrictive roles are for CODETABLES and GLOBAL ADMIN. 


