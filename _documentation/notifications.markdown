---
title: Notifications
layout: default_toc
---

# Notifications and Reports

## Notifications and Reminders by Email

All reminders and notifications rely upon an Agent’s email address; make sure it is current and correct. Some reports (such as loans coming due) are sent directly to Agents, others (such as specimen data annotations) are sent to the collection’s contacts (usually “data quality”). Collection contacts may be managed through the Manage Collection app.

Loan Reminders for loans where status is not “closed” are sent to:

 - The loan’s “notification contact” and “in-house contact” are emailed 30 days before the loan is due, 7 days before the loan is due, and the day the loan is due.
 - The collection’s “loan request” agent(s), along with the loan’s “notification contact” and “in-house contact,” are emailed 7,30,60,129,150,180, and 365 days after the loan was due.
 
Permit reminders are emailed to the permit’s contact agent 365,180,30, and 0 days before the permit expires.

Accession reminders are emailed to the collection’s data quality contact on every annual anniversary of the received data as long as there are no specimens.

Annotations are sent to the collection’s data quality contact upon submission, and may also be accessed under the Reports tab.

Code table updates are sent to all “data quality” contacts.

Agent “flagged as duplicate” messages are sent to the “data quality” contacts of affected collections 7 days before the agents are merged.

## Reports

Arctos offers several methods by which users may investigate suspect data. None are perfect – black-and-white issues are encoded as database rules, rather than after-the-fact reports.

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