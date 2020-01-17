const { Book } = require('../models')

module.exports = app => {
  app.get('/books', (req, res) => {
    Book.find({})
      .then(books => res.json(books))
      .catch(e => console.error(e))
  })
  
  app.post('/books', (req, res) => {
    Book.create(req.body)
      .then(book => res.json(book))
      .catch(e => console.error(e))
  })
  
  app.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/books/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
}