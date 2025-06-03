const express = require("express")
const route = express.Router()

const Produto = require("../models/produto")

route.get("/produto/{:codigo}", async function(req, res){
    try{
        const codigo = req.params.codigo

        var busca

        if(codigo){
            busca = await Produto.find({codigo: codigo})
        }
        else{
            var busca = await Produto.find()
        }
        return res.send(busca)
    }
    catch(e){
        console.log(e)
    }
})

route.post("/produto", async function(req, res){
    try{
        const {codigo, nome, preco, categoria, quantidade, descricao} = req.body
        if(codigo == "" || codigo == undefined){
            return res.send("O codigo não pode ser nulo.")
        }
        if(nome == "" || nome == undefined){
            return res.send("O nome não pode ser nulo.")
        }
        if(preco == "" || preco == undefined){
            return res.send("O preco não pode ser nulo.")
        }
        if(quantidade == "" || quantidade == undefined){
            return res.send("A quantidade não pode ser nula.")
        }
        var produto = await Produto.create({codigo, nome, preco, categoria, quantidade, descricao})
    
        return res.send(produto)
    }
    catch(e){
        console.log(e)
    }
})

route.put("/produto", async function(req, res){
    try{
        const {id, codigo, nome, preco, categoria, quantidade, descricao} = req.body
    
        if(id == "" || id == undefined){
            return res.send("O id não pode ser nulo.")
        }
        if(codigo == "" || codigo == undefined){
            return res.send("O codigo não pode ser nulo.")
        }
        if(nome == "" || nome == undefined){
            return res.send("O nome não pode ser nulo.")
        }
        if(preco == "" || preco == undefined){
            return res.send("O preco não pode ser nulo.")
        }
        if(quantidade == "" || quantidade == undefined){
            return res.send("A quantidade não pode ser nula.")
        }
        var alterar = await Produto.findByIdAndUpdate(id, {codigo, nome, preco, categoria, quantidade, descricao})
        var produto_alterado = await Produto.find({_id: id})
        return res.send(produto_alterado)
    }
    catch(e){
        console.log(e)
    }
})

route.delete("/produto", async function(req, res){
    try{
        const {id} = req.body
    
        if(id == "" || id == undefined)
            return res.send({mensagem: "ID não pode ser nulo"})
    
        var deletar = await Produto.deleteOne({_id: id})
        return res.send("Deletado com sucesso")    
    }
    catch(e){
        console.log(e)
    }
})

module.exports = app => app.use("/api", route)