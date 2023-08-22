---
title: Notifications
author: DLM, Teresa J. Mayfield-Meyer
date: 2023-08-21
layout: default_toc
---

# Notifications and Reports

## Notifications

Various Notifications regarding data quality problems and upcoming events are delivered to the Notifications tab of Arctos Operators.

Notifications apply to the state of the data at the time they are generated. Many notifications are delivered somewhat asynchronously, so it is even possible that a problem has been fixed before the notification is sent. Fixing a problem does not change existing notifications, and changing notifications cannot fix the data which generated them.

### Structure

**Status** provides a convenient means to sort and filter notifications. Some values change the look of the interface. A status of "delete" deletes the user-link portion of the notification; other Operators can still see notifications which you have deleted.
    
**Date** is timestamp at which the notification was delivered.
    
**Subject** provides a means to sort and filter.
    
**Content** is the body of the notification. This will generally include links to the data which generated the notification.
    
**Shared** provides a place for shared notes regarding the notification. These are editable by anyone who received the notification.

**CC** is a list of usernames who received the notification. Note that notifications are delivered to relevant (at the time of delivery) users, including those with locked accounts.

### Examples

The following notifications and reminders are generated. This list is not all-inclusive; scheduled tasks are the only complete and authoritative source of this information.

#### Loan Reminders

Loans where status is not “closed” generate notifications 30 and 7 days before the loan is due, the every 30 days up to 300 days overdue, then daily.

#### Permit reminders

Permit notifications are delivered 365,180,30, and 0 days before the permit expires.

#### Accession reminders

Accession reminders are delivered on every annual anniversary of the received data as long as there are no records in the accession.

#### Annotations

Annotations where reviewer_comment is null generated monthly.

#### Code table updates

Code table updates are sent daily.


#### Agents

- Agents flagged as duplicates generate daily noification and completion notifications.
- Agents not meeting the creation guidelines generate daily notifications

#### Component Loaders

 A weekly report of data in component loaders is send.

##### Taxa

 A report of quarantined taxa with no relationships is generated daily.

#### Collection Report

 A report of collection data is delivered quarterly.

#### Usage

 Various reports regarding citations, loans, and external identifiers are sent monthly.

#### Reciprocal Relationships

A report of unreciprocated relationships is sent weekly.

## Email

A daily "notification notification" is delivered to active Operators with at least one accepted 'notification email' address in their Agent profile.


## Reports

Arctos offers several methods by which users may investigate suspect data. None are perfect; black-and-white issues are encoded as database rules, rather than after-the-fact reports.

**Publication Staging** (ManageData/Tools) is a way to quickly capture very basic information about possible Citations in Arctos. Curators should periodically review and update the information in this form.

**Sync parent/child taxonomy** finds specimens in a Parent Of/Child Of relationship which do not share current Identification, and provides a means to synchronize them.

**Pending Relationships** provides access to those cataloged item relationships created during Data Entry which have not been successfully formalized. Curatorial action is required for anything in this list.

**GenBank MIA** (Reports) is a script that periodically crawls GenBank looking for sequences that may be related to Arctos specimens and which do not already have an Arctos LinkOut (newly-linked may continue to appear in the table for a few days).
Query type specimen_voucher:collection are GenBank sequences with which the collector has submitted a properly-formatted link to GenBank, and are almost certainly accurate.
Other query types are various guesses, and may or may not accurately resolve to specimens.

**Loan/Citation Stats** summarizes loans by the borrower, loan status, number of citations against specimens which were loaned, and cited versus current Identification. Citations must be individually examined to determine from which loan they originated. Citation Counts may reflect repeated usage of individual specimens.

**Audit SQL**  contains all UPDATE, DELETE, or INSERT statements, including those which were subsequently rolled back (e.g., due to constraint violations).

**Oracle Roles** is a summary of users by assigned roles. Curators should monitor this, particularly the collection roles (e.g., UAM_MAMM) to ensure that only authorized persons have access to their collections.

**Publications without Authors** (Reports/FunkyData) should always find nothing.

**Publications without Citations** may find publications which do not properly cite specimens. This usage may still be reflected in a Project.

**Projects with Loans and without Publications** may require followup with the borrower. Note that Publications may now include things like class reports, dissertations, and brochures.

**Loans without Specimens** are probably legacy or incomplete loans and may not be effectively used to demonstrate collection usage.

**Funky Data/Partless Specimens** finds specimens which have zero specimen parts. Only observations should be in this list; all other cataloged items should have at least one part, even if that part has a disposition of “missing” or “used up.”

**Funky Data/Messy Taxonomy** allows searching taxonomy by many criteria to identify various problems.

**Funky Data/Catalog Number Gaps** finds unused catalog numbers. There are no technical problems with nonsequential catalog numbers; this is purely an informational form.

**Funky Data/Duplicate Agents** dynamically searches for agents which may be duplicates (that is, an individual with two or more agent_id entries). Curators are encouraged to inspect these reports regularly, track down any recently-created duplicates, and offer additional training to operators who create duplicate agents.


## Why am I getting this?

Many notifications are sent to users who share roles, often manage_collection. You may check who has access to collections via Reports/Services-->View Statistics-->Collection Contact/Operator Report

<img width="429" alt="Screen Shot 2021-02-11 at 11 43 32 AM" src="https://user-images.githubusercontent.com/5720791/107690280-cb643600-6c5e-11eb-9347-04ce2d9f659c.png">

From this report it should be possible to match up users who have access to your collections with users in the notification.

## How To

Instructions for doing specifc tasks related to Notifications and Reports in Arctos

 - [How To Manage Annotations](https://handbook.arctosdb.org/how_to/annotations.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/notifications.markdown" target="_blank">here</a>.
