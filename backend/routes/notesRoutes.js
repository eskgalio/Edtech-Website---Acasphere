const express = require('express');
const router = express.Router();
const notesController = require('../controller/notesController');
const debug = require('debug')('app:notes');

router.post('/log', (req, res, next) => {
    debug('🟡 [NOTES-ROUTE] Received request to log notes: %O', req.body);
    next();
  }, notesController.logNotes);

module.exports = router;
