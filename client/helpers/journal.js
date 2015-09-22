Template.journal.onCreated(function () {
  var self = this
  Tracker.autorun(function () {
    self.subscribe('journalEntries')
  })
})

Template.journal.helpers({
  journalEntries: function () {
    return JournalEntries.find()
  }
})
