
var mongoose = require('mongoose');
var User = require('../models/User');


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
