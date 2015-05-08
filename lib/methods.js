Meteor.methods({
  setPassword: function (someUserId, newPW) {
    if(!this.userId) return true
    if(Meteor.isServer)
      Accounts.setPassword(someUserId, newPW, {logout: false})
    return false
  }
})
