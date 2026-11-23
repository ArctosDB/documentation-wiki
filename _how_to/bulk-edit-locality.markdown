---
title: Bulk Edit Locality
authors: Dusty L. McDonald
date_updated: 2026-11-23
status: draft
redirect_from:
  - /how_to/bulk_edit_locality.html
  - /how_to/bulk_edit_locality/
---

[Locality Documentation]({% link _documentation/locality.markdown %})

[Locality Overview]({% link _how_to/understand-the-arctos-locality-model.markdown %})

This covers editing core Locality data;  Attributes and other related data are not considered.

``Locality_id`` is an ephemeral key and cannot be used as an identifier for asynchronous updates. Localities must be named (the names are handles) to be bulk edited; a system for temporarily naming and un-naming localities exists.

First find the batch of localities which need editing. `Locality_id` may be suitable for this, but ensure the results are as expected.

{% include tip.html content="The [Listerizer](https://arctos.database.museum/DataServices/listerizer.cfm) - available from the Tools Directory - may be useful in converting various formats to a list suitable for use in forms." %}

<img width="1588" height="786" alt="Screenshot 2026-11-23 at 07 15 19" src="https://github.com/user-attachments/assets/097d3ae0-c4df-4ff1-a7bd-ec13d17aadd3" />

Click Manage Locality Names to open a new form.

If the localities are as expected, simply click "Name these Localities" to do so.

Back in the original search window (or any other path to the now-named localities of interest), click Download.

Open the  Locality: Bulk Edit tool from the Directory. Navigate to the CSV section, read the documentation.

Open the downloaded file. Remove unnecessary columns (locality_id and attributes). Edit whatever needs editing.

* hopefully temporarily pending
   * rename min_depth	max_depth
   * add datum
 

Save, upload to Locality: Bulk Edit, set status as necessary. Let the tool run, confirm everything has worked properly.

Once done, un-name the localities to return them to the usual maintenance workflow. (Notification reminders are also periodically delivered.) Clicking the same "Manage Locality Names" button from the same original search, then clicking Un-Name These Localities is one way. Be careful not to un-name someone else's project!





