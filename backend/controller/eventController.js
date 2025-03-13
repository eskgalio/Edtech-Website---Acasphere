const Event = require('../models/Event');

const createEvent = async (req, res) => {
  const { name, date, description, category, location, maxParticipants, questions } = req.body;

  if (!name || !date || !description || !category || !location || !maxParticipants) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newEvent = new Event({
      name,
      date,
      description,
      category,
      location,
      maxParticipants,
      questions,
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating event', error: error.message });
  }
};

// Fetch all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Error fetching events' });
  }
};

const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id); // Fetch the event by ID
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ message: 'Error fetching event' });
  }
};

const joinEvent = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: 'You have successfully joined the event!' });
  } catch (error) {
    console.error('Error joining event:', error);
    res.status(500).json({ success: false, message: 'Failed to join the event.' });
  }
};


module.exports = { createEvent,getAllEvents, getEventById, joinEvent };

