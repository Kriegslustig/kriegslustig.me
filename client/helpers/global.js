Template.registerHelper('entry', function () {
    return Journal_entries.findOne()
})