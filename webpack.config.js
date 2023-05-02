const path = require("path");

module.exports = {
  entry: ['./front/index.js'],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public/build"),
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
      }]
  },
};
