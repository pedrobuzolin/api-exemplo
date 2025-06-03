const { mongo } = require("mongoose")
const mongoose = require("./database")

const {Schema} = mongoose

const Vendas = new Schema(
    {
        numero_venda: {
            type: Number,
            required: true,
        },
        cliente: {
            cpf: {
                type: String,
                required: true
            },
            nome: {
                type: String,
                requiered: true
            },
            email: String,
            endereco: String,
            telefone: {
                celular: String,
            }
        },
        produtos: [
            {
                codigo: {
                    type: Number,
                    required: true
                },
                nome: String,
                categoria: String,
                quantidade: {
                    type: Number,
                    required: true
                },
                preco: {
                    type: Number,
                    required: true
                }
            }
        ],
        valor_total: {
            type: Number,
            required: true
        }
    }
)

const Venda = mongoose.model("vendas", Vendas)
module.exports = Venda