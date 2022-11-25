const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/authors_api_db', {useNewUrlParser:true});

module.exports = mongoose