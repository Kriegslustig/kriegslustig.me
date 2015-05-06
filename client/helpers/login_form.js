Template.login_form.events({
  'click input[type=submit]': function (e, templ) {
    var error_dropzone = templ.firstNode.querySelector('.error_dropzone')
    var username = templ.firstNode.querySelector('input[name=username]').value
    var password = templ.firstNode.querySelector('input[name=password]').value
    e.preventDefault()
    error_dropzone.innerHTML = '...'
    Meteor.loginWithPassword(username, password, function (err) {
      if(err)
        templ.firstNode.querySelector('.error_dropzone').innerHTML = 'Login Fehlgeschlagen'
    })
    return false
  },
})