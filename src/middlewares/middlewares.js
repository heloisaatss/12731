var jwt = require('jsonwebtoken')

exports.autenticacao = (req, res, next) => {
    var token = req.headers.auth
    jwt.verify(token, '12731', (erro, decoded) => {
        if (erro) {
            res.send({ error: 'Token inválido!' + erro });
        }
        else {
            next()
        }
    })
}