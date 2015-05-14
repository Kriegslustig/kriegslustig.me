JournalEntries = new Mongo.Collection('journalEntries')

JournalEntries.attachSchema(new SimpleSchema({
  title: {
    type: 'string',
    max: 400,
    unique: true
  },

  mdBody: {
    type: String
  },

  htmlBody: {
    type: String,
    autoValue: function () {
      var self = this
      var mdBody = self.field('mdBody').value
      return (mdBody && mdBody.length > 0) ? (new Showdown.converter()).makeHtml(mdBody) : false
    }
  },

  teaser: {
    type: String,
    autoValue: function () {
      if(!this.field('mdBody').value) return false
      var teaserMd = this.field('mdBody').value.split('\n')[0]
      var maxTeaser = getSetting(400, 'public', 'teaserLength')
      teaserMd = teaserMd.length > maxTeaser ? teaserMd.substr(0, maxTeaser) + '...' : teaserMd
      return (new Showdown.converter()).makeHtml(teaserMd)
    }
  },

  tags: {
    type: [String],
    optional: true,
    autoValue: function () {
      var self = this
      var value = self.field('tags').value
      return typeof value == "string" ? value.split(', ') : value
    }
  },

  published: {
    type: Boolean,
    autoValue: function () {
      var self = this
      var value = self.field('published').value
      if(typeof value == 'string') value = (value == 'on' ? true : false)
      if(typeof value != 'boolean') value = false
      return value
    }
  },

  createdAt: {
    type: Number,
    autoValue: function () {
      var self = this
      if (self.docId
        && !JournalEntries.findOne(self.docId)['createdAt']
        && self.field('published').value) {
        (new Date()).getTime()
      } else {
        return 0
      }
    }
  }
}))