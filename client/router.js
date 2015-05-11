Session.setDefault('skip_entries', 0)
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
    Session.set('skip_entries', parseInt(this.params.query.skip) || 0)
    console.log('onAfterAction')
  }
})

Router.route('/journal/new', {
  name: 'new_journal_entry',
  template: 'new_journal_entry'
})

Router.route('/journal/:title', {
  name: 'journal_entry',
  template: 'journal_entry',
  data: function () {
    var self = this
    return {title: self.params.title}
  }
})

Router.route('/journal/:title/edit', {
  name: 'edit_journal_entry',
  template: 'edit_journal_entry',
  data: function () {
    var self = this
    return {title: self.params.title}
  }
})

Router.route('/users', {
  name: 'users'
})
