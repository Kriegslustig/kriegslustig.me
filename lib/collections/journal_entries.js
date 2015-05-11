Journal_entries = new Mongo.Collection('journal_entries')

Journal_entries.attachSchema(new SimpleSchema({
  title: {
    type: 'string',
    max: 400,
    unique: true
  },

  md_body: {
    type: String
  },

  html_body: {
    type: String,
    autoValue: function () {
      return (new Showdown.converter()).makeHtml(this.field('md_body').value)
    }
  },

  teaser: {
    type: String,
    autoValue: function () {
      var teaser_md = this.field('md_body').value.split('\n')[0]
      var max_teaser = get_setting(400, 'public', 'teaser_length')
      teaser_md = teaser_md.length > max_teaser ? teaser_md.substr(0, max_teaser) + '...' : teaser_md
      return (new Showdown.converter()).makeHtml(teaser_md)
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
    type: Number
  }
}))