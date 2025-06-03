const { mongo } = require("mongoose")
const mongoose = require("./database")

const {Schema} = mongoose

const Produtos = new Schema(
    {
        codigo: {
            type: Number,
            requiered: true,
        },
        nome: {
            type: String,
            required: true
        },
        preco: {
            type: Number,
            required: true
        },
        categoria: String,
        quantidade: {
            type: Number,
            required: true
        },
        descricao: String,
    }
)

const Produto = mongoose.model("produtos", Produtos)

module.exports = Produto