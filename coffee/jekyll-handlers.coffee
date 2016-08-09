# File for wordpress-specific coffeescript wrappers

tabSelect = (currentPath = window.currentPagePath) ->
  index = 0
  for tab in $("nav paper-tabs paper-tab")
    console.log "Tab iteration"
    try
      thisCollection = $(tab).attr("data-label") ? "NO_LABEL"
      console.log "Search #{currentPath} for #{thisCollection}", currentPath.search(thisCollection)
      if currentPath.search(thisCollection) isnt -1
        console.info "We're in collection #{thisCollection}"
        p$("nav paper-tabs").selected = index
        break
    catch e
      console.warn "Couldn't check - #{e.message}"
    ++index
  false

window.tabSelect = tabSelect

linkSubmenu = ->
  # Placeholder, as yet unused, function.
  false

lightboxImages = (selector = "#content a") ->
  options =
      onStart: ->
        overlayOn()
      onEnd: ->
        overlayOff()
        activityIndicatorOff()
      onLoadStart: ->
        activityIndicatorOn()
      onLoadEnd: ->
        activityIndicatorOff()
      allowedTypes: 'png|jpg|jpeg|gif'
  ###
  $(selector).has("img").each ->
    if not $(this).attr("nolightbox")?
      $(this).imageLightbox(options)
  ###
  # Until these narrower selectors work, let's use this
  $(selector).imageLightbox(options)

activityIndicatorOn = ->
  $('<div id="imagelightbox-loading"><div></div></div>' ).appendTo('body')
activityIndicatorOff = ->
  $('#imagelightbox-loading').remove()
overlayOn = ->
  $('<div id="imagelightbox-overlay"></div>').appendTo('body')
overlayOff = ->
  $('#imagelightbox-overlay').remove()

formatScientificNames = (selector = ".sciname") ->
    $(".sciname").each ->
      # Is it italic?
      nameStyle = if $(this).css("font-style") is "italic" then "normal" else "italic"
      $(this).css("font-style",nameStyle)

linkoutLabels = ->
  # Add a linkout icon to all anchors that point to a different domain
  $("a").each ->
    href = $(this).attr("href")

  false


handleSearch = ->
  # https://github.com/christian-fei/Simple-Jekyll-Search#configuration
  search = $("#search-input").val()
  $.getJSON "https://arctosdb.github.io/documentation-wiki/search.json"
  .done (jsonResult) ->
    console.info "Search pinged back result", jsonResult
    searchConfig =
      searchInput: document.getElementById('search-input')
      resultsContainer: document.getElementById('results-container')
      json: jsonResult
      searchResultTemplate: "<li><a href='{url}'>{title}</a></li>"
      fuzzy: true
      noResultsText: "<em>Sorry, no results found matching '#{search}'</em>"
    SimpleJekyllSearch searchConfig
  .error (result, error) ->
    console.error "Couldn't do search: #{error}"
    console.warn result
    $("#results-container").html "<p>There was an error getting your search results. Please try again later.</p>"
  false

$ ->
  # Local searching
  tabSelect()
  $("#searchsubmit").click ->
    $("#sidebar-search-form").submit()
  $("#s").keyup (e) ->
    code = e.keyCode || e.which
    if code is 13 then $("#sidebar-search-form").submit()
  $("#sidebar-search-form").submit (e) ->
    e.preventDefault()
    url = $("#sidebar-search-form").attr("action")
    searchQuery = encodeURIComponent($("#s").val())
    url = "#{url}?s=#{searchQuery}"
    goTo(url)
  # Arctos Searching
  $("#searchsubmit-arctos").click ->
    $("#arctos-search-form").submit()
  $("#search-input").keyup (e) ->
    code = e.keyCode || e.which
    if code is 13 then handleSearch()
  $("#arctos-search-form").submit (e) ->
    e.preventDefault()
    url = $("#arctos-search-form").attr("action")
    searchQuery = encodeURIComponent($("#arctos-search").val())
    url = "#{url}?scientific_name=#{searchQuery}"
    openLink(url)
  #FixedSticky.tests.sticky = false
  #$(".fixedsticky").fixedsticky()
  lightboxImages()
  if $("nav#toc").exists()
    do checkToc = ->
      try
        if Polymer.RenderStatus.hasRendered()
          unless $("nav#toc li").length > 0
            if Toc?
              Toc.init $("#toc"), $("main")
              unless $("nav#toc li").length > 0
                $("nav#toc ul").remove()
                console.info "Manually populating the TOC"
                # Manually make the TOC for firefox and other dumb browsers
                opts = Toc.helpers.parseOps($("#toc"))
                opts.$scope = $("body")
                opts.$nav.attr('data-toggle', 'toc')
                $topContext = Toc.helpers.createChildNavList(opts.$nav)
                topLevel = Toc.helpers.getTopLevel(opts.$scope)
                $headings = Toc.helpers.getHeadings(opts.$scope, topLevel)
                Toc.helpers.populateNav($topContext, topLevel, $headings)
              $("body").scrollspy {target: "#toc"}
        else
          console.warn "Waiting for Polymer.RenderStatus to report ready before building TOC"
          delay 100, ->
            checkToc()
      catch
        if not Polymer?
          # Polymer polyfills haven't finished yet
          delay 100, ->
            checkToc()
