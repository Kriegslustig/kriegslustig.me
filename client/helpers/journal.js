Template.journal.onCreated(function () {
  var self = this
  self.subscribe('journal_entries', get_setting(10, 'public', 'posts_per_page'), skip_entries)
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
  Meteor.call('getEntryCount', function (err, entryCount) {
    if(err) return
    pager.innerHTML += renderPrevLink(skip_entries, limit)
    pager.innerHTML = renderNextLink(entryCount, skip_entries, limit)
  })
})