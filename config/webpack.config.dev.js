const config = require("./webpack.config.js");

config.devServer = {
  historyApiFallback: true,
  port: 8080,
  open: true,
  liveReload: true,
};

config.devtool = "inline-source-map";

module.exports = config;
