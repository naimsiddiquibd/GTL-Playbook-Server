const User = require('../models/Itinerary');
const multer = require("multer");

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Configure Multer to handle file uploads
const upload = multer({ dest: "uploads/" });

exports.getItineraries = async (req, res) => {
    try {
      const itineraries = await Itinerary.find({});
      res.status(200).json(itineraries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

exports.CreateItinerary = async (req, res) => {
    try {
      const itinerary = new Itinerary({
        title: req.body.title,
        description: req.body.description,
        day: req.body.day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
      });
  
      await itinerary.save();
  
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }