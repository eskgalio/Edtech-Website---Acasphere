import React from 'react';
import CollaborationDashboard from './CollaborationDashboard';
import { Link } from 'react-router-dom';

function MainDashboard() {
  return (
    <main className="flex-grow py-12 space-y-8">
      <div className="elevated-card mb-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-600 rounded-lg p-6 bg-gray-700">
        <h2 className="text-2xl font-semibold text-blue-400">Group Management</h2>
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 duration-300">
            <Link to="/group-create" className='hover:text-white'>+ Create Group</Link>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 duration-300">
            <Link to="/group-join" className='hover:text-white'>Join Group</Link>
          </button>
        </div>
      </div>
      <div className="elevated-card mb-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-600 rounded-lg p-6 bg-gray-700">
        <h2 className="text-2xl font-semibold text-blue-400">Dashboard Overview</h2>
        <div className="mt-4 flex justify-between text-gray-300">
          <p><span className="font-bold text-white">Active Groups:</span> 3</p>
          <p><span className="font-bold text-white">Total Members:</span> 15</p>
          <p><span className="font-bold text-white">Recent Activities:</span> 18 tasks completed this week</p>
        </div>
      </div>
      <CollaborationDashboard />
    </main>
  );
}

export default MainDashboard;
