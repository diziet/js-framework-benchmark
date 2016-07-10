'use strict';

var path = require("path");
var cache = {};
var loaders = [
  {
    test: /\.js$/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }
];
var extensions = [
  '', '.js'
];

module.exports = [{
  cache: cache,
  module: {
    loaders: loaders
  },
  entry: {
    main: './src/app',
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
  },
  resolve: {
    extensions: extensions,
    root: [
      __dirname,
      __dirname + '/src'
    ],
    alias: {
    }
  }
}];