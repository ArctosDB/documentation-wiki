---
title: How To Add or Edit the Arctos Banner
layout: default_toc
authors: Michelle Koo
date_updated: 2025-11-10
redirect_from:
  - /how_to/Arctos_Banner/
---

## Navigation

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

This is limited to operators with ```manage_arctos_ui``` a restricted access. Only those who have appropriate training can change the banner. If you think a banner needs to be added or edited, please [file an issue](https://github.com/ArctosDB/arctos/issues/new).

In the Tile Directory, navigate to Global Admin --> Manage Arctos Banner

### announcement_text

Enter the text for the banner in this field. Banners should not be too long, if a lot of explanation is necessary, consider adding a link to text in the handbook or in Github.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

links should include target="_blank" and class="external" - like this:
```<a target="_blank" class="external" href="http://google.com">this is an HTML link to Google</a>```

### announcement_expires 
*(show announcement_text through DATE)*

Enter the date in ISO format (YYYY-MM-DD) through which the banner should display. Note that announcement_text will not display without an accompanying future announcement_expires value.

![](https://raw.githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Pro.jpg) **Pro Tip**

_Experiment in test, not production._

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_how_to/Arctos_Banner.markdown" target="_blank">here</a>.
