const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindo ao Sistema`');
});

app.get('/sobre', (req, res) => {
  res.send('Sistema sobre o Santa Cruz')
})

app.listen(
    3000, 
    () => console.log('sistema encontrado')
);
