import React from 'react';
import { Link } from 'react-router-dom';

const NotificationPreferences = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span>Email Notifications</span>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
      <div className="flex items-center justify-between">
        <span>Push Notifications</span>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
      <div className="flex items-center justify-between">
        <span>Daily Summary Emails</span>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
    </div>
  </div>
);

export default NotificationPreferences;
