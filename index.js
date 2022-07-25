const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));

const url = 'https://vg-static-api.herokuapp.com';

app.use('/SNES', express.static(__dirname + '/SNES/all.json'));
app.use('/SNES/USA', express.static(__dirname + '/SNES/usa.json'));
app.use('/SNES/EUR', express.static(__dirname + '/SNES/eur.json'));
app.use('/SNES/JAP', express.static(__dirname + '/SNES/jap.json'));

app.use('/PS', express.static(__dirname + '/PS/all.json'));
app.use('/PS/USA', express.static(__dirname + '/PS/usa.json'));
app.use('/PS/EUR', express.static(__dirname + '/PS/eur.json'));
app.use('/PS/JAP', express.static(__dirname + '/PS/jap.json'));

app.get('', (req, res) => {
    res.json({
        message: 'Welcome to VG Static API',
        services: [
            {
                snes: url + '/SNES',
                regions: [
                    url + '/SNES/USA',
                    url + '/SNES/EUR',
                    url + '/SNES/JAP',
                ]
            },
            {
                ps: url + '/PS',
                regions: [
                    url + '/PS/USA',
                    url + '/PS/EUR',
                    url + '/PS/JAP',
                ]
            }
        ]
    });
})

app.use((req, res, next) => {
    res.status(404).end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);