---
title: How To Create Labels
layout: default_toc
author: Teresa Mayfield-Meyer
date: 2019-03-19
---


# DEPRECATED

The .cfr-based reporter is deprecated and should not be used.

Current report/label documentation is [https://handbook.arctosdb.org/documentation/reports.html](https://handbook.arctosdb.org/documentation/reports.html)


-----------------------------------



# How To Create Labels

This document describes one method of printing specimen labels from Arctos. You can also download data in various formats for import into other label generating software, and you can use the reporter to generate labels for transactions and containers as well as specimens. See http://www.akentsoc.org/archives/category/arctos for one alternative approach to specimen labels.

Make sure you’re logged in to Arctos. Find some specimens and choose “Print Any Report” under the Manage widget. Browse through the options until you find a report that’s similar to what you’d like to print. Not all reports will work for specimens, and some are under development or otherwise “broken.”

Once you’ve found a suitable template, remember the name of it and click Mange Reports, then Edit Handler to view the “guts” of the report you’d like to “borrow.” The possibilities are endless, but here’s one example of what you might find and what it can mean for developing your own report.

**DO NOT MANIPULATE ANY REPORT THAT YOU DID NOT CREATE, AND DO NOT UPLOAD A .CFR FILE UNLESS YOU ARE ABSOLUTELY SURE THAT IT’S BEING LOADED UNDER A NEW NAME.**

![screen-shot-2013-11-13-at-1-39-38-pm](https://cloud.githubusercontent.com/assets/5720791/24221729/c41f9b5e-0f0c-11e7-9fee-99fa8e299407.png)

First, note the Pre-Function, which is used to manipulate data before it’s passed to the report. 
This functionality is somewhat cryptic – contact a developer if you wish to borrow a report that uses a pre-function, or
see the inline documentation in the source code at 
[https://github.com/ArctosDB/arctos/blob/master/Reports/functions/label_functions.cfm](https://github.com/ArctosDB/arctos/blob/master/Reports/functions/label_functions.cfm).
In this case it’s NULL, so there should be no surprises.

Note the variable #collection_object_id# in the SQL – this is a specimen (rather than container, which accepts #container_id#, or transaction, which accepts #transaction_id#) label, so we’re still good.

Note round(dec_lat,5) DEC_LAT in the SQL – coordinates are being rounded off.

Note 
```
decode(trim(ConcatAttributeValue(flat.collection_object_id,’sex’)), ‘male’,’Male’, ‘female’,’Female’, ‘?’) sex
```

Sex is being manipulated (in this case, into Proper Case with all variations of “not male or female” being lumped into “?”).

Note that all Oracle functions, including built-in (such as ROUND()) and Arctos-specific (such as ConcatAttributeValue()) 
may be used in the SQL. Built-in functions are
[https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions001.htm](https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions001.htm)
and Arctos functions are [https://github.com/ArctosDB/DDL/tree/master/functions](https://github.com/ArctosDB/DDL/tree/master/functions).

All data are being drawn from FLAT (the giant reporting and query table in Arctos). Note that FLAT does not include encumbrances, does contain many concatenations and mergers, and is sometimes not current (but usually catches up within 60 seconds of specimen data being changed). It exists for things like reporting, and using it in reports (rather than making joins to base tables and dealing with cardinality of relational data) is usually a good choice, but be aware of the limitations.

If the label still looks acceptable, return to the Manage Reports page and re-locate the form you wish to clone. Click “download report” to save the .cfr file to your computer. Rename the .cfr file immediately.

**DO NOT MANIPULATE ANY REPORT THAT YOU DID NOT CREATE, AND DO NOT UPLOAD A .CFR FILE UNLESS YOU ARE ABSOLUTELY SURE THAT IT’S BEING LOADED UNDER A NEW NAME.**

Seriously, be paranoid about this.

Locate the latest copy of “ColdFusion Report Builder” (currently available from https://www.adobe.com/support/coldfusion/downloads.html#cf2018devtools, but Adobe URLs are notoriously unstable). Install it on a Windows machine or virtual machine – there are no non-exe versions.

Open the CFR in report builder and manipulate the report as necessary.

**DO NOT MANIPULATE ANY REPORT THAT YOU DID NOT CREATE, AND DO NOT UPLOAD A .CFR FILE UNLESS YOU ARE ABSOLUTELY SURE THAT IT’S BEING LOADED UNDER A NEW NAME.**

Make sure you’re renaming stuff and not mucking up someone’s report.

From Mange Reports, use the “load a new template” section to load the report you just created. (The upload may dump you to a crazy diagnostic screen – just use your back button to get back to manage reports.)

Click “clone handler” to create a new report. This will create a new report, named Clone_Of_{old_report_name}_{random_integer} – in this case, Clone_Of_DMNS_bat_label_1384379564869.

![screen-shot-2013-11-13-at-1-54-29-pm](https://cloud.githubusercontent.com/assets/5720791/24221789/fa8dc530-0f0c-11e7-8e3f-8c5ee71b2438.png)


Locate the clone and click Edit Handler. Rename the report and choose the CFR you just loaded as the Report Template.


![screen-shot-2013-11-13-at-2-07-44-pm](https://cloud.githubusercontent.com/assets/5720791/24221808/0e89b274-0f0d-11e7-9413-fd1e5f86ec56.png)

**DO NOT MANIPULATE ANY REPORT THAT YOU DID NOT CREATE, AND DO NOT UPLOAD A .CFR FILE UNLESS YOU ARE ABSOLUTELY SURE THAT IT’S BEING LOADED UNDER A NEW NAME.**

Click save. You can now choose the report you just created, which uses the cfr you just built, to print specimen labels. Find specimens, choose “print any report” in Manage, and select your new report.

![screen-shot-2013-11-13-at-2-23-42-pm](https://cloud.githubusercontent.com/assets/5720791/24221822/1cd2b704-0f0d-11e7-9b24-7bb4ab8c8558.png)


![screen-shot-2013-11-13-at-2-25-24-pm](https://cloud.githubusercontent.com/assets/5720791/24221832/261bec68-0f0d-11e7-883b-531cb1f9f6fe.png)

![screen-shot-2013-11-13-at-2-25-51-pm](https://cloud.githubusercontent.com/assets/5720791/24221846/2f9368c0-0f0d-11e7-8681-9998d425122c.png)


Note that for this example I’m printing non-DMNS specimens on a DMNS label, so the hard-coded values make things very confusing. Make very sure that your reports only hard-code things that do not change for the scope of your reporting; use the data itself for anything that will change. Also note that the template I’m using for an example (and which I “modified” only by renaming) is for a very specific purpose – many collections develop specialty reports for particular taxa, or localities, or for specific collectors, or whatever, while other collections have only perhaps “big” and “small” labels.

The reporter is a little twitchy, and you’ll probably have to modify and re-load the CFR a few times to get things just right. In this case, you DO want to overwrite the report, but still be a little paranoid that you’re overwriting your report. You may also modify the SQL at any time (make sure it’s yours too!).

Fonts can be a little strange – use “standard” web fonts in your reports if possible, and contact us if you need additional fonts – we can arrange to have Linux fonts installed on the server. PDF and FlashPaper reports treat fonts differently, and the reporter has the option to embed PDF fonts. Some experimentation may be required.

Email a developer (or use the Contact link at the bottom of any Arctos page) if you get stuck – we have many functions and procedures useful for manipulating the data you see in the report, and we understand that this can all be overwhelming. We’re happy to help at any level in designing and implementing reports, and can provide links directly to reports from various places in Arctos. However, we will generally want someone in the collections to at least figure out how to resize and move form elements – doing so is unfortunately a trial-and-error process, and attempting final adjustments over email tends to be an extremely drawn-out process (eg, move XXXXX 2 pixels to the left; now YYYYY doesn’t fit; repeat until perfection, then some other data breaks everything….).
