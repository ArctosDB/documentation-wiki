---
title: How To Bulkload Agents
layout: default_toc
author: DLM, Teresa Mayfield-Meyer
date: 2018-04-26
---
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

# How To Bulkload Agents

Please keep in mind that Agents are shared across all Arctos collections. Read **all** of the [Agent Documentation](http://handbook.arctosdb.org/documentation/agent.html) before proceeding.


In almost no case will all of these steps be necessary; Agents come from legacy data in a wide variety of formats. Reading the entirety of this document and consulting with the Arctos team before proceeding is highly recommended.

"Repatriation" - pushing cleaned versions of Agents back to the original (usually catalog record) data - will be necessary at multiple points in this process. The Pre-Bulkloader has tools to facilitate some of these, but others will be manual. Those using this process are expected to have the tools and knowledge to accomplish this, or to work closely with someone who does. A great deal of problems are caused by losing the ability to repatriate - the file being actively updated should always contain data which can be used to link the changed data back to the original.


### Find all Agents

For legacy data, Agents may be scattered across many columns (collectors, preparators, determiners, etc.) and often in various formats. Getting them all into one column is almost always the best first step. (Otherwise you may end up dealing with the same set of duplicated many times.) The pre-bulkloader has tools to facilitate this.

### Use the Agent Deconcatenator

This tool will attemp to separate multi-agent strings ("Jim Smith and John Doe") into individual Agents. When necessary, this is generally the most labor-intensive part of this process; concatenations are inherently lossy and cannot be usefully standardized, and the tool will misinterpret some strings.


This:

<img width="447" alt="Screen Shot 2021-10-15 at 9 17 39 AM" src="https://user-images.githubusercontent.com/5720791/137520161-361c05b2-b402-4993-b9f9-51e2aa8ccd34.png">

becomes this:

<img width="597" alt="Screen Shot 2021-10-15 at 9 18 20 AM" src="https://user-images.githubusercontent.com/5720791/137520210-3bdbca0e-854b-49ec-b6c0-91810925556f.png">

It is virtually always necessary to spend some time manually reviewing and correcting the results before proceeding.

Once mostly clean, these data should then be repatriated while there's a "lookup column." This process will be different for almost every situation.

### Use the Agent Namestring Formatter

Once each string represents a single entity, the Agent Namestring Formatter tool may be used to help initially format them in the way required by Arctos. 

<img width="431" alt="Screen Shot 2021-10-15 at 9 58 54 AM" src="https://user-images.githubusercontent.com/5720791/137525163-c51e70db-1888-4376-bc7f-5085fff319aa.png">

Note that abbreviations have been standardized and extraneous nonprinting characters have been removed in the "formatted_name" column.

If this tool has done something useful you may wish to repatriate the results to your data, or set up a pathway by which you can do so later.

This is the stage at which the namestrings are at their simplest and cleanest, and is a good place to being manual cleanup. Re-extract unique values from the original data, and edit them manually. For example, this is a good place to replace ``G. Washington`` with ``George Washington`` (assuming that can be inferred from these data). 

**Remark Help** 

Comments can be cryptic, they may mean the following:

 * spaces - There are more than two spaces in the name as would be expected from a "first middle last" configuration. This may be correct such as in the case of "Jr." or "III" and can be ignored, but they should be reviewed to ensure that they are what is expected. 
 * weirdchars - There may be non-printing characters in the name, if so a version of the name without them should be created and added to the Agent record as an aka. This may also indicate that non-alphabetic but printable characters are present, "-" is one of the most common. This does not require a change to the name, but they should be reviewed to ensure that they are what is expected. 
* strings in this column indicate suspicious data - in this case "washington" was detected as a potential place name. Often data in legacy systems will end up in the wrong column and these checks can help detect that. In this case the warning may be ignored.

### Use the Agent Name Splitter

This tool will help build the file needed for the Agent Bulkload Tool and requires a CSV with a single column header of **preferred_names**. Create the CSV for this tool using the cleaned names from the **Agent Namestring Formatter** results as the values for **preferred_names**. To access this tool, from the Arctos main menu select **Reports/Services > Data Services > Agent Name Splitter**

Select your file, then "Upload This File"

The process may take a while. When it is complete, you will see a list of the names on your screen. Scroll to the bottom and follow the "move on" link. You should be presented with something like this:


<img width="1270" alt="Screen Shot 2021-10-15 at 10 10 23 AM" src="https://user-images.githubusercontent.com/5720791/137526548-d7550794-62c6-4b8d-849f-8edd502544de.png">

Note that ``Dr. Lincoln, Abraham`` has been transformed into ``Dr. Abraham Lincoln``, and that name components have been extracted from the strings. This is another good review point; duplicates or failures may be corrected in the previous step and this tool run again. 

Note that "formatted name" **will not** load to Arctos; you may replace preferred_name with this standardization, or you may delete those columns if this is not useful. You may need to repatriate these data to the original, or set up a pathway to do so.


### Use the pre-bulkloader

After careful review and any necessary correction of the above, it should be simple to create a file which will bulkload into Arctos. This should be loaded into the Agent Pre Bulkloader. (It's in bulk tools rather than data services.)

The file should look something like this:

<img width="883" alt="Screen Shot 2021-10-15 at 10 21 56 AM" src="https://user-images.githubusercontent.com/5720791/137527996-47497dd2-bd89-4e1d-aee4-b7c74e0face4.png">

note the replacement of preferred name with the suggestion (don't forget to repatriate!) and the addition of agent_type.

Upload, read the directions, set to "autoload", download the CSV when status has changed.

<img width="1433" alt="Screen Shot 2021-10-15 at 10 23 59 AM" src="https://user-images.githubusercontent.com/5720791/137528261-74a8fb3f-25a3-48ca-8f6e-26cb5eb7dbcc.png">

Note that Arctos has detected "Angie" is probably a variant of "Angela" and suggested an existing Agent. This should be ** carefully** checked, and when correct:

1. Update the original data to use the preferred name from the existing Arctos agent, and 
2. Delete the agent from the upload file; it already exists, there's not need to do anything additional

Any "fatal" errors **must be** addressed at this time.

This process will often need repeated, and will often result in more mergers within the file. Don't lose your repatriation path!

Once the data are as clean and complete as they can possibly be, they must be passed off to someone who can finalize the load. (New collection's Mentors should know how to help, or file an Issue.) DO leave the 'status' column, and it may be useful to add an additional comment for remarks.


### Use the bulkloader

The bulkloader accepts the same columns as the pre-bulkloader, and works like all component loader. Access is limited to users with manage_codetables access; Agents should be treated as authority data.

The data should be discussed with the users before proceeding. Most all data will have some "errors" from the pre-bulkloader; ensure that this are caused by missing data, and not withheld data. Ensure the user understands and has provided what's expected at this point. Expect to need to remove some columns before proceeding.

Carefully review before proceeding. In a spreadsheet, sort by every column and see if any duplicates, errors, omissions, or other problems become apparent. 

Leverage The Community. Sometimes new eyes quickly detect errors that might take hours (or years!) to fix. Many of us are happy to help with cleanup, but not so happy to discover huge messes in critical data.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-Bulkload-Agents.markdown" target="_blank">here</a>.
