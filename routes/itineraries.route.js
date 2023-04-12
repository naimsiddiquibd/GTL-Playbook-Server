const express = require('express');
const router = express.Router();
const itinerariesController = require('../controllers/itineraries.controller');

router.route('/')
.get(itinerariesController.getItineraries)
.post(itinerariesController.CreateItinerary)

module.exports = router;