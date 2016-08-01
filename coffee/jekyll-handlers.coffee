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
  searchConfig =
    searchInput: document.getElementById('search-input')
    resultsContainer: document.getElementById('results-container')
    json: "/search.json"
    fuzzy: true
  simpleJekyllSearch searchConfig
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
  $("nav.site-nav").fixedsticky()
  lightboxImages()
