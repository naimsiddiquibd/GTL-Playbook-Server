const User = require('../models/Organizer');
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

exports.getOrganizers = async (req, res) => {
    try {
      const organizers = await Organizer.find({});
      res.status(200).json({ organizers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

exports.createOrganizer = upload.single("photo"), async (req, res) => {
    try {
      const newOrganizer = new Organizer({
        name: req.body.name,
        designation: req.body.designation,
        bio: req.body.bio,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email,
        facebookLink: req.body.facebookLink,
        twitterLink: req.body.twitterLink,
        linkedInLink: req.body.linkedInLink,
        instagramLink: req.body.instagramLink,
        photo: req.file ? req.file.filename : null,
      });
  
      const savedOrganizer = await newOrganizer.save();
  
      res.status(201).json({ organizer: savedOrganizer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
