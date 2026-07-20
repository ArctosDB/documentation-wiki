---
title: Projects
authors: Michelle Koo, Dusty L. McDonald
date_updated: updated 2025-07-02
---

Projects are primarily endeavors that contribute specimens, use
specimens, or both, but also serve as a convenient place to arbitrarily
group things like Media and Publications. Dissertations and expeditions
are two examples of potential projects. Because information about
incoming specimens is recorded as accessions, and because information
about specimen usage is recorded as loans, relationships between
projects can be queried. Project descriptions, and their relationships
to specimens and publications, are intended to:

-   Track the scientific context of specimens and thereby add to their utility and value.
-   Demonstrate the scientific significance of collections by explicitly detailing usage of individual specimens.
-   Give credit where credit is due to contributors of specimens, or to sponsors of collecting efforts.
-   Allow contributors of specimens to track the usage of their contributions.

Projects can be created retroactively in order to reflect the historic
usage or origin of specimens, or projects can be created in the process
of requesting a loan or describing an incoming accession. A project has
a title, a description, a start date, an end date, and participating
agents who have roles. Projects may also produce
[publications](/documentation/publications) to which they can be related even in
the absence of specimen [citations](/documentation/publications#full-citation). (Capturing some information - e.g., that derived from loans or personal knowledge - about poor-quality Citations is a core function of Projects.)

##  Project

``Project`` is the core table.

### Title

Like projects themselves, project titles may be composed
retrospectively or they may originate from the participants. Titles
should avoid jargon and be understandable to non-specialists, such as
educated taxpayers. Titles should be self-explanatory, stand alone, and
contain enough information for a user to decide whether to investigate
further or not. In format, project titles are like journal article and
book chapter [titles](/documentation/publications). Recommended format is to capitalize only the
first letter of the title and proper names, and punctuate the end of the
title with a period unless it is otherwise punctuated. Markdown in ``project_name`` is supported, but not recommended as it will inhibit searching. HTML is not allowed.

### Description

Description is an abstract of one to about ten sentences. Description
should demonstrate the importance of the work and justify the use of
museum specimens and resources. Vocabulary and grammar must be suitable for public
display. New projects requesting use of specimens should include such
descriptions as part of their requests. Markdown is acceptable in ``.project_description``.  HTML is not allowed.

### Dates

``start_date`` and ``end_date`` will often be approximate, and End Date
can be ignored for projects that are active. Often, the [date](/documentation/dates) that a
request for specimens is received is used as the start date, and the
date that results are last published is used as the end date.


### Funded USD

``funded_usd`` is the amount, in US Dollars, for which a project has been funded. 

### Remarks

``project_remarks`` is a project-centered free-text field. Neither markdown nor HTML are supported.

## Agents

Project Agents (table ``project_agent``) are the people or agencies doing the project. Their
names are drawn from the [agent table](/documentation/agent) and must be entered there if
they are not already in the database.


### Agent Roles

``project_agent_role`` describes what the agents do as project participants. The values for this field are controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPROJECT_AGENT_ROLE).

### Agent Order

``agent_position`` is the order in which the agents will be displayed. A
principal investigator would usually be number one followed by
co-investigators. In the case of a doctoral thesis or dissertation, the
student is usually first and the major advisor second, though this could
be an issue of some delicacy.

### Award 

``award_number`` and ``funded_usd`` (may only be associated with role Sponsor) links specific funding to project participants.


### Agent Dates

``start_date`` and ``end_date`` specify temporal participation.

## Publications

A project may be directly associated with any number of Publications. This functionality is primarily intended to capture low-quality Citations; it is not necessary to explicitly add Publications which specifically cite material included in project transactions. This table contains keys to projects and publications, plus a remarks field (in which eg assumptions made to guess at poor citations should be noted).

### project_publication_remarks

Free-text, no markup/markdown.

## Taxonomy

Taxon names may be linked directly to projects via table ``project_taxonomy``.

## Transactions

Table ``project_trans`` links projects to transactions. This link is where the magic happens - accessioning a record under one project and (perhaps decades) later citing the same record under another automatically provides attribution to the original collectors, for example. This table contains keys to projects and publications, plus a remarks field.

### Project Trans Remarks

``project_trans_remarks``

Free-text, no markup/markdown.

## Media

Media may be attached to Projects via media relationships.

## Deleting

To delete a project, first delete all dependencies then a delete button will appear.

## Identifier

Each project generates a unique identifier and URI comprised of its internal project ID. Example: {base URL}/project/{projectID} such as: https://arctos.database.museum/project/10000298
