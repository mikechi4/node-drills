var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data');
var mainCtrl = require('./controller/mainCtrl')
var port = 3000;
var app = express();

app.use(bodyParser.json());

app.get('/', mainCtrl.getData);
app.post('/', mainCtrl.postData);

app.listen(port, function(){
  console.log("hello there... ");
})
