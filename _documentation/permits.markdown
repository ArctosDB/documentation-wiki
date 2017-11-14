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

`Permit . Permit_Num VARCHAR2(25) null`

Permit Number is an identifying text string assigned by the agency issuing the
permit. Not all permits have such a number.

## Permit Type

`Permit . Permit_Type VARCHAR(50) not null`

The kind of activity authorized by the permit. There are now four values are controlled by a [look-up table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPERMIT_TYPE). These are:

-   scientific collecting
-   import/export
-   import
-   collector’s hunt/fish/trap

There is room for improvement here.

In some cases, permits may authorize collecting, importation, and exportation.

## Issued To

`Permit . Issued_To_Agent_ID NUMBER(22) not null`

The [agent](/documentation/agent) to whom the permit was issued. This could be either a person or organization.

## Issued By

`Permit . Issued_By_Agent_ID NUMBER(22) not null`

The [agent](/documentation/agent) who issued the permit. This could be either a person or organization.

## Contact Person

`Permit . Contact_Agent_ID NUMBER(22) null`

Person who will receive email notifications of permit events.

## Issued Date

`Permit . Issued_Date DATE(7) null`

The day the permit was issued. (We assume this to be the same as the day on which the permitted activities become legal. This might not always be the case. We might need a separate date to indicate the time period for which the permit is effective.) A valid [date](/documentation/dates) is required.

## Renewed Date

`Permit . Renewed_Date DATE(7) null`

Rather than expiring, and requiring a new permit for continued activity, some permits may be renewed. A valid [date](/documentation/dates) is required.

## Expiration Date

`Permit . Exp_Date DATE(7) null`

The day on which the permit is no longer valid. This [date](/documentation/dates) might be used to automatically notify the permittees of the approaching expiration.

## Remarks

`Permit . Permit_Remarks VARCHAR2(300) null`

These can be anything that extends the definition of the permit or the conditions under which it applies.
