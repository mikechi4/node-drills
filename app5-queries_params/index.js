var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')
var mainCtrl = require('./controller/mainCtrl');

var app = express();

app.use(bodyParser.json());

app.get('/', mainCtrl.getData)
app.post('/', mainCtrl.postData);
app.get('/:id', mainCtrl.getById);
app.put('/:id', mainCtrl.modifyData);
app.delete('/:id', mainCtrl.removeData);


app.listen(port, function() {
	console.log('Listening on port',port);
})
