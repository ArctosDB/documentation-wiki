---
title: How To Edit Coordinates and Max Error of a Locality
layout: default_toc
---
[Locality Documentation](https://handbook.arctosdb.org/documentation/locality.html)

# How To Edit Coordinates and Max Error of a Locality

## Manually

This is the method most commonly used for large accessions when a spreadsheet from the collector or curator is supplied. These spreadsheets will often contain the latitude, longitude, and max error, so this can be a huge timesaver. Even though this saves you the trouble of having to georeference the locality, it never hurts to double-check that the supplied information is correct.

* From the specimen page, click the link labeled “Locality”. Most of the relevant changes we will be concerned with can be accessed from this link.

* Clicking that button opens up a new screen on the same page. For now, we will focus on the right side.

Make a note of all the information displayed above. In addition to ensuring you are working on the right entry, it also provides you with a general overview of the data you may have to correct. Clicking [Edit Locality] will allow us make these changes.

* An obnoxious red box will greet you each time you open the link. If the Verification Status in the red box is “unverified”, you can freely make changes to the other fields. If any of the other options are displayed, you will have to set the status as “unverified” before you can proceed. This is easily done by selecting “unverified” on the first drop-down menu then clicking the blue button at the bottom of the box.

* Once you are able to make edits to the locality, scroll down to find these fields.

* This is the core of our locality information and a sight you will quickly get used to seeing.

 * You can enter in the correct coordinates in the Decimal Latitude and Decimal Longitude fields. A handy calculator is provided under those fields if the coordinates were supplied in degrees minutes seconds.

 * Enter the corrected Max Error in the appropriate field. Make sure to select the right units in the drop down menu to the right.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip** 
NULL is acceptable in Max Error, and cannot be confused with "infinitely precise." However, no location is is "sizeless" and we want an easy way to say "this one may be useful because it is specific enough" or more often, "that one is not useful for me because it is really only known to the continental scale." The only really defensible way to interpret NULL error is to make no assumptions: somewhere on the planet, probably. If you have some indication that you are in fact dealing with something smaller than an entire planet, make a guess and support it in georeference method - you've just made your data more useful to to the people who are happy with continent-scale data, but not so much with planet-scale. (And if your guess falls out of some analysis, maybe they'll tell you about it.)

 * Select the Datum, Georeference Source, and Georeference Protocol.

* Hit the light orange “Save” button when all the necessary edits have been made. The page will refresh and finalize all the changes you have made.

* Although you are done editing the locality itself, there are still a few more steps to go through. Scroll down again to find the table titled “Events using this Locality”. The events tied to the locality have not yet had the information updated, but it is easily accomplished by clicking on the blue button labelled “Save Locality Edits, push my agent + today’s date to specimen events”. Doing so will open a new page. Clicking on the tan button will apply the new coordinates to the events, update specimen_event.ASSIGNED_BY_AGENT_ID with your Arctos username, update specimen_event.ASSIGNED_DATE with the current date, and bring you back to the Edit Locality page.

* The last step is to return to the obnoxious red box and update the verification status to checked by curator. Once that is done, you have successfully updated the locality information for all the specimens associated with it.

## Using GeoLocate

More often than not, you will be working with individual or small numbers of specimens. In these cases, you may not have a handy spreadsheet to reference for coordinates or error. You can use an external source such as Google Maps or ACME Mapper, or you can use the handy GeoLocate applet on the Edit Locality page. For a review of best georeferencing practices, consult the georeferencing tutorial.

* You may have noticed the “Georeference with GeoLocate” button earlier. It is one of the four teal buttons near the bottom of the locality box.

* Clicking the button will open up the applet. GeoLocate will try to automatically georeference the locality. Be warned: it is almost always incorrect.

 * Navigating the map is pretty intuitive and familiar if you regularly use Google Maps. You can easily move the map by clicking and dragging. Zooming in and out can be done either by scrolling using the mouse wheel or clicking on the "+" or "-" on the left side of the app.

 * It is often helpful to change the basemap in order to visualize the area in different ways. Because the various maps provide different information, you may be able to find a feature in one map that does not appear on another. Google Streets is helpful for finding street addresses. Mapnik is useful for finding trails. Topographic maps, which may provide the most mileage, are great for named localities. Play around with the options and find out what works for you.

 * The app also provides a few useful tools for refining your georeference. The “Draw polygon” tool is useful for outlining the extent of a feature. The “Place marker” tool sets down a green dot which is used to identify your selected georeference. Lastly, the “Measure” tool is used to find distances between two points.

* After finding your locality on the map, you are ready to set the coordinates for your georeference. This is easily done by using the “Place marker” tool to place a green marker on the map. The green marker can then be dragged around if you need to refine or correct your georeference.

 * Some red markers may also appear on the map. These red markers are secondary points which have been suggested by GeoLocate. These can be helpful for finding named localities, but their coordinates will not be saved to the locality.

* The last thing to be done within the GeoLocate app is to set the max error. Clicking on the green marker will bring up a dialog window with the current latitude, longitude, and uncertainty. Below uncertainty, there is an option called “Edit uncertainty”.  This option brings up an arrowhead which can be dragged to set an error radius around the marker.

* Once your coordinates and error are assigned, click the “Save To Your Application” button at the bottom of the applet. Doing so will bring you back to the Edit Locality page with the Decimal Latitude, Decimal Longitude, Max Error, Datum, Georeference Source, and Georeference Protocol all filled in. Finalize these changes, update the associated events, and set the verification status as outlined in the previous section.

## Tutorial Videos ↗️

[How to fix locality coordinates in a catalog record](https://youtu.be/MM5lgfACD9k)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Edit-Coordinates-and-Max-Error-of-a-Locality.markdown" target="_blank">here</a>.
