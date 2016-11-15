---
title: Geology
layout: default_toc
---

# Geology

<div class="entry-content">

**Geology Attributes**
----------------------

Geology Attributes attach geology information to Locality. Each locality
may contain any number of geology attributes, each with a determiner and
method.

### Structure

UAM@ARCTOS&gt; desc geology\_attributes\
Name                                   Null?    Type\
—————————————————————– ——– ——————————————–\
GEOLOGY\_ATTRIBUTE\_ID                           NOT NULL NUMBER\
LOCALITY\_ID                               NOT NULL NUMBER\
GEOLOGY\_ATTRIBUTE                           NOT NULL VARCHAR2(255)\
GEO\_ATT\_VALUE                               NOT NULL VARCHAR2(255)\
GEO\_ATT\_DETERMINER\_ID                                NUMBER\
GEO\_ATT\_DETERMINED\_DATE                            DATE\
GEO\_ATT\_DETERMINED\_METHOD                            VARCHAR2(255)\
GEO\_ATT\_REMARK                                 VARCHAR2(4000)

 

### Searching

While individual geology attributes are asserted, the [hierachical code
table](http://arctos-test.tacc.utexas.edu/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE)
structure allows locating specimens attributed to geology which is more
specific than the search term.
