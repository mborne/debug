import { hostname, arch } from 'os';

const color = process.env.DEBUG_COLOR ? process.env.DEBUG_COLOR : null;

/**
 * Provides hostname, version and arch to illustrates version upgrade / downgrade.
 */
export default function metadata(req, res){
    res.send({
        version: process.env.npm_package_version,
        hostname: hostname(),
        arch: arch(),
        color: color
    });
}

