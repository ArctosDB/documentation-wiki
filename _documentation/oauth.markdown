---
title: Authentication
author: DLM, MSK
layout: default_toc
---

# Authentication
Arctos relies on an open standard for authenticating users registered to use Arctos. Any one who wants to interact with Arctos, from downloading data to managing data, must have a user account to authenticate their access. Record and various other pages in Arctos can be viewed without a user account.

## OAuth

OAuth (Open Authorization) is an open standard for authorization that allows third-party applications to access user data on another service without needing the user's password. Arctos uses OAuth to allow logging in via various providers. All Operators (those who can change things in the database) must authenticate via TACC/TAPIS.

## TACC Account

If an operator does not have a TACC account, [create your TACC account here.](https://accounts.tacc.utexas.edu/register). If you have a _.edu_ email address, it is strongly recommended to use it in your TACC profile, as these addresses are authorized without additional review. (More clarification to come)

## Migrating Existing Arctos Accounts

1. Log in to your existing and open Operator account in the usual way on Arctos.
2. Follow the TACC authentication option on the 'success' page.
3. Authenticate at TACC (You may need to accept TACC Terms of Use)
4. Success! In the future, simply use the TACC option to log in.


# Log in with TACC

To log into an Operator account created with TACC OAuth, or after an Operator account has been migrated to use TACC OAuth, simply choose the TACC option, then authenticate and/or confirm as requested.

# Create Arctos Operator

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

# Create a public account

1. Click either Google or GitHub from the log in page.
2. Provide your credentials and/or approve the request.
3. Done! Please fill in your profile to download data.
---------------
   
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/oauth.markdown).
