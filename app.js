const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => {
    console.log('Opa! Cheguei no get!!')
    res.send('Opa! Cheguei no get!!')
})

//Definição de uma api para CRUD de Produtos
//C - Create
app.post('/produtos', (req, res) => {
    console.log(req.body)
    res.status(201).send('Tudo ok com o método para criar o produto!')
})

//R - Read
app.get('/produtos/:codigo', (req, res) => {
    res.status(200).send('Tudo ok com o método para buscar o produto! ' + req.params.codigo)
})

app.get('/produtos', (req, res) => {
    console.log(req.query)
    res.status(200).send('Tudo ok com o método para listar o produtos! ' + req.query.nome)
})

//U - Update
app.put('/produtos/:codigo', (req, res) => {
    console.log(req.body)
    res.status(200).send('Tudo ok com o método para alterar o produto! ' + req.params.codigo)
})

//D - Delete
app.delete('/produtos/:codigo', (req, res) => {
    res.status(200).send('Tudo ok com o método para excluir o produto! ' + req.params.codigo)
})


app.listen(port, () => {
    console.log('Servidor web ok!')
})