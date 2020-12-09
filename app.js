const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")

const rotaProdutos = require("./Routes/produtos")
const rotaPedidos = require("./Routes/pedidos")

//Morgan é um robo que vizualisa todas as rotas e cliks
app.use(morgan("dev"))
//confg Body-Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/produtos", rotaProdutos)
app.use("/pedidos", rotaPedidos)

//Para erro!
app.use((req, res, next) => {
    const erro = new Error("Não encontrado!")
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})
module.exports = app