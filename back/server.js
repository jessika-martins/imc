const express = require('express');
const cors = require('cors');
const api = require("./api");

const app = express();
const port = 3000;

app.use(cors());


//
// http://localhost:3000/imc?peso=45&altura=1.60
//
app.get('/imc?', (req, res) => {

    let peso = parseFloat(req.query.peso)
    let altura = parseFloat(req.query.altura)
    let mensagens = "";

    if (api.validar(altura)) {
        mensagens = "Altura inválida";
        res.status(400);
        res.send({ status: 400, mensagens });
    }

    let imc = api.imc(peso, altura)
    mensagens = api.mensagens(imc)

    // res.send({
    //     peso: peso,
    //     altura: altura,
    //     imc: imc,
    //     mensagens: mensagens
    // });

    res.send({  status: 200, peso, altura, imc, mensagens });

})



app.listen(port, () => {
    console.log(`server running ${port}`)
})
