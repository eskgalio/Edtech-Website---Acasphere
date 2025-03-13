import React from 'react';
import { Link } from 'react-router-dom';

function SecuritySection() {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-400">Security & Permissions</h3>
      <p>User actions are logged for security purposes. Permission settings are available based on roles.</p>
      <h3 className="text-xl font-bold mt-4">Recent Activities</h3>
      <div className="bg-gray-800 p-4 rounded-lg mt-4 h-72 overflow-y-auto border border-gray-700">
        <ul className="space-y-2">
          <li className="flex justify-between items-center p-2 border-b border-gray-600 hover:bg-gray-600">
            <span>Project document updated by Alice</span>
            <span className="text-sm text-gray-400">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center p-2 border-b border-gray-600 hover:bg-gray-600">
            <span>New file 'Meeting Minutes' uploaded by Bob</span>
            <span className="text-sm text-gray-400">4 hours ago</span>
          </li>
        </ul>
      </div>
      <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg mt-4">
        <Link to="/group-activity" className='hover:text-white'>View Activity Logs</Link>
      </button>
    </div>
  );
}

export default SecuritySection;
