const express = require("express")
const route = express.Router()

var Usuario = require("../models/usuario")

route.post("/login", async function(req, res){
    try{
        const {usuario, senha} = req.body
    
        var encontrar = await Usuario.findOne({"usuario": usuario})
        if (encontrar.senha == senha){
            return res.send({mensagem: "Usuario Logado"})
        }
        else{
            return res.send("Usuario ou senha incorretos")
        }
    }
    catch(e){
        console.log(e)
    }
})

route.post("/registrar", async function(req, res){
    try{
        const {usuario, senha} = req.body
        
        if(usuario == "" || usuario == undefined){
            return res.send({mensagem: "O usuario não pode ser nulo."})
        }
        if(senha == "" || senha == undefined){
            return res.send({mensagem: "A senha não pode ser nula."})
        }
        
        var cadastrar = await Usuario.create({usuario, senha})
        return res.send({mensagem:"Usuário Registrado", usuario: usuario})
    }
    catch(e){
        console.log(e)
    }
})

module.exports = app => app.use("/api", route)