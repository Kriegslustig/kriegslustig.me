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
      var date = new Date(post.createdAt)
      post.link = '/journal/post/' + encodeURIComponent(post.title)
      post.createdAt = date.getDate() + '.' + (date.getMonth() + 1) + '. ' +  date.getFullYear()
      posts.push(post)
    })

    return EJSON.stringify(posts)
  }
, getSinglePost: function (urlTitle) {
    var title = decodeURIComponent(urlTitle)
    var post = orion.entities.posts.collection.findOne({title: title})
    var date = new Date(post.createdAt)
    post.createdAt = date.getDate() + '.' + (date.getMonth() + 1) + '. ' +  date.getFullYear()
    return EJSON.stringify(post)
  }
, setPagerParameters: function (limit, skip) {
    var count = orion.entities.posts.collection.find({}).count()
    var pager = {}
    if(count > (limit + skip)) {
      pager.next = '/journal?skip=' + (limit + skip) + '&limit=' + limit
    }
    if(skip > 0) {
      if((skip - limit) < 1) {
        pager.previous = '/journal'
      } else {
        pager.previous = '/journal?skip=' + (skip - limit) + '&limit=' + limit
      }
    }
    return pager
  }
})