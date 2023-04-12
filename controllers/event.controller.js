const User = require('../models/Event');
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

exports.getEvents = async (req, res) => {
    try {
      const events = await Event.find({});
      res.status(200).json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  exports.createEvent = upload.single('coverImage'), async (req, res) => {
    try {
      const { title, description, startDate, endDate } = req.body;
      const coverImage = req.file.filename;
  
      // Create a new event using the Event model
      const event = new Event({
        title,
        description,
        coverImage,
        startDate,
        endDate,
      });
  
      // Save the new event to the database
      await event.save();
  
      res.status(201).json(event);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }