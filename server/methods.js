Meteor.methods({
  getPosts: function (limit, skip) {
    skip = skip || 0
    limit = limit || 10
    return EJSON.stringify(
      orion.entities.posts.collection.find({}, {
        sort: {createdAt: -1}
      , limit: limit
      , skip: skip
      }).fetch()
    )
  }
})