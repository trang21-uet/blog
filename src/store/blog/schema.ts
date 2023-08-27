import mongoose from "mongoose";

// Schema for a user
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Additional user properties, such as name, profile picture, etc.
  name: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "default.jpg",
  },
  // User roles (e.g., admin (author), reader)
  role: {
    type: String,
    enum: ["admin", "reader"],
    default: "reader",
  },
  // User's date of registration
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Schema for a blog post
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // Reference to the user who created the post
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Tags associated with the post
  tags: [
    {
      type: String,
    },
  ],
  // Date when the post was published
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  // Number of views for the post
  views: {
    type: Number,
    default: 0,
  },
});

// Schema for a comment on a blog post
const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  // Reference to the user who posted the comment
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Reference to the blog post the comment belongs to
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  // Date when the comment was posted
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the schemas as Mongoose models
const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);
const Comment = mongoose.model("Comment", CommentSchema);

// Export the models for use in other parts of the application
module.exports = {
  User,
  Post,
  Comment,
};
