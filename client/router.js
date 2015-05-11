Session.setDefault('skipEntries', 0)
Session.setDefault('entryCount', 0)

Router.route('/', {
  onAfterAction: function () {
    Router.go('journal', {}, {query: 'skip=0'})
  }
})

Router.route('/about', {
  name: 'about',
})

Router.route('/journal', {
  name: 'journal',
  template: 'journal',
  onAfterAction: function () {
    Session.set('skipEntries', parseInt(this.params.query.skip) || 0)
  }
})

Router.route('/journal/new', {
  name: 'newJournalEntry',
  template: 'newJournalEntry'
})

Router.route('/journal/:title', {
  name: 'journalEntry',
  template: 'journalEntry',
  data: function () {
    var self = this
    return {title: self.params.title}
  }
})

Router.route('/journal/:title/edit', {
  name: 'editJournalEntry',
  template: 'editJournalEntry',
  data: function () {
    var self = this
    return {title: self.params.title}
  }
})

Router.route('/users', {
  name: 'users'
})
