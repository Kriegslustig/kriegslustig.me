Router.route('/', function () {
  var self = this
  self.render('pageFront')
})

Router.route('/blog', function () {
  var self = this
  var queryDict = self.params.query
  var limit = parseInt(queryDict.limit)
  var skip = parseInt(queryDict.skip)
  Meteor.call('getPosts', limit, skip, function (err, posts) {
    if(!err) {
      posts = EJSON.parse(posts)
      self.render('pageBlog', {data: {posts: posts}})
    }
  })
})

Router.route('/blog/post/:title', function () {
  var self = this
  var postUrlTitle = self.params.title
  Meteor.call('getSinglePost', postUrlTitle, function (err, post) {
    if(!err) {
      post = EJSON.parse(post)
      self.render('pagePost', {data: post})
    }
  })
})