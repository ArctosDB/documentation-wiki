---
title: Arctos API
layout: default_toc
---

# Arctos API

**Note: this documentation refers to the new API (beginning 2020).**
For information about the old API, please see [this
page](https://arctos.database.museum/info/api.cfm)

## Interacting with the API

In order to get a non-zero `Content-Length` from the API, the HTTP
header `Accept-Encoding: gzip` must be set. This is set by default on
web browsers and `wget`, but not with `curl`.  The output from `curl`
must then be uncompressed:
```
curl -s -H "Accept-Encoding: gzip" \
   http://test.arctos.database.museum/api/v1/about | gunzip > output.json
```


