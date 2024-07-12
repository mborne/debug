import logger from '../../logger.cjs';

import { exec } from 'child_process';

/**
 * Allows to crash the process
 */
export default function cpu(req, res) {
    logger.info("running cpu stress test...");
    exec('stress-ng --cpu 0 -t 30s --temp-path=/tmp',
        function (error, stdout, stderr) {
            if ( stdout ){
                logger.info(stdout);
            }
            if ( stderr ){
                logger.error(stderr);
            }
            if ( error ){
                res.status(500).json({
                    "message": "stress cpu test failed (stress-ng available)"
                });
                return;
            }
            res.json({
                message: "stress cpu test complete"
            });
        })
    ;
};





