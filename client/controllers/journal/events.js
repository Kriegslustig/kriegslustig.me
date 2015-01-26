_postLimitListeners = new Tracker.Dependency()
_postLimit = 10

Template.pageJournal.events({
  'click .mainContent__showNext': function () {
    _postLimit = _postLimit + 1
    _postLimitListeners.changed()
  }
})

var infiniteScroller = {
  init: function () {
    var self = this
    self.setEvents()
    self.checkIfShouldLoadNew()
  }
, setEvents: function () {
    var self = this
    window.addEventListener('scroll', self.checkIfShouldLoadNew)
  }
, checkIfShouldLoadNew: function () {
    var self = this
    if(pageYOffset > (document.body.clientHeight - innerHeight - 10)) {
      _postLimit = _postLimit + 1
      _postLimitListeners.changed()
    }
  }
}

$(document).ready(function () {
  infiniteScroller.init()
})