---
title: Borrow
layout: default_toc
---

# Borrows

Borrows are [transactions](/documentation/transactions.html) which record temporary custody of material, and provide a place to hang shipments.

### transaction_id

Foreign key ---> transaction

### lenders_trans_num_cde

Transaction identifier provided by the lender.


### lenders_invoice_returned_fg

Lender's acknowledgement of return.


### borrow_status

Foreign key ---> [ctborrow_status](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctborrow_status)


### lenders_instructions

Special instructions provided by lender


### lender_loan_type

Lender's transaction type


### borrow_number

Collection's transaction identifier

### received_date

Date

### due_date


Date


### lenders_loan_date

Date



## Edit this Documentation


If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/borrow.markdown).


