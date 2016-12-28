var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('catalogapi', ['products']);

app.get('/', function(req, res){
	res.send('It Works!');
});

app.get('/products', function(req, res){
	console.log('Fetching Products...');
	db.products.find(function(err, docs){
		if(err){
			   res.send(err);
		} else {
  			console.log('Sending Products...');
  			res.json(docs);
		}
	});
});

app.listen(3000);
console.log('Server is running on port 3000...');
