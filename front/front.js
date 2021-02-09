
function myFunction() {

  fetch('http://localhost:3000/imc?peso=45&altura=1.6')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // console.log(JSON.stringify(data));

      let myField = document.querySelector('#result');
      myField.innerHTML = JSON.stringify(data);

    })

}
