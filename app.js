const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => {
    console.log('Opa! Cheguei no get!!')
    res.send('Opa! Cheguei no get!!')
})

//Definição de uma api para CRUD de Contatos
//C - Create
app.post('/contatos', (req, res) => {
    console.log(req.body)
    res.status(201).send('Tudo ok com o método para incluir o contato!')
})

//R - Read
app.get('/contatos/:codigo', (req, res) => {
    res.status(200).send('Tudo ok com o método para buscar o registro! ' + req.params.codigo)
})

app.get('/contatos', (req, res) => {
    console.log(req.query)
    res.status(200).send('Tudo ok com o método para listar o contato! ' + req.query.nome)
})

//U - Update
app.put('/contatos/:codigo', (req, res) => {
    console.log(req.body)
    res.status(200).send('Tudo ok com o método para alterar o contato! ' + req.params.codigo)
})

//D - Delete
app.delete('/contatos/:codigo', (req, res) => {
    res.status(200).send('Tudo ok com o método para excluir o contato! ' + req.params.codigo)
})


app.listen(port, () => {
    console.log('Servidor web ok!')
})