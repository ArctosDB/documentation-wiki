---
title: Using Github- How to Contribute to the Arctos Handbook
layout: default_toc
---
# How to Contribute Content to the Arctos Handbook

There are three kinds of content on the Arctos Handbook:

* **Documentation**, which describes specific data tables and/or types and defines data fields
* **How-to Guides**, step-by-step instructions on how to do specific tasks in Arctos
* **Educational Resources**, for tutorials and teaching guides which use Arctos

Arctos Handbook content can be created or edited by anyone who is a member of the ArctosDB "Users" team (see "[How to Use GitHub for Arctos](/how_to/How-to-Use-Github-for-Arctos)"). That team has "write" access to the ArctosDB/documentation-wiki repository in GitHub. Anyone can view the content, but you need to be added to the "Users" team by an ArctosDB administrator in order to make changes.

Curators/Collection Managers who want the ability to create or edit Documentation and "How-to Guides" should contact dustymc@gmail.com and ccicero@berkeley.edu in order to be added to the "Users" team. We encourage Curators/Collection Managers to engage students in writing "How-to Guides." However, students will not be able to post them to the wiki site; instead, they will need to submit the content to a member of the ArctosDB "Users" team (e.g., their supervisor) who can then post the content.

## Create New Content

* First, login to GitHub.
* Go to the [documentation-wiki repository](https://github.com/ArctosDB/documentation-wiki/). 
* Majority of users will be adding to the How-to pages since Documentation is usually reserved for the Arctos Programmers to define the data tables. So we will proceed with creating a How-to page.
* Enter the directory "**_how_to**" in the repository 
  * if you get lost in the repo, be sure to click on "< > Code " tab to navigate back to the main section
* Press "**Create new file**" in the upper right. 
* Give it a name and end it with the extension ".markdown".  All "How-to Guide" titles should start with "How to .." to distinguish tutorials from other Arctos documentation. Keep titles short and avoid punctuation or special characters (e.g., commas, colons, dashes, slashes, etc.) because the page title is used to format the URL.
* In the text box, create your new content. The first lines need to be the front matter which must look like this:

```markdown
---
title: How To Do Anything in Arctos
layout: default_toc
---
```
Note: the title is what shows up on the index pages.

* Headers are used for organization and navigation. Start with a title preceded by a single hash (#). Subsequent sections are given double-hashes (##). Text can be bulleted by single asterisks (*). Use "Markdown" to format your content (see [Markdown definition](https://en.wikipedia.org/wiki/Markdown) and [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Click on the help (question mark) icon to get some suggestions for doing headers, lists etc.    

```

# This the Title
## Section Header
### Subsection header
#### Further detail

## New Section Header

```

* To add an image, see below.   
* Save the page!
* Pages will dynamically appear on the How to Index page and be searchable on the Arctos Handbook site now.

## Edit Existing Content

* Login to GitHub.
* Go to the [documentation-wiki repository](https://github.com/ArctosDB/documentation-wiki/).
* Find the page you want to edit.
* Click on the page. Click on the pencil icon in the upper right.
* Make your changes on the page. DO NOT EDIT a title because that will change the URL and thus affect linked pages.
* Save the page!

## Add Images

* Give the image a URL: Go to the documentation-wiki tutorial_images folder (https://github.com/ArctosDB/documentation-wiki/tree/gh-pages/tutorial_images), and click the "Upload files" button.
* Drag and drop the image or browse your computer for the image(s) and click the "Commit changes" button.
* Now on your page of content, add images with:

```markdown
![Image of Arctos icon](https://arctosdb.github.io/documentation-wiki/tutorial_images/favicon128.png)
```
![Image of Arctos icon](https://arctosdb.github.io/documentation-wiki/tutorial_images/favicon128.png)

* Hit the preview button.
* Save the page! Note: if you start an entry, and need to add an image, make sure you save your text entry before you leave to go copy the URL.


## Add Videos

* Create a YouTube Video using the Arctos login: arctos.database@gmail.com. 
* Email the database administrator for the password.
* Add the link to the page.

## Pro tip: Text editors
If you want to work on markdown content offline or just not in a browser, there are a number of great text editors to use. Here are some FREE favorites:    

* [Notepad ++](https://notepad-plus-plus.org/) (PC, free)
* [Text Wrangler](http://www.barebones.com/products/textwrangler/) (MAC, free)
* [Brackets](http://brackets.io/) (MAC, PC, free from Adobe)

