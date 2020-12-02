const display = document.getElementById("display");
const number1 = document.getElementById("txt-number1");
const number2 = document.getElementById("txt-number2");

const btnIMC = document.getElementById("btn-imc");

btnIMC.onclick = function () {

    let peso = parseFloat(number1.value);
    let altura = parseFloat(number2.value);

    resultado  = imc(peso, altura);

    display.value = "O seu peso está " + resultado;
    
}