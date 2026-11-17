const express = require("express")
const times = require("../dados.json")

const mostrarTimes = (req, res) => {
    calcularPontos()
    res.send(times)
}

const novoTime = (req, res) => {
    if(req.body){
        res.send("Time incluido, em análise")
        times.push(req.body)
    }else {
        res.send("Erro ao receber solicitação de time")
    }   
}

const calcularPontos = () => {
    times.forEach(p=>{
        p.point = p.vitorias * 3
        p.ponto = p.empates * 1
        p.pontos= p.derrotas * 0
        p.pontostotal = p.point + p.ponto + p.pontos
    })
}

const app = express()
app.use(express.urlencoded({extended:true}))
const porta = 3000

app.get("/", mostrarTimes)
app.post("/", novoTime)

app.listen(porta, () => { 
    console.log(`Cliente: http://localhost:5500/cliente/`)
    console.log(`Servidor: http://localhost:${porta}`) 
})