---
title: Redirects
layout: default_toc
authors: Arctos, Michelle Koo
date_updated: 2017-03-29
---

# Redirects

Arctos provides HTTP redirect capability so that access to a webpage can be maintained, under which one URL (http://arctos.database.museum/guid/KNWR:Ento:7193, for example) can be automatically redirected to another (http://arctos.database.museum/guid/UAM:Ento:228334). Examples of where this is important include:

- Recataloging records
- Renaming or removing Projects
- Moving media to alternative storage

To do this,

Ensure that the “old” URL returns a ```404``` HTTP status code. For records, you may do this in two ways:

- Delete the record. All users will then get the redirect.
- Encumber the record with a “mask record” encumbrance. Users who do not have rights to bypass the encumbrance (e.g., all public users) will then be redirected, while operators will be able to continue to access the record.

Go to,  
#### NAVIGATION: Tools Directory -> Records -> [Redirect: Manage](https://arctos.database.museum/Admin/redirect.cfm)

For example, if DGR:Mamm:123 is recataloged as MSB:Mamm:456, enter:   
old_path= /guid/DGR:Mamm:123   
new_path= /guid/MSB:Mamm:456

### Please read guidelines on tool page for latest instructions.
A bulkload tool is available->  [Redirect: Bulkload](https://arctos.database.museum/tools/BulkloadRedirect.cfm)


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/redirect.markdown" target="_blank">here</a>.
