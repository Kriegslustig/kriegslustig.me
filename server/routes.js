Router.route('/journal/json', function () {
  this.response.end(EJSON.stringify(orion.entities.posts.collection.find({}).fetch()))
}, {where: 'server'})