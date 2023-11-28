import logger from '../logger.cjs';

export default function logRequest(req, res, next){
    logger.info(`request: ${req.method} ${req.path}`,{
        "user-agent": req.headers['user-agent'],
        "referer": req.headers['referer']
    });    
    next();
}
