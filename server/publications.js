Meteor.publish('journal_entries', function (limit) {
  var filter = {}
  if(!this.userId) filter.published = true
  return Journal_entries.find(filter, {
    limit: limit,
    fields: {
      'title': 1,
      'teaser': 1,
      'published': 1
    }
  })
})

Meteor.publish('journal_entry', function (title) {
  return Journal_entries.find({title: title})
})

Meteor.publish('all_users', function () {
  return Meteor.users.find()
})
