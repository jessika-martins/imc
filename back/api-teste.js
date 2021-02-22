const api = require("./api");

let resultadoImc = api.imc(45, 1.60);
console.log("abaixo" == resultadoImc);

let resultadoValidar;
const DEU_BOM = false;
const DEU_RUIM = true;

resultadoValidar = api.validar(2.9);
console.log(DEU_BOM == resultadoValidar);

resultadoValidar = api.validar(3);
console.log(DEU_RUIM == resultadoValidar);

resultadoValidar = api.validar(4);
console.log(DEU_RUIM == resultadoValidar);

//
// aqui cabem mais testes
//
