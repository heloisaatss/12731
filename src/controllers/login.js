const res = require('express/lib/response');
const login = require('../models/login');
var Logins = require('../models/login');

//Exemplo com async/await
exports.incluir = async (req, res) => {
    // #swagger.tags = ['Logins']   
    // #swagger.description = 'Incluir um login'

    if (req.body.login === undefined) {
        return res.status(500).send({ Mensagem: 'É obrigatório informar o login!!' })
    }

    var login = req.body.login

    //Verificar se o registro já existe com o mesmo login

    var data = await Logins.find({ login })

    if (data[0] !== undefined) {
        return res.status(500).send({ Mensagem: 'Já existe registro com esse login!' })
    }

    //Criar o registro
    try {
        await Logins.create(req.body)

    } catch (err) {
        return res.status(500).send('Erro ao salvar o login: ' + erro)
    }

    return res.status(201).send('Login cadastrado com sucesso!')

}