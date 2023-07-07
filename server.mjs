import config from "./config.cjs";
import process from 'process';
import express from 'express';
import os from 'os';

process.on('SIGTERM', () => {
    console.log('shut down (SIGTERM received)');
    process.exit(0);
});


const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/health', (req, res) => {
    res.send("OK");
});

app.get('/api/metadata', (req, res) => {
    res.send({
        version: config.VERSION,
        hostname: os.hostname(),
        arch: os.arch()
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

