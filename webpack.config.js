var path = require('path'),
  webpack = require('webpack'),
  htmlPlugin = require('html-webpack-plugin')

var srcRoot = 'src/'

module.exports = {
  cache: true,
  progress: true,
  colors: true,

  entry: [path.join(__dirname, srcRoot, 'game.js')],

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin(['node_modules', 'engine'], 'engine.bundle.js'),
    new htmlPlugin({ template: path.join(srcRoot, 'index.html') })
  ]
}
