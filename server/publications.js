Meteor.publish('journalEntries', function () {
  return JournalEntries.find(
    this.userId
      ? {}
      : { published: true },
    {
      fields: {
        'title': 1,
        'teaser': 1,
        'published': 1,
        'createdAt': 1
      },
      sort: [['published', 'asc'], ['createdAt', 'desc']]
    }
  )
})

Meteor.publish('journalEntry', function (title) {
  return JournalEntries.find({title: title})
})

Meteor.publish('allUsers', function () {
  return Meteor.users.find()
})
