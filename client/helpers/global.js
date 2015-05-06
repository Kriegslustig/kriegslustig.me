Template.registerHelper('is_loggedin', function () {
  var userId_dep = new Tracker.Dependency
  var state = {}
  function get_userId () {
    userId_dep.depend()
    return state = Meteor.userId()
  }
  setInterval(function () {
    if(state != Meteor.userId()) userId_dep.changed()
  }, 100)
  return state
})

Template.registerHelper('entry', function () {
    return Journal_entries.findOne()
})