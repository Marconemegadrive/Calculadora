// Receber dois valores do usuário
var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));

// Receber o operador do usuário
var operador = prompt("Digite o operador (+, -, *, /):");

// Verificar se os valores são válidos
if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Por favor, insira valores numéricos válidos.");
} else {
    // Realizar a operação com base no operador inserido
    switch (operador) {
        case "+":
            console.log("Resultado: " + (valor1 + valor2));
            break;
        case "-":
            console.log("Resultado: " + (valor1 - valor2));
            break;
        case "*":
            console.log("Resultado: " + (valor1 * valor2));
            break;
        case "/":
            if (valor2 !== 0) {
                var resultado = Math.floor(valor1 / valor2);
                var resto = valor1 % valor2;
                console.log("Resultado: " + resultado + ", Resto: " + resto);
            } else {
                console.log("Erro: divisão por zero.");
            }
            break;
        default:
            console.log("Operador inválido. Por favor, use +, -, * ou /.");
    }
}
