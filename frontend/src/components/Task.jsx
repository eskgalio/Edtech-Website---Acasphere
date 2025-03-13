import React, { useState, useEffect } from 'react';

const ToDoReminderTimetable = () => {
  // State for To-Do List
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Complete Math Assignment', isComplete: false },
    { id: 2, task: 'Read History Chapter 3', isComplete: false }
  ]);
  const [newTask, setNewTask] = useState('');

  // State for Reminders
  const [reminders, setReminders] = useState([
    { id: 1, message: 'Physics Lab in 30 mins', time: '13:00' },
  ]);

  // State for Timetable
  const [entries, setEntries] = useState([
    { day: 'Monday', time: '09:00', subject: 'Math Homework' },
    { day: 'Wednesday', time: '14:00', subject: 'Physics Lab' }
  ]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), task: newTask, isComplete: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task)
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-reminder-timetable">
      <h1>Student Productivity Dashboard</h1>

      {/* To-Do List Section */}
      <section className="todo-section">
        <h2>To-Do List</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.isComplete ? 'completed' : ''}>
              <span onClick={() => toggleTaskCompletion(task.id)}>{task.task}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </section>

      {/* Reminder Section */}
      <section className="reminder-section">
        <h2>Reminders</h2>
        <ul>
          {reminders.map(reminder => (
            <li key={reminder.id}>
              {reminder.message} at {reminder.time}
            </li>
          ))}
        </ul>
      </section>

      {/* Timetable Section */}
      <section className="timetable-section">
        <h2>Study Timetable</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              {entry.day}: {entry.time} - {entry.subject}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ToDoReminderTimetable;
