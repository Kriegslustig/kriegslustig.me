Template.registerHelper('entry', function () {
    return Journal_entries.findOne()
})

Template.registerHelper('checkboxChecked', function (value) {
    return value ? 'checked="checked"' : ''
})

Template.registerHelper('not', function (value) {
  return !value
})