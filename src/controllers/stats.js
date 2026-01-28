import { buffers } from '../memoryLeakData.js';

/**
 * Provides started_at, memory (process stats) and leaked_buffers_count.
 */
export default function stats(req, res) {
    const startedAt = new Date(Date.now() - process.uptime() * 1000).toISOString();
    const mem = process.memoryUsage();

    res.send({
        started_at: startedAt,
        memory: { rss: mem.rss, heapUsed: mem.heapUsed },
        leaked_buffers_count: buffers.length
    });
}
