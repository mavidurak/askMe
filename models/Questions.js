var mongoose = require('mongoose');

var QuestionsShema = new mongoose.Schema({
	header:String,
	description:String,
	askedBy: { type: ObjectId, ref: 'UserSchema' },
	askedAt:Date,
	lastUpdated:Date
});

exports.Questions = Questions;
