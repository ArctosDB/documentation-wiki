---
title: Addresses
layout: default_toc
author: ArctosDB
date: 2016-12-07
---

# Addresses

<a class="infoLink" name="top"></a>[top](#top)

<div class="anchors">
[Maintenance](#used) 
[address_type](#addr_type) 
[address](#address) 
[valid_addr_fg](#valid_addr_fg)
</div>

Addresses are ways to locate or contact [Agents](../agent). There are both physical addresses and electronic addresses, and various types of each of these. Electronic addresses include phone numbers, e-mail addresses, and web pages. As well as being informational, addresses are used in extensively in transactions such as [loans](../loan), [permits](../permit), and [accessions](../accession). Any one Agent may have any number of addresses of any type.

## Maintenance

<a name="used"></a>Addresses used in shipments are automatically maintained. Changes are pushed to a new address, and every attempt to change[*](#change) a shipping address will result in the creation of a new address. Used addresses are noted with a red border on the Edit Agent form. This is in order to retain them against the possibility that a missing item was actually shipped to the incorrect address, and thereby facilitate any attempt to trace the shipment. Used addresses may not be deleted. Email addresses of Operators are used extensively by various reports or notifications. Please ensure that all operators have a valid email address. <a name="change"></a>Note: "Changes" do not include the addition or removal of linebreak (chr(10) and chr(13)) characters, spaces, or commas.

## Address Type

**Address Type:** The kind of address, or how the address is used. The vocabulary is controlled by [ctaddress_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctaddress_type).

## Address

Address: The address string. Control (_e.g._, linefeed) characters are allowed in mailing addresses, which will display in a textarea on the edit agent form. Other address types use HTML5 datatype controls. Mailing or shipping addresses should be of the format:

Agent Name, Job Title Full Mailing Address Street, State, etc. as required Zip Code or Equivalent, Country Code

Do not abbreviate except according to postal guidelines. Make no assumptions - "local" mailing addresses may be used for returning foreign shipments, and should therefore include country code. Phone numbers should include country and area codes, URIs should include protocol (http://), etc.

## Remarks

**Remarks:** Any necessary explanation of the address. Examples might include:

*   Sabbatical address during academic year 04/05.
*   Not valid for Federal Express deliveries.
*   Jones uses home address in June and July.

<div class="fldDef">addr . valid_addr_fg NUMBER not null</div>

## [](#top)Valid Flag

**Valid?:** A flag indicating whether or not the address is still valid. Invalid (old, or corrected) addresses are maintained against the possibility that they might be needed to resolve a lost shipment. Please invalidate any addresses as necessary.
