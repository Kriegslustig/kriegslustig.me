Meteor.methods({
  getPosts: function (limit, skip) {
    return EJSON.stringify(getPosts(limit, skip))
  }
, getPosts: function (limit, skip) {
    return EJSON.stringify(getPosts(limit, skip))
  }
, getPagerParams: function (limit, skip) {
    return EJSON.stringify(getPagerParams(limit, skip))
  }
, getNextPosts: function () {
    return EJSON.stringify(getNextPosts())
  }
, getSinglePostByTitle: function (title) {
    title =  decodeURIComponent(title)
    return EJSON.stringify(getSinglePostByTitle(title))
  }
})