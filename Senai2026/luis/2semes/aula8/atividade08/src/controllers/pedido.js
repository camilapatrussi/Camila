
const pedidos = require("../../dados/pedidos.json")
const clientes = require("../../dados/clientes.json")
const itens = require("../../dados/itens.json")

// Composição
function comporCliente() {
    pedidos.forEach(p => {
        p.cliente = clientes.find(c => c.id == p.cliente_id)
    })
}

// Agregação
function agregarItens() {
    pedidos.forEach(p => {
        p.itens = itens.filter(item => item.pedido_id == p.id)
    })
}

// Calcula o total de cada pedido
function calcTotais() {
    pedidos.forEach(pedido => {
        pedido.total = 0

        pedido.itens.forEach(item => {
            pedido.total += item.preco * item.quantidade
        })
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1

    pedidos.push(dados)

    res.status(201).json(dados)
}

const listar = (req, res) => {
    comporCliente()
    agregarItens()
    calcTotais()

    res.json(pedidos)
}

const buscarPorId = (req, res) => {
    const filtrado = pedidos.find(p => p.id == req.params.id)

    if (filtrado) res.json(filtrado)
    else res.status(404).json("Id não encontrado")
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    pedidos.forEach(pedido => {
        if (pedido.id == id) {
            pedido.cliente_id = dados.cliente_id
            pedido.data = dados.data
        }
    })

    res.send("Pedido alterado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedidos.splice(indice, 1)
        }
    })

    res.send("Pedido excluído com sucesso")
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    alterar,
    excluir
}