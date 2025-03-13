const express = require('express');
const Log = require('../models/Log');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve logs' });
  }
});

module.exports = router;
