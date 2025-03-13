import React from 'react';
import { Link } from 'react-router-dom';

const tasks = {
  daily: [
    { name: 'Complete 30 minutes of study', progress: 80 },
    { name: 'Practice coding challenges', progress: 60 },
    { name: 'Read a technical article', progress: 40 },
  ],
  weekly: [
    { name: 'Submit project report', progress: 30 },
    { name: 'Participate in forum discussions', progress: 70 },
    { name: 'Complete 3 tutorials', progress: 50 },
  ],
  monthly: [
    { name: 'Write a blog post', progress: 50 },
    { name: 'Attend a webinar', progress: 40 },
    { name: 'Complete a certification course', progress: 20 },
  ],
};

const TaskSection = ({ title, tasks }) => (
  <div className="bg-gray-700 rounded-xl p-6 hover-pop-up shadow-lg transform transition duration-300 hover:scale-105">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">{title}</h2>
    <ul className="space-y-4">
      {tasks.map((task, idx) => (
        <li key={idx} className="bg-gray-800 rounded-md p-4 flex flex-col shadow-md">
          <span className="text-lg font-medium">{task.name}</span>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-400 mt-1">{task.progress}% complete</span>
        </li>
      ))}
    </ul>
  </div>
);

const TaskSections = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <TaskSection title="Daily Tasks" tasks={tasks.daily} />
    <TaskSection title="Weekly Tasks" tasks={tasks.weekly} />
    <TaskSection title="Monthly Tasks" tasks={tasks.monthly} />
  </div>
);

export default TaskSections;
