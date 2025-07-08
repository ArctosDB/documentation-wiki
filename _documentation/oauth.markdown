---
title: Authentication
author: DLM
layout: default_toc
---

# OAuth

OAuth (Open Authorization) is an open standard for authorization that allows third-party applications to access user data on another service without needing the user's password. Arctos supports logging in via various providers, but all Operators (those who can change things in the database) must authenticate via TACC/TAPIS.

# TACC Acount

(in progress)

# Migrating Existing Accounts

1. Log in to your existing and open Operator account in the usual way.
2. Follow the TACC authentication option on the 'success' page.
3. Authenticate at TACC
4. Success! In the future, simply use the TACC option to log in.


# Log in with TACC

To log into an Operator account created with TACC OAuth, or after an Operator account has been migrated to use TACC OAuth, simply choose the TACC option, then authenticate and/or confirm as requested.

# Create Operator

1. Ensure a user account which complies with https://handbook.arctosdb.org/documentation/users.html exists; create a local account if necessary
   *  Their account name must use only letters and numbers (ASCII characters A-Z, a-z, and 0-9), and cannot begin with a number.
   *  They must have an email address in their Profile.
2. Ensure an appropriate Agent record exists.
3. Ensure that the user has a TACC account. [Create one here](https://accounts.tacc.utexas.edu/register) if needed.
4. Locate the account under operator management, click Create Operator.
5. Choose the Agent when prompted.
6. Provide the new user's TACC username when prompted. **NOTE**: No password is necessary, and the user must not share their password with anyone, including their supervisor.
7. The account will be created. The creator and the new user will get notifications and emails.
8. Continue to assign the new user appropriate roles and collections.
9. Direct the user to log into their account using the TACC OAuth option. (Log out of the old account first if necessary!)

---------------
   
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/oauth.markdown).
