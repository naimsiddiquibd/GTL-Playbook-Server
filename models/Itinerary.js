const mongoose = require("mongoose");

// Define the schema for the itinerary
const itinerarySchema = new mongoose.Schema({
  title: String,
  description: String,
  day: String,
  start_time: String,
  end_time: String,
});

// Define Itinerary model
const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;