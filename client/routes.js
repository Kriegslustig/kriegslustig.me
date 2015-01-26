Router.route('/', function () {
  var self = this
  self.render('pageFront')
})

Router.route('/journal', function () {
  var self = this
  orion.subs.subscribe('entity', 'posts')
  self.render('pageJournal')
})

Router.route('/journal/post/:title', function () {
  var self = this
, postUrlTitle = self.params.title
, post = getSinglePostByTitle(postUrlTitle)
  self.render('pagePost', {data: post})
})