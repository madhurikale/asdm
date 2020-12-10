const express = require('express')


const app = express()

app.get('/', (request, response) => {
  response.end("<h1>Welcome to world of Docker</h1><h2>This is Node Code</h2>")
})


app.listen(3003, '0.0.0.0', () => {
  console.log('server started on port 3003')
})