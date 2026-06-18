---
title: Transactions
layout: default_toc
authors: Dusty L. McDonald
date_updated: 
---

Transactions are actions that effect the coming and going of Cataloged
Items, and parts thereof. There are three primary types of transactions.

1. [Accessions](/documentation/accession.html) document aquisition. An accession is a necessary prerequisite to cataloging.
2. [Loans](/documentation/loans.html) record movement and usage of parts ("normal" loans) and records ("data" loans). 
3. [Borrows](/documentation/borrow.html) record items from other collections lent, and in your collection’s temporary custody. Note that borrows have no link to catalog records.


Data in table trans and related tables may be used by all three types of transactions.

# table trans

Table trans is the primary/central transaction table.

## transaction_id

Internal primary key

## collection_id

Foreign key to Collections; all transactions are owned by a single collection, but items within the transaction may be mixed.

## transaction_type

Indicates the type of transaction; foreign key ---> [cttransaction_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttransaction_type)

## nature_of_material

Nature of Material is a textual description of the material involved. [Markdown](/documentation/markdown.html) is allowed.

## trans_remarks

Transaction Remarks is any remarkable information about the transaction. Note that transaction remarks is always private, regardless of is_public_fg. [Markdown](/documentation/markdown.html) is allowed.


## corresp_fg

Flag indicating whether correspondence exists.

## is_public_fg

By default, transactions (except identifier/"number") are internal and only available to the originating collection. Setting this flag to true
makes some transaction data publicly available.

## Trans Date

Trans date is an ISO8601 date field describing the date the transaction took place (usually began).


---------------------------------

# table trans_agent

Transaction Agents are Agents who participate in transactions in some way.

## trans_agent_id

Internal key

## transaction_id

Foreign key ---> Transactions

## agent_id


Foreign key ---> Agent


## trans_agent_role

Foreign Key ---> [cttrans_agent_role](http://arctos.database.museum/info/ctDocumentation.cfm?table=cttrans_agent_role) 

Transaction Agent Role describes the various roles Agents have in Transactions. 




# table shipment

Shipments record movement of material and correspondence.


## shipment_id

primary key

## transaction_id

Foreign key ---> transaction



## container_id


Foreign key ---> container


## packed_by_agent_id


Foreign key ---> agent

The agent handling the material.


## shipped_carrier_method

Foreign key ---> [ctshipped_carrier_method](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctshipped_carrier_method)

## carriers_tracking_number

Identifier (ideally URL) provided by the carrier.

## shipped_date

Date


## package_weight

text; include units as necessary

## hazmat_fg

yes/no

## insured_for_insured_value

Numeric, assume USD

## shipment_remarks

Elaborate here

## contents

Describe

## foreign_shipment_fg

yes/no


## shipped_to_addr_id

Foreign key ---> agent_attribute

## shipped_from_addr_id


Foreign key ---> agent_attribute


## shipment_type

Foreign key ---> [ctshipment_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctshipment_type)


# table permit_trans

Table Permit-Trans links [permits](/documentation/permits.html) and transactions.

# table project_trans


Table Project-Trans links [projects](/documentation/projects.html) and transactions.

# table trans_container

Table Trans-Container provides a mechanism to link transations and [containers](/documentation/container.html)  .



## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/transactions.markdown).
