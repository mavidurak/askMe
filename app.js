var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var configs = require('./configs');

mongoose.connect(configs.db);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout');

var mainRouter = require('./routes/index');
var expressLayouts = require('express-ejs-layouts');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.get('/', function(req, res){
    res.render('index');
});

app.listen(101);

module.exports = app;
