const express = require('express');
const Snippet = require('../models/Snippet');

const router = express.Router();

router.post('/', async (req, res) => {
  const { code, language } = req.body;

  const snippet = new Snippet({ code, language });
  try {
    await snippet.save();
    res.status(201).json({ message: 'Snippet saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save snippet' });
  }
});

router.get('/', async (req, res) => {
  try {
    const snippets = await Snippet.find();
    res.json(snippets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load snippets' });
  }
});

module.exports = router;
