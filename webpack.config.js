const HTMLWebpackPlugin = require ('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:'./src/app/index.js',
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer:{
    port: 3000
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' })
  ]
};