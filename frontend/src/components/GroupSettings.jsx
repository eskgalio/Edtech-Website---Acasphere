import React from 'react';
import { Link } from 'react-router-dom';

const GroupSettings = () => (
  <div className="card p-6 hover-pop-up mx-12 bg-gray-700 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-4">Group Settings</h3>
    <form className="space-y-4" id="group-settings-form">
      <input type="text" placeholder="Group Name" className="border w-full p-2 bg-gray-800 text-white rounded" />
      <textarea placeholder="Group Description" rows="3" className="border w-full p-2 bg-gray-800 text-white rounded"></textarea>

      <h4 className="text-lg font-semibold mt-4">Privacy Settings</h4>
      <select className="border w-full p-2 bg-gray-800 text-white rounded">
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>

      <h4 className="text-lg font-semibold mt-4">Roles & Permissions</h4>
      <select className="border w-full p-2 bg-gray-800 text-white rounded">
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
        <option value="member">Member</option>
      </select>

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"><Link to="/group-workspace" className='hover:text-white'>Save Settings</Link></button>
    </form>
  </div>
);

export default GroupSettings;
