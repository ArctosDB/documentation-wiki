---
title: Loans
author: unknown, Teresa J Mayfield-Meyer
date: 2021-07-21
layout: default_toc
---

# Loans

Loans are transcations that document any removal of objects from a collection, temporary or permanent, including objects that are loaned with the intention of being destroyed or permanently transferred to another institution or collection, as well as the use of object information (data loan). When objects are recieved, a Borrow should be created.

## Loan Fields

### Loan Number

`Loan . Loan_Number VARCHAR2(255) not null`

A Loan "number" is a string identifying the loan. The format usually
follows local tradition (*e.g.*, YYYY:nnn:Collection) but is
uncontrolled.

Arctos offers "next loan number" suggestions when a collection's data can support them. File an Issue to activate this functionality.

### Type

Public | Required | Editable | Max Length | Value Code Table | What it does 
 -- | -- | -- | -- | -- | -- 
No | Yes | Yes | 25 | [ctloan_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_TYPE) | Provides information about collection usage.

Loan transactions can be made public at the collection level, but generally are not.

For information on selection of loan type, see [Best Practice - Selecting a Loan Type](https://github.com/ArctosDB/documentation-wiki/blob/gh-pages/_best_practices/Loan_Type.markdown).

### Status

`Loan . Loan_Status VARCHAR2(20) not null`

Loan Status is essentially the degree to which the transaction has been completed. The values comes from a [code-table controlled vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_STATUS).

### Loan Agents

`Trans_Agent . Trans_Agent_ID NUMBER(22) not null`

See [Transaction Documentation](/documentation/transactions.html#transaction-agents) for agent information.

### Nature of Material

`Trans . Nature_of_Material VARCHAR2(4000) not null`

A description summarizing the overall content of
the loan. This description will appear on the loan invoice. It should be
explicit and concise, but it does not need include details on a
specimen-by-specimen basis.

### Instructions

`Loan . Instructions VARCHAR2(4000) null`

Directions to the borrower on such things as storage
and return of the loaned items.

### Description

`Loan . Description VARCHAR2(4000) null`

*I don’t know? Why do we need another text field in
addition to Nature of Material and Remarks?*

### Remarks

`Trans . Trans_Remarks VARCHAR2(4000) null`

Any annotations that will not be included on the Loan
invoice.

### Initiated Date

`Trans . Trans_Date DATE(7) null`

Initiated Date is the [date](/documentation/dates) on which preparation of the loan began. A
default value would be the date on which the loan was first recorded in
the database.

### Due Date

`Loan . Return_Due_Date DATE(7) null`

Due Date is the [date](/documentation/dates) that a loan of the Type Returnable is expected
to be returned to the lending collection. This date may be used to
search for overdue loans, and/or to generate automated reminders to the
appropriate agents.

### Shipping Date

`Shipment . Shipped_Date DATE(7) null`

Shipping Date is the [date](/documentation/dates) that the loaned material was shipped from
the collection issuing the loan. The Shipping Date should be consistent
with any documentation provided by the carrier, *e.g.,* a waybill, bill
of lading, etc.

### Receipt Acknowledged

`Borrow . Received_Date DATE(7) null`

Receipt Acknowledged is the [date](/documentation/dates) the agent receiving the loan
submitted acknowledgment of its arrival to lending collection.

### Returned Date

`Loan . Closed_Date DATE(7) null`

Returned, or Closed, Date is the [date](/documentation/dates) that a loan of the type Returnable was received back at the
collection from which the loan was issued.

## Permits

A loan may be authorized under one or more
[permits](/documentation/permits), and these may include both the senders and to
the recipients. Such authorizations should be recorded by associating
the loan with a permit that must be already be in the database.
Recording this information may be critical to reporting to the
permit-issuing authority, and hence a legal requirement for conducting a
loan.

## Projects

A loan is almost always made in support of one or more
[projects](/documentation/projects), and it is in project descriptions that the
scientific justification for the loan should be described.

## Deleting Items

In general, an item which has gone out on loan should never be removed
from the loan. Delete functionality exists only to correct mistakes –
when an item was added to a loan but not shipped, for example. Loan
items (parts) may not be deleted from the database. Item Disposition
and/or [Container](/documentation/container) information is used to signify that an item has been
returned (or sent out on another loan). Maintaining this history is
vital to recording collection activity, and for building Projects, which
are transaction-based.

## How To

Instructions for doing specifc tasks related to Loans in Arctos (please note that "under construction" icons on pages indicate that the documentation may be incomplete or out-of-date):

 - [How To Create a Loan](https://handbook.arctosdb.org/how_to/How-to-Create-a-New-Loan.html)
 - [How To Add Loan Items](https://handbook.arctosdb.org/how_to/How-to-Add-Loan-Items.html)
 - [How To Add Items to a Data Loan](https://handbook.arctosdb.org/how_to/How-to-Add-Data-Loan-Items.html)
 - [How To Find and Edit Loans](https://handbook.arctosdb.org/how_to/How-to-Find-and-Edit-Loans.html)
 - [How To Search Transactions](https://handbook.arctosdb.org/how_to/how-to-search-transactions.html)
 - [How To Bulkload Loans](https://handbook.arctosdb.org/how_to/How_To_Bulkload_Legacy_Loans.html)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/loans.markdown" target="_blank">here</a>.
