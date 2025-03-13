const mongoose = require('mongoose');

const repositorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  useremail: { type: String },
  filePath: { type: String, required: true },
  stars: { type: Number, default: 0 },
  comments: [
    {
      user: { type: String },
      text: { type: String },
    },
  ],
});

const Repository = mongoose.model('Repository', repositorySchema);

module.exports = Repository;
