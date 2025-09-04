---
title: Authentication
author: DLM, MSK
layout: default_toc
date: 2025-08-28
---

# Authentication
Arctos relies on an open standard for authenticating users registered to use Arctos. Any one who wants to interact with Arctos, from downloading data to managing data, must have a user account to authenticate their access.

## OAuth

OAuth (Open Authorization) is an open standard for authorization that allows third-party applications to access user data on another service without needing the user's password. Arctos uses OAuth to allow logging in via various providers. All Operators (those who can change things in the database) must authenticate via TACC/TAPIS.

## TACC Account

If an operator does not have a TACC account, [create your TACC account here.](https://accounts.tacc.utexas.edu/register). If you have a _.edu_ email address, it is strongly recommended to use it in your TACC profile, as these addresses are authorized without additional review. If you have another work email domain (e.g., _.org_, etc) please use that. All other email address types are subject to additional validation by TACC. Users with a TACC account can go directly to the user management section of the TACC portal:  <https://accounts.tacc.utexas.edu/login?redirect_url=profile>.

### MFA

TACC and Arctos generally require [MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication) for accounts. TACC accounts created after February 07, 2023 should work without issue. For those created before this date with SMS MFA, you will have to un-pair and re-pair your mobile number.

* Log into the TACC user portal [https://tacc.utexas.edu/portal/dashboard](https://tacc.utexas.edu/portal/dashboard)
* Click Manage Account
* Click Manage multi-factor Authentication
* Click unpair
* Use the email option if SMS doesn't work
* Follow the directions in the email to unpair
* Use the Manage multi-factor Authentication button again to re-pair your cell number

## Migrating Existing Arctos Accounts

1. Log in to your existing and open Operator account in the usual way on Arctos.
2. Follow the TACC authentication option on the 'success' page.
3. Authenticate at TACC (You may need to accept TACC Terms of Use)
4. Success! In the future, simply use the TACC option to log in.

## Problems?

Please see <https://github.com/ArctosDB/arctos/issues/8867> for more information, or to ask for help.


# Log in with TACC

To log into an Operator account created with TACC OAuth, or after an Operator account has been migrated to use TACC OAuth, simply choose the TACC option, then authenticate and/or confirm as requested.

# Create Arctos Operator

All users must have a TACC account before being added an Arctos Operator. See [Users](/documentation/users.html) for detailed instructions.

# Create a public account

1. Click either Google or GitHub from the log in page.
2. Provide your credentials and/or approve the request.
3. Done! Please fill in your profile to download data.


---------------
   
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/oauth.markdown).



