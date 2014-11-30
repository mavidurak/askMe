var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// kaydol

// put, delete, post, get

// put insert ekleme
// post update guncelleme
// delete silme
// get verinin okunmas readonly

app.get('/', function(req, res) {
  res.json({"version":"1.0.0","description":"mavidurak restful web api"});
});

app.put('/signup', function(req, res) {
  res.json({
    "username":req.body.username,
    "password":req.body.password
  });
});

app.listen(90);
