const port = process.env.DEBUG_PORT ? process.env.DEBUG_PORT : 3000;

import app from './src/app.js'

const server = app.listen(port, () => {
    console.log(`debug listening on http://localhost:${port}`);
});

process.on('SIGTERM', () => {
    console.log('shut down (SIGTERM received)');
    server.close(() => {
        debug('HTTP server closed')
    });
});

