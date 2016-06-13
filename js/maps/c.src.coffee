# Basic inits

window.isBool = (str) -> str is true or str is false

window.isEmpty = (str) -> not str or str.length is 0

window.isBlank = (str) -> not str or /^\s*$/.test(str)

window.isNull = (str) ->
  try
    if isEmpty(str) or isBlank(str) or not str?
      unless str is false or str is 0 then return true
  catch
  false

window.isJson = (str) ->
  if typeof str is 'object' then return true
  try
    JSON.parse(str)
    return true
  catch
  false

window.isNumber = (n) -> not isNaN(parseFloat(n)) and isFinite(n)

window.toFloat = (str) ->
  if not isNumber(str) or isNull(str) then return 0
  parseFloat(str)

window.toInt = (str) ->
  if not isNumber(str) or isNull(str) then return 0
  parseInt(str)

`function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
}`

String::toBool = -> this.toString() is 'true'

Boolean::toBool = -> this.toString() is 'true' # In case lazily tested

Object.size = (obj) ->
  size = 0
  size++ for key of obj when obj.hasOwnProperty(key)
  size

window.delay = (ms,f) -> setTimeout(f,ms)

window.roundNumber = (number,digits = 0) ->
  multiple = 10 ** digits
  Math.round(number * multiple) / multiple

jQuery.fn.exists = -> jQuery(this).length > 0

window.byteCount = (s) => encodeURI(s).split(/%..|./).length - 1

`function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}`

window.debounce_timer = null
window.debounce = (func, threshold = 300, execAsap = false) ->
  # Borrowed from http://coffeescriptcookbook.com/chapters/functions/debounce
  # Only run the prototyped function once per interval.
  (args...) ->
    obj = this
    delayed = ->
      func.apply(obj, args) unless execAsap
    if window.debounce_timer?
      clearTimeout(window.debounce_timer)
    else if (execAsap)
      func.apply(obj, args)
    window.debounce_timer = setTimeout(delayed, threshold)

Function::debounce = (threshold = 300, execAsap = false, timeout = window.debounce_timer, args...) ->
  # Borrowed from http://coffeescriptcookbook.com/chapters/functions/debounce
  # Only run the prototyped function once per interval.
  func = this
  delayed = ->
    func.apply(func, args) unless execAsap
    console.log("Debounce applied")
  if timeout?
    try
      clearTimeout(timeout)
    catch e
      # just do nothing
  else if execAsap
    func.apply(obj, args)
    console.log("Executed immediately")
  window.debounce_timer = setTimeout(delayed, threshold)

window.mapNewWindows = ->
  # Do new windows
  $(".newwindow").each ->
    # Add a click and keypress listener to
    # open links with this class in a new window
    curHref = $(this).attr("href")
    openInNewWindow = (url) ->
      if not url? then return false
      window.open(url)
      return false
    $(this).click ->
      openInNewWindow(curHref)
    $(this).keypress ->
      openInNewWindow(curHref)

# Animations

window.toastStatusMessage = (message, className = "error", duration = 3000, selector = "#status-message") ->
  if not isNumber(duration)
    duration = 3000
  if selector.slice(0,1) is not "#"
    selector = "##{selector}"
  if not $(selector).exists()
    html = "<paper-toast id=\"#{selector.slice(1)}\" duration=\"#{duration}\"></paper-toast>"
    $(html).appendTo("body")
  $(selector).attr("text",message)
  $(selector).addClass(className)
  $(selector)[0].show()
  delay duration + 500, ->
    # A short time after it hides, clean it up
    $(selector).empty()
    $(selector).removeClass(className)
    $(selector).attr("text","")

window.animateLoad = (d=50,elId="#status-container") ->
  if elId.slice(0,1) isnt "#" then elId = "##{elId}"
  try
    if not $(elId).exists()
      inlineId = elId.slice(1)
      html = "<div id='status-container'> <div class='ball stop hide'></div><div class='ball1 stop hide'></div> <br/><p id='status-message'></p> </div>"
      $(html).appendTo("body")
    if $(elId).exists()
      sm_d = roundNumber(d * .5)
      big = $(elId).find('.ball')
      small = $(elId).find('.ball1')
      big.removeClass('stop hide')
      big.css
        width:"#{d}px"
        height:"#{d}px"
      offset = roundNumber(d / 2 + sm_d/2 + 9)
      offset2 = roundNumber((d + 10) / 2 - (sm_d+6)/2)
      small.removeClass('stop hide')
      small.css
        width:"#{sm_d}px"
        height:"#{sm_d}px"
        top:"-#{offset}px"
        'margin-left':"#{offset2}px"
      return true
    false
  catch e
    console.error('Could not animate loader', e.message);

