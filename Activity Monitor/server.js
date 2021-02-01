const express = require('express');
const app = express();
const porta = 3000;

app.use(express.static('./'));
app.use('/scripts', express.static(__dirname + './scripts'));
app.use('/styles', express.static(__dirname + './styles'));

app.get('', (req, res) => {
    res.render('index.html');
})

app.listen(porta, () => console.log('servidor rodando na porta ' + porta))