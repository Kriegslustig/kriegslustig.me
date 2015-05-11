Template.new_journal_entry.events({
  'click input[name=new_entry]': function (e, templ) {
    _templ = templ
    var wrappingForm = templ.find('form')
    e.preventDefault()
    Journal_entries.insert({
        title: wrappingForm.querySelector('input[type=text]').value,
        md_body: wrappingForm.querySelector('textarea').value,
        published: wrappingForm.querySelector('.published').checked,
        tags: wrappingForm.querySelector('.tags').value,
        createdAt: (new Date()).getTime()
    }, function (err, _id) {
      if(_id) Router.go('journal')
      red_flash()
    })
    return false
  }
})