---
title: Permits
layout: default_toc
---

# Permits

Permits are documentation authorizing transactions such as

[Accessions](accession) and [Loans](loan).

In general, permits are issued by governmental agencies, but letters
authorizing collecting activities on private land can also be considered permits.

Some "registrations" may also constitute permits.

For example, museums can do international exchanges of specimens of
endangered species if the museums are registered with their respective governments under the Convention for International Trade in Endangered Species (CITES).

In this case, it is the institutional certificates of CITES registration that constitute the authority.

Permits can can authorize any number of transactions, and any number of permits may be required for a transaction.


## Permit Number

`Permit . Permit_Num ARCHAR(20) null`


is an identifying text string assigned by the agency issuing the
permit. Not all permits have such a number.


## Permit Type:

`Permit . Permit_Type ARCHAR(50) not null`

`ctpermit_type`


The kind of activity authorized by the permit.

Their are now four values are controlled by a look-up table.

These are:

-   scientific collecting
-   import/export
-   import
-   collector’s hunt/fish/trap

There is room for improvement here.

In some cases, permits may authorize collecting, importation, and
exportation.



## Issued To

`Permit . Issued_To_Agent_id NTEGER not null`


The agent to whom the permit was issued.

This could be either a person or organization.



## Issued By

`Permit . Issued_By_Agent_id INTEGER not null`


The agent to who issued the permit.

This could be either a person or organization.



## Contact Person

`Permit . Contact_Agent_id INTEGER not null`


Assuming that the Permit was issued by an organization, this would be a person within the organization who administers the permit.

This should always be a person, not an organization.



## Issued Date

`Permit . Issued_Date DATETIME null`


The day the permit was issued. (We assume this to be the same as the day on which the permitted activities become legal. This might not always be the case. We might need a separate date to indicate the time period for which the permit is effective.)

A valid date is required.



## Renewed Date

`Permit . Renewed_Date DATETIME null`


Rather than expiring, and requiring a new permit for continued activity, some permits may be renewed.



## Expiration Date

`Permit . Exp_Date DATETIME null`


The day on which the permit is no longer valid. This date might be used to automatically notify the permittees of the approaching expiration.



## Remarks

`Permit . Permit_Remarks VACHAR(255) null`


These can be anything that extends the definition of the permit or the conditions under which it applies.
