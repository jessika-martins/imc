const api = require("./api");

// entrada do usuário
let peso = parseFloat(process.argv[2], 10);
let altura = parseFloat(process.argv[3], 10);

let resultado =  api.imc(peso, altura);
console.log( api.mensagens(resultado) );
    