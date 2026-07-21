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

  // On content pages, Bootstrap's navbar collapse or legacy jQuery handlers in c.min.js
  // intercept clicks inside the results container before navigation can occur.
  // Fix: register in the capture phase (fires before all bubbling-phase handlers)
  // and navigate explicitly, stopping propagation so nothing else interferes.
  resultsContainer.addEventListener('click', function(e) {
    // Walk up from click target to find the <a> (IE11-safe; no closest())
    var t = e.target;
    while (t && t !== resultsContainer) {
      if (t.tagName === 'A' && t.href) {
        e.stopPropagation();  // prevent Bootstrap/jQuery handlers from firing
        e.preventDefault();   // prevent any default that might conflict
        window.location.href = t.href;
        return;
      }
      t = t.parentElement;
    }
  }, true); // true = capture phase
});
