const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  due: { type: String, required: true },
  priority: { type: String, required: true },
  category: { type: String, required: true },
  useremail: { type: String, required: true },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
