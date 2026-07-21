---
title: Create and Manage Your Arctos Team (Users and Operators)
authors: Teresa J. Mayfield-Meyer, Shannen Robson, Michelle Koo
date_updated: 2025-09-12
redirect_from:
  - /how_to/How-to-Create-your-Arctos-Team-Users-and-Operators/
---

This guide provides a workflow for how to organize users and operators to assist with data entry and collection data management. Anyone can have an Arctos user account, which is needed for downloading data. Operators are special users who are granted permissions to access or edit data. There are two levels of permissions: (1) Permission to work with data for specific collections. (2) Permission to work with specific types of data for the granted collection(s) - e.g., data entry, specimens, transactions, localities, etc. For example, a user with the roles UAM:Mamm and DATA_ENTRY can only enter data for the UAM:Mamm collection.

Some objects (taxonomy, media, agents, places) are shared among collections. People who have access to these types of data must fully understand that Arctos is a shared system, and must always consider the implications of working in a shared system. So be careful when assigning roles to shared data types.

## How To Create Your Arctos Team

### User's step 1: create an TACC user account

[Create your TACC account here](https://accounts.tacc.utexas.edu/register). Users may want to check if they already have a [TACC account here](https://accounts.tacc.utexas.edu/login) (including retrieving usernames and resetting passwords).

* Enter your First, Middle (if applicable, initial ok), and Last names in the appropriate fields
* Enter your Affiliation (name of your institution)
* Enter a valid email address. This is important because you cannot be invited as an Operator without a valid email address (Please see TACC Troubleshooting and Tips below)
* Select the "Create an Account" button and you are done.

### User's step 2: Log into Arctos using the TACC log in button and credentials.
This accomplishes two things: Creates an Arctos account with your TACC credentials and let's you add an email address. Please go to your Arctos profile (top right menu--> Profile) and add your email address here.

### User's step 3: inform the person authorized to grant operator permissions the TACC user name.

---

### Manager's step 1:	Ensure the new user has an Arctos Agent profile.

Before you can invite an Arctos user to become an Arctos Operator, they must have an existing Arctos Agent.

 * Go to https://arctos.database.museum/
 * From the Arctos main menu select [Search > Agents](https://arctos.database.museum/agents.cfm)
 * Search for the name of the user.  If not found, you must create the Agent (see [How to create an Agent]({% link _how_to/create-agents.markdown %})) and return to this process
 
---

### Manager's step 2: Create the Operator

* From the [Tools Directory > Agents & Users > Operator: Manage](https://arctos.database.museum/AdminUsers.cfm) 
* Enter in the TACC user name given to you by the new user
* Click Create Operator
(this option will not appear if a valid email address is not present in the new user profile (see User's step 2) 

---

### Manager's step 3:	Assign Operator Roles and Permissions

Please [Read this before assigning roles to users](https://arctos.database.museum/Admin/user_roles.cfm). 

* Choose the collection that you want to grant the Operator access to and select the “Grant Access” button. The collection you selected and “Revoke” will appear below the choice fields. To grant access to another collection, simply repeat the process.
* Select the [roles](https://arctos.database.museum/Admin/user_roles.cfm) you want this Operator to have by selecting from the dropdown list and selecting "Grant Role." If you want to grant more than one role, simply repeat the process. ALL Operators should be assigned the "COLDFUSION_USER" role in order for them to be able to function in their other roles.
* Once you have assigned the Operator all of the collections and roles they need, exit the form.
* Before the Operator can make full use of Arctos as you have assigned, they will need to log out of Arctos and log in again.
* When Operators are logged in, they will only see the collections to which they have access. To view data for more than those collections, they will need to search while logged out.


### Add Team Members to Github 

For anyone doing more than simple data entry, it probably makes sense to have them set up a Github User account. To help them do this see [How To Create A Github Account]({% link _how_to/use-github-for-arctos.markdown %}#how-to-create-a-github-account). After they have created their Github account, add their Github link to their Arctos Agent (in addresses). This helps others connect Github users with Arctos Operators.

## TACC Troubleshooting and Tips

 - Please see TACC rules and policies when creating an account. Please follow them closely as their security rules keep Arctos database operations safe: [Basic policies](https://docs.tacc.utexas.edu/basics/accounts/)
 - Please see limitations on email addresses regarding new accounts: [Documentation](https://docs.tacc.utexas.edu/basics/accounts/#newaccounts)

- Before requesting additional help, ensure that you can log in to your TACC account at https://accounts.tacc.utexas.edu/login?redirect_url=profile, and that Multi-Factor Authentication is enabled in your TACC user portal.

  
### Helpful Links
 - [Reset Password here](https://accounts.tacc.utexas.edu/forgot_password)
 - [Find your username here](https://accounts.tacc.utexas.edu/forgot_username)
 - Other trouble logging in? Try [TACC Log in support](https://accounts.tacc.utexas.edu/login_support)

---

### Congratulations!
You now have a team of Operators who can assist you with data entry and management. Next up, get them trained!

---

## How To Manage Your Arctos Team: Users and Operators

### 1. Managing and Reviewing Operator Roles and Permissions

It is a good idea to periodically review who has access to manage and edit your collections. Please revoke access for anyone who is no longer working with you to avoid the possibility of accidental or intentional data errors. To review the list of those who have access to manage an edit your collection(s) perform the following:

* From the Arctos main menu select [Tools Directory > Status & Stats > Collection Summary](https://arctos.database.museum/info/collection_report.cfm)
* Select your collection in the GUID prefix drop down then select the go button
* Review the report of operators and assigned roles
* From this page you can manage user accounts and add/remove permissions

### 2. Managing Operator Roles and Permissions for Existing Team Members

When a member of your Arctos team leaves, **DO NOT** delete or alter the account or the user’s agent login name. 
Deleting agents will destroy their edit history and may have other unintended consequences. Instead, use the “lock account” link from their operator user management page (not manage agents). Note that user accounts automatically lock after 6 months of inactivity and users whose accounts have been locked will not be able to log into Arctos. Previous operators must create a new (public) account if they wish to access Arctos.

Users who have their account locked and are subsequently re-granted access must use their original operator account and they will again have access to any collections to which they were previously granted access. 

{% include caution.html content="**Do Not** unlock an account unless you are fully aware of the circumstances under which it was locked and are, or are in communication with, the “supervisor” of all collections to which the user has access. Assume all unlock requests are phishing attacks until proven otherwise." %}

Operators with global_admin access may unlock accounts from the “manage Arctos user” page.
