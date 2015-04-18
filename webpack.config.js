var path = require('path'),
  webpack = require('webpack'),
  htmlPlugin = require('html-webpack-plugin'),
  ngminPlugin = require('ngmin-webpack-plugin')

var srcRoot = 'src/'

module.exports = {
  cache: true,
  progress: true,
  colors: true,

  entry: ['./' + srcRoot + 'game.js'],

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ],
    noParse: /node_modules\/phaser/
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('node_modules', 'vendor.bundle.js'),
    new htmlPlugin({ template: path.join(srcRoot, 'index.html') })
  ]
}
