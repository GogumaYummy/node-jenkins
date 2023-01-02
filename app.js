const express = require('express');

const app = express();

app
  .get('/', (req, res) => {
    res.send('hi');
  })
  .listen(3000, () => {
    console.log('3000번 포트에서 응답 중입니다.');
  });
