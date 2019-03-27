---
title: How To Bulkload Agents
layout: default_toc
author: DLM, Teresa Mayfield-Meyer
date: 2018-04-26
---

# How To Bulkload Agents

Please keep in mind that Agents are shared across all Arctos collections. Read the [Agent Documentation](http://handbook.arctosdb.org/documentation/agent.html) before proceeding. 

## Check to see if Agents Exist in Arctos

If you have a list of the most complete names for the Agents you need to add:

<img width="198px" alt="screen shot 2018-04-26 at 8 55 23 am" src="https://user-images.githubusercontent.com/5720791/39317105-a4742a14-492f-11e8-87f7-fa6c9b9ed89f.png">

### Use the Agent Namestring Formatter

This tool will split complete names into first, middle, and last and provide information about whether an Agent name exists in Arctos. To access this tool, from the Arctos main menu select **Reports/Services > Data Services > Agent Namestring Formatter** 

<img width="213px" border="1" alt="screen shot 2018-04-26 at 8 54 55 am" src="https://user-images.githubusercontent.com/5720791/39317058-884d16f2-492f-11e8-9297-b920e433275b.png">


Format is given at the top:

<img width="98px" alt="screen shot 2018-04-26 at 8 55 46 am" src="https://user-images.githubusercontent.com/5720791/39320205-3e432e4e-4938-11e8-84e8-3053e41dbea5.png">


Upload, follow the link

<img width="98px" alt="screen shot 2018-04-26 at 8 55 46 am" src="https://user-images.githubusercontent.com/5720791/39317112-a7ebb32e-492f-11e8-92bd-0544e390b2a0.png">



This will run the agent checker function, and it will ALWAYS fail - agent type is not provided to this application in the interest of simplicity. Note any "fatal errors" - they will continue to cause problems.

<img width="100%" alt="screen shot 2018-04-26 at 8 56 50 am" src="https://user-images.githubusercontent.com/5720791/39317159-c8c3f926-492f-11e8-8a13-3cb8096b3759.png">



The Agent Name Splitter injects a "formatted name." You may wish to replace preferred_name with this standardization; you will need to keep data synchronized. In this case the preferred names were already formatted according to the [Guidelines](/documentation/agent.html#creating--maintaining-agents), there is nothing of value in "formatted name," and it can simply be deleted. 

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

To access the Bulkload Agents tool, from the Arctos main menu select **Enter Data > Batch Tools > Bulkload Agents** 

<img width="322px" alt="screen shot 2018-04-26 at 8 54 33 am" src="https://user-images.githubusercontent.com/5720791/39317022-76b17cda-492f-11e8-822d-b04463e2714d.png">

This tool is most often used as part of data migration by incoming collections but it may also be useful when a group of new Agents needs to be entered for other reasons such as members of an expedition or group of students working on a project. 

## Prepare a Bulkload File

The Agent Bulkload tool requires a CSV file with the following column headers:

 * agent_type: items entered in this column fall under a controlled vocabulary which can be found at	[CTAGENT_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_TYPE)  
 * preferred_name: items entered in this column should be the full name of the Agents you wish to add. **NOTE** It is best to enter the most complete version of a person or organization's name here. (i.e. John Boy Jones, City Park Service, Jane G. Jones, etc.)
 
The Agent Bulkload tool will also accept alternate names for the same Agent in optional column headers:

 * other_name_n: items entered in this column may be part of an Agent's name, an alternate spelling of the Agent's name, or an alternate name for the same Agent.  
 * other_name_type_n: **REQUIRED if other_name_n is given** items entered in this column describe the alternate name given in **other_name_n** and are controlled by vocabulary which can be found at [CTAGENT_NAME_TYPE](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_NAME_TYPE)   
 * agent_status_n: items entered in this column provide information about the life status of an Agent and are controlled by vocabulary found at [CTAGENT_STATUS](http://arctos.database.museum/info/ctDocumentation.cfm?table=CTAGENT_STATUS)  
 * agent_status_date_n: **REQUIRED if agent_Status_n is given**	items in this column are dates that correspond to the life status given in **agent_status_n** and must be in the format YYYY-MM-DD  
 * agent_remark: items in this column might include a one sentence description of the agent or anything that might helpful to other users in understanding who or what the agent is **Never use remarks for data which can be linked or formalized elsewhere** 

  **NOTE** The "n" in the column headers above should be replaced with a number so that there may be multiple alternate names and associated name types added for a given Agent (up to 6 other_name_n and associated other_name_type_n, up to 2 agent_status_n and related agent_stats_date_n)

If you have not prepared a CSV file for this tool, it is easy to start one by downloading a template. To get the template, just select **get CSV template** at the top of the Bulkload Agents tool page.

An example of what a completed CSV would look like:
![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Agent_Bulk_Template.JPG)

<img width="163" alt="screen shot 2018-04-26 at 9 04 59 am" src="https://user-images.githubusercontent.com/5720791/39317628-f1b72abe-4930-11e8-817e-251362902aea.png">



# Related Links

[How to Understand Bulkloader Results](/how_to/How-to-deal-with-Agent-Bulkloader-results.html)

