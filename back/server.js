const express = require('express');
const cors = require('cors');
const imc = require("./api");

const app = express();
const port = 3000;

app.use(cors());


//
// http://localhost:3000/imc?peso=45&altura=1.60
//
app.get('/imc?', (req, res) => {

    let peso = parseFloat(req.query.peso);
    let altura = parseFloat(req.query.altura);

    res.send({
        peso: peso,
        altura: altura,
        imc: imc(peso, altura)
    });
})



app.listen(port, () => {
    console.log(`server running ${port}`)
})
