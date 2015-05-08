Template.journal.onCreated(function () {
  var self = this
  self.subscribe('journal_entries', 10)
})

Template.journal.helpers({
  journal_entries: function () {
    return Journal_entries.find({}, {sort: [['createdAt', 'desc']]})
  }
})