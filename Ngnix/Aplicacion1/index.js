
const express = require('express')
const app = express()
const port = 3001

app.get('/api1', (req, res) => {
  res.send('Se levanto un servidor 1')
})


app.get('/test', (req, res) => {
  res.send({mensaje:"Estoy probando si guarda docker"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

