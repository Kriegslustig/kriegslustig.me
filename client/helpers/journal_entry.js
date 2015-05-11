Template.journalEntry.onCreated(function () {
  var self = this
  self.subscribe('journalEntry', decodeURIComponent(self.data.title))
})