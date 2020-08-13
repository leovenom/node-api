const express = require('express');
const mongoose = require('mongoose');

//iniciando o APP
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParses:true});

// Primeira rota
app.get('/', (req, res) =>{
  res.send('Hello Leonardt');
});

app.listen(3001);
