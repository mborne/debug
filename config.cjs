// Note : CommonJS is used to avoid ExperimentalWarning about Importing JSON module
const pkg = require("./package.json");

const config = {
  VERSION: pkg.version
};

module.exports = config;