const express = require('express');
const Task = require('../models/Task');
const debug = require('debug')('app:task');

const router = express.Router();

router.get('/', async (req, res) => {
  debug('🟡 [TASK-ROUTE] Fetching all tasks');
  try {
    const tasks = await Task.find();
    debug('🟡 [TASK-ROUTE] Tasks retrieved: %O', tasks);
    res.json(tasks);
  } catch (err) {
    debug('🟡 [TASK-ROUTE] Error fetching tasks: %O', err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

router.post('/', async (req, res) => {
  const { title, due, priority, category, useremail } = req.body;

  if (!title || !due || !priority || !category || !useremail) {
    debug('🟡 [TASK-ROUTE] Missing required fields: %O', req.body);
    return res.status(400).json({ message: 'All fields are required' });
  }

  debug('🟡 [TASK-ROUTE] Creating task with data: %O', req.body);
  try {
    const newTask = new Task({ title, due, priority, category, useremail });
    await newTask.save();
    debug('🟡 [TASK-ROUTE] Task created: %O', newTask);
    res.status(201).json(newTask);
  } catch (err) {
    debug('🟡 [TASK-ROUTE] Error creating task: %O', err);
    console.error('Error creating task:', err.message);
    res.status(500).json({ message: 'Error creating task', error: err.message });
  }
});

router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params; 
  debug('🟡 [TASK-ROUTE] Deleting task with ID: %s', id);
  try {
    await Task.findByIdAndDelete(id);
    debug('🟡 [TASK-ROUTE] Task deleted successfully: %s', id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    debug('🟡 [TASK-ROUTE] Error deleting task: %O', err);
    res.status(500).json({ message: 'Error deleting task', error: err });
  }
});

module.exports = router;
