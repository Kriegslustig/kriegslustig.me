Router.route('/json/journal', function () {
  var self = this
  self.response.end(JSON.stringify(JournalEntries.find({published: true}).fetch()))
}, {where: 'server'})

Router.route('/json/journal/:title', function () {
  var self = this
  self.response.end(JSON.stringify(JournalEntries.findOne({title: self.params.title})))
}, {where: 'server'})