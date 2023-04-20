const express = require('express');

const pkg = require('./package.json');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Hello from debug:${pkg.version}` );
});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.get('/api/version', (req, res) => {
    res.send(pkg.version);
});

app.get('/api/headers', (req, res) => {
    res.json(req.headers);
});

app.listen(port, () => {
    console.log(`debug listening on http://localhost:${port}`);
});

