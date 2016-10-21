/*
 * Module Dependencies
 * */

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractCSS = new ExtractTextPlugin('css/[name].css')
var webpackOptimize = new webpack.optimize.OccurenceOrderPlugin()
var hotModuleReplacement = new webpack.HotModuleReplacementPlugin()
var noErrorsPlugin = new webpack.NoErrorsPlugin()

// Plugins POSTCSS
var lost = require('lost') //GridSystem with PostCSS
var autoprefixer = require('autoprefixer') //autoprefixer
var rucksackCSS = require('rucksack-css') //font-size responsive
var mediasMinMax = require('postcss-media-minmax') //Abreviación de sintaxis en los Media queries con >= o <=
var customMedias = require('postcss-custom-media') //Crea media queries custom como: @custom-media --mobile (min-width: 500px)

// Routes

var BUILD_DIR = path.join(__dirname, 'public') //Outpout
var APP_DIR = path.join(__dirname, 'app') //Input

var config = {
  devtool :'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR
  ],
  cache: true,
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: APP_DIR,
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader"
    },{
      test: /\.(sass|scss)$/,
      loader: extractCSS.extract(['css?minimize','postcss','sass'])
    }]
  },
  postcss: function () {
    return {
      plugins: [
        autoprefixer,
        lost,
        rucksackCSS,
        mediasMinMax,
        customMedias
      ]
    }
  },
  sassLoader: {
    indentedSyntax: true
  },
  plugins: [webpackOptimize, extractCSS, hotModuleReplacement, noErrorsPlugin ]
}

module.exports = config;
