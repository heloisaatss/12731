const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Opa! Cheguei no get!')
    res.send('Opa! Cheguei no get!')
})


app.listen(port, () => {
    console.log('Servidor web ok!')
})