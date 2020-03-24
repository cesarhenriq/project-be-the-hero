const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'Not found',
    code: 404
  })
})

app.listen(3333, () => {
  console.log(`Servidor rodando na porta 3333`)
})
