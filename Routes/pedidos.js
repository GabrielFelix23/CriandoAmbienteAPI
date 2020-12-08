const express = require("express")
const router = express.Router()


//Restorna todos os pedido
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Retorna os pedidos"
    })
})

//Insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Pedido foi criado"
    })
})

//Retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    res.status(200).send({
        mensagem: "Detalhes do pedido",
        id_pedido: id
    })
})

//exclui um pedido
router.delete("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Pedido excluido"
    })
})
module.exports = router