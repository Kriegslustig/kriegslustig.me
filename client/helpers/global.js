Template.registerHelper('entry', function () {
    return Journal_entries.findOne()
})

Template.registerHelper('checked', function (value) {
    return value ? 'checked="on"' : ''
})

Template.registerHelper('not', function (value) {
  return !value
})

Template.registerHelper('join', function (someArray, delimiter) {
  return typeof someArray == "object" ? someArray.join(delimiter) : null
})