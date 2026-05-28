const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindo ao Sistema`');
});

app.listen(
    3000, 
    () => console.log('sistema encontrado')
);