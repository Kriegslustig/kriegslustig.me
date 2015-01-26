Meteor.methods({
  getPosts: function (limit, skip) {
    return []
  }
})

Template.pageJournal.helpers({
  listPosts: function () {
    var controller = Iron.controller()
  , queryDict = controller.params.query
  , limit = (!isNaN(queryDict.limit) ? parseInt(queryDict.limit) : 10)
  , skip = (!isNaN(queryDict.skip) ? parseInt(queryDict.skip) : 0)
  , posts = getPosts(limit, skip)
    return posts
  }
})