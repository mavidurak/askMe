
var mongoose = require('mongoose');
var User = require('../models/User');
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

exports.register = function(req, res) {
    
    var userModel = mongoose.model('User',User);
    var userObject = new User();
    
    User.count({username:req.body.username}, function(err, count) {
        if(count > 0) console.log("kullanılıyor");
        else {
            User.username = req.body.username;
            User.password = req.body.password;
            User.save(function(err){});
        }
    });

}


module.exports = router;