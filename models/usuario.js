const { mongo } = require("mongoose")
const mongoose = require("./database")

const {Schema} = mongoose

const Usuarios = new Schema(
    {
        usuario: {
            type: String,
            required: true,
        },
        senha: {
            type: String,
            required: true
        }
    }
)

const Usuario = mongoose.model("usuarios", Usuarios)

module.exports = Usuario