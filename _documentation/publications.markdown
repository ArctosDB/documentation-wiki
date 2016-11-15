---
title: Publications
layout: default_toc
---

# Publications



Publications are included in Arctos to document the significance of
specimens.  These associations also enhance publications by making the
work documented by publications more reproducible.  Where specimens have
been
[cited](http://arctosdb.wordpress.com/documentation/publications/specimen-citations/ "Specimen Citations")
in a publication, this fact can be recorded as an explicit relationship
between a particular specimen and a particular page within a
publication.  Where no such explicit relationship exists, publications
can be related to a [Project](project).


```

Publication . Full_Citation

varchar(4000) not null

```

**Full Citation** is the textual description of a publication formatted
as it would appear in a bibliography.  Typically this would include
authors (also potentially [separate data elements](#author)), year of
publication (also a [separate data element](#published_year)), title,
journal name, and pages.  Examples:

-   John J. Burns and Francis H. Fay. 1970. Comparative morphology of
    the skull of the ribbon seal, *Histriophoca fasciata*, with remarks
    on systematics of Phocidae. Journal of Zoology, London 161:363-394.
-   Jockusch E. L., D. B. Wake, K. P. Yanev. 1998. New species of
    slender salamanders, *Batrachoseps* (Amphibia: Plethodontidae), from
    the Sierra Nevada of California. Contributions in Science, Natural
    History Museum of Los Angeles County 472:1-17.

Though data can be keyboarded directly, the expectation is that Full
Citations will often be inserted directly from sources in which they are
already formatted.  Such insertions should be examined for accuracy,
clarity and completeness.  The following guidelines apply to titles:

The titles of journals and books have all major words capitalized.

-   Example: **The Small Mammals of the Great Plains.**

For journal articles and book chapters, capitalize only the first letter
of the title and proper names.  Punctuate the end of the title with a
period unless it is otherwise punctuated.

-   Example: **The small mammals of the Great Plains.**
-   Example: **Naked mole-rats: why are they so weird?**

Italic text in titles should be marked up with the HTML italic tags
(&lt;i&gt; and &lt;/i&gt;).

-   Example: **The rat, &lt;i&gt;Rattus rattus&lt;/i&gt;, in Alaska.**
-   Renders as: **The rat, *Rattus rattus*, in Alaska.**

Special characters should be inserted in
[Unicode](http://www.alanwood.net/unicode/index.html) and (as above)
formatting should be handled with HTML tags.

-   Example: **Temporal records of d&lt;sup&gt;13&lt;/sup&gt;C and
    d&lt;sup&gt;15&lt;/sup&gt;N in North Pacific pinnipeds.**
-   Renders as: **Temporal records of d^13^C and d^15^N in North
    Pacific pinnipeds.**


```

Publication . Short_Citation

varchar(4000) not null

```

**Short Citation** is typically authorship and year, the way
publications are cited when included in the text of other publications. 
Except in the case of “et al.,” these should contain no punctuation or
formatting.

-   Jockusch et al. 1998
-   Burns and Fay 1970
-   Welsh 1968


```

Publication . Publication_Type

not null VARCHAR2(21)

[ctPublication_Type](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPUBLICATION_TYPE)

```

**Publication Type** describes the nature of the publication, and
vocabulary is
[controlled](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTPUBLICATION_TYPE).


```

Publication . Publication_Year

number, not null

```

**Published Year** is the year in which the publication occurred.  It is
a four-digit integer, *e.g*., 1985.


```

Publication . Is_Peer_Reviewed_FG

number(1), not null

```

**Peer Review Flag** should be set to false for publications which have
not undergone a formal peer review process, such as dissertations.


```

Publication . DOI

varchar(4000), null

– – –

Publication . PMID

varchar(4000), null

```

**DOI** ([Digital Object Identifier](http://www.doi.org/)) or **PMID**
([PubMed Identifier](http://www.ncbi.nlm.nih.gov/pubmed/)) should be
recorded with a publication when they are available.  Including these
identifiers will automatically create resolvable links to the
publication.

Include only the actual IDs rather than a  more complete link (which may
get changed).  The following is a DOI:

-   **10.1111/j.1365-294X.2005.02461.x**

The following are examples of formats that **contain** DOIs; they are
**not** DOIs:

-   **dx.doi.org/10.1111/j.1365-294X.2005.02461.x**
-   **DOI:10.1111/j.1365-294X.2005.02461.x**.


```

Publication_Agent . Publication_Agent_ID

number, not null (primary key)

– – –

Publication_Agent . Agent_ID

number, not null (foreign key = Agent . Agent_ID)

– – –

Publication_Agent . Publication_ID

number, not null (foreign key = Publication . Publication_ID

```

**Authors**, as
[Agents](http://arctosdb.org/documentation/agent/ "Agents") can be
linked to Publications.  Though authorship is expressed in Full
Citation, Agents who are associated with other activities in Arctos,
such as Loans, Projects, and specimen collecting, should be linked to
their Publications.  It is not necessary to create or link all authors
as publication agents.  Agent Name formatting is unimportant as
formatted agent names are part of the full citation.


```

Publication . Author_Role

varchar2(255), not null

[ctAuthor_Role](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAUTHOR_ROLE)

```

**Author Role** indicates whether the indicated agent is an actual
author, or an editor of the publication. Vocabulary is
[controlled](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAUTHOR_ROLE).


```

Publication.cfm?action=newPub

```

## Creating Publications

Publications can be created in Arctos by two methods: (1) The relevant
data can be keyboarded into the form, and (2) the DOI and/or PMID can be
entered and then fetched by the form to automatically fill in most of
the citation data from the Internet resources, CrossRef and NCBI’s
PubMed.  Once these data are in the form, they can be appropriately
edited, and relevant Agents selected as authors.  The latter of these
two methods is the faster, but some publications, especially older ones,
will not have DOIs or PMIDs.

As an example of the second method, say there’s been a loan of (very)
old moth specimens to Maria E. McNamara and her graduate student Derek
E. G. Briggs. This (theoretical) loan results in a (real) publication –
[Fossilized Biophotonic Nanostructures Reveal the Original Colors of
47-Million-Year-Old
Moths](http://www.plosbiology.org/article/info%3Adoi%2F10.1371%2Fjournal.pbio.1001200).
The publication includes additional authors who are not in Arctos, were
not part of the loan, and who are not important to demonstrating the
usefulness of our collections.

There is a DOI given in the publication. Copy that, open the “create
publication” form in Arctos. Paste the DOI
(10.1371/journal.pbio.1001200) excluding any prefix (“doi:” and
“http://dx.doi.org/” are common) into the appropriate box, and click “\[
crossref \].”

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-11-57-58-am.png "Screen Shot 2011-11-28 at 11.57.58 AM"){.alignnone
.wp-image-811 width="640"
height="356"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-11-57-58-am.png)

The DOI lookup service was able to obtain metadata, and everything you
see above is the result of that one click. If you click “create
publication” at this point, you would create a usable publication to
which Citations could be attached, and which could be a part of
Projects.

Here, however, we wish to capture agent information for at least the two
authors to whom we’ve made our earlier (fake) loan.  During the CrosRref
lookup, Arctos has first looked for agents who match the string provided
by DOI, then for agents who MIGHT match the string provided by DOI. All
names – not just preferred – are considered.  A maximum of five
“suggestions” are returned for each of the first five authors.

The first agent returned by the DOI service is Maria E. McNamara. There
is no agent with the exact name “Maria E. McNamara” in Arctos, but there
are three agents with last name “McNamara,” all suggested in the first
line of the blue Agents grid. We happen to know that “Marie Englewood
McNamara” is correct, so we click that entry to select her.

The second author, who we also care about because he was on the loan, is
“Derek E. G. Briggs.” Derek is also a pre-existing Arctos agent, and
that agent happens to have an exact-match agent string available. 
Arctos finds and suggests only this agent, and again one click is all
that’s necessary to add him to the publication.

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-09-13-pm.png "Screen Shot 2011-11-28 at 12.09.13 PM"){.alignnone
.size-full .wp-image-812 width="268"
height="312"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-09-13-pm.png)

The third author, Patrick J. Orr, does not have an exact name match in
Arctos, and does not have a last name match in Arctos, so the system has
gone off looking for agents with any string matching “Orr.” In this
case, the results are not useful and can simply be ignored. If Patrick
J. were deemed important, he would need to be added to Agents and
selected in the standard way.  If there were six “Orr” agents, Patrick
J. might still not show up in the suggest list, but could be found in
the standard way of picking agents. Take-home message: The agent
suggestions are just suggestions.  Sometimes they’re useful, and
sometimes they’re not.  Make no assumptions from them.

If we select the two suggested agents and create the publication….

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-21-10-pm.png "Screen Shot 2011-11-28 at 12.21.10 PM"){.alignnone
.size-full .wp-image-819 width="640"
height="356"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-21-10-pm.png)

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-12-38-pm.png "Screen Shot 2011-11-28 at 12.12.38 PM"){.alignnone
.size-full .wp-image-813 width="640"
height="223"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-12-38-pm.png)

we can then locate it by any name of either of two the authors who we
added

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-14-04-pm.png "Screen Shot 2011-11-28 at 12.14.04 PM"){.alignnone
.size-full .wp-image-814 width="265"
height="242"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-14-04-pm.png)

or anything from the “full citation,”

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-15-16-pm.png "Screen Shot 2011-11-28 at 12.15.16 PM"){.alignnone
.size-full .wp-image-815 width="230"
height="246"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-15-16-pm.png)

including the authors that we did not explicitly include

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-16-30-pm.png "Screen Shot 2011-11-28 at 12.16.30 PM"){.alignnone
.size-full .wp-image-816 width="233"
height="222"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-16-30-pm.png)

but we **canno**t find the publication by authors (as “Participants”)
that we did not link to the publication.

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-17-20-pm.png "Screen Shot 2011-11-28 at 12.17.20 PM"){.alignnone
.size-full .wp-image-817 width="252"
height="245"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-17-20-pm.png)

results in

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-17-51-pm.png "Screen Shot 2011-11-28 at 12.17.51 PM"){.alignnone
.size-full .wp-image-818 width="640"
height="172"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-17-51-pm.png)

We could have used PMID (PubMed ID) rather than DOI to roughly the same
affect. Note that PMID and DOI are apparently independently created and
do not return the same values (“Maria E. McNamara” vs. “Maria E(no-dot)
McNamara,” etc.).

[![](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-24-20-pm.png "Screen Shot 2011-11-28 at 12.24.20 PM"){.alignnone
.size-full .wp-image-820 width="640"
height="351"}](http://arctosdb.files.wordpress.com/2011/11/screen-shot-2011-11-28-at-12-24-20-pm.png)

Formatting from either source is occasionally horrible, and you are
encouraged to use the formatting tools provided (or your method of
choice) to rid citations of things like ALL CAPS and missing or
excessive punctuation.

Most of the time, using DOI or PMID will create better (as in fewer
mistakes) publications with much less work than keyboarding.  The
service is, however, not magic and you, the operator, are responsible
for the results. Your collections may have additional guidelines as to
what agents to include, or how to format publications.


You may create [Media](media) to link publications with arbitrary
Internet documents. Please not that these linkages are notoriously
fragile, and do not serve as a suitable replacement for DOIs.



## Finding DOIs for existing publications

Arctos provides tools to find publications lacking DOIs, and to locate
DOIs for those publications. If you are an operator with
mange_publication rights you will receive missing DOI notifications in
publication search results and the publication edit screen. In most
cases, adding a DOI is simply a matter of clicking the button, letting
the service work, and saving. Please leave a remark as suggested (the
semi-standardized format facilitates search) if you are unable to locate
a DOI for a publication.
