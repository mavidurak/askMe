var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');


exports.register = function(body) {
    
    var userModel = mongoose.model('User',User);
    var userObject = new User();
    
    User.username = body.username;
    User.password = body.password;
    
    User.save(function(err){});
}

module.exports = router;