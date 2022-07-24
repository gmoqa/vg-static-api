const express = require('express');
const helmet = require('helmet');
const snes = require('./snes.json');

const app = express();

app.use(helmet());

app.get('', (req, res) => {
    res.json('Welcome to VG Static API');
})

app.get('/snes', (req, res) => {
    res.json(snes);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT);