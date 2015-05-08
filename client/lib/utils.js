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
