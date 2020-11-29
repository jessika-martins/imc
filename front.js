const display = document.getElementById("display");
const number1 = document.getElementById("txt-number1");
const number2 = document.getElementById("txt-number2");

const btnIMC = document.getElementById("btn-imc");

btnIMC.onclick = function(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);

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

display.value = "O seu peso está " +resultado;
}