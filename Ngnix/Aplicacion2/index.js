
const express = require('express')
const app = express()
const port = 3002

app.get('/api2', (req, res) => {
  res.send('Se esta corriendo el en servidor 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

