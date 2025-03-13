const debug = require('debug');
const NotesLog = require('../models/NotesLog');
const notesDebug = debug('app:notes');

const logNotes = async (req, res) => {
  const { notes, priority, deadline, tags, dependencies, status, timestamp,useremail } = req.body;

  try {
    notesDebug('🟡 [LOG NOTES] Received data: %O', { notes, priority, deadline, tags, dependencies, status, timestamp, useremail }); 
    const logEntry = new NotesLog({
      notes,
      priority,
      deadline,
      tags,
      dependencies,
      status,
      timestamp,
      useremail,
    });

    await logEntry.save();
    notesDebug('🟢 [LOG NOTES] Notes logged successfully: %O', logEntry); 
    res.status(201).json({ message: 'Notes logged successfully', data: logEntry });
  } catch (error) {
    notesDebug('🔴 [LOG NOTES] Error logging notes: %s', error.message); 
    console.error('Error logging notes:', error);
    res.status(500).json({ error: 'Failed to log notes' });
  }
};

module.exports = { logNotes };
