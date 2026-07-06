---
---
window._arctosSearchUrl = "{{ site.baseurl }}/search.json";
window._arctos = window._arctos || {};
window._simpleSearchInitialized = false;

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('search-input');
  var resultsContainer = document.getElementById('results-container');
  if (!searchInput || !resultsContainer) return;
  if (typeof SimpleJekyllSearch === 'undefined') return;

  SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: resultsContainer,
    json: window._arctosSearchUrl,
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<strong><em>Sorry, no results found.</em></strong>',
    limit: 25,
    fuzzy: false
  });
  window._simpleSearchInitialized = true;
});