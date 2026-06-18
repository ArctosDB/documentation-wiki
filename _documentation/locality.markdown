---
title: Locality
layout: default_toc
authors: Dusty L. McDonald
date_updated: 2025-08-11
---

# Locality


A locality is a specific place associated with one or more [Collecting Events](collecting-event).  Ultimately, each locality should be a unique polygon in geographic space.  Often, the polygon is a circular estimate with the center as a point defined by [latitude and longitude](coordinates), and the radius as a linear estimate of error.  For electronic mapping, we convert such data to decimal degrees with estimates of error in meters.  Interfaces to the data are more flexible. 

A locality includes both descriptive and spatial data.

Every locality has one parent geography, and may have any number of childres collecting_event records.

## locality

Table Locality is the core of the locality model. Columns are below.

### locality_id

Primary key, ephemeral, for internal use only.

### locality_name

Locality Name provides a unique (within Arctos) and stable/persistent identifier, and should be used any time localities are pre-made, selected, or otherwise reused.

### geog_auth_rec_id

Foreign key ---> geography. All localities have exactly one parent geography.

### spec_locality

Specific Locality is "standardized" descriptive data. This field is essentially meant to be ``collecting_event.verbatim_lcoality`` cleaned up so that machines can predictably understand it.

When no information is known, spec_locality should be recorded as ``No specific locality recorded.`` - this exact phrase, and only this exact phrase, will prevent confusing interpretations of "we don't know." External services (such as GeoLocate) returning nonsense are almost always attributable to malformed specific locality data.

Much has been written on properly formatting specific locality; see [Best Practices: Locality](/best_practices/locality.html).

### primary_spatial_data

All localities with spatial data ("coordinates") carry both point-radius and polygon data. Primary Spatial Data specifies which is primary, and which is derived.

### dec_lat, dec_long

Decimal latitude and decimal longitude specify a point.

###  max_error_distance, max_error_units

Maximum error (numeric) and units (foreign key -->[ctlength_units](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlength_units)) describe a circle with (dec_lat, dec_long as its center) within which the actual place (nearly never precisely knowable) is expected to have occurred, or the point-radius circle which encompasses ``locality_footprint`` when polygon data are primary.

IMPORTANT: An error of 0 or NULL should be interpreted as "we have absolutely no idea" rather than "pretty good." Records with no or 0 error are not suitable for most spatial analyses.

### datum

All locality data are stored as WGS84, the only possible choice for this field.

### locality_footprint

Polygon (postgis datatype ``geography``) within which the event must have occurred, or derived to encompass point-radius data. Polygons have a minimum size for practical reasons, and should not be used to judge fitness for use except in conjunction with ``primary_spatial_data`.`



### minimum_elevation, maximum_elevation, orig_elev_units

These three fields together specify the elevation above MSL within which the event must have occurred. Minimum elevation (numeric) is the lower bound, maximum elevation (numeric) is the upper, and units (foreign key -->[ctlength_units](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlength_units)) apply to both.


### min_depth, max_depth, depth_units

Depth functions as elevation, but references distance below the surface.

### georeference_protocol

foreign key -->[ctgeoreference_protocol](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctgeoreference_protocol)

### locality_remarks

Anything which is necessary to report and fits in no other place.

## locality_attributes

[Locality Attributes](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctlocality_attribute_type) allow attaching nearly any additional data of any type or format to Localities.



## Collecting Event

Collecting events are children of localities.


## Place Terms

Place Terms is a search-optimized cache of locality-adjacent data, primarily supporting localities which are referenced from filtered_flat. (That is: used, primary, and unencumbered) These data are deeply cached and may be weeks out of date, but still generally serve as the most effective way of locating records by place. (Curatorial data are notoriously inconsistent.) As of this writing, place_terms contains the following data.

| Source | Explanation |
|---|---|
| geography | Term from geography chosen/asserted by the collection. |
| locality | Term from locality chosen/asserted by the collection. |
| locality attribute |  Term from "locality-adjacent" attribute chosen/asserted by the collection. |
| geography metadata | Term from metadata ("search terms") of geography chosen/asserted by the collection. |
| spatial intersection |  Term from spatial data which intersects the coordinates or polygon provided (as Locality) by the collection. |
| GeoLocate |  Term from spatial data which intersects the coordinates returned by the GeoLocate API. |




## Maintenance

Duplicate localities are automatically merged, and unused localities are automatically deleted. A Locality Name will prevent both of these actions and should be used in pre-created localities. Please remove Name from any localities which you no longer intend to use.

  
## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/locality.markdown).
