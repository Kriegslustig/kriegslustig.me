Template.journal.onCreated(function () {
  var self = this
  Tracker.autorun(function () {
    self.subscribe('journal_entries', get_setting(10, 'public', 'posts_per_page'), Session.get('skip_entries'))
  })
})

Template.journal.helpers({
  journal_entries: function () {
    return Journal_entries.find()
  }
})

Template.journal.onRendered(function () {
  var self = this
  var pager = self.find('.pager')
  var limit = get_setting(10, 'public', 'posts_per_page')
  Meteor.call('getEntryCount', function (err, currEntryCount) {
    if(err) return
    Session.set('entryCount', currEntryCount)
    Tracker.autorun(function () {
      createPager(pager, currEntryCount, Session.get('skip_entries'), limit)
    })
  })
})

Template.journal.events({
  'click .pager > a': function () {
    scrollTo(0, 0)
  }
})