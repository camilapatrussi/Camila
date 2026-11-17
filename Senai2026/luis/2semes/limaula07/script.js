
const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value;


    const precoLanche = Number(
        document.getElementById("lanche").value
    );

    const quantidade = Number(
        document.getElementById("quantidade").value
    );

    const precoBebida = Number(
        document.getElementById("bebida").value
    );

    const totalLanches = precoLanche * quantidade;


    const subtotal = totalLanches + precoBebida;

    let desconto = 0;

    if (subtotal >= 50) {

        desconto = subtotal * 0.10;

    }

    const total = subtotal - desconto;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h2>Pedido realizado!</h2>

        <p><strong>Cliente:</strong> ${nome}</p>

        <p>
            <strong>Quantidade de lanches:</strong>
            ${quantidade}
        </p>

        <p>
            <strong>Subtotal:</strong>
            R$ ${subtotal.toFixed(2)}
        </p>

        <p>
            <strong>Desconto:</strong>
            R$ ${desconto.toFixed(2)}
        </p>

        <h3>
            Total: R$ ${total.toFixed(2)}
        </h3>
    `;
});