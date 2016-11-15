---
title: Places
layout: default_toc
---

# Places

<div class="entry-content">

Places are described in Arctos using, independently, both coordinate and
descriptive data. This is often conflicting. For example, the map below
is of a “New Mexico” specimen that also maps to Colorado, Utah, and
Arizona.

[![](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-12-54-01-pm.png "Screen Shot 2011-09-19 at 12.54.01 PM"){.alignnone
.size-full .wp-image-670 width="535" height="414"
sizes="(max-width: 535px) 100vw, 535px"
srcset="/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-12-54-01-pm.png 535w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-300x232.png 300w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-250x193.png 250w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-233x180.png 233w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-12-54-01-pm-388x300.png 388w"}](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-12-54-01-pm.png)

Additionally, descriptive data in Arctos are often incomplete and
seemingly contradictory. For example, this spatial query:

[![](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm.png "Screen Shot 2011-09-19 at 1.31.08 PM"){.alignnone
.size-full .wp-image-675 width="640" height="378"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm.png 776w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-300x177.png 300w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-768x454.png 768w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-250x148.png 250w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-550x325.png 550w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-304x180.png 304w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm-507x300.png 507w"}](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-1-31-08-pm.png)

Returns these data:

  CONTINENT\_OCEAN      COUNTRY         STATE\_PROV   SEA
  --------------------- --------------- ------------- --------------
  Arctic Ocean          -NULL-          -NULL-        Chukchi Sea
  North America         United States   Alaska        Chukchi Sea
  North America         United States   Alaska        -NULL-
  North America         United States   Alaska        Beaufort Sea
  Arctic Ocean          -NULL-          -NULL-        -NULL-
  Arctic Ocean          -NULL-          -NULL-        Beaufort Sea
  North America         United States   Alaska        Bering Sea
  North Pacific Ocean   -NULL-          -NULL-        Bering Sea

This virtually guarantees that descriptive queries will miss specimens.

Reversing the process, and querying on the more embarrassing values
above, produces (as expected?) unexpected results.

[![](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-2-54-45-pm.png "Screen Shot 2011-09-19 at 2.54.45 PM"){.size-full
.wp-image-678 width="540" height="311"
sizes="(max-width: 540px) 100vw, 540px"
srcset="/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-2-54-45-pm.png 540w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-300x173.png 300w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-250x144.png 250w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-313x180.png 313w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-2-54-45-pm-521x300.png 521w"}](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-2-54-45-pm.png)
Arctic Ocean, Chuchki Sea
[![](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-00-56-pm.png "Screen Shot 2011-09-19 at 3.00.56 PM"){.size-full
.wp-image-680 width="358" height="429"
sizes="(max-width: 358px) 100vw, 358px"
srcset="/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-00-56-pm.png 358w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-00-56-pm-250x300.png 250w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-00-56-pm-150x180.png 150w"}](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-00-56-pm.png)
Chukchi Sea, North America, United States, Alaska
[![](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-03-21-pm.png "Screen Shot 2011-09-19 at 3.03.21 PM"){.size-full
.wp-image-681 width="546" height="334"
sizes="(max-width: 546px) 100vw, 546px"
srcset="/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-03-21-pm.png 546w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-300x184.png 300w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-250x153.png 250w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-294x180.png 294w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-03-21-pm-490x300.png 490w"}](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-03-21-pm.png)
Beaufort Sea, North America, United States, Alaska
[![](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm.png "Screen Shot 2011-09-19 at 3.08.40 PM"){.size-full
.wp-image-682 width="640" height="575"
sizes="(max-width: 640px) 100vw, 640px"
srcset="/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm.png 662w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-300x270.png 300w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-250x225.png 250w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-550x494.png 550w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-200x180.png 200w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-334x300.png 334w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm-556x500.png 556w"}](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-08-40-pm.png)
North America, Alaska, United States, Bering Sea
[![](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-11-25-pm.png "Screen Shot 2011-09-19 at 3.11.25 PM"){.size-full
.wp-image-683 width="497" height="435"
sizes="(max-width: 497px) 100vw, 497px"
srcset="/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-11-25-pm.png 497w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-300x263.png 300w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-250x219.png 250w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-206x180.png 206w, /images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-11-25-pm-343x300.png 343w"}](/images/classic-uploads/2011/09/screen-shot-2011-09-19-at-3-11-25-pm.png)
North Pacific Ocean, Bering Sea
Take-home message? Use coordinate query if at all possible, and expect
the unexpected if you must use textual query.

 
