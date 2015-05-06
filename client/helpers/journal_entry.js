Template.journal_entry.onCreated(function () {
  var self = this
  self.subscribe('journal_entry', decodeURIComponent(self.data.title))
})