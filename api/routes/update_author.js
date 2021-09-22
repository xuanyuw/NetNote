const { Router } = require('express')
const fs = require('fs')

const router = Router()

const authors = require('./update_author/authors.json')

router.get('/authors', async function (req, res) {
  // console.log('in javascript')
  // res.body = authors
  // console.log(req.query)
  res.send(authors[req.query.id])
  // return
})

router.post('/authors', async function (req, res) {
  // const authors = require('./update_author/authors.json')
  const newAuthor = req.body
  authors[newAuthor.key] = newAuthor.data
  console.log(req.body)
  fs.writeFile(
    './api/routes/update_author/authors.json',
    JSON.stringify(authors),
    (err) => {
      if (err) {
        console.log('here')
        console.error(err)
      } else {
        console.log('File written successfully\n')
      }
    }
  )
})

module.exports = router

router.get('/authors')
