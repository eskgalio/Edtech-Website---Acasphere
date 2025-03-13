import React from 'react';
import { Link } from 'react-router-dom';

const groups = [
  {
    id: 'alpha',
    name: 'Project Group Alpha',
    ongoingTasks: 3,
    members: 5,
    workspaceLink: '/group-workspace',
    tasks: [
      { title: 'Design Mockups', dueDate: '12th Oct' },
      { title: 'Prototype Review', dueDate: '15th Oct' },
    ],
    activities: [
      { description: 'John completed Design Mockups', time: '2 hours ago' },
      { description: 'Alice joined the group', time: '1 day ago' },
    ],
  },
  {
    id: 'beta',
    name: 'Marketing Team Beta',
    ongoingTasks: 5,
    members: 7,
    workspaceLink: '/group-workspace',
    tasks: [
      { title: 'Campaign Strategy', dueDate: '18th Oct' },
      { title: 'Content Calendar', dueDate: '20th Oct' },
    ],
    activities: [
      { description: 'Sam uploaded new campaign assets', time: '3 hours ago' },
      { description: 'Sara added Content Calendar', time: '1 day ago' },
    ],
  },
  {
    id: 'gamma',
    name: 'Research Squad Gamma',
    ongoingTasks: 2,
    members: 3,
    workspaceLink: '/group-workspace',
    tasks: [
      { title: 'Data Analysis', dueDate: '10th Oct' },
      { title: 'Report Draft', dueDate: '14th Oct' },
    ],
    activities: [
      { description: 'John reviewed Data Analysis', time: '5 hours ago' },
      { description: 'Alice submitted Draft', time: '2 days ago' },
    ],
  },
];

function CollaborationDashboard() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-blue-400 text-center mb-8">Group Collaboration Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div key={group.id} className="elevated-card hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-600 rounded-lg p-6 bg-gray-700">
            <h3 className="text-xl font-bold text-white">{group.name}</h3>
            <p className="mt-2 text-gray-300">Ongoing tasks: {group.ongoingTasks}</p>
            <p className="mt-1 text-gray-300">Members: {group.members}</p>
            <a href={group.workspaceLink} className="text-blue-400 mt-4 inline-block hover:text-blue-600 transition duration-300">Go to Workspace</a>
            
            <div className="bg-gray-800 p-4 mt-4 rounded-lg shadow-inner">
              <h4 className="font-semibold text-lg text-white">Tasks:</h4>
              <ul className="mt-2 space-y-2">
                {group.tasks.map((task, index) => (
                  <li key={index} className="flex justify-between hover:text-blue-400 transition duration-300">
                    <span>{task.title}</span>
                    <span className="text-sm text-gray-400">Due: {task.dueDate}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 mt-4 rounded-lg shadow-inner">
              <h4 className="font-semibold text-lg text-white">Recent Activities:</h4>
              <ul className="mt-2 space-y-2">
                {group.activities.map((activity, index) => (
                  <li key={index} className="flex justify-between hover:text-green-400 transition duration-300">
                    <span>{activity.description}</span>
                    <span className="text-sm text-gray-400">{activity.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full transition-transform transform hover:scale-105 duration-300">
              Leave Group
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CollaborationDashboard;
