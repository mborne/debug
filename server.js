const express = require('express');

const pkg = require('./package.json');
const os = require("os");

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/health', (req, res) => {
    res.send("OK");
});

app.get('/api/metadata', (req, res) => {
    res.send({
        version: pkg.version,
        hostname: os.hostname()
    });
});

app.get('/api/headers', (req, res) => {
    let headers = Object.assign({}, req.headers);
    if ( headers.cookie ){
        headers.cookie = 'HIDDEN';
    }
    res.json(headers);
});

app.listen(port, () => {
    console.log(`debug listening on http://localhost:${port}`);
});

