Journal_entries = new Mongo.Collection('journal_entries')

Journal_entries.attachSchema(new SimpleSchema({
  title: {
    type: 'string',
    max: 400
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
      var teaser_md = this.field('md_body').value.substr(0, Meteor.settings.public.teaser_length)
      return (new Showdown.converter()).makeHtml(teaser_md + '...')
    }
  },

  tags: {
    type: [String],
    optional: true
  }
}))