import logger from '../../logger.cjs';

const buffers = [];

const BUFFER_SIZE = 1000*1024;

/**
 * Allows to crash the process
 */
export default function memoryLeak(req, res){
    const buffer = new Array(BUFFER_SIZE).fill(0);
    buffers.push(buffer);
    logger.warn("memory-leak: one more buffer...",{
        count: buffers.length
    });
    return res.json({
        message: "Buffer added to memory",
        count: buffers.length
    });
};

