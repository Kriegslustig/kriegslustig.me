_postsListListener = new Tracker.Dependency()
postsList = []

Template.pageJournal.helpers({
  postList: function () {
    var controller = Iron.controller()
  , queryDict = controller.params.query
  , limit = queryDict.limit || _postLimit
  , skip = (!isNaN(queryDict.skip) ? parseInt(queryDict.skip) : 0)

    _postLimit = limit
    _postLimitListeners.depend()

    Meteor.call('getPosts', limit, skip, function (err, postsListReturned) {
      if(err) throw err
      postsList = postsListReturned
      _postsListListener.changed()
    })

    _postsListListener.depend()
    return postsList
  }
, morePosts: function () {
    _postLimitListeners.depend()
    return _postLimit >= getPostsCount() ? false : true
  }
})

Template.registerHelper('setMetaTitle', function(/**/) {
  argumentsArr = Array.prototype.slice.call(arguments, 0, arguments.length - 1)
  document.title = 'Kriegslustig | ' + argumentsArr.join('')
})