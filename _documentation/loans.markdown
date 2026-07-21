---
title: Loans
authors: Dusty L. McDonald
date_updated: 2025-08-12
---

Loans are [transcations]({% link _documentation/transactions.markdown %}) that document any use, touching, or removal of objects from a collection, temporary or permanent, including objects that are loaned with the intention of being destroyed or permanently transferred to another institution or collection, as well as the use of object information (data loan).

## Loan Fields

### transaction_id

Primary key, internal

### loan_number


A Loan "number" is a string identifying the loan. The format usually
follows local tradition (*e.g.*, YYYY:nnn:Collection) but is
uncontrolled. Loan number + collection (via trans) is constrained to be unique.

Arctos offers "next loan number" suggestions when a collection's data can support them. File an Issue to activate this functionality.

### loan_type

Foreign key --> [ctloan_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_TYPE)

### loan_status


Foreign key --> [ctloan_status](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctloan_status)

### return_due_date

Due Date is the [date]({% link _documentation/dates.markdown %}) that a loan of the Type Returnable is expected
to be returned to the lending collection. This date may be used to
search for overdue loans, and/or to generate automated reminders to the
appropriate agents.

### closed_date

Returned, or Closed, Date is the [date]({% link _documentation/dates.markdown %}) that a loan was completeld. (Recommendation: Set this after all material has been returned, publications with citations have been provided, or the terms of the loan have otherwise been met.)

### loan_instructions


Instructions to the borrower on such things as storage and return of the loaned items.


### loan_description

Free text.



## Deleting Items

In general, an item which has gone out on loan should never be removed
from the loan. Delete functionality exists only to correct mistakes –
when an item was added to a loan but not shipped, for example. Loan
items (parts) may not be deleted from the database. Item Disposition
and/or [Container]({% link _documentation/container.markdown %}) information is used to signify that an item has been
returned (or sent out on another loan). Maintaining this history is
vital to recording collection activity, and for building Projects, which
are transaction-based.
