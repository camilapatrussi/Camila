
const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id) + 1
    produtos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(produtos)
}

const buscarPorId = (req, res) => {
    const filtrado = produtos.find(p => p.id == req.params.id)

    if (filtrado) res.json(filtrado)
    else res.status(404).json("Id não encontrado")
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    produtos.forEach(produto => {
        if (produto.id == id) {
            produto.nome = dados.nome
            produto.preco = dados.preco
        }
    })

    res.send("Produto alterado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id

    produtos.forEach((produto, indice) => {
        if (produto.id == id) {
            produtos.splice(indice, 1)
        }
    })

    res.send("Produto excluído com sucesso")
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    alterar,
    excluir
}