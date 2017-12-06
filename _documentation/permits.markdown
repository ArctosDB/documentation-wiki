---
title: Permits
layout: default_toc
---

# Permits

Permits are documentation authorizing transactions such as [Accessions](/documentation/accession) and [Loans](/documentation/loans).

In general, permits are issued by governmental agencies, but letters
authorizing collecting activities on private land can also be considered permits.

Some "registrations" may also constitute permits. For example, museums can do international exchanges of specimens of
endangered species if the museums are registered with their respective governments under the Convention for International Trade in Endangered Species (CITES). In this case, it is the institutional certificates of CITES registration that constitute the authority.

Permits can can authorize any number of transactions, and any number of permits may be required for a transaction.

## Permit Number

`Permit . Permit_Num VARCHAR2(25) NOT NULL`

Permit Number or Identifier is an identifying text string. This is often assigned by the agency issuing the
permit. Permit number is a required field; enter any suitable value which will help in locating the permit when such an 
identifier has not been provided by the issuer.

## Permit Type

`Permit_Type . Permit_Type VARCHAR(50) null`

The kind of activity authorized by the permit. Values are controlled by a 
[look-up table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPERMIT_TYPE). 
Permits may have any number of permit_types associated, optionally associated with a permit_regulation.

## Permit Regulation

`Permit_Type . Permit_Regulation VARCHAR(50) null`

The regulation under which the permit was issued. Values are controlled by a 
[look-up table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPERMIT_REGULATION). 
Permits may have any number of Permit_Regulations associated, optionally associated with a permit_regulation.

## Permit Roles and Agents

Permits may have any number of agents associated via roles. Roles are controlled by a
[look-up table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPERMIT_AGENT_ROLE). 


## Issued Date

`Permit . Issued_Date DATE(7) null`

The day the permit was issued. This is an Oracle DATE datatype, not ISO8601; only day-precision is allowed.

## Expiration Date

`Permit . Exp_Date DATE(7) null`

The day on which the permit is no longer valid. 
This is an Oracle DATE datatype, not ISO8601; only day-precision is allowed.
Used to automatically notify the permittees of the approaching expiration.

## Remarks

`Permit . Permit_Remarks VARCHAR2(300) null`

These can be anything that extends the definition of the permit or the conditions under which it applies.

## Renewals

Renewals should be entered as a new permit. A clarifying remark may be useful.
