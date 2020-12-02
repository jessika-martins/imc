//
// Calcular o IMC
//
function imc(peso, altura) {

    peso   = parseFloat(peso);
    altura = parseFloat(altura);

    let imc = peso / Math.pow(altura, 2);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if ((imc > 18.5) && (imc < 24.9)) {
        return "Normal";
    } else if ((imc > 24.9) && (imc < 30)) {
        return "Sobrepeso";
    } else if (imc > 30) {
        return "Obesidade";
    }
}

// module.exports = imc;