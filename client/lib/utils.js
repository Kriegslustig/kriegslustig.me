green_flash = function () {
  var someElement = document.createElement('div')
  someElement.className = 'green_flash'
  document.body.appendChild(someElement)
  someElement.style.background = "hsl(120, 80%, 90%)"
  setTimeout(function () {
    someElement.style.background = ""
    document.body.removeChild(someElement)
  }, 60)
}