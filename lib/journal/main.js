journalState = {
  lastDisplayedPost: 0
}

convertDate = function (thisDate) {
  var date = new Date(thisDate)
  return date.getDate() + '.' + (date.getMonth() + 1) + '. ' +  date.getFullYear()
}

getPosts = function (limit, skip) {
  var posts = []
  skip = skip || 0
  limit = limit || 10
  orion.entities.posts.collection.find({}, {
    sort: {createdAt: -1}
  , limit: limit
  , skip: skip
  }).forEach(function (post) {
    date = new Date(post.createdAt)
    post.link = '/journal/post/' + encodeURIComponent(post.title)
    post.createdAt = convertDate(post.createdAt)
    posts.push(post)
  })

  journalState.lastDisplayedPost = skip + limit - 1
  return posts
}

getNextPost = function () {
  journalState.lastDisplayedPost = journalState.lastDisplayedPost + 1
  return getPosts(1, journalState.lastDisplayedPost)[0]
}

getSinglePostByTitle = function (title) {
  post = orion.entities.posts.collection.findOne({title: title})
  post.createdAt = convertDate(post.createdAt)
  return post
}

getPagerParams = function (limit, skip) {
  var self = this
, count = getPostsCount()
, pager = {}
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

getPostsCount = function () {
  return orion.entities.posts.collection.find({}).count()
}