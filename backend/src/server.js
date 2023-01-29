const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ error:false ,
        message: 'Acesso bem sucedido' });
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});