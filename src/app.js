import express from 'express';

const app = express();

app.use(express.static('public'));

import logRequest from './middlewares/logRequest.js';
app.use(logRequest);

import health from './controllers/health.js';
app.get('/api/health', health);

import metadata from './controllers/metadata.js';
app.get('/api/metadata', metadata);

import headers from './controllers/headers.js';
app.get('/api/headers', headers);

import crash from './controllers/bug/crash.js';
app.post('/api/bug/crash', crash);

import memoryLeak from './controllers/bug/memoryLeak.js';
app.post('/api/bug/memory-leak', memoryLeak);

import stress from './controllers/bug/stress.js';
app.post('/api/bug/stress', stress);

export default app;
