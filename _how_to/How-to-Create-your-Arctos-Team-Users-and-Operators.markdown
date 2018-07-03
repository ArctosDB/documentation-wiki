---
title: How To Create Your Arctos Team
layout: default_toc
---

# How To Create Your Arctos Team: Users and Operators

This guide provides a workflow for how to organize users and operators to assist with data entry and collection data management. Anyone can have an Arctos user account, which is needed for downloading data. Operators are users who are granted appropriate permissions. There are two levels of permissions: (1) Permission to work with data for specific collections. (2) Permission to work with specific types of data for the granted collection(s) - e.g., data entry, specimens, transactions, localities, etc. For example, a user with the roles UAM:Mamm and DATA_ENTRY can only enter data for the UAM:Mamm collection.

Some objects (taxonomy, media, agents, places) are shared among collections. People who have access to these types of data must fully understand that Arctos is a shared system, and must always consider the implications of working in a shared system. So be careful when assigning roles to shared data types.

### 1.	Have each team member create an Arctos user account

* Go to [http://arctos.database.museum](http://arctos.database.museum) and enter a username and password, then hit "Create Account" (do not hit the return key or it will think you are trying to login with an account that doesn't exist yet).
 * Do not hit "Create Account" before entering a username and password.
 * DO NOT INCLUDE periods in your username (e.g., carla.cicero is not a valid username).
 * Passwords should be at least eight characters, start with a letter, contain only A-Z, a-z, 0-9, and !$%&()`*+,-/:;?_., not contain the username, and consist of at least one letter, number, and special character.
* Once you have created an account and are logged in, go to the "My Stuff" tab at the top, then click on "Profile."
* Enter your First, Middle (if applicable,, initial ok), and Last names in the appropriate fields.
* Enter your Affiliation (name of your institution).
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
 
---

### 3.	Invite your user to become an Operator

* Select Manage Arctos > Roles/Permissions > Arctos Users from the drop down menu at the top of the page.
* Search by the Arctos username.
* Click Invite.
* An E-mail will be sent to the user inviting them to become an Operator.
* The user should follow the instructions and links in the email in order to authenticate their account:
  * Log in to Arctos, then select “My Stuff” and “Profile” from the main Arctos menu
  * Enter the user's password where requested
  * If the password is acceptable (Oracle rules), a button will pop up to authenticate - click that
  * If the password is not acceptable, change the password and try again

---

### 4.	Assign Operator Roles and Permissions

* Go to [http://arctos.database.museum](http://arctos.database.museum) and login.
* Select Manage Arctos > Roles/Permissions > Arctos Users from the drop down menu at the top of the page.
* Search for the username of the team member to which you want to assign roles and permissions.
* Select the correct username from the list; the user record will pop up on the screen.
* Choose the collection that you want to grant the Operator access to and select the “Grant Access” button. The collection you selected and “Revoke” will appear below the choice fields. To grant access to another collection, simply repeat the process.
* Select the [roles](http://arctos.database.museum/Admin/user_roles.cfm) you want this Operator to have by selecting from the dropdown list and selecting "Grant Role." If you want to grant more than one role, simply repeat the process. ALL Operators should be assigned the "PUBLIC" and "COLDFUSION_USER" roles in order for them to be able to function in their other roles.
* Once you have assigned the Operator all of the collections and roles they need, exit the form.
* When Operators are logged in, they will only see the collections to which they have access. To view data for more than those collections, they will need to search while logged out.

---

### Congratulations!
You now have a team of Operators who can assist you with data entry and management. Next up, get them trained!
