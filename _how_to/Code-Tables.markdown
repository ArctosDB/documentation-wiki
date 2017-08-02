---
title: Code Tables
layout: default_toc
---

```
THIS IS A DRAFT DOCUMENT; PLEASE ADDRESS ANY QUESTIONS OR CONCERNS TO THE ARCTOS WORKING GROUP. INPUT IS WELCOME.
```
 
# How to use code tables

Much of Arctos is controlled by code tables. This document serves as a guide to creating and maintaining values.
 
## General Principles

1. Be consistent in terminology. Consistency is of the utmost importance, and when there is a conflict consistency should over-ride all
other considerations. For example, part "whole organism (partial)" exists for consistency; even though "whole" and "partial" in the 
same part name is somewhat nonsensical, this format preserves sort order (making choosing the correct part easier for 
data entry personnel) and provides predictable terminology for users.

1. Put the important stuff first. As of this writing there are about 800 parts; having all of the "whole organisms" together 
(with modifiers and preservation information being parenthetical or comma-separated) makes the data much more usable than having 
"partial organism" which might end up hundreds of rows away from similar material in a sorted list.

1. Be consistent at scale. Arctos has no inherent boundaries, and many collections 
(Host of parasite, Teaching, Hildebrandt anatomical preparations, or "cultural collections") do not follow taxonomic boundaries. 
Terminology and accompanying definitions must not be limited to certain material; "adult" (an age class) must be consistent across
bird, mammal, insect, and archeology collections, for example.

1. If you must provide discipline- or taxon-specific information, do so parenthetically. For example, age class "adult" is currently:
>Sexually mature. Mammals: all adult teeth in wear; all epiphyses solidly fused; surface of bones with no sponginess; sutures fused. 
>Birds: all bone surfaces well formed and hard surfaced; adult sized for the species.
>Cestodes: use mature/immature.


1. Follow Standards when possible; use or build on the work of others. (This is almost never possible in practice.) 

1. Consider user's needs. If a significant portion of users might want to find (and borrow) "skulls" then creating a separate part "skull"
and using it even when the skull is stored with the postcranial skeleton may be advantageous. If that is not the case, cataloging
"skeleton" rather than separate parts will result in 50% fewer parts and make the authority list easier to digest.
 
1. Consider doing nothing. Obscure terms which may only be used by a few specimens may be better stored as more general data
with explanatory remarks. This will need evaluated on a case by case basis.

1. Be explicit in terminology. Never abbreviate or make assumptions. "Sex=M" may make perfect sense to a mammalogist working
 in a mammal collection, but at the scope of Arctos "M" could refer to "monecious."
 
1. Be explicit in definitions. Make no assumptions; ensure that all terms are well-defined and make sense in any context.
Definitions should be given as complete sentences.

1. Use mutually-exclusive terminology. Users (especially Operators) should never have an arbitrary choice.

1. Do not include both "thing (modifier)" and "thing" in the code table. Avoid creating new "bare" terms ("thing") in order
to avoid this problem in the future. Parts of unknown preservation/preparation should be explicit: "thing (unknown)."