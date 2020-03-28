const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'Not found',
    code: 404
  })
})

module.exports = app
