---
title: Arctos API
author: DLM
date: 2021-01-01
layout: default_toc
---

# Arctos API

**Note: this documentation refers to the 2021 API (since Jan 2021).**
A REST-style API existed in 2020 ([old documentation][1]).  The
original JSON/CSV API (of the form
`https://arctos.database.museum/SpecimenResultsJSON.cfm?accn_number=...`)
is no longer functional.

## Request format

 * **Endpoint**: <https://arctos.database.museum/component/api/v1/>.
   Accepts both HTTP GET and POST. Use POST for long query strings
 * **API key**: most API requests must be accompanied by the key-value
   pair `api_key=...` in the query string. To obtain a key:
     * Ask anyone with Arctos `global_admin` access. They should look
       under the menus: ‘Manage Arctos -> Developer Tools -> Manage
       API Keys’
     * Or file a request as an Issue at
       <https://github.com/ArctosDB/arctos/issues>
 * **Services** (append these to the endpoint URL above):
    * `about.cfc?method=api_map`: Basic info about the API (no API key required)
    * `catalog.cfc?method=about`: **API usage documentation** and list of 
       variables for catalog queries, and fields for requesting in results (no
       API key required)
    * `authority.cfc?method=code_tables`: List code tables. With parameter 
      `tbl=...` request contents of a code table (_requires API key_)
    * `catalog.cfc?method=getCatalogData`: **Main specimen search**
      (_requires API key_)

## Specimen query terms

 * The API uses the same underlying code that `SpecimenResults.cfm` uses, so
   documentation for a search field can be found by clicking on the
   field name in the standard Arctos Specimen form.
 * Search terms are added as key-value pairs using the terms listed in
   `catalog.cfc?method=about`. When two or more search terms are used
   a logical ‘AND’ is assumed.
 * Sets of specimens can be requested via a comma-delimited list of
   GUIDs.

## Results

 * Only JSON results are currently available.  
 * The default fields returned for a specimen search are: `guid`,
   `scientific_name`, `country`, `state_prov`, `spec_locality`,
   `verbatim_date`, `dec_lat`, `dec_long`,
   `coordinateuncertaintyinmeters`. To add additional fields use the
   `cols=...` key-value pair, with field names separated by commas.
 * By default, a maximum of 10 records are returned. Sending
   `pgsz=...` can be used to ask for more records (tested up to
   20,000). If a page size limit is reached, the results will need to
   be collected via multiple calls to the API, paging with the
   `pg=...` variable until `"TotalRecordCount":"..."` (in the JSON) is
   reached. Note that in the original query, a `"tbl":"..."` value is
   returned - this is an identifier for the temporary results
   set. During pagination, calling `tbl=...&pgsz=...&pg=...` will be
   faster than requesting paginated results via original query
   parameters.

## Examples: 

```
Single specimen by GUID, with additional columns:

  https://arctos.database.museum/component/api/v1/catalog.cfc?method=getCatalogData&api_key=...&guid=UAM:Herb:34746&cols=partdetail,phylum

Several specimens by GUID:

  https://arctos.database.museum/component/api/v1/catalog.cfc?method=getCatalogData&api_key=...&guid=UAM:Herb:34746,UAM:Herb:34745

Specimens by name:

  https://arctos.database.museum/component/api/v1/catalog.cfc?method=getCatalogData&api_key=...&genus=Claytonia&species=arctica
```

[1]: https://web.archive.org/web/20200928123759/https://handbook.arctosdb.org/documentation/api.html

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/api.markdown" target="_blank">here</a>.
