var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UsuarioSchema = new Schema({
    login: { type: String, require: true, unique: true },
    senha: { type: String, require: true },
    datacriacao: { type: Date, defaut: Date.now() }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)
