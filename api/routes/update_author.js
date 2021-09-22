const { Router } = require('express')

const router = Router()

const authors = require('./update_author/authors.json')

router.get('/authors', async function (req, res) {
  // const authors = require('./update_author/authors.json')
  res.json(authors)
})

module.exports = router
