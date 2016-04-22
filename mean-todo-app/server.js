var express = require('express');
var app = express();

var PORT = process.env.Port || 3000;

app.all('/*', function(req, res){
	res.send('<!DOCTYPE html><html><head><title>MEAN ToDo App</title></head><body><h1>Hoi i bis de Chasperli</h1></body></html>');
});

app.listen(PORT, function(){
	console.log('De Server lauft wie gschmiert, er lost sogar no of em Loch '+PORT)
});