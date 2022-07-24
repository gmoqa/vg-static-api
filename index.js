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

app.get('/snes/USA', (req, res) => {
    const games = snes.filter(game => game.region === 'NA');
    res.json(games);
})

app.get('/snes/EUR', (req, res) => {
    const games = snes.filter(game => game.region === 'EU');
    res.json(games);
})

app.get('/snes/JAP', (req, res) => {
    const games = snes.filter(game => game.region === 'JP');
    res.json(games);
})

app.use((req, res, next) => {
    res.status(404);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);