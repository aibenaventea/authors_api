const mongoose = require('../config/mongoose')

const AuthorsSchema = new mongoose.Schema({
    authorName: {type: String, required: [true, 'authorName: is empty'], minlength: [3, 'authorName: must be 3 char at least']},
    authorQuotes:[{
        quote: {type: String, minlength: [3, 'authorName: must be 3 char at least']},
        vote: {type: Number, default: 0}
    }]
}, {timestamps:true}
);

const Authors = mongoose.model('author', AuthorsSchema);

module.exports = Authors;