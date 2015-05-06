Template.journal.onCreated(function () {
  var self = this
  self.subscribe('journal_entries', 10)
})

Template.journal.helpers({
  journal_entries: function () {
    console.log(Journal_entries.find({}).fetch())
    return Journal_entries.find()
  }
})