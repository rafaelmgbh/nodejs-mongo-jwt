const express = require('express');
const AuthController = require('./controllers/AuthController');

const app = express();

app.use("/auth", AuthController);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});