const pkg = require("../package.json");
const os = require('os');

module.exports = (req, res) => {
    res.send({
        version: pkg.version,
        hostname: os.hostname(),
        arch: os.arch()
    });
}
