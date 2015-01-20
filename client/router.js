Router.route('/', function () {
  this.render('pageFront')
})

Router.route('/blog', function () {
  var self = this
  var queryHash = this.params.query
  var limit = parseInt(queryHash.limit)
  var skip = parseInt(queryHash.skip)
  Meteor.call('getPosts', limit, skip, function (err, posts) {
    if(!err) {
      posts = EJSON.parse(posts)
      self.render('pageBlog', {data: { posts: posts}})
    }
  })
})