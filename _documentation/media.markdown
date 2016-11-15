---
title: Media
layout: default_toc
---

# Media



### General Description

Media are any digital objects (such as photographs, sound recordings,
and three-dimensional renderings of objects) that can be related to data
items in Arctos. Thus, they are essentially anything that can be
identified with a Uniform Resource Identifier (URI) and (optionally)
related to a primary key in a major table. ([some
examples](http://arctosdb.wordpress.com/2011/11/28/what-are-media/))
This arrangement allows us to relate photographs of anatomical features
to specimens, sound recordings to collecting events, text files to
agents, and any number of possibilities. A special class of Media
paginates multi-page documents (*e.g.*, JPG field notebook scans),
allowing browsing and PDF creation. TAGs identify user-selected areas of
image media, and further relate these areas to specimens, places, and
people. Media may be created autonomously, as part of a specimen record,
or bulkloaded. Additionally, [specialized
tools](https://sites.google.com/site/arctosdb/ala/process) exist for
rapid imaging of herbaria and paleontological collections, including
ancillary data in the form of accession and locality cards. Data about
media are stored in three tables:

-   Media
-   Media Relations
-   Media Labels

## Fields in table Media

```

Media . MEDIA_URI VARCHAR2(255) not null

```

### Media URI:

The [Uniform Resource
Identifier](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
(URI) that finds the media object on the Internet. (A URL is a common
type of URI.) See also [stability](#stability). Media URIs are of very
roughly three classes:

-   A binary object which your a web browser natively “knows” how to
    process, such as a JPG or MP3 file.
-   A web page, such as YouTube or the Arctos Multi-Page
    Document handler.
-   A binary file which your web browser does not know how to process,
    and therefore should download. DNG and ZIP files are generally in
    this category (although some users employ browser extensions which
    can process these types of files).

Try to avoid characters other than A-Z/a-z/0-9 in URLs. This is not
always possible, but scripting
“protocol://some_domain/my/directory/structure/file_name_is_out_here.jpg”
will always work, while admins may be less able to help with, for
example, “protocol://some_domain/my/directory/structure/file name is
out here.jpg”

```

Media . MIME_TYPE VARCHAR2(255) not null
[ctmime_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmime_type)

```

### Mime Type:

The Internet media type. Consists of a type and subtype, such as
“text/html.”
[Code-table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmime_type)
controlled, described in
[Wikipedia](http://en.wikipedia.org/wiki/Mime_type).


```

Media . MEDIA_TYPE VARCHAR2(255) not null
[ctmedia_type](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmedia_type)

```

### Media Type:

A description of the kind of media. These values are controlled by a
[code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmedia_type).
Media Type exists to categorize Media whose MIME type is not
sufficiently descriptive. A HTML image viewer application would have
MIME_TYPE of ‘text/html’ and MEDIA_TYPE of ‘image,’ for example.

```

Media . PREVIEW_URI VARCHAR2(255) null

```

### Preview URI:

The Uniform Resource Identifier (URI) for a preview of the Media item. A
preview might be something like a thumb-nail sized version of a larger
image.


```

Media_Relations . MEDIA_RELATIONSHIP VARCHAR2(40) not null
[ctmedia_relationship](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmedia_relationship)

```

### Media Relationship:

The kind of relationship between the media and the data item.
Relationships are functional and must be comprised of a string
containing at least one space and ending with a table name. ColdFusion
and Oracle both rely on this. Values are controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmedia_relationship).

```

Media_Relations . CREATED_BY_AGENT_ID NUMBER not null

```

### Created By:

The agent who created the relationship between a media object and a data
item. This is a foreign key to the Agent table.


```

Media_Relations . RELATED_PRIMARY_KEY NUMBER not null

```

### Related Data Item:

The data item to which the Media object is related. This is a foreign
key.


```

Media_Labels . MEDIA_LABEL VARCHAR2(255) not null
[ctmedia_label](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmedia_label)

```

### Media Label:

The subject matter of a label describing a Media object. Values are
controlled by a [code
table](http://arctos.database.museum/info/ctDocumentation.cfm?table=ctmedia_label).


### A checksum

is a cryptographic hash, or “digital fingerprint,” of a file. At a later
time, another checksum can be generated and compared to the original.
Matching checksum values provide great certainty that the file has not
changed. Arctos provides a means to generate an MD5 checksum and save
this value as a Media Label. Checksum values generated by outside
sources can be manually entered as Media Labels.



```

Media_Labels . LABEL_VALUE VARCHAR2(255) not null

```

### Label Value:

The content of a label generally uncontrolled text (excepting some
dates, which are ISO8601-format).

```

Media_Labels . ASSIGNED_BY_AGENT_ID NUMBER not null

```



```

Media_Labels . ASSIGNED_BY_AGENT_ID NUMBER not null

```

### Assigned By:

The agent who assigned the label. This is a foreign key to the Agent
table.


### Media Creation Guidelines

Create only necessary relationships; allow the relational nature of
Arctos to work for you. An image showing a specimen should have a
relationship of “shows cataloged_item” but not “shows
collecting_event” or “shows locality” or “documents accn,” all of which
can be derived from the relationship to the cataloged item.

Choose reasonable media formats; use derivatives if necessary.

Primary relationships should be made to reasonably-sized (\~500K
maximum) JPG derivatives rather than DNG ([Digital
Negative](https://www.adobe.com/products/photoshop/extend.displayTab2.html),
the only recommended format for primary images) originals, for
[example](http://arctos.database.museum/media/10209042). JPG is not an
appropriate choice for a [text
document](http://arctos.database.museum/media/10187294), especially if
the resultant file is 2MB!

Use reasonable previews; filesize should be under (preferably much
under!) 10K (previews larger than 48K will NOT be displayed), and scale
to \~120px. Cropped or otherwise misleading previews should be avoided.
Leave preview_uri NULL if producing a good thumbnail isn’t possible.


### Binary Object Creation Guidelines

As a general rule, capture as much information as possible and store it
in a lossless, archival format. Disk space is cheap and imaging projects
are expensive, time-consuming, and potentially damaging to the subject
material. Make lower-resolution derivatives as necessary. Adobe’s open
[Digital Negative](http://en.wikipedia.org/wiki/Digital_Negative) (DNG)
format is preferred for photography. DNGs store all the information from
the camera in a compact package. Never store archival material in any
non-DNG RAW format, which tend to be proprietary and dynamic. TIFF (a
proprietary format also owned by Adobe) is not an equivalent choice, but
is often the “most archival” option offered by a camera or scanner. JPG
is a poor choice for archival media, but is often the only option.
Derivatives, which are generally JPG images scaled to be viewed in a
“normal” browser, should be sized to facilitate access on
less-than-optimal networks while still preserving most of the
information available from the original. We’ve had few complaints about
500K images of herbarium sheets. Users always have access to the
originals, so it is not necessary for derivatives to facilitate all
usage. Derivatives can generally be batch-created using ImageMagick on
TACC’s servers. We advocate sizing derivatives by filesize rather than
dimensions, as all modern browsers offer zoom capability. When creating
Media, it is recommended to create all relationships and labels from the
derivative. This will eliminate the DNGs from most search results
(they’re very large, not viewable in most browsers, and users blindly
click on thumbnails) while still providing easy access to them from the
derivative.

![DNG
view](images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-08-33-am.png "DNG view"){.size-full
.wp-image-910 width="595" height="470"
sizes="(max-width: 595px) 100vw, 595px"
srcset="images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-08-33-am.png 595w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-08-33-am-300x237.png 300w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-08-33-am-250x197.png 250w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-08-33-am-550x434.png 550w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-08-33-am-228x180.png 228w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-08-33-am-380x300.png 380w"}
DNG view
![](images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am.png "JPG view - what most users find"){.size-full
.wp-image-911 width="640" height="360"
sizes="(max-width: 640px) 100vw, 640px"
srcset="images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am.png 853w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am-300x169.png 300w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am-768x433.png 768w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am-250x141.png 250w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am-550x310.png 550w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am-800x451.png 800w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am-319x180.png 319w, images/classic-uploads/2012/01/screen-shot-2012-01-26-at-9-11-22-am-532x300.png 532w"}


JPG view – what most users find

### Multi-page documents

Multi-page documents are paginated JPGs, such as [scanned field
notes](http://arctos.database.museum/document/fieldnotes-grinnell-j-1911-part-1-section-1-san-joaquin-valley-calif).
Sequential JPGs are used rather than formats such as PDF to support
further manipulation, such as adding
[TAGs](http://arctos.database.museum/document/fieldnotes-grinnell-j-1911-part-1-section-1-san-joaquin-valley-calif/72).

To create these, do the following.

Scan your material. If you can get the page number (starts with one,
increments by one) in the file name, it will make everything else
easier. Most scanners support sequential naming, such as

-   My_Fieldnotes_1.jpg
-   My_Fieldnotes_2.jpg.

Load the scans to a stable, archival, visible server. (As always, we

recommend TACC.) After this step, you should have a list of URIs

-   <http://some.server.somewhere/some/path/information/folders/whatever/My_Fieldnotes_1.jpg>
-   <http://some.server.somewhere/some/path/information/folders/whatever/My_Fieldnotes_2.jpg>

Download the Media Bulkloader template and fill in the blanks, or use
the “pull from server” option to build a Media bulkloader template using
information embedded in URIs. (This requires some knowledge of Regular
Expressions.)

Required fields are:

-   MEDIA_URI – the location to which you uploaded your scans
-   MIME_TYPE – this must be image/jpeg
-   MEDIA_TYPE – “multi-page document”
-   media_label_1 & media_label_value_1 (some label-plus-value – it
    doesn’t have to be 1) are “page” with sequential integers starting
    with 1 as value.
-   media_label_2 & media_label_value_2 – “title” – this must be
    EXACTLY the same for all pages in the document.

Use the additional fields as you normally would to add any additional
information, such as author(s).
[![](images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am.png "Screen Shot 2012-01-25 at 10.43.48 AM"){.alignnone
.size-full .wp-image-905 width="640" height="81"
sizes="(max-width: 640px) 100vw, 640px"
srcset="images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am.png 809w, images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am-300x38.png 300w, images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am-768x98.png 768w, images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am-250x32.png 250w, images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am-550x70.png 550w, images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am-800x102.png 800w"}](images/classic-uploads/2012/01/screen-shot-2012-01-25-at-10-43-48-am.png)
Note that with good organization and clever use of your favorite
spreadsheet, most of the work should be simple copy/paste/increment.

 **Bulkloading Media** This entry describes one process to
create Media on Arctos. It is not the only method possible, and may not
be most suitable for any given need. [MVZ](http://mvz.berkeley.edu/) has
developed specialized procedures to fit their workflow, for example.

1.  Get your Media – the binary objects – to a suitable
    web-accessible location. We recommend
    [TACC](http://www.tacc.utexas.edu/), and they’ve provided various
    tools[\*](#tacctools) to facilitate loading data. You may wish to
    create a preview of your Media at this time – you’ll need to script
    that, do it manually, or coordinate with whomever is hosting your
    binary data.
2.  Locate related objects in Arctos. The Media Bulkloader cannot handle
    all realationships, and how relationships are formed is not
    always intuitive. See the Media Bulkloader for details.
3.  Populate the Media Bulkloader using the URI you’ve created in
    loading media, upload the CSV file, and follow the directions until
    you get a “spiffy” message.

## Discovery

Media Relationships link Media to specimens, agents, places, other
Media, and more (and in turn link those resources together). Data
objects thereby exchange information through database-key linkages as
necessary; no information is replicated or otherwise made redundant (the
process of normalization). An important factor in discoverability is
having well-Curated data, and our model eliminates any possibility of
data becoming “stale” (such as updates to specimens not being made also
to images of specimens) while simultaneously providing an efficient and
powerful Curatorial toolset which requires no redundant tasks, nor any
knowledge of existing or future relationships in order to maintain data.

A major benefit of normalization is an inherent flexibility in how the
data may be linked, found, or viewed. Arctos may be equally viewed as a
Media database (which happens to contain specimens) and a Specimen
database (which also contains Media); there is no pre-defined starting
point or pathway through the data, and no fixed bounds on the data for
any given object. (That is, “specimen data” may be viewed to include
data concerning publications in which the specimen is cited, and “media
data” may be viewed as including specimen data, including linked data
such as publications.) Therefore, Media may be linked to and draw
information from any information in Arctos, directly or indirectly, and
those objects may in turn be linked to each other. (For example, a
Specimen may have Media and be cited in a Publication, providing a
pathway from a citation to the Media; Media are therby discoverable
across multiple “nodes.”) Arctos users are presented with Media from
various pathways; by searching directly for Media, or by encountering
Specimens, Projects, Publications, Taxonomy, Agents, Places or Events
with associated Media, or by encountering objects which use those
things. (For example, Media showing Localities is available from
Specimens which use those Localities.)

The same mechanism allows relationships among Media, allowing for
example specimens linked to web-friendly JPGs which are in turn linked
to original RAW (DNG) files, providing simultaneously for maximum
discoverability and usability.

Media are displayed with appropriate metadata, including
machine-readable formats, to encourage and facilitate discovery by both
people and machines (such as search engine crawlers). In addition to
being displayed in various places and forms in Arctos, Media (and
related data) are indexed by search engines and are directly shared with
various resources via IPT and other mechanisms.

Arctos provides a stable URI for Media (and other objects), and the
capacity to create long-term stable targets via DOI (which are
themselves discoverability aids). Therebym, in addition to linking out
to relevant data, Arctos encourages links in. Many users discover Arctos
by following links from NCBI, Google, content aggregators (such as
iDigBio), scientific publications, and researcher’s home pages.


### TACC Tools

TACC tools include direct SCP access, various wrappers and tools using
SCP access (such as the [ALA Imaging
project](https://sites.google.com/site/arctosdb/ala/process), which
pushes DNG files from a local computer to TACC, creates thumbnails and
high-resolution JPGs, and automatically associates images with barcoded
specimens), a WEBDAV dropbox ([contact
us](http://arctos.database.museum/contact.cfm) for access), and the
ability to automatically push files uploaded to Arctos to TACC.


### TAGs

TAGs relate a specific area of a JPG image to data objects in Arctos.

Comments in TAGs may contain a very specific (and currently very
limited) type of markup language in order to form links to specimens in
Arctos. This can be useful for negative references: “this area on the
field notes probably does NOT refer to that specimen, possible because
someone’s mixed some numbers up somewhere along the way.” To create a
link from a comment TAG to a specimen, simply type doubled square
brackets around the GUID-string. Example:

<div>

\[\[MVZ:Mamm:184092\]\]

</div>

<div>

forms a HTML-link to
<http://arctos.database.museum/guid/MVZ:Mamm:184092>

</div>


### URLs and Stability

Arctos provides several URLs to media objects. It it important to know
which to use in any particular situation.

-   **Detail URL: (<http://arctos.database.museum/media/10002230>)**

    This is a “fairly permanent” (a decade?) link to the Media
    Detail page. This link should continue to work as long as Arctos is
    at the same URL and running under the HTTP protocol. Suitable for
    any maintained online link; DOI is perhaps a better choice for paper
    or PDF archives.
-   **“Stable Exit link” (
    (<http://arctos.database.museum/media/10002230?open>)**

    Append “?open” (or “?open=true”) to the detail_url; logs the
    request and redirects to media_URI. This is a “fairly permanent”
    (a decade?) link to the Media URI. Logging is enabled. This link
    should continue to work as long as Arctos is at the same URL and
    running under the HTTP protocol, and the media itself is maintained.
    Suitable for any maintained online link. DOI is perhaps a better
    choice for paper or PDF archives. This link is a suitable
    DOI target.
-   **DOI
    ([DOI:10.7299/X78050Z6](http://dx.doi.org/10.7299/X78050Z6))**

    DOIs should be (50-year-plus) permanent; they (with proper
    Curatorial commitment) will survive the material moving out of
    Arctos, the deprecation of the HTTP protocol, and other
    imaginable changes. Not all material in Arctos has a DOI, but
    Operators may assign DOIs by request.
-   **“Exit link”
    (<http://arctos.database.museum/exit.cfm?target=http://web.corral.tacc.utexas.edu/MVZimages/MVZ_img/cards/jpg/img_card_2242.jpg>)**

    Links of this format trigger application-level logging and then
    redirect to the [media URI](#media_uri). These links are as stable
    as the Media URI, but trigger local usage logging which helps us pay
    to maintain and create content for Arctos. (This approach is
    necessary because Arctos Media may be located anywhere, including
    servers over which we have no control.)
-   **Media URI
    (<http://web.corral.tacc.utexas.edu/MVZimages/MVZ_img/cards/jpg/img_card_2242.jpg>)

    **The link to the binary. These do NOT fire application-level
    logging, come with no stability guarantees, and should not be used
    for most purposes.


### Tips

Media label **“Made_Date”** requires value to be in [ISO date
format](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2014-05-01 for 1
May 2014) and will give an error upon saving if not rendered in that
format. Try updating the date to the correct format to avoid error
messages.
