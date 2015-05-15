function flash (someColor) {
  var someElement = document.createElement('div')
  someElement.className = 'greenFlash'
  document.body.appendChild(someElement)
  someElement.style.background = someColor
  setTimeout(function () {
    someElement.style.background = ""
    document.body.removeChild(someElement)
  }, 60)
}

greenFlash = function () {
  flash("hsl(120, 80%, 90%)")
}

redFlash = function () {
  flash("hsl(10, 80%, 90%)")
}

createAnchor = function (url, label, classes) {
  return '<a href="' + Meteor.absoluteUrl(url) + '" class="' + (classes ? classes : '') + '">' + label + '</a>'
}

linkToJournal = function (newSkip, label) {
  return createAnchor('journal?skip=' + newSkip, label)
}

renderNextLink = function (currEntryCount, skip, limit) {
  if((skip + limit) > currEntryCount) return ''
  var newSkip = skip + limit
  return linkToJournal(newSkip, 'next')
}

renderPrevLink = function (skip, limit) {
  if(skip < 1) return ''
  var newSkip = (skip - limit) > 0 ? skip - limit : 0
  return linkToJournal(newSkip, 'prev')
}

createPager = function (parentNode, currEntryCount, skip, limit) {
  parentNode.innerHTML = renderPrevLink(skip, limit)
  parentNode.innerHTML += renderNextLink(currEntryCount, skip, limit)
  return false
}

markFailed = function (parentNode, invalidFields) {
  _.each(parentNode.children, classRemover('invalid'))
  _.each(invalidFields, extractorFromObject('name', classAdderToElemName(parentNode, 'invalid')))
}

classAdderToElemName = function (parentNode, thisClass) {
  return function (elementName) {
    var element
    if(element = parentNode.querySelector('[name=' + elementName + ']')) {
      element.className += (' ' + thisClass)
      return element
    } else {
      return null
    }
  }
}

extractorFromObject = function (key, someFun) {
  return function (someObject) {
    return someFun(someObject[key])
  }
}

addClass = function (element, thisClass) {
  if(!hasClass(element, thisClass)) element.className += ' ' + thisClass
  return element
}

removeClass = function (element, thisClass) {
  if(!hasClass(element, thisClass)) return element
  element.className = element.className.split(thisClass).join('')
  return element
}

classRemover = function (thisClass) {
  return function (element) {
    return removeClass(element, thisClass)
  }
}

hasClass = function (element, thisClass) {
  return (element.className.indexOf(thisClass) > -1)
}