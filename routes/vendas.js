const express = require("express")
const route = express.Router()

const Venda = require("../models/vendas")

route.get("/vendas/{:numero}", async function(req, res){
   try{
        const numero = req.params.numero
        var busca
        if(numero){
            busca = await Venda.find({numero_venda: numero})
        }
        else{
            busca = await Venda.find()
        }
        return res.send(busca)
    }
    catch(e){
        console.log(e)
    }
})

route.post("/vendas", async function(req, res){
    try{
        const {numero_venda, data, cliente, produtos, valor_total} = req.body
        
        if(numero_venda == "" || numero_venda == undefined){
            return res.send({mensagem: "O numero da venda não pode ser nulo."})
        }
        if(cliente.cpf == "" || cliente.cpf == undefined){
            return res.send({mensagem: "O cpf não pode ser nulo."})
        }
        if(cliente.nome == "" || cliente.nome == undefined){
            return res.send({mensagem: "A nome não pode ser nulo."})
        }
        if(produtos.some(produto => produto.codigo == "" || produto.codigo == undefined)){
            return res.send({mensagem: "O codigo do produto não pode ser nulo."})
        }
        if(produtos.some(produto => produto.quantidade == "" || produto.quantidade == undefined)){
            return res.send({mensagem: "A quantidade do produto não pode ser nulo."})
        }
        if(produtos.some(produto => produto.preco == "" || produto.preco == undefined)){
            return res.send({mensagem: "O preco do produto não pode ser nulo."})
        }
        if(valor_total == "" || valor_total == undefined){
            return res.send({mensagem: "O valor total não pode ser nulo."})
        }
    
        var venda = await Venda.create({numero_venda, data, cliente, produtos, valor_total})

        return res.send(venda)
    }
    catch(e){
        console.log(e)
    }
})

route.put("/vendas", async function(req, res){
    try{
        const {id, numero_venda, data, cliente, produtos, valor_total} = req.body
    
        if(id == "" || id == undefined){
            return res.send("O id não pode ser nulo.")
        }
        if(numero_venda == "" || numero_venda == undefined){
            return res.send({mensagem: "O numero da venda não pode ser nulo."})
        }
        if(cliente.cpf == "" || cliente.cpf == undefined){
            return res.send({mensagem: "O cpf não pode ser nulo."})
        }
        if(cliente.nome == "" || cliente.nome == undefined){
            return res.send({mensagem: "A nome não pode ser nulo."})
        }
        if(produtos.some(produto => produto.codigo == "" || produto.codigo == undefined)){
            return res.send({mensagem: "O codigo do produto não pode ser nulo."})
        }
        if(produtos.some(produto => produto.quantidade == "" || produto.quantidade == undefined)){
            return res.send({mensagem: "A quantidade do produto não pode ser nulo."})
        }
        if(produtos.some(produto => produto.preco == "" || produto.preco == undefined)){
            return res.send({mensagem: "O preco do produto não pode ser nulo."})
        }
        if(valor_total == "" || valor_total == undefined){
            return res.send({mensagem: "O valor total não pode ser nulo."})
        }
    
        var alterar = await Venda.findByIdAndUpdate(id, {numero_venda, data, cliente, produtos, valor_total})
        var venda_alterada = await Venda.find({_id: id})

        return res.send(venda_alterada)
    }
    catch(e){
        console.log(e)
    }
})

route.delete("/vendas", async function(req, res){
    try{
        const {id} = req.body
        if(id == "" || id == undefined)
            return res.send("O id não pode ser nulo.")

        var deletar = await Venda.deleteOne({_id: id})

        return res.send("Delatado com sucesso")
    }
    catch(e){
        console.log(e)
    }
})

module.exports = app => app.use("/api", route)