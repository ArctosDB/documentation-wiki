---
title: JSON
layout: default_toc
---

# JSON

[JSON](https://en.wikipedia.org/wiki/JSON) is "an open-standard file format that uses human-readable text to transmit data objects." In Arctos, JSON is a way for us to share complex data with both humans (the data is easily understandable by humans) and machines (the data is easily read by a very wide variety of programs) in otherwise simple formats, such as the ubiquitous table.

### Shortening

JSON can be a very verbose format; we have abbreviated terms in an attempt to fit more data in less space

### Limitations

We generally limit JSON to 4000 bytes. Data which would exceed that are delivered as

```json
[{"STATUS":"ERROR CREATING JSON"}]
```

## Locality

Any specimen may have any number of specimen-events, and each may have any number of collecting event attributes and/or geology determinations. These data are available in specimenresults as "JSON Locality."