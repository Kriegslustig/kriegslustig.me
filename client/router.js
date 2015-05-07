Router.route('/', {
  name: 'journal',
})

Router.route('/about', {
  name: 'about',
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