
There is room for improvement here.\
In some cases, permits may authorize collecting, importation, and
exportation.

<div class="fldDef">

Permit . Issued\_To\_Agent\_id
INTEGER not null

</div>

**[]()Issued To:**\
The agent to whom the permit was issued.\
This could be either a person or organization.

<div class="fldDef">

Permit . Issued\_By\_Agent\_id
INTEGER not null

</div>

**[]()Issued By:**\
The agent to who issued the permit.\
This could be either a person or organization.

<div class="fldDef">

Permit . Contact\_Agent\_id
INTEGER not null

</div>

**[]()Contact Person:**\
Assuming that the Permit was issued by an organization,\
this would be a person within the organization who administers the
permit.\
This should always be a person, not an organization.

<div class="fldDef">

Permit . Issued\_Date
DATETIME null

</div>

**[]()Issued Date:**\
The day the permit was issued.\
(We assume this to be the same as the day\
on which the permitted activities become legal.\
This might not always be the case.\
We might need a separate date to indicate\
the time period for which the permit is effective.)\
A valid date is required.

<div class="fldDef">

Permit . Renewed\_Date
DATETIME null

</div>

**[]()Renewed Date:**\
Rather than expiring, and requiring a new permit for continued\
activity, some permits may be renewed.

<div class="fldDef">

Permit . Exp\_Date
DATETIME null

</div>

**[]()Expiration Date:**\
The day on which the permit is no longer valid.\
This date might be used to automatically notify the permittees\
of the approaching expiration.

<div class="fldDef">

Permit . Permit\_Remarks
VACHAR(255) null

</div>

**[]()Remarks:**\
These can be anything that extends the definition of the\
permit or the conditions under which it applies.

</div>

</div>

</div>

</div>

<div id="secondary">

get yer docs here {#get-yer-docs-here .site-description}
-----------------

</div>

</div>

