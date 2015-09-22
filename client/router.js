IsoRouter.Route.exit(() => {
  document.getElementsByTagName('main')[0].innerHTML = ''
})

IsoRouter.route('/')
  .action(() => {
    IsoRouter.navigate('/journal')
  })

IsoRouter.route('/about')
  .action(() => {
    render(Template.about)
  })

IsoRouter.route('/journal')
  .action(() => {
    render(Template.journal)
  })

IsoRouter.route('/journal/new')
  .action(() => {
    render(Template.newJournalEntry)
  })

IsoRouter.route('/journal/:title')
  .action(function (params) {
    render(
      Template.journalEntry,
      {title: decodeURIComponent(params.title)}
    )
  })

IsoRouter.route('/journal/:title/edit')
  .action(function (params) {
    render(
      Template.editJournalEntry,
      {title: decodeURIComponent(params.title)}
    )
  })

IsoRouter.route('/login')
  .action(() => {
    render(Template.login)
  })

IsoRouter.route('/users')
  .action(() => {
    render(Template.users)
  })


function render (template, data = {}) {
  Blaze.renderWithData(
    template,
    data,
    document.getElementsByTagName('main')[0]
  )
}