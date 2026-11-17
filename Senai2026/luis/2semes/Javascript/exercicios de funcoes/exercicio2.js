function verificarNumero(num){
    if (num > 0){
        console.log("positivo");
    }
    else if(num == 0){
        console.log("Zero");
    }
    else 
        console.log("negativo");
}

console.log(verificarNumero(10));
console.log(verificarNumero(-5));
console.log(verificarNumero(0));