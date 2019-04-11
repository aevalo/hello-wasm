const path = require('path');
module.exports = {
  devtool: 'inline-source-map',
  entry: './index.js',
  devServer: {
    host: 'localhost',
    port: 8080
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  mode: 'development'
};
