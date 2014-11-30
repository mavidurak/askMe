var mongoose = require('mongoose');

var User = new mongoose.Schema({
	username:String,
	email: String,
	password: String,
	registeredAt: Date,
	lastLogin: Date,
	point: Number
});

exports.User = User;