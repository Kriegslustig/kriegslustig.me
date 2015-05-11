Template.newJournalEntry.events({
  'click input[name=new_entry]': function (e, templ) {
    var wrappingForm = templ.find('form')
    e.preventDefault()
    JournalEntries.insert({
        title: wrappingForm.querySelector('input[type=text]').value,
        mdBody: wrappingForm.querySelector('textarea').value,
        published: wrappingForm.querySelector('.published').checked,
        tags: wrappingForm.querySelector('.tags').value,
        createdAt: (new Date()).getTime()
    }, function (err, _id) {
      if(_id) Router.go('journal')
      redFlash()
    })
    return false
  }
})