Template.users.helpers({
  getUsers: function () {
    return Meteor.users.find({}, {
      fields: {username: 1}
    })
  }
})

Template.users.onCreated(function () {
  this.subscribe('allUsers')
})

Template.users.events({
  'click .submit': function (e) {
    var form = e.currentTarget.parentNode
    var thisUserId = form.getAttribute('data-id')
    var password = form.getElementsByClassName('password')[0].value
    e.preventDefault()
    if(password.length > 0) {
      Meteor.call('setPassword', thisUserId, password, function (err) {
        if(!err) return greenFlash()
        console.log('Fail')
        redFlash()
      })
    } else {
      redFlash()
    }
    return false
  }
})
