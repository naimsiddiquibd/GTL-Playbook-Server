const mongoose = require("mongoose");

// Define the schema for the event
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  });

  // Define event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;