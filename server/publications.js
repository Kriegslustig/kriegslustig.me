Meteor.publish('journal_entries', function (limit) {
  return Journal_entries.find({}, {
    limit: limit,
    fields: {
      'title': 1,
      'teaser': 1
    }
  })
})

Meteor.publish('journal_entry', function (title) {
  return Journal_entries.find({title: title})
})