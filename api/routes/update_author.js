const { Router } = require('express')

const router = Router()

router.get('/update_author', async function (req, res) {
  const authors = require('./update_author/authors.json')
  return res.json({ data: authors })
})

module.exports = router
