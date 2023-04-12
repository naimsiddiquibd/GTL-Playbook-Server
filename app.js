const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//middleware
app.use(express.json());
app.use(cors());

//routes
const userRoute = require("./routes/user.route");
const eventRoute = require("./routes/event.route");
const itineraries = require("./routes/itineraries.route");
const organizerRoute = require("./routes/orgaziner.route");

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User API
app.use("/users", userRoute);

// Event API
app.use("/events", eventRoute);

// Organizer API
app.use("/api/organizers", organizerRoute);

// Itinerary API
app.use("/itineraries", itineraries);

app.get("/", (req, res) => {
  res.send("YeY! Server is running!");
});

module.exports = app;
