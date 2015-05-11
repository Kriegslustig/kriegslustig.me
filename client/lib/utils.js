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
  return createAnchor('journal/' + new_skip, label)
}

renderNextLink = function (entryCount, skip, limit) {
  console.log(skip, limit)
  if((skip + limit) > entryCount) return ''
  skip_entries = skip + limit
  return linkToJournal(skip_entries, 'next')
}

renderPrevLink = function (skip, limit) {
  if(skip < 1) return ''
    skip_entries = (skip - limit) > 0 ? skip - limit : 0
  return linkToJournal(skip_entries, 'prev')
}