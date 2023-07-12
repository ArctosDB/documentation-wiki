---
title: How To Edit Coordinates for One Cataloged Item
layout: default_toc
---
[Locality Documentation](https://handbook.arctosdb.org/documentation/locality.html)

Cataloged Items may have two types of coordinates: verbatim locality coordinates, and specific locality coordinates. Verbatim locality coordinates are coordinates that were assigned by the original collector; they are not used to map the cataloged items and they are tied exclusively to the collecting event. Specific locality coordinates may or may not be assigned to the original collector; they are used to map the cataloged items and they are tied exclusively to the locality. In other words, the locality of a cataloged item as it appears on maps and the results page is that of the specific locality only.

It is important to know that cataloged items are directly tied to collecting events, and it is the collecting events (not cataloged items!) that are directly tied to specific localities. As such, you can only edit verbatim locality coordinates directly through the "Edit Collecting Event" page, at which point all cataloged items tied to the collecting event will also have their verbatim locality coordinates edited accordingly. If you want to edit the specific locality coordinates, you must do that through the "Edit Locality" page.

***

How to edit verbatim locality coordinates for one cataloged item, if it is tied to a collecting event that contains no other cataloged items:

* Find the catalog record that you want to edit in Arctos, and click on the "Locality" tab.

* Click "Edit Event", which is on the left side of the page next to "Collecting Event".

* There are fields for verbatim coordinates. Input your revised coordinates in these fields and click "Save".

_Note: By a similar token, you can follow the same steps to edit the verbatim locality coordinates of multiple cataloged items, if all these cataloged items are tied to the same collecting event and this collecting event doesn't contain other cataloged items._

***

How to edit specific locality coordinates for one cataloged item, if it is tied to a collecting event that contains no other cataloged items, and if this collecting event is tied to a specific locality that contains no other collecting events.

* Find the catalog record that you want to edit in Arctos, and click on the "Locality" tab.

* Click "Edit Locality", which is on the right side of the page next to "Locality".

* There are fields for decimal latitude and decimal longitude. Input your revised coordinates in these fields and click "Save Edits".

 * If the coordinates you have are in degrees minutes seconds, or in degrees minutes, you can input those values into the "Convert to decimal degrees" box, and the converted decimal degree values will automatically show up in the decimal latitude and decimal longitude fields. Afterwards, click "Save Edits".

_Note: You can follow the same steps to edit the specific locality coordinates of multiple cataloged items at once, if all of these cataloged itemss are ultimately tied to the same Locality ID and there are no other cataloged items._
***

How to edit verbatim locality coordinates for one cataloged item, if it is tied to a collecting event that contains at least one other cataloged item:

_Note: The methodology described below involves cloning the original collecting event, removing the cataloged item of interest from the original collecting event it is currently tied to, reassigning the cataloged item to the cloned collecting event, and then editing the verbatim locality coordinates in this duplicate collecting event. Essentially, you'll be separating your cataloged item into its own collecting event so you can give it revised verbatim locality coordinates that differ from other cataloged items in the original collecting event._

* Search for the catalog record that you want to edit. In the results page, if your cataloged item is the only result that shows up, proceed to the next step now. If there are other cataloged items in your results page, before proceeding to the next step, check all other cataloged items besides yours, and under the "Tools: Map, Customize, or Download" tab, click "Remove Checked Rows". Doing so will make your cataloged item the only result that shows up in the results page. Now you can proceed to the next step.

* Open up the catalog record for this item in a new tab. Under the "Locality" tab, write down the Collecting Event ID. This is going to be the original collecting event, as we will soon be cloning it. Under the "Verification Status" tab, make sure it is listed as "unverified", so we can make changes to it down the line. If it isn't, change it to "unverified", and click "Save Changes to this Specimen/Event". Afterwards, click "Edit Event".

* You will be taken to the original collecting event page. At the bottom of the page, click the "Clone Event (new event under this locality)" button in blue. You will be taken to a new collecting event page that has the same information as the original collecting event, but contains no cataloged items. Write down the Collecting Event ID. This is going to be the cloned collecting event.

* Return to the results page. Make sure that your cataloged item of interest is the only result on the page. Under the "Manage..." tab, click "Collecting Events". This will open up a page in a new tab.

* In this new page, scroll down. You will see an orange button named "REMOVE all specimen events (presumably so you can add new ones)". Click this button. You have successfully removed the original collecting event from the cataloged item, and now you will be able to reassign the cataloged item to the newly cloned collecting event.

* Return to the catalog record. Refresh until you see that the box with locality info (the box on the left side that starts with "Determination Type") is missing. This will confirm that your cataloged item is not currently tied to any collecting event.

* Under the "Locality" tab, click "pick new event". This will open a page in a new window. Expand all the options, scroll all the way down, and in the field marked "Collecting Event ID", type in your cloned Collecting Event ID, and click the button marked "Find Matches". Click the button marked "UseThis", and then click the button marked "Create this Specimen/Event".

* Refresh the catalog record, and you'll see the box with locality info has reappeared. Click the "Locality" tab and make sure that the Collecting Event ID listed is that of the cloned collecting event. Click "Edit Event". You will be taken to the "Edit Collecting Event" page.

* As previously mentioned, there are fields for verbatim coordinates. Input your revised coordinates in these fields and click "Save".

***

How to edit specific locality coordinates for one cataloged item, if it is tied to a collecting event that contains at least one other cataloged item and/or there are other collecting events tied to the locality:

* Follow all the steps in the previous section, and stay on this "Edit Collecting Event" page.

* On the right side of the page, you'll see a link marked "Edit Locality", which is next to "Locality". Open this link in a new tab, and you will be taken to the "Edit Locality" page.

* The Locality ID is listed near the top. Write down this number. This is going to be the original locality, as we will soon clone it.

* Near the bottom of the page, click the button marked "Clone Locality". You will be taken to a new locality page that has the same information as the original locality, but doesn't contain anything. Write down the Locality ID that is listed at the top. This is going to be the cloned locality.

* Return to the "Edit Collecting Event" page. At the right side of the page is a button named "Pick New Locality for this Collecting Event". Click it, and it will open up a page in a new window.

* In this new window, expand all options, and scroll down until you see the field marked "Locality ID". Input the cloned Locality ID, and click "Find Matches". Click the button marked "Accept".

* This new window, will close, and you will be brought back to the "Edit Collecting Event" page. At the bottom of the page, click "Save".

* If you click on the link on the right side of the page marked "Edit Locality", you will see that the Locality ID is that of the cloned locality. Now you can edit your specific locality coordinates for your cataloged item without affecting any other cataloged items tied to the original collecting event and the original locality. Input your revised specific locality coordinates in the fields for decimal latitude and decimal longitude, or in the "Convert to decimal degrees" box as previously mentioned. Click "Save Edits".

(Above is the revised tutorial written by Gordon Lau. Everything below is the original tutorial, that may be incomplete/have errors. Double check to see that the revised tutorial has all the necessary info before deleting the original tutorial.)

***

***

***

Cataloged items may have two types of coordinates: verbatim coordinates which are part of the collecting event, and locality coordinates which may or may not have been assigned by the collector. To edit these coordinates:

* Find the catalog record in Arctos.

* Click "edit" in the upper right of the box that contains geographic information.

* Click "Edit Event" next to Collecting Event.

IF the collecting event contains just that 1 cataloged item:

* Edit the coordinates and click save. (These are verbatim coordinates - i.e., original coordinates recorded by the collector - which do not map in Arctos. You may not want to change them because they are what the collector recorded.

5. click "Edit Locality"

IF this locality contains just that 1 cataloged item

6. edit the coordinates and save. (These are the coordinates that will plot on maps in Arctos.)

IF the collecting event contains more than 1 cataloged item

4. click the "Clone Event and Locality" button

5. edit the coordinates and click save

6. click "Edit Locality" but open in a new tab (hold command then click, when using a mac)

7. edit the coordinates and save (you may need to convert the coordinates to decimal degrees first)

8. in the previous tab (edit Collecting Event) copy the Collecting Event number

9. find the catalog record in Arctos

10. click edit in the geography box

11. click the "pick new event" button

12. paste the collecting event number in the "Collecting Event ID" field

13. click "find matches"

14. click "Use This"

15. click "Save Changes to this Specimen/Event"

time per catalog record: 3-­8 minutes
***

# Tutorial Videos ↗️

[How to fix locality coordinates in a catalog record](https://youtu.be/MM5lgfACD9k)
[How to use GeoLocate](https://youtu.be/3j9gM4sSooI)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Edit-Coordinates-for-One-Specimen.markdown" target="_blank">here</a>.
