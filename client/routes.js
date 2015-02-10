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
    self.render('pageJournal')
  }
})

Router.route('/journal/post/:title', {
  name: 'journal.post'
, action: function () {
    var self = this
  , postUrlTitle = self.params.title
    Meteor.call('getSinglePostByTitle', postUrlTitle, function (err, post) {
      if(err) throw err
      self.render('pagePost', {data: post})
    })
  }
})