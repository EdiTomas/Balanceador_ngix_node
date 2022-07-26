
const express = require('express')
const app = express()
const port = 3003

app.get('/api3', (req, res) => {
  res.send('Se levanto el servidor 3')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})

