---
title: Bulkload Agents
layout: default_toc
author: DLM
date: 2018-04-26
---


# How to bulkload Agents

First open the agent bulkloader. This may take a while as it refreshes some cached data.

<img width="322" alt="screen shot 2018-04-26 at 8 54 33 am" src="https://user-images.githubusercontent.com/5720791/39317022-76b17cda-492f-11e8-822d-b04463e2714d.png">

Click Agent Loader Home to access more tools


<img width="160" alt="screen shot 2018-04-26 at 8 54 48 am" src="https://user-images.githubusercontent.com/5720791/39317050-83a64132-492f-11e8-84bf-794046819087.png">

If you have a list of names....


<img width="198" alt="screen shot 2018-04-26 at 8 55 23 am" src="https://user-images.githubusercontent.com/5720791/39317105-a4742a14-492f-11e8-87f7-fa6c9b9ed89f.png">

...you can split them with the Agent Name Splitter.

<img width="213" alt="screen shot 2018-04-26 at 8 54 55 am" src="https://user-images.githubusercontent.com/5720791/39317058-884d16f2-492f-11e8-9297-b920e433275b.png">

Upload, follow the link

<img width="98" alt="screen shot 2018-04-26 at 8 55 46 am" src="https://user-images.githubusercontent.com/5720791/39317112-a7ebb32e-492f-11e8-92bd-0544e390b2a0.png">

This will run the agent checker function, and it will ALWAYS fail - agent type is not provided to this application in the interest of simplicity. Note any "fatal errors" - they will continue to cause problems.

<img width="1391" alt="screen shot 2018-04-26 at 8 56 50 am" src="https://user-images.githubusercontent.com/5720791/39317159-c8c3f926-492f-11e8-8a13-3cb8096b3759.png">

The Agent Name Splitter injects a "formatted name." You may wish to replace preferred_name with this standardization; you will need to keep data synchronized. In this case the preferred names were already formatted according to the [Guidelines](http://handbook.arctosdb.org/documentation/agent.html#creating--maintaining-agents), there is nothing of value in "formatted name," and it can simply be deleted. 


<img width="462" alt="screen shot 2018-04-26 at 8 58 43 am" src="https://user-images.githubusercontent.com/5720791/39317286-0dc3cdbc-4930-11e8-821e-c7fe31676a73.png">


The Agent Loader Home page provides a list of required and optional columns. We need to add agent_type - they're probably all "person" if we successfully used the agent name splitter.

<img width="660" alt="screen shot 2018-04-26 at 9 12 41 am" src="https://user-images.githubusercontent.com/5720791/39318122-23a5f28e-4932-11e8-9907-ca99fa944b23.png">

This is a good time to delete full duplicates as well; these agents exist and your data will already load against them.


<img width="813" alt="screen shot 2018-04-26 at 9 02 16 am" src="https://user-images.githubusercontent.com/5720791/39317514-9a7958ee-4930-11e8-8f68-78a4d20d84f6.png">

back to the agent loader

<img width="304" alt="screen shot 2018-04-26 at 9 00 09 am" src="https://user-images.githubusercontent.com/5720791/39317397-59889e30-4930-11e8-9530-2e0fddbe0d9e.png">

Load the CSV you just created

<img width="170" alt="screen shot 2018-04-26 at 9 00 42 am" src="https://user-images.githubusercontent.com/5720791/39317403-5dbda90a-4930-11e8-8e24-d03e4b3a137d.png">

follow the link


<img width="380" alt="screen shot 2018-04-26 at 9 01 20 am" src="https://user-images.githubusercontent.com/5720791/39317428-698bcf3c-4930-11e8-9ea7-0717c6582428.png">

validate

<img width="69" alt="screen shot 2018-04-26 at 9 01 36 am" src="https://user-images.githubusercontent.com/5720791/39317447-71f9d4de-4930-11e8-90a9-71b669a85585.png">

back home

<img width="303" alt="screen shot 2018-04-26 at 9 03 38 am" src="https://user-images.githubusercontent.com/5720791/39317595-d7aaa678-4930-11e8-83d2-ef928928dcd9.png">



You will probably see an error message with an explanation. (Short version: Duplicate agents cause huge problems with data reliability; a little work now is MUCH easier than any alternative.)


<img width="1377" alt="screen shot 2018-04-26 at 9 04 05 am" src="https://user-images.githubusercontent.com/5720791/39317601-db6687be-4930-11e8-90b2-8f1afb235653.png">

An active member of the Arctos Working group (=has manage_codetables access) needs to review any errors and then may load these. The review process should include conformation that all information is being provided - e.g., that "J. S. Smith" is in these data because that's absolutely all we know, NOT because tradition mandates entering "John Smithson Smith" as initials only.

Someone with admin access will see a scary red box with an override link.

<img width="429" alt="screen shot 2018-04-26 at 9 04 48 am" src="https://user-images.githubusercontent.com/5720791/39317623-eda474f4-4930-11e8-9669-5926b6aa4bdd.png">

Click it, if there are no remaining errors the data should load.

<img width="163" alt="screen shot 2018-04-26 at 9 04 59 am" src="https://user-images.githubusercontent.com/5720791/39317628-f1b72abe-4930-11e8-817e-251362902aea.png">

# Related Links

[Bulkloader Results howto](http://handbook.arctosdb.org/how_to/How-to-deal-with-Agent-Bulkloader-results.html)

