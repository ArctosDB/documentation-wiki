![](https://github.com/ArctosDB/documentation-wiki/blob/master/tutorial_images/arctoscolorbanner.png)

**Enter Data > Data Entry**

It will bring you to a page where you can choose what collection to enter data into.

Select the collection you need in the drop down menu under “Begin at…” and click the blue “Enter Data” button next to it. 

You should be brought to the page that lets you enter data. 

Note that the background should be green. If it is not, for some reason Arctos will not let you save your data. 
To get a green screen try using different browsers. For instance, I can only enter data when using Google Chrome while the lab computer works using Internet Explorer. 

Data Entry Breakdown…

**Cat Item IDs**
* “Coln” should already be filled in with the collection you are entering data for. 
* “Cat#” is the specimen’s institutional catalog number.
* If there is a collector or preparator number, use the “CustomID Type” drop down menu. Scroll all the way to the bottom and select “collector number” or “preparator number.”
* “Custom ID” is the specimen’s collector or preparator number, if it has one.
* “Accn” is the Acquisition number that is given to a set of specimens, e.g., 01.2014
* “Entered By” should have your Arctos username already filled in.
* “Status” will always be “waiting approval.” 

**Agents**
* “Collector” should be the agent’s name. Fill in the name, hit Tab and you will see a popup; you may have to select the collector if there’s more than one choice. 
* **Neat Tip:** Click “Copy2All” next to the field you entered the collector’s name into and Arctos will automatically assign that name to all the required fields on the current data sheet.

**Other IDs**
* The only time you need to enter anything in this section is when you have preserved embryos taken from a specimen.
* If that is the case the PARENT’S information goes here. 

**Identification**
* “Scientific Name” allows you to type in all or part of the specimen’s scientific name. Then press the Tab button and a small window will pop up with a list of all scientific names relating to what you typed in. 
* This helps to avoid spelling errors.
* “Nature” is a drop down menu. Most often you will choose “field” if the specimen was caught in the field. 
* “Date” here is referring to the date the specimen was caught. Also known as ‘date of death’.

**Attributes**
* “Attributes” is a section where you enter the specimen’s sex, measurements and weight
* “Det.Date” is the date the specimen was prepared, ‘prep date’.
* “Determiner” is the same as the collector’s name. 
* “Attribute” is where you will enter any endoparasites and/or ectoparasites found or not found with the specimen. 
* **Note:** You will want to select endos and ectos then under “Values” selecting yes or no to show if they were detected or not.
* “Date” is the same as the “Det.Date” or ‘prep date’ since that is when it was discovered that the specimen did or did not have any parasites. 

**Random Junk**
* Type in all remarks made on the data sheet here.

**Specimen/Event**
* “Event Determiner” will be the same as the collector.
* “Detr. Date” is the current date. 
* “Specimen/Event Type” will always be “accepted place of collection”.
* “Coll. Src.” Is a drop down menu. Select “wild caught” unless indicated otherwise. 
* “Verification Status” is another drop down menu where “unverified” will already be selected. 

**Collecting Event**
* “Verbatim Locality” is the specific locality but even more specific. Just add the state and country it was caught to the end of the specific locality.
* “Verbatim Date” is the date of death.
* “Begin” is the date of death, “End” is the prep date. These two can be the same if it was prepped in the field. 

**Locality**
* “Higher Geog” is the county the specimen was collected from.
* “Spec Locality” if not given, is usually the verbatim locality with town and county.

**Coordinates (event and locality)**
* “Original lat/long Units” is a drop down menu where you will select “decimal degrees”.
* “Max Error” is usually guestimated to be around 10m unless indicated otherwise. 
* “Datum” will be “World Geodetic System 1984” down near the bottom.
* “Georeference Source” is a section where you can start typing in “global positioning” and a dropdown menu will automatically pop up. From that select “Global Positioning System (Transcription)” 
* “Georeference Protocol” is a dropdown menu where you will select “not recorded”.
* “Dec Lat” is the latitude value in decimal degrees found on the data sheet.
* “Dec Long” is the longitude value in decimal degrees found on the data sheet.
* **Note:** If the verbatim locality is vague, you may need to go digging for lat / long coordinates and district. 
* To do this, try your best to find the location given in google maps. It should give you a lat/long if you click on the map. 
* To find district, use this website: http://www.michigan.gov/dnr/1,1607,7-153-10371_14793-30743--,00.html
* Type in the lat/long in this section and click [geolocate] in blue, located at the top of this section right next to where you choose your Original lat/long units.
* This will give you a map of the general location of your lat/long units. 
* You can move the green dot marker anywhere you want for a more precise location and can also edit your max error here.
* To edit max error, click on the green dot marker and a box will pop up where you can choose “edit uncertainty” 

**Parts**
* List all the parts collected from the specimen.
* Again, you can press the Tab key and a small window will pop up with a list to select from. Choose the most appropriate one, ie; h,k,lu,spl (frozen) instead of just h,k,lu,spl
* “Condition” correlates to the circled number on the data sheet for “Tissue Condition”. 
* “Disposition” is another drop down menu from which you will always select “in collection” unless indicated otherwise. 
* “#” is the number of samples kept of the part. This will almost always be a 1 unless of course indicated otherwise. 

**All finished!**
* Now you will want to click on “Save This As A New Record” in the bottom left hand side of the page in the blue box. 
* Your data sheet will then be put into the bulkloader and await approval.
* To approve the records for upload to Arctos see [How to approve records entered with Data Entry form](https://github.com/ArctosDB/documentation-wiki/wiki/How-to-approve-records-entered-with-Data-Entry-form)