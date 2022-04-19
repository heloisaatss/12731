const express = require('express')

var mongoose = require('mongoose');

var swaggerUI = require('swagger-ui-express');
var swaggerFile = require('./swagger_output.json');

const app = express()
const port = 3000

var url = 'mongodb+srv://heloisa_assoni:123@cluster0.9x9v4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json())

app.get('/', (req, res) => {
    // #swagger.tags = ['Root']
    // #swagger.description = 'End-point root da aplicação'

    console.log('Opa! Cheguei no get!!')
    res.send('Opa! Cheguei no get!!')
})

//Definição de uma api para CRUD de Contatos
//C - Create
app.post('/contatos', (req, res) => {
    // #swagger.tags = ['Contatos']
    // #swagger.description = 'Incluir um contato'

    console.log(req.body)
    res.status(201).send('Tudo ok com o método para incluir o contato!')
})

//R - Read
app.get('/contatos/:codigo', (req, res) => {
    // #swagger.tags = ['Contatos']
    // #swagger.description = 'Buscar um contato'
    res.status(200).send('Tudo ok com o método para buscar o registro! ' + req.params.codigo)
})

app.get('/contatos', (req, res) => {
    // #swagger.tags = ['Contatos']
    // #swagger.description = 'Listar um contato'
    console.log(req.query)
    res.status(200).send('Tudo ok com o método para listar o contato! ' + req.query.nome)
})

//U - Update
app.put('/contatos/:codigo', (req, res) => {
    // #swagger.tags = ['Contatos']
    // #swagger.description = 'Alterar um contato'
    console.log(req.body)
    res.status(200).send('Tudo ok com o método para alterar o contato! ' + req.params.codigo)
})

//D - Delete
app.delete('/contatos/:codigo', (req, res) => {
    // #swagger.tags = ['Contatos']
    // #swagger.description = 'Excluir um contato'
    res.status(200).send('Tudo ok com o método para excluir o contato! ' + req.params.codigo)
})

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(port, () => {
    console.log('Servidor web ok!')
})