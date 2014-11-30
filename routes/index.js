var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.get('/add_question', function(req, res) {
  res.render('add_question');
});

router.get('/question/detail/:id', function(req, res) {
  res.render('question/list');
});

module.exports = router;
