const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const debug = require('debug')('app:contact');

router.post('/', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    debug('🟡 [CONTACT] Received contact data: %O', req.body);

    const newContact = new Contact({ firstName, lastName, email, message });
    await newContact.save(); 
    debug('🟢 [CONTACT] Contact message stored successfully!');

    res.status(200).json({ message: 'Contact message stored successfully!' });
  } catch (error) {
    debug('🔴 [CONTACT] Error storing message: %s', error.message); 
    res.status(500).json({ error: 'Error storing contact message', details: error.message });
  }
});

module.exports = router;
