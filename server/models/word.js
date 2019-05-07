const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Words count
let Words = new Schema({
    word: {
        type: String
    },
    count: {
        type: Number
    }
}, {
        collection: 'word-count'
    });

module.exports = mongoose.model('Words', Words);