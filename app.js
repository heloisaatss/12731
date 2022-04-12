const res = require('express/lib/response')
const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain')
    res.end('Opa, agora deu boa!')
})

server.listen(port, () => {
    console.log('Opa! O servidor está escutando por requisições')
})