const mongoose = require("mongoose");

// Define the Organizer schema
const organizerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    bio: { type: String },
    mobileNumber: { type: String },
    email: { type: String },
    facebookLink: { type: String },
    twitterLink: { type: String },
    linkedInLink: { type: String },
    instagramLink: { type: String },
    photo: { type: String }
  });
  

// Create the Organizer model
const Organizer = mongoose.model('Organizer', organizerSchema);

module.exports = Organizer;