---
title: Add or Edit the Arctos Banner
authors: Michelle Koo
date_updated: 2025-11-10
redirect_from:
  - /how_to/Arctos_Banner.html
  - /how_to/Arctos_Banner/
  - /how_to/arctos_banner.html
  - /how_to/arctos_banner/
---

## Navigation

{% include caution.html content="This is limited to operators with ```manage_arctos_ui``` a restricted access. Only those who have appropriate training can change the banner. If you think a banner needs to be added or edited, please [file an issue](https://github.com/ArctosDB/arctos/issues/new)." %}

In the Tile Directory, navigate to Global Admin --> Manage Arctos Banner

### announcement_text

Enter the text for the banner in this field. Banners should not be too long, if a lot of explanation is necessary, consider adding a link to text in the handbook or in Github.

{% include tip.html content='links should include target="_blank" and class="external" - like this:
```<a target="_blank" class="external" href="http://google.com">this is an HTML link to Google</a>```' %}

### announcement_expires 
*(show announcement_text through DATE)*

Enter the date in ISO format (YYYY-MM-DD) through which the banner should display. Note that announcement_text will not display without an accompanying future announcement_expires value.

{% include tip.html content="Experiment in test, not production." %}
