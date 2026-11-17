function salvar(){
    constnome = document.getElementById("nome").value;

    if(!nome){
        alert("Digite um nome antes");
        return;
    }

    //criar uma chave unica
    const chave = "nome_" + Date.now();

    document.getElementById("nome").value = "";

    document.getElementById("resultado").textContent = "Nome salvo:" + nome;

    listarNome();
}

//Listar todos os nomes Salvos:
function listarNomes(){
    const nomes = []

    for(let i = 0; localStorage.length; i++){
        //key = retor a chave que está naquela posição;
        const chave = localStorage.key(i)

        if(chave.startsWith("nome_")){
            nomes.push({
                chave: chave,
                valor: localStorage.getItem(chave);
            })
        }
        
        const titulo = document.cr
    }
}