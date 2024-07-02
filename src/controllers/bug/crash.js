import logger from '../../logger.cjs';

/**
 * Allows to crash the process
 */
export default function crash(req, res){
    logger.error("crash: Ooops! someone called crash :'(");
    res.send({
        "status": "I'll be back!"
    });
    process.exit(1);
};

