const express = require('express')

var mongoose = require('mongoose');

var swaggerUI = require('swagger-ui-express');
var swaggerFile = require('./swagger_output.json');

var Produtos = require('./src/models/produto')

const app = express()
const port = 3000

var url = 'mongodb+srv://heloisa_assoni:123@cluster0.9x9v4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true
};


mongoose.connect(url, options)

mongoose.connection.on('error', (erro) => {
    //console.log('Erro ao conectar com o banco de dados: ' + erro)
})

mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados!!')
})


app.use(express.json())

app.get('/', (req, res) => {
    // #swagger.tags = ['Root']
    // #swagger.description = 'End-point root da aplicação'

    console.log('Opa! Cheguei no get!!')
    res.send('Opa! Cheguei no get!!')
})

//Definição de uma api para CRUD de Produtos
//C - Create
app.post('/produtos', (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Incluir um produto'

    Produtos.create(req.body, (erro, data) => {
        if (erro) {
            console.log('Erro ao salvar o produto: ' + erro)
            res.status(500).send('Erro ao salvar o produto: ' + erro)
        }
        else {
            console.log('Produto cadastrado com sucesso!! ' + data)
            res.status(201).send('Produto cadastrado com sucesso!')
        }
    })
})

//R - Read
app.get('/produtos/:codigo', (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Buscar um produto'
    res.status(200).send('Tudo ok com o método para buscar o registro! ' + req.params.codigo)
})

app.get('/produtos', (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Listar um produto'
    console.log(req.query)
    res.status(200).send('Tudo ok com o método para listar o produto! ' + req.query.nome)
})

//U - Update
app.put('/produtos/:codigo', (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Alterar um produto'
    console.log(req.body)
    res.status(200).send('Tudo ok com o método para alterar o produto! ' + req.params.codigo)
})

//D - Delete
app.delete('/produtos/:codigo', (req, res) => {
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Excluir um produto'
    res.status(200).send('Tudo ok com o método para excluir o produto! ' + req.params.codigo)
})

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(port, () => {
    console.log('Servidor web ok!')
})