
const itens = require("../../dados/itens.json")
const produtos = require("../../dados/produtos.json")

// Composição
function comporProduto() {
    itens.forEach(item => {
        item.produto = produtos.find(
            produto => produto.id == item.produto_id
        )
    })
}

// Calcula o subtotal
function calcSubtotal() {
    itens.forEach(item => {
        item.subtotal = item.preco * item.quantidade
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id) + 1
    itens.push(dados)

    calcSubtotal()

    res.status(201).json(dados)
}

const listar = (req, res) => {
    comporProduto()
    calcSubtotal()

    res.json(itens)
}

const buscarPorId = (req, res) => {
    const filtrado = itens.find(i => i.id == req.params.id)

    if (filtrado) res.json(filtrado)
    else res.status(404).json("Id não encontrado")
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    itens.forEach(item => {
        if (item.id == id) {
            item.pedido_id = dados.pedido_id
            item.produto_id = dados.produto_id
            item.preco = dados.preco
            item.quantidade = dados.quantidade
        }
    })

    res.send("Item alterado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id

    itens.forEach((item, indice) => {
        if (item.id == id) {
            itens.splice(indice, 1)
        }
    })

    res.send("Item excluído com sucesso")
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    alterar,
    excluir
}
