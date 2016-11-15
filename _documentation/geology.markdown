---
title: Geology
layout: default_toc
---

# Geology

<div class="entry-content">

## Geology Attributes

Geology Attributes attach geology information to Locality. Each locality
may contain any number of geology attributes, each with a determiner and
method.

### Structure

UAM@ARCTOS&gt; desc geology_attributes\
Name                                   Null?    Type\
—————————————————————– ——– ——————————————–\
GEOLOGY_ATTRIBUTE_ID                           NOT NULL NUMBER\
LOCALITY_ID                               NOT NULL NUMBER\
GEOLOGY_ATTRIBUTE                           NOT NULL VARCHAR2(255)\
GEO_ATT_VALUE                               NOT NULL VARCHAR2(255)\
GEO_ATT_DETERMINER_ID                                NUMBER\
GEO_ATT_DETERMINED_DATE                            DATE\
GEO_ATT_DETERMINED_METHOD                            VARCHAR2(255)\
GEO_ATT_REMARK                                 VARCHAR2(4000)

 

### Searching

While individual geology attributes are asserted, the [hierachical code
table](http://arctos-test.tacc.utexas.edu/info/ctDocumentation.cfm?table=CTGEOLOGY_ATTRIBUTE)
structure allows locating specimens attributed to geology which is more
specific than the search term.
