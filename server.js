var express = require('express')
var app = express()
var port = 3000

/*Public and Source folders*/
app.set('views', __dirname + '/src/views')
app.use(express.static(__dirname + '/public'))

/*Config engine for jade engine*/
app.set('view engine', 'pug')

/*Routes*/
app.get('*', function(req, res){
  res.render('index', {title: 'Quickly Quoted Price'})
})

/*Listen an run Server*/
app.listen(port, function(){
  console.log('Server running on port: ' + port);
})
