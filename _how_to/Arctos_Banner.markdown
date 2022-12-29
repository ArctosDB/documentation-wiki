---
title: How To Add or Edit the Arctos Banner
layout: default_toc
author: Teresa J. Mayfield-Meyer
date: 2022-12-05
---

# How To Add or Edit the Arctos Banner

## Navigation
From the main Arctos menu select

Manage Data > Metadata > Manage Banner

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

Only those who have appropriate training should set or change the banner. If you think a banner needs to be added or edited, but don't feel comfortable doing it yourself, please [file an issue](https://github.com/ArctosDB/arctos/issues/new).

### announcement_text

Enter the text for the banner in this field. Banners should not be too long, if a lot of explanation is necessary, consider adding a link to text in the handbook or in Github.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

links should include target="_blank" and class="external" - like this:
```<a target="_blank" class="external" href="http://google.com">this is an HTML link to Google</a>```

### announcement_expires (show announcement_text through DATE)

Enter the date in ISO format (YYYY-MM-DD) through which the banner should display. Note that announcement_text will not display without an accompanying future announcement_expires value 

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/Arctos_Banner.markdown" target="_blank">here</a>.
