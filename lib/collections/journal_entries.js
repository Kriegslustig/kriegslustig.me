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

  tags: {
    type: [String],
    optional: true
  }
}))