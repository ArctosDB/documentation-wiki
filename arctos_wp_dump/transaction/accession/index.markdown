
**Status** indicates whether or not the accession is cataloged or not. 
“Complete” indicates that the disposition of specimens can be determined
from individual specimen records.  “In process” indicates that at least
some of the material is still being stored and labeled by accession
number.\
[](){.infoLink}

The Public? flag allows accession data to be displayed in a public (open
to non-operators) page, currently linked to from Specimen Results. This
is useful for displaying accession-level Media, such an UAM Earth
Science accession and locality card scans.\
[](){.infoLink}

<div class="fldDef">

Accn . accn\_type\
VARCHAR2(35) not null\
[ctAccn\_Type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctAccn_Type)

</div>

**How obtained?**  This is a means of acquiring the specimens, such as
“gift,” “salvaged,” and “purchased.”  The field needs a more rigorous
definition; several of the values in this field are really agents
(agencies, organizations), and should be reflected in “Received From”
(below).

**Received From** is the name of the agent who (or which) provided the
described material to the museum.  Whenever possible, this should be the
name of a person, *i.e.,* the person within an agency rather than the
name of the agency.\
[](){.infoLink}

<div class="fldDef">

Accn . Received\_Date\
DATE not null

</div>

**Received Date** is the day that the accessioned material was received
by the museum.  Must be a valid date.  Default could be the system date
when the record was created.

**Entry Date** is the day that the accession record was created. Must be
a valid date. Default could be the system date when the record was
created.  {Do we need this? Should it be a stored system date, and not
necessarily displayed in normal applications?}\
[](){.infoLink}

<div class="fldDef">

Trans . Trans\_Remarks\
VARCHAR2(4000) null

</div>

**Remarks** is a place for expanding a description of the conditions of
acceptance, or for instructions in processing the material.  For
example, “Take 50 gram subsamples for fatty-acid analysis.”\
[]()

Estimated Count is an integer expressing approximately how many
specimens can be expected as part of an accession.\
[]()

Accession Containers are Containers which hold unprocessed material,
e.g., bags of frozen mice can be made Containers and scanned into
freezers.\
[]()

Email is sent on every annual anniversary of Transaction Data for
accessions which are not “closed” but contain no specimens.

[](#top){.infoLink}\
**Data Entry Considerations**\
You can catalog records in “your collection” that have been accessioned
by another collection.  For data entry (through either the data-entry
application or the bulkloader) indicate the accession that you wish to
use, but put brackets around the part of the accession “number” that
indicates the collection.  This effectively tells the bulkloader,
“ignore the collection (collection\_cde + institution\_acronym) to which
this record is going to be appended, and indicate the accession based on
what is in the brackets.” (Though that accession must be present in
Arctos.)  Examples include:

-   A UAM Mammal Observation being entered into a UAM Mammal accession
-   An MVZ Bird being entered into an MVZ Mammal accession
-   An MSB parasite host being entered into an MSB parasite accession

Example Usage is follows. Collections are in <span
style="font-style:italic">italics</span>.

-   Desired accession: <span style="font-style:italic">UAM:Mamm</span>
    1234.123.Mamm
-   New Specimen: <span style="font-style:italic">UAMObs:Mamm</span>
    9876
-   Default accession: <span
    style="font-style:italic">UAMObs:Mamm</span> 1234.123.Mamm <span
    style="font-size:85%">(Does not and should not exist)</span>
-   Value to enter for Accession: **\[UAM:Mamm\]1234.123.Mamm**

<!-- -->

-   Desired accession: <span style="font-style:italic">MVZ:Birds</span>
    14508
-   New Specimen: <span style="font-style:italic">MVZ:Bird </span>183000
    -Value to enter for Accession: 14508
-   New Specimen: *MVZ:Mamm* 250000 -Value to enter for Accession:
    **\[MVZ:Bird\]14508**
-   New Specimen: *MVZObs:Bird* 10 -Value to enter for Accession:
    \[MVZ:Bird\]14508

<!-- -->

-   Desired accession: *MSB:Para* 2012.123.Para
-   New Specimen: *MSB:Host*:9876
-   Default accession: *MSB:Host* 2012.123 (Does not and should
    not exist)
-   Value to enter for Accession: **\[MSB:Para\]2012.123.Para**

</div>

</div>

</div>

</div>

<div id="secondary">

get yer docs here {#get-yer-docs-here .site-description}
-----------------

</div>

</div>

