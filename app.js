var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var configs = require('./configs');

mongoose.connect(configs.db);

var mainRouter = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.json({"dogan":"asdakdjhaskgdasd"});
});

app.listen(configs.port);
console.log("Acildi");