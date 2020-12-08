const express = require("express")
const app = express()

const rotaProdutos = require("./Routes/produtos")
const rotaPedidos = require("./Routes/pedidos")

app.use("/produtos", rotaProdutos)
app.use("/pedidos", rotaPedidos)

module.exports = app