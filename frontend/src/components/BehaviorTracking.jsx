import React from 'react';
import { Link } from 'react-router-dom';

const BehaviorTracking = () => (
  <div className="mx-12 mt-12">
    <h3 className="text-2xl text-center font-semibold mb-4">Group Behavior Tracking</h3>
    <div className="card p-6 hover-pop-up bg-gray-700 rounded-lg shadow-lg">
      <h4 className="text-lg font-semibold">Recent Activities</h4>
      <ul className="mt-4 space-y-2">
        <li className="p-3 bg-gray-800 rounded-lg border">John Doe added a new task: Design Mockup.</li>
        <li className="p-3 bg-gray-800 rounded-lg border">Jane Smith commented on the project brief.</li>
        <li className="p-3 bg-gray-800 rounded-lg border">Group meeting scheduled for tomorrow at 3 PM.</li>
      </ul>
    </div>
  </div>
);

export default BehaviorTracking;
