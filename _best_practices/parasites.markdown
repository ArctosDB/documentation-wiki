---
title: Best Practice - Cataloging Parasite Material
authors: Teresa Mayfield-Meyer
date created: 2024-06-26
layout: default_toc
---
 [//]: # [Previous Update Request]()

# Best Practice - Cataloging Parasite Material

Parasite data can be challenging, but it can also be very rewarding to work with in Arctos. This Best Practice documents some of the common issues confronted when entering parasite data in Arctos and offers solutions developed by the collections who have already addressed them. As always, if a solution appears less-than-optimal, [file an issue](https://github.com/ArctosDB/arctos/issues/new/choose) and help make Arctos better for everyone!

For the purposes of this guide, a parasite is any preserved remains, observation, or trace of an organism that has sustained contact with another organism (the host) to the detriment of the host organism. Examples include single-celled protozoans such as the agents of malaria, sleeping sickness, and amoebic dysentery; animals such as hookworms, lice, mosquitoes, and vampire bats; fungi such as honey fungus and the agents of ringworm; and plants such as mistletoe, dodder, and the broomrapes.

## Describing the Host Organism

### Best Option - Link to an Arctos Catalog Record

The most powerful method for describing the host organism of a cataloged parasite is to create an Arctos catalog record for the host. This allows a complete description of both the parasite and host identification and classification. It also provides the means to more completely describe both organisms including appropriate attributes and if applicable, the location of any preserved material.

Once the parasite and host recrds are created, they should be linked using Arctos record GUID identifiers and the appropriate reference.

For an example see [https://arctos.database.museum/guid/MSB:Para:10000 ](https://arctos.database.museum/guid/MSB:Para:10000) 

### Good Option - Link to an External Catalog Record

If the host is cataloged outside of Arctos with an actionable link, the parasite in Arctos can be linked to the external resource with an identifier. This method allows for proper description of both the host and parasite organisms, but it will disallow searching across classifications of the two organisms within Arctos. For this reason, when this method is used, it is also important to add the [verbatim host Id](https://arctos.database.museum/info/ctDocumentation.cfm?table=ctattribute_type#verbatim_host_id) attribute to the parasite record.

For an example see [https://arctos.database.museum/guid/MSB:Para:28906](https://arctos.database.museum/guid/MSB:Para:28906) 

### Least Best Option - No Linked Host

If the host is not cataloged with an actionable link, but an identifier for the host is known, it is recommended that the identifier for the host be added. This will allow for future links to be established should they become available.





