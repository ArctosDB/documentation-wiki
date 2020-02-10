---
title: Users
layout: default_toc
---

# Users

Terminology

There are three categories of “users” described here:

- Arctos users are people who have Arctos accounts. Anyone can create any number of these for any reason.
- Agents are people (and some other stuff) who do things – collectors, identifiers, data entry personnel, etc.
- Operators are people who can create or update data in Arctos. They must be both users and agents before they may become operators.


## Creating Operators

New operators must first become users. Their account name must use only letters and numbers (ASCII characters A-Z, a-z, and 0-9), and cannot begin with a number. (Public users can use any characters.) They must have an email address in their Profile. A password of at least six characters, starting with a letter, containing only A-Z, a-z, 0-9, and !$%&()`*+,-/:;?_., not containing the username, and consisting of at least one letter, number, and special character will make the invitation process slightly less cryptic.
    
New operators must be agents. Under the Agents tab, locate them if they are an existing agent or, after carefully checking, create them as a new agent. Make sure they have a name-type of “login,” and that their login name exactly matches their Arctos username. These are case sensitive.

Operators must be agents of type "person." Group accounts or shared logins are not permitted.
    
From Management/Arctos/Arctos Users, click Invite to allow them to create an internal user account. This will send email to you and to them. They will have to ensure that their username is valid, pass certain password checks, etc. to become users.
    
After the user has completed Step 3, you will receive a notification email. You may then assign them appropriate data and collection roles. Include the COLDFUSION_USER and DATA_ENTRY roles to enable data entry. Provide documentation, which can be found from the big red box on the manage users page.


## User Roles

There are two types of “roles” in Arctos: Collection roles and access roles. Collection roles provide access to VPD partitions, and access roles provide specific access to specific tables.  Actual access is at the intersection of roles. A user with UAM_MAMM collection role and DATA_ENTRY access role can only enter data for the UAM Mamm collection.

Some objects (taxonomy, media, agents, places) are shared amongst collections. People who have access to these data must fully understand that Arctos is a shared system, and must always consider the implications of working in a shared system.

**IMPORTANT: The following information is a summary believed accurate at the time of writing. The ONLY authoritative role documentation is available from the “manage users” page within Arctos, which is dynamically built from the database administrative environment.**

**NOTE**: Environment is set at login; users whose account has changed will need to log out and back in to receive changes.

- PUBLIC – some crazy Oracle thing; just give it to everybody
- COLDFUSION_USER – the basic “one of us” role – give it to anyone who will do anything
- DATA_ENTRY – allows access to Data Entry
- MANAGE_SPECIMENS – allows access to most “one-per-specimen” forms. The general “trusted student” role.
- MANAGE_TRANSACTIONS – allows access to create/edit/delete loans, accessions, and borrows, rank agents, manage permits, manage shipments.
- MANAGE_MEDIA – allows create/update/delete of Media. This is a shared role and must only be assigned to qualified personnel.
- MANAGE_GEOGRAPHY – full access to geog_auth_rec. This is a shared role and must only be assigned to qualified personnel.
- MANAGE_CONTAINER – full access to containers. Not necessary to “barcode specimens.” This is a shared role and must only be assigned to qualified personnel.
- MANAGE_AGENTS – full access to agents and agent names. This is a shared role and must only be assigned to qualified personnel.
- MANAGE_DOCUMENTATION – allows full access to short documentation, used in the context-popups.
- MANAGE_LOCALITY – allows full access to Locality, Collecting Event, and Coordinates data. This is a shared role and must only be assigned to qualified personnel.
- MANAGE_PUBLICATIONS – allows full access to publications, projects, and citations. This is a shared role and must only be assigned to qualified personnel.
- DGR_LOCATOR – crazy MSB thing.
- MANAGE_COLLECTION – allows setting bulkloader.loaded to NULL, updating collection and collection agents, deleting Identifications, managing Annotations
 - GLOBAL_ADMIN – allows inviting users, blacklisting IP addresses, view audit information.
 - MANAGE_TAXONOMY – full access to taxonomy and common names. This is a shared role and must only be assigned to qualified personnel.
- MANAGE_CODETABLES – full access to code tables. Only current members of the Arctos Advisory Committee should have this role, and all additions and updates MUST first have the consensus of the Advisory Committee. This is a shared role and must only be assigned to qualified personnel.


## Maintenance and Deletion

Once a user has an account and an agent name type of “login,” do not attempt to delete or alter the account or the login agent name. Additionally, do not revoke collection access roles from a former user. To revoke a user’s permissions, simply click the “lock account” link from manage users (not manage agents).

User accounts automatically lock after 6 months of inactivity. 

Users whose accounts have been locked will not be able to log into Arctos, and must create a new (public) account if they wish to access Arctos.

Users who have their account locked and are subsequently re-granted access must use their original account. Operators with global_admin access may unlock accounts from the “manage Arctos user” page.

**_DO NOT UNDER ANY CIRCUMSTANCES CREATE A NEW OPERATOR ACCOUNT FOR USERS WHO HAVE EVER HAD AN OPERATOR ACCOUNT IN ARCTOS!_**

All users should participate in the development process at GitHub; instructions are at
[https://doi.org/10.7299/X75B02M5](https://doi.org/10.7299/X75B02M5)


Users should have a valid email address in their Agent record; without, they will not receive proper notifications for proposed agent mergers, transaction events, etc.

Collection Contacts are users who receive administrative emails when certain actions occur. Values are controlled by a code table. Users with Manage Collection access may manage Collection Contacts from Manage Collection (currently Manage Data –> Metadata –> Manage Collection). Agents who act as collection contacts much have a valid email address.