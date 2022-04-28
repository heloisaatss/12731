const express = require('express')

var mongoose = require('mongoose');

var swaggerUI = require('swagger-ui-express');
var swaggerFile = require('./swagger_output.json');

const { route } = require('./src/routes/usuario');

var routeUsuario = require('./src/routes/usuario');
var routeLogin = require('./src/routes/login')

var middlewares = require('./src/middlewares/middlewares');

const app = express()
const port = 3000

var url = 'mongodb+srv://heloisa_assoni:1234@cluster0.9x9v4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true
};


mongoose.connect(url, options)

mongoose.connection.on('error', (erro) => {
    console.log('Erro ao conectar com o banco de dados: ' + erro)
})


mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados!!')
})

app.use(express.json())

app.get('/', (req, res) => {
    //#swagger.tags = ['Root']
    //#swagger.description = 'End-point root da aplicação'

    console.log('Olá')
    res.send('Olá, aqui é o back')
})

app.use('/usuarios', middlewares.autenticacao, routeUsuario);
app.use ('/login', routeLogin)

//Definição de uma api para CRUD de Usuários
//C - Create
/*
app.post('/usuarios', (req, res) => {
    // #swagger.tags = ['Usuarios']
    // #swagger.description = 'Incluir um usuario'

    Usuarios.create(req.body, (erro, data) => {
        if (erro) {
            console.log('Erro ao salvar o usuário: ' + erro)
            res.status(500).send('Erro ao salvar o usuário: ' + erro)
        }
        else {
            console.log('Usuário cadastrado com sucesso! ' + data)
            res.status(201).send('Usuário cadastrado com sucesso!')
        }
    })
})
*/

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(port, () => {
    console.log('Servidor web ok!')
})