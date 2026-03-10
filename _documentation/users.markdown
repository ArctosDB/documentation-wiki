---
title: Users
author: Dusty Mc Donald, Teresa J Mayfield-Meyer
date: 2021-07-29
layout: default_toc
---

# Users

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**  

Do not perform any user administration actions before reading and understanding this entire document.

## Terminology

There are three categories of “users” described here:

- Arctos users are people who have Arctos accounts. Anyone can create any number of these for any reason.
- Arctos Agents are people (and some other stuff) who do things – collectors, identifiers, data entry personnel, etc.
- Arctos Operators are people who can create or update data in Arctos. They must be both users and agents before they may become operators.

## Rules

* Only people may have Operator accounts.
* Each person who wishes to have an Operator account must also have exactly one Agent record of type Person.
* Each person may have only one Operator account.
* The person's Agent record and Operator account must be linked together permanently.
* Any action which disturbs or destabilizes this one account/one person/one agent relationship will result in administrative action.

  
## Creating Operators



1. Ensure an appropriate Agent record exists. Locate them if they are an existing agent or, after carefully checking, create them as a new agent. Operators must be agents of type "person." Group accounts or shared logins are not permitted.
1. Ensure that the user has a TACC account. [Create one here](https://accounts.tacc.utexas.edu/register) if needed. (See also [Authentication](/documentation/oauth.html))
1. Instruct the user to log in to Arctos using their TACC account. This should create a user account; contact a DBA (file an Issue) if there are problems.
    * SPECIAL NOTE: During the OAuth transition, a user may have been instructed to create an Arctos account which has the same username as their TACC account. Deleting that account before beginning the process of becoming an Operator will avoid the need for DBA assistance.
1. Instruct the user to navigate to their Arctos Profile and add an email address.
1. Locate the account under operator management, click Create Operator.
1. Choose the appropriate Agent when prompted.
1. The account is now an Operator. The administrator and the new user will be sent notifications and emails.
1. Continue to assign the new user appropriate roles and collections. The COLDFUSION_USER role must be provided for the user to log in. DATA_ENTRY is the minimum additional role to enable data entry. Provide the new user documentation, which can be found from the big red box on the manage users page.
1. Direct the user to log out of Arctos, then log back in using the TACC OAuth option. 




## User Roles

There are two types of “roles” in Arctos: Collection roles and access roles. Collection roles provide access to VPD partitions, and access roles provide specific access to specific tables.  Actual access is at the intersection of roles. A user with UAM_MAMM collection role and DATA_ENTRY access role can only enter data for the UAM Mamm collection.

Some objects (taxonomy, media, agents, places) are shared amongst collections. People who have access to these data must fully understand that <a href="https://handbook.arctosdb.org/documentation/sharing-data-and-resources.html" target="_blank"<Arctos is a shared system</a>, and must always consider the implications of working in a shared system.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**  

Environment is set at login. Users whose account has changed will need to log out and back in to receive changes.

### User Access Roles

To see definitions and documentation about user access roles visit <a href="https://arctos.database.museum/Admin/user_roles.cfm" target="_blank">Manage Arctos > Roles/Permissions > Database Roles</a>

## Maintenance and Deletion

### Users

Users may delete accounts by navigating to their Profile.

### Operators

Once a user has an account and an agent name type of “login,” do not attempt to delete or alter the account or the login agent name. Additionally, do not revoke collection access roles from a former user. To revoke a user’s permissions, simply click the “lock account” link from manage users (not manage agents).

User accounts automatically lock after 6 months of inactivity. 

Users without an email address in their Agent records will be automatically locked.

Users whose accounts have been locked will not be able to log into Arctos, and must create a new (public) account if they wish to access Arctos.

Users who have their account locked and are subsequently re-granted access must use their original account. Operators with global_admin access may unlock accounts from the “manage Arctos user” page.

### Unlocking

Accounts are locked for a variety of reasons, including by automation.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**  

**Do Not** unlock an account unless you are fully aware of the circumstances under which it was locked and are, or are in communication with, the "supervisor" of all collections to which the user has access. Assume all unlock requests are [phishing attacks](https://en.wikipedia.org/wiki/Phishing) until proven otherwise.

**_DO NOT UNDER ANY CIRCUMSTANCES CREATE A NEW OPERATOR ACCOUNT FOR USERS WHO HAVE EVER HAD AN OPERATOR ACCOUNT IN ARCTOS!_**

All users should participate in the development process at GitHub; instructions are at [https://doi.org/10.7299/X75B02M5](https://doi.org/10.7299/X75B02M5)

Users should have a valid email address in their Agent record; without, they will not receive proper notifications for proposed agent mergers, transaction events, etc.

Collection Contacts are users who receive administrative emails when certain actions occur. Values are controlled by a code table. Users with Manage Collection access may manage Collection Contacts from Manage Collection <a href="https://arctos.database.museum/Admin/Collection.cfm" target="_blank">Manage Data –> Metadata –> Manage Collection</a>. Agents who act as collection contacts must have a valid email address.

## How To

Instructions for doing specifc tasks related to Users in Arctos

* [How To Create and Manage Your Arctos Team (Users and Operators)](https://handbook.arctosdb.org/how_to/How-to-Create-your-Arctos-Team-Users-and-Operators.html)
* [How To Unlock an Arctos User Account](https://handbook.arctosdb.org/how_to/How-To-Unlock-A-User-Account.html)

## Edit this Documentation

If you see something that needs to be edited in this How To, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/users.markdown" target="_blank">here</a>.

## Community Discussion

- <a href="https://github.com/ArctosDB/documentation-wiki/issues/123" target="_blank">Github Documentation Issue #123</a>

