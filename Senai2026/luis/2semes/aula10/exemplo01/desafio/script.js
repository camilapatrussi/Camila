
const usuarioCorreto = "camisstar";
const senhaCorreta = "hero3108";

const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        window.location.href = "login-valido.html";

    } else {

        window.location.href = "login-invalido.html";

    }

});
