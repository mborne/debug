const winston = require('winston');

const LOG_LEVEL = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info';

const formats = {
    json: winston.format.json(),
    simple: winston.format.simple()
};
const LOG_FORMAT = process.env.LOG_FORMAT ? process.env.LOG_FORMAT : 'simple';
const format = formats[LOG_FORMAT];

const logger = winston.createLogger({
    level: LOG_LEVEL,
    format: format,
    defaultMeta: { service: 'debug' },
    transports: [
        new winston.transports.Console()
    ],
});

module.exports = logger;

