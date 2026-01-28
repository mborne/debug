import logger from '../../logger.cjs';
import { setStressCpuRunning } from '../../stressState.js';

import { exec } from 'child_process';

/**
 * Runs CPU stress test (stress-ng). stress_cpu is true until the process exits.
 */
export default function cpu(req, res) {
    logger.info("running cpu stress test...");
    setStressCpuRunning(true);
    exec('stress-ng --cpu 0 -t 30s --temp-path=/tmp',
        function (error, stdout, stderr) {
            setStressCpuRunning(false);
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





