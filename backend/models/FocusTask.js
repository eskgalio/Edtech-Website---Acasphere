const mongoose = require('mongoose');

const focusTaskSchema = new mongoose.Schema(
  {
    useremail: { type: String },
    title: { type: String, required: true },
    duration: { type: Number, required: true },  
    breakDuration: { type: Number, required: true }, 
  },
  { timestamps: true } 
);

module.exports = mongoose.model('FocusTask', focusTaskSchema);
