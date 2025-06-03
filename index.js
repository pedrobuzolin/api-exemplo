const express = require("express")

var app = express()
app.use(express.json())

require("./routes/usuario")(app)
require("./routes/produtos")(app)
require("./routes/categorias")(app)
require("./routes/clientes")(app)
require("./routes/vendas")(app)


app.listen(3000, function(){
    console.log("Servidor online!!!")
})