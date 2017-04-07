---
title: Collecting Event
layout: default_toc
---

# Collecting Event

A collecting event is a place and time where collecting occurred. A
collecting event often applies to more than one catalogued specimen, so
be careful that changes you make to a collecting event apply to all of
the specimens. **New Collecting Events** are normally created when
specimen records are [bulk-loaded](bulkloader), but may be created manually, cloned
from existing events, and/or given a nickname for easy identification.

## Event Nickname

`Collecting_Event . Collecting_Event_Name VARCHAR(255) null`

Event Nickname is a human-readable stable "primary key" to
collecting events. Event Nickname may only be created or added in the
edit forms; it may not be created during the data entry process. This
field is useful for locating pre-created collecting event information,
and may be useful when specimens share an event but are not entered
sequentially, such as hosts and parasites.

## Verbatim Locality

`Collecting_Event . Verbatim_Locality VARCHAR(255) null`

Verbatim Locality is the locality description as provided by the
collector and is specific to the Collecting Event, not to the [Locality](locality). 
The same Locality may have been described differently at different
times, and this distinction allows us to incorporate assumptions about
the locality into Specific Locality while maintaining the original
verbage in Verbatim Locality. Verbatim Locality may include any
locality descriptors as written verbatim in field notes or on a specimen
tag – whatever the collector wrote, warts and all. If the locality is
outside of the U.S., include the higher geography as given verbatim by
the collector. Verbatim Locality is not often displayed.

## Dates

The date of the Collecting Event is expressed in three fields: Verbatim
Date, Began Date, and Ended Date. The purpose of these three fields is
to encompass the uncertainty and imprecision inherent in collecting
dates as they are often recorded by collectors, and to properly record
the duration of Collecting Events that may have been longer or shorter
than a single day.

### Verbatim Date

`Collecting_Event . Verbatim_Date VARCHAR(60) not null`

Verbatim Date is a transcription of the date provided by the
collector. If the collection date is given as "unknown," then a value
such as "before 14 Jan 2005" should be entered. (The time is never
completely unknown: We always know that a specimen in hand was collected
before the present.)

### Began Date & Ended Date

`Collecting_Event . Began_Date ISO8601, not null`

`Collecting_Event . Ended_Date ISO8601, not null`

Began and End Dates delimit the range of dates encompassed
by the Verbatim Date. Unlike Verbatim Date, they are [ISO8601
date](dates) values, not an indeterminate character string. If the
Verbatim Date is a valid date, then both the Began Date and the End Date
should be the same as the Verbatim Date. If the Verbatim Date is
unknown or vague, put the latest possible date in the End Date field
(e.g., the date the specimen was received or accessioned), and the
earliest date on which the specimen could have been collected in Began
Date. Often this can be assumed on basis of known history, such as the
life span of the collector, etc.

The following examples are instructive:

| Verbatim Date          | Began Date        | End Date              | Comment |
|------------------------|-------------------|-----------------------|---------|
| October 14, 1959       | 1959-10-14        | 1959-10-14            |         |
| 1907                   | 1907-01-01        | 1907-12-31            | Bracket timespans to some reasonable precision. This is equivalent to the next example. |
| 1907                   | 1907              | 1907                  | It is sometimes possible to pick a began and ended date of the same precision as the given timespan. This is equivalent to the previous example. |
| Feb 2000               | 2000-02-01        | 2000-02-29            | This is equivalent to the next example. |
| Feb 2000               | 2000-02           | 2000-02               | This is equivalent to the previous example. |
| early March 1999       | 1999-03-01        | 1999-03-15            |         |
| mid-April 1956         | 1956-04-11        | 1956-04-20            |         |
| late-May 1942          | 1942-05-15        | 1942-05-31            |         |
| spring 1906            | 1906-03-21        | 1906-06-20            | Assumes temperate northern hemisphere.|
| summer 1910            | 1910-06-21        | 1910-09-20            | Assumes temperate northern hemisphere.|
| fall 1937              | 1937-09-21        | 1937-12-20            | Assumes temperate northern hemisphere.|
| winter 00/01           | 1900-12-21        | 1901-03-20            | Assumes temperate northern hemisphere and beginning of 20th Century.|
| before 2003            | 1900-01-01        | 2002-12-31            | Assumes 20th Century or more recent.|
| between 0100 and 0330 GMT October 30 2012 |  2012-10-30T01:00:00Z |  2012-10-30T03:30:00Z  | Always include timezone information when it is available. |

## Verbatim Coordinates

`Collecting_Event . Verbatim_Coordinates VARCHAR(255), null`

Verbatim coordinates are stored with collecting event in their original
format with the information supplied by the collector. These are not
mapped (although [locality](locality) coordinates are automatically generated from
them via the [bulkloader](bulkloader)) and generally should not be changed (except,
eg, transcription errors).

## Remarks

`Collecting_Event . Coll_Event_Remarks VARCHAR(4000), null`

Use Remarks to document non-standard information pertaining to the fields in collecting event. Do not use remarks for any information which could be recorded with more structure elsewhere.

## Specimen Search

"Collected on or after" and "Collected on or before" offer two distinct search
possibilities:

-   ISO8601 is a began and ended date search
    -   on or after 2013-07-01 will find all specimens collected on or
        after July 1, 2013
    -   on or before 2014-06-30 will find all specimens collected on or
        before June 30, 2014
    -   on or after 2013-07-01 AND on or before 2014-06-30 will find all
        specimens collected BETWEEN and including 2013-07-01 and 2014-06-30

-   Year, Month and Day are NOT date-parts, but are rather paired
    search terms. Used singly, they produce much the same results as the
    ISO functionality: *after year=2013 AND after month=01 AND after
    day=01* is equivalent to *after ISO date=2013-01-01*. However, when
    used together, they may produce unexpected results. (This
    functionality provides search capability which is not inherent in
    ISO date searches.)
    -   On or after
        -   Year: 2013
        -   Month: 07
        -   Day: 01
    -   On or before
        -   Year: 2014
        -   Month: 06
        -   Day: 30

will search for specimens which meet ALL of the listed requirements:
Specimens from August 31 will not be included (31 is not between 1 and
30), and specimens from January will not be included (1 is not between 6
and 7).
