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
  #$(selector).has("img").each ->
  #  if not $(this).attr("nolightbox")?
  #    $(this).imageLightbox(options)
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


unless _arctos?
  _arctos = new Object()

handleSearch = (prepOnly = false) ->
  ###
  # Do a Jekyll site search
  #
  # Based on
  # https://github.com/christian-fei/Simple-Jekyll-Search#configuration
  #
  # Caches a search result so we don't constantly have to do a server ping
  ###
  startTime = Date.now()
  search = $("#search-input").val()
  if isNull search
    $("#results-container").html ""
  # Set up the search helper function
  doSearch = ->
    unless $("#results-container").exists()
      console.warn "The results container was not properly set up. Manually appending."
      rc = """
      <ul id="results-container"></ul>
      """
      $("#search-container").append rc
    if isNull search
      $("#results-container").html ""
      elapsed = Date.now() - startTime
      console.log "Blank search container"
      return false
    $("#search-input-dummy")
    .val search
    .attr "value", search
    searchConfig =
      searchInput: document.getElementById('search-input')
      resultsContainer: document.getElementById('results-container')
      json: _arctos.searchObject
      searchResultTemplate: "<li><a href='{url}'>{title}</a></li>"
      fuzzy: false
      noResultsText: "<strong><em>Sorry, no results found matching '#{search}'</em></strong>"
    SimpleJekyllSearch searchConfig
    do cleanupResults = ->
      # Remove duplicates
      results = $("#results-container li")
      uniqueUrls = new Array()
      for result in results
        url = $(result).find("a").attr "href"
        if url in uniqueUrls
          $(result).remove()
        else
          uniqueUrls.push url
      uniqueUrls
    delay 100, ->
      cleanupResults.debounce(100)
    elapsed = Date.now() - startTime
    console.log "Search completed in #{elapsed}ms"
  # Get the search object
  if isNull _arctos.searchObject
    $.getJSON "https://arctosdb.github.io/documentation-wiki/search.json"
    .done (jsonResult) ->
      console.info "Search pinged back result", jsonResult
      _arctos.searchObject = new Array()
      _arctos.searchPageObject = new Array()
      matchCollectionType = ""
      uniqueUrls = new Array()
      for result in jsonResult
        if result.url in uniqueUrls
          console.info "Removing duplicate url '#{result.url}'"
          continue
        uniqueUrls.push result.url
        _arctos.searchObject.push result
        if result.category is matchCollectionType
          _arctos.searchPageObject.push result
      # In an hour, invalidate these results
      hourToMs = 3600 * 1000
      delay hourToMs, ->
        console.info "Invalidating stale search result object"
        delete _arctos.searchObject
        handleSearch(true) # Rebuild it
        false
      elapsed = Date.now() - startTime
      if prepOnly
        console.log "Search results prepped in #{elapsed}ms"
        window.so = _arctos.searchObject
      console.info "It took #{elapsed}ms to fetch the search items"
      doSearch()
    .error (result, error) ->
      console.error "Couldn't do search: #{error}"
      console.warn result
      $("#results-container").html "<p>There was an error getting your search results. Please try again later.</p>"
  else
    # We already have the search object, do the search
    if prepOnly
      console.warn "Not doing prep -- we already have a search object"
    console.log "Searching for '#{search}' in the saved search object"
    doSearch()
  false


fixSearchHeight = ->
  unless window.hasSetupSizer
    console.debug "Running initial search height sizer ..."
    $(window).resize ->
      console.debug "Firing search height resizer on window resize"
      fixSearchHeight()
      false
    delay 250, ->
      # Run a one-time delayed fix
      fixSearchHeight()
  scrollOffsetter = ->
    topOffsetNumber = $("paper-tabs").outerHeight(true)
    if isNull topOffsetNumber
      topOffsetNumber = 200
    else
      if $("paper-tabs.affix-top").exists()
        topOffsetNumber += $("header div.wrapper:visible").outerHeight(true)
    topOffset = "#{topOffsetNumber}px"
    console.debug "Scroll offset #{topOffset}"
    $("nav#toc").css "top", topOffset
    topOffset
  # Resize!
  if $(window).width() <= 1367 # 1366 is the breakpoint
    minHeight = $("nav#toc").outerHeight(true)
    topOffset = scrollOffsetter()
    $(window).scroll scrollOffsetter
  else
    minHeight = 0
    topOffset = "200px"
    $(window).unbind "scroll", scrollOffsetter
  $("div.nav-container").css "min-height", minHeight
  $("nav#toc").css "top", topOffset
  window.hasSetupSizer = true
  minHeight

window.fixSearchHeight = fixSearchHeight

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
    # if code is 13 then handleSearch() else handleSearch.debounce()
    handleSearch()
  $("#arctos-search-form").submit (e) ->
    e.preventDefault()
    url = $("#arctos-search-form").attr("action")
    searchQuery = encodeURIComponent($("#arctos-search").val())
    url = "#{url}?scientific_name=#{searchQuery}"
    openLink(url)
  #FixedSticky.tests.sticky = false
  #$(".fixedsticky").fixedsticky()
  handleSearch(true)
  lightboxImages()
  i = 0
  for table in $("table")
    $(table).addClass "table table-condensed table-hover"
  if i is 0
    console.log "No tables found"
  else
    console.debug "Added classes to #{i} tables"
  if $("nav#toc").exists()
    do checkToc = ->
      try
        if Polymer.RenderStatus.hasRendered()
          unless $("nav#toc li").length > 0
            if Toc?
              Toc.init $("#toc"), $("main article")
              unless $("nav#toc li").length > 0
                $("nav#toc ul").remove()
                console.info "Manually populating the TOC"
                # Manually make the TOC for firefox and other dumb browsers
                opts = Toc.helpers.parseOps($("#toc"))
                opts.$scope = $("main article")
                opts.$nav.attr('data-toggle', 'toc')
                $topContext = Toc.helpers.createChildNavList(opts.$nav)
                topLevel = Toc.helpers.getTopLevel(opts.$scope)
                $headings = Toc.helpers.getHeadings(opts.$scope, topLevel)
                Toc.helpers.populateNav($topContext, topLevel, $headings)
              $("body").scrollspy {target: "#toc"}
          fixSearchHeight()
        else
          console.warn "Waiting for Polymer.RenderStatus to report ready before building TOC"
          delay 100, ->
            checkToc()
      catch
        if not Polymer?
          # Polymer polyfills haven't finished yet
          delay 100, ->
            checkToc()
