---
title: Loans
layout: default_toc
---

# Loans

<div class="anchors">

[Loan Number](#loan_number)\
[Loan Type](#loan_type)\
[Loan Status](#loan_status)\
[Loan Agents](#loan_agent_role)\
[Nature of Material](#nature_of_material)\
[Instructions](#instructions)\
[Description](#description)\
[Remarks](#remarks)\
[Initiated Date](#initiated_date)\
[Due Date](#due_date)\
[Shipping Date](#shipping_date)\
[Receipt Acknowledged](#receipt_acknowledged)\
[Returned Date](#returned_date)\
[Permit](#permit)\
[Project](#project)\
[Data Loans](#dataloan)\
[Deleting Items](#deleteitems)

</div>

The concept of a specimen loan is broad and includes any removal of
specimens from a collection, temporary or permanent, with the exception
of specimens that are destroyed. (“Discarded” is a specimen
disposition.) Specimens which are permanently transferred to another
collection or institution are loans of the the type, “transfer of
custody” (in place of the oxymoron, “permanent loan”). The type
“transfer of title” could be added when and if we include collections
that are willing to release title to cataloged specimens.

In order to associate specimens with in-house projects or the projects
of visiting researchers, the concept of loans can be further extended to
include in-house usage. When users of specimens fail to cite these
specimens in their publications, a degree of documentation, albeit
indirect, exists in that the specimens are associated with a loan, which
is associated with a project, which can be associated with the
publication.

A specimen “exchange” between collections is two transactions: A loan
and an accession. This arrangement well reflects the reality of
incompleted exchanges, and takes advantage of the fact that we are
dealing with both outgoing specimens and incoming specimens.

```

Loans . Loan\_Number\
VARCHAR(20) not null

```

[](#top){.infoLink}\
**Loan Number**

A Loan “number” is a string identifying the loan. The format usually
follows local tradition (*e.g.*, YYYY:nnn:Collection) but is
uncontrolled.

```

Loans . Loan\_Type\
VARCHAR not null

```

[](#top){.infoLink}\
**Type**

Loan type is a [code-table controlled
vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_TYPE).

If multiple Types apply, consider separate loans for separate Types, or
enter the most important one (*i.e.*, “returnable”).

```

Loans . Loan\_Status\
VARCHAR not null

```

[](#top){.infoLink}\
**Status** is essentially the degree to which the transaction has been
completed. The values comes from a [code-table controlled
vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_STATUS).

```

Loans . Loan\_Agent\_Role\
VARCHAR not null

```

[](#top){.infoLink}\
**Loan Agents** Agents (generally people) are associated with loans in
various capacities, and these vary among collections. At a minimum, a
loan is authorized by at least one person and received by another
person. Some collections require multiple authorizations, and at the
recipient’s end, the person accepting responsibility for the material
may not be the person physically receiving or using the material.

Loan Agent Role is a [code-table controlled
vocabulary](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTRANS_AGENT_ROLE).

```

Loans . Nature\_of\_Material\
VARCHAR not null

```

[](#top){.infoLink}\
**Nature of Material:** A description summarizing the overall content of
the loan. This description will appear on the loan invoice. It should be
explicit and concise, but it does not need include details on a
specimen-by-specimen basis.

```

Loans . Instructions\
VARCHAR null

```

[](#top){.infoLink}\
**Instructions:** Directions to the borrower on such things as storage
and return of the loaned items.

```

Loans . Description\
VARCHAR null

```

[](#top){.infoLink}\
**Description:** I don’t know? Why do we need another text field in
addition to Nature of Material and Remarks?

```

Loans . Loan\_Remarks\
VARCHAR null

```

[](#top){.infoLink}\
**Remarks:** Any annotations that will not be included on the Loan
invoice.

```

Loans . Initiated\_Date\
DATE not null

```

[](#top){.infoLink}\
**Initiated Date** is the date on which preparation of the loan began. A
default value would be the date on which the loan was first recorded in
the database.

```

Loans . Due\_Date\
DATE null

```

[](#top){.infoLink}\
**Due Date** is the date that a loan of the Type Returnable is expected
to be returned to the lending collection. This date may be used to
search for overdue loans, and/or to generate automated reminders to the
appropriate agents.

```

Loans . Shipping\_Date\
DATE null

```

[](#top){.infoLink}\
**Shipping Date** is the date that the loaned material was shipped from
the collection issuing the loan. The Shipping Date should be consistent
with any documentation provided by the carrier, *e.g.,* a waybill, bill
of lading, etc.

```

Loans . Receipt\_Acknowledged\_Date\
DATE null

```

[](#top){.infoLink}\
**Receipt Acknowledged** is the date the agent receiving the loan
submitted acknowledgment of its arrival to lending collection.

```

Loans . Returned\_Date\
DATE null

```

[](#top){.infoLink}\
**Returned Date**\
is the date that a loan of the type Returnable was received back at the
collection from which the loan was issued.

```

Permit . Permit\_ID\
INTEGER null

```

[](#top){.infoLink}\
**Permits:** A loan may be authorized under one or more
[permits](permit.html), and these may include both the senders and to
the recipients. Such authorizations should be recorded by associating
the loan with a permit that must be already be in the database.
Recording this information may be critical to reporting to the
permit-issuing authority, and hence a legal requirement for conducting a
loan.

```

Project . Project\_ID\
INTEGER null

```

[](#top){.infoLink}\
**Projects:** A loan is almost always made in support of one or more
[projects](project.html), and it is in project descriptions that the
scientific justification for the loan should be described.

[](#top){.infoLink}\
**Data loans** document data usage, and are generally used when a
project downloads data from Arctos without examining specimens. Data
loans form a special relationship between a loan and a cataloged item,
rather than a loan and a specimen part. Data loans are not meant as a
replacement for “digital” loans, in which a specimen part is imaged (or
otherwise digitized), as “digital” loans concern physical objects and
handling specimens. Subsequent usage of digital media (including that
generated in “digital” loans) may best be recorded as data loans.
Curators may wish to create a new loan number series for data loans,
although this is not required. This entry documents creation of a data
loan for illustrative purposes.

<div class="separator" style="clear:both;text-align:center">

</div>

1.  Found publication vaguely citing Arctos
2.  Created publication agents in Arctos
3.  Since the available PDF was a reprint, used the DOI to look up
    original publication information
    (<http://www.google.com/search?q=DOI%3A+10.1111%2Fj.1472-4642.2008.00547.x>)
4.  Created Publication in Arctos
5.  Added Media to the publication
6.  Created Arctos loan of type “data”
7.  Downloaded data loan template
8.  Searched Arctos for scientific names cited in publication
    <div class="separator" style="clear:both;text-align:center">

    [![](https://sites.google.com/site/arctosdb/_/rsrc/1302031427955/howto/dataloan/screenshot_%202011-04-05%20at%2012.23.05%20PM.png){width="320"
    height="51"}](https://sites.google.com/site/arctosdb/_/rsrc/1302031427955/howto/dataloan/screenshot_%202011-04-05%20at%2012.23.05%20PM.png)

    </div>

9.  Downloaded results, copied catalog numbers to data loan template.
10. Filled in rest of values in data loan template, copy/paste to
    all cells. Save as CSV.
11. Uploaded to data loan loader, clicked OK a couple times.
12. Created project, added loan, publication, and media created for
    publication

Total time: \~10 minutes, mostly spent researching and creating Agents.
Result:
<http://arctos.database.museum/project/different-climatic-envelopes-among-invasive-populations-may-lead-to-underestimations-of-current-and-future-biological-invasions>\
The collections used, even though there was no formal loan request and
no physical specimen usage, receive quantifiable credit for specimen
data used. Future Hieracium added to Arctos will not be included in this
loan, so it will be possible to quickly identify specimens which could
not have been used, even though the lack of citations in the paper makes
it impossible to determine which specimens were actually used.
Additionally, if current Hieracium specimens are later determined to be
some other species, those data will remain as part of the loan, perhaps
explaining yet-undetected anomalies in the publication.

**Deleting Items:**

In general, an item which has gone out on loan should never be removed
from the loan. Delete functionality exists only to correct mistakes –
when an item was added to a loan but not shipped, for example. Loan
items (parts) may not be deleted from the database. Item Disposition
and/or Container information is used to signify that an item has been
returned (or sent out on another loan). Maintaining this history is
vital to recording collection activity, and for building Projects, which
are transaction-based.
