const express = require('express')

// Create express instance
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Require API routes
const update_author = require('./routes/update_author')

// Import API Routes
app.use(update_author)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app,
}
