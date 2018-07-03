---
title: How To Create Your Arctos Team
layout: default_toc
---

# How To Create Your Arctos Team: Users and Operators

This guide provides a workflow for how to organize users and operators to assist with data entry and collection data management. Anyone can have an Arctos user account, which is needed for downloading data. Operators are users who are granted appropriate permissions. There are two levels of permissions: (1) Permission to work with data for specific collections. (2) Permission to work with specific types of data for the granted collection(s) - e.g., data entry, transactions, localities, etc.

### 1.	Have each team member create an Arctos user account

* Go to [http://arctos.database.museum](http://arctos.database.museum) and enter a username and password, then hit "Create Account" (do not hit the return key or it will think you are trying to login with an account that doesn't exist yet)
 * Do not hit "Create Account" before entering a username and password.
 * DO NOT INCLUDE periods in your username (e.g., carla.cicero is not a valid username)
 * Passwords should be at least six characters, start with a letter, contain only A-Z, a-z, 0-9, and !$%&()`*+,-/:;?_., not contain the username, and consist of at least one letter, number, and special character
* Once you have created an account and are logged in, go to the "My Stuff" tab at the top, then click on "Profile"
* Enter your First, Middle (if applicable,, initial ok), and Last names in the appropriate fields
* Enter your Affiliation (name of your institution)
* Enter a valid email address. This is important because you cannot be invited as an Operator without a valid email address.
* Hit "Save Profile" button and you are done. However, there are other options that you can set here, including: preferred file format for downloading data; preferred other identifier (e.g., "collector number") - if you select something here, it will always show up on your Specimen Search page when you are logged in.

You are now an official Arctos User.  Welcome to the community!  Now email your username to the person authorized to grant you operator permissions.  You will soon be contacted with instructions for authenticating your account as an Arctos Operator.

---

### 2.	Attach each team member’s username to their Agent

Once a user has created their user account and given you their username, complete the following steps to attach their username to an Agent:

 * Go to http://arctos.database.museum/
 * Select Manage Data>Agents from the drop down menu at the top of the page.  
 * Search for the name of the user.  If not found, you must create the Agent (see [How to create an Agent](https://arctosdb.github.io/documentation-wiki/how_to/How-to-Create-Agents.html)) and return to this process.
 * Select the correct agent from the list.  The agent record will pop up on the right side of the screen.
 * In the Agent Names box of the Agent record, select the name type “login” and enter the user’s username.
 * Select “Save All Changes” at the bottom of the screen.
 * You may now exit the Agent's record, your changes have been saved.

### 3.	Invite your user to become an Operator

* Complete the following to invite your new team member to be an Operator:
    * Select Manage Arctos > Roles/Permissions > Arctos Users from the drop down menu at the top of the page
    * Search by the Arctos username
    * Click Invite
    * An E-mail will be sent to the user inviting them to become an Operator
    * The user should follow the instructions and links in the email to accept responsibilities

* Send each team member who needs Operator permissions the following email:

---

Now that you are an Arctos user, I am going to invite you to become an Arctos Operator. You will receive an email from Arctos with instructions for authenticating your account for Operator status. To authenticate, PLEASE NOTE: After you select the link in the email, you will need to log in to Arctos, then select “My Stuff” and “Profile” from the main Arctos menu in order to see the Authentication form.  Once you have completed the authentication, I will get a notification and then I will add some permissions to your profile so that you will be able to enter and edit data for the __________ collection.

Call me if this doesn’t make sense or if you have any questions during the authentication process.

---



### 5.	Assign your Operators Roles and Permissions

* Follow the instructions for [How to assign Operator roles and permissions](https://arctosdb.github.io/documentation-wiki/how_to/How-to-assign-Operator-roles-and-permissions.html)

* Send each of the team members you will invite to be Operators the following email, adjusted for the collections and roles that you have assigned them:

---

You have been given access to the Arctos ____________ Collection and assigned the following roles:

DATA_ENTRY – allows access to Data Entry
MANAGE_SPECIMENS – allows access to most “one-per-specimen” forms.
MANAGE_COLLECTION – allows setting bulkloader.loaded to NULL, updating collection and collection agents, deleting Identifications, managing Annotations
MANAGE_TRANSACTIONS – allows access to create/edit/delete loans, accessions, and borrows, rank agents, manage permits, manage shipments.

**PLEASE NOTE:  The following are shared roles.**  The changes that you make in any of these areas can affect other collections, so always proceed with caution when working in them and follow the instructions which can be found at https://arctosdb.org/documentation/ and https://github.com/ArctosDB/documentation-wiki/wiki.  Do not hesitate to contact me if you have questions.

MANAGE_MEDIA – allows create/update/delete of Media.
MANAGE_GEOGRAPHY – full access to geog_auth_rec.
MANAGE_CONTAINER – full access to containers. Not necessary to “barcode specimens.”
MANAGE_AGENTS – full access to agents and agent names
MANAGE_LOCALITY – allows full access to Locality, Collecting Event, and Coordinates data.
MANAGE_PUBLICATIONS – allows full access to publications, projects, and citations.
MANAGE_TAXONOMY – full access to taxonomy and common names.

I will get back to you with further instruction when we get ready to work on the data.

---

### Congratulations!
You now have a team of Operators who can assist you with data entry and management.  Next up, get them trained!
