
var route = IsoRouter.route('/json/journal')
  .action(Meteor.bindEnvironment(function (params) {
      route.res.end(JSON.stringify(JournalEntries.find({published: true}).fetch()))
  }), () => {}, global.route)

var routeSingle = IsoRouter.route('/json/journal/:title')
  .action(Meteor.bindEnvironment(function (params) {
      routeSingle.res.end(JSON.stringify(JournalEntries.findOne({title: decodeURIComponent(params.title)})))
  }), () => {}, global.routeSingle)
