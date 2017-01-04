var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('catalogapi', ['products']);

app.use(bodyParser.json());

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

app.get('/products/:id', function(req, res){
	console.log('Fetching Product...');
	db.products.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, doc){
		if(err){
			res.send(err);
		} else {
			console.log('Sending Product...');
			res.json(doc);
		}
	});
});

app.post('/products', function(req, res){
	db.products.insert(req.body, function(err, doc){
		if(err){
			res.send(err);
		} else {
			console.log('Adding Product...');
			res.json(doc);
		}
	});
});

app.put('/products/:id', function(req, res){
	db.products.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},
		update:{$set:{
			name: req.body.name,
			category: req.body.category,
			description: req.body.description
		}},
		new: true
}, function(err, doc){
		if(err){
			res.send(err);
		} else {
			console.log('Updating Product...');
			res.json(doc);
		}
	});
});

app.delete('/products/:id', function(req, res){
	console.log('Fetching Product...');
	db.products.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, doc){
		if(err){
			res.send(err);
		} else {
			console.log('Removing Product...');
			res.json(doc);
		}
	});
});

app.listen(3000);
console.log('Server is running on port 3000...');
