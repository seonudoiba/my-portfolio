const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  // Add more fields as needed
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
