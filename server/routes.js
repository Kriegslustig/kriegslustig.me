IsoRouter.route('/json/journal')
  .action(function (params) {
    this.res.end(JSON.stringify(JournalEntries.find({published: true}).fetch()))
  })

IsoRouter.route('/json/journal/:title')
  .action(function (params) {
    this.res.end(JSON.stringify(JournalEntries.findOne({title: params.title})))
  })
