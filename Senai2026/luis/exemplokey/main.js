

const usuario = {
    nome: "Pedro",
    email: "pedro@email.com",
    idade: 25,
    cidade: "Jaguariúna"
};

const chaves = Object.keys(usuario);

for (let i = 0; i < chaves.length; i++) {
    if (chaves[i] == "email" || chaves[i] == "cidade") {
        console.log(chaves[i], usuario[chaves[i]]);
    }
}