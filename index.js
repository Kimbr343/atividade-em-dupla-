const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindo ao Sistema`');
});

app.get('/sobre', (req, res) => {
  res.send('Sistema sobre o Santa Cruz')
})

app.get('/contato', (req, res) => {
    res.json({
        "email": "contatosantacruz@email.com",
        "telefone": "(81) 99659-9076"
    })
})

app.get('/erro', (req, res) => {
  res.status(404).send('Página não encontrada');
})

app.get('/inicio', (req, res) => {
    res.redirect('/');
})

app.get('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.send('Usuario '+ userId)
});

app.get('/produtos/:nome', (req, res) => {
    const produto = req.params.nome;
    res.send('produto '+ produto)
});

app.get('/filmes/:id/:nome', (req, res) => {
    const filme = req.params.nome;
    const codigo = req.params.id;
    res.json({
        "nome do filme": filme,
        "id": codigo
    })
});



app.listen(
    3000, 
    () => console.log('sistema encontrado')
);
