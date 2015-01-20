Meteor.methods({
  getPosts: function () {
    return EJSON.stringify(orion.entities.posts.collection.find({}).fetch())
  }
})