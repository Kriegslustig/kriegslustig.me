Template.pageJournal.helpers({
  postList: function () {
    var controller = Iron.controller()
  , queryDict = controller.params.query
  , limit = queryDict.limit || _postLimit
  , skip = (!isNaN(queryDict.skip) ? parseInt(queryDict.skip) : 0)

    _postLimit = limit
    _postLimitListeners.depend()
    return getPosts(limit, skip)
  }
, morePosts: function () {
    _postLimitListeners.depend()
    return _postLimit >= getPostsCount() ? false : true
  }
})

Template.registerHelper('setMetaTitle', function(title) {
  document.title = 'Kriegslustig | '+ title
})