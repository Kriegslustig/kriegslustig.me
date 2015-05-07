Template.new_journal_entry.events({
  'click input[name=new_entry]': function (e, templ) {
    _templ = templ
    var wrappingForm = templ.$('form')[0]
    e.preventDefault()
    console.log(Journal_entries.findOne(wrappingForm.getAttribute('data-id')))
    Journal_entries.insert({
        title: wrappingForm.querySelector('input[type=text]').value,
        md_body: wrappingForm.querySelector('textarea').value
    }, function (err, _id) {
      if(_id) Router.go('journal')
    })
    return false
  }
})