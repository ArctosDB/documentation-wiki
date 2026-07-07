(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;

},{}],2:[function(require,module,exports){
'use strict'
module.exports = {
  load: load
}

function load (location, callback) {
  var xhr = getXHR()
  xhr.open('GET', location, true)
  xhr.onreadystatechange = createStateChangeListener(xhr, callback)
  xhr.send()
}

function createStateChangeListener (xhr, callback) {
  return function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        callback(null, JSON.parse(xhr.responseText))
      } catch (err) {
        callback(err, null)
      }
    }
  }
}

function getXHR () {
  return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
}

},{}],3:[function(require,module,exports){
'use strict'
module.exports = function OptionsValidator (params) {
  if (!validateParams(params)) {
    throw new Error('-- OptionsValidator: required options missing')
  }
  if (!(this instanceof OptionsValidator)) {
    return new OptionsValidator(params)
  }

  var requiredOptions = params.required

  this.getRequiredOptions = function () {
    return requiredOptions
  }

  this.validate = function (parameters) {
    var errors = []
    requiredOptions.forEach(function (requiredOptionName) {
      if (parameters[requiredOptionName] === undefined) {
        errors.push(requiredOptionName)
      }
    })
    return errors
  }

  function validateParams (params) {
    if (!params) {
      return false
    }
    return params.required !== undefined && params.required instanceof Array
  }
}

},{}],4:[function(require,module,exports){
'use strict'
module.exports = {
  put: put,
  clear: clear,
  get: get,
  search: search,
  setOptions: setOptions
}

var FuzzySearchStrategy = require('./SearchStrategies/FuzzySearchStrategy')
var LiteralSearchStrategy = require('./SearchStrategies/LiteralSearchStrategy')

var data = []
var opt = {}
opt.fuzzy = false
opt.limit = 10
opt.searchStrategy = opt.fuzzy ? FuzzySearchStrategy : LiteralSearchStrategy

function put (data) {
  if (isObject(data)) {
    return addObject(data)
  }
  if (isArray(data)) {
    return addArray(data)
  }
  return undefined
}
function clear () {
  data.length = 0
  return data
}

function get () {
  return data
}

function isObject (obj) { return !!obj && Object.prototype.toString.call(obj) === '[object Object]' }
function isArray (obj) { return !!obj && Object.prototype.toString.call(obj) === '[object Array]' }

function addObject (_data) {
  data.push(_data)
  return data
}

function addArray (_data) {
  var added = []
  for (var i = 0; i < _data.length; i++) {
    if (isObject(_data[i])) {
      added.push(addObject(_data[i]))
    }
  }
  return added
}

function search (crit) {
  if (!crit) {
    return []
  }
  return findMatches(data, crit, opt.searchStrategy, opt)
}

function setOptions (_opt) {
  opt = _opt || {}

  opt.fuzzy = _opt.fuzzy || false
  opt.limit = _opt.limit || 10
  opt.searchStrategy = _opt.fuzzy ? FuzzySearchStrategy : LiteralSearchStrategy
}

function findMatches (data, crit, strategy, opt) {
  var entry, i, j, l, len, len1, len2, len3, m
  var matches = []
  var matchTitle = []
  var matchUrl = []
  var matchTags = []
  var dullMatches = []
  for (i = 0; i < data.length; i++) {
    var match = findMatchesInObject(data[i], crit, strategy, opt)
    if (match) {
      if (strategy.matches(data[i].title, crit)) matchTitle.push(match)
      else if (strategy.matches(data[i].tags, crit)) matchTags.push(match)
      else if (strategy.matches(data[i].url, crit)) matchUrl.push(match)
      else dullMatches.push(match)
    }
  }
  // Sort based on match
  for (i = 0, len = matchTitle.length; i < len; i++) {
    entry = matchTitle[i]
    if (matches.length < opt.limit) {
      matches.push(entry)
    } else {
      break
    }
  }

  for (j = 0, len1 = matchTags.length; j < len1; j++) {
    entry = matchTags[j]
    if (matches.length < opt.limit) {
      matches.push(entry)
    } else {
      break
    }
  }

  for (l = 0, len2 = matchUrl.length; l < len2; l++) {
    entry = matchUrl[l]
    if (matches.length < opt.limit) {
      matches.push(entry)
    } else {
      break
    }
  }

  for (m = 0, len3 = dullMatches.length; m < len3; m++) {
    entry = dullMatches[m]
    if (matches.length < opt.limit) {
      matches.push(entry)
    } else {
      break
    }
  }
  return matches
}

function findMatchesInObject (obj, crit, strategy, opt) {
  for (var key in obj) {
    if (!isExcluded(obj[key], opt.exclude) && strategy.matches(obj[key], crit)) {
      return obj
    }
  }
}

function isExcluded (term, excludedTerms) {
  var excluded = false
  excludedTerms = excludedTerms || []
  for (var i = 0; i < excludedTerms.length; i++) {
    var excludedTerm = excludedTerms[i]
    if (!excluded && new RegExp(term).test(excludedTerm)) {
      excluded = true
    }
  }
  return excluded
}

},{"./SearchStrategies/FuzzySearchStrategy":5,"./SearchStrategies/LiteralSearchStrategy":6}],5:[function(require,module,exports){
'use strict'
var fuzzysearch = require('fuzzysearch')

module.exports = new FuzzySearchStrategy()

function FuzzySearchStrategy () {
  this.matches = function (string, crit) {
    return fuzzysearch(crit, string)
  }
}

},{"fuzzysearch":1}],6:[function(require,module,exports){
'use strict'
module.exports = new LiteralSearchStrategy()

function LiteralSearchStrategy () {
  this.matches = function (string, crit) {
    if (typeof string !== 'string') {
      return false
    }
    string = string.trim()
    return string.toLowerCase().indexOf(crit.toLowerCase()) >= 0
  }
}

},{}],7:[function(require,module,exports){
'use strict'
module.exports = {
  compile: compile,
  setOptions: setOptions
}

var options = {}
options.pattern = /\{(.*?)\}/g
options.template = ''
options.middleware = function () {}

function setOptions (_options) {
  options.pattern = _options.pattern || options.pattern
  options.template = _options.template || options.template
  if (typeof _options.middleware === 'function') {
    options.middleware = _options.middleware
  }
}

function compile (data) {
  return options.template.replace(options.pattern, function (match, prop) {
    var value = options.middleware(prop, data[prop], options.template)
    if (value !== undefined) {
      return value
    }
    return data[prop] || match
  })
}

},{}],8:[function(require,module,exports){
'use strict'
;(function (window, document) {
  'use strict'

  var options = {
    searchInput: null,
    resultsContainer: null,
    json: [],
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    templateMiddleware: function () {},
    appendtoDom: true,
    postRender: function () {},
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  }

  var requiredOptions = ['searchInput', 'resultsContainer', 'json']

  var templater = require('./Templater')
  var repository = require('./Repository')
  var jsonLoader = require('./JSONLoader')
  var optionsValidator = require('./OptionsValidator')({
    required: requiredOptions
  })
  var utils = require('./utils')

  /*
    Public API
  */
  window.SimpleJekyllSearch = function SimpleJekyllSearch (_options) {
    var errors = optionsValidator.validate(_options)
    if (errors.length > 0) {
      throwError('You must specify the following required options: ' + requiredOptions)
    }

    options = utils.merge(options, _options)

    templater.setOptions({
      template: options.searchResultTemplate,
      middleware: options.templateMiddleware
    })

    repository.setOptions({
      fuzzy: options.fuzzy,
      limit: options.limit
    })

    if (utils.isJSON(options.json)) {
      initWithJSON(options.json)
    } else {
      initWithURL(options.json)
    }
  }

  // for backwards compatibility
  window.SimpleJekyllSearch.init = window.SimpleJekyllSearch

  if (typeof window.SimpleJekyllSearchInit === 'function') {
    window.SimpleJekyllSearchInit.call(this, window.SimpleJekyllSearch)
  }

  function initWithJSON (json) {
    repository.put(json)
    registerInput()
  }

  function initWithURL (url) {
    jsonLoader.load(url, function (err, json) {
      if (err) {
        throwError('failed to get JSON (' + url + ')')
      }
      initWithJSON(json)
    })
  }

  function emptyResultsContainer () {
    options.resultsContainer.innerHTML = ''
  }

  function appendToResultsContainer (text) {
    options.resultsContainer.innerHTML += text
  }

  function registerInput () {
    options.searchInput.addEventListener('keyup', function (e) {
      var key = e.which
      if (isWhitelistedKey(key)) {
        emptyResultsContainer()
        var query = e.target.value
        if (isValidQuery(query)) {
          render(repository.search(query))
        }
      }
    })
  }

  function render (results) {
    if (options.appendToDom !== false) {
      if (results.length === 0) {
        return appendToResultsContainer(options.noResultsText)
      }
      for (var i = 0; i < results.length; i++) {
        appendToResultsContainer(templater.compile(results[i]))
      }
    }
    options.postRender(results)
  }

  function isValidQuery (query) {
    return query && query.length > 0
  }

  function isWhitelistedKey (key) {
    return [13, 16, 20, 37, 38, 39, 40, 91].indexOf(key) === -1
  }

  function throwError (message) { throw new Error('SimpleJekyllSearch --- ' + message) }
})(window, document)

},{"./JSONLoader":2,"./OptionsValidator":3,"./Repository":4,"./Templater":7,"./utils":9}],9:[function(require,module,exports){
'use strict'
module.exports = {
  merge: merge,
  isJSON: isJSON
}

function merge (defaultParams, mergeParams) {
  var mergedOptions = {}
  for (var option in defaultParams) {
    mergedOptions[option] = defaultParams[option]
    if (mergeParams[option] !== undefined) {
      mergedOptions[option] = mergeParams[option]
    }
  }
  return mergedOptions
}

function isJSON (json) {
  try {
    if (json instanceof Object && JSON.parse(JSON.stringify(json))) {
      return true
    }
    return false
  } catch (e) {
    return false
  }
}

},{}]},{},[8])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9QaGlsaXAvRHJvcGJveC9HaXRIdWIvU2ltcGxlLUpla3lsbC1TZWFyY2gvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9tbnQvYy9Vc2Vycy9QaGlsaXAvRHJvcGJveC9HaXRIdWIvU2ltcGxlLUpla3lsbC1TZWFyY2gvbm9kZV9tb2R1bGVzL2Z1enp5c2VhcmNoL2luZGV4LmpzIiwiL21udC9jL1VzZXJzL1BoaWxpcC9Ecm9wYm94L0dpdEh1Yi9TaW1wbGUtSmVreWxsLVNlYXJjaC9zcmMvSlNPTkxvYWRlci5qcyIsIi9tbnQvYy9Vc2Vycy9QaGlsaXAvRHJvcGJveC9HaXRIdWIvU2ltcGxlLUpla3lsbC1TZWFyY2gvc3JjL09wdGlvbnNWYWxpZGF0b3IuanMiLCIvbW50L2MvVXNlcnMvUGhpbGlwL0Ryb3Bib3gvR2l0SHViL1NpbXBsZS1KZWt5bGwtU2VhcmNoL3NyYy9SZXBvc2l0b3J5LmpzIiwiL21udC9jL1VzZXJzL1BoaWxpcC9Ecm9wYm94L0dpdEh1Yi9TaW1wbGUtSmVreWxsLVNlYXJjaC9zcmMvU2VhcmNoU3RyYXRlZ2llcy9GdXp6eVNlYXJjaFN0cmF0ZWd5LmpzIiwiL21udC9jL1VzZXJzL1BoaWxpcC9Ecm9wYm94L0dpdEh1Yi9TaW1wbGUtSmVreWxsLVNlYXJjaC9zcmMvU2VhcmNoU3RyYXRlZ2llcy9MaXRlcmFsU2VhcmNoU3RyYXRlZ3kuanMiLCIvbW50L2MvVXNlcnMvUGhpbGlwL0Ryb3Bib3gvR2l0SHViL1NpbXBsZS1KZWt5bGwtU2VhcmNoL3NyYy9UZW1wbGF0ZXIuanMiLCIvbW50L2MvVXNlcnMvUGhpbGlwL0Ryb3Bib3gvR2l0SHViL1NpbXBsZS1KZWt5bGwtU2VhcmNoL3NyYy9mYWtlX2U5MTAzZWJiLmpzIiwiL21udC9jL1VzZXJzL1BoaWxpcC9Ecm9wYm94L0dpdEh1Yi9TaW1wbGUtSmVreWxsLVNlYXJjaC9zcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZ1enp5c2VhcmNoIChuZWVkbGUsIGhheXN0YWNrKSB7XG4gIHZhciB0bGVuID0gaGF5c3RhY2subGVuZ3RoO1xuICB2YXIgcWxlbiA9IG5lZWRsZS5sZW5ndGg7XG4gIGlmIChxbGVuID4gdGxlbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAocWxlbiA9PT0gdGxlbikge1xuICAgIHJldHVybiBuZWVkbGUgPT09IGhheXN0YWNrO1xuICB9XG4gIG91dGVyOiBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBxbGVuOyBpKyspIHtcbiAgICB2YXIgbmNoID0gbmVlZGxlLmNoYXJDb2RlQXQoaSk7XG4gICAgd2hpbGUgKGogPCB0bGVuKSB7XG4gICAgICBpZiAoaGF5c3RhY2suY2hhckNvZGVBdChqKyspID09PSBuY2gpIHtcbiAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdXp6eXNlYXJjaDtcbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvYWQ6IGxvYWRcbn1cblxuZnVuY3Rpb24gbG9hZCAobG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciB4aHIgPSBnZXRYSFIoKVxuICB4aHIub3BlbignR0VUJywgbG9jYXRpb24sIHRydWUpXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBjcmVhdGVTdGF0ZUNoYW5nZUxpc3RlbmVyKHhociwgY2FsbGJhY2spXG4gIHhoci5zZW5kKClcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhdGVDaGFuZ2VMaXN0ZW5lciAoeGhyLCBjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRYSFIgKCkge1xuICByZXR1cm4gKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpXG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gT3B0aW9uc1ZhbGlkYXRvciAocGFyYW1zKSB7XG4gIGlmICghdmFsaWRhdGVQYXJhbXMocGFyYW1zKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignLS0gT3B0aW9uc1ZhbGlkYXRvcjogcmVxdWlyZWQgb3B0aW9ucyBtaXNzaW5nJylcbiAgfVxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgT3B0aW9uc1ZhbGlkYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbnNWYWxpZGF0b3IocGFyYW1zKVxuICB9XG5cbiAgdmFyIHJlcXVpcmVkT3B0aW9ucyA9IHBhcmFtcy5yZXF1aXJlZFxuXG4gIHRoaXMuZ2V0UmVxdWlyZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXF1aXJlZE9wdGlvbnNcbiAgfVxuXG4gIHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgIHZhciBlcnJvcnMgPSBbXVxuICAgIHJlcXVpcmVkT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlZE9wdGlvbk5hbWUpIHtcbiAgICAgIGlmIChwYXJhbWV0ZXJzW3JlcXVpcmVkT3B0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcnMucHVzaChyZXF1aXJlZE9wdGlvbk5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVBhcmFtcyAocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zLnJlcXVpcmVkICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zLnJlcXVpcmVkIGluc3RhbmNlb2YgQXJyYXlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHV0OiBwdXQsXG4gIGNsZWFyOiBjbGVhcixcbiAgZ2V0OiBnZXQsXG4gIHNlYXJjaDogc2VhcmNoLFxuICBzZXRPcHRpb25zOiBzZXRPcHRpb25zXG59XG5cbnZhciBGdXp6eVNlYXJjaFN0cmF0ZWd5ID0gcmVxdWlyZSgnLi9TZWFyY2hTdHJhdGVnaWVzL0Z1enp5U2VhcmNoU3RyYXRlZ3knKVxudmFyIExpdGVyYWxTZWFyY2hTdHJhdGVneSA9IHJlcXVpcmUoJy4vU2VhcmNoU3RyYXRlZ2llcy9MaXRlcmFsU2VhcmNoU3RyYXRlZ3knKVxuXG52YXIgZGF0YSA9IFtdXG52YXIgb3B0ID0ge31cbm9wdC5mdXp6eSA9IGZhbHNlXG5vcHQubGltaXQgPSAxMFxub3B0LnNlYXJjaFN0cmF0ZWd5ID0gb3B0LmZ1enp5ID8gRnV6enlTZWFyY2hTdHJhdGVneSA6IExpdGVyYWxTZWFyY2hTdHJhdGVneVxuXG5mdW5jdGlvbiBwdXQgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgcmV0dXJuIGFkZE9iamVjdChkYXRhKVxuICB9XG4gIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgcmV0dXJuIGFkZEFycmF5KGRhdGEpXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuZnVuY3Rpb24gY2xlYXIgKCkge1xuICBkYXRhLmxlbmd0aCA9IDBcbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0ICgpIHtcbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikgeyByZXR1cm4gISFvYmogJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nIH1cbmZ1bmN0aW9uIGlzQXJyYXkgKG9iaikgeyByZXR1cm4gISFvYmogJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XScgfVxuXG5mdW5jdGlvbiBhZGRPYmplY3QgKF9kYXRhKSB7XG4gIGRhdGEucHVzaChfZGF0YSlcbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gYWRkQXJyYXkgKF9kYXRhKSB7XG4gIHZhciBhZGRlZCA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNPYmplY3QoX2RhdGFbaV0pKSB7XG4gICAgICBhZGRlZC5wdXNoKGFkZE9iamVjdChfZGF0YVtpXSkpXG4gICAgfVxuICB9XG4gIHJldHVybiBhZGRlZFxufVxuXG5mdW5jdGlvbiBzZWFyY2ggKGNyaXQpIHtcbiAgaWYgKCFjcml0KSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIGZpbmRNYXRjaGVzKGRhdGEsIGNyaXQsIG9wdC5zZWFyY2hTdHJhdGVneSwgb3B0KVxufVxuXG5mdW5jdGlvbiBzZXRPcHRpb25zIChfb3B0KSB7XG4gIG9wdCA9IF9vcHQgfHwge31cblxuICBvcHQuZnV6enkgPSBfb3B0LmZ1enp5IHx8IGZhbHNlXG4gIG9wdC5saW1pdCA9IF9vcHQubGltaXQgfHwgMTBcbiAgb3B0LnNlYXJjaFN0cmF0ZWd5ID0gX29wdC5mdXp6eSA/IEZ1enp5U2VhcmNoU3RyYXRlZ3kgOiBMaXRlcmFsU2VhcmNoU3RyYXRlZ3lcbn1cblxuZnVuY3Rpb24gZmluZE1hdGNoZXMgKGRhdGEsIGNyaXQsIHN0cmF0ZWd5LCBvcHQpIHtcbiAgdmFyIGVudHJ5LCBpLCBqLCBsLCBsZW4sIGxlbjEsIGxlbjIsIGxlbjMsIG1cbiAgdmFyIG1hdGNoZXMgPSBbXVxuICB2YXIgbWF0Y2hUaXRsZSA9IFtdXG4gIHZhciBtYXRjaFVybCA9IFtdXG4gIHZhciBtYXRjaFRhZ3MgPSBbXVxuICB2YXIgZHVsbE1hdGNoZXMgPSBbXVxuICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtYXRjaCA9IGZpbmRNYXRjaGVzSW5PYmplY3QoZGF0YVtpXSwgY3JpdCwgc3RyYXRlZ3ksIG9wdClcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlmIChzdHJhdGVneS5tYXRjaGVzKGRhdGFbaV0udGl0bGUsIGNyaXQpKSBtYXRjaFRpdGxlLnB1c2gobWF0Y2gpXG4gICAgICBlbHNlIGlmIChzdHJhdGVneS5tYXRjaGVzKGRhdGFbaV0udGFncywgY3JpdCkpIG1hdGNoVGFncy5wdXNoKG1hdGNoKVxuICAgICAgZWxzZSBpZiAoc3RyYXRlZ3kubWF0Y2hlcyhkYXRhW2ldLnVybCwgY3JpdCkpIG1hdGNoVXJsLnB1c2gobWF0Y2gpXG4gICAgICBlbHNlIGR1bGxNYXRjaGVzLnB1c2gobWF0Y2gpXG4gICAgfVxuICB9XG4gIC8vIFNvcnQgYmFzZWQgb24gbWF0Y2hcbiAgZm9yIChpID0gMCwgbGVuID0gbWF0Y2hUaXRsZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGVudHJ5ID0gbWF0Y2hUaXRsZVtpXVxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA8IG9wdC5saW1pdCkge1xuICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaiA9IDAsIGxlbjEgPSBtYXRjaFRhZ3MubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgZW50cnkgPSBtYXRjaFRhZ3Nbal1cbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPCBvcHQubGltaXQpIHtcbiAgICAgIG1hdGNoZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBmb3IgKGwgPSAwLCBsZW4yID0gbWF0Y2hVcmwubGVuZ3RoOyBsIDwgbGVuMjsgbCsrKSB7XG4gICAgZW50cnkgPSBtYXRjaFVybFtsXVxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA8IG9wdC5saW1pdCkge1xuICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGZvciAobSA9IDAsIGxlbjMgPSBkdWxsTWF0Y2hlcy5sZW5ndGg7IG0gPCBsZW4zOyBtKyspIHtcbiAgICBlbnRyeSA9IGR1bGxNYXRjaGVzW21dXG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoIDwgb3B0LmxpbWl0KSB7XG4gICAgICBtYXRjaGVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVzXG59XG5cbmZ1bmN0aW9uIGZpbmRNYXRjaGVzSW5PYmplY3QgKG9iaiwgY3JpdCwgc3RyYXRlZ3ksIG9wdCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCFpc0V4Y2x1ZGVkKG9ialtrZXldLCBvcHQuZXhjbHVkZSkgJiYgc3RyYXRlZ3kubWF0Y2hlcyhvYmpba2V5XSwgY3JpdCkpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeGNsdWRlZCAodGVybSwgZXhjbHVkZWRUZXJtcykge1xuICB2YXIgZXhjbHVkZWQgPSBmYWxzZVxuICBleGNsdWRlZFRlcm1zID0gZXhjbHVkZWRUZXJtcyB8fCBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV4Y2x1ZGVkVGVybXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZXhjbHVkZWRUZXJtID0gZXhjbHVkZWRUZXJtc1tpXVxuICAgIGlmICghZXhjbHVkZWQgJiYgbmV3IFJlZ0V4cCh0ZXJtKS50ZXN0KGV4Y2x1ZGVkVGVybSkpIHtcbiAgICAgIGV4Y2x1ZGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXhjbHVkZWRcbn1cbiIsIid1c2Ugc3RyaWN0J1xudmFyIGZ1enp5c2VhcmNoID0gcmVxdWlyZSgnZnV6enlzZWFyY2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBGdXp6eVNlYXJjaFN0cmF0ZWd5KClcblxuZnVuY3Rpb24gRnV6enlTZWFyY2hTdHJhdGVneSAoKSB7XG4gIHRoaXMubWF0Y2hlcyA9IGZ1bmN0aW9uIChzdHJpbmcsIGNyaXQpIHtcbiAgICByZXR1cm4gZnV6enlzZWFyY2goY3JpdCwgc3RyaW5nKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gbmV3IExpdGVyYWxTZWFyY2hTdHJhdGVneSgpXG5cbmZ1bmN0aW9uIExpdGVyYWxTZWFyY2hTdHJhdGVneSAoKSB7XG4gIHRoaXMubWF0Y2hlcyA9IGZ1bmN0aW9uIChzdHJpbmcsIGNyaXQpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBzdHJpbmcgPSBzdHJpbmcudHJpbSgpXG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY3JpdC50b0xvd2VyQ2FzZSgpKSA+PSAwXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBpbGU6IGNvbXBpbGUsXG4gIHNldE9wdGlvbnM6IHNldE9wdGlvbnNcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy5wYXR0ZXJuID0gL1xceyguKj8pXFx9L2dcbm9wdGlvbnMudGVtcGxhdGUgPSAnJ1xub3B0aW9ucy5taWRkbGV3YXJlID0gZnVuY3Rpb24gKCkge31cblxuZnVuY3Rpb24gc2V0T3B0aW9ucyAoX29wdGlvbnMpIHtcbiAgb3B0aW9ucy5wYXR0ZXJuID0gX29wdGlvbnMucGF0dGVybiB8fCBvcHRpb25zLnBhdHRlcm5cbiAgb3B0aW9ucy50ZW1wbGF0ZSA9IF9vcHRpb25zLnRlbXBsYXRlIHx8IG9wdGlvbnMudGVtcGxhdGVcbiAgaWYgKHR5cGVvZiBfb3B0aW9ucy5taWRkbGV3YXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5taWRkbGV3YXJlID0gX29wdGlvbnMubWlkZGxld2FyZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUgKGRhdGEpIHtcbiAgcmV0dXJuIG9wdGlvbnMudGVtcGxhdGUucmVwbGFjZShvcHRpb25zLnBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCwgcHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnMubWlkZGxld2FyZShwcm9wLCBkYXRhW3Byb3BdLCBvcHRpb25zLnRlbXBsYXRlKVxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFbcHJvcF0gfHwgbWF0Y2hcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuOyhmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBzZWFyY2hJbnB1dDogbnVsbCxcbiAgICByZXN1bHRzQ29udGFpbmVyOiBudWxsLFxuICAgIGpzb246IFtdLFxuICAgIHNlYXJjaFJlc3VsdFRlbXBsYXRlOiAnPGxpPjxhIGhyZWY9XCJ7dXJsfVwiIHRpdGxlPVwie2Rlc2N9XCI+e3RpdGxlfTwvYT48L2xpPicsXG4gICAgdGVtcGxhdGVNaWRkbGV3YXJlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBhcHBlbmR0b0RvbTogdHJ1ZSxcbiAgICBwb3N0UmVuZGVyOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3VuZCcsXG4gICAgbGltaXQ6IDEwLFxuICAgIGZ1enp5OiBmYWxzZSxcbiAgICBleGNsdWRlOiBbXVxuICB9XG5cbiAgdmFyIHJlcXVpcmVkT3B0aW9ucyA9IFsnc2VhcmNoSW5wdXQnLCAncmVzdWx0c0NvbnRhaW5lcicsICdqc29uJ11cblxuICB2YXIgdGVtcGxhdGVyID0gcmVxdWlyZSgnLi9UZW1wbGF0ZXInKVxuICB2YXIgcmVwb3NpdG9yeSA9IHJlcXVpcmUoJy4vUmVwb3NpdG9yeScpXG4gIHZhciBqc29uTG9hZGVyID0gcmVxdWlyZSgnLi9KU09OTG9hZGVyJylcbiAgdmFyIG9wdGlvbnNWYWxpZGF0b3IgPSByZXF1aXJlKCcuL09wdGlvbnNWYWxpZGF0b3InKSh7XG4gICAgcmVxdWlyZWQ6IHJlcXVpcmVkT3B0aW9uc1xuICB9KVxuICB2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuICAvKlxuICAgIFB1YmxpYyBBUElcbiAgKi9cbiAgd2luZG93LlNpbXBsZUpla3lsbFNlYXJjaCA9IGZ1bmN0aW9uIFNpbXBsZUpla3lsbFNlYXJjaCAoX29wdGlvbnMpIHtcbiAgICB2YXIgZXJyb3JzID0gb3B0aW9uc1ZhbGlkYXRvci52YWxpZGF0ZShfb3B0aW9ucylcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93RXJyb3IoJ1lvdSBtdXN0IHNwZWNpZnkgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBvcHRpb25zOiAnICsgcmVxdWlyZWRPcHRpb25zKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSB1dGlscy5tZXJnZShvcHRpb25zLCBfb3B0aW9ucylcblxuICAgIHRlbXBsYXRlci5zZXRPcHRpb25zKHtcbiAgICAgIHRlbXBsYXRlOiBvcHRpb25zLnNlYXJjaFJlc3VsdFRlbXBsYXRlLFxuICAgICAgbWlkZGxld2FyZTogb3B0aW9ucy50ZW1wbGF0ZU1pZGRsZXdhcmVcbiAgICB9KVxuXG4gICAgcmVwb3NpdG9yeS5zZXRPcHRpb25zKHtcbiAgICAgIGZ1enp5OiBvcHRpb25zLmZ1enp5LFxuICAgICAgbGltaXQ6IG9wdGlvbnMubGltaXRcbiAgICB9KVxuXG4gICAgaWYgKHV0aWxzLmlzSlNPTihvcHRpb25zLmpzb24pKSB7XG4gICAgICBpbml0V2l0aEpTT04ob3B0aW9ucy5qc29uKVxuICAgIH0gZWxzZSB7XG4gICAgICBpbml0V2l0aFVSTChvcHRpb25zLmpzb24pXG4gICAgfVxuICB9XG5cbiAgLy8gZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIHdpbmRvdy5TaW1wbGVKZWt5bGxTZWFyY2guaW5pdCA9IHdpbmRvdy5TaW1wbGVKZWt5bGxTZWFyY2hcblxuICBpZiAodHlwZW9mIHdpbmRvdy5TaW1wbGVKZWt5bGxTZWFyY2hJbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgd2luZG93LlNpbXBsZUpla3lsbFNlYXJjaEluaXQuY2FsbCh0aGlzLCB3aW5kb3cuU2ltcGxlSmVreWxsU2VhcmNoKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFdpdGhKU09OIChqc29uKSB7XG4gICAgcmVwb3NpdG9yeS5wdXQoanNvbilcbiAgICByZWdpc3RlcklucHV0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRXaXRoVVJMICh1cmwpIHtcbiAgICBqc29uTG9hZGVyLmxvYWQodXJsLCBmdW5jdGlvbiAoZXJyLCBqc29uKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRocm93RXJyb3IoJ2ZhaWxlZCB0byBnZXQgSlNPTiAoJyArIHVybCArICcpJylcbiAgICAgIH1cbiAgICAgIGluaXRXaXRoSlNPTihqc29uKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBlbXB0eVJlc3VsdHNDb250YWluZXIgKCkge1xuICAgIG9wdGlvbnMucmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kVG9SZXN1bHRzQ29udGFpbmVyICh0ZXh0KSB7XG4gICAgb3B0aW9ucy5yZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCArPSB0ZXh0XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcklucHV0ICgpIHtcbiAgICBvcHRpb25zLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBrZXkgPSBlLndoaWNoXG4gICAgICBpZiAoaXNXaGl0ZWxpc3RlZEtleShrZXkpKSB7XG4gICAgICAgIGVtcHR5UmVzdWx0c0NvbnRhaW5lcigpXG4gICAgICAgIHZhciBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIGlmIChpc1ZhbGlkUXVlcnkocXVlcnkpKSB7XG4gICAgICAgICAgcmVuZGVyKHJlcG9zaXRvcnkuc2VhcmNoKHF1ZXJ5KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIgKHJlc3VsdHMpIHtcbiAgICBpZiAob3B0aW9ucy5hcHBlbmRUb0RvbSAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYXBwZW5kVG9SZXN1bHRzQ29udGFpbmVyKG9wdGlvbnMubm9SZXN1bHRzVGV4dClcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcHBlbmRUb1Jlc3VsdHNDb250YWluZXIodGVtcGxhdGVyLmNvbXBpbGUocmVzdWx0c1tpXSkpXG4gICAgICB9XG4gICAgfVxuICAgIG9wdGlvbnMucG9zdFJlbmRlcihyZXN1bHRzKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZFF1ZXJ5IChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSAmJiBxdWVyeS5sZW5ndGggPiAwXG4gIH1cblxuICBmdW5jdGlvbiBpc1doaXRlbGlzdGVkS2V5IChrZXkpIHtcbiAgICByZXR1cm4gWzEzLCAxNiwgMjAsIDM3LCAzOCwgMzksIDQwLCA5MV0uaW5kZXhPZihrZXkpID09PSAtMVxuICB9XG5cbiAgZnVuY3Rpb24gdGhyb3dFcnJvciAobWVzc2FnZSkgeyB0aHJvdyBuZXcgRXJyb3IoJ1NpbXBsZUpla3lsbFNlYXJjaCAtLS0gJyArIG1lc3NhZ2UpIH1cbn0pKHdpbmRvdywgZG9jdW1lbnQpXG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXJnZTogbWVyZ2UsXG4gIGlzSlNPTjogaXNKU09OXG59XG5cbmZ1bmN0aW9uIG1lcmdlIChkZWZhdWx0UGFyYW1zLCBtZXJnZVBhcmFtcykge1xuICB2YXIgbWVyZ2VkT3B0aW9ucyA9IHt9XG4gIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0UGFyYW1zKSB7XG4gICAgbWVyZ2VkT3B0aW9uc1tvcHRpb25dID0gZGVmYXVsdFBhcmFtc1tvcHRpb25dXG4gICAgaWYgKG1lcmdlUGFyYW1zW29wdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVyZ2VkT3B0aW9uc1tvcHRpb25dID0gbWVyZ2VQYXJhbXNbb3B0aW9uXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkT3B0aW9uc1xufVxuXG5mdW5jdGlvbiBpc0pTT04gKGpzb24pIHtcbiAgdHJ5IHtcbiAgICBpZiAoanNvbiBpbnN0YW5jZW9mIE9iamVjdCAmJiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGpzb24pKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl19
