const express = require("express")
const route = express.Router()

const Categoria = require("../models/categoria")

route.get("/categoria/{:categoria}", async function(req, res){
     try{
        var categoria = req.params.categoria
        
        var busca
        if(categoria){
            busca = await Categoria.find({categoria: {$regex: categoria, $options: "i"}})
        }
        else{
            busca = await Categoria.find()
        }

        return res.send(busca)
    }
    catch(e){
        console.log(e)
    }
})

route.post("/categoria", async function(req, res){
    try{
        const {categoria, descricao} = req.body
    
        if(categoria == "" || categoria == undefined){
            return res.send("A categoria não pode ser nula")
        }
        var cadastrar = await Categoria.create({categoria, descricao})
    
        return res.send(cadastrar)
    }
    catch(e){
        console.log(e)
    }
})

route.put("/categoria", async function(req, res){
    try{
        const {id, cadastrar, descricao} = req.body
    
        if(id == "" || id == undefined){
            return res.send("O id não pode ser nulo")
        }
        if(cadastrar == "" || cadastrar == undefined){
            return res.send("A cadastrar nao pode ser nula")
        }
    
        var alterar = await Categoria.findByIdAndUpdate(id, {cadastrar, descricao})
        var categoria_alterada = await Categoria.find({_id: id})
    
        return res.send(categoria_alterada)
    }
    catch(e){
        console.log(e)
    }
})

route.delete("/categoria", async function(req, res){
    try{
        const {id} = req.body
    
        if(id == "" || id == undefined){
            return res.send("O id não pode ser nulo")
        }

        var deletar = await Categoria.deleteOne({_id: id})
        return res.send("Deletado com sucesso")
    }
    catch(e){
        console.log(e)
    }
})

module.exports = app => app.use("/api", route)