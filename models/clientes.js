const { mongo } = require("mongoose")
const mongoose = require("./database")

const {Schema} = mongoose

const Clientes = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            requiered: true,
        },
        endereco:
        {       
            cep: String,
            rua: String,
            bairro: String,
            numero: String,
            cidade: String,
        },
        telefone: 
        {
            telefone1: String,
            telefone2: String
        },
        email: String
    }
)

const Cliente = mongoose.model("clientes", Clientes)
module.exports = Cliente