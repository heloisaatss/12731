const res = require('express/lib/response');
var Usuarios = require('../models/usuario');

/*
exports.incluir = async (req, res) => {

}*/

exports.incluir = (req, res) => {
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
}