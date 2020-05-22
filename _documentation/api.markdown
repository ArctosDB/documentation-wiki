---
title: Arctos API
layout: default_toc
---

# Arctos API

**Note: this documentation refers to the new API (beginning 2020).**
For information about the old API, please see [this
page](https://arctos.database.museum/info/api.cfm).

## Usage

 * Endpoint: <http://test.arctos.database.museum/api/v1/>, currently
   only accepts HTTP GET requests, so be careful not to exceed the
   `QUERY_STRING` length (possibly only 8,000 characters).
 * API key: all API requests (other than to `.../about`) must be
   accompanied by the key-value pair `api_key=...` in the query
   string. To obtain a key, ask anyone with Arctos `global_admin`
   access. They should look under the menus: ‘Manage Arctos ->
   Developer Tools -> Manage API Keys’
 * Services:
    * `about`: Info about the API.
    * `cat/vars`: List of variables for queries, and for requesting in
      results.
    * `auth/ct`: List code tables. With parameter `tbl=...` request
      contents of a code table.
    * `cat/record`: Main specimen search.  With no extra parameters,
      information about the allowable parameters is returned. The `q`
      parameter is the query term (see below).

## Specimen query terms

 * The API uses the same code that `specimenresults` uses, so
   documentation for a search field can be found by clicking on the
   field name in the standard Arctos Specimen form.
 * The `q=...` value must be URL encoded. E.g., `q=genus%3DClaytonia`.
 * Fields can be combined to form ‘AND’ requests, using a `&`
   character (URL encoded: `%26`) . E.g.,
   `q=genus%3DClaytonia%26species%3Darctica`
 * Sets of specimens can be requested via a comma-delimited list of
   GUIDs. The commma may be either URL encoded or not. See example
   below.

## Results

Only JSON-formatted results are currently available.  The default
fields returned for a specimen search are: `guid`, `scientific_name`,
`country`, `state_prov`, `spec_locality`, `verbatim_date`, `dec_lat`,
`dec_long`, `coordinateuncertaintyinmeters`. More field control should
soon be possible via the `cols=...` key-value pair.

## Examples: 
```
Single specimen by GUID:
http://test.arctos.database.museum/api/v1/cat/record?\
  api_key=...&q=guid%3DUAM%3AHerb%3A10043

Several specimens by GUID:
http://test.arctos.database.museum/api/v1/cat/record?\
  api_key=...&q=guid%3DUAM%3AHerb%3A10043,UAM%3AHerb%3A10442

Specimens by name:
http://test.arctos.database.museum/api/v1/cat/record?\
  api_key=...&q=genus%3DClaytonia%26species%3Darctica
```

## Interacting with the API

In order to get a non-zero `Content-Length` from the API, the HTTP
header `Accept-Encoding: gzip` must be set. This is set by default on
web browsers and `wget`, but not with `curl`.  The output from `curl`
must then be uncompressed:
```
curl -s -H "Accept-Encoding: gzip" \
   http://test.arctos.database.museum/api/v1/about | gunzip > output.json
```

