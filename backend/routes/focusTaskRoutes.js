const express = require('express');
const FocusTask = require('../models/FocusTask'); 
const debug = require('debug')('app:focus-task');

const router = express.Router();

router.get('/settings', async (req, res) => {
  try {
    const { useremail } = req.query;
    if (!useremail) {
      debug('🔴 [FOCUS-TASK] Error: User email is required.');
      return res.status(400).json({ error: 'User email is required.' });
    }
    const settings = await FocusTask.findOne({ useremail });
    if (!settings) {
      debug('🔴 [FOCUS-TASK] Error: Settings not found for this user.');
      return res.status(404).json({ error: 'Settings not found for this user.' });
    }
    debug('🟢 [FOCUS-TASK] Settings fetched successfully for user: %s', useremail);
    return res.status(200).json(settings);
  } catch (error) {
    debug('🔴 [FOCUS-TASK] Error fetching settings: %s', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/settings', async (req, res) => {
  try {
    const { useremail,breakDuration,duration, } = req.body;
    debug('🟡 [FOCUS-TASK] Received focus settings: useremail: %s, breakDuration: %d, duration: %d', useremail, breakDuration, duration);
    const newSettings = new FocusTask({
      useremail,
      title: 'Focus Settings',  
      duration,               
      breakDuration,          
    });
    await newSettings.save();  
    debug('🟢 [FOCUS-TASK] Focus settings saved successfully: %O', newSettings);
    res.status(201).json(newSettings);  
  } catch (err) {
    debug('🔴 [FOCUS-TASK] Error saving settings: %s', err.message);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
