---
title: Migrating Data into Arctos
authors: Teresa J. Mayfield-Meyer, Erica R. Krimmel
date_updated: 2026-10-19
status: draft
redirect_from:
  - /how_to/data_migration.html
  - /how_to/data_migration/
  - /how_to/data-migration.html
  - /how_to/data-migration/
---

How data are migrated to Arctos depends on the state of the existing collection data as well as the size and scope of the collection. Arctos staff can provide a basic assessment for prospective collections on how simple or complex their data migration may be. That said, all data migrations require dedicated time from both Arctos and the staff at incoming collections. For more complex migrations, institutions should consider how to account for work related to data migration regardless of whether that work is performed by Arctos staff or by staff within the institution.

{% include tip.html content="Throughout this page, we use highlight boxes such as this one–but colored purple–to call out data migration tasks for incoming Arctos members." %}

## Overview

Data migration is centered on Catalog Records, since these are the primary form of record-keeping for collection objects in Arctos. There are two main ways to create Catalog Records in Arctos: via the Data Entry interface or via Bulkloading.

**Data Entry interface:** For collections coming into Arctos with little to no data in a digital format, the Data Entry interface can be used to create one catalog record at a time. This interface is based on a customizable form, and uses existing data authorities and code tables to populate values for geography, taxonomy, agents, attribute types, and part names. The advantage of entering data using this form is that it requires minimal knowledge about how data are structured in Arctos. The disadvantage is that data entry is slower because the records are entered one at a time. However, the process can be sped up by customizing the form. Note also that certain data must already exist in Arctos to populate single record data entry. This includes [selection of code table terms in Manage Collection]({% link _best_practices/data-migration.markdown %}#collection-level-metadata), [setting up Operators to work in your collection]({% link _best_practices/data-migration.markdown %}#user-management), and creation of necessary [Agents]({% link _best_practices/data-migration.markdown %}#agents), [Accessions]({% link _best_practices/data-migration.markdown %}#migrate-transactions), [Taxonomy]({% link _best_practices/data-migration.markdown %}#identifications), and [Higher Geography]({% link _best_practices/data-migration.markdown %}#higher-geography).

{% include tip.html content="Learn more about the data entry interface from [How To Enter Data for a Single Record](/how_to/enter-data-for-a-single-record)." %}

**Bulkloading data:** For collections coming into Arctos with existing data in a digital format, e.g. from another database or in spreadsheets, bulkloading data into Arctos will likely be more efficient. To do so, there are a suite of Arctos tools (“bulkloaders”) that share a common structure and can use CSV-formatted data to batch create most types of records (e.g. catalog records, agents, localities, events, taxonomy, etc.). The bulkloader for Catalog Records can also create data related to parts, localities, and events. Formatting CSV files for bulkloading involves using the correct column headings, as well as the correct values for data controlled by authorities and code tables. The advantage of bulkloading data is that a large number of records can be created at once. The disadvantage is that there is more of a learning curve, and that bulkloading requires knowledge about how Arctos data are structured.

{% include tip.html content="Learn more about bulkloading data from the [Bulkloader documentation page](/documentation/bulkloader), [Bulkloader Field Documentation](https://docs.google.com/spreadsheets/d/1VbNC3k17WAHMum_qD5UYoXxUUWwXXh5gZSM5vfGvRzU/edit?usp=sharing) and [How to Bulkload Catalog Records](/how_to/bulkload-catalog-records), as well as the rest of this data migration page." %}

In general, the data migration process has a standard sequence of events (see diagram below) as well as an iterative nature. Within that process, each incoming collection will have unique needs. Arctos works with incoming collections to document such needs via a Data Migration Plan.

![Arctos data migration process: a Prepare stage, then five sequential stages from Migrate Transactions to Publish to Data Aggregators]({{ '/images/arctos-data-migration.svg' | relative_url }}){: style="display:block; margin:0 auto; width:90%;"}

### People involved

Data migration is a collaboration between Arctos and the incoming collection(s). Even the simplest migration involves onboarding new Arctos users and setting up collection metadata and preferences. The following roles typically participate in migration:
- The **Arctos Director** finalizes the initial onboarding of a new collection and kicks off the data migration process.
- The **Data Migration Specialist** is an Arctos staff member who works closely with the incoming collection(s) to identify issues and needs and assist with decision-making during the migration project.
- A **Collections Manager, Curator**, or similar position at the new member institution is ultimately responsible for the success of their data migration. This person should be familiar with any existing legacy data, have access and authority to make data decisions on behalf of the incoming collection(s), and have time available to devote to the migration process.
- The **Arctos Programmer** is an Arctos staff member who is responsible for database development and other technical tasks, and who may be consulted during migration if the incoming data have unique needs.
- Members of the **[Arctos Working Group](https://arctosdb.org/contacts/)**, especially Officers, may participate as mentors for the incoming collection. Arctos staff can make recommendations about mentorship.

### Project management

Arctos uses Google Drive and GitHub as project management tools. It is important that staff from incoming collection(s) have accounts they can use for both Google and GitHub. Google Drive is a shared workspace for documents, both archiving documents exchanged between the incoming collection(s) and Arctos staff, and collaborating on active working documents like data formatted for bulkloaders. GitHub issues facilitate task management, and GitHub projects provide a helpful visualization of work to do. Beyond the scope of data migration, GitHub is also an important tool for asking questions and receiving help from Arctos staff and community both during data migration and as an ongoing Arctos user.

For each incoming data migration project, the following resources will be set up:
1. A folder for the member institution in the Data Migration directory of the Arctos Working Group Google Drive. This folder should be named with the institution code (e.g. “UCM”) and shared with the relevant collection contact(s).
1. A Data Migration Plan as a Google Document in the Arctos Working Group Google Drive folder created above. The plan will be completed by the Data Migration Specialist in collaboration with staff from the incoming collection(s). A [template](https://docs.google.com/document/d/1mbHQj6jBrfvh72UC_QJgV091hG3MXnRmU0REezE63EA/edit?usp=drive_link) exists to use as a starting place.
1. A GitHub project in the [Arctos Github Organization](https://github.com/orgs/ArctosDB) for the member institution, using the [Onboarding and Data Migration project template](https://github.com/orgs/ArctosDB/projects/225).

Arctos has a [private GitHub repository designated for data migration issues](https://github.com/ArctosDB/data-migration). Access to this repo is restricted to Arctos members. This means files or information exchanged here are not publicly available, so collections can be less concerned about accidentally sharing sensitive or in-progress data. GitHub issues in this repository help with task management during data migration, and issue templates are available to streamline the process. GitHub issues and projects are optionally available as project management tools to any Arctos member, and essential for incoming collection(s) using Arctos staff (e.g. Data Migration Specialist) or community mentors to support their data migration.

_See also [How to Get Started in Github for Arctos](/how_to/use-github-for-Arctos) and [How to Create and Manage Github Issues for Arctos](/how_to/use-issues-in-Arctos)._

{% include task.html content="If you are a new Arctos user, you will typically be assigned a GitHub issue to [Set up your GitHub for Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/admin-set-up-github.md)" %}

## Prepare for migration

The [Arctos Handbook](https://handbook.arctosdb.org/) and the [Learn Arctos](https://arctosdb.org/learn/) page of the website are the best places to begin learning how to use Arctos. In addition to reading and exploring independently, ask questions! Data Migration Specialists, other Arctos staff, and members of the community are all here to support new users.

_See also documentation on [Sharing Data and Resources](/documentation/sharing-data-and-resources) and [Understanding Cataloged Items](/documentation/catalog#understanding-cataloged-items)._

{% include task.html content="If you are a new Arctos user, you will typically be assigned a GitHub issue to [Learn about shared data in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/prepare-shared-data.md)" %}

### Collection-level metadata

Administrative metadata about collections is presented on the [Arctos Collections](https://arctos.database.museum/home.cfm) page in the detail view for each entry. Some metadata is required, and this is included in the initial request to create a new collection. Staff from a collection can edit both required and additional metadata via the [Manage Collection](https://arctos.database.museum/Admin/Collection.cfm) tool. At bare minimum, new collections should add a logo, ensure that all their contacts are correct, and pick authority (Code Table) values to make available to their records.

_See also [How to Manage Collection Metadata](/how_to/manage-collection-metadata) and [How to Apply Licensing and Terms](/how_to/apply-licensing-and-terms)._

{% include task.html content="You will be assigned one or more GitHub issues to [Review and complete collection metadata record(s)](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/prepare-collection-metadata.md), depending on how many collections you are setting up" %}

### User management

Arctos users who need access to edit data in your collection are called “operators.” Operators can be assigned permission to work (1) in specific collections, and (2) with specific Arctos tools.

_See also [How To Create and Manage Your Arctos Team: Users and Operators](/how_to/create-your-arctos-team-users-and-operators)._

{% include task.html content="At least one person at every Arctos institution should understand how to invite new users to become operators, grant permissions to operators, and manage operator access to their collections. Anyone who should be given this permission will be assigned a GitHub issue to [Learn about user management in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/prepare-user-management.md)." %}

### Data crosswalk

When an incoming collection has existing data in a digital format, doing a data crosswalk helps everyone involved understand how that data will map to concepts and fields in Arctos. Unless someone from the institution already has experience using Arctos, the crosswalk should be done by a Data Migration Specialist or other Arctos mentor. This is a good time to identify any conceptual issues that might complicate data migration, and for personnel from the incoming collection to begin to familiarize themselves with how Arctos works. Collections may have done a data crosswalk as part of decision-making process that resulted in joining Arctos; if so, that crosswalk will be a useful starting point to confirm mappings and go a level deeper.

## Migrate Transactions

Transactions in Arctos include accessions, loans, borrows and permits. All Arctos records require an associated accession. If your institution does not currently use accessions, at least one "legacy accession" will need to be created to facilitate entry of catalog records into Arctos. Legacy accession data can be entered individually or created in bulk, depending on how many legacy records exist.

_See also: documentation for [Transactions](/documentation/transactions) and [Accessions](/documentation/accession), [How to Create an Accession](/how_to/create-an-accession), and [How to Bulkload Accessions](/how_to/bulkload-accessions)._

Permits and loans can also be migrated into Arctos, depending on the preference of the incoming collection. Permits may be associated with accessions, and if so, they should be added first so that they can more easily be associated with the accession records being migrated. If existing loans are to be migrated, it is generally best to wait until catalog records are already in Arctos. Legacy loans can be added most efficiently using the bulkload process.

_See also: documentation for [Permits](/documentation/permits) and [Loans](/documentation/loans), [How to Create and Edit Permits](/how_to/create-a-permit), [How to Create a New Loan](/how_to/create-a-new-loan), and [How to Bulkload Loans](/how_to/bulkload-legacy-loans)._

{% include task.html content="At least one person at every Arctos institution should have permission to manage Transactions. Anyone who should be given this permission will be assigned a GitHub issue to [Learn about Transactions in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/transactions-learn-permission.md)." %}

## Reconcile and tidy data

### Agents

Agents in Arctos are people, organizations, groups, code, or any entity that performs actions.  They are recorded in every area of collections management, thus need to be the first data entered into Arctos. Migrating agents can be very time intensive, but the payoff is having detailed concepts for people and organizations that provide appropriate credit for their actions and a basis for trust. Agents may be added individually or in bulk, but either way a diligent effort should be made to ensure that duplicate agents are minimized and any new Agents include enough information to disambiguate them from anyone with a similar name. Agents are a shared resource in Arctos; familiarize yourself and follow our [best practices for Creating Meaningful Agents]({% link _best_practices/agents.markdown %}).

{% include task.html content="At least one person at every Arctos institution should have permission to manage Agents. Anyone who should be given this permission will be assigned a GitHub issue to [Learn about Agents in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/agents-learn-permission.md)." %}

#### Find and tidy Agents in incoming data

Create a list of all people and organizations included in the data to be migrated–pull from fields for collectors, preparators, determiners, donors, publication authors, etc. You may want to consider data from all incoming collections at the same time, since Agents are frequently shared within an institution. Aggregating all Agent names into a single list will allow you to disambiguate, merge, and tidy your Agent names once versus duplicating these steps for multiple fields. Make sure to retain original spellings in your list, as you will need to modify your incoming data so that any name matches exactly to an existing Agent preferred name in Arctos. Whoever is reconciling and tidying Agent data for your collections is either expected to have the tools and knowledge to accomplish this, or to work closely with someone who does.

{% include faq.html content="_What does it mean that any name must match exactly to an existing Agent preferred name in Arctos?_ <br /> Arctos bulkload tools use exact strings to connect data in an uploaded file to Agent records, e.g. if Arctos sees 'Spencer Fullerton Baird' it will connect that to the record for [Spencer Fullerton Baird](https://arctos.database.museum/agent/21296110). Using the Agent's **preferred name** for matching is best, but any unique **aka** name can also be matched to, e.g. 'Spencer F. Baird' will also match to the appropriate Agent record. Keep in mind that Agent names do not need to be unique, and if you know that there are multiple Agents with the same name in Arctos you can also provide the Agent's stable identifier in lieu of a name string. See more in the [documentation here](https://handbook.arctosdb.org/documentation/agent.html#pick)." %}

Once you have a single list of names, create a new column for the cleaned up version of each name. Review your list for misspellings, duplicates (e.g. alternate spellings of the same name, or versions of "unknown"), etc. Try to make each name as complete as possible, ideally providing full first and last names. Include any disambiguating information available, such as birth and death dates, addresses (including Wikidata, ORCiD, and Library of Congress), and relationships to other Agents.

Arctos has the following tools to help you prepare your data:
- [Agent: Deconcatenator](https://arctos.database.museum/DataServices/agent_splitter.cfm) will attempt to separate multi-agent strings (e.g. "Jim Smith and John Doe") into individual Agents; it is almost always necessary to spend time manually reviewing and correcting the results before proceeding.
- [Agent: Format Namestring](https://arctos.database.museum/DataServices/split_agent_namestring.cfm) will attempt to transform the format of individual Agent names into Arctos' preferred (and sometimes required) format.

#### Cross-reference incoming data with Agents in Arctos

When your list is relatively tidy, use the [Agent: Pre-Bulkload](https://arctos.database.museum/loaders/pre_bulkload_agents.cfm) tool to help make decisions about which names in your data (1) need to be added to Arctos as new Agents, (2) require information from your data to be added to an existing Arctos Agent, or (3) would be best represented as a [verbatim agent](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_agent). You may also want to search directly in Arctos for Agents you think may already exist.

If you have only a few Agents to create or modify, use the [Arctos user interface](https://arctos.database.museum/agent.cfm). If you are dealing with many Agents, see the section on bulkloading directly below. Examples of information you might have in your own data that you want to add to existing Arctos Agents include:
- relationships to other Agents, e.g. students of a certain professor, staff of an organization, etc.
- years of birth or death
- identifiers such as those from Wikidata, ORCiD, and Library of Congress
- address information, even when broad (e.g. the state a person lived in)
- public biographical notes
- private curatorial notes, e.g. about behavior with loans

_See also: [How to Search for Agents](/how_to/search-agents) and [How to Create Agents](/how_to/create-agents)._

#### Bulkload Agent data

Names in your data that should be added to Arctos as new Agents can be bulkloaded by someone with appropriate permissions (usually an Arctos staff member). The [Agent: Pre-Bulkload](https://arctos.database.museum/loaders/pre_bulkload_agents.cfm) tool is essentially the same as the Agent Bulkload tool, so anyone can prepare data for bulkloading by running it through the Pre-bulkloader. If you only need to update information about existing Arctos Agents, you can so do using the [Agent: Bulk-add data](https://arctos.database.museum/loaders/BulkloadAgentAttributes.cfm) tool.

_See also: [How to Prepare Agents for Bulkloading](/how_to/bulkload-agents)._

### Identifications

Identifications are the link between Catalog records and Taxonomy in Arctos. Preparing identification data for migration involves checking whether or not the taxa referenced in your identifications already exist in Arctos. Where they do not, you can either create new Taxonomy records, correct your incoming data, or use a special formatting formula to mix Taxonomy with identification metadata.

{% include task.html content="At least one person at every Arctos institution should have permission to manage Taxonomy. Anyone who should be given this permission will be assigned a GitHub issue to [Learn about Taxonomy in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/taxonomy-learn-permission.md)." %}

#### Consolidate and tidy incoming identification data 

Create a list of all identifications (i.e. scientific names for biological collections) used with your specimens. For biological collections data, the identification is sometimes spread across multiple columns/fields for different levels of taxonomy; if this is the case, consolidate data into a single column that contains the most specific level of identification regardless of Linnean rank. Make sure to retain original spellings in your list, as you will need to modify your incoming data if you make any updates or corrections to the identifications. Whoever is reconciling and tidying identification data for your collections is either expected to have the tools and knowledge to accomplish this, or to work closely with someone who does. Once you have a single list of identifications, create a new column for the cleaned up version of each. Review your list for misspellings, duplicates (e.g. alternate spellings of the same name, or versions of "unidentifiable"), etc.

#### Cross-reference incoming data with Taxonomy in Arctos

Taxonomic names in Arctos are a shared resource controlled by [Taxonomy](https://arctos.database.museum/taxonomy.cfm), which is essentially a robust code table. Wherever possible, your identifications should reference terms in Arctos Taxonomy to ensure data accuracy and make your Catalog records discoverable. Referencing Taxonomy is obvious for the majority of biological collections migrating into Arctos, where your identification might say "Didelphis marsupialis" and it should link to [Didelphis marsupialis](https://arctos.database.museum/name/Didelphis%20marsupialis). But Arctos Taxonomy also covers non-biological classification schemes such as the Nomenclature for Museum Cataloging for cultural objects, and mineral names for geology specimens.

When your list of identifications is relatively tidy, use the [Taxon Name Checker](https://arctos.database.museum/loaders/taxon_name_check.cfm) tool to confirm whether or not a Taxonomy record exists for each identification. Where the tool finds an exact match, your incoming data are ready to migrate! Where the tool does not find an exact match, each identification will need either (1) a new Taxonomy record added to Arctos, (2) to be corrected in your data (e.g. for misspellings), or (3) to be formatted using one of Arctos' [formulas for complex identifications](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula). If you are dealing with scientific names, use the [GlobalNames Verifier](https://verifier.globalnames.org) to help determine the next step for each of your unmatched identifications. GlobalNames searches against multiple taxonomic sources to try and find the scientific names you provide, and the results it provides will highlight valid names vs. misspellings vs. formatting issues. For any identifications that GlobalNames also cannot find, you may need to search other taxonomic resources and/or more manually.

{% include tip.html content="The GlobalNames Verifier is an even more powerful tool when used as a reconciliation service in OpenRefine–[learn more about how to do that here](https://github.com/gnames/gnverifier/wiki/OpenRefine-readme)!" %}

After updating any identifications in your data that were misspelled or otherwise needed to be corrected, address identifications that need to use one of Arctos' [formulas for complex identifications](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula). These commonly include hybrids and less-certain identifications. Next, figure out which of the identifications left are appropriate to add as new Taxonomy records in Arctos (see next section). Whatever identifications remain can be migrated using the "A {string}" format, which is one of the options for complex identifications. For any identification using an Arctos formula, make sure to adjust your data to follow the [formula format](https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula).

_See also: [How to Use Complex Identifications](/how_to/use-complex-identifications), [How to Use Complex Identifications as Low-quality Data Flags](/how_to/use-complex-identifications-as-low-quality-data-flags) and the documentation for [Identification](/documentation/identification)._

#### Create new Taxonomy records

Arctos Taxonomy is built based on demand, so it isn't comprehensive and most data migrations will result in the creation of new Taxonomy records. If you have only a few new taxa to add, use the [Arctos user interface](https://arctos.database.museum/taxonomy.cfm). From the user interface you can create a new taxon record and its associated taxonomic classification very easily by [cloning an existing classification from a related name](/how_to/create-taxa), e.g. adding a new species to an existing genus.

If you have many taxa that need to be added to accommodate your identifications, use the [Taxon Name: Bulkload](https://arctos.database.museum/loaders/BulkloadTaxonomy.cfm) tool to add them. Any Taxonomy records created with this tool also need classifications created, which you can do using the [Classification: Bulkload](http://arctos.database.museum/tools/BulkloadClassification.cfm) tool. Remember that Taxonomy is a shared resource in Arctos and any new records you add should be verified and accurate! If in doubt, use the "A {string}" format instead of creating a new Taxonomy record.

{% include tip.html content="Once your data are migrated, you can use the [Taxonomy: Find Gaps](https://arctos.database.museum/Reports/flat_taxonomy_gap.cfm) tool to see if you have any identifications without a related classification." %}

_See also: [How to Edit Taxon Records](/how_to/edit-taxa), [How to Create Linnaean Taxa](/how_to/create-taxa), [How to Manage Taxonomic Classifications](/how_to/manage-taxonomic-classifications), and the documentation for [Taxonomy](/documentation/taxonomy)._

### Places and events

_[PENDING CONTENT]_

_See also [How to Understand the Arctos Locality Model](/how_to/understand-the-arctos-locality-model), [How to Create a Locality](/how_to/create-a-locality), and the documentation for [Locality](/documentation/locality)._

{% include task.html content="At least one person at every Arctos institution should have permission to manage Localities. Anyone who should be given this permission will be assigned a GitHub issue to [Learn about Localities in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/locality-learn-permission.md)." %}

#### Higher Geography

_[CONTENT IS DRAFT]_

Higher geography is a combination of terms delineating geopolitical and physical units on the surface of the Earth and is controlled by a [code table](https://arctos.database.museum/place.cfm?sch=geog). To ensure that your data will load properly, it is important to make sure that higher geography is extracted from locality as HIGHER_GEOG in your migration data and that it matches values in the code table. If you need new terms added, contact your mentor or post issues to GitHub.

https://arctos.database.museum/DataServices/geog_lookup.cfm

_See also the documentation for [Higher Geography](/documentation/higher-geography)._

#### Localities

_[CONTENT IS DRAFT]_

Localities are a shared resource in Arctos. Always be cautious if a locality applies to specimens outside of your collection and make sure that any edits to a shared locality are discussed with sharing collections.

Every object record is required to be assigned a locality (place of collection). Localities include coordinates used for mapping.
Localities may be treated in several different ways.  
1. If you have many specimens from a single specific locality, you may want to manually create that locality and use the locality id in your bulkload file.
1. You can also bulkload your data with the localities you have entered, but beware, localities that are exactly alike should load as a single locality shared by many specimens, but just one little difference (a capital letter or period, for example) will create two localities when you think there is only one.  These can be merged later, if you find them.

In some cases, it may be beneficial to migrate locality data before catalog records. For example, if a collection uses standard or named localities or wishes to encumber locality information. If this seems like a better path for the data, you may wish to explore the [Locality: Bulkload](https://arctos.database.museum/tools/bulkloadLocality.cfm) tool.

Even if localities are not created in advance, it may pay to review the localities that are associated with incoming data in order to standardize them. This could mean re-ordering information so that two currently different localities are now the same:

Austin, 10th and Main
10th and Main, Austin

OR

City of Austin
Austin

In addition, much of the information in a single “field” in the data to be migrated may actually perform better if parsed into [locality attributes](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlocality_attribute_type) and/or individual locality fields:

- township, section, range and aliquot
- chronostratigraphic terms
- lithostratigraphic terms
- elevation
- depth

Finally, cleaning up specific locality is encouraged:

- standardize [city name], "city of" vs. "within"
- remove abbreviations, or standardize them: Rd, St, Ave, Blvd, Wy, Hwy, Rte, mi, km, ft, m, yds
- use decimals for distances (e.g. 1.5 mi vs 1 1/2 mi)
- add context (e.g. N/S/E/W of ___ vs N)
- Remove non-printing or extraneous characters (e.g. �)

### Parts

Part (object descriptions) names must match to the available parts vocabulary in Arctos. Each collection type has a unique set of available part names. If you need to add a part name, you will need to request it and provide a definition for the part.

Attributes must match to the available attributes in Arctos. Each collection type has a unique set of available attributes. If you need to add an attribute, you will need to request it and possibly provide a controlled vocabulary for the attribute value (for example, sex is the attribute, with possible values of male, female, etc.).

_[PENDING CONTENT]_

### Catalog record attributes

_[PENDING CONTENT]_

### Object tracking
Object tracking is a powerful tool that allows Arctos collections to track the physical location of parts. Planning for object tracking before migration is encouraged, however, object tracking can be established at any time. 

_[PENDING CONTENT]_

_See also [How to Start Object Tracking](/how_to/start-object-tracking), [How to Create and Edit Containers](/how_to/create-and-edit-containers), and the documentation for [Container](/documentation/container)._

{% include task.html content="At least one person at every Arctos institution should have permission to manage Containers. Anyone who should be given this permission will be assigned a GitHub issue to [Learn about Localities in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/locality-learn-permission.md)." %}

## Migrate catalog records

_[PENDING CONTENT]_

### Bulkload as a single dataset

_[PENDING CONTENT]_

### Bulkload different record types separately

_[PENDING CONTENT]_

https://arctos.database.museum/Bulkloader/bulkloaderBuilder.cfm

_See also [How to Bulkload Catalog Records](/how_to/bulkload-catalog-records)._

## Migrate Media

### File storage and access

_[PENDING CONTENT]_

### Bulkload media records

_[PENDING CONTENT]_

_[PENDING CONTENT]_

_See also [How to Create Media](/how_to/create-media-images), and the documentation for [Media](/documentation/media)._

{% include task.html content="At least one person at every Arctos institution should have permission to manage Media. Anyone who should be given this permission will be assigned a GitHub issue to [Learn about Media in Arctos](https://github.com/ArctosDB/data-migration/blob/master/.github/ISSUE_TEMPLATE/locality-learn-permission.md)." %}

## Migrate Citations

_[PENDING CONTENT]_

## Create Reports

_[PENDING CONTENT]_

## Publish to data aggregators

_[PENDING CONTENT]_
