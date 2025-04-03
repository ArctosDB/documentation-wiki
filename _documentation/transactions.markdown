---
title: Transactions
layout: default_toc
---

# Transactions


Transactions are actions that effect the coming and going of Cataloged
Items, and parts thereof. There are three primary types of transactions.

1. [Accessions](/documentation/accession.html) document aquisition. An accession is a necessary prerequisite to cataloging.
2. [Loans](/documentation/loans.html) record movement and usage of parts ("normal" loans) and records ("data" loans). 
3. [Borrows](/documentation/borrow.html) record items from other collections lent, and in your collection’s temporary custody. Note that borrows have no link to catalog records.


These three types of transactions share several fields in common, and those fields are treated on this page.

## transaction_id

Internal primary key

## collection_id

Foreign key to Collections; all transactions are owned by a single collection, but items within the transaction may be mixed.

## transaction_type

Indicates the type of transaction; foreign key ---> [cttransaction_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttransaction_type)

## nature_of_material

Nature of Material is a textual description of the material involved. 

## trans_remarks

Transaction Remarks is any remarkable information about the transaction. Note that transaction remarks is always private, regardless of is_public_fg.


## corresp_fg

Flag indicating whether correspondence exists.

## is_public_fg

By default, transactions (except identifier/"number") are internal and only available to the originating collection. Setting this flag to true
makes some transaction data publicly available.

## Trans Date

Trans date is an ISO8601 date field describing the date the transaction took place (usually began).


---------------------------------

# trans_agent

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



## Next Number

Arctos can by request suggest the "next" transaction identifier (eg, loan number) if the existing data support such a calculation. File an Issue to request this functionality. Minimum requirements are the transaction type, format of the suggestion, and collection(s) to which the suggestion applies.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/transactions.markdown).
