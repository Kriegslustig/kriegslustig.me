Meteor.publish('journal_entries', function (limit) {
  return Journal_entries.find({}, {limit: limit})
})