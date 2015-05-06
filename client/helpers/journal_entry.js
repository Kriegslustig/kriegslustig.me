Template.journal_entry.onCreated(function () {
  var self = this
  self.subscribe('journal_entry', decodeURIComponent(self.data.title))
})

Template.journal_entry.helpers({
  entry: function () {
    return Journal_entries.findOne()
  }
})