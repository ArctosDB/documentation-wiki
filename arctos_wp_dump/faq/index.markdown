
**Q: What’s a VPD?**\
A: A Virtual Private Database allows us to share resources, like
programmers and hardware, along with some data, such as Taxonomy and
Agents. We all end up with more than we could afford by ourselves, and
operators generally can’t tell that they’re in a shared environment.

**Q: Are there specific system or browser requirements?**\
A: We attempt to keep the client-side of Arctos applications as generic
as possible, but we have made some exceptions:

-   **JavaScript:** We have used JavaScript throughout the applications.
    Your browser must be JavaScript enabled to access all the features
    of such applications.
-   **Cookies: **We use cookies only to set and preserve user
    preferences and user rights. In order to benefit from all but the
    most basic public features, you must enable cookies.
-   **Pop-ups:** Users may wish to enable pop-ups. Some informational
    windows use pop-ups. We promise to only “pop up” things you ask
    for.\
    Operators must enable pop-ups. Many browsers block this, sometimes
    cryptically, by default.

All applications have been tested in Firefox. We highly recommend all
users upgrade to the latest release of Firefox, available
from [Mozilla](http://www.mozilla.com/firefox/). Most of Arctos should
work most of the time in most other browsers. [Let us
know](http://arctos.database.museum/contact.cfm) if you have trouble
accessing this site in your browser, and we’ll fix it if we can.

**Q: What’s Media? Can I store images or video in Arctos?**\
A: Media, loosely defined, is anything you can produce a URI for. Web
pages, Internet-accessible images, and documents stored on FTP sites are
all potentially Media. Media may form relationships with any “node” in
Arctos.

Arctos proper offers little in the way of storage. However, we have a
partnership with the [Texas Advanced Computing
Center](http://www.tacc.utexas.edu/) which provides us access to
essentially unlimited storage space. Arctos currently links to around 10
terabytes of Media, primarily high-resolution images of ALA herbarium
sheets and historical MVZ images, both on TACC’s servers.

**Q: Why Oracle and ColdFusion?**\
A: Because they work. We’ve tried many other solutions along the way.
Oracle is rock-solid and stable, and allows us to do things like
share/control data via VPDs, maintain current data to our query
environments, and sleep at night. ColdFusion is a very robust rapid
development environment that fits our programming style perfectly while
providing very close to 100% uptime and reliability. On a more practical
level, implementing an open-source solution would necessitate hiring at
least one additional person to mange software, while compromising
stability and security.

**Q: How does Arctos compare with Specify?**\
A: While sharing a common ancestor, Arctos and Specify now differ at
almost every level – software, hardware, security model, data model,
development strategy, and support community.
See [comparison](http://arctos.database.museum/info/avs.html).

**Q: What about security and backups?**\
A: Arctos has multiple levels of security. A lightweight application
security package controls access to forms, while Oracle partitions data
by user, roles, and context, and provides auditing. Incremental backup
logs are maintained on mirrored disks, and daily backups are maintained
in 3 geographically separate secure locations.

</div>

</div>

</div>

</div>

<div id="secondary">

get yer docs here {#get-yer-docs-here .site-description}
-----------------

</div>

</div>

