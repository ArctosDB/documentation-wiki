---
title: Permits
layout: default_toc
---

# Permits

Permits are documentation authorizing transactions such as

[Accessions](accession) and [Loans](loan).

In general, permits are issued by governmental agencies, but letters
authorizing

collecting activities on private land can also be considered permits.

Some “registrations” may also constitute permits.

For example, museums can do international exchanges of specimens of
endangered

species if the museums are registered with their respective governments

under the Convention for International Trade in Endangered Species
(CITES).

In this case, it is the institutional certificates of CITES
registration

that constitute the authority.

Permits can can authorize any number of transactions,

and any number of permits may be required for a transaction.

```

Permit . Permit_Num
VARCHAR(20) null

```

## Permit Number

is an identifying text string assigned by the agency issuing the
permit.

Not all permits have such a number.

```

Permit . Permit_Type
VARCHAR(50) not null

ctpermit_type

```

## Permit Type:

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

```

Permit . Issued_To_Agent_id
INTEGER not null

```

## Issued To:

The agent to whom the permit was issued.

This could be either a person or organization.

```

Permit . Issued_By_Agent_id
INTEGER not null

```

## Issued By:

The agent to who issued the permit.

This could be either a person or organization.

```

Permit . Contact_Agent_id
INTEGER not null

```

## Contact Person:

Assuming that the Permit was issued by an organization,

this would be a person within the organization who administers the
permit.

This should always be a person, not an organization.

```

Permit . Issued_Date
DATETIME null

```

## Issued Date:

The day the permit was issued.

(We assume this to be the same as the day

on which the permitted activities become legal.

This might not always be the case.

We might need a separate date to indicate

the time period for which the permit is effective.)

A valid date is required.

```

Permit . Renewed_Date
DATETIME null

```

## Renewed Date:

Rather than expiring, and requiring a new permit for continued

activity, some permits may be renewed.

```

Permit . Exp_Date
DATETIME null

```

## Expiration Date:

The day on which the permit is no longer valid.

This date might be used to automatically notify the permittees

of the approaching expiration.

```

Permit . Permit_Remarks
VACHAR(255) null

```

**Remarks:**

These can be anything that extends the definition of the

permit or the conditions under which it applies.
