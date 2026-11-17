function VerificarLogin() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    console.log("Usuario:", usuario);
    console.log("Senha:", senha);

    let situacao;

 if (usuario == "login" && senha == "1234") { 
        situacao = "Login feito com sucesso"; 
    } else { 
        situacao = "usuário ou senha inválidos";
    } 
    
    document.getElementById("login").textContent = "Situação: " + situacao;
    
    
    } 
    