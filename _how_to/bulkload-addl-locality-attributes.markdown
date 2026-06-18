---
title: How To Bulkload Additional Locality Attributes
layout: default_toc
authors: 
date_updated: 
redirect_from:
  - /how_to/How-to-bulkload-addl-locality-attributes/
---

The limit of 6 locality attributes in the Record Bulkloader can be overcome using the following method.

Use 5 locality attributes to load whatever you want, but save the sixth for data management history. In that locality attribute, make the value a message to yourself, and put the additional values to be recorded in the remark for the attribute. For Example:

locality_attribute_6_type	| locality_attribute_6_value | locality_attribute_6_units | locality_attribute_6_determiner | locality_attribute_6_date | locality_attribute_6_method | locality_attribute_6_remark 
 ---|--- |--- |--- |--- |--- |--- 
data management history | additional TRS to be loaded in attribute remark | | jegelewicz | | | R71W

After your bulkload is complete, search your records for localities with the attribute type and value that you used for the additional locality attributes to load.

Use the Related Localities tool to get all of the localities.

From those results use the Manage Locality Names button to provide temporary names for the localities.

Refresh the Find Localities page and download the locality attributes using the Download Locality Attributes button. It is important to refresh the page so that the locality names are part of the attribute download.

Use the information in the locality attributes download to build the additional locality attributes referenced in the remarks of the downloaded data management history attributes. For the example above I loaded:

locality_name|attribute_type|attribute_value|attribute_units|attribute_determiner|attribute_remark|determination_method|determined_date
---|--- |--- |--- |--- |--- |--- |---
temp_12655584|TRS range|R71W|	| |Specify verbatim Range: 71W| | 

Bulkload the additional attributes using the Bulkload locality attribute tool. 

Unload the original "temporary" attributes using the Bulk unload locality attributes tool. For the eaxmple above I unloaded this:

locality_name|attribute_type|attribute_value|attribute_determiner|determined_date|attribute_remark
---|---|---|---|---|---
temp_12642801|data management history|additional TRS to be loaded in attribute remark|Teresa J. Mayfield-Meyer| |T01S\|sec35, sec02, sec03

Unname the localities. If the only "temp" localities from your collection are those you created above, simply search your collection for locality_name that begins with temp_, then use the related localities tool to get the localities and the Manage Locality Names button to remove the temposary names. If you have other localities that need to continue using a temporary name, search for the localities using a comma-separated list in Search Places - Locality Locality Name. As a last resort, make a list and ask for help removing the temporary names in a Github issue.
