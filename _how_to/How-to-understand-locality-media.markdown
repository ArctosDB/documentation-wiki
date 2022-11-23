---
title: How To Understand Locality Media
layout: default_toc
---

# How to Understand Media Localities
Arctos allows linking Media directly to Localities, but this is almost always undesirable - minimally, you know the Media was not created tomorrow, for example, and so linking to Localities is a form of discarding potentially valuable information. Linking Media to Collecting Events is preferred but, from the specimen, it is often useful to access the media taken at the place the specimen was collected regardless of time. This page demonstrates how Arctos follows relationships among the relevant data objects to present "derived locality media" - media linked to a collecting event which shares the locality of the current specimen - on specimen records.

(Note that the following examples use demo "data" on test servers.)

A Locality which contains no Media is chosen:

<img width="324" alt="screen shot 2016-04-07 at 1 35 46 pm" src="https://cloud.githubusercontent.com/assets/5720791/14391876/577c1c08-fd73-11e5-93bb-e63d47cf186d.png">

Media is attached to some of the collecting events under the locality:

<img width="459" alt="screen shot 2016-04-07 at 1 37 19 pm" src="https://cloud.githubusercontent.com/assets/5720791/14392029/349bc4ee-fd74-11e5-9392-3aa3e252983d.png">

A specimen using the event with the linked (red) Media:

<img width="497" alt="screen shot 2016-04-07 at 1 37 44 pm" src="https://cloud.githubusercontent.com/assets/5720791/14392055/5d836164-fd74-11e5-9a38-d6f44d631d78.png">

The upper Media box is "derived locality media," as can be seen by viewing the tooltip:

<img width="565" alt="screencapture3" src="https://cloud.githubusercontent.com/assets/5720791/14392217/23e5d83c-fd75-11e5-8eed-df478af7ebfb.png">

The lower Media box is Media linked directly to the Collecting Event used by the Specimen:

<img width="419" alt="screencapture2" src="https://cloud.githubusercontent.com/assets/5720791/14392246/53145a84-fd75-11e5-92fd-eceb7b537482.png">

Note that in the case of Media linking to the event used by the Specimen, the Event-Media is displayed twice: Once in the Locality Media box (because it is spatially relevant), and again in the Event Media box (where is is both spatially and temporally relevant).

Another Specimen which uses a different Event (linked to the map Media) under the same Locality has the same Locality Media box, but different content in the Event Media box:

<img width="442" alt="screen shot 2016-04-07 at 1 38 55 pm" src="https://cloud.githubusercontent.com/assets/5720791/14392358/cc8589b0-fd75-11e5-9d29-bb2fb1acd3eb.png">

A specimen which uses an Event with no direct-linked Media under the same locality contains the spatially-relevant Media, and has no spatiotemporally-relevant Media:

<img width="553" alt="screen shot 2016-04-07 at 1 39 53 pm" src="https://cloud.githubusercontent.com/assets/5720791/14392388/f1b9016c-fd75-11e5-8ecd-04e3f79dd3cf.png">

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How-to-understand-locality-media.markdown" target="_blank">here</a>.
