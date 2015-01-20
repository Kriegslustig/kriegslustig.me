Meteor.methods({
  getPosts: function (limit, skip) {
    var posts = []
    skip = skip || 0
    limit = limit || 10
    orion.entities.posts.collection.find({}, {
      sort: {createdAt: -1}
    , limit: limit
    , skip: skip
    }).forEach(function (post) {
      post.link = '/journal/post/' + encodeURIComponent(post.title)
      posts.push(post)
    })

    return EJSON.stringify(posts)
  }
, getSinglePost: function (urlTitle) {
    var title = decodeURIComponent(urlTitle)
    return EJSON.stringify(
      orion.entities.posts.collection.findOne({title: title})
    )
  }
})