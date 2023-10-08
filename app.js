const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/health', require('./controllers/health'));

app.get('/api/metadata', require('./controllers/metadata'));

app.get('/api/headers', require('./controllers/headers'));

module.exports = app;
