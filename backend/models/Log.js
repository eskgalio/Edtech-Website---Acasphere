const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  code: String,
  language: String,
  output: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Log', logSchema);
