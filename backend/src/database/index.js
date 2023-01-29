const moongose = require('mongoose');

moongose.connect('mongodb+srv://rafaelsantos:jmB7wbPmphX9BT9@rafaeltestes.lh4qw9a.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }, (error)=>{
    if(error){
        console.log('Erro ao conectar ao banco de dados');
        console.log(error);
        return ;
    } else {
        console.log('Conectado ao banco de dados');
    }});


moongose.Promise = global.Promise; 

module.exports = moongose;