window.stopLoad = (elId="#status-container",fadeOut = 500) ->
  if elId.slice(0,1) isnt "#" then elId = "##{elId}"
  try
    if $(elId).exists()
      big = $(elId).find('.ball')
      small = $(elId).find('.ball1')
      big.addClass('bballgood ballgood')
      small.addClass('bballgood ball1good')
      delay fadeOut, ->
        big.addClass('stop hide')
        big.removeClass('bballgood ballgood')
        small.addClass('stop hide')
        small.removeClass('bballgood ball1good')
  catch e
    console.error('Could not stop load animation', e.message)


window.stopLoadError = (message,elId="#status-container",fadeOut = 1500) ->
  if elId.slice(0,1) isnt "#" then elId = "##{elId}"
  try
    if $(elId).exists()
      big = $(elId).find('.ball')
      small = $(elId).find('.ball1')
      big.addClass('bballerror ballerror')
      small.addClass('bballerror ball1error')
      delay fadeOut, ->
        big.addClass('stop hide')
        big.removeClass('bballerror ballerror')
        small.addClass('stop hide')
        small.removeClass('bballerror ball1error')
      if message? then toastStatusMessage(message)
  catch e
    console.error('Could not stop load error animation', e.message)

window.openLink = (url) ->
  if not url? then return false
  window.open(url)
  false

window.openTab = (url) ->
  openLink(url)

window.goTo = (url) ->
  if not url? then return false
  window.location.href = url
  false

deepJQuery = (selector) ->
  ###
  # Do a shadow-piercing selector
  #
  # Cross-browser, works with Chrome, Firefox, Opera, Safari, and IE
  # Falls back to standard jQuery selector when everything fails.
  ###
  try
    # Chrome uses /deep/ which has been deprecated
    # See http://dev.w3.org/csswg/css-scoping/#deep-combinator
    # https://w3c.github.io/webcomponents/spec/shadow/#composed-trees
    # This is current as of Chrome 44.0.2391.0 dev-m
    # See https://code.google.com/p/chromium/issues/detail?id=446051
    #
    # However, this is pending deprecation.
    unless $("html /deep/ #{selector}").exists()
      throw("Bad /deep/ selector")
    return $("html /deep/ #{selector}")
  catch e
    try
      # Firefox uses >>> instead of "deep"
      # https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM
      # This is actually the correct selector
      unless $("html >>> #{selector}").exists()
        throw("Bad >>> selector")
      return $("html >>> #{selector}")
    catch e
      # These don't match at all -- do the normal jQuery selector
      return $(selector)

p$ = (selector) ->
  # Try to get an object the Polymer way, then if it fails,
  # do jQuery
  try
    $$(selector)[0]
  catch
    $(selector).get(0)

window.d$ = (selector) ->
  deepJQuery(selector)

$ ->
  try
    window.picturefill()
  catch e
    # We don't actually care here, probably hasn't been imported
    console.log("Could not execute picturefill.")
  mapNewWindows()

# File for wordpress-specific coffeescript wrappers

tabSelect = (currentPath = window.currentPagePath) ->
  index = 0
  for tab in $("nav paper-tabs paper-tab")
    thisCollection = $(tab).attr "data-label"
    console.log "Search #{currentPath} for #{thisCollection}", currentPath.search(thisCollection)
    if currentPath.search(thisCollection) isnt -1
      console.info "We're in collection #{{thisCollection}}"
      p$("nav paper-tabs").selected = index
      break
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
  $("#arctos-search").keyup (e) ->
    code = e.keyCode || e.which
    if code is 13 then $("#arctos-search-form").submit()
  $("#arctos-search-form").submit (e) ->
    e.preventDefault()
    url = $("#arctos-search-form").attr("action")
    searchQuery = encodeURIComponent($("#arctos-search").val())
    url = "#{url}?scientific_name=#{searchQuery}"
    openLink(url)
  lightboxImages()
