Router.route('/', function () {
  var self = this
  self.render('pageFront')
})

Router.route('/journal', function () {
  var self = this
  var queryDict = self.params.query
  var limit = (!isNaN(queryDict.limit) ? parseInt(queryDict.limit) : 10)
  var skip = (!isNaN(queryDict.skip) ? parseInt(queryDict.skip) : 0)
  Meteor.call('setPagerParameters', limit, skip, function (err, pager) {
    console.log(pager)
    Meteor.call('getPosts', limit, skip, function (err, posts) {
      if(!err) {
        posts = EJSON.parse(posts)
        self.render('pageBlog', {data: {
          posts: posts
        , pager: pager
        }})
      }
    })
  })
})

Router.route('/journal/post/:title', function () {
  var self = this
  var postUrlTitle = self.params.title
  Meteor.call('getSinglePost', postUrlTitle, function (err, post) {
    if(!err) {
      post = EJSON.parse(post)
      self.render('pagePost', {data: post})
    }
  })
})