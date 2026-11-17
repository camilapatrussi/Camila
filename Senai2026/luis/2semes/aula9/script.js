
let totalCompra = 0;

function adicionarCarrinho(nome, preco) {
    const lista = document.getElementById("listaCarrinho");

    const item = document.createElement("li");

    item.textContent = nome + " - R$ " + preco.toFixed(2) + " ";

    // Criar botão de excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.onclick = function () {
        excluirItem(item, preco);
    };

    item.appendChild(botaoExcluir);
    lista.appendChild(item);

    totalCompra += preco;
    atualizarTotal();
}

function excluirItem(item, preco) {
    item.remove();

    totalCompra -= preco;
    atualizarTotal();
}

function atualizarTotal() {
    const total = document.getElementById("total");

    total.textContent = "Total: R$ " + totalCompra.toFixed(2);
}


function finalizarCompra() {
    const lista = document.getElementById("listaCarrinho");

    if (lista.children.length === 0) {
        alert("Adicione pelo menos um produto no carrinho!");
    } else {
        alert("Compra finalizada! R$ " + totalCompra.toFixed(2));

        lista.innerHTML = "";

        totalCompra = 0;

        atualizarTotal();
    }
}
