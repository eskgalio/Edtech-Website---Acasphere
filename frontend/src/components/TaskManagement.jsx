import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TaskManagement() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Complete Assignment 5', dueDate: 'Sept 30' },
    { id: 2, description: 'Submit Project Proposal', dueDate: 'Oct 2' },
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      description: 'New Task',
      dueDate: 'Oct 5',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <section className="task-management">
      <h2 className="text-xl font-bold mb-4">Task Management</h2>
      <div className="task-list space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task bg-white text-black p-4 rounded-lg flex justify-between items-center shadow"
          >
            <p>{task.description}</p>
            <span>Due: {task.dueDate}</span>
            <button className="complete-task bg-green-500 text-white px-4 py-2 rounded-lg">
              Complete
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addTask}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        <Link to="/todo" className='hover:text-white'>Add Task</Link>
      </button>
    </section>
  );
}
