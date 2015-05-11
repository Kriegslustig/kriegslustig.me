Template.editJournalEntry.onCreated(function () {
  var self = this
  self.subscribe('journalEntry', decodeURIComponent(self.data.title))
})

Template.editJournalEntry.events({
  'click input[name=edit_entry]': function (e, templ) {
    var wrappingForm = templ.find('form')
    e.preventDefault()
    JournalEntries.update(
      wrappingForm.getAttribute('data-id'),
      {
        $set: {
          title: wrappingForm.querySelector('input[type=text]').value,
          mdBody: wrappingForm.querySelector('textarea').value,
        published: wrappingForm.querySelector('.published').checked,
        tags: wrappingForm.querySelector('.tags').value
        }
      },
      function (err) {
        if(!err) greenFlash()
      }
    )
    return false
  }
})