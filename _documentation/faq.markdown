---
title: Frequently Asked Questions
layout: default_toc
---

# Frequently Asked Questions

**Q: How is taxonomy managed in a shared system?**

A: Identifications (optionally) reference taxonomy, but taxon names are
not directly applied to specimens as Identifications. Taxonomy,
therefore, strives to be "pure" names, leaving the complexities of
applying names to specimens in Identifications. This arrangement:

-   Removes ambiguity in determining what is "proper" taxonomy
-   Allows more formality than other systems
-   Allows us to use external sources of taxonomy

Any namestring ("taxon name" or "scientific name") may have any number
of classifications ("higher taxonomy"), and these may be drawn from
Globalnames.org. Arctos taxonomy is therefore a synthesis of all
"taxonomy projects" that contribute to GlobalNames, plus local data.
Curating taxonomy in Arctos is theoretically unnecessary, although as of
this writing all collections continue to do so due to the lack of
responsive and useful editing capabilities in the various remote
sources.

**Q: I hear Arctos is really complicated. What’s up with that?**

A: Arctos is complicated, as are the data it strives to accurately
represent. There is a steep learning curve to understanding *all*
functionality. Basic functionality – such as that available from other
collections management systems – is pretty simple, and we think we do a
pretty good job of making it intuitive. Perhaps more noticeable is the
level of precision required to use Arctos. Rather than (mis!)typing a
string, you may have to pick a value from a list, or you may have to
supply metadata qualifying your assertions. We strongly believe that
this is a necessary part of managing the specimens and data with which
we have been entrusted, and thus worth the effort to learn this system.

**Q: Are these live data?**

A: Almost. Live data are stored in a [highly normalized relational
structure](http://code.google.com/p/arctos/downloads/list) – fabulous
for organization, not so hot for query. Some data are then optimized for
query performance by way of Database Triggers. Presentation data are
generally less than one minute stale.

**Q: Is there a limit on the number of records I can return in a
search?**

A: We impose no strict limits. Queries almost always take less than 5
seconds. Getting the data to your browser often then becomes a
bottleneck. If you have a reasonably fast browser and connection, it
should be possible to return at least 100,000 basic records with a
single query. We have no idea why you’d want to. [Let us
know](http://arctos.database.museum/contact.cfm) if you find something
excessively slow.

**Q: What’s a VPD?**

A: A Virtual Private Database allows us to share resources, like
programmers and hardware, along with some data, such as Taxonomy and
Agents. We all end up with more than we could afford by ourselves, and
operators generally can’t tell that they’re in a shared environment.

**Q: Are there specific system or browser requirements?**

A: We attempt to keep the client-side of Arctos applications as generic
as possible, but we have made some exceptions:

-   **JavaScript:** We have used JavaScript throughout the applications.
    Your browser must be JavaScript enabled to access all the features
    of such applications.
-   **Cookies: **We use cookies only to set and preserve user
    preferences and user rights. In order to benefit from all but the
    most basic public features, you must enable cookies.
-   **Pop-ups:** Users may wish to enable pop-ups. Some informational
    windows use pop-ups. We promise to only "pop up" things you ask
    for.

    Operators must enable pop-ups. Many browsers block this, sometimes
    cryptically, by default.

All applications have been tested in Firefox. We highly recommend all
users upgrade to the latest release of Firefox, available
from [Mozilla](http://www.mozilla.com/firefox/). Most of Arctos should
work most of the time in most other browsers. [Let us
know](http://arctos.database.museum/contact.cfm) if you have trouble
accessing this site in your browser, and we’ll fix it if we can.

**Q: What’s Media? Can I store images or video in Arctos?**

A: Media, loosely defined, is anything you can produce a URI for. Web
pages, Internet-accessible images, and documents stored on FTP sites are
all potentially Media. Media may form relationships with any "node" in
Arctos.

Arctos proper offers little in the way of storage. However, we have a
partnership with the [Texas Advanced Computing
Center](http://www.tacc.utexas.edu/) which provides us access to
essentially unlimited storage space. Arctos currently links to around 10
terabytes of Media, primarily high-resolution images of ALA herbarium
sheets and historical MVZ images, both on TACC’s servers.

**Q: Why Oracle and ColdFusion?**

A: Because they work. We’ve tried many other solutions along the way.
Oracle is rock-solid and stable, and allows us to do things like
share/control data via VPDs, maintain current data to our query
environments, and sleep at night. ColdFusion is a very robust rapid
development environment that fits our programming style perfectly while
providing very close to 100% uptime and reliability. On a more practical
level, implementing an open-source solution would necessitate hiring at
least one additional person to mange software, while compromising
stability and security.

**Q: How does Arctos compare with Specify?**

A: While sharing a common ancestor, Arctos and Specify now differ at
almost every level – software, hardware, security model, data model,
development strategy, and support community.
See [comparison](http://arctos.database.museum/info/avs.html).

**Q: What about security and backups?**

A: Arctos has multiple levels of security. A lightweight application
security package controls access to forms, while Oracle partitions data
by user, roles, and context, and provides auditing. Incremental backup
logs are maintained on mirrored disks, and daily backups are maintained
in 3 geographically separate secure locations.
