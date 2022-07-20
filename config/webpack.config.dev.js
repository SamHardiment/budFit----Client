const config = require("./webpack.config.js");

config.devServer = {
  historyApiFallback: true,
  port: 8080,
  open: true,
  liveReload: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization",
  },
};

config.devtool = "inline-source-map";

module.exports = config;
