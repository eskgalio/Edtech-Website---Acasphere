import React from 'react';
import { Link } from 'react-router-dom';

const PrivacySettings = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-4">Privacy Settings</h3>
    <select className="w-full p-2 bg-gray-900 border border-gray-700 rounded mb-4">
      <option value="public">Public</option>
      <option value="private">Private</option>
      <option value="friends">Friends Only</option>
    </select>
    <div className="flex items-center justify-between">
      <span>Share my data with group members</span>
      <input type="checkbox" className="toggle-checkbox" />
    </div>
    <div className="flex items-center justify-between mt-4">
      <span>Allow others to find me via search</span>
      <input type="checkbox" className="toggle-checkbox" />
    </div>
  </div>
);

export default PrivacySettings;
