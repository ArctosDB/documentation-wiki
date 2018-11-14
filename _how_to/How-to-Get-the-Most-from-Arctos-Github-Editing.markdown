---
title: How To Get the Most Out of Arctos-Github Editing
layout: default_toc
author: Michelle Koo
date: 2018-05-07
---


# Why Use GitHub for Arctos?

We've covered that [before](/how_to/How-to-Use-Github-for-Arctos.html). Here, we've assumed you have a Github account, have already edited and written documentation in markdown, understand how the Handbook is configured (at least how to contribute without breaking the website!) and now want a little more control and tools at your disposal. We're also assuming you are not a programmer, so nothing complicated, but rather tools so you can edit quickly! _Ready for the next level?_


Relevant Markdown links:
* GitHub is the place to go for the [Arctos Handbook repository](https://github.com/ArctosDB/documentation-wiki) that will help you function as an Arctos user or operator. 

* Basic guide on [how to contribute markdown content to the Handbook](//how_to/How-to-Contribute-Content-to-Arctos-Handbook.html)

* If you have an Arctos Issue, post it on the [Issues](https://github.com/ArctosDB/arctos/issues) site. There you can also view and comment on current issues, search on past issues (closed issues), too. Follow our guide on [How to Use Issues in Arctos](/how_to/How-to-Use-Issues-in-Arctos.html).

* [Mastering Markdown on Github](https://guides.github.com/features/mastering-markdown/) - specific to Github-flavored markdown

## Tips & Cheats:       
[Github-flavored Markdown Cheatsheet](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf) ready for printing!


[Live Markdown Editor](https://jbt.github.io/markdown-editor/) - The online markdown reader will display a preview as you type.


[Word to Markdown converter](https://word-to-markdown.herokuapp.com/) - Upload as Word doc, get back Markdown


[Convert a Google Doc to Markdown](https://github.com/lmmx/gdocs2md-html) -  a little bit of setup via Google Script and then you'll have a handy tool


## How to Get the Most out of Arctos-Github!
Editing and creating pages for the Arctos Handbook in the online Github interface is easy and straightforward. However, at some point, you may need to do more, such as move and edit more than one file at a time. Or perhaps a new page needs more time to complete. This is a step-by-step introduction to working with the Arctos Handbook Github repository.

**First**, let's download and install a desktop tool that allows a local folder to communicate with Github-- [**Github Desktop**](https://desktop.github.com/) (PC or Mac)

**Second**, let's make sure you have a text editor that works well for the task. Most text editors for editing code would work. This can be an intensely personal decision so we're not going to do any comparisons here but if you do not have a preference, I suggest trying out [**Brackets**](http://brackets.io/). It's a free, open-source code editor (Adobe) that works well for this task on either Mac or PC.

Now you're ready to get started.

## Clone a Github Repo for offline editing

 - Open Github Desktop. The first prompt will be to sign in with your Github account. (If you don't have the prompt, go to **Github Desktop -> Preferences** Account tab).
 - Now you will make a copy of a Github repository onto your desktop, **File -> Clone repository**. A list of Github repos that you have access should appear. Choose [documentation-wiki](https://github.com/ArctosDB/documentation-wiki). Select a folder for the copied files. It's best to create a dedicated directory for any code repos.
 - We'll get back to _Github Desktop_ after we open and edit a file below.


## Open and edit in a Text Editor

 For first time user of _Brackets_, let's make life a little easier with a plugin. Plugins are typically third-party contributions to extend Brackets' functionality.     
 We will install one to preview your Markdown code as you type- fun and useful! 
  - Go to **File -> Extension Manager**  (or click on the lego brick on top right)
  - Search for 'markdown preview'
  - Click install for "Markdown Preview" extension ([developer's website](https://github.com/gruehle/MarkdownPreview))
  - Reload application if prompted
  
Now you're ready to start editing or creating a new markdown page in your cloned repo. These changes are on your LOCAL directory only until you are ready to have it "committed" to the online master repository.

 - Navigate in your cloned repo to the "\_how\_to" folder. *A word of caution*: be sure NOT to rename directories or remove any contents of the "git" folder as it will corrupt your copy, or worse the master repo. (If you do, don't panic, commits can be reversed!)
 - Open a file you want to edit (any file with *.markdown extension). Right-click and choose to open with _Brackets_. Once the file is open, click on the blue Markdown icon on the right to enable preview as you code.    
 

 ![markdown preview](https://raw.githubusercontent.com/gruehle/MarkdownPreview/master/screenshots/markdown-preview.png)
 
 Try it out! As you type and add formatting, the preview will show how the rendered page will look. Caveats: it will NOT show you the final rendering on the Handbook site as _Bracket_ cannot render the entire website's framework such as the author and date that are added at the bottom of each page based on the front matter fields.
 
 Also note that _Brackets_ (like the other suggested text editors) helps you code with visual cues, auto-finishing braces, and you can add other bells and whistles with other plugins.  


## How to handle images
Embedding images in a markdown document can be a little tricky as it's not always intuitive in my view. The markdown is straightforward however. It's the same format as hyperlinking text (use square brackets for visible text, use parenthesis for url) with an additional "!" at the beginning:

````markdown
![alternative text](image url)
````

So how to add images to your markdown page? Two methods work:      
 1) **Editing on Github document**. If you're using the online Github editor, then simply drag the image from your desktop to the online editor and it will simulateously upload the image and render the markdown.
 
 2) **Working in a Text Editor & Github Desktop**. You can add the image to the local folder of your repo directly. For images place theme here: **/images/uploads/your_image.jpg**
 
 In your markdown document where the image will be added, use the standard markdown format for embedding images but here we can use the base URL (https://handbook.arctosdb.org) to define the image path.
 
 ````markdown
 ![new image](https://handbook.arctosdb.org/images/uploads/your_image.jpg)
 ````
 

### How to resize images

Without editing the image itself, you can resize the image as you would any image in regular html--  adding the parameters for width and height.

Example in Markdown:

````markdown
![Arctos logo](https://handbook.arctosdb.org/images/favicon256.png)
````
![Arctos logo](https://handbook.arctosdb.org/images/favicon256.png)

This may be too large for your page so we can reduce the width by 50% using the actual HTML that the markdown is rendering so you can adjust the parameters exactly the way you want.

Example in HTML:
````html
<img alt="Arctos logo" width="128" src="https://handbook.arctosdb.org/images/favicon256.png"/>
````
<img alt="Arctos logo" width="128" src="https://handbook.arctosdb.org/images/favicon256.png"/>



## Save edits and sync with Github repo

Once you are ready to post your changes to the Github repo and thus have it compiled and rendered for the website, you are ready to use _Github Desktop_.

Open _Github Desktop_ and you will see your changes in the cloned repo under the _Changes_ tab
 ![brackets](https://handbook.arctosdb.org/images/uploads/github-desktop-example2.png)
  Green highlights are additions and red are deletions.
  
If you are ready to push your changes to the repo, then type a short summary of your modifications in the 'Summary' box with optional descriptive text in 'Description', and click on **Commit to gh-page**.

**TIP:** If you only want some but not all your changes committed, you can select which ones by checking off/on the changes on the left.





