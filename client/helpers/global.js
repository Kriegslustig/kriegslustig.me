Template.registerHelper('entry', function () {
    return JournalEntries.findOne()
})

Template.registerHelper('checked', function (value) {
    return value ? 'on' : null
})

Template.registerHelper('not', function (value) {
  return !value
})

Template.registerHelper('join', function (someArray, delimiter) {
  return typeof someArray == "object" ? someArray.join(delimiter) : null
})

Template.registerHelper('formatDate', function (unixTimestamp) {
  return (new Date(unixTimestamp)).toString()
})