const express = require('express');
const router = express.Router();
const organizerController = require('../controllers/organizer.controller');

router.route('/')
.get(organizerController.getOrganizers)
.post(organizerController.createOrganizer)

module.exports = router;