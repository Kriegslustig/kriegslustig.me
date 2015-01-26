Router.route('/', function () {
  var self = this
  self.render('pageFront')
})

Router.route('/journal', function () {
  var self = this
, queryDict = self.params.query
, limit = (!isNaN(queryDict.limit) ? parseInt(queryDict.limit) : 10)
, skip = (!isNaN(queryDict.skip) ? parseInt(queryDict.skip) : 0)
  Meteor.call('getPosts', limit, skip, function (err, posts) {
    if(!err) {
      Meteor.call('getPagerParams', limit, skip, function (err, pager) {
        if(!err) {
          self.render('pageBlog', {data: {
            posts: EJSON.parse(posts)
          , pager: EJSON.parse(pager)
          }})
        }
      })
    }
  })
})

Router.route('/journal/post/:title', function () {
  var self = this
, postUrlTitle = self.params.title
, post = getSinglePostByTitle(postUrlTitle)
  self.render('pagePost', {data: post})
})