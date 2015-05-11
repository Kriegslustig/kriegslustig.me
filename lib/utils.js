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