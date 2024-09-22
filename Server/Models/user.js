import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Username is required
    unique: true, // Ensure the username is unique
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Ensure the email is unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

export default User;
