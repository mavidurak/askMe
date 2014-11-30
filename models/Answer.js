var mongoose = require('mongoose');

var Answer = new mongoose.Schema({
	question:String,
   	text:String,
    createdBy:Schema.Types.ObjectId,
    createdAt:Date,
    votes: [],
    comments: [{
    	createdBy:Schema.Types.ObjectId,
        createdAt:Date,
        text:String
    }]
});

module.export = Answer;