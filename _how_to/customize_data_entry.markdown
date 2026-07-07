---
title: How To Customize Data Entry
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2023-08-11
---
# How To Customize the Data Entry Form

**Documentation: [Catalog Record](https://handbook.arctosdb.org/documentation/catalog.html)**

The data entry form can be customized to reflect the preferred suite of fields displayed, pre-populated with field values, and to provide suggestions for term values. Customization options are saved to the user profile for the last record entered and will automatically display on subsequent logins. Cutomizations can also be saved as profiles and shared with others.

### Navigation: [Tools Directory > Data Entry > Create Records](https://arctos.database.museum/Bulkloader/enter.cfm)

## Enter Catalog Records
Select any of the available options on this page to get to the data entry screen. "Begin with previous records" lists options to start from your last entered record (with all the data pre-poplulated to seed your new record), or to select a record from your Browse and Edit table (either one of your previosuly entered records, or that of other users if you have mamagerial access to their records). You can also opt to "choose a collection" to start with a blank data entry form with only the Enstitution and Collection Code pre-populated.

Once you've made your selction, the data entry form will load and you may enter information or choose a Profile by selecting the **Customize** button in the footer of the data entry screen.

## Profiles
Profiles allow you to customize the data entry form to your liking. This can help you make data entry more efficient and tailored to the specific fields that you need. You may create multiple profiles, and even select from (clone) other users profiles as a starting point to set up how the data entry form is displayed.

### Profile Name
Create a name for your cusomized profile. It is recommended that the name include only lower-case letters. Please refrain from using profanity or hurtful language in profile names as these profiles will be subject to removal without notice. See the [Arctos Code of Conduct](https://arctosdb.org/code-of-conduct/).

### Description
Tell future-you (and other users) what this profile includes/does. It is recommendaed that you say something about the collection(s) for which this Profile is being created as well as the purpose of the customization.

`Profile for entry of Natural History Society of Maryland geology records.`

## Counts and Ordering

### _order
For each section of the data entry form you can set the display order. This determines the placement of the data blocks on the form, with 1 displaying nearest the top. This feature is especially useful if you enter records based on ledgers, field notes, or preparation logs etc. where there is a predictable order. Organizing the data entry form to parallel this order makes entering information more efficient by minimizing jumping back and forth. 

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/c4c86f0d-21c1-4d21-8bf2-c09165aa9229)


The default data entry order is as follows:

1. Record
2. Identifiers
3. Identifications
4. Agents
5. Place & Time
6. Record Attributes
7. Parts

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Your browser will do whatever it wants if order isn't unique!

### _count

For any data entry block where multiple rows are allowed, you can select how many rows you want to appear on the data entry page. For instance, if you tend to catalog multiple parts per record such as "skin," "skull," "skeleton," and "tissue," you can set the Parts count to 4, whereas another user that strictly enters one part per record, such as "object," may want to reduce the number of unneceassry fields displayed, instead setting the Part count to 1.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Pro Tip**

You cannot increase the number of rows for any section while in the process of data entry and a return to customization will lose whatever data you have entered but not saved, so you may want to include extra rows just in case.

## Individual Field Behavior

Before proceeding to work in this section, it is recommended that you set and save the above by selecting the **Save and Return Here** button at the top right of the screen so that only your selected counts of multiple row items will be displayed. The default for this part of the form is "everything".

### Category
The data entry block in which the customized field resides.

### Field
The data entry field (corresponds to a bulkloader column header)

### Show
This field **will** be displayed on the data entry form (note that the default state is that all fields will show)

### Carry
This field **will** be displayed on the data entry form and the value in the field will be carried/copied to the next record entered. This is useful when entering multiple records that share overlapping data so that the user does not have to retype this information after saving each record.

### Hide
This field **will not** be displayed on the data entry form

### DefaultValue
Data entered here will auto-populate in the data entry form. This is useful when you have information that is always included in specific records. For instance, if you always include 5 standard measurements in your catalog records, you can enter the relevant attribute values in the default value column so that they appear on the form. Default values can also be used to communicate instructions to data entry technicians in brackets, as seen in the example below.

![image](https://github.com/ArctosDB/documentation-wiki/assets/11336485/7d56f522-1206-4907-91d5-37e5d260883d)


### Pulled 
This field will be populated with any data that has been recorded in the data entry form using the **Pull values from form** button at the top right of the page.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution*

Pulled values will not automatically save. Select **use** next to the values that you want to keep.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

If you want to keep all of the values, save time by selecting the **Use all values from form** button at the top right of the screen.

## Save Profile

When you have completed your customization, select the **Save and Use** button at the top right of the screen to begin using your customized data entry form.

## Tutorial Videos ↗️

[![How to Customize Search]()


## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/customize_data_entry.markdown" target="_blank">here</a>.
