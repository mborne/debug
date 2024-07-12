import logger from '../../logger.cjs';

import { exec } from 'child_process';

/**
 * Allows to crash the process
 */
export default function memory(req, res) {
    logger.info("running memory stress test...");
    exec('stress-ng --vm 1 --vm-bytes 128M --mmap 1 --mmap-bytes 128M --page-in -t 30s --temp-path=/tmp',
        function (error, stdout, stderr) {
            if ( stdout ){
                logger.info(stdout);
            }
            if ( stderr ){
                logger.error(stderr);
            }
            if ( error ){
                res.status(500).json({
                    "message": "memory stress test failed (stress-ng available?)"
                });
                return;
            }
            res.json({
                message: "memory stress test complete"
            });
        })
    ;
};







