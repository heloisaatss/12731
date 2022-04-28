var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProdutoSchema = new Schema({
    login: { type: String, require: true, unique: true },
})

module.exports = mongoose.model('Login', LoginSchema)