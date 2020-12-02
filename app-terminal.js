const imc = require("./app");

// entrada do usuário
let peso   = parseFloat(process.argv[2], 10);
let altura = parseFloat(process.argv[3], 10);

console.log(  imc(peso, altura)  );