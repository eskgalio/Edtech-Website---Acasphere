import React from 'react';
import { Link } from 'react-router-dom';

const AccountManagement = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-4">Account Management</h3>
    <form className="space-y-4">
      <input type="password" placeholder="Current Password" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
      <input type="password" placeholder="New Password" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
      <input type="password" placeholder="Confirm New Password" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" />
      <button type="button" className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Update Password</button>
    </form>
  </div>
);

export default AccountManagement;
