const { mongo } = require("mongoose")
const mongoose = require("./database")

const {Schema} = mongoose

const Categorias = new Schema(
    {
        categoria: {
            type: String,
            required: true,
        },
        descricao: String
    }
)

const Categoria = mongoose.model("categorias", Categorias)
module.exports = Categoria