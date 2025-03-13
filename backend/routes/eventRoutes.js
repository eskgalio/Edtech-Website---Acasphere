const express = require('express');
const { createEvent, getAllEvents, getEventById } = require('../controller/eventController');
const router = express.Router();

router.post('/', createEvent);

router.get('/', getAllEvents);

router.get('/:id', getEventById);

module.exports = router;
