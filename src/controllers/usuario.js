const res = require('express/lib/response');
const usuario = require('../models/usuario');
var Usuarios = require('../models/usuario');

var jwt = require('jsonwebtoken')

//Exemplo com async/await
exports.incluir = async (req, res) => {
    // #swagger.tags = ['Usuarios']   
    // #swagger.description = 'Incluir um usuário'

    console.log(req.body.senha)

    if (req.body.senha === undefined) {
        return res.status(500).send({ Mensagem: 'É obrigatório informar a senha!' })
    }

    var login = req.body.login

    //Verificar se o registro já existe com o mesmo login
    var data = await Usuarios.find({ login })

    if (data[0] !== undefined) {
        return res.status(500).send({ Mensagem: 'Já existe registro com esse login!' })
    }

    //Criar o registro
    try {
        await Usuarios.create(req.body)

    } catch (erro) {
        return res.status(500).send('Erro ao salvar o usuário: ' + erro)
    }
    return res.status(201).send('Usuário cadastrado com sucesso!')

}

exports.login = (req, res) => {
    //#swagger.tags = ['Usuário']
    //#swagger.description = 'Login de usuário'

    var login = req.body.login;
    var senha = req.body.senha;

    Usuarios.find({ login, senha }, (erro, data) => {
        if (erro) {
            res.status(500).send({ Mensagem: 'Erro ao fazer login de usuário ' + erro })
        }
        else if (data[0] !== undefined) {
            //Gerar o jwt e devolver para o client
            var token = jwt.sign({ id: login }, '12731', { expiresIn: '1m' })

            res.status(200).send({ Token: token })
        }
        else {
            res.status(500).send({ Mensagem: 'Usuário ou senha inválidos!' })
        }
    })
}