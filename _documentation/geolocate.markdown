---
title: GeoLocate
layout: default_toc
---

# GeoLocate

Data Entry now and Edit Locality now offer an inline georeferencing
tool, courtey of the
[GEOLocate](https://www.geo-locate.org) project. While very
cool, this tool is not magic; you, the user, are still responsible for
the end result.

You must use an HTML5-compliant browser (that’s FireFox) to use this
feature.

Higher Geography and Specific Locality are passed to GEOLocate. Trying
to use the tool without these values won’t work properly.

After you click the GeoLocate button, an overlay containing an
interactive map will open. This can be quite slow the first time you use
it as data are cached. Check your cache settings if performance does not
drastically increase for subsequent calls.

If the locality you passed in returns one result, simply check the
georeference and click "Save to your Application" to accept the
coordinates and
error.

<img src="../images/classic-uploads/2011/09/gl1.png"  width="640" height="447"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2011/09/gl1.png 808w, ../images/classic-uploads/2011/09/gl1-300x210.png 300w, ../images/classic-uploads/2011/09/gl1-768x537.png 768w, ../images/classic-uploads/2011/09/gl1-250x175.png 250w, ../images/classic-uploads/2011/09/gl1-550x385.png 550w, ../images/classic-uploads/2011/09/gl1-800x559.png 800w, ../images/classic-uploads/2011/09/gl1-257x180.png 257w, ../images/classic-uploads/2011/09/gl1-429x300.png 429w, ../images/classic-uploads/2011/09/gl1-715x500.png 715w" />

If the locality you passed in returns zero results, first check the
higher geography and spec locality data. If it is accurate, you may edit
the passed-in locality data by clicking "Georeference a locality
description." You may also use this pane to change default settings.

<img src="../images/classic-uploads/2011/09/gl2.png"  width="640" height="527"
sizes="(max-width: 640px) 100vw, 640px"
srcset="../images/classic-uploads/2011/09/gl2.png 805w, ../images/classic-uploads/2011/09/gl2-300x247.png 300w, ../images/classic-uploads/2011/09/gl2-768x633.png 768w, ../images/classic-uploads/2011/09/gl2-250x206.png 250w, ../images/classic-uploads/2011/09/gl2-550x454.png 550w, ../images/classic-uploads/2011/09/gl2-800x660.png 800w, ../images/classic-uploads/2011/09/gl2-218x180.png 218w, ../images/classic-uploads/2011/09/gl2-364x300.png 364w, ../images/classic-uploads/2011/09/gl2-606x500.png 606w" />

If the locality you passed in returns more than one results, you must
click-to-select one of them before clicking "Save to your Application."
Check the results carefully – this can be confusing. The result with the
green dot is "active."

You may edit coordinates by dragging the green dot. You may edit
uncertainty by clicking the green dot, following the link, and dragging
the arrow that appears. You may zoom (on Mac) by holding SHIFT and
dragging a rectangle with your mouse.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/geolocate.markdown" target="_blank">here</a>.
