---
title: Redirects
layout: default_toc
date: 2017-03-29
---

# Redirects

It is occasionally necessary to do something which changes an Arctos URL, and when doing so it is important to maintain a path to the data. Arctos provides HTTP redirect capability, under which one URL (http://arctos.database.museum/guid/KNWR:Ento:7193, for example) can be automatically redirected to another (http://arctos.database.museum/guid/UAM:Ento:228334). Examples of where this is important include:

- Recataloging Specimens.
- Renaming Projects
- Moving Media offsite

To do this,

Ensure that the “old” URL returns a 404 HTTP status code. For specimens, you may do this in two ways:

- Delete the specimen. All users will then get the redirect.
- Encumber the specimen with a “mask record” encumbrance. Users who do not have rights to bypass the encumbrance (e.g., all public users) will then be redirected, while operators will be able to continue to access the record.

Insert into table REDIRECT (Manage Data/Tools/Redirects, or use the redirect bulkloader) old and new paths. For example, if DGR:Mamm:123 is recataloged as MSB:Mamm:456, enter: old_path=/guid/DGR:Mamm:123; new_path=/guid/MSB:Mamm:456.

### Please read guidelines on tool page for latest instructions.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/redirect.markdown" target="_blank">here</a>.
