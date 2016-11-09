---
title: How To Assign Operator Roles and Permissions
layout: default_toc
---

Arctos Operators have permissions that allow them to access specific collections and data - see [list of user roles and their descriptions](http://arctos.database.museum/Admin/user_roles.cfm).

To assign your Operator roles and permissions take the following steps:

### Caution

Before you can assign Permissions/Roles to a user, they MUST be an Operator.  Follow the instructions for [How to Create a New User Account (for Operators)](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Create-a-New-User-Account-%28for-Operators%29) if you need to make your user an Operator.

There are two types of “roles” in Arctos: Collection roles and access roles. Collection roles provide access to specific collections, and access roles provide access to specific tables.  Actual access is at the intersection of roles. A user with UAM:MAMM collection role and DATA_ENTRY access role can only enter data for the UAM:Mamm collection.

Some objects (taxonomy, media, agents, places) are shared amongst collections. **People who have access to these data must fully understand that Arctos is a shared system, and must always consider the implications of working in a shared system.**  So be careful when assigning roles to shares access tables.

### Assigning permission to Collections and Roles

 * Go to [http://arctos.database.museum](http://arctos.database.museum) and login
 * Select Manage Arctos>Roles/Permissions>Arctos Users from the drop down menu at the top of the page.  
 * Search for the username of the team member to which you want to assign roles and permissions.  
 * Select the correct username from the list.  The user record will pop up on the screen.
 * Choose the collection that you want to grant the Operator access to and select the “Grant Access” button.  The collection you selected and “Revoke Access” will appear below the choice fields.  To grant access to another collection, simply repeat the process.
 * Select the roles you want this Operator to have by selecting from the dropdown list and selecting "Grant Role".  If you want to grant more than one role, simply repeat the process.
 * **PLEASE NOTE:** ALL Operators should be assigned the "Public" and "COLDFUSION" roles in order for them to be able to utilize the access of their other roles.
 * Once you have assigned the Operator all of the collections and roles they need, exit the form.
