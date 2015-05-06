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
    var self = this
    return {title: self.params.title} 
  }
})