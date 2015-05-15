Template.newJournalEntry.events({
  'click input[name=new_entry]': function (e, templ) {
    var wrappingForm = templ.find('form')
    var title = wrappingForm.querySelector('input[type=text]').value
    e.preventDefault()
    JournalEntries.insert({
        title: title,
        mdBody: wrappingForm.querySelector('textarea').value,
        published: wrappingForm.querySelector('.published').checked,
        tags: wrappingForm.querySelector('.tags').value,
    }, function (err, _id) {
      if(_id) {
        Router.go('journalEntry', {title: encodeURIComponent(title)})
        return greenFlash()
      }
      redFlash()
      return markFailed(wrappingForm, err.invalidKeys)
    })
    return false
  }
})