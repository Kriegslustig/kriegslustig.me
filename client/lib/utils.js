function flash (someColor) {
  var someElement = document.createElement('div')
  someElement.className = 'green_flash'
  document.body.appendChild(someElement)
  someElement.style.background = someColor
  setTimeout(function () {
    someElement.style.background = ""
    document.body.removeChild(someElement)
  }, 60)
}

green_flash = function () {
  flash("hsl(120, 80%, 90%)")
}

red_flash = function () {
  flash("hsl(10, 80%, 90%)")
}

createAnchor = function (url, label, classes) {
  return '<a href="' + Meteor.absoluteUrl(url) + '" class="' + (classes ? classes : '') + '">' + label + '</a>'
}

linkToJournal = function (new_skip, label) {
  return createAnchor('journal?skip=' + new_skip, label)
}

renderNextLink = function (currEntryCount, skip, limit) {
  if((skip + limit) > currEntryCount) return ''
  var new_skip = skip + limit
  return linkToJournal(new_skip, 'next')
}

renderPrevLink = function (skip, limit) {
  if(skip < 1) return ''
  var new_skip = (skip - limit) > 0 ? skip - limit : 0
  return linkToJournal(new_skip, 'prev')
}

createPager = function (parentNode, currEntryCount, skip, limit) {
  parentNode.innerHTML = renderPrevLink(skip, limit)
  parentNode.innerHTML += renderNextLink(currEntryCount, skip, limit)
  return false
}