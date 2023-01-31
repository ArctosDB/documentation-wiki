---
title: How To Create and Manage Your Arctos Team (Users and Operators)
layout: default_toc
author: Teresa J. Mayfield-Meyer, Shannen Robson, Michelle Koo
date: 2022-02-04
---

# How To Create and Manage Your Arctos Team: Users and Operators

This guide provides a workflow for how to organize users and operators to assist with data entry and collection data management. Anyone can have an Arctos user account, which is needed for downloading data. Operators are users who are granted appropriate permissions. There are two levels of permissions: (1) Permission to work with data for specific collections. (2) Permission to work with specific types of data for the granted collection(s) - e.g., data entry, specimens, transactions, localities, etc. For example, a user with the roles UAM:Mamm and DATA_ENTRY can only enter data for the UAM:Mamm collection.

Some objects (taxonomy, media, agents, places) are shared among collections. People who have access to these types of data must fully understand that Arctos is a shared system, and must always consider the implications of working in a shared system. So be careful when assigning roles to shared data types.

## How To Create Your Arctos Team: Users and Operators

### 1.	Have each team member create an Arctos user account

Provide each of your team members with these instructions to create their Arctos user account.

* Go to [https://arctos.database.museum](https://arctos.database.museum) and select Log In, then select "Create an Account".
* Username must include only letters and numbers (ASCII characters A-Z, a-z, and 0-9), and cannot begin with a number. **Do not include periods in your username (e.g., carla.cicero is not a valid username)**
* Passwords should be at least eight characters, start with a letter, contain only A-Z, a-z, 0-9, and !$%&()`*,-/:;?_., not contain the username, and consist of at least one letter, number, and special character
* Enter your First, Middle (if applicable, initial ok), and Last names in the appropriate fields
* Enter your Affiliation (name of your institution)
* Enter a valid email address. This is important because you cannot be invited as an Operator without a valid email address
* Select the "Create an Account" button and you are done.

You are now an official Arctos User.  Welcome to the community!  Now email your username to the person authorized to grant you operator permissions.  You will soon be contacted with instructions for authenticating your account as an Arctos Operator.

---

### 2.	Attach each team member’s username to their Agent

Once a user has created their user account and given you their username, complete the following steps to attach their username to an Agent:

 * Go to https://arctos.database.museum/
 * From the Arctos main menu select Manage Data > Agents
 * Search for the name of the user.  If not found, you must create the Agent (see [How to create an Agent](https://handbook.arctosdb.org/how_to/How-to-Create-Agents.html)) and return to this process
 * Select the correct agent from the list, the agent record will pop up on the right side of the screen
 * In the Agent Names box of the Agent record, select the name type “login” and enter the user’s username
 * Select “Save All Changes” at the bottom of the screen
 * You may now exit the Agent's record, your changes have been saved
 
---

### 3.	Invite your user to become an Operator

* From the Arctos main menu select Manage Arctos > Roles/Permissions > Arctos Users
* Search by the Arctos username
* Select Invite
* An E-mail will be sent to the user inviting them to become an Operator
* The user should follow the instructions and links in the email in order to authenticate their account:
  * Log in to Arctos, then from the Arctos main menu select “My Stuff” and “Profile”
  * Enter the user's password where requested
  * If the password is acceptable (Oracle rules), a button will pop up to authenticate - select that
  * If the password is not acceptable, change the password and try again

---

#### PRO TIP <img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg" width="60"> 

Don't want to make your new operators suffer the back and forth of setting up an Arctos user account then authenticating? Do it for them!

 - Create an Arctos user account with a username and password that meet the criteria set out above
 - Complete the user account profile with the new operator's name and **your email address** 
 - Create an Agent for your new operator and add the username you just created to it
 - Invite the new user to become an operator
 - The invitation email will come to you, open it and authenticate the operator account
 - Change the email in the user's profile to their email address
 - Remove your auto-inserted email address from the operator's Agent record and add their email address
 - Give your new operator their Arctos username and password with instructions to log in and **change their password**

---

### 4.	Assign Operator Roles and Permissions

* Go to [https://arctos.database.museum](https://arctos.database.museum) and login.
* From the Arctos main menu select Manage Arctos > Roles/Permissions > Arctos Users
* Search for the username of the team member to which you want to assign roles and permissions
* Select the correct username from the list; the user record will pop up on the screen
* Choose the collection that you want to grant the Operator access to and select the “Grant Access” button. The collection you selected and “Revoke” will appear below the choice fields. To grant access to another collection, simply repeat the process.
* Select the [roles](https://arctos.database.museum/Admin/user_roles.cfm) you want this Operator to have by selecting from the dropdown list and selecting "Grant Role." If you want to grant more than one role, simply repeat the process. ALL Operators should be assigned the "PUBLIC" and "COLDFUSION_USER" roles in order for them to be able to function in their other roles.
* Once you have assigned the Operator all of the collections and roles they need, exit the form.
* Before the Operator can make full use of Arctos as you have assigned, they will need to log out of Arctos and log in again.
* When Operators are logged in, they will only see the collections to which they have access. To view data for more than those collections, they will need to search while logged out.

---

### Congratulations!
You now have a team of Operators who can assist you with data entry and management. Next up, get them trained!

---

## How To Manage Your Arctos Team: Users and Operators

### 1. Managing and Reviewing Operator Roles and Permissions

It is a good idea to periodically review who has access to manage and edit your collections. Please revoke access for anyone who is no longer working with you to avoid the possibility of accidental or intentional data errors. To review the list of those who have access to manage an edit your collection(s) perform the following:

* From the Arctos main menu select [Reports/Services > View Statistics > Collection Contact/Operator Report](https://arctos.database.museum/info/collection_report.cfm)
* Select your collection in the GUID prefix drop down then select the go button
* Review the report of operators and assigned roles
* From this page you can manage user accounts and add/remove permissions

### 2. Managing Operator Roles and Permissions for Exiting Team Members

When a member of your Arctos team leaves, **DO NOT** delete or alter the account or the user’s agent login name. 
Deleting agents will destroy their edit history and may have other unintended consequences. Instead, use the “lock account” link from their operator user management page (not manage agents). Note that user accounts automatically lock after 6 months of inactivity and users whose accounts have been locked will not be able to log into Arctos. Previous operators must create a new (public) account if they wish to access Arctos.

Users who have their account locked and are subsequently re-granted access must use their original operator account and they will again have access to any collections to which they were previously granted access. Operators with global_admin access may unlock accounts from the “manage Arctos user” page.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Create-your-Arctos-Team-Users-and-Operators.markdown" target="_blank">here</a>.
