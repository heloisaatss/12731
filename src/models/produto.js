var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProdutoSchema = new Schema({
    codigo: { type: String, require: true, unique: true },
    nome: { type: String, require: true },
    descricao: { type: String },
    dataCriacao: { type: Date, defaut: Date.now() }
})

module.exports = mongoose.model('Produto', ProdutoSchema)