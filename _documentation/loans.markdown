---
title: Loans
layout: default_toc
---

# Loans

Loans are transcations that document any removal of objects from a collection, temporary or permanent, including objects that are loaned with the intention of being destroyed or permanently transferred to another institution or collection, as well as the use of object information (data loan). When objects are recieved, a Borrow should be created.

In order to associate objects with in-house projects or the projects of visiting researchers, the concept of loans can be further extended to include in-house usage. When users of objects fail to cite these objects in their publications, a degree of documentation, albeit indirect, exists in that the objects are associated with a loan, which is associated with a project, which can be associated with the publication.

An object "exchange" between collections is two transactions: A loan and an accession. This arrangement well reflects the reality of incompleted exchanges, and takes advantage of the fact that we are dealing with both outgoing objects and incoming objects.

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
No | Yes | yes | 25 | [ctloan_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_TYPE) | Provides information about collection usage.

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
