const express = require('express');
const fs = require('fs');

const app = express();

app
  .get('/', (req, res) => {
    res.send('bye');
  })
  .get('/mkdir', (req, res) => {
    fs.mkdir('./dd');
    res.send('good');
  })
  .listen(3000, () => {
    console.log('Listening on port 3000.');
  });
