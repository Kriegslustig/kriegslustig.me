Router.route('/', {
  name: 'journal',
})

Router.route('/about', {
  name: 'about',
})

Router.route('/journal/:title', {
  name: 'journal_entry',
  template: 'journal_entry',
  data: function () {
    return Journal_entries.findOne({title: this.params.title})
  }
})