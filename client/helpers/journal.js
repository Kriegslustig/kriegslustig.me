Template.journal.onCreated(function () {
  var self = this
  Tracker.autorun(function () {
    self.subscribe('journalEntries', getSetting(10, 'public', 'entriesPerPage'), Session.get('skipEntries'))
  })
})

Template.journal.helpers({
  journalEntries: function () {
    return JournalEntries.find()
  }
})

Template.journal.onRendered(function () {
  var self = this
  var pager = self.find('.pager')
  var limit = getSetting(10, 'public', 'entriesPerPage')
  Meteor.call('getEntryCount', function (err, currEntryCount) {
    if(err) return
    Session.set('entryCount', currEntryCount)
    Tracker.autorun(function () {
      createPager(pager, currEntryCount, Session.get('skipEntries'), limit)
    })
  })
})

Template.journal.events({
  'click .pager > a': function () {
    scrollTo(0, 0)
  }
})