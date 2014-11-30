var mongoose = require('mongoose');

var AnswerSchema = new Schema({
    question :  { type: ObjectId, ref: 'QuestionSchema' },
    text: String,
    createdBy : { type: ObjectId, ref: 'UserSchema' },
    createdAt : Date,
    votes: [],
    comments: [{
        createdBy: { type: ObjectId, ref: 'UserSchema' },
        createdAt: Date,
        text: String,
    }}
});

module.export = Answer;