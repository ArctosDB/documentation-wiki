---
title: How To Template 
layout: default_toc
author: Teresa J. Mayfield-Meyer, Toni Androski
date: 2023-03-08
---

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Work%20in%20Progress.JPG)
Only add the above if you won't be creating a finished product.

# How To Template 

Use this template to help start a new How To - don't edit and save it! Instead make a copy and give the new How To a new name.

All new pages MUST be named using the following format: How_To_[action].markdown (without "markdown" the page will not format correctly!)

The block above between the sets of three dashes must be included in a How To in order for it to appear in the How To list. Make sure you follow these conventions:

```
title: Use Proper Case. This is the text that appears in the How To list, so think about consistency in titles and how things will appear in the list.
layout: default_toc
author: Format names as First Last. If there are multiple authors, separate the names with commas. 
date: MUST be in YYYY-MM-DD format
```

The very first text after that should be the How To Title. It should begin with `# ` and be Proper Case
Follow the Title with a block of text describing what the How To is all about.

## Topic Header

Any other headers in the How To should be preceeded by two or more pound signs. It is good to "nest" them to create a kind of topic hierarchy within the document. Below are some things you may want to use when writing the body of a How To.

### Navigation: [Manage -> Accessions, Loans, Permits -> Loan Metadata Bulkload -> Load csv](https://arctos.database.museum/loaders/BulkloadLoan.cfm?action=ld)
Always add navigation when appropriate. Link directly to the page by putting the navigation text inside square brackets followed immediately by the Arctos page link in parentesis
`[Manage -> Accessions, Loans, Permits -> Loan Metadata Bulkload -> Load csv](https://arctos.database.museum/loaders/BulkloadLoan.cfm?action=ld)`

Write up the steps involved for using the tool or accomplishing the task. Use the tools below as needed:

### Pro Tips

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**
`![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tips**`

> add the tips under the bear in a quote block
> 
> you accomplish this by adding `> ` at th beginning of each line

### Caution

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**
`![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**`

> want to warn users about possible pitfalls? Add some caution notes in a quote block
> 
> you accomplish this by adding `> ` at th beginning of each line
 
### Bullet Points
* add bullet points by placing `* ` at the beginning of a line
 
### Links to Another How To
Link to other How Tos by putting the link text in square brackets followed immediately by the page url in parenthesis [How To Find and Edit Loans](https://handbook.arctosdb.org/how_to/How-to-Find-and-Edit-Loans.html)
`[How To Find and Edit Loans](https://handbook.arctosdb.org/how_to/How-to-Find-and-Edit-Loans.html)`

This same technique can be used for any links you would like to add.

### Images

If you want to add screen shots or other images, see [How To Handle Images](https://handbook.arctosdb.org/how_to/How-to-Get-the-Most-from-Arctos-Github-Editing.html#how-to-handle-images)

### FAQ
<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20FAQ.jpg" width="50"> **Add FAQ text here?**
`<img src="https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20FAQ.jpg" width="50"> **Add FAQ text here?**`

### Code Blocks
If you want to add some code that you want to be visible in the How To, place it between two lines of three backticks (the symbol under the tilde on most QUERTY keyboards).
```
This is a block and can include code
* see how the bullet point doesn't render?
> or the quote block?
```

Always include the two sections below! But change the link text and link urls to indicate the appropriate items. If there is no video tutorial, add the text "Video Tutorial Needed".

## Tutorial Videos ↗️

How to Bulkload Loans (Step 1):

[![How to Bulkload Loans](https://i9.ytimg.com/vi/pN40CkKAbgw/mq2.jpg?sqp=CJCU8I8G&rs=AOn4CLCgvG7IypQyOLtWLJ3jqMzZHZ6e7A)](https://youtu.be/pN40CkKAbgw)

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/How_To_Template.markdown" target="_blank">here</a>.
