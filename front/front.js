function resultadoWarning(texto) {
  return `<div class="alert alert-warning" role="alert">${texto}</div>`
}

function resultadoDanger(texto) {
  return `<div class="alert alert-danger" role="alert">${texto}</div>`
}

function myFunction() {

  let peso = document.querySelector("#txtPeso").value;
  let altura = document.querySelector("#txtAltura").value;

  let uri = `/imc?peso=${peso}&altura=${altura}`;
  let dominio = "http://localhost:3000";
  // console.log(dominio + uri);

  fetch(dominio + uri)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // console.log(JSON.stringify(data));

      let myField = document.querySelector('#result');
      if (data.status == 200) {
        myField.innerHTML = resultadoWarning(data.mensagens);
      } else if (data.status == 400)  {
        myField.innerHTML = resultadoDanger(data.mensagens);
      }

      // let myField = document.querySelector('#result');
      // myField.innerHTML = JSON.stringify(data);
      // console.log();

    })

}
