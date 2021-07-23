---
title: Best Practice: Selecting a Loan Type
authors: Teresa Mayfield-Meyer, Carla Cicero
date created: 2021-07-19
layout: default_toc
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)

# Best Practice - Selecting a Loan Type 

What is a Loan Type? Before you make any decisions about one, you should know what it is. Start by reading the [Loan Type Documentation](https://handbook.arctosdb.org/documentation/loans.html#type).

## Loan Type Definitions

Definitions for Loan Types can be found in the [Loan Type Code Table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_TYPE).

## General Recommendations for Loan Type 

We recommend choosing a Loan Type that indicates whether or not objects were handled and whether objects (either the original loaned object or a derivative) or data can be expected to be returned. 

The following Flowchart should help you select an appropriate Loan Type.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/images/best_practices/Guide%20to%20Arctos%20Loan%20Types.jpg)

### A Note on Data Loans

Data Loans document data usage, and are generally applicable when no objects are handled, but information in Arctos about an object has been used in research. Data loans form a special relationship between a loan and a cataloged item. Data loans are not meant as a replacement for "digitization" loans, in which a part is imaged (or otherwise digitized), as "digitization" loans involve handling physical objects. Subsequent usage of digital media (including that generated in "digitization" loans) may best be recorded as data loans. Curators may wish to create a new loan number series for data loans, although this is not required. Data loans are useful in instances where you discover a publication that cites an Arctos record or an Arctos data download, and you have never loaned objects to any of the authors.

### A Note on "in house" Loans

In order to associate objects with in-house projects or the projects of visiting researchers, the concept of loans can be further extended to include in-house usage. In house usage should be recorded as consumable or not and designated as "in house" through use of the institution's own address as the shipping address. It is NOT recommended to use the "in house" loan type, which we are working to remove from the code table. See [GitHub Issue #3741](https://github.com/ArctosDB/arctos/issues/3741).

### A Note on Exchanges

An object "exchange" between Arctos collections should be recorded as two transactions: a loan and an accession or a loan and a borrow, depending upon the nature of the exchange. This arrangement reflects the reality of incompleted exchanges, and takes advantage of the fact that we are dealing with both outgoing objects and incoming objects. 

## Summary

 - Loan Type is controlled by a [code table](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTLOAN_TYPE).
 - The choice of loan type depends upon whether objects were handled and expectations about their return. 
 - Data Loans should be used when no objects were handled.
 - "In house" loans are indicated by using the shipping address of the loaning institution
 - Exchanges between two Arctos collections involve two transactions, a loan and an accession or a loan and a borrow, depending upon the nature of the exchange.
 
 [//]: # (See https://github.com/ArctosDB/documentation-wiki/issues/214)