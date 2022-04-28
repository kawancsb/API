//chama o express
var express = require('express');
var app = express();
//chama as rotas
app.get('/', function(req, res) {
  res.send('pagina inicial');
})

app.get('/cadastro', function(req, res) {
  res.sendFile();
})

app.get('/agendamento', function(req, res) {
  res.send('pagina de agendamento');
})


//liga o servidor
app.listen(3000,()=>{
  console.log("servidor rodando na porta 3000")
})