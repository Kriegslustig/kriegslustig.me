Meteor.publish('journalEntries', function (limit, skip) {
  var filter = {}
  var options = {
    fields: {
      'title': 1,
      'teaser': 1,
      'published': 1,
      'createdAt': 1
    },
    sort: [['published', 'asc'], ['createdAt', 'desc']]
  }
  if(limit) options.limit = limit
  if(skip) options.skip = skip
  if(!this.userId) filter.published = true
  return JournalEntries.find(filter, options)
})

Meteor.publish('journalEntry', function (title) {
  return JournalEntries.find({title: title})
})

Meteor.publish('allUsers', function () {
  return Meteor.users.find()
})
