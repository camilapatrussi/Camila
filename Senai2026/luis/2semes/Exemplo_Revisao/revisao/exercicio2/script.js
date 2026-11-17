function verificarNumeros(){
    let numeros = []

    numeros.push(Number(document.getElementById("num1").value))
    numeros.push(Number(document.getElementById("num2").value))
    numeros.push(Number(document.getElementById("num3").value))
    numeros.push(Number(document.getElementById("num4").value))
    numeros.push(Number(document.getElementById("num5").value))

    let maior = numeros[0]
    let menor = numeros[0]

    let soma = 0;
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++){
        let numero = numeros[i]

        if(numero > maior){
            maior = numero
        }

        if(numero < menor){
            menor = numero
        }

        soma += numero

        if(numero % 2 === 0){
            pares++
        } else {
            impares++
        }
    }
    document.getElementById("resultado").innerHTML = `
        Maior número: ${maior}<br>
        Menor número: ${menor}<br>
        Soma: ${soma}<br>
        Quantidade de pares: ${pares}<br>
        Quantidade de ímpares: ${impares}
        `
}