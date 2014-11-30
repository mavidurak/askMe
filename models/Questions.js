var mongoose = require('mongoose');

var Question = new mongoose.Schema({
	header:String,
	description:String,
	askedBy: { type: ObjectId, ref: 'User' },
	askedAt:Date,
	lastUpdated:Date
});

exports.Question = Question;
