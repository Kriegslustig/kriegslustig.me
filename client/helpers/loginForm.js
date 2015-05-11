Template.loginForm.events({
  'click input[type=submit]': function (e, templ) {
    var errorDropzone = templ.firstNode.querySelector('.errorDropzone')
    var username = templ.firstNode.querySelector('input[name=username]').value
    var password = templ.firstNode.querySelector('input[name=password]').value
    e.preventDefault()
    errorDropzone.innerHTML = '...'
    Meteor.loginWithPassword(username, password, function (err) {
      if(err)
        templ.firstNode.querySelector('.errorDropzone').innerHTML = 'Login Fehlgeschlagen'
    })
    return false
  },
})