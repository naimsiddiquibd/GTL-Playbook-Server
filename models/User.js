const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

// Define user model
const User = mongoose.model("User", userSchema);

module.exports = User;