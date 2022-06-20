const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(port, err => {
  if (err) {
    console.log('error')
  } else {
    console.log('Como Fazer Server is running on port:', port)
  }
})
