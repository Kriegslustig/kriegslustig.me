findIn = function (someObject /*, target */) {
  var target = _.rest(arguments)
  var currentObject = someObject
  for(it = 0; it < target.length; it++) {
    if (!(currentObject = currentObject[target[it]])) break
  }
  return currentObject || false
}

get_setting = function (fallback /*, keys...*/) {
  var keys = _.rest(arguments)
  return findIn.apply(null, [Meteor.settings].concat(keys)) || fallback
}

createAnchor = function (url, label, classes) {
  return '<a href="' + Meteor.absoluteUrl(url) + '" class="' + (classes ? classes : '') + '">' + label + '</a>'
}

linkToJournal = function (new_skip, label) {
  return createAnchor('journal/' + new_skip, label)
}

renderNextLink = function (entryCount, skip, limit) {
  if((skip + limit) > entryCount) return ''
  skip_entries = skip + limit
  return linkToJournal(skip_entries, 'next')
}

renderPrevLink = function (skip, limit) {
  if(skip < 1) return ''
    skip_entries = (skip - limit) > 0 ? skip - limit : 0
  return linkToJournal(skip_entries, 'prev')
}