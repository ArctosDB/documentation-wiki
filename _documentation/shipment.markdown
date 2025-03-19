---
title: Shipments
layout: default_toc
---

# Shipment

Shipments are children of [transactions](/documentation/transactions.html) which record movement of material.


### shipment_id

primary key

### transaction_id

Foreign key ---> transaction



### container_id


Foreign key ---> container


### packed_by_agent_id


Foreign key ---> agent

The agent handling the material.


### shipped_carrier_method

Foreign key ---> [ctshipped_carrier_method](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctshipped_carrier_method)

### carriers_tracking_number

Identifier (ideally URL) provided by the carrier.

### shipped_date

Date


### package_weight

text; include units as necessary

### hazmat_fg

yes/no

### insured_for_insured_value

Numeric, assume USD

### shipment_remarks

Elaborate here

### contents

Describe

### foreign_shipment_fg

yes/no


### shipped_to_addr_id

Foreign key ---> agent_attribute

### shipped_from_addr_id


Foreign key ---> agent_attribute


### shipment_type

Foreign key ---> [ctshipment_type](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctshipment_type)



## Edit this Documentation


If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly [here](https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/shipment.markdown).
