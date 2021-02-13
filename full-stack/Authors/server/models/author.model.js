const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: String

}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);
