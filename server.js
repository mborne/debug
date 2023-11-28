const port = process.env.DEBUG_PORT ? process.env.DEBUG_PORT : 3000;

import logger from './src/logger.cjs';
import app from './src/app.js'

const server = app.listen(port, () => {
    logger.info(`debug listening on http://localhost:${port}`);
});

process.on('SIGTERM', () => {
    log.warning('shut down (SIGTERM received)');
    server.close(() => {
        log.debug('HTTP server closed');
    });
});

