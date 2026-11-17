
const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1
    clientes.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(clientes)
}

const buscarPorId = (req, res) => {
    const filtrado = clientes.find(c => c.id == req.params.id)

    if (filtrado) res.json(filtrado)
    else res.status(404).json("Id não encontrado")
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    clientes.forEach(cliente => {
        if (cliente.id == id) {
            cliente.nome = dados.nome
            cliente.email = dados.email
            cliente.telefone = dados.telefone
        }
    })

    res.send("Cliente alterado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id

    clientes.forEach((cliente, indice) => {
        if (cliente.id == id) {
            clientes.splice(indice, 1)
        }
    })

    res.send("Cliente excluído com sucesso")
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    alterar,
    excluir
}
