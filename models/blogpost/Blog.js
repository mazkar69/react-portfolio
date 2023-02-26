const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description:{
    type:String,
    required:true
  },
  content: {
    type: String,
    required: true
  },

  tags: [{
    type: String,
    lowercase: true
  }],

  sortBy: [{
    type: String,
    lowercase: true
  }],

  featuredImage: {
    type: String,
    required: true
  },
  category:{
    type:String,
    required:true,
    lowercase: true
  },
  views:{
    type:Number,
    default:0,
  },
  date: {
    type: Date,
    default: Date.now
  },

});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;