const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send("<h1>Minha Lista de Tarefas</h1>");
})

app.listen(3000, () => {
  console.log('Servidor foi iniciado!');
})