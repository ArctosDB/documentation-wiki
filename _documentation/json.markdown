---
title: JSON
layout: default_toc
---




<!--
	::::::::::::::::IMPORTANT::::::::::::::::
	
	Do not modify this file without modifying the functions which compile the JSON
	
	Do not remove this comment.
	
	TABS eat the tick-tick-tick-json thing, and the 'format' should be valid JSON - use a validator to format for this doc.

	::::::::::::::::IMPORTANT::::::::::::::::
	
	This could be more correctly done as JSON schemas, but those are harder for many users to read. For now at least,
	this is just a verbose example intended to get the idea across.

-->


``
	NOTE: "Field names" as given in this document are intended to be descriptive and may not map to actual concepts in Arctos.
``


# JSON

[JSON](https://en.wikipedia.org/wiki/JSON) is "an open-standard file format that uses human-readable text to transmit data objects." In Arctos, JSON is a way for us to share complex data with both humans (the data is easily read by humans) and machines (the data is easily read by a very wide variety of programs) in otherwise simple formats, such as the ubiquitous table.

### Shortening

JSON can be a very verbose format; we have abbreviated terms in an attempt to fit more data in less space. We have occasionally merged various concepts - value-space-units as one JSON variable, for example.

### Limitations

We generally limit JSON to 4000 bytes. Data which would exceed that are delivered as

```json
[{"STATUS":"ERROR CREATING JSON"}]
```

Please [Contact Us](https://github.com/ArctosDB/arctos/issues/new?assignees=&labels=contact&template=contact-arctos.md&title=%5BCONTACT%5D) with any issues, needs, or concerns.

## Locality

Any specimen may have any number of specimen-events, and each may have any number of collecting event attributes and/or geology determinations. These data are available in specimenresults as "JSON Locality" in the following format.

```json
[
   {
      "ST":"SPECIMEN_EVENT.SPECIMEN_EVENT_TYPE",
      "VS":"SPECIMEN_EVENT.VERIFICATIONSTATUS",
      "VB":"SPECIMEN_EVENT.VERIFIED_BY_AGENT",
      "VD":"SPECIMEN_EVENT.VERIFIED_ON_DATE",
      "AB":"SPECIMEN_EVENT.ASSIGNED_BY_AGENT",
      "AD":"SPECIMEN_EVENT.ASSIGNED_ON_DATE",
      "CM":"SPECIMEN_EVENT.COLLECTING_METHOD",
      "CS":"SPECIMEN_EVENT.COLLECTING_SOURCE",
      "BD":"COLLECTING_EVENT.BEGAN_DATE",
      "ED":"COLLECTING_EVENT.ENDED_DATE",
      "RD":"COLLECTING_EVENT.VERBATIM_DATE",
      "RL":"COLLECTING_EVENT.VERBATIM_LOCALITY",
      "HB":"SPECIMEN_EVENT.HABITAT",
      "SL":"LOCALITY.SPEC_LOCALITY",
      "CD":"LOCALITY.COORDINATES",
      "CE":"LOCALITY.COORDINATE_ERROR",
      "EL":"LOCALITY.ELEVATION",
      "DP":"LOCALITY.DEPTH",
      "DM":"LOCALITY.DATUM",
      "HG":"GEOGRAPHY.HIGHER_GEOGRAPHY",
      "GY":[
         {
            "TY":"GEOLOGY.GEOLOGY_ATTRIBUTE",
            "VU":"GEOLOGY.VALUE",
            "RK":"GEOLOGY.REMARK",
            "MD":"GEOLOGY.DETERMINED_METHOD",
            "DA":"GEOLOGY.DETERMINED_DATE",
            "DT":"GEOLOGY.DETERMINED_BY_AGENT"
         }
      ],
      "EA":[
         {
            "TY":"COLLECTING_EVENT_ATTRIBUTES.EVENT_ATTRIBUTE_TYPE",
            "VU":"COLLECTING_EVENT_ATTRIBUTES.EVENT_ATTRIBUTE_VALUE",
            "RK":"COLLECTING_EVENT_ATTRIBUTES.EVENT_ATTRIBUTE_REMARK",
            "MD":"COLLECTING_EVENT_ATTRIBUTES.DETERMINED_METHOD",
            "DA":"COLLECTING_EVENT_ATTRIBUTES.DETERMINED_DATE",
            "DT":"COLLECTING_EVENT_ATTRIBUTES.DETERMINED_BY_AGENT"
         }
      ]
   }
]
```

## Parts

"PartDetail" contains all parts, parentage, and attributes as JSON. The format is as follows.


```json
[
   {
      "ID":"SPECIMEN_PART.PART_ID",
      "SF":"SPECIMEN_PART.SAMPLED_FROM_PART_ID",
      "PN":"SPECIMEN_PART.PART_NAME",
      "LC":"SPECIMEN_PART.LOT_COUNT",
      "DP":"COLL_OBJECT.DISPOSITION",
      "CD":"COLL_OBJECT.CONDITION",
      "BC":"CONTAINER.CONTAINING_BARCODE",
      "CP":"CONTAINER.FULL_PATH",
      "RK":"COLL_OBJECT.REMARKS",
      "PA":[
         {
            "AT":"PART_ATTRIBUTE.ATTRIBUTE_TYPE",
            "AV":"PART_ATTRIBUTE.ATTRIBUTE_VALUE",
            "AU":"PART_ATTRIBUTE.ATTRIBUTE_UNITS",
            "DD":"PART_ATTRIBUTE.DETERMINED_DATE",
            "DR":"PART_ATTRIBUTE.DETERMINED_BY_AGENT",
            "AR":"PART_ATTRIBUTE.ATTRIBUTE_REMARK"
         }
      ]
   }
]
```   

## Media

"Media" in SpecimenResults download is media metadata as JSON. The format is as follows.

* MEDIA.MEDIA_ID can be used to form Media Detail URLs of the format http://arctos.database.museum/{MEDIA.MEDIA_ID}
* MEDIA.MEDIA_ID can be used to form URLs which GET the Media object as  http://arctos.database.museum/{MEDIA.MEDIA_ID}?open

```json
[
   {
      "MI":"MEDIA.MEDIA_ID",
      "MT":"MEDIA.MIME_TYPE",
      "PU":"MEDIA.PREVIEW_URL",
      "MU":"MEDIA.MEDIA_URI",
      "MC":"MEDIA.MEDIA_CATEGORY"
   }
]
```   
	 
	 
## Attributes

```json
[
   {
      "ID":"attributes.attribute_id",
      "CID":"cataloged_item.collection_object_id",
      "AT":"attributes.attribute_type",
      "AV":"attributes.attribute_value",
      "AU":"attributes.attribute_units",
      "AA":"attributes.determined_by_agent",
      "AR":"attributes.attribute_remark",
      "AM":"attributes.determination_method",
      "AD":"attributes.determined_date"
   }
]
		
```   

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/json.markdown" target="_blank">here</a>.
