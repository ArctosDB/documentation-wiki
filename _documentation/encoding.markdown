---
title: Character Encoding
author: DLM
date: 2019-01-07
layout: default_toc
---

# Character Encoding

Arctos is UTF encoded.

## Conversion

Many products are encoded in different character sets by default. It is possible that "special" characters which cannot be translated to Unicode by the tool will be converted to a placeholder character, such as � or . (The actual character depends on the tool being used. Many source characters may be converted to the same placeholder.)


## HTML

Some data are encoded with HTML escape characters rather than Unicode. These will appear visually identical in Arctos (which in general renders HTML), but are not searchable. For example, ``&aacute;`` and ``á`` will appear identical in many forms. A search for "á" will find only the latter.

## Non-printing characters

Arctos disallows characters not in POSIX character class PRINT, but things like doubled or trailing spaces can still appear in data and will make searching difficult.

## Similar Characters

Many characters, or combinations of characters, are visually similar. For example, see the [Wikipedia entry on the degree symbol](https://en.wikipedia.org/wiki/Degree_symbol).

# Field Length

Some programs or editors silently truncate text. Arctos never will; some text length limitations exist, and violating them will always result in an error, never string manipulation.