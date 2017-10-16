var config = require("./webpack.config.js");
var webpack = require("webpack");
var webpackDevServer=require("webpack-dev-server");

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  contentBase: "dist",
  hot: true,
  inline: true,
  historyApiFallback: true,
  proxy: {
    '/web/sw_*/**': {
      target: 'http://172.30.205.224:8081',
      // target: 'http://172.30.200.163:8082',
      crossOrigin: true,
      // port: "8080",
      secure: false
    },
    '/csv_templates/**': {
      target: 'http://172.30.205.224:8081',
      // target: 'http://172.30.200.163:8082',
      crossOrigin: true,
      // port: "8080",
      secure: false
    },
  }
});


server.listen(3332);
