---
title: How To Apply Licensing and Terms
layout: default_toc
author: Carla Cicero
date: 2020-07-06
---
# How to Apply Licensing and Terms

### Data

- Arctos distinguishes between data license and collection terms. Both of these apply to entire collections.  

    - **Data License** is a legal arrangement between the creator/depositor of the data set and the data repository, signifying what a user is allowed to do with the data. A data license may be either a Creative Commons license or a license created by an institution or it’s legal representative. Arctos has options for assigning both an internal data license (for Arctos use) and an external data license (for data aggregators), see details below.
     - **Collection Terms** are not a legal document or contract, but rather  a well-considered code of conduct that anyone who uses data downloaded from your collection is expected to uphold. These terms should model a set of ethical behaviors and help us to build a vibrant community intended to support efforts to make biodiversity data as complete, discoverable, and accessible as possible.  
&nbsp;

- Values for both the Data License and Collection Terms are selected from values in the respective code tables "data_license" and "collection_terms." Data License values will include all options for Creative Commons licenses as well as institutional legal documents. Collection Terms values will not include Creative Commons licenses, but can include any institutional document whether it’s been vetted legally or not.  

- Whereas collections are not required to select a specific Data License, they are required to choose a Collection Terms option. Collections may choose their own terms by providing a link to a document or website, or may alternatively choose the [Arctos site-wide Data Ownership and Use Policy](https://arctosdb.org/arctosdata-policy). The Arctos policy will be set as the default value unless a different one is chosen. By signing the Arctos MOU, collections agree that they have read the Arctos policy and accept it for their collection if they do not provide an alternate.  

- An additional option in the data_license table is CC0. This is a Creative Commons waiver that puts a dataset or object in the public domain with no rights reserved. A CC0 waiver means that the licensor (e.g., Arctos collection) waives all rights to how the data or object are used.  

- Collections that publish their data from Arctos to the Global Biodiversity Information Facility (GBIF) are required by GBIF to select one of three Creative Commons license options for their dataset (see GBIF data licensing terms): CC0, CC BY, or CC BY-NC. Other external data aggregators may have the same or different requirements. This selection is made in the external_license field under Manage_Collection (see below). 

     - Data aggregators such as GBIF and VertNet provide options for both licensing and collection terms/norms in the eml file of collection metadata. The license is entered in the Rights field (<intellectualRights> in the eml file). The terms/norms are entered as access rights (<accessRights> in the eml file).  
&nbsp;

- Operators with permissions to “Manage_Collection” in Arctos (see documentation) have the authority to select licenses and terms for their collection(s). Each collection in Arctos has three options for licensing and terms:  

     - **Internal_license**: Licensing for data downloaded with every record from Arctos. This field can be left NULL, although Arctos recommends choosing a license to include with data downloads. Operators must select their license from the data_license code table. If in doubt, we recommend CC-BY-NC as default to ask users to provide attribution and discourage commercial use. However, VertNet recommends CC0.
     - **External_license**: Licensing for data exported to external data aggregators. As noted above, this must be one of three Creative Commons licenses if publishing to GBIF. This field can be left NULL, but if the field is left blank, collections data will not be published to  external aggregators and will only be publicly available through the arctos.database.museum portal. Operators must select their license from the data_license code table.If in doubt, we recommend CC-BY-NC as default to ask users to provide attribution and discourage commercial use. However, VertNet recommends CC0.
     - **Collection_terms**: Institutional terms of use. This field cannot be left NULL, and the Arctos Terms of Use will be entered as the default if collections do not enter their own value. The Collection Terms (URL) field is also downloaded with every Arctos record. Operators must select their terms from the collection_terms code table.  
&nbsp;

- Collections should select internal and external licenses that are not contradictory. For example, if a dataset has one license that is CC0 and another license that is CC-BY-NC, there are potential legal ramifications. Furthermore, data users will be confused if records in different portals have different designations.  

- Collections may have additional licensing or copyrights that may be associated with a creator of cultural objects on a record by record basis.  The internal_license field for each collection can include a statement that users contact the collection for more information on specific rules of use for each record download.  

### Media

- Media licensing is controlled by a separate code table (media_license) from data licensing.  

- Unlike data licenses, which apply to entire datasets for a collection, media licenses are applied to each media object.  

- Creative Commons designations for datasets published to external aggregators (e.g., CC0, CC BY, or CC BY-NC for GBIF) do not apply to linked or associated media objects. Media published to these aggregators can be protected (or not) by any Creative Commons designation or by a custom terms of use for the institution/collection.  

- Operators with permissions to Manage_Media have the authority to select or edit the license or custom terms for media records.

### Arctos Flow Chart for Licensing and Terms


