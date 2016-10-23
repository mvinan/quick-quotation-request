var express = require('express')
var app = express()
var port =process.env.PORT || 3000

// var config = require('./webpack.config.js')
// var webpack = require('webpack')
// var webpackDevMiddleware = require('webpack-dev-middleware')
// var webpackHotMiddleware = require('webpack-hot-middleware')
//
// /*Compiler*/
// var compiler = webpack(config);
//
// app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
// app.use(webpackHotMiddleware(compiler))

/*Public and Source folders*/
app.set('views', __dirname + '/src/views')
app.use(express.static(__dirname + '/public'))

/*Config engine for jade engine*/
app.set('view engine', 'pug')

/*Routes*/
app.get('*', function(req, res){
  res.render('index', {title: 'miguelvinan.com'})
})

/*Listen an run Server*/
app.listen(port, function(){
  console.log('Server running on port: ' + port);
})
