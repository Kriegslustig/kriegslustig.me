Router.route('/', {
  name: 'front'
, action: function () {
    var self = this
    self.render('pageFront')
  }
})

Router.route('/journal', {
  name: 'journal'
, action: function () {
    var self = this
    orion.subs.subscribe('entity', 'posts')
    self.render('pageJournal')
  }
})

Router.route('/journal/post/:title', {
  name: 'journal.post'
, action: function () {
    var self = this
  , postUrlTitle = self.params.title
  , post = getSinglePostByTitle(postUrlTitle)
    self.render('pagePost', {data: post})
  }
})