---
title: How To Catalog Fossil Material
authors: Teresa Mayfield-Meyer, Dustin Perriguey, Nicole Ridgwell, Katherine Anderson
date created: 2019-03-20
layout: default_toc
---
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG) 

#### [Add to Current Update Request](https://github.com/ArctosDB/documentation-wiki/issues/77)

# How To Catalog Fossil Material

Paleonotological data can be challenging, but it can also be very rewarding to work with in Arctos. This How-To documents some of the common issues confronted when entering paleontology data in Arctos and offers solutions developed by the collections who have already addressed them. As always, if a solution appears less-than-optimal, [file an issue](https://github.com/ArctosDB/arctos/issues/new/choose) and help make Arctos better for everyone!

For the purposes of this guide, a fossil is any preserved remains, impression, or trace of any once-living thing from a past geological age. Examples include bones, shells, exoskeletons, stone imprints of animals or microbes, objects preserved in amber, hair, petrified wood, oil, coal, and DNA remnants.

## Parts

### Body Fossils

Fossils formed by replacement of living tissue with mineral or chemical components appear as preserved remains of an organism. These items should be cataloged with a part name that describes the body part or parts preserved. Additionally, an appropriate part preservation (see Part Preservation below) should be applied to describe the method of fossilization.

 **Body Fossil Example**  
 As an example, the British Museum's Archaeopteryx catalog record in Arctos would include the following:

 Identification = Archaeopteryx  
 part name = skeleton  
 part preservation = permineralization

### Trace Fossils

Trace fossils are indirect evidence of life in the past, such as the footprints, tracks, burrows, borings, and feces left behind by animals, rather than the preserved remains of the body of the actual animal itself.

When cataloging trace fossils, the part in Arctos is generally "trace fossil". Because there are so many methods of trace fossil creation, the part preservation attribute is an important component for trace fossils as it describes the method of fossilization. For this reason, an appropriate part preservation (see Part Preservation below) should be applied to describe the method of fossilization.
  
 **Trace Fossil Example**  
 As an example, a record of a sauropod track (in this case one that is a natural mold, i.e. a convex track that represents an infilling of the original track) in Arctos would include the following:

 Identification = Otozoum
 part name = trace fossil
 part preservation = fossil mold, external
 
  **Coprolites**  
  Coprolites are fossilized feces, a special kind of trace fossil. Rather than using the part "trace fossil" for these, we recommend the use of the part "coprolite". 
  
 **Coprolite Example**  
 As an example, a shark coprolite catalog record in Arctos would include the following:

 Identification = Chondrichthyes
 part name = coprolite
 part preservation = replacement

### Replicas

Replicas of fossil material are often made for public exhibit, teaching, or sharing with other institutions. We recommend that such items be cataloged using the part name appropriate to the anatomy of the item replicated for body fossils or with the part name trace fossil or coprolite for trace fossils with the part preservation attribute "reproduction".

  **Replica Example**  
  As an example, the object record for a replica of the British Museum's Archaeopteryx would include the following:

  Identification = Archaeopteryx  
  part name = skeleton  
  part preservation = reproduction

## Identification (Taxonomy)

Identification of paleontological material is often less precise than for extant taxa and there are special cases where a common name may be more useful than the scientific name when searching for object records. This section documents some of the special identification cases encountered by incoming collections and the methodology for recording them.

### Petrified Wood

When ALMNH paleobotany data was migrated to Arctos, all records identified as "petrified wood" in their Access database were migrated to Arctos with the identification Trachyophyta and the part name "unknown". Somewhere along the way, the common name "Petrified Wood" was been added to Trachyophyta.

While the addition of "Petrified Wood" as a common name for Trachyophyta means that ALMNH could find all of their petrified wood using a common name search, it also means that they and others might get unexpected results because there will be a lot of Trachyophyta that are not "petrified" and potentially some "petrified wood" that isn't identified as Tracheophyta in Arctos. While common names can be problematic, they are also the path that may be used to interact with our collections, so they need to be useful somehow. In this case using the common name attached to the TAXON_NAME did not seem useful.

As a result, the community suggests the following treatment for "petrified wood" in Arctos:

 **Petrified Wood Example**  
  As an example, the object record for an unknown species of petrified wood would include the following:

  Identification = Trachyophyta {Petrified Wood}
  part name = wood  
  part preservation = petrifaction
 
For object identification, use of the [A {string} formula](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTTAXA_FORMULA) "Trachyophyta {Petrified Wood}" allows flexibility between the more genrally used common name while allowing for identification of the biological taxon preseved in this way (if a more refined taxon name can be presented, then change Trachyophyta to whatever that name is).

### Part Preservation  
Part preservation attributes cannot be entered or bulkloaded as part of the original specimen record, but are easily added using the Bulkload Part Attributes Tool (NEED DOCUMENTATION). Part preservation attributes are controlled by vocabulary found at [CTPART_PRESERVATION](http://arctos.database.museum/Admin/CodeTableEditor.cfm?action=editNoCollectionCode&tbl=CTPART_PRESERVATION#carbonization)

Appropriate part preservation attributes for fossils include, but are not limited to:

  * fossil cast:	formed by mineral deposits into the mold left by rotting organic material, resulting in a three-dimensional replica of the hard structures of a plant or animal
  * fossil imprint:	found in silt or clay, like the mold or impression fossils, but they leave behind just a two-dimensional imprint
  * fossil mold, external:	formed when a plant or animal decays completely but leaves behind an external impression of itself, like a hollow mold; no organic material is present and the organism itself is not copied
  * fossil mold, internal: formed when a plant or animal is filled in with sediment and then decays completely, leaving behind an internal impression of itself; no organic material is present and the organism itself is not copied
  * original tissue: fossil material which has not been mineralized and the original tissue has not been significantly chemically altered
  * permineralization:	pores of the original tissues are filled with mineral deposits
  * recrystallization:	original minerals in the skeletal tissues are converted into a new crystal structure
  * replacement:	original tissue is replaced with minerals from the surrounding water and sediment
  * reproduction: an imitation, transcript, or copy of an original object (such as a fossil, letter, or painting) not to be confused with an image (photograph)
