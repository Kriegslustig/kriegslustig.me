Template.edit_journal_entry.onCreated(function () {
  var self = this
  self.subscribe('journal_entry', decodeURIComponent(self.data.title))
})

Template.edit_journal_entry.events({
  'click input[name=edit_entry]': function (e, templ) {
    var wrappingForm = templ.$('form')[0]
    e.preventDefault()
    Journal_entries.update(
      wrappingForm.getAttribute('data-id'),
      {
        $set: {
          title: wrappingForm.querySelector('input[type=text]').value,
          md_body: wrappingForm.querySelector('textarea').value,
        published: wrappingForm.querySelector('.published').checked,
        tags: wrappingForm.querySelector('.tags').value
        }
      },
      function (err) {
        if(!err) green_flash()
      }
    )
    return false
  }
})