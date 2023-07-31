---
title: Best Practice - Cataloging Captive Material
authors: Teresa Mayfield-Meyer, Dusty McDonald
date created: 2023-07-31
layout: default_toc
---
# Best Practice - Cataloging Captive Material

Cataloging captive bred organisms or organisms that were held in captivity for some period of time should not result in a loss of data. In Arctos, events include a collecting source that is controlled by a [code table](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source) and includes the value [captive](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source#captive). This Best Practice documents some of the common issues confronted when entering captive organism data in Arctos and offers solutions developed by the collections who have already addressed them. As always, if a solution appears less-than-optimal, [file an issue](https://github.com/ArctosDB/arctos/issues/new/choose) and help make Arctos better for everyone!

## DO Use Collecting Source = captive

For any organism or part of an organism that was collected from a captive situation, enter [captive](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctcollecting_source#captive) in collecting source. This is the primary method by which users of Arctos can filter for captive material or filter it out. At the level of the data aggregators, collecting cource is mapped to [dwc:degreeOfEstablishment](https://dwc.tdwg.org/terms/#dwc:degreeOfEstablishment). 

## DO Record All Data for Captive Organisms

Do you have a [Guinea pig from El Paso, Texas](https://arctos.database.museum/guid/UTEP:Mamm:132)? Then say so! Omitting data about the collection location only confuses users. You do not know who may be looking for information in Arctos. Perhaps someone is interested in captive Guine pigs and the diseases they may have encountered in captivity. Perhaps that same researcher is only looking at captive Guinea pigs from Southwestern North America! If you simply omit geography because this record isn't "wild" then that researcher will miss an opportunity to study the specimen you are holding, limiting the use of your object.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_best_practices/captive.markdown" target="_blank">here</a>.
