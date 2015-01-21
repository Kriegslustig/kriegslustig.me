orion.addEntity('posts', {
  title: {
    type: String
  , label: 'Title'
  }
  , text: orion.attribute('froala', {
    label: 'Text'
  , optional: true
  })
  , tags: {
    type: [String]
  , label: 'Tags'
  , optional: true
  }
}, {
  icon: 'bookmark'
, sidebarName: 'Posts'
, pluralName: 'Posts'
, singularName: 'Post'
, tableColumns: [
    {
      data:'title'
    , title: 'Title'
    }
  ]
})