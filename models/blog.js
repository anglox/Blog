//creating a DB model or schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

//pointing the created schema to our blog model and exporting it
const Blog = mongoose.model('Blog', blogSchema); //good practice is to make the names identical (it should be)
module.exports = Blog;

