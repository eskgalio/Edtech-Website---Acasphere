import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-4">User Profile</h3>
    <form className="space-y-4">
      <input type="text" placeholder="Profile Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
      <textarea placeholder="Profile Description" rows="3" className="w-full p-2 bg-gray-900 border border-gray-700 rounded"></textarea>
      <input type="text" placeholder="Enter your skills or expertise" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
      <select className="w-full p-2 bg-gray-900 border border-gray-700 rounded">
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="busy">Busy</option>
      </select>
      <button type="button" className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Update Profile</button>
    </form>
  </div>
);

export default UserProfile;
