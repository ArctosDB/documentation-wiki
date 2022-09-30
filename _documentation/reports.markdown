---
title: Reports
author: ArctosDB
date: 2022-09-30
layout: default_toc
---

# Reports

Arctos has a built-in user-customizable reporter. It's pretty great.

## Language

The reporter uses CFML, HTML, and CSS, generally to produce PDF's through a browsers print-to-PDF functionality. Extensive documentation for each of these languages is widely available.

## Input

The reporter generally accepts the results of queries, or identifiers passed on from containers or transaction. This is readily expandable to most anything; file an Issue.

## Output

Output is generally either PDF-friendly HTML for labels, or CSV for consumption by external applications. However, it is possible to produce most anything that can be pushed through a browser.

## Fields

The reporter has the following "fields":

* Report Name is the primary report identifier and must be unique. We recommend all lower-case ASCII characters (eg "myreport"), but at least locally any unique string will work.
* Report Type is for categorization and sorting.
