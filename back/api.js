// Calcular o IMC
function imc(peso, altura) {
    peso = parseFloat(peso);
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

// Mensagem amigável
function mensagens(resultadoImc) {
    let _mensagens = {
        'abaixo': 'Abaixo do peso',
        'normal': 'Está normal',
        'sobrepeso': 'Com sobrepeso',
        'obeso': 'Acima do peso',
    }
    return _mensagens[resultadoImc]
}

function validar(altura) {
    if (altura >= 3) {
        return true; // ruim
    } else {
        return false; // bom
    }
}

module.exports = { imc, mensagens, validar };