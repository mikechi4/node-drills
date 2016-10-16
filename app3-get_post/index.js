var express = require('express');
var bodyParser = require('body-parser');
// var mainCtrl = require('../controllers/mainCtrl');
var port = 3000;

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('hellooooo');
});
app.get('/api/items', function(req, res){
	res.status(200).json(items);
});


app.listen(port, function() {
	console.log('Listening on port',port);
})

var items = [
	{"Name":"chevrolet chevelle malibu","Miles_per_Gallon":18,"Cylinders":8,"Displacement":307,"Horsepower":130,"Weight_in_lbs":3504,"Acceleration":12,"Year":"1970-01-01","Origin":"USA"},
	{"Name":"ford torino","Miles_per_Gallon":17,"Cylinders":8,"Displacement":302,"Horsepower":140,"Weight_in_lbs":3449,"Acceleration":10.5,"Year":"1970-01-01","Origin":"USA"},
	{"Name":"pontiac catalina","Miles_per_Gallon":14,"Cylinders":8,"Displacement":455,"Horsepower":225,"Weight_in_lbs":4425,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"},
	{"Name":"ford torino (sw)","Miles_per_Gallon":null,"Cylinders":8,"Displacement":351,"Horsepower":153,"Weight_in_lbs":4034,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"},
	{"Name":"plymouth 'cuda 340","Miles_per_Gallon":14,"Cylinders":8,"Displacement":340,"Horsepower":160,"Weight_in_lbs":3609,"Acceleration":8,"Year":"1970-01-01","Origin":"USA"},
	{"Name":"toyota corona mark ii","Miles_per_Gallon":24,"Cylinders":4,"Displacement":113,"Horsepower":95,"Weight_in_lbs":2372,"Acceleration":15,"Year":"1970-01-01","Origin":"Japan"},
	{"Name":"datsun pl510","Miles_per_Gallon":27,"Cylinders":4,"Displacement":97,"Horsepower":88,"Weight_in_lbs":2130,"Acceleration":14.5,"Year":"1970-01-01","Origin":"Japan"},
	{"Name":"saab 99e","Miles_per_Gallon":25,"Cylinders":4,"Displacement":104,"Horsepower":95,"Weight_in_lbs":2375,"Acceleration":17.5,"Year":"1970-01-01","Origin":"Europe"},
	{"Name":"chevy c20","Miles_per_Gallon":10,"Cylinders":8,"Displacement":307,"Horsepower":200,"Weight_in_lbs":4376,"Acceleration":15,"Year":"1970-01-01","Origin":"USA"},
	{"Name":"chevrolet vega 2300","Miles_per_Gallon":28,"Cylinders":4,"Displacement":140,"Horsepower":90,"Weight_in_lbs":2264,"Acceleration":15.5,"Year":"1971-01-01","Origin":"USA"},
	{"Name":"amc gremlin","Miles_per_Gallon":19,"Cylinders":6,"Displacement":232,"Horsepower":100,"Weight_in_lbs":2634,"Acceleration":13,"Year":"1971-01-01","Origin":"USA"},
	{"Name":"amc matador","Miles_per_Gallon":18,"Cylinders":6,"Displacement":232,"Horsepower":100,"Weight_in_lbs":3288,"Acceleration":15.5,"Year":"1971-01-01","Origin":"USA"}

]
