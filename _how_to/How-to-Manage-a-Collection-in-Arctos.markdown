---
title: How To Manage a Collection
layout: default_toc
---

# How to Manage a Collection

The Manage Collection form in Arctos allows new or existing collections to create/edit metadata about their collection (except for some field values that are set when the collection is created). Users will need to have Manage_Collection permission for that collection in order to do this. Access this form through the following steps in the Arctos dropdown menu: **Manage Data -> Metadata -> Manage Collection -> Find Collection.**

* **Description:** Enter a description for the collection. This information should be sufficiently detailed that it provides a user with information about the size and scope of the collection, as well as any special holdings. The Arctos description should match the collection description in the [GRBIO](http://grbio.org) registry of the collection.

* **Citation:** This should indicate how the collection should be cited. It may include the specific collection, or just the institution. For example, "Museum of Vertebrate Zoology (MVZ), University of California, Berkeley" or "Bird Collection of the Museum of Vertebrate Zoology (MVZ), University of California, Berkeley."

* **Web Link:** A direct link to the web site for the collection (or institution if the collection itself doesn't have a separate web site).

* **Link Text:** The text that is linked to the list of institutional collections through the [Arctos collections portal](http://arctos.database.museum/home.cfm) (e.g., MVZ Collections).

* **Loan Policy URL:** A direct link to the loan policy for that collection or institution.

* **Catnum Format:** A dropdown that specifies the format of catalog numbers for the collection. NOTE: Catalog numbers in integer format are preferred for ease of data discovery. There are three options:

 * integer
 * prefix-integer-suffix
 * string

* **License:** A dropdown that contains options for licensing _data_ (not media) from that collection. Choices included Creative Commons licenses or specific institutional "licenses" that describe authorized uses of the data. Any data published to GBIF must have a [Creative Commons](http://creativecommons.org) license, which is machine-readable and downloaded with every record. The same license chosen for Arctos data is used when publishing records to data aggregators. For guidance on licensing data, read the [VertNet Guide to Copyright and Licenses for Data Publication](http://vertnet.org/resources/datalicensingguide.html).

* **Taxonomy Source:** A dropdown list for the source of the taxonomic classification used for the collection.

* **Contacts:** Anyone who is a contact for the collection must first be entered into Arctos as an agent, with a valid email address (see "[How to Create Agents](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-Create-Agents)"). Add the name of each person who is a contact for the collection: type their last name and hit the tab key to bring up the list of agents with that name, then select the correct agent. 
For each contact, specify their [Contact Agent Role](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_CONTACT_ROLE) through the dropdown:


* **Header Options:** Collections may customize the header that appears at the top of a collection record or when searching a collection portal.

  * HEADER_COLOR: Background color; click the label for a color picker
  * HEADER_IMAGE: 60x60 px image which will replace the Arctos Bear
  * HEADER_CREDIT: Image attribution, displayed near the header image
  * COLLECTION_URL: URL at which more collection information may be found
  * COLLECTION_LINK_TEXT: text to display with COLLECTION_URL
  * INSTITUTION_URL: URL at which more institution information may be found
  * INSTITUTION_LINK_TEXT: text to display with INSTITUTION_URL
  * META_DESCRIPTION: HTML header; for bots, probably no longer useful.
  * META_KEYWORDS: HTML header; for bots, probably no longer useful.
  * STYLESHEET: CSS stylesheet. Load css to /includes/css or coordinate with a DBA.
  
