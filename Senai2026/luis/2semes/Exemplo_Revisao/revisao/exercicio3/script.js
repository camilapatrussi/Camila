function calcularCompra(){

    let preco = Number(document.getElementById("preco").value)
    let quantidade = Number(document.getElementById("quantidade").value)
    let pagamento = document.getElementById("pagamento").value
    let valorEntregue = Number(document.getElementById("valorEntregue").value)

    let subtotal = preco * quantidade
    let desconto = 0
    let total = subtotal

    if(pagamento === "dinheiro"){
        desconto = subtotal * 0.10
    }

    if(pagamento === "pix"){
        desconto = subtotal * 0.05
    }

    total = subtotal - desconto

    let resultado = `
        Subtotal: R$ ${subtotal.toFixed(2)}<br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Total: R$ ${total.toFixed(2)}<br>
    `

    if(pagamento === "dinheiro"){
        let troco = valorEntregue - total

        resultado += `Troco: R$ ${troco.toFixed(2)}`
    }

    document.getElementById("resultado").innerHTML = resultado
}