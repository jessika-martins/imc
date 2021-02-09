const imc = require("./api");

// entrada do usuário
let peso = parseFloat(process.argv[2], 10);
let altura = parseFloat(process.argv[3], 10);

let resultado = imc(peso, altura);

// camada de apresentação
let mensagens = {
    'abaixo':    'Abaixo do peso',
    'normal':    'Está normal',
    'sobrepeso': 'Com sobrepeso',
    'obeso':     'Acima do peso',
}

console.log( mensagens[resultado] );
    