const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
  code: String,
  language: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Snippet', snippetSchema);
