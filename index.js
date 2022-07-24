const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const snes = require('./SNES/all.json');
const ps = require('./PS/all.json');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));

app.use('/SNES', express.static(__dirname + '/SNES/all.json'));
app.use('/SNES/USA', express.static(__dirname + '/SNES/usa.json'));
app.use('/SNES/EUR', express.static(__dirname + '/SNES/eur.json'));
app.use('/SNES/JAP', express.static(__dirname + '/SNES/jap.json'));

app.use('/PS', express.static(__dirname + '/PS/all.json'));
app.use('/PS/USA', express.static(__dirname + '/PS/usa.json'));
app.use('/PS/EUR', express.static(__dirname + '/PS/eur.json'));
app.use('/PS/JAP', express.static(__dirname + '/PS/jap.json'));

app.get('', (req, res) => {
    res.json('Welcome to VG Static API');
})

app.use((req, res, next) => {
    res.status(404).end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);