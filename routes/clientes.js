const express = require("express")
const route = express.Router()

const Cliente = require("../models/clientes")

route.get("/cliente/{:nome}", async function(req, res){
    try{
        const nome = req.params.nome
        var busca
        if(nome){
            busca = await Cliente.find({nome: {$regex: nome, $options: "i"}})
        }
        else{
            busca = await Cliente.find()
        }
        return res.send(busca)
    }
    catch(e){
        console.log(e)
    }
})

route.post("/cliente", async function(req, res){
    try{
        const {nome, cpf, endereco, telefone, email} = req.body
    
        if(nome == "" || nome == undefined){
            return res.send({mensagem: "O nome não pode ser nulo."})
        }
        if(cpf == "" || cpf == undefined){
            return res.send({mensagem: "O cpf não pode ser nulo."})
        }
    
        var cliente = await Cliente.create({nome, cpf, endereco, telefone, email})
    
        return res.send(cliente)
    }
    catch(e){
        console.log(e)
    }
})

route.put("/cliente", async function(req, res){
    try{
        const {id, nome, cpf, endereco, telefone, email} = req.body
        
        if(id == "" || id == undefined){
            return res.send({mensagem: "O id não pode ser nulo."})
        }
        if(nome == "" || nome == undefined){
            return res.send({mensagem: "O nome não pode ser nulo."})
        }
        if(cpf == "" || cpf == undefined){
            return res.send({mensagem: "O cpf não pode ser nulo."})
        }
    
        var alterar = await Cliente.findByIdAndUpdate(id, {nome, cpf, endereco, telefone, email})
        var cliente_alterado = await Cliente.find({_id: id})

        return res.send(cliente_alterado)
    }
    catch(e){
        console.log(e)
    }
})

route.delete("/cliente", async function(req, res){
    try{
        const {id} = req.body
        if(id == "" || id == undefined)
            return res.send("O id não pode ser nulo.")

        var deletar = await Cliente.deleteOne({_id: id})

        return res.send("Deletado com sucesso")
    }
    catch(e){
        console.log(e)
    }
})

module.exports = app => app.use("/api", route)