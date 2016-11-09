![](https://github.com/ArctosDB/documentation-wiki/blob/master/tutorial_images/arctoscolorbanner.png)

Other IDs in Arctos are functionally of two types: Those which are (or are somewhat likely to become) resolvable, and the rest. Therefore the most important question to ask when selecting an other ID type is, "can this number be used to form a URL?"

The code table for other IDs is [CTCOLL_OTHER_ID_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTCOLL_OTHER_ID_TYPE). Those ID types with a **base_url** are resolvable, and those without are (currently) not. For display purposes, numbers which are associated with an ID type having a base URL become links to the associated resource. For example, the "GenBank" ID "JQ964551"...

<img width="468" alt="screen shot 2016-03-02 at 8 33 58 am" src="https://cloud.githubusercontent.com/assets/5720791/13467103/92df7ff4-e051-11e5-8e21-4837461901ca.png">

will be appended to the base_url 

    http://www.ncbi.nlm.nih.gov/nuccore/

as given in the code table

<img width="1224" alt="screen shot 2016-03-02 at 8 35 34 am" src="https://cloud.githubusercontent.com/assets/5720791/13467157/c35edf08-e051-11e5-969e-418652637d14.png">

To form the URL [http://www.ncbi.nlm.nih.gov/nuccore/JQ964551](http://www.ncbi.nlm.nih.gov/nuccore/JQ964551)

which will be displayed as an external link in the Arctos pages

<img width="191" alt="screen shot 2016-03-02 at 8 36 56 am" src="https://cloud.githubusercontent.com/assets/5720791/13467196/f33a63d2-e051-11e5-97c3-76a79543f2bc.png">

If any question exists to the format of the identifier, simply copy the base_url from the code table, append the number to it, and paste the result into your browser - something useful should happen.

Similar procedures should be followed for numbers which might at some future time become resolvable. For example, a catalog number assigned by a museum collection which is not currently on line in a useful manner (_e.g._, one which does not provide stable URLs to specimens) should be recorded as belonging to that collection. If the collection does come online, changing the code table will automatically create resolvable URLs from the existing other ID data.

In such cases, it is important to be as specific as possible. For example, it is extremely unlikely that a plant and mammal collection will share a base URL, and so

    SomeInstitution

is very unlikely to become resolvable, while

    SomeInstitution Mammal Collection

is much more likely to do so, and at which point with a simple code table update the Arctos data referring to that collection may be used in semantic queries. (Semantic queries are those in which two internet resources may be "joined" similar to tables in a SQL query to answer questions regarding multiple resources. An example using Arctos Other IDs is "[what parasites of Canis are documented in Arctos?](http://arctos.database.museum/SpecimenResults.cfm?&collection_id=27&related_term_val_1=canis)," which joins various parasite and mammal collections to answer a question which cannot be addressed by any single resource.)

For identifiers which are not, and are unlikely to become, resolvable, the choice of other ID type becomes somewhat more arbitrary, but some important considerations remain. For example, "field number" is not a number assigned to an individual specimen (as is traditional terminology for many mammalogists), but rather an identifier assigned to a collecting event (as is traditional in ichthyology); "collector number" is (usually) the appropriate choice for a "mammal field number." Please consult the documentation in the other ID code table, and [file an Issue](https://github.com/ArctosDB/arctos/issues/new) if any questions remain.