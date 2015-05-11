Meteor.publish('journal_entries', function (limit, skip) {
  var filter = {}
  var options = {
    fields: {
      'title': 1,
      'teaser': 1,
      'published': 1,
      'createdAt': 1
    },
    sort: [['createdAt', 'desc']]
  }
  if(limit) options.limit = limit
  if(skip) options.skip = skip
  if(!this.userId) filter.published = true
  return Journal_entries.find(filter, options)
})

Meteor.publish('journal_entry', function (title) {
  return Journal_entries.find({title: title})
})

Meteor.publish('all_users', function () {
  return Meteor.users.find()
})
