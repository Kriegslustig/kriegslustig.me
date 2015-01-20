Router.route('/', function () {
  this.render('pageFront')
})

Router.route('/blog', function () {
  var self = this
  Meteor.call('getPosts', function (err, posts) {
    if(!err) {
      console.log(posts)
      posts = EJSON.parse(posts)
      self.render('pageBlog', {data: { posts: posts}})
    }
  })
})