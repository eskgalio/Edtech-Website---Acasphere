import React from 'react';
import { Link } from 'react-router-dom';

const TaskManagementSection = () => (
  <section>
    <br />
    <h2 className="text-3xl font-semibold section-title mb-6">Task Management</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-700 card hover-effect border  rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4">Kanban Board</h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-center text-gray-400">Kanban Board Coming Soon</p>
        </div>
      </div>
      <div className="bg-gray-700 card hover-effect border  rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4">Gantt Chart</h3>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-center text-gray-400">Gantt Chart Coming Soon</p>
        </div>
      </div>
    </div>
  </section>
);

export default TaskManagementSection;
