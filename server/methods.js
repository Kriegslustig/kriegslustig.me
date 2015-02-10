Meteor.methods({
  getPosts: function (limit, skip) {
    return getPosts(limit, skip)
  }
, getSinglePostByTitle: function (title) {
    return getSinglePostByTitle(title)
  }
})