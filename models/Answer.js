var mongoose = require('mongoose');

var Answer = new mongoose.Schema({
	question :  { type: ObjectId, ref: 'Question' },
	text: String,
	createdBy : { type: ObjectId, ref: 'User' },
	createdAt : Date,
	comments: [{
		createdBy: { type: ObjectId, ref: 'User' },
		createdAt: Date,
		text: String,
	}}
});

module.export = Answer;