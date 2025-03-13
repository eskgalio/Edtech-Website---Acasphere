const mongoose = require('mongoose');

const NotesLogSchema = new mongoose.Schema({
  notes: { type: String, required: true },
  priority: { type: String, required: true },
  deadline: { type: String },
  tags: { type: String },
  dependencies: { type: String },
  status: { type: String, required: true },
  useremail: { type: String },
});

module.exports = mongoose.model('NotesLog', NotesLogSchema);
