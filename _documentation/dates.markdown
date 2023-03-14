---
title: Dates
layout: default_toc
---

# Dates

<div class="center-block text-center">
  <a href="http://xkcd.com/1179/">
    <img src="http://imgs.xkcd.com/comics/iso_8601.png" alt="XKCD 1179" />
  </a>
</div>


Only the information on this page defines the ISO8601 standard for
Arctos.

-   Date and time values are organized from the most to the least
    significant: year, month, day, hour, minute, second, timezone. The
    lexicographical order of the representation thus corresponds to
    chronological order.
-   Each date and time value has a fixed number of digits that must be
    padded with leading zeros.
-   Representations can be done in only one format, often referred to as
    the extended format with separators added to enhance readability.
    The separator used between date values (year, month, and day) is the
    hyphen, while the colon is used as the separator between time values
    (hours, minutes, and seconds). For example, the 6th day of the 1st
    month of the year 2009 may be written as "2009-01-06."
-   For reduced accuracy, any number of values may be dropped from any
    of the date and time representations, but in the order from the
    least to the most significant. For example, "2004-05" is a valid ISO
    8601 date, which indicates the 5th month of the year 2004. This date
    will never represent the 5th day of some unknown month in 2004.

## Supported components

-   4-digit positive year. *Example:* 1987 *(optionally followed by
    dash and…)*
-   2-digit month of the year. *Example:* 1987-04 *(optionally followed by
    dash and…)*
-   2-digit day of the month. *Example:* 1987-04-28 *(optionally followed by
    the character T and…)*
-   2-digit hour of the day (days have 24 hours). *Example:* 1987-04-28T13 *(optionally followed by colon and…)*
-   2-digit minute of the hour. *Example:* 1987-04-28T13:34 *(optionally followed by colon and…)*
-   2-digit second of the minute. *Example:* 1987-04-28T13:34:17 *(optionally followed by
    timezone, given by any one of…)*
    -   The letter Z, designating UTC time zone. *Example:* 1987-04-28T13:34:17Z
    -   The character + followed by a 2-digit positive offset from UTC. *Example:* 1987-04-28T13:34:17+03
    -   The character – followed by a 2-digit negative offset from UTC. *Example:* 1987-04-28T13:34:17-11
-   4-digit negative year. *Example:* -1987. By convention 1 BC is labelled +0000, 2 BC is labeled -0001, and so on.

## Usage Notes

Most natural history data are provided with one-day accuracy, and a
YYYY-MM-DD date format will work for most things most of the time. Most
date fields in the Arctos interfaces include a calendar date picker
which will suggest an appropriately-formatted day. (Close the calendar
with the ESCAPE key to enter a different format.) Traditional collecting
activities might record an identical began and ended date, giving
precision to day:

-   Began_Date: 2010-08-27
-   Ended_Date: 2010-08-27

For scientific sampling activities, a more precise timespan could be
recorded. For example, perhaps a mist net is opened for 15 minutes.
Specimens collected during that time could be entered as:

-   Began_Date: 2010-08-27T09:30
-   Ended_Date: 2010-08-27T09:45

This describes an ambiguous 15-minute timespan. The event began on the
27th day of August 2010 at some local time, rounded to the nearest
minute, and ended 15 minutes later. A less ambiguous description would
be:

-   Began_Date: 2010-08-27T09:30:00-07
-   Ended_Date: 2010-08-27T09:45:00-07

This describes the same 15-minute timespan with more accuracy (to the
second) happening seven hours before UTC (perhaps in California during
the summer, which is Pacific Daylight Time or GMT-7). This is precise
and unambiguous, but can be difficult to work with. For example, how
does it compare to 2010-08-27T09:45:00+04, and how can a user compare
those two events? An alternative and preferred method would be to record
UTC time. The following example describes a timespan identical to the
above example, but is easier to compare to other such data.

-   Began_Date: 2010-08-27T16:30:00Z
-   Ended_Date: 2010-08-27T16:45:00Z

Note that timezone offset should NOT be used to infer location. GMT-7
could mean the data were recorded in California in the summer, Montana
in the winter, or could simply reflect the collector’s equipment
settings. Other date data may be recorded with less precision. For
example, Agents’ birth and death dates are often known only to year. To
record this information, one could simply enter:

-   Birth_Date: 1927

## Excel Issues

See [How To Use Excel for Arctos - Dates](https://handbook.arctosdb.org/how_to/How-to-Excel-for-Arctos.html#dates)

### Caution on using "special" dates

**year-only dates**  Be careful with these, Excel will interpret these as 'days since 1900-01-01'. So the year 2005 will become 1905-06-27. Make sure the field is formatted to number or text so that Excel won't intrpet the date for you.

## Restricted Data

For some records, the year of collection is withheld by the collection. For these records, the year-component of ISO8601 dates is given as "8888."

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/dates.markdown" target="_blank">here</a>.
