//
// Calcular o IMC
//
function imc(peso, altura) {

    peso   = parseFloat(peso);
    altura = parseFloat(altura);

    let imc = peso / Math.pow(altura, 2);

    if (imc < 18.5) {
        return "abaixo";
    } else if ((imc > 18.5) && (imc < 24.9)) {
        return "normal";
    } else if ((imc > 24.9) && (imc < 30)) {
        return "sobrepeso";
    } else if (imc > 30) {
        return "obeso";
    }
}

module.exports = imc;