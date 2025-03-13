const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  maxParticipants: { type: Number, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      option1: { type: String, required: true },
      option2: { type: String, required: true },
      option3: { type: String, required: true },
      option4: { type: String, required: true },
      correctAnswer: { type: String, required: true },
    }
  ],
});

module.exports = mongoose.model('Event', EventSchema);
