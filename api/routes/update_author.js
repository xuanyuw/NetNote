const { Router } = require('express')
const fs = require('fs')

const router = Router()

const authors = require('./update_author/authors.json')

router.get('/authors', async function (req, res) {
  res.send(authors[req.query.id])
})

router.get('/all_authors', async function (req, res) {
  res.send(authors)
})

router.post('/authors', async function (req, res) {
  const newAuthor = req.body
  authors[newAuthor.key] = newAuthor.data
  console.log(req.body)
  fs.writeFile(
    './api/routes/update_author/authors.json',
    JSON.stringify(authors),
    (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('File written successfully\n')
      }
    }
  )
})

router.delete('/authors', async function (req, res) {
  key = req.query.id
  delete authors[key]
})

module.exports = router

router.get('/authors')
