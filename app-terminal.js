const app = require("./app");

let a = parseFloat(process.argv[2], 10);
let b = parseFloat(process.argv[3], 10);
let resultado = parseFloat(process.argv[4],10);

let imc = 0;
imc = a /Math.pow(b,2)

if (imc < 18.5){
    resultado = "Abaixo do peso";
} else if((imc > 18.5) && (imc <24.9)){
    resultado = "Normal";
} else if ((imc >24.9) && (imc <30)){
    resultado ="Sobrepeso";
} else if (imc >30){
    resultado = "Obesidade";
} 

console.log(resultado);